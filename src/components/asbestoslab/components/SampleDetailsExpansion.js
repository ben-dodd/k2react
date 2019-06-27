import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import {
  cocsRef,
  asbestosAnalysisRef,
  firebase,
  auth,
  asbestosSamplesRef,
} from "../../../config/firebase";
import moment from "moment";
import momentbusinessdays from "moment-business-days";
import momenttimezone from "moment-timezone";
import momentbusinesstime from "moment-business-time";
import {
  fetchCocs,
  fetchSamples,
  logSample,
  writeResult,
  getStats,
  writeDescription,
  getSampleColours,
  getBasicResult,
  receiveSample,
  startAnalysis,
  toggleResult,
  verifySample,
} from "../../../actions/asbestosLab";
import { syncJobWithWFM } from "../../../actions/local";
import { showModal } from "../../../actions/modal";
import {
  COC,
  ASBESTOSSAMPLEDETAILS,
  DOWNLOADLABCERTIFICATE,
  UPDATECERTIFICATEVERSION,
  WAANALYSIS,
  SAMPLEHISTORY,
  COCLOG
} from "../../../constants/modal-types";

import SampleDetailsExpansionWA from "./SampleDetailsExpansionWA";
import SampleDetailsExpansionSummary from "./SampleDetailsExpansionSummary";
import SampleDetailsExpansionDetails from "./SampleDetailsExpansionDetails";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";

import ExpandMore from "@material-ui/icons/ExpandMore";
import Edit from "@material-ui/icons/Edit";
import Inbox from "@material-ui/icons/Inbox";
import Save from "@material-ui/icons/SaveAlt";
import CameraAlt from "@material-ui/icons/CameraAlt";
import Print from "@material-ui/icons/Print";
import Send from "@material-ui/icons/Send";
import Flag from "@material-ui/icons/Flag";
import More from "@material-ui/icons/MoreVert";
import AnalysisIcon from "@material-ui/icons/Colorize";
import WAIcon from "@material-ui/icons/GroupWork";
import SampleLogIcon from "@material-ui/icons/Ballot";
import SampleDetailsIcon from "@material-ui/icons/Edit";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import Popup from "reactjs-popup";

const mapStateToProps = state => {
  return {
    me: state.local.me,
    staff: state.local.staff,
    samples: state.asbestosLab.samples,
    analyst: state.asbestosLab.analyst,
    sessionID: state.asbestosLab.sessionID,
    analysisMode: state.asbestosLab.analysisMode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: modal => dispatch(showModal(modal)),
  };
};

class SampleDetailsExpansion extends React.Component {
  toggleWAAnalysis = () => {
    let cocLog = this.props.job.cocLog;
    let sample = this.props.sample;

    if (!cocLog) cocLog = [];
    cocLog.push({
      type: "Admin",
      log: sample.waAnalysis ? `Western Australia guidelines removed from Sample ${sample.sampleNumber}` : `Western Australia guidelines added to Sample ${sample.sampleNumber}`,
      user: auth.currentUser.uid,
      userName: this.props.me.name,
      date: new Date(),
      sample: sample.uid,
    });

    let waAnalysis = false;
    if (!sample.waAnalysis) {
      waAnalysis = true;
    } else if (this.props.samples[this.props.job.uid]) {
      Object.values(this.props.samples[this.props.job.uid]).filter(el => el.deleted === false && el.uid !== sample.uid)
      .forEach(el => {
        if (el.waAnalysis) waAnalysis = true;
      });
    }

    cocsRef
      .doc(this.props.job.uid)
      .update({ versionUpToDate: false, cocLog: cocLog, waAnalysis: waAnalysis, });
    asbestosSamplesRef
      .doc(sample.uid)
      .update({ waAnalysis: !sample.waAnalysis});
  }

