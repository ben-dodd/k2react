<<<<<<< HEAD
import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import { auth, constRef, noticesRef } from "../config/firebase";
import { connect } from "react-redux";
import { APP_SETTINGS, UPDATE_DATA } from "../constants/modal-types";
import qs from "qs";

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../config/styles";
import img_Logo from "../images/logo.png";
import moment from "moment";

// Material UI;

import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Collapse from "@material-ui/core/Collapse";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import NoticeboardIcon from "@material-ui/icons/SpeakerNotes";
import JobsIcon from "@material-ui/icons/Work";
import CurrentJobsIcon from "@material-ui/icons/Assignment";
import LeadsIcon from "@material-ui/icons/LocalPhone";
import SitesIcon from "@material-ui/icons/Place";
import MapIcon from "@material-ui/icons/Map";
import LabIcon from "@material-ui/icons/Colorize";
import StaffIcon from "@material-ui/icons/People";
import MyDetailsIcon from "@material-ui/icons/Person";
import VehiclesIcon from "@material-ui/icons/DirectionsCar";
import DevIcon from "@material-ui/icons/HourglassEmpty";
import TrainingIcon from "@material-ui/icons/School";
import QuizIcon from "@material-ui/icons/ContactSupport";
import ToolsIcon from "@material-ui/icons/Build";
import LibraryIcon from "@material-ui/icons/LocalLibrary";
import HelpIcon from "@material-ui/icons/Help";
import UpdatesIcon from "@material-ui/icons/Update";
import SettingsIcon from "@material-ui/icons/Settings";
import UpdateIcon from "@material-ui/icons/Cached";
import IncidentIcon from "@material-ui/icons/LocalHospital";
import CocIcon from "@material-ui/icons/TableChart";
import InventoryIcon from "@material-ui/icons/Category";
import LogIcon from "@material-ui/icons/ListAlt";
import QCIcon from "@material-ui/icons/OfflinePin";
import StatsIcon from "@material-ui/icons/InsertChart";
import TrainingPathIcon from "@material-ui/icons/DirectionsWalk";
import TrainingOverviewIcon from "@material-ui/icons/SupervisorAccount";
import ReadingLogIcon from "@material-ui/icons/Ballot";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import AppSettings from "./settings/AppSettings";
import UpdateData from "./settings/UpdateData";

import store from "../store";

import {
  fetchMe,
  resetLocal,
  copyStaff,
  fetchStaff,
  fetchAssets,
  onSearchChange,
  onCatChange,
} from "../actions/local";
import {
  fetchGeocodes,
  analyseJobHistory,
  fetchWFMClients,
  authoriseWFM,
  fetchWFMStaff,
  fetchWFMAuth,
} from "../actions/jobs";
import { sendSlackMessage, dateOf } from "../actions/helpers";
import { resetModal, showModal } from "../actions/modal";
import { resetDisplay } from "../actions/display";
import { initConstants } from "../actions/const";
=======
import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'
import { auth } from '../config/firebase'
import { connect } from 'react-redux'
import { APP_SETTINGS, UPDATE_DATA } from '../constants/modal-types'
import qs from 'qs'

// import PropTypes from "prop-types";
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../config/styles'
import moment from 'moment'

// Material UI;

import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase'
import CircularProgress from '@material-ui/core/CircularProgress'
import Collapse from '@material-ui/core/Collapse'

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard'
import NoticeboardIcon from '@material-ui/icons/SpeakerNotes'
import JobsIcon from '@material-ui/icons/Work'
import CurrentJobsIcon from '@material-ui/icons/Assignment'
import LeadsIcon from '@material-ui/icons/LocalPhone'
import SitesIcon from '@material-ui/icons/Place'
import MapIcon from '@material-ui/icons/Map'
import LabIcon from '@material-ui/icons/Colorize'
import StaffIcon from '@material-ui/icons/People'
import MyDetailsIcon from '@material-ui/icons/Person'
import VehiclesIcon from '@material-ui/icons/DirectionsCar'
import DevIcon from '@material-ui/icons/HourglassEmpty'
import TrainingIcon from '@material-ui/icons/School'
import QuizIcon from '@material-ui/icons/ContactSupport'
import ToolsIcon from '@material-ui/icons/Build'
import LibraryIcon from '@material-ui/icons/LocalLibrary'
import HelpIcon from '@material-ui/icons/Help'
import UpdatesIcon from '@material-ui/icons/Update'
import SettingsIcon from '@material-ui/icons/Settings'
import UpdateIcon from '@material-ui/icons/Cached'
import IncidentIcon from '@material-ui/icons/LocalHospital'
import CocIcon from '@material-ui/icons/TableChart'
import InventoryIcon from '@material-ui/icons/Category'
import LogIcon from '@material-ui/icons/ListAlt'
import QCIcon from '@material-ui/icons/OfflinePin'
import StatsIcon from '@material-ui/icons/InsertChart'
import TrainingPathIcon from '@material-ui/icons/DirectionsWalk'
import TrainingOverviewIcon from '@material-ui/icons/SupervisorAccount'
import ReadingLogIcon from '@material-ui/icons/Ballot'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import AppSettings from './settings/AppSettings'
import UpdateData from './settings/UpdateData'

import store from '../store'

import { fetchMe, resetLocal, copyStaff, fetchStaff, fetchAssets, onSearchChange, onCatChange } from '../actions/local'
import { fetchGeocodes, analyseJobHistory, fetchWFMClients, authoriseWFM, fetchWFMStaff, fetchWFMAuth } from '../actions/jobs'
import { sendSlackMessage, dateOf } from '../actions/helpers'
import { resetModal, showModal } from '../actions/modal'
import { resetDisplay } from '../actions/display'
import { initConstants } from '../actions/const'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  fixIds,
  transferNoticeboardReads,
  restructureWAAnalysisSamples,
  restructureAnalysisLog,
  restructureSampleIssueLog,
  cleanLogs,
  fixSamples,
  renameAnalysisLog,
  splitWFMStates,
<<<<<<< HEAD
  fixNoticeReads,
} from "../actions/temp";

// Pages
const Noticeboard = lazy(() => import("./noticeboard/Noticeboard"));

const AsbestosLab = lazy(() => import("./asbestoslab/AsbestosLab"));
const AsbestosLog = lazy(() => import("./asbestoslab/AsbestosLog"));
const AsbestosQualityControl = lazy(() =>
  import("./asbestoslab/AsbestosQualityControl")
);
const AsbestosStats = lazy(() => import("./asbestoslab/AsbestosStats"));

const JobMap = lazy(() => import("./jobs/JobMap"));
const JobsTable = lazy(() => import("./jobs/JobsTable"));
const Leads = lazy(() => import("./jobs/Leads"));
const JobStats = lazy(() => import("./jobs/JobStats"));
const Jobs = lazy(() => import("./jobs/Jobs"));
const Site = lazy(() => import("./jobs/Site"));
const Sites = lazy(() => import("./jobs/Sites"));

const Staff = lazy(() => import("./personnel/Staff"));

const MyDetails = lazy(() => import("./personnel/MyDetails"));

const Inventory = lazy(() => import("./inventory/Inventory"));

