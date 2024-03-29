<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import { connect } from "react-redux";
import {
  fetchCocs,
  fetchCocsByJobNumber,
  fetchCocsBySearch,
  setAnalyst,
  setAnalysisMode,
  deleteCoc,
} from "../../actions/asbestosLab";
import { fetchStaff } from "../../actions/local";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import { connect } from 'react-redux'
import { fetchCocs, fetchCocsByJobNumber, fetchCocsBySearch, setAnalyst, setAnalysisMode, deleteCoc } from '../../actions/asbestosLab'
import { fetchStaff } from '../../actions/local'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  fetchCurrentJobState,
  saveCurrentJobState,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
<<<<<<< HEAD
  collateJobsList,
} from "../../actions/jobs";
=======
  collateJobsList
} from '../../actions/jobs'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

//Modals
import {
  ASBESTOS_COC_EDIT,
  UPDATE_CERTIFICATE_VERSION,
  ASBESTOS_SOIL_SUBSAMPLE_WEIGHTS,
  ASBESTOS_SAMPLE_LOG,
  ASBESTOS_LAB_STATS,
  ASBESTOS_LAB_MANAGER,
  WA_ANALYSIS,
  ASBESTOS_SAMPLE_EDIT,
  DOWNLOAD_LAB_CERTIFICATE,
  COC_LOG,
  SOIL_DETAILS,
  ASBESTOS_SAMPLE_EDIT_COC,
  CONFIRM_RESULT,
  ASBESTOS_SAMPLE_DETAILS,
  ASBESTOS_ACTIONS,
  ASBESTOS_LOGGED_SAMPLES,
<<<<<<< HEAD
  ASBESTOS_ACTION_DETAILS,
} from "../../constants/modal-types";
import { showModal } from "../../actions/modal";
import CocModal from "./modals/CocModal";
import SoilDetailsModal from "./modals/SoilDetailsModal";
import AsbestosSampleEditModal from "./modals/AsbestosSampleEditModal";
import DownloadLabCertificateModal from "./modals/DownloadLabCertificateModal";
import AsbestosSampleDetailsModal from "./modals/AsbestosSampleDetailsModal";
import AsbestosActionsModal from "./modals/AsbestosActionsModal";
import AsbestosSampleCocEditModal from "./modals/AsbestosSampleCocEditModal";
import ConfirmResultModal from "./modals/ConfirmResultModal";
import SampleLogModal from "./modals/SampleLogModal";
import CocLogModal from "./modals/CocLogModal";
import LoggedSamplesModal from "./modals/LoggedSamplesModal";
import AsbestosActionDetailsModal from "./modals/AsbestosActionDetailsModal";

import AsbestosBulkCocCard from "./components/AsbestosBulkCocCard";
import AsbestosAirCocCard from "./components/AsbestosAirCocCard";

import Select from "react-select";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import moment from "moment";
import classNames from "classnames";

import { DatePicker } from "@material-ui/pickers";
=======
  ASBESTOS_ACTION_DETAILS
} from '../../constants/modal-types'
import { showModal } from '../../actions/modal'
import CocModal from './modals/CocModal'
import SoilDetailsModal from './modals/SoilDetailsModal'
import AsbestosSampleEditModal from './modals/AsbestosSampleEditModal'
import DownloadLabCertificateModal from './modals/DownloadLabCertificateModal'
import AsbestosSampleDetailsModal from './modals/AsbestosSampleDetailsModal'
import AsbestosActionsModal from './modals/AsbestosActionsModal'
import AsbestosSampleCocEditModal from './modals/AsbestosSampleCocEditModal'
import ConfirmResultModal from './modals/ConfirmResultModal'
import SampleLogModal from './modals/SampleLogModal'
import CocLogModal from './modals/CocLogModal'
import LoggedSamplesModal from './modals/LoggedSamplesModal'
import AsbestosActionDetailsModal from './modals/AsbestosActionDetailsModal'

import AsbestosBulkCocCard from './components/AsbestosBulkCocCard'
import AsbestosAirCocCard from './components/AsbestosAirCocCard'