  render() {
    const { job, sample, staff, anchorEl, classes } = this.props;
    if (sample.cocUid !== job.uid) return null;
    let result = getBasicResult(sample);
    let colours = getSampleColours(sample);

    return (
      <ExpansionPanel
        elevation={0}
        square={true}
        key={`${
          job.jobNumber
        }-${sample.sampleNumber.toString()}_${
          sample.description
        }`}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />} className={classes.hoverItem}>
          <Grid container>
            <Grid item xs={12} xl={4}>
              <div style={{
                textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                overflow: "hidden",
              }}>
                <Popup
                  trigger={
                    <CameraAlt
                      style={{
                        fontSize: 24,
                        color: colours.cameraColor,
                        margin: 10
                      }}
                    />
                  }
                  position="right center"
                  on="hover"
                  disabled={sample.imagePathRemote == null}
                >
                  {sample.imagePathRemote ?
                    <img
                      alt=""
                      src={sample.imagePathRemote}
                      width={200}
                    />
                    : <span />
                  }
                </Popup>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#aaa",
                    marginRight: 10,
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontWeight: "bold"
                  }}
                >
                  {sample.sampleNumber}
                </div>
                {writeDescription(sample)}
              </div>
            </Grid>
            <Grid item xs={12} xl={8}>
            <div style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              // width: '40vw',
              display: 'flex',
              flexDirection: 'row',
            }}>
              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  receiveSample(sample, job, this.props.sessionID, this.props.me);
                }}
              >
                <Inbox
                  style={{
                    fontSize: 24,
                    margin: 10,
                    color: colours.receivedColor
                  }}
                />
              </IconButton>
                <IconButton
                  onClick={event => {
                    event.stopPropagation();
                    startAnalysis(sample, job, this.props.sessionID, this.props.me);
                  }}
                >
                  <AnalysisIcon
                    style={{
                      fontSize: 24,
                      margin: 10,
                      color: colours.analysisColor
                    }}
                  />
                </IconButton>
              <div
                style={{ display: "flex", flexDirection: "row" }}
              >
              <Tooltip title='Chrysotile (white) asbestos detected'>
                <div
                  style={{
                    backgroundColor: colours.chDivColor,
                    borderRadius: 5
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{ margin: 5, color: colours.chColor }}
                    onClick={event => {
                      event.stopPropagation();
                      toggleResult("ch", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                    }}
                  >
                    CH
                  </Button>
                </div>
              </Tooltip>
              <Tooltip title='Amosite (brown) asbestos detected'>
                <div
                  style={{
                    backgroundColor: colours.amDivColor,
                    borderRadius: 5
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{ margin: 5, color: colours.amColor }}
                    onClick={event => {
                      event.stopPropagation();
                      toggleResult("am", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                    }}
                  >
                    AM
                  </Button>
                </div>
              </Tooltip>
              <Tooltip title='Crocidolite (blue) asbestos detected'>
                <div
                  style={{
                    backgroundColor: colours.crDivColor,
                    borderRadius: 5
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{ margin: 5, color: colours.crColor }}
                    onClick={event => {
                      event.stopPropagation();
                      toggleResult("cr", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                    }}
                  >
                    CR
                  </Button>
                </div>
              </Tooltip>
              <Tooltip title='Unidentified mineral fibres detected'>
                <div
                  style={{
                    backgroundColor: colours.umfDivColor,
                    borderRadius: 5
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{ margin: 5, color: colours.umfColor }}
                    onClick={event => {
                      event.stopPropagation();
                      toggleResult("umf", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                    }}
                  >
                    UMF
                  </Button>
                </div>
              </Tooltip>
            </div>
            <div style={{ width: 30 }} />
            <Tooltip title='No asbestos detected'>
              <div
                style={{
                  backgroundColor: colours.noDivColor,
                  borderRadius: 5
                }}
              >
                <Button
                  variant="outlined"
                  style={{ margin: 5, color: colours.noColor }}
                  onClick={event => {
                    event.stopPropagation();
                    toggleResult("no", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                  }}
                >
                  NO
                </Button>
              </div>
            </Tooltip>
            <div style={{ width: 30 }} />
            <Tooltip title='Organic fibres detected'>
              <div
                style={{
                  backgroundColor: colours.orgDivColor,
                  borderRadius: 5
                }}
              >
                <Button
                  variant="outlined"
                  style={{ margin: 5, color: colours.orgColor }}
                  onClick={event => {
                    event.stopPropagation();
                    toggleResult("org", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                  }}
                >
                  ORG
                </Button>
              </div>
            </Tooltip>
            <Tooltip title='Synthetic mineral fibres detected'>
              <div
                style={{
                  backgroundColor: colours.smfDivColor,
                  borderRadius: 5
                }}
              >
                <Button
                  variant="outlined"
                  style={{ margin: 5, color: colours.smfColor }}
                  onClick={event => {
                    event.stopPropagation();
                    toggleResult("smf", this.props.analyst, sample, job, this.props.sessionID, this.props.me);
                  }}
                >
                  SMF
                </Button>
              </div>
            </Tooltip>
              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  if (
                    !sample.result &&
                    !sample.verified &&
                    !window.confirm(
                      "No result has been recorded for this sample. This will appear as 'Not analysed' in the test certificate. Proceed?"
                    )
                  )
                    return;
                  verifySample(sample, job, this.props.me);
                }}
              >
                <CheckCircleOutline
                  style={{
                    fontSize: 24,
                    margin: 10,
                    color: colours.verifiedColor
                  }}
                />
              </IconButton>
              {this.props.me.auth['Asbestos Bulk Analysis'] && <span><Tooltip id="det-tooltip" title={'Edit Sample Details' }>
                <IconButton
                  onClick={event => {
                    event.stopPropagation();
                      this.props.showModal({
                        modalType: ASBESTOSSAMPLEDETAILS,
                        modalProps: {
                          doc: sample,
                          job: job,
                      }});
                  }}
                >
                  <SampleDetailsIcon
                    style={{
                      fontSize: 24,
                      margin: 10,
                    }}
                  />
                </IconButton>
              </Tooltip>
              {job.waAnalysis &&
                <Tooltip id="wa-tooltip" title={'Edit WA Analysis' }>
                  <IconButton
                    onClick={event => {
                      event.stopPropagation();
                      this.props.showModal({
                        modalType: WAANALYSIS,
                        modalProps: {
                          doc: sample,
                          job: job,
                      }});
                    }}
                  >
                    <WAIcon
                      style={{
                        fontSize: 24,
                        margin: 10,
                        color: colours.waColor
                      }}
                    />
                  </IconButton>
                </Tooltip>
              }
              <Tooltip id="sl-tooltip" title={'Sample Log' }>
                <IconButton
                  onClick={event => {
                    event.stopPropagation();
                    this.props.showModal({
                      modalType: SAMPLEHISTORY,
                      modalProps: {
                        title: `Sample History for ${
                          job.jobNumber
                        }-${sample.sampleNumber.toString()}`,
                        uid: sample.uid,
                        cocLog: job.cocLog,
                    }});
                  }}
                >
                  <SampleLogIcon
                    style={{
                      fontSize: 24,
                      margin: 10,
                    }}
                  />
                </IconButton>
              </Tooltip></span>}
              {/*<IconButton
                onClick={event => {
                  event.stopPropagation();
                  this.props.sampleAnchorMenu(sample.sampleNumber, event.currentTarget);
                }}
              >
                <More />
              </IconButton>
              <Menu
                id={`${
                  job.jobNumber
                }-${sample.sampleNumber.toString()}`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => {this.props.sampleAnchorMenu(sample.sampleNumber, null);}}
                style={{ padding: 0 }}
              >
                <MenuItem
                  key={`${
                    job.jobNumber
                  }-${sample.sampleNumber.toString()}-SampleHistory`}
                  onClick={event => {
                    event.stopPropagation();
                    this.props.showModal({
                      modalType: SAMPLEHISTORY,
                      modalProps: {
                        title: `Sample History for ${
                          job.jobNumber
                        }-${sample.sampleNumber.toString()}`,
                        uid: sample.uid,
                        cocLog: job.cocLog,
                    }
                  })
                }}
                >
                  View Sample History
                </MenuItem>
              </Menu>*/}
              </div>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container direction={'column'} spacing={1}>
            <Grid item>
              <SampleDetailsExpansionSummary sample={sample} />
            </Grid>
            <Grid item>
              <SampleDetailsExpansionDetails sample={sample} />
            </Grid>
            <Grid item>
              { sample.waAnalysis && <SampleDetailsExpansionWA sample={sample} /> }
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SampleDetailsExpansion)
);