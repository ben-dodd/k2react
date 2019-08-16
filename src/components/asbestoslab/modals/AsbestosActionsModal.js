import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import classNames from 'classnames';
import { connect } from "react-redux";
import store from "../../../store";
import { ASBESTOS_ACTIONS } from "../../../constants/modal-types";
import { cocsRef, } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import FormControl from "@material-ui/core/FormControl";
import ReceiveIcon from "@material-ui/icons/Inbox";
import StartAnalysisIcon from "@material-ui/icons/Colorize";
import CancelActionIcon from "@material-ui/icons/Block";
import ProceedActionIcon from "@material-ui/icons/Forward";
import UnresolvedActionIcon from "@material-ui/icons/Report";
import VerifyIcon from "@material-ui/icons/CheckCircleOutline";
import { hideModal, } from "../../../actions/modal";
import {
  writeDescription,
  receiveSample,
  receiveSamples,
  startAnalysis,
  startAnalyses,
  verifySample,
  verifySamples,
  writeShorthandResult,
  getBasicResult,
  checkTestCertificateIssue,
  issueTestCertificate,
  getPersonnel,
  writeDates
} from "../../../actions/asbestosLab";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    me: state.local.me,
    staff: state.local.staff,
    sessionID: state.asbestosLab.sessionID,
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    samples: state.asbestosLab.samples,
    noAsbestosResultReasons: state.const.noAsbestosResultReasons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

class AsbestosActionsModal extends React.Component {
  state = {
    samples: {},
  };

  handleEnter = () => {
    let sampleMap = {};
    Object.values(this.props.samples[this.props.modalProps.job.uid]).filter(sample => sample.deleted === false && sample.cocUid === this.props.modalProps.job.uid).forEach(sample => {
      sampleMap[sample.sampleNumber] = {
        ...sample,
        original: sample[this.props.modalProps.field],
        originalNoAsbestosResultReason: sample.originalNoAsbestosResultReason,
        now: sample[this.props.modalProps.field],
      };
    });

    this.setState({
      samples: sampleMap,
      mode: 'actions',
    });
  };

  handleClick = sample => {
    if (this.props.modalProps.field === 'issue') return null;
    let startDate = null;
    let now = false;
    if (!sample.now) {
      startDate = new Date();
      now = true;
    }
    this.setState({
      samples: {
        ...this.state.samples,
        [sample.sampleNumber]: {
          ...this.state.samples[sample.sampleNumber],
          now,
          startDate,
        }
      }
    })
  };

  handleClickAll = () => {
    let sampleMap = this.state.samples;
    Object.values(this.state.samples).forEach(sample => {
      if (!sample.now) {
        sampleMap[sample.sampleNumber] = {
          ...sampleMap[sample.sampleNumber],
          now: true,
          startDate: new Date(),
        };
      }
    });
    this.setState({
      samples: sampleMap,
    });
  }

