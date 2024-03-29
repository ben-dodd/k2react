<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Modals
import { WFM_TIME } from "../../constants/modal-types";
import { showModal } from "../../actions/modal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import TimerIcon from "@material-ui/icons/Timer";
import JobIcon from "@material-ui/icons/Assignment";
import WfmTimeModal from "./modals/WfmTimeModal";

import {
  dateOf,
  getDaysSinceDate,
  getDaysSinceDateAgo,
  andList,
} from "../../actions/helpers";

import moment from "moment";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//Modals
import { WFM_TIME } from '../../constants/modal-types'
import { showModal } from '../../actions/modal'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import TimerIcon from '@material-ui/icons/Timer'
import JobIcon from '@material-ui/icons/Assignment'
import WfmTimeModal from './modals/WfmTimeModal'

import { dateOf, getDaysSinceDate, getDaysSinceDateAgo, andList } from '../../actions/helpers'

import moment from 'moment'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  fetchCurrentJobState,
  saveCurrentJobState,
  addWfmJobByNumber,
  clearWfmJob,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
  collateJobsList,
  getJobColor,
  getStateString,
  getNextActionType,
  getWfmUrl,
  getLeadHistoryDescription,
<<<<<<< HEAD
  setupSiteJob,
} from "../../actions/jobs";

import { filterMap, filterMapReset } from "../../actions/display";

import JobsTable from "./JobsTable";
import Leads from "./Leads";
import JobMap from "./JobMap";
=======
  setupSiteJob
} from '../../actions/jobs'

import { filterMap, filterMapReset } from '../../actions/display'

import JobsTable from './JobsTable'
import Leads from './Leads'
import JobMap from './JobMap'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    wfmJobs: state.jobs.wfmJobs,
    wfmJob: state.jobs.wfmJob,
    wfmLeads: state.jobs.wfmLeads,
    wfmClients: state.jobs.wfmClients,
    currentJobState: state.jobs.currentJobState,
    geocodes: state.jobs.geocodes,
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    me: state.local.me,
    filter: state.display.filterMap,
    otherOptions: state.const.otherOptions,
    modalType: state.modal.modalType,
<<<<<<< HEAD
    wfmAccessToken: state.local.wfmAccessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWFMJobs: (accessToken, refreshToken) =>
      dispatch(fetchWFMJobs(accessToken, refreshToken)),
    fetchWFMLeads: (accessToken, refreshToken) =>
      dispatch(fetchWFMLeads(accessToken, refreshToken)),
    fetchWFMClients: (accessToken, refreshToken) =>
      dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchCurrentJobState: (ignoreCompleted) =>
      dispatch(fetchCurrentJobState(ignoreCompleted)),