import Select from 'react-select'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import LinearProgress from '@material-ui/core/LinearProgress'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import moment from 'moment'
import classNames from 'classnames'

import { DatePicker } from '@material-ui/pickers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    cocs: state.asbestosLab.cocs,
    search: state.local.search,
    me: state.local.me,
    staff: state.local.staff,
    clients: state.jobs.wfmClients,
    bulkAnalysts: state.asbestosLab.bulkAnalysts,
    airAnalysts: state.asbestosLab.airAnalysts,
    analyst: state.asbestosLab.analyst,
    analysisMode: state.asbestosLab.analysisMode,
    modalType: state.modal.modalType,
    modalTypeSecondary: state.modal.modalTypeSecondary,
    wfmJobs: state.jobs.wfmJobs,
    wfmLeads: state.jobs.wfmLeads,
    wfmClients: state.jobs.wfmClients,
    currentJobState: state.jobs.currentJobState,
    geocodes: state.jobs.geocodes,
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    filter: state.display.filterMap,
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
    fetchCocs: () => dispatch(fetchCocs()),
<<<<<<< HEAD
    fetchCocsByJobNumber: (jobNumber) =>
      dispatch(fetchCocsByJobNumber(jobNumber)),
    fetchCocsBySearch: (client, startDate, endDate) =>
      dispatch(fetchCocsBySearch(client, startDate, endDate)),