  submit = () => {
    let close = true;
    let checks = Object.values(this.state.samples).map(sample => ({...this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], ...sample}));
    let jobIssues = this.props.modalProps.job.issues ? this.props.modalProps.job.issues : {};
    let issuesIncomplete = false;
    let blockAll = false;
    if (this.state.mode === 'issues') {
      let sampleGates = {};
      Object.values(this.state.issues).forEach(issue => {
        if (issue.action !== 'proceed' && issue.action !== 'cancel') issuesIncomplete = true;
        console.log(issue);
        jobIssues[issue.uid] = {
          action: issue.action,
          sampleUid: issue.sample ? issue.sample.uid : null,
          description: issue.description,
          type: issue.type,
          noAsbestosResultReason: issue.noAsbestosResultReason ? issue.noAsbestosResultReason : null,
          comment: issue.comment ? issue.comment : null,
        };
        if (issue.action !== 'proceed') {
          if (this.props.modalProps.field === 'issue') {
            console.log('Issue not proceed and is final issue');
            blockAll = true;
          } else sampleGates[issue.sample.sampleNumber] = true;
        }
      });
      this.setState({
        issuesIncomplete,
        blockAll,
      });
      if (!blockAll) {
        if (!issuesIncomplete) {
          // All issues are decided, continue with
          console.log(this.state.issues);
          if (this.props.modalProps.field === 'issue') issueTestCertificate(this.props.modalProps.job, this.state.samples, this.props.modalProps.job.currentVersion ? parseInt(this.props.modalProps.job.currentVersion)+1 : 1,
            this.state.issues.versionChanges && this.state.issues.versionChanges.comment ? this.state.issues.versionChanges.comment : '', this.props.staff, this.props.me);
          checks.filter(sample => (sample.now !== sample.original || sample.noAsbestosResultReason !== sample.originalNoAsbestosResultReason) && !sampleGates[sample.sampleNumber]).forEach(sample => {
            if (this.props.modalProps.field === 'receivedByLab') receiveSample(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
            else if (this.props.modalProps.field === 'analysisStart') startAnalysis(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
            else if (this.props.modalProps.field === 'verified') {
              if (sample.noAsbestosResultReason) {
                verifySample(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate, {noAsbestosResultReason: sample.noAsbestosResultReason});
              } else {
                verifySample(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
              }
            }
            // if (this.props.modalProps.field === 'issue') checkTestCertificateIssue();
          });
          cocsRef.doc(this.props.modalProps.job.uid).update({ issues: jobIssues });
          this.props.hideModal();
        }
      }
    } else {
      let checkMap = {};
      let checks = Object.values(this.state.samples).map(sample => ({...this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], ...sample}));

      if (this.props.modalProps.field === 'receivedByLab') checkMap = receiveSamples(checks);
      else if (this.props.modalProps.field === 'analysisStart') checkMap = startAnalyses(checks);
      else if (this.props.modalProps.field === 'verified') checkMap = verifySamples(checks, this.props.modalProps.job, this.props.me.uid);
      else if (this.props.modalProps.field === 'issue') checkMap = checkTestCertificateIssue(this.props.samples[this.props.modalProps.job.uid], this.props.modalProps.job, this.props.me.uid);
      let jobIssues = this.props.modalProps.job.issues ? this.props.modalProps.job.issues : {};
      Object.values(checkMap).forEach(check => {
        if (jobIssues[check.uid] && jobIssues[check.uid].action) checkMap[check.uid] = {
          ...checkMap[check.uid],
          action: jobIssues[check.uid].action,
        };
      });
      if (Object.values(checkMap).length === 0) {
        // No problems with any samples, do actions
        if (this.props.modalProps.field === 'issue') issueTestCertificate(this.props.modalProps.job, this.state.samples, 1, "First issue.", this.props.staff, this.props.me);
        else checks.filter(sample => sample.now !== sample.original).forEach(sample => {
          if (this.props.modalProps.field === 'receivedByLab') receiveSample(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
          else if (this.props.modalProps.field === 'analysisStart') startAnalysis(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
          else if (this.props.modalProps.field === 'verified') verifySample(this.props.samples[this.props.modalProps.job.uid][sample.sampleNumber], this.props.modalProps.job, this.props.samples, this.props.sessionID, this.props.me, sample.startDate);
        });
        this.props.hideModal();
      } else {
        // Review issues with samples
        this.setState({
          mode: 'issues',
          issues: checkMap,
        })
      }
    }
  }

  render() {
    const { classes, modalProps, modalType, } = this.props;

    return (
      modalType === ASBESTOS_ACTIONS ? <Dialog
        open={modalType === ASBESTOS_ACTIONS}
        onClose={this.props.hideModal}
        maxWidth={(modalProps.field === 'verified' || modalProps.field === 'issue') && this.state.mode !== 'issues' ? "md" : "sm"}
        fullWidth={true}
        onEnter={this.handleEnter}
        disableBackdropClick={true}
        scroll="body"
      >
        <DialogTitle>{modalProps.title ? modalProps.title : ''}</DialogTitle>
        <DialogContent>
          {this.state.blockAll ? <div className={classes.warningText}>Not All Issues Have Been Resolved. The Test Certificate Will Not Be Issued.</div>
          : this.state.mode === 'actions' ? <div>
          <Button
            className={classes.buttonIconText}
            onClick={this.handleClickAll}
          >
            {modalProps.field === 'receivedByLab' && <span><ReceiveIcon className={classes.iconRegular} /> Receive All Samples</span>}
            {modalProps.field === 'analysisStart' && <span><StartAnalysisIcon className={classes.iconRegular} /> Start Analysis On All Samples</span>}
            {modalProps.field === 'verified' && <span><VerifyIcon className={classes.iconRegular} /> Verify All Samples</span>}

          </Button>
          {modalProps.field === 'issue' &&
            <div>
              <span className={classes.headingInline}>Sampled by:</span>{" "}
              <span className={ classes.infoLight }>
                {this.state.samples ? getPersonnel(Object.values(this.state.samples), 'sampledBy', null, true).map(e => e.name).join(', ') : 'Not specified'}
              </span>
              <br />
              <span className={classes.headingInline}>Date(s) Sampled:</span>{" "}
              <span className={ classes.infoLight }>
                {this.state.samples ? writeDates(Object.values(this.state.samples), 'sampleDate') : 'Not specified'}
              </span>
              <br />
              <span className={classes.headingInline}>Analysis by:</span>{" "}
              <span className={ classes.infoLight }>
                {this.state.samples ? getPersonnel(Object.values(this.state.samples), 'analyst', null, true).map(e => e.name).join(', ') : "Not specified"}
              </span>
            </div>
          }
          {this.state.samples && Object.values(this.state.samples).map(sample => (<div key={sample.sampleNumber}>
              <div className={modalProps.field !== 'issue' ? classes.flexRowHoverButton : sample.verified ? classes.flexRowHoverPretty : classes.flexRowHoverDisabled}
                onClick={() => this.handleClick(sample)}>
                <div className={classes.flexRowLeftAlignEllipsis}>
                  <div className={classes.spacerSmall} />
                  <div className={sample.now ? classes.circleShadedHighlighted : (modalProps.field === 'issue' && !sample.verified) ? classes.circleShadedDisabled : classes.circleShaded}>
                    {sample.sampleNumber}
                  </div>
                  <div>{writeDescription(sample)}</div>
                </div>
                <div className={classes.flexRowRightAlign}>
                  {(modalProps.field === 'verified' || modalProps.field === 'issue') &&
                    <span className={classes.flexRow}>
                      <span className={(modalProps.field === 'issue' && !sample.verified) ? classes.roundButtonShadedLongDisabled
                        : getBasicResult(sample) === 'none' ? classes.roundButtonShadedLong : getBasicResult(sample) === 'negative' ? classes.roundButtonShadedLongGreen : classes.roundButtonShadedLongRed}>
                        {writeShorthandResult(sample.result)}
                      </span>
                      <span className={classes.spacerSmall} />
                      <Tooltip title={'Weight on Receipt'}><div className={(modalProps.field === 'issue' && !sample.verified) ? classes.roundButtonShadedDisabled :
                      classes.roundButtonShaded}>{sample.weightReceived ? `${sample.weightReceived}g` : 'NO WEIGHT'}</div></Tooltip>
                    </span>
                  }
                  {modalProps.field === 'receivedByLab' && <ReceiveIcon className={sample.now ? classes.iconRegularGreen : classes.iconRegular} />}
                  {modalProps.field === 'analysisStart' && <StartAnalysisIcon className={sample.now ? classes.iconRegularGreen : classes.iconRegular} />}
                  {modalProps.field === 'verified' && <VerifyIcon className={sample.now ? classes.iconRegularGreen : classes.iconRegular} />}
                </div>
              </div>
            </div>
            )
          )}</div>
          : this.state.issues &&
          <div>
            {this.state.issuesIncomplete && <div className={classes.boldRedWarningText}>Make A Decision on All Issues Before Continuing</div>}
            {Object.values(this.state.issues).map(issue => (
              this.issueCard(issue)
            ))}
          </div>
        }
        </DialogContent>
        <DialogActions>
          {this.state.blockAll ?
            <Button onClick={() => this.setState({ mode: 'issues', blockAll: false, })} color="secondary">
              Back
            </Button>
          : this.state.mode === 'actions' ?
            <Button onClick={() => this.props.hideModal()} color="secondary">
              Cancel
            </Button> :
            <Button onClick={() => this.setState({ mode: 'actions' })} color="secondary">
              Back
            </Button>
          }
          {this.state.blockAll ?
            <Button
              onClick={this.props.hideModal}
              color="primary"
            >
              OK
            </Button>
          : <Button
            onClick={() => {
              this.submit();
            }}
            color="primary"
          >
            Submit
          </Button>}
        </DialogActions>
      </Dialog> : null
    );
  }

  issueCard = issue => {
    let yes = `Issue Resolved, Proceed with Action`;
    if (issue.type === 'check') yes = `This is Correct`;
    let no = `Cancel Action on this Sample`;
    if (this.props.modalProps.field === 'verified') no = `Do not verify this sample`;
    if (issue.type === 'check') no =`This Needs Fixing`;
    if (issue.yes) yes = issue.yes;
    if (issue.no) no = issue.no;
    return <Card key={issue.uid} className={classNames(this.props.classes.paddingAllMedium, this.props.classes.marginsAllMedium)}>
      <CardHeader
        avatar={
          <Avatar className={(issue.action === undefined || issue.action === null) ? this.props.classes.avatarRegularOrange :
          issue.action === 'proceed' ? this.props.classes.avatarRegularGreen :
          this.props.classes.avatarRegularRed}>
            {(issue.action === undefined || issue.action === null) ? <UnresolvedActionIcon /> :
            issue.action === 'proceed' ? <ProceedActionIcon /> :
            <CancelActionIcon />}
          </Avatar>
        }
        title={issue.sample ? `${issue.sample.jobNumber}-${issue.sample.sampleNumber} ${issue.sample.description}` : 'Issue'}
      />
      <CardContent>
        {issue.description}
        {issue.type === 'noresult' && (issue.action == undefined || issue.action == null) &&
          <FormControl component="fieldset">
            <RadioGroup
              id={'noAsbestosResultReason'}
              name={'noAsbestosResultReason'}
              value={issue.noAsbestosResultReason ? issue.noAsbestosResultReason : 'notAnalysed' }
              row
              onChange={e => {
                this.setState({
                  samples: {
                    ...this.state.samples,
                    [issue.sample.sampleNumber]: {
                      ...this.state.samples[issue.sample.sampleNumber],
                      noAsbestosResultReason: e.target.value,
                    },
                  },
                  issues: {
                    ...this.state.issues,
                    [issue.uid]: {
                      ...this.state.issues[issue.uid],
                      noAsbestosResultReason: e.target.value,
                    },
                  },
                });
              }}
            >
              {this.props.noAsbestosResultReasons && this.props.noAsbestosResultReasons.map(select => {
                return (<FormControlLabel key={select.value} value={select.value} control={<Radio />} label={select.label} />);
              })}
            </RadioGroup>
            <FormHelperText style={{ width: 500, }}>Select the reason for reporting no asbestos result.</FormHelperText>
          </FormControl>
        }
        {issue.type === 'noresult' && issue.action !== undefined && issue.action !== null &&
          <div className={this.props.classes.commentBox}>
            {issue.noAsbestosResultReason ? this.props.noAsbestosResultReasons.filter(e => e.value === issue.noAsbestosResultReason)[0].label : 'Not Analysed'}
          </div>
        }
        {issue.action === undefined || issue.action === null ? <TextField
          value={issue.comment ? issue.comment : ''}
          label={'Comment'}
          className={this.props.classes.commentBoxNoBorder}
          multiline={true}
          rows={3}
          onChange={e => {
            this.setState({
              issues: {
                ...this.state.issues,
                [issue.uid]: {
                  ...this.state.issues[issue.uid],
                  comment: e.target.value,
                },
              },
            });
          }}
        /> :
        <div>
          {issue.comment !== undefined && issue.comment !== '' && <div className={this.props.classes.commentBox}>{issue.comment}</div>}
        </div>
      }
      </CardContent>
      {issue.action === undefined || issue.action === null ?
        <CardActions>
          <Button size="small" color="secondary" onClick={() => {
            this.setState({
              issues: {
                ...this.state.issues,
                [issue.uid]: {
                  ...this.state.issues[issue.uid],
                  action: 'cancel',
                }
              }
            });
          }}>
            {no}
          </Button>
          {issue.type !== 'block' && <Button size="small" color="primary" disabled={issue.action === 'proceed'} onClick={() => {
            this.setState({
              issues: {
                ...this.state.issues,
                [issue.uid]: {
                  ...this.state.issues[issue.uid],
                  action: 'proceed',
                }
              }
            });
          }}>
            {yes}
          </Button>}
        </CardActions> :
        <CardActions>
          <Button size="small" color="inherit" onClick={() => {
            this.setState({
              issues: {
                ...this.state.issues,
                [issue.uid]: {
                  ...this.state.issues[issue.uid],
                  action: null,
                }
              }
            });
          }}>
            Change Decision
          </Button>
        </CardActions>
      }
    </Card>;
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsbestosActionsModal)
);
