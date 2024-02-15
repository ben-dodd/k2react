<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

//Modals
import { showModal } from "../../../actions/modal";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import AsbestosRegisterTable from "../components/AsbestosRegisterTable";
import AirMonitoringRecords from "../components/AirMonitoringRecords";

import Template1Icon from "@material-ui/icons/Filter1";
import Template2Icon from "@material-ui/icons/Filter2";
import Template3Icon from "@material-ui/icons/Filter3";

import classNames from "classnames";
import Popup from "reactjs-popup";
import {
  dateOf,
  getDaysSinceDate,
  getDaysSinceDateAgo,
  andList,
  personnelConvert,
} from "../../../actions/helpers";

import moment from "moment";
import _ from "lodash";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

//Modals
import { showModal } from '../../../actions/modal'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import AsbestosRegisterTable from '../components/AsbestosRegisterTable'
import AirMonitoringRecords from '../components/AirMonitoringRecords'

import Template1Icon from '@material-ui/icons/Filter1'
import Template2Icon from '@material-ui/icons/Filter2'
import Template3Icon from '@material-ui/icons/Filter3'

import _ from 'lodash'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  fetchCurrentJobState,
  saveCurrentJobState,
  clearWfmJob,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
  collateJobsList,
<<<<<<< HEAD
  getJobColor,
  getStateString,
  getNextActionType,
  getNextActionOverdueBy,
  getWfmUrl,
  getLeadHistoryDescription,
  handleJobChange,
} from "../../../actions/jobs";

import { collateSamples } from "../../../actions/asbestosReportHelpers";

import { filterMap, filterMapReset } from "../../../actions/display";
=======
  handleJobChange
} from '../../../actions/jobs'

import { collateSamples } from '../../../actions/asbestosReportHelpers'

import { filterMap, filterMapReset } from '../../../actions/display'
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
    staff: state.local.staff,
    sites: state.jobs.sites,
    siteJobs: state.jobs.siteJobs,
    siteAcm: state.jobs.siteAcm,
    samples: state.asbestosLab.samples,
    me: state.local.me,
    filter: state.display.filterMap,
    otherOptions: state.const.otherOptions,
<<<<<<< HEAD
    modalType: state.modal.modalType,
  };
};
=======
    modalType: state.modal.modalType
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

class AsbestosSurvey extends React.Component {
  state = {
    templateVersion: 3,
  };

  UNSAFE_componentWillMount() {
    const { site, sites, siteJobs, siteAcm, samples } = this.props;
=======
    collateJobsList: (wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes) =>
      dispatch(collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes))
  }
}

class AsbestosSurvey extends React.Component {
  state = {
    templateVersion: 3
  }

  UNSAFE_componentWillMount() {
    const { site, sites, siteJobs, siteAcm, samples } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    const { registerMap, registerList, airMonitoringRecords } = collateSamples(
      sites[site],
      siteJobs ? siteJobs[site] || {} : {},
      siteAcm ? siteAcm[site] || {} : {},
      samples
<<<<<<< HEAD
    );
    this.setState({ registerMap, registerList, airMonitoringRecords });
  }

  render() {
    const { classes, m, site, sites, siteJobs, siteAcm, samples } = this.props;
    const { registerList, airMonitoringRecords } = this.state;

    if (m) {
      const loading =
        !sites[site] || !siteJobs[site] || !siteAcm[site] || !samples;
=======
    )
    this.setState({ registerMap, registerList, airMonitoringRecords })
  }

  render() {
    const { classes, m, site, sites, siteJobs, siteAcm, samples } = this.props
    const { registerList, airMonitoringRecords } = this.state

    if (m) {
      const loading = !sites[site] || !siteJobs[site] || !siteAcm[site] || !samples
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      return (
        <div>
          <InputLabel>Select Template Version</InputLabel>
          <div className={classes.flexRow}>
            <IconButton onClick={() => this.setState({ templateVersion: 1 })}>
<<<<<<< HEAD
              <Template1Icon
                className={
                  this.state.templateVersion === 1
                    ? classes.iconRegularGreen
                    : classes.iconRegular
                }
              />
            </IconButton>
            <IconButton onClick={() => this.setState({ templateVersion: 2 })}>
              <Template2Icon
                className={
                  this.state.templateVersion === 2
                    ? classes.iconRegularGreen
                    : classes.iconRegular
                }
              />
            </IconButton>
            <IconButton onClick={() => this.setState({ templateVersion: 3 })}>
              <Template3Icon
                className={
                  this.state.templateVersion === 3
                    ? classes.iconRegularGreen
                    : classes.iconRegular
                }
              />
            </IconButton>
          </div>
          <AsbestosRegisterTable
            loading={loading}
            registerList={registerList}
            classes={classes}
          />
          <AirMonitoringRecords
            loading={loading}
            airMonitoringRecords={airMonitoringRecords}
            classes={classes}
          />
        </div>
      );
    } else return <div />;
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AsbestosSurvey)
);
=======
              <Template1Icon className={this.state.templateVersion === 1 ? classes.iconRegularGreen : classes.iconRegular} />
            </IconButton>
            <IconButton onClick={() => this.setState({ templateVersion: 2 })}>
              <Template2Icon className={this.state.templateVersion === 2 ? classes.iconRegularGreen : classes.iconRegular} />
            </IconButton>
            <IconButton onClick={() => this.setState({ templateVersion: 3 })}>
              <Template3Icon className={this.state.templateVersion === 3 ? classes.iconRegularGreen : classes.iconRegular} />
            </IconButton>
          </div>
          <AsbestosRegisterTable loading={loading} registerList={registerList} classes={classes} />
          <AirMonitoringRecords loading={loading} airMonitoringRecords={airMonitoringRecords} classes={classes} />
        </div>
      )
    } else return <div />
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosSurvey))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
