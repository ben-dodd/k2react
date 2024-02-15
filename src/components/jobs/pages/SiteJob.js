<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

//Modals
import { WFM_TIME } from "../../../constants/modal-types";
import { showModal } from "../../../actions/modal";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ClosedArrow from "@material-ui/icons/ArrowDropDown";
import OpenArrow from "@material-ui/icons/ArrowDropUp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import SyncIcon from "@material-ui/icons/Sync";
import LinkIcon from "@material-ui/icons/Link";
import TimerIcon from "@material-ui/icons/Timer";
import Select from "react-select";
import SuggestionField from "../../../widgets/SuggestionField";
import AsbestosManagementPlan from "../jobs/AsbestosManagementPlan";
import AsbestosSurvey from "../jobs/AsbestosSurvey";

import { DatePicker } from "@material-ui/pickers";

import classNames from "classnames";
import Popup from "reactjs-popup";
import { dateOf, andList, personnelConvert } from "../../../actions/helpers";

import moment from "moment";
import _ from "lodash";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

//Modals
import { WFM_TIME } from '../../../constants/modal-types'
import { showModal } from '../../../actions/modal'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Collapse from '@material-ui/core/Collapse'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import ClosedArrow from '@material-ui/icons/ArrowDropDown'
import OpenArrow from '@material-ui/icons/ArrowDropUp'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import SyncIcon from '@material-ui/icons/Sync'
import LinkIcon from '@material-ui/icons/Link'
import TimerIcon from '@material-ui/icons/Timer'
import Select from 'react-select'
import SuggestionField from '../../../widgets/SuggestionField'
import AsbestosManagementPlan from '../jobs/AsbestosManagementPlan'
import AsbestosSurvey from '../jobs/AsbestosSurvey'

import { DatePicker } from '@material-ui/pickers'

import classNames from 'classnames'
import { dateOf, andList, personnelConvert } from '../../../actions/helpers'

import moment from 'moment'
import _ from 'lodash'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  fetchCurrentJobState,
  saveCurrentJobState,
  getDetailedWFMJob,
  clearWfmJob,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
  collateJobsList,
  getJobColor,
  getStateString,
<<<<<<< HEAD
  handleJobChange,
} from "../../../actions/jobs";

import { filterMap, filterMapReset } from "../../../actions/display";
=======
  handleJobChange
} from '../../../actions/jobs'

import { filterMap, filterMapReset } from '../../../actions/display'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    wfmJobs: state.jobs.wfmJobs,
    wfmJob: state.jobs.wfmJob,
    wfmLeads: state.jobs.wfmLeads,
    currentJobState: state.jobs.currentJobState,
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    staff: state.local.staff,
    me: state.local.me,
    filter: state.display.filterMap,
    otherOptions: state.const.otherOptions,
    modalType: state.modal.modalType,
<<<<<<< HEAD
    wfmAccessToken: state.local.wfmAccessToken,
  };
};
=======
    wfmAccessToken: state.local.wfmAccessToken
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWFMJobs: () => dispatch(fetchWFMJobs()),
    fetchWFMLeads: () => dispatch(fetchWFMLeads()),
    fetchWFMClients: () => dispatch(fetchWFMClients()),
    handleJobChange: (info) => dispatch(handleJobChange(info)),
<<<<<<< HEAD
    handleJobChangeDebounced: _.debounce(
      (info) => dispatch(handleJobChange(info)),
      2000
    ),
    fetchCurrentJobState: (ignoreCompleted) =>
      dispatch(fetchCurrentJobState(ignoreCompleted)),