const TrainingOverview = lazy(() => import("./training/TrainingOverview"));
const TrainingPaths = lazy(() => import("./training/TrainingPaths"));
const TrainingReadingLog = lazy(() => import("./training/TrainingReadingLog"));

const TrainingPath = lazy(() => import("./training/TrainingPath"));

const Quizzes = lazy(() => import("./training/quizzes/Quizzes"));
const Questions = lazy(() => import("./training/quizzes/Questions"));
const Quiz = lazy(() => import("./training/quizzes/Quiz"));

const Library = lazy(() => import("./library/Library"));
const DocumentViewer = lazy(() => import("./library/DocumentViewer"));
const K2SignInScreen = lazy(() => import("./K2SignInScreen"));

const { whyDidYouUpdate } = require("why-did-you-update");
const mapStateToProps = (state) => {
  return {
    staff: state.local.staff,
    clients: state.local.wfmClients,
    me: state.local.me,
    initialLoading: state.display.initialLoading,
    latestVersion: state.const.appVersion,
    menuItems: state.const.menuItems,
    wfmAccessToken: state.local.wfmAccessToken,
    wfmRefreshToken: state.local.wfmRefreshToken,
    wfmAccessExpiry: state.local.wfmAccessExpiry,
    wfmAuthLoaded: state.local.wfmAuthLoaded,
  };
};

=======
  fixNoticeReads
} from '../actions/temp'

// Pages
const Noticeboard = lazy(() => import('./noticeboard/Noticeboard'))

const AsbestosLab = lazy(() => import('./asbestoslab/AsbestosLab'))
const AsbestosLog = lazy(() => import('./asbestoslab/AsbestosLog'))
const AsbestosQualityControl = lazy(() => import('./asbestoslab/AsbestosQualityControl'))
const AsbestosStats = lazy(() => import('./asbestoslab/AsbestosStats'))

const JobMap = lazy(() => import('./jobs/JobMap'))
const JobsTable = lazy(() => import('./jobs/JobsTable'))
const Leads = lazy(() => import('./jobs/Leads'))
const JobStats = lazy(() => import('./jobs/JobStats'))
const Jobs = lazy(() => import('./jobs/Jobs'))
const Site = lazy(() => import('./jobs/Site'))
const Sites = lazy(() => import('./jobs/Sites'))

const Staff = lazy(() => import('./personnel/Staff'))

const MyDetails = lazy(() => import('./personnel/MyDetails'))

const Inventory = lazy(() => import('./inventory/Inventory'))

const TrainingOverview = lazy(() => import('./training/TrainingOverview'))
const TrainingPaths = lazy(() => import('./training/TrainingPaths'))
const TrainingReadingLog = lazy(() => import('./training/TrainingReadingLog'))

const TrainingPath = lazy(() => import('./training/TrainingPath'))

const Quizzes = lazy(() => import('./training/quizzes/Quizzes'))
const Questions = lazy(() => import('./training/quizzes/Questions'))
const Quiz = lazy(() => import('./training/quizzes/Quiz'))

const Library = lazy(() => import('./library/Library'))
const DocumentViewer = lazy(() => import('./library/DocumentViewer'))
const K2SignInScreen = lazy(() => import('./K2SignInScreen'))

const mapStateToProps = (state) => {
  return {
    staff: state.local.staff,
    clients: state.local.wfmClients,
    me: state.local.me,
    initialLoading: state.display.initialLoading,
    latestVersion: state.const.appVersion,
    menuItems: state.const.menuItems,
    wfmAccessToken: state.local.wfmAccessToken,
    wfmRefreshToken: state.local.wfmRefreshToken,
    wfmAccessExpiry: state.local.wfmAccessExpiry,
    wfmAuthLoaded: state.local.wfmAuthLoaded
  }
}

>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMe: () => dispatch(fetchMe()),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    resetLocal: () => dispatch(resetLocal()),
    resetModal: () => dispatch(resetModal()),
    resetDisplay: () => dispatch(resetDisplay()),
    copyStaff: (oldId, newId) => dispatch(copyStaff(oldId, newId)),
    fetchWFMAuth: () => dispatch(fetchWFMAuth()),
<<<<<<< HEAD
    fetchWFMClients: (accessToken, refreshToken) =>
      dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchWFMStaff: (accessToken, refreshToken) =>
      dispatch(fetchWFMStaff(accessToken, refreshToken)),

    initConstants: () => dispatch(initConstants()),
    showModal: (modal) => dispatch(showModal(modal)),
    fetchStaff: () => dispatch(fetchStaff()),
    fetchAssets: (update) => dispatch(fetchAssets(update)),
    authoriseWFM: (params) => dispatch(authoriseWFM(params)),
    // fixIds: () => dispatch(fixIds())
  };
};

const thisVersion = "1.3.3";
=======
    fetchWFMClients: (accessToken, refreshToken) => dispatch(fetchWFMClients(accessToken, refreshToken)),
    fetchWFMStaff: (accessToken, refreshToken) => dispatch(fetchWFMStaff(accessToken, refreshToken)),

    initConstants: () => dispatch(initConstants()),
    showModal: (modal) => dispatch(showModal(modal)),
    fetchStaff: () => dispatch(fetchStaff()),
    fetchAssets: (update) => dispatch(fetchAssets(update)),
    authoriseWFM: (params) => dispatch(authoriseWFM(params))
    // fixIds: () => dispatch(fixIds())
  }
}