=======
    wfmAccessToken: state.local.wfmAccessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWFMJobs: (accessToken, refreshToken) => dispatch(fetchWFMJobs(accessToken, refreshToken)),
    fetchWFMLeads: (accessToken, refreshToken) => dispatch(fetchWFMLeads(accessToken, refreshToken)),
    fetchWFMClients: (accessToken, refreshToken) => dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchCurrentJobState: (ignoreCompleted) => dispatch(fetchCurrentJobState(ignoreCompleted)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // addWfmJobByNumber: n => dispatch(addWfmJobByNumber(n)),
    setupSiteJob: (job) => dispatch(setupSiteJob(job)),
    clearWfmJob: () => dispatch(clearWfmJob()),
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

class Jobs extends React.Component {
  state = {
    searchJobNumber: "",
    searchClient: "",
    searchStartDate: "",
    searchEndDate: "",
    searchDateType: "",
    searchAnalyst: "",
    tabValue: 0,
    jobModal: null,
    addJobNumber: "",
  };

  UNSAFE_componentWillMount() {
    if (this.props.jobList && Object.keys(this.props.jobList).length === 0) {
      this.props.fetchCurrentJobState(false);
      if (this.props.geocodes === undefined) this.props.fetchGeocodes();
      this.getWFMData();
=======
    collateJobsList: (wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes) =>
      dispatch(collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes))
  }
}

class Jobs extends React.Component {
  state = {
    searchJobNumber: '',
    searchClient: '',
    searchStartDate: '',
    searchEndDate: '',
    searchDateType: '',
    searchAnalyst: '',
    tabValue: 0,
    jobModal: null,
    addJobNumber: ''
  }

  UNSAFE_componentWillMount() {
    if (this.props.jobList && Object.keys(this.props.jobList).length === 0) {
      this.props.fetchCurrentJobState(false)
      if (this.props.geocodes === undefined) this.props.fetchGeocodes()
      this.getWFMData()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    }
  }

  componentWillUnmount() {
    // Save daily state
<<<<<<< HEAD
    console.log(
      Object.values(this.props.jobList).filter(
        (lead) => lead.wfmState !== "Completed"
      ).length
    );
    this.props.saveWFMItems(
      Object.values(this.props.jobList).filter(
        (lead) => lead.wfmState !== "Completed"
      )
    );

    // If job list is finished loading, then save it to current
    console.log(this.props.jobList);
    this.props.jobList &&
      console.log(
        Object.values(this.props.jobList).filter((job) => job.isJob).length
      );
    this.props.currentJobState &&
      console.log(
        Object.values(this.props.currentJobState).filter((job) => job.isJob)
          .length
      );
    if (
      this.props.jobList &&
      Object.values(this.props.jobList).filter((job) => job.isJob).length >=
        Object.values(this.props.currentJobState).filter((job) => job.isJob)
          .length
    ) {
      console.log(Object.keys(this.props.jobList).length);
      this.props.saveCurrentJobState(this.props.jobList);
    }

    // Save new geocodes found
    this.props.saveGeocodes(this.props.geocodes);
=======
    console.log(Object.values(this.props.jobList).filter((lead) => lead.wfmState !== 'Completed').length)
    this.props.saveWFMItems(Object.values(this.props.jobList).filter((lead) => lead.wfmState !== 'Completed'))

    // If job list is finished loading, then save it to current
    console.log(this.props.jobList)
    this.props.jobList && console.log(Object.values(this.props.jobList).filter((job) => job.isJob).length)
    this.props.currentJobState && console.log(Object.values(this.props.currentJobState).filter((job) => job.isJob).length)
    if (
      this.props.jobList &&
      Object.values(this.props.jobList).filter((job) => job.isJob).length >=
        Object.values(this.props.currentJobState).filter((job) => job.isJob).length
    ) {
      console.log(Object.keys(this.props.jobList).length)
      this.props.saveCurrentJobState(this.props.jobList)
    }

    // Save new geocodes found
    this.props.saveGeocodes(this.props.geocodes)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  getWFMData = () => {
    if (this.props.wfmAccessToken && this.props.me) {
      // console.log(this.props.clients);
      if (!this.props.wfmJobs || this.props.wfmJobs.length === 0) {
<<<<<<< HEAD
        this.props.fetchWFMJobs(
          this.props.wfmAccessToken,
          this.props.me.wfmRefreshToken
        );
      }
      if (!this.props.wfmLeads || this.props.wfmLeads.length === 0) {
        this.props.fetchWFMLeads(
          this.props.wfmAccessToken,
          this.props.me.wfmRefreshToken
        );
      }
      if (!this.props.wfmClients || this.props.wfmClients.length === 0) {
        this.props.fetchWFMClients(
          this.props.wfmAccessToken,
          this.props.me.wfmRefreshToken
        );
      }
    } else {
      console.log("token not here yet");
      setTimeout(this.getWFMData, 500);
    }
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
    // if (value === 3) this.computeStats();
  };

  getJobDetails = (m, noButton) => {
    const classes = this.props.classes;
    const color = classes[getJobColor(m.category)];
    let maxLength =
      this.props.otherOptions.filter(
        (opt) => opt.option === "jobLeadEmailLength"
      ).length > 0
        ? parseInt(
            this.props.otherOptions.filter(
              (opt) => opt.option === "jobLeadEmailLength"
            )[0].value
          )
        : 600;
    console.log(m);
=======
        this.props.fetchWFMJobs(this.props.wfmAccessToken, this.props.me.wfmRefreshToken)
      }
      if (!this.props.wfmLeads || this.props.wfmLeads.length === 0) {
        this.props.fetchWFMLeads(this.props.wfmAccessToken, this.props.me.wfmRefreshToken)
      }
      if (!this.props.wfmClients || this.props.wfmClients.length === 0) {
        this.props.fetchWFMClients(this.props.wfmAccessToken, this.props.me.wfmRefreshToken)
      }
    } else {
      console.log('token not here yet')
      setTimeout(this.getWFMData, 500)
    }
  }

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value })
    // if (value === 3) this.computeStats();
  }

  getJobDetails = (m, noButton) => {
    const classes = this.props.classes
    const color = classes[getJobColor(m.category)]
    let maxLength =
      this.props.otherOptions.filter((opt) => opt.option === 'jobLeadEmailLength').length > 0
        ? parseInt(this.props.otherOptions.filter((opt) => opt.option === 'jobLeadEmailLength')[0].value)
        : 600
    console.log(m)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <div className={classes.popupMap}>
        <div className={color}>
          {m.isJob ? (
            <div className={classes.flexRowSpread}>
              <h6>{m.category}</h6>
              {!noButton && (
                <span>
                  {/*<Link to={`/site/${m.jobNumber}`} onClick={e => this.props.setupSiteJob(m)}>
                  <IconButton><JobIcon /></IconButton>
                </Link>*/}
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
                </span>
              )}
            </div>
          ) : (
            <h6>{m.category}</h6>
          )}
        </div>
        <div className={classes.subHeading}>
          {m.isJob && (
            <span>
              {`${m.jobNumber}`}
              <br />
              {m.client}
            </span>
          )}
          {!m.isJob && <span>{m.name}</span>}
        </div>
        {m.geocode && (
          <div>
            <i>{m.geocode.address}</i>
          </div>
        )}
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
        {m.isJob ? (
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
            <div className={classes.code}>{m.description}</div>
            {m.stateHistory && (
              <div>
                <br />
                <h6 className={color}>State History</h6>
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
            )}
            {m.milestones && m.milestones.length > 0 && (
              <div>
                <br />
                <h6 className={color}>Milestones</h6>
                {m.milestones.map((item) => {
<<<<<<< HEAD
                  if (item.completed === "true") {
                    return (
                      <span key={item.date} className={classes.linethrough}>
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
            )}

            {m.notes && m.notes.length > 0 && (
              <div>
                <br />
                <h6 className={color}>Notes</h6>
                {m.notes.map((item) => (
<<<<<<< HEAD
                  <div key={moment(dateOf(item.date)).format("x")}>
                    <div>
                      <b>{moment(dateOf(item.date)).format("YYYY-MM-DD")}</b>{" "}
                      {item.title} - {item.createdBy}
                    </div>
                    {item.text && (
                      <div className={classes.code}>
                        {item.text.length > maxLength
                          ? `${item.text.substring(0, maxLength)}...`
                          : item.text}
=======
                  <div key={moment(dateOf(item.date)).format('x')}>
                    <div>
                      <b>{moment(dateOf(item.date)).format('YYYY-MM-DD')}</b> {item.title} - {item.createdBy}
                    </div>
                    {item.text && (
                      <div className={classes.code}>
                        {item.text.length > maxLength ? `${item.text.substring(0, maxLength)}...` : item.text}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/*{m.description && <div className={classes.informationBoxWhiteRounded}><i>{m.description}</i></div>}*/}
            {m.value > 0 && (
              <div>
<<<<<<< HEAD
                <b>Estimated Value:</b> ${m.value}{" "}
=======
                <b>Estimated Value:</b> ${m.value}{' '}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </div>
            )}
            {m.lastActionDate && (
              <div>
                {m.lastActionType && (
                  <span>
                    <b>Last Goal Completed:</b> {getStateString(m)}
                  </span>
                )}
              </div>
            )}
            <div className={classes.code}>{m.description}</div>
            {m.history && m.history.length > 0 && (
              <div>
<<<<<<< HEAD
                <b>Last Modified:</b>{" "}
                {moment(dateOf(m.history[0].date)).format("DD MMMM YYYY")}
=======
                <b>Last Modified:</b> {moment(dateOf(m.history[0].date)).format('DD MMMM YYYY')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </div>
            )}

            {m.nextActionType && (
              <div>
<<<<<<< HEAD
                <b>Next Goal To Do:</b> {getNextActionType(m.activities)}{" "}
                {m.nextActionDate === 0 ? (
                  <span />
                ) : getDaysSinceDate(m.nextActionDate) > 0 ? (
                  <span className={classes.underlineRed}>
                    (Due {getDaysSinceDateAgo(m.nextActionDate)})
                  </span>
                ) : (
                  <span>
                    (Due {getDaysSinceDate(m.nextActionDate) < -1 && "in "}
=======
                <b>Next Goal To Do:</b> {getNextActionType(m.activities)}{' '}
                {m.nextActionDate === 0 ? (
                  <span />
                ) : getDaysSinceDate(m.nextActionDate) > 0 ? (
                  <span className={classes.underlineRed}>(Due {getDaysSinceDateAgo(m.nextActionDate)})</span>
                ) : (
                  <span>
                    (Due {getDaysSinceDate(m.nextActionDate) < -1 && 'in '}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {getDaysSinceDateAgo(m.nextActionDate)})
                  </span>
                )}
              </div>
            )}
            {m.activities && m.activities.length > 0 && (
              <div>
                <br />
                <h6 className={classes[getJobColor(m.category)]}>Goals</h6>
                {m.activities.map((activity) => {
<<<<<<< HEAD
                  if (activity.completed === "Yes") {
                    return (
                      <span key={activity.date} className={classes.linethrough}>
                        <b>{moment(activity.date).format("YYYY-MM-DD")}:</b>{" "}
                        {activity.subject}
                        <br />
                      </span>
                    );
                  } else {
                    return (
                      <span key={activity.date}>
                        <b>{moment(activity.date).format("YYYY-MM-DD")}:</b>{" "}
                        {activity.subject}
                        <br />
                      </span>
                    );
=======
                  if (activity.completed === 'Yes') {
                    return (
                      <span key={activity.date} className={classes.linethrough}>
                        <b>{moment(activity.date).format('YYYY-MM-DD')}:</b> {activity.subject}
                        <br />
                      </span>
                    )
                  } else {
                    return (
                      <span key={activity.date}>
                        <b>{moment(activity.date).format('YYYY-MM-DD')}:</b> {activity.subject}
                        <br />
                      </span>
                    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }
                })}
              </div>
            )}
            {m.history && m.history.length > 0 && (
              <div>
                <br />
                <h6 className={color}>Lead History</h6>
                {m.history.map((item) => {
                  let leadHistory = getLeadHistoryDescription(
                    item,
<<<<<<< HEAD
                    parseInt(
                      this.props.otherOptions.filter(
                        (opt) => opt.option === "jobLeadEmailLength"
                      )[0].value
                    )
                  );
                  return (
                    <div key={moment(dateOf(item.date)).format("x")}>
                      <div>
                        <span className={classes.marginRightSmall}>
                          {leadHistory.icon}
                        </span>
                        <b>{moment(dateOf(item.date)).format("YYYY-MM-DD")}</b>{" "}
                        {leadHistory.title}
                      </div>
                      {leadHistory.body && (
                        <div className={classes.code}>{leadHistory.body}</div>
                      )}
                    </div>
                  );
=======
                    parseInt(this.props.otherOptions.filter((opt) => opt.option === 'jobLeadEmailLength')[0].value)
                  )
                  return (
                    <div key={moment(dateOf(item.date)).format('x')}>
                      <div>
                        <span className={classes.marginRightSmall}>{leadHistory.icon}</span>
                        <b>{moment(dateOf(item.date)).format('YYYY-MM-DD')}</b> {leadHistory.title}
                      </div>
                      {leadHistory.body && <div className={classes.code}>{leadHistory.body}</div>}
                    </div>
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
              </div>
            )}
          </div>
        )}

        <div className={classes.paddingCenterText}>
<<<<<<< HEAD
          <Button variant="outlined" className={classes.buttonIconText}>
            <a
              className={classes.url}
              target="_blank"
              rel="noopener noreferrer"
              href={getWfmUrl(m)}
            >
=======
          <Button variant='outlined' className={classes.buttonIconText}>
            <a className={classes.url} target='_blank' rel='noopener noreferrer' href={getWfmUrl(m)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              View on WorkflowMax
            </a>
          </Button>
        </div>
      </div>
<<<<<<< HEAD
    );
  };

  openJobModal = (m) => {
    this.setState({
      jobModal: m,
    });
  };

  render() {
    const {
      wfmJobs,
      wfmLeads,
      wfmClients,
      classes,
      currentJobState,
      jobList,
      geocodes,
    } = this.props;
=======
    )
  }

  openJobModal = (m) => {
    this.setState({
      jobModal: m
    })
  }

  render() {
    const { wfmJobs, wfmLeads, wfmClients, classes, currentJobState, jobList, geocodes } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (
      wfmJobs.length > 0 &&
      wfmLeads.length > 0 &&
      wfmClients.length > 0 &&
      currentJobState !== undefined &&
      Object.values(currentJobState).length > 0 &&
      jobList &&
      Object.values(jobList).length === 0
    )
<<<<<<< HEAD
      this.props.collateJobsList(
        wfmJobs,
        wfmLeads,
        currentJobState,
        wfmClients,
        geocodes
      );
=======
      this.props.collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const jobModal = (
      <Dialog
        open={this.state.jobModal !== null}
        onClose={() => {
<<<<<<< HEAD
          if (this.props.wfmJob) this.props.clearWfmJob();
          this.setState({ jobModal: null });
=======
          if (this.props.wfmJob) this.props.clearWfmJob()
          this.setState({ jobModal: null })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        }}
      >
        <DialogTitle>
          {this.state.jobModal ? (
            <div className={classes[getJobColor(this.state.jobModal.category)]}>
              {this.state.jobModal.jobNumber}: {this.state.jobModal.client}
            </div>
          ) : (
<<<<<<< HEAD
            "Job Details"
=======
            'Job Details'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          )}
        </DialogTitle>
        <DialogContent>
          {this.state.jobModal &&
            this.getJobDetails(
<<<<<<< HEAD
              this.state.jobModal.isJob && this.props.wfmJob
                ? { ...this.props.wfmJob, ...this.state.jobModal }
                : this.state.jobModal
            )}
        </DialogContent>
      </Dialog>
    );
=======
              this.state.jobModal.isJob && this.props.wfmJob ? { ...this.props.wfmJob, ...this.state.jobModal } : this.state.jobModal
            )}
        </DialogContent>
      </Dialog>
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div className={classes.marginTopStandard}>
        {this.props.modalType === WFM_TIME && <WfmTimeModal />}
        {jobModal}
        <div className={classes.flexRowRightAlign}>
<<<<<<< HEAD
          <Tooltip title="Log Time in WorkflowMax">
            <IconButton
              onClick={(e) => {
                this.props.showModal({ modalType: WFM_TIME });
=======
          <Tooltip title='Log Time in WorkflowMax'>
            <IconButton
              onClick={(e) => {
                this.props.showModal({ modalType: WFM_TIME })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            >
              <TimerIcon className={classes.iconRegular} />
            </IconButton>
          </Tooltip>
        </div>
<<<<<<< HEAD
        <Tabs
          value={this.state.tabValue}
          onChange={this.handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Leads" />
          <Tab label="Current Jobs" />
          <Tab label="Map" />
=======
        <Tabs value={this.state.tabValue} onChange={this.handleTabChange} indicatorColor='secondary' textColor='secondary' centered>
          <Tab label='Leads' />
          <Tab label='Current Jobs' />
          <Tab label='Map' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {/*<Tab label="Stats" />*/}
        </Tabs>
        {this.state.tabValue === 0 && <Leads that={this} />}
        {this.state.tabValue === 1 && <JobsTable that={this} />}
        {this.state.tabValue === 2 && <JobMap that={this} />}
      </div>
    )
  }
}

<<<<<<< HEAD
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Jobs)
);
=======
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Jobs))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