=======
    handleJobChangeDebounced: _.debounce((info) => dispatch(handleJobChange(info)), 2000),
    fetchCurrentJobState: (ignoreCompleted) => dispatch(fetchCurrentJobState(ignoreCompleted)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    clearWfmJob: () => dispatch(clearWfmJob()),
    getDetailedWFMJob: (info) => dispatch(getDetailedWFMJob(info)),
    saveCurrentJobState: (state) => dispatch(saveCurrentJobState(state)),
    saveGeocodes: (g) => dispatch(saveGeocodes(g)),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    updateGeocodes: (g) => dispatch(updateGeocodes(g)),
    saveWFMItems: (items) => dispatch(saveWFMItems(items)),
    saveStats: (stats) => dispatch(saveStats(stats)),
    filterMap: (filter) => dispatch(filterMap(filter)),
    filterMapReset: () => dispatch(filterMapReset()),
    showModal: (modal) => dispatch(showModal(modal)),
<<<<<<< HEAD
    collateJobsList: (
      wfmJobs,
      wfmLeads,
      currentJobState,
      wfmClients,
      geocodes
    ) =>
      dispatch(
        collateJobsList(
          wfmJobs,
          wfmLeads,
          currentJobState,
          wfmClients,
          geocodes
        )
      ),
  };
};
=======
    collateJobsList: (wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes) =>
      dispatch(collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes))
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class SiteJob extends React.Component {
  state = {
    countVersions: 1,

<<<<<<< HEAD
    update: {},
  };

  UNSAFE_componentWillMount() {
    let countVersions = 1;
    if (
      this.props.siteJobs &&
      this.props.siteJobs[this.props.site] &&
      this.props.siteJobs[this.props.site][this.props.m.uid]
    ) {
      let job = this.props.siteJobs[this.props.site][this.props.m.uid];
      if (job.versions && Object.keys(job.versions).length > 0) {
        countVersions = Math.max(
          ...Object.keys(job.versions).map((key) => parseInt(key))
        );
      }
    }
    this.setState({
      countVersions,
    });
=======
    update: {}
  }

  UNSAFE_componentWillMount() {
    let countVersions = 1
    if (this.props.siteJobs && this.props.siteJobs[this.props.site] && this.props.siteJobs[this.props.site][this.props.m.uid]) {
      let job = this.props.siteJobs[this.props.site][this.props.m.uid]
      if (job.versions && Object.keys(job.versions).length > 0) {
        countVersions = Math.max(...Object.keys(job.versions).map((key) => parseInt(key)))
      }
    }
    this.setState({
      countVersions
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  toggleCollapse = (name) => {
    this.setState({
<<<<<<< HEAD
      [`open${name}`]: !this.state[`open${name}`],
    });
  };

  addList = (field) => {
    this.setState({
      [`count${field}`]: this.state[`count${field}`]
        ? this.state[`count${field}`] + 1
        : 2,
    });
  };

  removeList = (field) => {
    let obj = field ? field.slice(0, 1).toLowerCase() + field.slice(1) : null;
    let num = this.state[`count${field}`] ? this.state[`count${field}`] : 1;
=======
      [`open${name}`]: !this.state[`open${name}`]
    })
  }

  addList = (field) => {
    this.setState({
      [`count${field}`]: this.state[`count${field}`] ? this.state[`count${field}`] + 1 : 2
    })
  }

  removeList = (field) => {
    let obj = field ? field.slice(0, 1).toLowerCase() + field.slice(1) : null
    let num = this.state[`count${field}`] ? this.state[`count${field}`] : 1
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (obj)
      this.props.handleJobChange({
        job: this.props.siteJobs[this.props.site][this.props.m.uid],
        o1: [obj],
        field: num,
<<<<<<< HEAD
        val: "delete",
      });
    this.setState({
      [`count${field}`]: this.state[`count${field}`]
        ? this.state[`count${field}`] > 1
          ? this.state[`count${field}`] - 1
          : 1
        : 1,
    });
  };

  render() {
    const { classes, that, m, site } = this.props;
    const names = [{ name: "3rd Party", uid: "3rd Party" }].concat(
      Object.values(this.props.staff).sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );

    if (m) {
      // console.log(m);
      const color = classes[getJobColor(m.category)];
=======
        val: 'delete'
      })
    this.setState({
      [`count${field}`]: this.state[`count${field}`] ? (this.state[`count${field}`] > 1 ? this.state[`count${field}`] - 1 : 1) : 1
    })
  }

  render() {
    const { classes, that, m, site } = this.props
    const names = [{ name: '3rd Party', uid: '3rd Party' }].concat(
      Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name))
    )

    if (m) {
      // console.log(m);
      const color = classes[getJobColor(m.category)]
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      return (
        <Grid container>
          <Grid item xs={12} md={5}>
            <div className={classes.informationBoxWhiteRounded}>
              <div className={classes.flexRowSpread}>
<<<<<<< HEAD
                <div className={classNames(color, classes.expandHeading)}>
                  {m.jobNumber}
                </div>
                <div className={classes.flexRow}>
                  <Tooltip title={"Re-sync with WorkflowMax"}>
=======
                <div className={classNames(color, classes.expandHeading)}>{m.jobNumber}</div>
                <div className={classes.flexRow}>
                  <Tooltip title={'Re-sync with WorkflowMax'}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <IconButton
                      onClick={(e) =>
                        this.props.getDetailedWFMJob({
                          jobNumber: m.jobNumber,
                          setUpJob: true,
                          accessToken: this.props.wfmAccessToken,
<<<<<<< HEAD
                          refreshToken: this.props.me.refreshToken,
=======
                          refreshToken: this.props.me.refreshToken
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        })
                      }
                    >
                      <SyncIcon className={classes.iconRegular} />
                    </IconButton>
                  </Tooltip>
<<<<<<< HEAD
                  <Tooltip title={"View Job on WorkflowMax"}>
                    <IconButton
                      onClick={() =>
                        window.open(
                          `https://my.workflowmax.com/job/jobview.aspx?id=${m.wfmID}`
                        )
                      }
                    >
                      <LinkIcon className={classes.iconRegular} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Log Time to WorkflowMax"}>
=======
                  <Tooltip title={'View Job on WorkflowMax'}>
                    <IconButton onClick={() => window.open(`https://my.workflowmax.com/job/jobview.aspx?id=${m.wfmID}`)}>
                      <LinkIcon className={classes.iconRegular} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Log Time to WorkflowMax'}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <IconButton
                      onClick={(e) => {
                        this.props.showModal({
                          modalType: WFM_TIME,
<<<<<<< HEAD
                          modalProps: { job: m },
                        });
=======
                          modalProps: { job: m }
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    >
                      <TimerIcon className={classes.iconRegular} />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              <InputLabel>Job Description</InputLabel>
              <SuggestionField
                that={this}
<<<<<<< HEAD
                suggestions="siteJobDescriptions"
                defaultValue={m.jobDescription ? m.jobDescription : ""}
                onModify={(value) =>
                  this.props.handleJobChange({
                    job: m,
                    field: "jobDescription",
                    val: value,
                    siteUid: site,
                  })
                }
              />
              <div className={classNames(color, classes.expandHeading)}>
                Job Details
              </div>
              <div>
                <b>Client:</b> {m.client ? m.client : "Not Available"}
              </div>
              <div>
                <b>Job Name/Address:</b>{" "}
                {m.address ? m.address : "Not Available"}
=======
                suggestions='siteJobDescriptions'
                defaultValue={m.jobDescription ? m.jobDescription : ''}
                onModify={(value) =>
                  this.props.handleJobChange({
                    job: m,
                    field: 'jobDescription',
                    val: value,
                    siteUid: site
                  })
                }
              />
              <div className={classNames(color, classes.expandHeading)}>Job Details</div>
              <div>
                <b>Client:</b> {m.client ? m.client : 'Not Available'}
              </div>
              <div>
                <b>Job Name/Address:</b> {m.address ? m.address : 'Not Available'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </div>
              {m.wfmState && (
                <div>
                  <b>State:</b> {m.wfmState}
                </div>
              )}
              <div>
<<<<<<< HEAD
                <b>Owner:</b> {m.owner ? m.owner : "Not Assigned"}
=======
                <b>Owner:</b> {m.owner ? m.owner : 'Not Assigned'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </div>
              <div>
                {m.assigned && (
                  <div>
                    <b> Assigned: </b> {andList(m.assigned.map((e) => e.name))}
                  </div>
                )}
<<<<<<< HEAD
                {m.lastActionDate && m.wfmState !== "Completed" && (
                  <div>
                    {m.wfmState && (
                      <span>
                        <b>Last Action:</b> {getStateString(m)}{" "}
=======
                {m.lastActionDate && m.wfmState !== 'Completed' && (
                  <div>
                    {m.wfmState && (
                      <span>
                        <b>Last Action:</b> {getStateString(m)}{' '}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      </span>
                    )}
                  </div>
                )}
              </div>
<<<<<<< HEAD
              {m.description && typeof m.description !== "object" && (
                <div>
                  <div
                    className={classNames(color, classes.expandHeading)}
                    onClick={() => this.toggleCollapse("Description")}
                  >
                    Description{" "}
                    {this.state.openDescription ? (
                      <OpenArrow />
                    ) : (
                      <ClosedArrow />
                    )}
=======
              {m.description && typeof m.description !== 'object' && (
                <div>
                  <div className={classNames(color, classes.expandHeading)} onClick={() => this.toggleCollapse('Description')}>
                    Description {this.state.openDescription ? <OpenArrow /> : <ClosedArrow />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                  <Collapse in={this.state.openDescription}>
                    <div className={classes.code}>{m.description}</div>
                  </Collapse>
                </div>
              )}
              {m.stateHistory && (
                <div>
<<<<<<< HEAD
                  <div
                    className={classNames(color, classes.expandHeading)}
                    onClick={() => this.toggleCollapse("History")}
                  >
                    State History{" "}
                    {this.state.openHistory ? <OpenArrow /> : <ClosedArrow />}
=======
                  <div className={classNames(color, classes.expandHeading)} onClick={() => this.toggleCollapse('History')}>
                    State History {this.state.openHistory ? <OpenArrow /> : <ClosedArrow />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                  <Collapse in={this.state.openHistory}>
                    <div className={classes.expandBody}>
                      {Object.keys(m.stateHistory).map((key) => {
                        return (
                          <span key={key}>
                            <b>{key}:</b> {m.stateHistory[key]}
                            <br />
                          </span>
<<<<<<< HEAD
                        );
=======
                        )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      })}
                    </div>
                  </Collapse>
                </div>
              )}
              {m.milestones && m.milestones.length > 0 && (
                <div>
<<<<<<< HEAD
                  <div
                    className={classNames(color, classes.expandHeading)}
                    onClick={() => this.toggleCollapse("Milestones")}
                  >
                    Milestones{" "}
                    {this.state.openMilestones ? (
                      <OpenArrow />
                    ) : (
                      <ClosedArrow />
                    )}
=======
                  <div className={classNames(color, classes.expandHeading)} onClick={() => this.toggleCollapse('Milestones')}>
                    Milestones {this.state.openMilestones ? <OpenArrow /> : <ClosedArrow />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                  <Collapse in={this.state.openMilestones}>
                    <div className={classes.expandBody}>
                      {m.milestones.map((item) => {
<<<<<<< HEAD
                        if (item.completed === "true") {
                          return (
                            <span
                              key={item.date}
                              className={classes.linethrough}
                            >
                              <b>{moment(item.date).format("YYYY-MM-DD")}:</b>{" "}
                              {item.description}
                              <br />
                            </span>
                          );
                        } else {
                          return (
                            <span key={item.date}>
                              <b>{moment(item.date).format("YYYY-MM-DD")}:</b>{" "}
                              {item.description}
                              <br />
                            </span>
                          );
=======
                        if (item.completed === 'true') {
                          return (
                            <span key={item.date} className={classes.linethrough}>
                              <b>{moment(item.date).format('YYYY-MM-DD')}:</b> {item.description}
                              <br />
                            </span>
                          )
                        } else {
                          return (
                            <span key={item.date}>
                              <b>{moment(item.date).format('YYYY-MM-DD')}:</b> {item.description}
                              <br />
                            </span>
                          )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }
                      })}
                    </div>
                  </Collapse>
                </div>
              )}

              {m.notes && m.notes.length > 0 && (
                <div>
<<<<<<< HEAD
                  <div
                    className={classNames(color, classes.expandHeading)}
                    onClick={() => this.toggleCollapse("Notes")}
                  >
                    Notes{" "}
                    {this.state.openNotes ? <OpenArrow /> : <ClosedArrow />}
=======
                  <div className={classNames(color, classes.expandHeading)} onClick={() => this.toggleCollapse('Notes')}>
                    Notes {this.state.openNotes ? <OpenArrow /> : <ClosedArrow />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                  <Collapse in={this.state.openNotes}>
                    <div className={classes.expandBody}>
                      {m.notes.map((item) => (
<<<<<<< HEAD
                        <div key={moment(dateOf(item.date)).format("x")}>
                          <div className={color}>
                            <b>
                              {moment(dateOf(item.date)).format("YYYY-MM-DD")}
                            </b>{" "}
                            {item.title} - {item.createdBy}
                          </div>
                          {item.text && (
                            <div className={classes.code}>{item.text}</div>
                          )}
=======
                        <div key={moment(dateOf(item.date)).format('x')}>
                          <div className={color}>
                            <b>{moment(dateOf(item.date)).format('YYYY-MM-DD')}</b> {item.title} - {item.createdBy}
                          </div>
                          {item.text && <div className={classes.code}>{item.text}</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        </div>
                      ))}
                    </div>
                  </Collapse>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.informationBoxWhiteRounded}>
<<<<<<< HEAD
              <div className={classNames(color, classes.expandHeading)}>
                Version History
              </div>
              <div
                className={classNames(
                  classes.subHeading,
                  classes.flexRowCenter
                )}
              >
                <IconButton
                  size="small"
                  aria-label="add"
                  className={classes.marginLeftSmall}
                  onClick={() => this.addList("Versions")}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="remove"
                  className={classes.marginLeftSmall}
                  onClick={() => this.removeList("Versions")}
=======
              <div className={classNames(color, classes.expandHeading)}>Version History</div>
              <div className={classNames(classes.subHeading, classes.flexRowCenter)}>
                <IconButton size='small' aria-label='add' className={classes.marginLeftSmall} onClick={() => this.addList('Versions')}>
                  <AddIcon />
                </IconButton>
                <IconButton
                  size='small'
                  aria-label='remove'
                  className={classes.marginLeftSmall}
                  onClick={() => this.removeList('Versions')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                >
                  <RemoveIcon />
                </IconButton>
              </div>
<<<<<<< HEAD
              {[
                ...Array(
                  this.state.countVersions ? this.state.countVersions : 1
                ).keys(),
              ].map((i) => {
                let num = i + 1,
                  s = m.versions && m.versions[num] ? m.versions[num] : {};
=======
              {[...Array(this.state.countVersions ? this.state.countVersions : 1).keys()].map((i) => {
                let num = i + 1,
                  s = m.versions && m.versions[num] ? m.versions[num] : {}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <div className={classes.hoverNoFlex} key={`versions${num}`}>
                    <div className={classes.flexRow}>
                      <div className={classes.circleShaded}>{num}</div>
                      <DatePicker
                        value={s.date ? dateOf(s.date) : null}
                        autoOk
                        className={classes.columnMed}
<<<<<<< HEAD
                        format="ddd, D MMMM YYYY"
                        variant="inline"
                        disableToolbar
                        clearable
                        label={"Date"}
                        views={["year", "month", "date"]}
                        openTo="year"
                        onChange={(date) => {
                          this.props.handleJobChange({
                            job: m,
                            o1: "versions",
                            o2: num.toString(),
                            field: "date",
                            val: dateOf(date),
                            siteUid: site,
                          });
=======
                        format='ddd, D MMMM YYYY'
                        variant='inline'
                        disableToolbar
                        clearable
                        label={'Date'}
                        views={['year', 'month', 'date']}
                        openTo='year'
                        onChange={(date) => {
                          this.props.handleJobChange({
                            job: m,
                            o1: 'versions',
                            o2: num.toString(),
                            field: 'date',
                            val: dateOf(date),
                            siteUid: site
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      <div className={classes.spacerSmall} />
                      <TextField
<<<<<<< HEAD
                        label="Changes"
=======
                        label='Changes'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        className={classes.columnLarge}
                        defaultValue={s.changes ? s.changes : null}
                        onChange={(e) => {
                          this.props.handleJobChangeDebounced({
                            job: m,
<<<<<<< HEAD
                            o1: "versions",
                            o2: num.toString(),
                            field: "changes",
                            val: e.target.value,
                            siteUid: site,
                          });
=======
                            o1: 'versions',
                            o2: num.toString(),
                            field: 'changes',
                            val: e.target.value,
                            siteUid: site
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                    </div>
                    <div className={classes.flexRow}>
                      <Select
                        isMulti
<<<<<<< HEAD
                        placeholder={"Writer"}
                        className={classNames(
                          classes.selectTight,
                          classes.columnMedLarge
                        )}
=======
                        placeholder={'Writer'}
                        className={classNames(classes.selectTight, classes.columnMedLarge)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          s.writer
                            ? s.writer.map((e) => ({
                                value: e.uid,
<<<<<<< HEAD
                                label: e.name,
=======
                                label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }))
                            : null
                        }
                        options={names.map((e) => ({
                          value: e.uid,
<<<<<<< HEAD
                          label: e.name,
=======
                          label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }))}
                        onChange={(e) => {
                          this.props.handleJobChange({
                            job: m,
<<<<<<< HEAD
                            o1: "versions",
                            o2: num.toString(),
                            field: "writer",
                            val: personnelConvert(e),
                            siteUid: site,
                          });
=======
                            o1: 'versions',
                            o2: num.toString(),
                            field: 'writer',
                            val: personnelConvert(e),
                            siteUid: site
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      <Select
                        isMulti
<<<<<<< HEAD
                        placeholder={"Checker"}
                        className={classNames(
                          classes.selectTight,
                          classes.columnMedLarge
                        )}
=======
                        placeholder={'Checker'}
                        className={classNames(classes.selectTight, classes.columnMedLarge)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          s.checker
                            ? s.checker.map((e) => ({
                                value: e.uid,
<<<<<<< HEAD
                                label: e.name,
=======
                                label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }))
                            : null
                        }
                        options={names.map((e) => ({
                          value: e.uid,
<<<<<<< HEAD
                          label: e.name,
=======
                          label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }))}
                        onChange={(e) => {
                          this.props.handleJobChange({
                            job: m,
<<<<<<< HEAD
                            o1: "versions",
                            o2: num.toString(),
                            field: "checker",
                            val: personnelConvert(e),
                            siteUid: site,
                          });
=======
                            o1: 'versions',
                            o2: num.toString(),
                            field: 'checker',
                            val: personnelConvert(e),
                            siteUid: site
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      <Select
                        isMulti
<<<<<<< HEAD
                        placeholder={"KTP"}
                        className={classNames(
                          classes.selectTight,
                          classes.columnMedLarge
                        )}
=======
                        placeholder={'KTP'}
                        className={classNames(classes.selectTight, classes.columnMedLarge)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          s.ktp
                            ? s.ktp.map((e) => ({
                                value: e.uid,
<<<<<<< HEAD
                                label: e.name,
=======
                                label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }))
                            : null
                        }
                        options={names.map((e) => ({
                          value: e.uid,
<<<<<<< HEAD
                          label: e.name,
=======
                          label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }))}
                        onChange={(e) => {
                          this.props.handleJobChange({
                            job: m,
<<<<<<< HEAD
                            o1: "versions",
                            o2: num.toString(),
                            field: "ktp",
                            val: personnelConvert(e),
                            siteUid: site,
                          });
=======
                            o1: 'versions',
                            o2: num.toString(),
                            field: 'ktp',
                            val: personnelConvert(e),
                            siteUid: site
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                    </div>
                  </div>
<<<<<<< HEAD
                );
=======
                )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              })}
            </div>
          </Grid>
          <Grid item xs={12}>
<<<<<<< HEAD
            {m.jobDescription === "Asbestos Management Plan" && (
              <AsbestosManagementPlan m={m} site={site} />
            )}
            {m.jobDescription.includes("Asbestos") &&
              m.jobDescription.includes("Survey") && (
                <AsbestosSurvey m={m} site={site} />
              )}
          </Grid>
        </Grid>
      );
    } else return <div />;
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SiteJob)
);
=======
            {m.jobDescription === 'Asbestos Management Plan' && <AsbestosManagementPlan m={m} site={site} />}
            {m.jobDescription.includes('Asbestos') && m.jobDescription.includes('Survey') && <AsbestosSurvey m={m} site={site} />}
          </Grid>
        </Grid>
      )
    } else return <div />
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SiteJob))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