const thisVersion = '1.3.3'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class MainScreen extends React.PureComponent {
  // static whyDidYouRender = true;
  constructor(props) {
    super(props)
    this.state = {
      openDrawer: true,
      anchorEl: null,
      staffUid: null,
      openDev: false,
      openAsbestos: true,
      hidden: true,
      // openRef: false,
      // openStaff: false,
      // openMyDetails: false,
<<<<<<< HEAD
      openTraining: false,
=======
      openTraining: false
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      // openHelp: false,
    }
  }

  UNSAFE_componentWillMount() {
    sendSlackMessage(`${auth.currentUser.displayName} is triggering MainScreen componentWillMount`)
    // if (!this.props.wfmAccessToken) this.props.authoriseWFM();
    if (this.props.me && this.props.me.uid === undefined) this.props.fetchMe()
    if (this.props.menuItems === undefined) this.props.initConstants()
    this.props.fetchGeocodes()
    // this.props.fetchAssets();
    // splitWFMStates();
    if (this.props.staff && Object.keys(this.props.staff).length === 0) this.props.fetchStaff()
    this.props.fetchWFMAuth()
    // this.props.fixIds();
    // fixNoticeReads();
    // transferNoticeboardReads();
    // restructureWAAnalysisSamples();
    // restructureSampleIssueLog();
    // cleanLogs();
    // constRef.set(this.props.state.const);
    // sendSlackMessage(`${auth.currentUser.displayName} has logged in.`);
    // analyseJobHistory();
    // fixSamples();
    // fixNoticeReads();
    // renameAnalysisLog();
    // this.props.copyStaff('vpqfRcdsxOZMEoP5Aw6B','yrMXpAUR66Ug0Qb1kDeV8R9IBWq1');
    this.checkWFMAuthorised()
    this.getWFMData()
    setTimeout(
      () =>
        this.setState({
          hidden: false
        }),
      2000
    )
  }

  getWFMData = () => {
    if (this.props.wfmAccessToken && this.props.wfmRefreshToken) {
      if (!this.props.clients || this.props.clients.length === 0) {
        this.props.fetchWFMClients(this.props.wfmAccessToken, this.props.wfmRefreshToken)
      }
      // this.props.fetchWFMStaff(
      //   this.props.wfmAccessToken,
      //   this.props.wfmRefreshToken
      // );
    } else {
      console.log('token not here yet')
      setTimeout(this.getWFMData, 500)
    }
  }

<<<<<<< HEAD
  UNSAFE_componentWillMount() {
    sendSlackMessage(
      `${auth.currentUser.displayName} is triggering MainScreen componentWillMount`
    );
    // if (!this.props.wfmAccessToken) this.props.authoriseWFM();
    if (this.props.me && this.props.me.uid === undefined) this.props.fetchMe();
    if (this.props.menuItems === undefined) this.props.initConstants();
    this.props.fetchGeocodes();
    // this.props.fetchAssets();
    // splitWFMStates();
    if (this.props.staff && Object.keys(this.props.staff).length === 0)
      this.props.fetchStaff();
    this.props.fetchWFMAuth();
    // this.props.fixIds();
    // fixNoticeReads();
    // transferNoticeboardReads();
    // restructureWAAnalysisSamples();
    // restructureSampleIssueLog();
    // cleanLogs();
    // constRef.set(this.props.state.const);
    // sendSlackMessage(`${auth.currentUser.displayName} has logged in.`);
    // analyseJobHistory();
    // fixSamples();
    // fixNoticeReads();
    // renameAnalysisLog();
    // this.props.copyStaff('vpqfRcdsxOZMEoP5Aw6B','yrMXpAUR66Ug0Qb1kDeV8R9IBWq1');
    this.checkWFMAuthorised();
    this.getWFMData();
    setTimeout(
      () =>
        this.setState({
          hidden: false,
        }),
      2000
    );
=======
  checkWFMAuthorised = () => {
    console.log('CHECK AUTH CALLED')
    if (this.props.wfmAuthLoaded) {
      if (this.props.wfmAccessToken && moment().isBefore(moment(dateOf(this.props.wfmAccessExpiry)))) {
        console.log(`Access Expires on ${moment(dateOf(this.props.wfmAccessExpiry)).format('lll')}`)
        // All good
      } else if (this.props.wfmRefreshToken) {
        // Use refresh token to get a new access token
        // console.log(this.props.wfmRefreshToken);
        this.props.authoriseWFM({
          refreshToken: this.props.wfmRefreshToken
        })
      } else {
        // Authenticate user and authorize MyK2 to use WFM
        let code = qs.parse(this.props.location.search, {
          ignoreQueryPrefix: true
        }).code
        if (!code) {
          let path = `${process.env.REACT_APP_WFM_AUTH_ROOT}${process.env.REACT_APP_WFM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_WFM_REDIRECT_URI}&scope=workflowmax offline_access&state=${process.env.REACT_APP_WFM_STATE_KEY}`
          window.location.assign(path)
        } else {
          // User has been sent back to MyK2 with the code
          this.props.authoriseWFM({ code })
        }
      }
    } else {
      console.log('auth not here yet')
      setTimeout(this.checkWFMAuthorised, 500)
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  getWFMData = () => {
    if (this.props.wfmAccessToken && this.props.wfmRefreshToken) {
      if (!this.props.clients || this.props.clients.length === 0) {
        this.props.fetchWFMClients(
          this.props.wfmAccessToken,
          this.props.wfmRefreshToken
        );
      }
      // this.props.fetchWFMStaff(
      //   this.props.wfmAccessToken,
      //   this.props.wfmRefreshToken
      // );
    } else {
      console.log("token not here yet");
      setTimeout(this.getWFMData, 500);
    }
  };

  checkWFMAuthorised = () => {
    console.log("CHECK AUTH CALLED");
    if (this.props.wfmAuthLoaded) {
      if (
        this.props.wfmAccessToken &&
        moment().isBefore(moment(dateOf(this.props.wfmAccessExpiry)))
      ) {
        console.log(
          `Access Expires on ${moment(
            dateOf(this.props.wfmAccessExpiry)
          ).format("lll")}`
        );
        // All good
      } else if (this.props.wfmRefreshToken) {
        // Use refresh token to get a new access token
        // console.log(this.props.wfmRefreshToken);
        this.props.authoriseWFM({
          refreshToken: this.props.wfmRefreshToken,
        });
      } else {
        // Authenticate user and authorize MyK2 to use WFM
        let code = qs.parse(this.props.location.search, {
          ignoreQueryPrefix: true,
        }).code;
        if (!code) {
          let path = `${process.env.REACT_APP_WFM_AUTH_ROOT}${process.env.REACT_APP_WFM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_WFM_REDIRECT_URI}&scope=workflowmax offline_access&state=${process.env.REACT_APP_WFM_STATE_KEY}`;
          window.location.assign(path);
        } else {
          // User has been sent back to MyK2 with the code
          this.props.authoriseWFM({ code });
        }
      }
    } else {
      console.log("auth not here yet");
      setTimeout(this.checkWFMAuthorised, 500);
    }
  };

  handleLogOut = () => {
    // sendSlackMessage(`${this.props.state.local.me.name} has logged out.`);
    auth.signOut().then(() => {
      this.props.resetDisplay()
      this.props.resetLocal()
      this.props.resetModal()
      this.props.history.push('/')
    })
  }

  handleGoogleMenuToggle = (event) => {
<<<<<<< HEAD
    this.setState({ anchorEl: event.currentTarget });
  };

  handleGoogleMenuClose = (event) => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true });
  };
=======
    this.setState({ anchorEl: event.currentTarget })
  }

  handleGoogleMenuClose = (event) => {
    this.setState({ anchorEl: null })
  }

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleDrawerClose = () => {
    this.setState({
      openDrawer: false,
      openRef: false,
      openStaff: false,
<<<<<<< HEAD
      openMyDetails: false,
    });
  };
=======
      openMyDetails: false
    })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleRefClick = () => {
    // this.setState({
    //   // openDrawer: true,
    //   openRef: !this.state.openRef
    // });
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleAsbestosClick = () => {
    this.setState({
      // openDrawer: true,
<<<<<<< HEAD
      openAsbestos: !this.state.openAsbestos,
    });
  };
=======
      openAsbestos: !this.state.openAsbestos
    })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleDevClick = () => {
    this.setState({
      openDrawer: true,
<<<<<<< HEAD
      openDev: !this.state.openDev,
    });
  };