=======
    fetchCocsByJobNumber: (jobNumber) => dispatch(fetchCocsByJobNumber(jobNumber)),
    fetchCocsBySearch: (client, startDate, endDate) => dispatch(fetchCocsBySearch(client, startDate, endDate)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    fetchStaff: () => dispatch(fetchStaff()),
    showModal: (modal) => dispatch(showModal(modal)),
    setAnalyst: (analyst) => dispatch(setAnalyst(analyst)),
    setAnalysisMode: (analysisMode) => dispatch(setAnalysisMode(analysisMode)),
<<<<<<< HEAD
    fetchWFMJobs: (accessToken, refreshToken) =>
      dispatch(fetchWFMJobs(accessToken, refreshToken)),
    fetchWFMLeads: (accessToken, refreshToken) =>
      dispatch(fetchWFMLeads(accessToken, refreshToken)),
    fetchWFMClients: (accessToken, refreshToken) =>
      dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchCurrentJobState: (ignoreCompleted) =>
      dispatch(fetchCurrentJobState(ignoreCompleted)),
=======
    fetchWFMJobs: (accessToken, refreshToken) => dispatch(fetchWFMJobs(accessToken, refreshToken)),
    fetchWFMLeads: (accessToken, refreshToken) => dispatch(fetchWFMLeads(accessToken, refreshToken)),
    fetchWFMClients: (accessToken, refreshToken) => dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchCurrentJobState: (ignoreCompleted) => dispatch(fetchCurrentJobState(ignoreCompleted)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    saveCurrentJobState: (state) => dispatch(saveCurrentJobState(state)),
    saveGeocodes: (g) => dispatch(saveGeocodes(g)),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    updateGeocodes: (g) => dispatch(updateGeocodes(g)),
    saveWFMItems: (items) => dispatch(saveWFMItems(items)),
    saveStats: (stats) => dispatch(saveStats(stats)),
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

class AsbestosLab extends React.Component {
  // static whyDidYouRender = true;
  state = {
    analyst: false,
<<<<<<< HEAD
    searchClient: "",
    searchJobNumber: "",
    searchStartDate: moment().subtract(1, "months").format("YYYY-MM-DD"),
    searchEndDate: moment().format("YYYY-MM-DD"),
  };
=======
    searchClient: '',
    searchJobNumber: '',
    searchStartDate: moment().subtract(1, 'months').format('YYYY-MM-DD'),
    searchEndDate: moment().format('YYYY-MM-DD')
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  UNSAFE_componentWillMount = () => {
    // console.log(this.props.clients);
    // console.log(this.props.clients.length === 0);
<<<<<<< HEAD
    this.props.fetchCocs();
    if (this.props.me && this.props.me.auth) {
      if (
        this.props.me.auth["Asbestos Air Analysis"] ||
        this.props.me.auth["Asbestos Admin"] ||
        this.props.me.auth["Asbestos Bulk Analysis"]
      ) {
        this.setState({
          analyst: true,
        });
        if (this.props.analyst !== this.props.me.name)
          this.props.setAnalyst(this.props.me.name);
      }
    }
    if (!this.props.staff || Object.keys(this.props.staff).length === 0)
      this.props.fetchStaff();
    this.getWFMData();
=======
    this.props.fetchCocs()
    if (this.props.me && this.props.me.auth) {
      if (
        this.props.me.auth['Asbestos Air Analysis'] ||
        this.props.me.auth['Asbestos Admin'] ||
        this.props.me.auth['Asbestos Bulk Analysis']
      ) {
        this.setState({
          analyst: true
        })
        if (this.props.analyst !== this.props.me.name) this.props.setAnalyst(this.props.me.name)
      }
    }
    if (!this.props.staff || Object.keys(this.props.staff).length === 0) this.props.fetchStaff()
    this.getWFMData()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // if (this.props.jobList && Object.keys(this.props.jobList).length === 0) {
    //   if (this.props.wfmJobs.length === 0) this.props.fetchWFMJobs();
    //   if (this.props.wfmLeads.length === 0) this.props.fetchWFMLeads();
    //   if (this.props.wfmClients.length === 0) this.props.fetchWFMClients();
    //   this.props.fetchCurrentJobState(false);
    //   if(this.props.geocodes === undefined) this.props.fetchGeocodes();
    // }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

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
    } else {
      console.log("token not here yet");
      setTimeout(this.getWFMData, 500);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.cocs &&
      Object.keys(this.props.cocs).length !== Object.keys(nextProps.cocs).length
    )
      return true;
    if (this.props.search !== nextProps.search) return true;
    if (this.state !== nextState) return true;
    if (this.props.modalType !== nextProps.modalType) return true;
    if (this.props.modalTypeSecondary !== nextProps.modalTypeSecondary)
      return true;
    else return false;
=======
        this.props.fetchWFMJobs(this.props.wfmAccessToken, this.props.me.wfmRefreshToken)
      }
    } else {
      console.log('token not here yet')
      setTimeout(this.getWFMData, 500)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.cocs && Object.keys(this.props.cocs).length !== Object.keys(nextProps.cocs).length) return true
    if (this.props.search !== nextProps.search) return true
    if (this.state !== nextState) return true
    if (this.props.modalType !== nextProps.modalType) return true
    if (this.props.modalTypeSecondary !== nextProps.modalTypeSecondary) return true
    else return false
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // return true;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true;
  //   if (Object.keys(this.props.cocs).length !== Object.keys(nextProps.cocs).length ||
  //     this.props.clients.length !== nextProps.clients.length ||
  //     this.props.analyst !== nextProps.analyst ||
  //     this.state !== nextState) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
<<<<<<< HEAD
    const {
      cocs,
      classes,
      modalType,
      modalTypeSecondary,
      wfmJobs,
      wfmLeads,
      wfmClients,
      currentJobState,
      jobList,
      geocodes,
    } = this.props;
=======
    const { cocs, classes, modalType, modalTypeSecondary, wfmJobs, wfmLeads, wfmClients, currentJobState, jobList, geocodes } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // if (
    //   wfmJobs.length > 0 &&
    //   wfmLeads.length > 0 &&
    //   wfmClients.length > 0 &&
    //   currentJobState !== undefined && Object.values(currentJobState).length > 0 &&
    //   jobList && Object.values(jobList).length === 0
    // )
    //   this.props.collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes, );

<<<<<<< HEAD
    moment.tz.setDefault("Pacific/Auckland");
    moment.updateLocale("en", {
      // workingWeekdays: [1,2,3,4,5],
      workinghours: {
        0: null,
        1: ["08:30:00", "17:00:00"],
        2: ["08:30:00", "17:00:00"],
        3: ["08:30:00", "17:00:00"],
        4: ["08:30:00", "17:00:00"],
        5: ["08:30:00", "17:00:00"],
        6: null,
      },
      holidays: [
        "2019-11-15",
        "2019-12-25",
        "2019-12-26",
        "2020-01-01",
        "2020-01-02",
        "2020-02-06",
        "2020-04-10",
        "2020-04-13",
        "2020-04-27",
        "2020-06-01",
        "2020-10-26",
        "2020-11-13",
        "2020-12-25",
        "2020-12-26",
      ],
    });

    // console.log('Asbestos Cocs Re-Rendering');

    let filteredCocs = Object.keys(cocs)
      .filter((job) => {
        let res = true;
        if (this.props.search) {
          let terms = this.props.search.split(" ");
          let search = job + " " + cocs[job].client + " " + cocs[job].address;
          terms.forEach((term) => {
            if (
              !search
                .toLowerCase()
                .replace("ā", "a")
                .includes(term.toLowerCase())
            )
              res = false;
          });
        }
        if (
          this.state.searchClient !== "" &&
          cocs[job].client !== this.state.searchClient
        )
          res = false;
        if (
          this.state.searchStartDate !== "" &&
          moment(cocs[job].lastModified.toDate()).isBefore(
            new Date(this.state.searchStartDate),
            "day"
          )
        )
          res = false;
        if (
          this.state.searchEndDate !== "" &&
          moment(cocs[job].lastModified.toDate()).isAfter(
            new Date(this.state.searchEndDate),
            "day"
          )
        )
          res = false;
        if (
          this.state.searchJobNumber !== "" &&
          cocs[job].jobNumber.includes(
            this.state.searchJobNumber.toUpperCase()
          ) === false
        )
          res = false;
        if (cocs[job].deleted === true) res = false;
        return res;
      })
      .sort((aJob, bJob) => {
        let a = cocs[aJob],
          b = cocs[bJob];
        let urgentA =
            (a.priority && a.priority > 0) || a.isClearance
              ? a.priority
                ? a.priority
                : 1
              : 0,
          urgentB =
            (b.priority && b.priority > 0) || b.isClearance
              ? b.priority
                ? b.priority
                : 1
              : 0;

        // Put urgent/clearance at top, normal in the middle, issued at bottom
        if (a.versionUpToDate === b.versionUpToDate && urgentA === urgentB) {
          if (a.versionUpToDate) return a.jobNumber.localeCompare(b.jobNumber);
          else return 0;
        }
        if (a.versionUpToDate && !b.versionUpToDate) return 1;
        if (!a.versionUpToDate && b.versionUpToDate) return -1;
        return urgentB - urgentA;
      });

=======
    moment.tz.setDefault('Pacific/Auckland')
    moment.updateLocale('en', {
      // workingWeekdays: [1,2,3,4,5],
      workinghours: {
        0: null,
        1: ['08:30:00', '17:00:00'],
        2: ['08:30:00', '17:00:00'],
        3: ['08:30:00', '17:00:00'],
        4: ['08:30:00', '17:00:00'],
        5: ['08:30:00', '17:00:00'],
        6: null
      },
      holidays: [
        '2019-11-15',
        '2019-12-25',
        '2019-12-26',
        '2020-01-01',
        '2020-01-02',
        '2020-02-06',
        '2020-04-10',
        '2020-04-13',
        '2020-04-27',
        '2020-06-01',
        '2020-10-26',
        '2020-11-13',
        '2020-12-25',
        '2020-12-26'
      ]
    })

    // console.log('Asbestos Cocs Re-Rendering');

    let filteredCocs = Object.keys(cocs)
      .filter((job) => {
        let res = true
        if (this.props.search) {
          let terms = this.props.search.split(' ')
          let search = job + ' ' + cocs[job].client + ' ' + cocs[job].address
          terms.forEach((term) => {
            if (!search.toLowerCase().replace('ā', 'a').includes(term.toLowerCase())) res = false
          })
        }
        if (this.state.searchClient !== '' && cocs[job].client !== this.state.searchClient) res = false
        if (
          this.state.searchStartDate !== '' &&
          moment(cocs[job].lastModified.toDate()).isBefore(new Date(this.state.searchStartDate), 'day')
        )
          res = false
        if (this.state.searchEndDate !== '' && moment(cocs[job].lastModified.toDate()).isAfter(new Date(this.state.searchEndDate), 'day'))
          res = false
        if (this.state.searchJobNumber !== '' && cocs[job].jobNumber.includes(this.state.searchJobNumber.toUpperCase()) === false)
          res = false
        if (cocs[job].deleted === true) res = false
        return res
      })
      .sort((aJob, bJob) => {
        let a = cocs[aJob],
          b = cocs[bJob]
        let urgentA = (a.priority && a.priority > 0) || a.isClearance ? (a.priority ? a.priority : 1) : 0,
          urgentB = (b.priority && b.priority > 0) || b.isClearance ? (b.priority ? b.priority : 1) : 0

        // Put urgent/clearance at top, normal in the middle, issued at bottom
        if (a.versionUpToDate === b.versionUpToDate && urgentA === urgentB) {
          if (a.versionUpToDate) return a.jobNumber.localeCompare(b.jobNumber)
          else return 0
        }
        if (a.versionUpToDate && !b.versionUpToDate) return 1
        if (!a.versionUpToDate && b.versionUpToDate) return -1
        return urgentB - urgentA
      })

>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <div className={classes.marginTopStandard}>
        {modalType === ASBESTOS_COC_EDIT && <CocModal />}
        {modalType === ASBESTOS_SAMPLE_LOG && <SampleLogModal />}
        {modalType === ASBESTOS_SAMPLE_EDIT && <AsbestosSampleEditModal />}
<<<<<<< HEAD
        {modalType === DOWNLOAD_LAB_CERTIFICATE && (
          <DownloadLabCertificateModal />
        )}
        {modalType === COC_LOG && <CocLogModal />}
        {modalType === CONFIRM_RESULT && <ConfirmResultModal />}
        {(modalType === ASBESTOS_SAMPLE_DETAILS ||
          modalTypeSecondary === ASBESTOS_SAMPLE_DETAILS) && (
          <AsbestosSampleDetailsModal />
        )}
        {modalType === ASBESTOS_ACTIONS && <AsbestosActionsModal />}
        {modalTypeSecondary === SOIL_DETAILS && <SoilDetailsModal />}
        {modalTypeSecondary === ASBESTOS_SAMPLE_EDIT_COC && (
          <AsbestosSampleCocEditModal />
        )}
        {modalType === ASBESTOS_LOGGED_SAMPLES && <LoggedSamplesModal />}
        {modalTypeSecondary === ASBESTOS_ACTION_DETAILS && (
          <AsbestosActionDetailsModal />
        )}
        <span>
          <Button
            variant="outlined"
=======
        {modalType === DOWNLOAD_LAB_CERTIFICATE && <DownloadLabCertificateModal />}
        {modalType === COC_LOG && <CocLogModal />}
        {modalType === CONFIRM_RESULT && <ConfirmResultModal />}
        {(modalType === ASBESTOS_SAMPLE_DETAILS || modalTypeSecondary === ASBESTOS_SAMPLE_DETAILS) && <AsbestosSampleDetailsModal />}
        {modalType === ASBESTOS_ACTIONS && <AsbestosActionsModal />}
        {modalTypeSecondary === SOIL_DETAILS && <SoilDetailsModal />}
        {modalTypeSecondary === ASBESTOS_SAMPLE_EDIT_COC && <AsbestosSampleCocEditModal />}
        {modalType === ASBESTOS_LOGGED_SAMPLES && <LoggedSamplesModal />}
        {modalTypeSecondary === ASBESTOS_ACTION_DETAILS && <AsbestosActionDetailsModal />}
        <span>
          <Button
            variant='outlined'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            className={classes.marginBottomSmall}
            onClick={() => {
              this.props.showModal({
                modalType: ASBESTOS_COC_EDIT,
                modalProps: {
<<<<<<< HEAD
                  title: "Create New Chain of Custody",
=======
                  title: 'Create New Chain of Custody',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  doc: {
                    samples: {},
                    deleted: false,
                    versionUpToDate: false,
<<<<<<< HEAD
                    mostRecentIssueSent: false,
                  },
                  isNew: true,
                },
              });
=======
                    mostRecentIssueSent: false
                  },
                  isNew: true
                }
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            New Chain of Custody
          </Button>
          <Button
<<<<<<< HEAD
            variant="outlined"
=======
            variant='outlined'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            className={classes.marginLeftBottomSmall}
            onClick={() => {
              this.props.showModal({
                modalType: ASBESTOS_LOGGED_SAMPLES,
<<<<<<< HEAD
                modalProps: {},
              });
=======
                modalProps: {}
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            Sample Log
          </Button>
          {/*<Button
            variant="outlined"
            className={classes.marginLeftBottomSmall}
            onClick={() => {
              this.props.showModal({
                modalType: ASBESTOS_LAB_STATS,
                modalProps: {
                  title: "Add New Chain of Custody",
                  doc: { dates: [], personnel: [], samples: {}, deleted: false, versionUpToDate: false, mostRecentIssueSent: false, },
                  isNew: true,
                }
              });
            }}
          >
            Lab Stats
          </Button>
          <Button
            variant="outlined"
            className={classes.marginLeftBottomSmall}
            onClick={() => {
              this.props.showModal({
                modalType: ASBESTOS_LAB_MANAGER,
                modalProps: {
                  title: "Add New Chain of Custody",
                  doc: { dates: [], personnel: [], samples: {}, deleted: false, versionUpToDate: false, mostRecentIssueSent: false, },
                  isNew: true,
                }
              });
            }}
          >
            Lab Manager
          </Button>*/}
        </span>
        <div className={classes.flexRow}>
          <div className={classes.searchBoxRoot}>
<<<<<<< HEAD
            <InputLabel className={classes.marginLeftBottomSmall}>
              Search by Job Number
            </InputLabel>
=======
            <InputLabel className={classes.marginLeftBottomSmall}>Search by Job Number</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div>
              <FormControl>
                <InputLabel shrink>Job Number</InputLabel>
                <Input
<<<<<<< HEAD
                  id="searchJobNumber"
                  value={this.state.searchJobNumber}
                  onChange={(e) =>
                    this.setState({ searchJobNumber: e.target.value })
                  }
                  startAdornment={
                    <InputAdornment position="start">AS</InputAdornment>
                  }
                />
              </FormControl>
              <Button
                className={classes.buttonGo}
                onClick={() =>
                  this.props.fetchCocsByJobNumber(
                    `AS${this.state.searchJobNumber}`
                  )
                }
              >
=======
                  id='searchJobNumber'
                  value={this.state.searchJobNumber}
                  onChange={(e) => this.setState({ searchJobNumber: e.target.value })}
                  startAdornment={<InputAdornment position='start'>AS</InputAdornment>}
                />
              </FormControl>
              <Button className={classes.buttonGo} onClick={() => this.props.fetchCocsByJobNumber(`AS${this.state.searchJobNumber}`)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                Go
              </Button>
            </div>
          </div>
          <div className={classes.spacerSmall} />
          <div className={classes.searchBoxRoot}>
<<<<<<< HEAD
            <InputLabel className={classes.marginLeftBottomSmall}>
              Search by Client and/or Date
            </InputLabel>
=======
            <InputLabel className={classes.marginLeftBottomSmall}>Search by Client and/or Date</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div className={classes.flexRow}>
              <FormControl className={classes.formSelectClient}>
                <InputLabel shrink>Client</InputLabel>
                <Select
                  className={classes.select}
                  defaultValue={{
                    label: this.state.searchClient,
<<<<<<< HEAD
                    id: this.state.searchClient,
                  }}
                  options={this.props.clients.map((client) => ({
                    value: client.name,
                    label: client.name,
                  }))}
                  onChange={(e) =>
                    this.setState({ searchClient: e ? e.value : "" })
                  }
=======
                    id: this.state.searchClient
                  }}
                  options={this.props.clients.map((client) => ({
                    value: client.name,
                    label: client.name
                  }))}
                  onChange={(e) => this.setState({ searchClient: e ? e.value : '' })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  isClearable
                  isSearchable
                />
              </FormControl>
              <div className={classes.spacerSmall} />
              <DatePicker
                value={this.state.searchStartDate}
                autoOk
<<<<<<< HEAD
                label="From"
                openTo="year"
                format="D MMMM YYYY"
                views={["year", "month", "date"]}
=======
                label='From'
                openTo='year'
                format='D MMMM YYYY'
                views={['year', 'month', 'date']}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                clearable
                onChange={(date) => this.setState({ searchStartDate: date })}
              />
              <DatePicker
                value={this.state.searchEndDate}
                autoOk
<<<<<<< HEAD
                label="To"
                openTo="year"
                disableFuture
                format="D MMMM YYYY"
                clearable
                views={["year", "month", "date"]}
=======
                label='To'
                openTo='year'
                disableFuture
                format='D MMMM YYYY'
                clearable
                views={['year', 'month', 'date']}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                onChange={(date) => this.setState({ searchEndDate: date })}
              />
              <Button
                className={classes.buttonGo}
<<<<<<< HEAD
                onClick={() =>
                  this.props.fetchCocsBySearch(
                    this.state.searchClient,
                    this.state.searchStartDate,
                    this.state.searchEndDate
                  )
                }
=======
                onClick={() => this.props.fetchCocsBySearch(this.state.searchClient, this.state.searchStartDate, this.state.searchEndDate)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                Go
              </Button>
            </div>
          </div>
          <div className={classes.spacerSmall} />
          {this.state.analyst && (
            <div className={classes.searchBoxRoot}>
<<<<<<< HEAD
              <InputLabel className={classes.marginLeftBottomSmall}>
                Report Analysis As:
              </InputLabel>
=======
              <InputLabel className={classes.marginLeftBottomSmall}>Report Analysis As:</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              <div>
                <FormControl className={classes.formSelectStaff}>
                  <InputLabel shrink>Analyst</InputLabel>
                  <Select
                    className={classes.select}
                    defaultValue={{
                      label: this.props.analyst,
<<<<<<< HEAD
                      id: this.props.analyst,
                    }}
                    options={this.props.bulkAnalysts.map((e) => ({
                      value: e.name,
                      label: e.name,
=======
                      id: this.props.analyst
                    }}
                    options={this.props.bulkAnalysts.map((e) => ({
                      value: e.name,
                      label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }))}
                    onChange={(e) => this.props.setAnalyst(e ? e.value : e)}
                  />
                </FormControl>
              </div>
            </div>
          )}
        </div>
        {cocs && Object.keys(cocs).length === 0 ? (
          <div className={classes.marginTopSmall}>
<<<<<<< HEAD
            <LinearProgress color="secondary" />
          </div>
        ) : filteredCocs.length < 1 ? (
          <div className={classNames(classes.marginTopSmall, classes.noItems)}>
            No Chains of Custody to display.
          </div>
        ) : (
          <div className={classes.marginTopSmall}>
            {filteredCocs.map((job) =>
              cocs[job].sampleType === "air" ? (
                <AsbestosAirCocCard key={job} job={job} />
              ) : (
                <AsbestosBulkCocCard key={job} job={job} />
              )
=======
            <LinearProgress color='secondary' />
          </div>
        ) : filteredCocs.length < 1 ? (
          <div className={classNames(classes.marginTopSmall, classes.noItems)}>No Chains of Custody to display.</div>
        ) : (
          <div className={classes.marginTopSmall}>
            {filteredCocs.map((job) =>
              cocs[job].sampleType === 'air' ? <AsbestosAirCocCard key={job} job={job} /> : <AsbestosBulkCocCard key={job} job={job} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            )}
          </div>
        )}
      </div>
    )
  }
}

<<<<<<< HEAD
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AsbestosLab)
);
=======
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosLab))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