=======
      openDev: !this.state.openDev
    })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleStaffClick = () => {
    // this.setState({
    //   // openDrawer: true,
    //   openStaff: !this.state.openStaff
    // });
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleJobsClick = () => {
    this.setState({
      // openDrawer: true,
<<<<<<< HEAD
      openJobs: !this.state.openJobs,
    });
  };
=======
      openJobs: !this.state.openJobs
    })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleMyDetailsClick = () => {
    // this.setState({
    //   // openDrawer: true,
    //   openMyDetails: !this.state.openMyDetails
    // });
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  handleTrainingClick = () => {
    this.setState({
      openDrawer: true,
<<<<<<< HEAD
      openTraining: !this.state.openTraining,
    });
  };

  render() {
    const { classes, latestVersion, location } = this.props;
    const { anchorEl } = this.state;

    let displayName;
    let menuItems = this.props.menuItems ? this.props.menuItems : [];
=======
      openTraining: !this.state.openTraining
    })
  }

  render() {
    const { classes, latestVersion, location } = this.props
    const { anchorEl } = this.state

    let displayName
    let menuItems = this.props.menuItems ? this.props.menuItems : []
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (auth.currentUser) {
      displayName = auth.currentUser.displayName
    } else {
<<<<<<< HEAD
      displayName = "";
=======
      displayName = ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    }

    // Edit navigation drawer here
    const drawer = (
      <Drawer
        variant='permanent'
        classes={{
<<<<<<< HEAD
          paper: classNames(
            classes.drawerPaper,
            classes.colorAccent,
            !this.state.openDrawer && classes.drawerPaperClose
          ),
=======
          paper: classNames(classes.drawerPaper, classes.colorAccent, !this.state.openDrawer && classes.drawerPaperClose)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        }}
        open={this.state.openDrawer}
      >
        <div className={classes.toolbarIcon}>
<<<<<<< HEAD
          <IconButton
            onClick={this.handleDrawerClose}
            className={classes.colorAccent}
          >
=======
          <IconButton onClick={this.handleDrawerClose} className={classes.colorAccent}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
<<<<<<< HEAD
          {menuItems.includes("Noticeboard") && (
            <div>
              <ListItem button component={Link} to="/noticeboard">
=======
          {menuItems.includes('Noticeboard') && (
            <div>
              <ListItem button component={Link} to='/noticeboard'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <ListItemIcon>
                  <NoticeboardIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='Noticeboard' />
              </ListItem>

              <Divider />
            </div>
          )}
<<<<<<< HEAD

          {menuItems.includes("Staff") && (
            <ListItem button component={Link} to="/staff">
              <ListItemIcon>
                <StaffIcon className={classes.colorAccent} />
              </ListItemIcon>
              <ListItemText primary="Staff" />
            </ListItem>
          )}

          {menuItems.includes("My Details") && (
            <div>
              <ListItem button component={Link} to="/mydetails">
                <ListItemIcon>
                  <MyDetailsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="My Details" />
=======

          {menuItems.includes('Staff') && (
            <ListItem button component={Link} to='/staff'>
              <ListItemIcon>
                <StaffIcon className={classes.colorAccent} />
              </ListItemIcon>
              <ListItemText primary='Staff' />
            </ListItem>
          )}

          {menuItems.includes('My Details') && (
            <div>
              <ListItem button component={Link} to='/mydetails'>
                <ListItemIcon>
                  <MyDetailsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='My Details' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                {/*{this.state.openMyDetails ? <ExpandLess /> : <ExpandMore /> }*/}
              </ListItem>
              <Divider />
            </div>
          )}
<<<<<<< HEAD
          {menuItems.includes("Jobs") && (
            <div>
              <ListItem button component={Link} to="/jobs">
                <ListItemIcon>
                  <JobsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItem>
              <ListItem button component={Link} to="/sites">
                <ListItemIcon>
                  <SitesIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Sites" />
=======
          {menuItems.includes('Jobs') && (
            <div>
              <ListItem button component={Link} to='/jobs'>
                <ListItemIcon>
                  <JobsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='Jobs' />
              </ListItem>
              <ListItem button component={Link} to='/sites'>
                <ListItemIcon>
                  <SitesIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='Sites' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </ListItem>
              <Divider />
            </div>
          )}
          {/*<div>
          <ListItem button onClick={this.handleJobsClick}>
          <ListItemIcon>
            <JobsIcon className={classes.colorAccent} />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
            {this.state.openJobs ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openJobs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to="/jobs/current"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <CurrentJobsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Current Jobs" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/jobs/leads"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <LeadsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Leads" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/jobs/sites"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <SitesIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Sites" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/jobs/map"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <MapIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Job Map" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/jobs/stats"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <StatsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Job Stats" />
              </ListItem>
            </List>
          </Collapse>
        </div>}*/}
<<<<<<< HEAD
          {menuItems.includes("Asbestos Lab") && (
            <div>
              <ListItem button component={Link} to="/asbestoslab">
                <ListItemIcon>
                  <LabIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Asbestos Lab" />
=======
          {menuItems.includes('Asbestos Lab') && (
            <div>
              <ListItem button component={Link} to='/asbestoslab'>
                <ListItemIcon>
                  <LabIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='Asbestos Lab' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </ListItem>

              <Divider />
            </div>
          )}
          {/*{menuItems.includes('Asbestos Lab') && <div><ListItem button onClick={this.handleAsbestosClick}>
            <ListItemIcon>
              <LabIcon className={classes.colorAccent} />
            </ListItemIcon>
            <ListItemText primary="Asbestos Lab" />
            {this.state.openAsbestos ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openAsbestos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to="/asbestoslab"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <CocIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/asbestossamplelog"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <LogIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Sample Log" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/asbestosqc"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <QCIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Quality Control" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/asbestosstats"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <StatsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Stats" />
              </ListItem>
            </List>
          </Collapse>*/}
          {/*<Divider />
        <ListItem button component={Link} to="/inventory">
          <ListItemIcon>
            <InventoryIcon className={classes.colorAccent} />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>*/}

<<<<<<< HEAD
          {menuItems.includes("Training") && (
=======
          {menuItems.includes('Training') && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div>
              <ListItem button onClick={this.handleTrainingClick}>
                <ListItemIcon>
                  <TrainingIcon className={classes.colorAccent} />
                </ListItemIcon>
<<<<<<< HEAD
                <ListItemText primary="Training" />
                {this.state.openTraining ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={this.state.openTraining}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to="/training/overview"
                    className={classes.drawerNested}
                  >
                    <ListItemIcon>
                      <TrainingOverviewIcon className={classes.colorAccent} />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/training/paths"
                    className={classes.drawerNested}
                  >
                    <ListItemIcon>
                      <TrainingPathIcon className={classes.colorAccent} />
                    </ListItemIcon>
                    <ListItemText primary="Training Paths" />
                  </ListItem>
                </List>
                <ListItem
                  button
                  component={Link}
                  to="/quizzes"
                  className={classes.drawerNested}
                >
                  <ListItemIcon>
                    <QuizIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText primary="Quizzes" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/training/readinglog"
                  className={classes.drawerNested}
                >
                  <ListItemIcon>
                    <ReadingLogIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reading Log"
                    className={classes.mainMenuText}
                  />
=======
                <ListItemText primary='Training' />
                {this.state.openTraining ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.openTraining} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItem button component={Link} to='/training/overview' className={classes.drawerNested}>
                    <ListItemIcon>
                      <TrainingOverviewIcon className={classes.colorAccent} />
                    </ListItemIcon>
                    <ListItemText primary='Overview' />
                  </ListItem>
                  <ListItem button component={Link} to='/training/paths' className={classes.drawerNested}>
                    <ListItemIcon>
                      <TrainingPathIcon className={classes.colorAccent} />
                    </ListItemIcon>
                    <ListItemText primary='Training Paths' />
                  </ListItem>
                </List>
                <ListItem button component={Link} to='/quizzes' className={classes.drawerNested}>
                  <ListItemIcon>
                    <QuizIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText primary='Quizzes' />
                </ListItem>
                <ListItem button component={Link} to='/training/readinglog' className={classes.drawerNested}>
                  <ListItemIcon>
                    <ReadingLogIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText primary='Reading Log' className={classes.mainMenuText} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                </ListItem>
              </Collapse>
              <Divider />
            </div>
          )}

<<<<<<< HEAD
          {menuItems.includes("Library") && (
            <div>
              <ListItem button component={Link} to="/library">
                <ListItemIcon>
                  <LibraryIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Library" />
=======
          {menuItems.includes('Library') && (
            <div>
              <ListItem button component={Link} to='/library'>
                <ListItemIcon>
                  <LibraryIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary='Library' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </ListItem>
              <Divider />
            </div>
          )}

<<<<<<< HEAD
          {this.props.me.auth && this.props.me.auth["Admin"] && (
=======
          {this.props.me.auth && this.props.me.auth['Admin'] && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  this.props.showModal({
<<<<<<< HEAD
                    modalType: APP_SETTINGS,
                  });
=======
                    modalType: APP_SETTINGS
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                <ListItemIcon>
                  <SettingsIcon className={classes.colorAccent} />
                </ListItemIcon>
<<<<<<< HEAD
                <ListItemText primary="App Settings" />
=======
                <ListItemText primary='App Settings' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </ListItem>
              <ListItem
                button
                onClick={() => {
<<<<<<< HEAD
                  this.props.showModal({ modalType: UPDATE_DATA });
=======
                  this.props.showModal({ modalType: UPDATE_DATA })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                <ListItemIcon>
                  <UpdateIcon className={classes.colorAccent} />
                </ListItemIcon>
<<<<<<< HEAD
                <ListItemText primary="Update Data" />
=======
                <ListItemText primary='Update Data' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </ListItem>
            </div>
          )}
          <div className={classes.version}>{`v${thisVersion}`}</div>
<<<<<<< HEAD
          <div
            className={
              latestVersion == thisVersion
                ? classes.version
                : classes.versionOld
            }
          >
=======
          <div className={latestVersion == thisVersion ? classes.version : classes.versionOld}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            {latestVersion == thisVersion
              ? `Your version is up to date.`
              : `You are using an old version of MyK2. Hold the shift key and press F5 to force your browser to use the latest version (v${latestVersion})`}
          </div>
          {/*<Divider />
          <ListItem button onClick={this.handleDevClick}>
            <ListItemIcon>
              <DevIcon className={classes.colorAccent} />
            </ListItemIcon>
            <ListItemText primary="In Development" />
            {this.state.openDev ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.openDev} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                component={Link}
                to="/vehicles"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <VehiclesIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Vehicles" className={classes.subitem} />
              </ListItem>*/}

          {/*<ListItem
                button
                component={Link}
                to="/jobs"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <JobsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItem>
<<<<<<< HEAD

              <ListItem
                button
                component={Link}
                to="/incidents"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <IncidentIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Incidents" />
              </ListItem>*/}

=======

              <ListItem
                button
                component={Link}
                to="/incidents"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <IncidentIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Incidents" />
              </ListItem>*/}

>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {/*<ListItem button component={Link} to="/mydetails/training" className={classes.drawerNested}>
                  <ListItemIcon>
                    <MyDetailsIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText primary="Training" className={classes.subitem} />
                </ListItem>
                <ListItem button component={Link} to="/mydetails/jobs" className={classes.drawerNested}>
                  <ListItemIcon>
                    <MyDetailsIcon className={classes.colorAccent} />
                  </ListItemIcon>
                  <ListItemText primary="Job History" className={classes.subitem} />
                </ListItem>

              <ListItem
                button
                component={Link}
                to="/tools"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <ToolsIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Tools" />
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/help"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <HelpIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItem>
              {/*<ListItem
                button
                component={Link}
                to="/updates"
                className={classes.drawerNested}
              >
                <ListItemIcon>
                  <UpdatesIcon className={classes.colorAccent} />
                </ListItemIcon>
                <ListItemText primary="Version Updates" />
              </ListItem>
            </List>
          </Collapse>*/}
        </List>
      </Drawer>
    );

    return (
      <React.Fragment>
        {this.state.hidden ? (
<<<<<<< HEAD
          <Suspense
            fallback={<CircularProgress className={classes.signInCircle} />}
          >
            <K2SignInScreen mode="loading" />
=======
          <Suspense fallback={<CircularProgress className={classes.signInCircle} />}>
            <K2SignInScreen mode='loading' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          </Suspense>
        ) : (
          <div>
            <CssBaseline />
<<<<<<< HEAD
            {this.props.me &&
            this.props.me.key == process.env.REACT_APP_K2_STAFF_KEY ? (
              // && this.props.state.local.staff[auth.currentUser.uid].gmail == auth.currentUser.email)
              <div className={classes.root}>
                {this.props.location.pathname &&
                  !this.props.location.pathname.includes("/site/") && (
                    <AppBar
                      position="absolute"
                      className={classNames(
                        classes.appBar,
                        this.state.openDrawer && classes.appBarShift
                      )}
                    >
                      <Toolbar
                        variant="dense"
                        disableGutters={!this.state.openDrawer}
                        className={classes.toolbar}
                      >
                        <IconButton
                          color="inherit"
                          aria-label="openDrawer drawer"
                          onClick={this.handleDrawerOpen}
                          className={classNames(
                            classes.menuButton,
                            this.state.openDrawer && classes.menuButtonHidden
                          )}
                        >
                          <MenuIcon />
                        </IconButton>
                        {/*<IconButton
=======
            {this.props.me && this.props.me.key == process.env.REACT_APP_K2_STAFF_KEY ? (
              // && this.props.state.local.staff[auth.currentUser.uid].gmail == auth.currentUser.email)
              <div className={classes.root}>
                {this.props.location.pathname && !this.props.location.pathname.includes('/site/') && (
                  <AppBar position='absolute' className={classNames(classes.appBar, this.state.openDrawer && classes.appBarShift)}>
                    <Toolbar variant='dense' disableGutters={!this.state.openDrawer} className={classes.toolbar}>
                      <IconButton
                        color='inherit'
                        aria-label='openDrawer drawer'
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.state.openDrawer && classes.menuButtonHidden)}
                      >
                        <MenuIcon />
                      </IconButton>
                      {/*<IconButton
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            color="inherit"
                            onClick={ () => this.props.history.goBack() }
                            className={classes.menuButton}
                            >
                            <BackIcon />
                          </IconButton>*/}
<<<<<<< HEAD
                        {/* Toolbar heading and breadcrumbs go here */}
                        <Typography
                          color="inherit"
                          noWrap
                          className={classes.pageTitle}
                        >
                          <Switch>
                            <Route
                              exact
                              path="/"
                              render={() => (
                                <span>
                                  <NoticeboardIcon /> Noticeboard
                                </span>
                              )}
                            />
                            <Route
                              path="/dashboard"
                              render={() => (
                                <span>
                                  <DashboardIcon /> Dashboard
                                </span>
                              )}
                            />
                            <Route
                              path="/noticeboard"
                              render={() => (
                                <span>
                                  <NoticeboardIcon /> Noticeboard
                                </span>
                              )}
                            />
                            <Route
                              path="/incidents"
                              render={() => (
                                <span>
                                  <IncidentIcon /> Incidents
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/jobs"
                              render={() => (
                                <span>
                                  <JobsIcon /> Jobs
                                </span>
                              )}
                            />
                            <Route
                              path="/jobs/current"
                              render={() => (
                                <span>
                                  <CurrentJobsIcon /> Current Jobs
                                </span>
                              )}
                            />
                            <Route
                              path="/jobs/leads"
                              render={() => (
                                <span>
                                  <LeadsIcon /> Leads
                                </span>
                              )}
                            />
                            <Route
                              path="/jobs/stats"
                              render={() => (
                                <span>
                                  <StatsIcon /> Job Stats
                                </span>
                              )}
                            />
                            <Route
                              path="/jobs/map"
                              render={() => (
                                <span>
                                  <MapIcon /> Jobs Map
                                </span>
                              )}
                            />
                            <Route
                              path="/sites"
                              render={() => (
                                <span>
                                  <SitesIcon /> Sites
                                </span>
                              )}
                            />
                            <Route
                              path="/asbestoslab"
                              render={() => (
                                <span>
                                  <CocIcon /> Asbestos Lab
                                </span>
                              )}
                            />
                            <Route
                              path="/asbestossamplelog"
                              render={() => (
                                <span>
                                  <LogIcon /> Asbestos Lab: Sample Log
                                </span>
                              )}
                            />
                            <Route
                              path="/asbestosqc"
                              render={() => (
                                <span>
                                  <QCIcon /> Asbestos Lab: Quality Control
                                </span>
                              )}
                            />
                            <Route
                              path="/asbestosstats"
                              render={() => (
                                <span>
                                  <StatsIcon /> Asbestos Lab: Stats
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/staff"
                              render={() => (
                                <span>
                                  <StaffIcon /> Staff
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/inventory"
                              render={() => (
                                <span>
                                  <InventoryIcon /> Inventory
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/vehicles"
                              render={() => (
                                <span>
                                  <VehiclesIcon /> Vehicles
                                </span>
                              )}
                            />
                            <Route
                              path="/staff/details"
                              render={() => (
                                <span>
                                  <StaffIcon /> Staff Details
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/staff/jobs"
                              render={() => (
                                <span>
                                  <StaffIcon /> Staff Jobs
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/staff/training"
                              render={() => (
                                <span>
                                  <TrainingIcon /> Staff Training
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/mydetails"
                              render={() => (
                                <span>
                                  <MyDetailsIcon /> My Details
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/mydetails/training"
                              render={() => (
                                <span>
                                  <TrainingIcon /> My Training
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/mydetails/jobs"
                              render={() => (
                                <span>
                                  <JobsIcon /> My Job History
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/mydetails/readinglog"
                              render={() => (
                                <span>
                                  <ReadingLogIcon /> My Reading Log
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/mydetails/preferences"
                              render={() => <span>App Preferences</span>}
                            />
                            <Route
                              exact
                              path="/training"
                              render={() => (
                                <span>
                                  <TrainingPathIcon /> Training Paths
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/training/paths"
                              render={() => (
                                <span>
                                  <TrainingPathIcon /> Training Paths
                                </span>
                              )}
                            />
                            <Route
                              exact
                              path="/training/overview"
                              render={() => (
                                <span>
                                  <TrainingOverviewIcon /> Training Overview
                                </span>
                              )}
                            />
                            <Route
                              path="/training/path"
                              render={() => (
                                <span>
                                  <TrainingPathIcon /> Training Path
                                </span>
                              )}
                            />
                            <Route
                              path="/training/readinglog"
                              render={() => (
                                <span>
                                  <ReadingLogIcon /> Reading Log
                                </span>
                              )}
                            />
                            <Route
                              path="/method"
                              render={() => <span>Method</span>}
                            />
                            <Route
                              path="/quizzes"
                              render={() => (
                                <span>
                                  <QuizIcon /> Quizzes
                                </span>
                              )}
                            />
                            <Route
                              path="/questions"
                              render={() => (
                                <span>
                                  <QuizIcon /> Questions
                                </span>
                              )}
                            />
                            <Route
                              path="/quiz/"
                              render={() => (
                                <span>
                                  <QuizIcon /> Quiz
                                </span>
                              )}
                            />
                            <Route
                              path="/tools"
                              render={() => (
                                <span>
                                  <ToolsIcon /> Tools
                                </span>
                              )}
                            />
                            <Route
                              path="/library"
                              render={() => (
                                <span>
                                  <LibraryIcon /> Library
                                </span>
                              )}
                            />
                            <Route
                              path="/document"
                              render={() => (
                                <span>
                                  <LibraryIcon /> Library
                                </span>
                              )}
                            />
                            <Route
                              path="/help"
                              render={() => (
                                <span>
                                  <HelpIcon /> Help
                                </span>
                              )}
                            />
                            <Route
                              path="/updates"
                              render={() => (
                                <span>
                                  <UpdatesIcon /> Version Updates
                                </span>
                              )}
                            />
                          </Switch>
                        </Typography>
                        <Route
                          exact
                          path="/(|library|training|modules|noticeboard|inventory|jobs|sites|asbestoslab|asbestossamplelog|tools|noticeboard|help|staff|incidents|vehicles|quizzes|questions)"
                          render={() => (
                            <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                <SearchIcon />
                              </div>
                              <InputBase
                                value={this.props.search}
                                onChange={(e) => {
                                  store.dispatch(
                                    onSearchChange(e.target.value)
                                  );
                                  if (e.target.value !== null) {
                                    store.dispatch(onCatChange(null));
                                  }
                                }}
                                placeholder="Search…"
                                classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
                                }}
                              />
                            </div>
                          )}
                        />
                        <Button
                          aria-owns={anchorEl ? "google-menu" : null}
                          aria-haspopup="true"
                          onClick={this.handleGoogleMenuToggle}
                        >
                          <Avatar
                            alt={auth.currentUser.displayName}
                            src={auth.currentUser.photoURL}
                            className={classes.avatar}
                          />
                        </Button>
                        <Menu
                          id="google-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleGoogleMenuClose}
                        >
                          <MenuItem onClick={this.handleLogOut}>
                            Log Out {displayName}
                          </MenuItem>
                        </Menu>
                      </Toolbar>
                    </AppBar>
                  )}
=======
                      {/* Toolbar heading and breadcrumbs go here */}
                      <Typography color='inherit' noWrap className={classes.pageTitle}>
                        <Switch>
                          <Route
                            exact
                            path='/'
                            render={() => (
                              <span>
                                <NoticeboardIcon /> Noticeboard
                              </span>
                            )}
                          />
                          <Route
                            path='/dashboard'
                            render={() => (
                              <span>
                                <DashboardIcon /> Dashboard
                              </span>
                            )}
                          />
                          <Route
                            path='/noticeboard'
                            render={() => (
                              <span>
                                <NoticeboardIcon /> Noticeboard
                              </span>
                            )}
                          />
                          <Route
                            path='/incidents'
                            render={() => (
                              <span>
                                <IncidentIcon /> Incidents
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/jobs'
                            render={() => (
                              <span>
                                <JobsIcon /> Jobs
                              </span>
                            )}
                          />
                          <Route
                            path='/jobs/current'
                            render={() => (
                              <span>
                                <CurrentJobsIcon /> Current Jobs
                              </span>
                            )}
                          />
                          <Route
                            path='/jobs/leads'
                            render={() => (
                              <span>
                                <LeadsIcon /> Leads
                              </span>
                            )}
                          />
                          <Route
                            path='/jobs/stats'
                            render={() => (
                              <span>
                                <StatsIcon /> Job Stats
                              </span>
                            )}
                          />
                          <Route
                            path='/jobs/map'
                            render={() => (
                              <span>
                                <MapIcon /> Jobs Map
                              </span>
                            )}
                          />
                          <Route
                            path='/sites'
                            render={() => (
                              <span>
                                <SitesIcon /> Sites
                              </span>
                            )}
                          />
                          <Route
                            path='/asbestoslab'
                            render={() => (
                              <span>
                                <CocIcon /> Asbestos Lab
                              </span>
                            )}
                          />
                          <Route
                            path='/asbestossamplelog'
                            render={() => (
                              <span>
                                <LogIcon /> Asbestos Lab: Sample Log
                              </span>
                            )}
                          />
                          <Route
                            path='/asbestosqc'
                            render={() => (
                              <span>
                                <QCIcon /> Asbestos Lab: Quality Control
                              </span>
                            )}
                          />
                          <Route
                            path='/asbestosstats'
                            render={() => (
                              <span>
                                <StatsIcon /> Asbestos Lab: Stats
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/staff'
                            render={() => (
                              <span>
                                <StaffIcon /> Staff
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/inventory'
                            render={() => (
                              <span>
                                <InventoryIcon /> Inventory
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/vehicles'
                            render={() => (
                              <span>
                                <VehiclesIcon /> Vehicles
                              </span>
                            )}
                          />
                          <Route
                            path='/staff/details'
                            render={() => (
                              <span>
                                <StaffIcon /> Staff Details
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/staff/jobs'
                            render={() => (
                              <span>
                                <StaffIcon /> Staff Jobs
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/staff/training'
                            render={() => (
                              <span>
                                <TrainingIcon /> Staff Training
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/mydetails'
                            render={() => (
                              <span>
                                <MyDetailsIcon /> My Details
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/mydetails/training'
                            render={() => (
                              <span>
                                <TrainingIcon /> My Training
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/mydetails/jobs'
                            render={() => (
                              <span>
                                <JobsIcon /> My Job History
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/mydetails/readinglog'
                            render={() => (
                              <span>
                                <ReadingLogIcon /> My Reading Log
                              </span>
                            )}
                          />
                          <Route exact path='/mydetails/preferences' render={() => <span>App Preferences</span>} />
                          <Route
                            exact
                            path='/training'
                            render={() => (
                              <span>
                                <TrainingPathIcon /> Training Paths
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/training/paths'
                            render={() => (
                              <span>
                                <TrainingPathIcon /> Training Paths
                              </span>
                            )}
                          />
                          <Route
                            exact
                            path='/training/overview'
                            render={() => (
                              <span>
                                <TrainingOverviewIcon /> Training Overview
                              </span>
                            )}
                          />
                          <Route
                            path='/training/path'
                            render={() => (
                              <span>
                                <TrainingPathIcon /> Training Path
                              </span>
                            )}
                          />
                          <Route
                            path='/training/readinglog'
                            render={() => (
                              <span>
                                <ReadingLogIcon /> Reading Log
                              </span>
                            )}
                          />
                          <Route path='/method' render={() => <span>Method</span>} />
                          <Route
                            path='/quizzes'
                            render={() => (
                              <span>
                                <QuizIcon /> Quizzes
                              </span>
                            )}
                          />
                          <Route
                            path='/questions'
                            render={() => (
                              <span>
                                <QuizIcon /> Questions
                              </span>
                            )}
                          />
                          <Route
                            path='/quiz/'
                            render={() => (
                              <span>
                                <QuizIcon /> Quiz
                              </span>
                            )}
                          />
                          <Route
                            path='/tools'
                            render={() => (
                              <span>
                                <ToolsIcon /> Tools
                              </span>
                            )}
                          />
                          <Route
                            path='/library'
                            render={() => (
                              <span>
                                <LibraryIcon /> Library
                              </span>
                            )}
                          />
                          <Route
                            path='/document'
                            render={() => (
                              <span>
                                <LibraryIcon /> Library
                              </span>
                            )}
                          />
                          <Route
                            path='/help'
                            render={() => (
                              <span>
                                <HelpIcon /> Help
                              </span>
                            )}
                          />
                          <Route
                            path='/updates'
                            render={() => (
                              <span>
                                <UpdatesIcon /> Version Updates
                              </span>
                            )}
                          />
                        </Switch>
                      </Typography>
                      <Route
                        exact
                        path='/(|library|training|modules|noticeboard|inventory|jobs|sites|asbestoslab|asbestossamplelog|tools|noticeboard|help|staff|incidents|vehicles|quizzes|questions)'
                        render={() => (
                          <div className={classes.search}>
                            <div className={classes.searchIcon}>
                              <SearchIcon />
                            </div>
                            <InputBase
                              value={this.props.search}
                              onChange={(e) => {
                                store.dispatch(onSearchChange(e.target.value))
                                if (e.target.value !== null) {
                                  store.dispatch(onCatChange(null))
                                }
                              }}
                              placeholder='Search…'
                              classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                              }}
                            />
                          </div>
                        )}
                      />
                      <Button aria-owns={anchorEl ? 'google-menu' : null} aria-haspopup='true' onClick={this.handleGoogleMenuToggle}>
                        <Avatar alt={auth.currentUser.displayName} src={auth.currentUser.photoURL} className={classes.avatar} />
                      </Button>
                      <Menu id='google-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleGoogleMenuClose}>
                        <MenuItem onClick={this.handleLogOut}>Log Out {displayName}</MenuItem>
                      </Menu>
                    </Toolbar>
                  </AppBar>
                )}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                {drawer}
                <main className={classes.content}>
                  <AppSettings />
                  <UpdateData />
                  {/* All locations are matched to their components here */}
                  <Suspense
                    fallback={
                      <div className={classes.marginTopLarge}>
<<<<<<< HEAD
                        <LinearProgress color="secondary" />
=======
                        <LinearProgress color='secondary' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      </div>
                    }
                  >
                    <Switch>
<<<<<<< HEAD
                      <Route
                        exact
                        path="/staff"
                        render={(props) => <Staff {...props} />}
                      />
                      <Route
                        exact
                        path="/mydetails"
                        render={(props) => <MyDetails {...props} />}
                        key="mydetails"
                      />
                      <Route
                        exact
                        path="/"
                        render={(props) => <Noticeboard {...props} />}
                        key="noticeboard"
                      />
                      <Route
                        exact
                        path="/staff/details/:user"
                        render={(props) => <MyDetails {...props} />}
                        key="staffdetails"
                      />
=======
                      <Route exact path='/staff' render={(props) => <Staff {...props} />} />
                      <Route exact path='/mydetails' render={(props) => <MyDetails {...props} />} key='mydetails' />
                      <Route exact path='/' render={(props) => <Noticeboard {...props} />} key='noticeboard' />
                      <Route exact path='/staff/details/:user' render={(props) => <MyDetails {...props} />} key='staffdetails' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      {/*<Route exact path="/vehicles" component={Vehicles} />*/}
                      {/* <Route path="/help" component={Help} />*/}
                      {/*<Route path="/updates" component={Updates} />*/}
                      {/*<Route path="/dashboard" component={Dashboard} />*/}
<<<<<<< HEAD
                      <Route
                        path="/noticeboard"
                        render={(props) => <Noticeboard {...props} />}
                      />
                      {/*<Route path="/incidents" component={Incidents} />*/}
                      {/*<Route exact path="/jobs" component={Jobs} />*/}
                      <Route
                        path="/inventory"
                        render={(props) => <Inventory {...props} />}
                      />
                      <Route
                        exact
                        path="/jobs"
                        render={(props) => <Jobs {...props} />}
                      />
                      <Route
                        exact
                        path="/site/:site"
                        render={(props) => (
                          <Site
                            {...props}
                            handleDrawerClose={this.handleDrawerClose}
                          />
                        )}
                        key="site"
                      />
                      <Route
                        exact
                        path="/sites"
                        render={(props) => <Sites {...props} />}
                      />
                      <Route
                        path="/asbestoslab"
                        render={(props) => <AsbestosLab {...props} />}
                      />
                      <Route
                        path="/asbestossamplelog"
                        render={(props) => <AsbestosLog {...props} />}
                      />
                      <Route
                        path="/asbestosqc"
                        render={(props) => (
                          <AsbestosQualityControl {...props} />
                        )}
                      />
                      <Route
                        path="/asbestosstats"
                        render={(props) => <AsbestosStats {...props} />}
                      />
=======
                      <Route path='/noticeboard' render={(props) => <Noticeboard {...props} />} />
                      {/*<Route path="/incidents" component={Incidents} />*/}
                      {/*<Route exact path="/jobs" component={Jobs} />*/}
                      <Route path='/inventory' render={(props) => <Inventory {...props} />} />
                      <Route exact path='/jobs' render={(props) => <Jobs {...props} />} />
                      <Route
                        exact
                        path='/site/:site'
                        render={(props) => <Site {...props} handleDrawerClose={this.handleDrawerClose} />}
                        key='site'
                      />
                      <Route exact path='/sites' render={(props) => <Sites {...props} />} />
                      <Route path='/asbestoslab' render={(props) => <AsbestosLab {...props} />} />
                      <Route path='/asbestossamplelog' render={(props) => <AsbestosLog {...props} />} />
                      <Route path='/asbestosqc' render={(props) => <AsbestosQualityControl {...props} />} />
                      <Route path='/asbestosstats' render={(props) => <AsbestosStats {...props} />} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      {/*<Route
                        exact
                        path="/staff/training/:user"
                        component={UserTraining}
                        key="stafftraining"
                      />
                      <Route
                        exact
                        path="/staff/readinglog/:user"
                        component={UserReadingLog}
                        key="staffreadinglog"
                      />
                      <Route
                        exact
                        path="/mydetails/training"
                        component={UserTraining}
                        key="mytraining"
                      />*/}
<<<<<<< HEAD
                      <Route
                        exact
                        path="/training"
                        render={(props) => <TrainingPaths {...props} />}
                      />
                      <Route
                        exact
                        path="/training/overview"
                        render={(props) => <TrainingOverview {...props} />}
                      />
                      <Route
                        exact
                        path="/training/paths"
                        render={(props) => <TrainingPaths {...props} />}
                      />
                      <Route
                        path="/training/path/:uid"
                        render={(props) => <TrainingPath {...props} />}
                      />
                      {/*<Route path="/method/:uid" component={Method} />*/}
                      <Route
                        exact
                        path="/quizzes"
                        render={(props) => <Quizzes {...props} />}
                      />
                      <Route
                        exact
                        path="/training/readinglog"
                        render={(props) => <TrainingReadingLog {...props} />}
                        key="myreadinglog"
                      />
                      <Route
                        exact
                        path="/training/readinglog/:user"
                        render={(props) => <TrainingReadingLog {...props} />}
                        key="staffreadinglog"
                      />
                      <Route
                        exact
                        path="/questions"
                        render={(props) => <Questions {...props} />}
                      />
                      <Route
                        path="/quiz/:quiz"
                        render={(props) => <Quiz {...props} />}
                      />
                      {/*<Route path="/tools" component={Tools} />*/}
                      <Route
                        path="/library"
                        render={(props) => <Library {...props} />}
                      />
                      <Route
                        path="/document/:uid"
                        render={(props) => <DocumentViewer {...props} />}
                      />
=======
                      <Route exact path='/training' render={(props) => <TrainingPaths {...props} />} />
                      <Route exact path='/training/overview' render={(props) => <TrainingOverview {...props} />} />
                      <Route exact path='/training/paths' render={(props) => <TrainingPaths {...props} />} />
                      <Route path='/training/path/:uid' render={(props) => <TrainingPath {...props} />} />
                      {/*<Route path="/method/:uid" component={Method} />*/}
                      <Route exact path='/quizzes' render={(props) => <Quizzes {...props} />} />
                      <Route exact path='/training/readinglog' render={(props) => <TrainingReadingLog {...props} />} key='myreadinglog' />
                      <Route
                        exact
                        path='/training/readinglog/:user'
                        render={(props) => <TrainingReadingLog {...props} />}
                        key='staffreadinglog'
                      />
                      <Route exact path='/questions' render={(props) => <Questions {...props} />} />
                      <Route path='/quiz/:quiz' render={(props) => <Quiz {...props} />} />
                      {/*<Route path="/tools" component={Tools} />*/}
                      <Route path='/library' render={(props) => <Library {...props} />} />
                      <Route path='/document/:uid' render={(props) => <DocumentViewer {...props} />} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    </Switch>
                  </Suspense>
                </main>
              </div>
            ) : (
<<<<<<< HEAD
              <Suspense
                fallback={<CircularProgress className={classes.signInCircle} />}
              >
                <K2SignInScreen
                  mode="loginFailed"
                  handleLogOut={this.handleLogOut}
                />
=======
              <Suspense fallback={<CircularProgress className={classes.signInCircle} />}>
                <K2SignInScreen mode='loginFailed' handleLogOut={this.handleLogOut} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </Suspense>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}

// MainScreen.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

<<<<<<< HEAD
export default withRouter(
  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainScreen))
);
=======
export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainScreen)))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
