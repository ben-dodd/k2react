<<<<<<< HEAD
import React, { useRef } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
// import Paper from '@material-ui/core/Paper';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Parser from "html-react-parser";
// import IconButton from '@material-ui/core/IconButton';

import { auth, usersRef } from "../../config/firebase";

import Error from "@material-ui/icons/Error";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import AttrModal from "./modals/AttrModal";
import AttrList from "./components/MyDetailsAttrListItem";
import { USER_ATTR, EDITSTAFF } from "../../constants/modal-types";
import { showModal } from "../../actions/modal";
import {
  getUserAttrs,
  getEditStaff,
  fetchStaff,
  getEmailSignature,
  clearEditStaff,
} from "../../actions/local";
import { displayTimeDifference } from "../../actions/helpers";
import { tabMyDetails } from "../../actions/display";
import _ from "lodash";
=======
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
// import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
// import Parser from "html-react-parser";
// import IconButton from '@material-ui/core/IconButton';

import { auth, usersRef } from '../../config/firebase'

import Error from '@material-ui/icons/Error'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'

import AttrModal from './modals/AttrModal'
import AttrList from './components/MyDetailsAttrListItem'
import { USER_ATTR, EDITSTAFF } from '../../constants/modal-types'
import { showModal } from '../../actions/modal'
import { getUserAttrs, getEditStaff, fetchStaff, getEmailSignature, clearEditStaff } from '../../actions/local'
import { displayTimeDifference } from '../../actions/helpers'
import { tabMyDetails } from '../../actions/display'
import _ from 'lodash'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    editstaff: state.local.editstaff,
    me: state.local.me,
    offices: state.const.offices,
    jobDescriptions: state.const.jobDescriptions,
    permissions: state.const.permissions,
<<<<<<< HEAD
    tab: state.display.tabMyDetails,
  };
};
=======
    tab: state.display.tabMyDetails
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modal) => dispatch(showModal(modal)),
    getEditStaff: (user) => dispatch(getEditStaff(user)),
    clearEditStaff: () => dispatch(clearEditStaff()),
    fetchStaff: (update) => dispatch(fetchStaff(update)),
    getUserAttrs: (userPath) => dispatch(getUserAttrs(userPath)),
<<<<<<< HEAD
    tabMyDetails: (tab) => dispatch(tabMyDetails(tab)),
  };
};

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    var userPath = auth.currentUser.uid;
    if (props.match.params.user) userPath = props.match.params.user;
    this.state = {
      userPath: userPath,
      isLoading: true,
      edited: false,
    };
=======
    tabMyDetails: (tab) => dispatch(tabMyDetails(tab))
  }
}

class UserDetails extends React.Component {
  constructor(props) {
    super(props)
    var userPath = auth.currentUser.uid
    if (props.match.params.user) userPath = props.match.params.user
    this.state = {
      userPath: userPath,
      isLoading: true,
      edited: false
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // this.onEditUser = _.debounce(this.onEditUser, 300);
  }

  handleTabChange = (event, value) => {
<<<<<<< HEAD
    this.props.tabMyDetails(value);
  };

  UNSAFE_componentWillMount() {
    if (
      this.props.match.params.user &&
      this.props.me.auth &&
      this.props.me.auth["Admin"]
    ) {
      this.props.getEditStaff(this.props.match.params.user);
    } else if (!this.props.match.params.user && !this.props.me.attrs) {
      this.props.getUserAttrs(auth.currentUser.uid);
=======
    this.props.tabMyDetails(value)
  }

  UNSAFE_componentWillMount() {
    if (this.props.match.params.user && this.props.me.auth && this.props.me.auth['Admin']) {
      this.props.getEditStaff(this.props.match.params.user)
    } else if (!this.props.match.params.user && !this.props.me.attrs) {
      this.props.getUserAttrs(auth.currentUser.uid)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    }
  }

  componentWillUnmount() {
<<<<<<< HEAD
    if (this.state.edited) this.props.fetchStaff(true);
    this.props.clearEditStaff();
  }

  onEditUser = (target, select) => {
    let change = {};
    change[target.id] = target.value;
=======
    if (this.state.edited) this.props.fetchStaff(true)
    this.props.clearEditStaff()
  }

  onEditUser = (target, select) => {
    let change = {}
    change[target.id] = target.value
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (select) {
      this.setState({
        user: {
          ...this.state.user,
<<<<<<< HEAD
          ...change,
        },
      });
    }
    usersRef.doc(this.state.userPath).update(change);
    if (!this.state.edited) this.setState({ edited: true });
  };

  onEditAuth = (target, auth) => {
    if (this.props.me.auth && this.props.me.auth["Admin"]) {
      let change = {};
      if (auth) change = auth;
      change[target.id] = target.value;
      this.setState({
        user: {
          ...this.state.user,
          auth: change,
        },
      });
      usersRef.doc(this.state.userPath).update({ auth: change });
      if (!this.state.edited) this.setState({ edited: true });
    }
  };

  displayTimeAtK2 = () => {
    var user = {};
    if (this.props.match.params.user) {
      user = this.props.editstaff;
    } else {
      user = this.props.me;
    }
    if (user.startdate) {
      return displayTimeDifference(user.startdate);
=======
          ...change
        }
      })
    }
    usersRef.doc(this.state.userPath).update(change)
    if (!this.state.edited) this.setState({ edited: true })
  }

  onEditAuth = (target, auth) => {
    if (this.props.me.auth && this.props.me.auth['Admin']) {
      let change = {}
      if (auth) change = auth
      change[target.id] = target.value
      this.setState({
        user: {
          ...this.state.user,
          auth: change
        }
      })
      usersRef.doc(this.state.userPath).update({ auth: change })
      if (!this.state.edited) this.setState({ edited: true })
    }
  }

  displayTimeAtK2 = () => {
    var user = {}
    if (this.props.match.params.user) {
      user = this.props.editstaff
    } else {
      user = this.props.me
    }
    if (user.startdate) {
      return displayTimeDifference(user.startdate)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      // var timeAtK2 = new Date() - new Date(user.startdate);
      // var divideBy = {
      //   d: 86400000,
      //   m: 2629800000,
      //   y: 31557600000
      // };
      // var years = Math.floor(timeAtK2 / divideBy["y"]);
      // timeAtK2 = timeAtK2 % divideBy["y"];
      // var months = Math.floor(timeAtK2 / divideBy["m"]);
      // timeAtK2 = timeAtK2 % divideBy["m"];
      // var days = Math.floor(timeAtK2 / divideBy["d"]);
      // let y = " years ";
      // let m = " months and ";
      // let d = " days";
      // if (years === 1) y = " year ";
      // if (months === 1) m = " month and ";
      // if (days === 1) d = " day";
      // return years + y + months + m + days + d;
    } else {
<<<<<<< HEAD
      return "No start date set";
    }
  };

  render() {
    const { classes, tab } = this.props;

    if (
      this.state.isLoading &&
      ((this.props.match.params.user && this.props.editstaff != undefined) ||
        (!this.props.match.params.user && this.props.me != undefined))
    )
      this.setState({ isLoading: false });

    // User variable is assigned at this stage so that attributes are immediately updated when changed.
    var user = {};
    if (this.props.match.params.user) {
      user = this.props.editstaff;
    } else {
      user = this.props.me;
    }

    if (!user.maskfitsize) user.maskfitsize = "";

    let sixmonths = new Date();
    sixmonths = sixmonths.setMonth(sixmonths.getMonth() - 6);

    let admin = false;
    if (this.props.me.auth && this.props.me.auth["Admin"]) admin = true;
=======
      return 'No start date set'
    }
  }

  render() {
    const { classes, tab } = this.props

    if (
      this.state.isLoading &&
      ((this.props.match.params.user && this.props.editstaff != undefined) || (!this.props.match.params.user && this.props.me != undefined))
    )
      this.setState({ isLoading: false })

    // User variable is assigned at this stage so that attributes are immediately updated when changed.
    var user = {}
    if (this.props.match.params.user) {
      user = this.props.editstaff
    } else {
      user = this.props.me
    }

    if (!user.maskfitsize) user.maskfitsize = ''

    let sixmonths = new Date()
    sixmonths = sixmonths.setMonth(sixmonths.getMonth() - 6)

    let admin = false
    if (this.props.me.auth && this.props.me.auth['Admin']) admin = true
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <div style={{ marginTop: 80 }}>
        <AttrModal />
        {/* <Paper style={{ padding: 20, }}>*/}
        <div style={{ marginBottom: 20 }}>
<<<<<<< HEAD
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="General Detals" />
            <Tab label="Certificates" />
            <Tab label="Personal Gear" />
            <Tab label="Emergency Contacts" />
            <Tab label="Permissions" />
          </Tabs>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
=======
          <Tabs value={tab} onChange={this.handleTabChange} indicatorColor='secondary' textColor='secondary' centered>
            <Tab label='General Detals' />
            <Tab label='Certificates' />
            <Tab label='Personal Gear' />
            <Tab label='Emergency Contacts' />
            <Tab label='Permissions' />
          </Tabs>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {tab === 0 && (
            <div>
              {this.state.isLoading ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
<<<<<<< HEAD
                <Grid container justify="center" direction="row">
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <TextField
                        label="Preferred Name"
                        id="name"
                        helperText="This is the name that will be displayed on reports and test certificates."
                        className={classes.textField}
                        value={user.name ? user.name : ""}
=======
                <Grid container justify='center' direction='row'>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <TextField
                        label='Preferred Name'
                        id='name'
                        helperText='This is the name that will be displayed on reports and test certificates.'
                        className={classes.textField}
                        value={user.name ? user.name : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <div className={classes.textLabel}>Job Description</div>
                    <ListItem>
                      <Select
<<<<<<< HEAD
                        className={classNames(
                          classes.select,
                          classes.textField
                        )}
=======
                        className={classNames(classes.select, classes.textField)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          user.jobdescription
                            ? {
                                label: user.jobdescription,
<<<<<<< HEAD
                                id: user.jobdescription,
                              }
                            : { label: "", id: "" }
                        }
                        options={this.props.jobDescriptions.map((e) => ({
                          value: e,
                          label: e,
                        }))}
                        onChange={(e) =>
                          this.onEditUser(
                            { id: "jobdescription", value: e ? e.value : e },
                            true
                          )
                        }
=======
                                id: user.jobdescription
                              }
                            : { label: '', id: '' }
                        }
                        options={this.props.jobDescriptions.map((e) => ({
                          value: e,
                          label: e
                        }))}
                        onChange={(e) => this.onEditUser({ id: 'jobdescription', value: e ? e.value : e }, true)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                    <div className={classes.textLabel}>Office</div>
                    <ListItem>
                      <Select
<<<<<<< HEAD
                        className={classNames(
                          classes.select,
                          classes.textField
                        )}
                        value={
                          user.office
                            ? { label: user.office, id: user.office }
                            : { label: "", id: "" }
                        }
                        options={this.props.offices.map((e) => ({
                          value: e,
                          label: e,
                        }))}
                        onChange={(e) =>
                          this.onEditUser(
                            { id: "office", value: e ? e.value : e },
                            true
                          )
                        }
=======
                        className={classNames(classes.select, classes.textField)}
                        value={user.office ? { label: user.office, id: user.office } : { label: '', id: '' }}
                        options={this.props.offices.map((e) => ({
                          value: e,
                          label: e
                        }))}
                        onChange={(e) => this.onEditUser({ id: 'office', value: e ? e.value : e }, true)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Start Date At K2"
                        id="startdate"
                        type="date"
                        className={classes.textField}
                        value={user.startdate ? user.startdate : ""}
=======
                        label='Start Date At K2'
                        id='startdate'
                        type='date'
                        className={classes.textField}
                        value={user.startdate ? user.startdate : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <div className={classes.informationBoxWhiteRounded}>
                        <b>Time at K2</b>
                        <br />
                        {this.displayTimeAtK2()}
                      </div>
                    </ListItem>
                    <ListItem>
<<<<<<< HEAD
                      <Typography className={classes.subHeading}>
                        Contact Information
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Work Phone"
                        id="workphone"
                        className={classes.textField}
                        type="tel"
                        value={user.workphone ? user.workphone : ""}
=======
                      <Typography className={classes.subHeading}>Contact Information</Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label='Work Phone'
                        id='workphone'
                        className={classes.textField}
                        type='tel'
                        value={user.workphone ? user.workphone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="K2 Email"
                        id="email"
                        type="email"
                        helperText="Enter your '@k2.co.nz' email address."
                        className={classes.textField}
                        value={user.email ? user.email : ""}
=======
                        label='K2 Email'
                        id='email'
                        type='email'
                        helperText="Enter your '@k2.co.nz' email address."
                        className={classes.textField}
                        value={user.email ? user.email : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Gmail"
                        id="gmail"
                        type="email"
                        helperText="Enter your '@gmail.com' email address."
                        className={classes.textField}
                        value={user.gmail ? user.gmail : ""}
=======
                        label='Gmail'
                        id='gmail'
                        type='email'
                        helperText="Enter your '@gmail.com' email address."
                        className={classes.textField}
                        value={user.gmail ? user.gmail : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
<<<<<<< HEAD
                    <div className={classes.subHeading}>
                      Personal Contact Information
                    </div>
                    <div>
                      <TextField
                        label="Personal Phone"
                        id="personalphone"
                        type="tel"
                        className={classes.textField}
                        value={user.personalphone ? user.personalphone : ""}
=======
                    <div className={classes.subHeading}>Personal Contact Information</div>
                    <div>
                      <TextField
                        label='Personal Phone'
                        id='personalphone'
                        type='tel'
                        className={classes.textField}
                        value={user.personalphone ? user.personalphone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div>
                      <TextField
<<<<<<< HEAD
                        label="Home Address"
                        id="address"
                        multiline
                        rowsMax="4"
                        className={classes.textField}
                        value={user.address ? user.address : ""}
=======
                        label='Home Address'
                        id='address'
                        multiline
                        rowsMax='4'
                        className={classes.textField}
                        value={user.address ? user.address : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={classes.subHeading}>Email Signature</div>
<<<<<<< HEAD
                    <div>{Parser(getEmailSignature(user))}</div>
=======
                    {/* <div>{Parser(getEmailSignature(user))}</div> */}
                    <div>{getEmailSignature(user)}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {/*<div>
                      <Button
                        variant="outlined"
                        className={classes.marginBottomSmall}
                        onClick={e => {
                          this.emailSig.select();
                          document.execCommand('copy');
                          e.target.focus();
                        }}
                      >Copy To Clipboard</Button>
                    </div>*/}
                  </Grid>
                </Grid>
              )}
            </div>
          )}
          {tab === 1 && (
            <div>
              {this.state.isLoading || !user ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
<<<<<<< HEAD
                <div style={{ position: "relative", width: "60vw" }}>
                  <div>
                    <Button
                      className={classes.IconButton}
                      variant="outlined"
                      onClick={() => {
                        if (!this.state.edited) this.setState({ edited: true });
=======
                <div style={{ position: 'relative', width: '60vw' }}>
                  <div>
                    <Button
                      className={classes.IconButton}
                      variant='outlined'
                      onClick={() => {
                        if (!this.state.edited) this.setState({ edited: true })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.props.showModal({
                          modalType: USER_ATTR,
                          modalProps: {
                            userPath: this.state.userPath,
<<<<<<< HEAD
                            title: "Add New Item",
                            staffName: user.name,
                            doc: { type: "Tertiary" },
                          },
                        });
=======
                            title: 'Add New Item',
                            staffName: user.name,
                            doc: { type: 'Tertiary' }
                          }
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    >
                      Add New Item
                    </Button>
                  </div>
                  {user.attrs && Object.keys(user.attrs).length > 0 ? (
                    <div>
                      {Object.keys(user.attrs).map((key) => {
<<<<<<< HEAD
                        return (
                          <AttrList
                            key={key}
                            attr={user.attrs[key]}
                            userPath={this.state.userPath}
                            staffName={user.name}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <ListItem>
                      Click the button to add your qualifications, training and
                      health & safety records.
                    </ListItem>
=======
                        return <AttrList key={key} attr={user.attrs[key]} userPath={this.state.userPath} staffName={user.name} />
                      })}
                    </div>
                  ) : (
                    <ListItem>Click the button to add your qualifications, training and health & safety records.</ListItem>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  )}
                </div>
              )}
            </div>
          )}
          {tab === 2 && (
            <div>
              {this.state.isLoading ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
<<<<<<< HEAD
                <Grid container justify="center" direction="row">
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>
                        Mask
                      </Typography>
                    </ListItem>
                    <ListItem>
                      {user.maskfit === "OK" ? (
=======
                <Grid container justify='center' direction='row'>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>Mask</Typography>
                    </ListItem>
                    <ListItem>
                      {user.maskfit === 'OK' ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        <div className={classes.boldGreen}>
                          Mask Fit Tested <CheckCircleOutline />
                        </div>
                      ) : (
                        <div className={classes.boldGreen}>
<<<<<<< HEAD
                          {user.maskfit === "Expired"
                            ? "Mask Fit Test Expired!"
                            : "Mask Fit Not Tested"}
=======
                          {user.maskfit === 'Expired' ? 'Mask Fit Test Expired!' : 'Mask Fit Not Tested'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          <Error />
                        </div>
                      )}
                    </ListItem>
                    <ListItem>
                      <div>
<<<<<<< HEAD
                        Enter your mask fit certificate into your{" "}
                        <i>Certificates</i> list.
=======
                        Enter your mask fit certificate into your <i>Certificates</i> list.
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      </div>
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Model"
                        id="maskfitmodel"
                        className={classes.textField}
                        value={user.maskfitmodel ? user.maskfitmodel : ""}
=======
                        label='Model'
                        id='maskfitmodel'
                        className={classes.textField}
                        value={user.maskfitmodel ? user.maskfitmodel : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <FormControl className={classes.textField}>
                        <InputLabel shrink>Mask Size</InputLabel>
                        <Select
                          className={classes.select}
                          value={
                            user.maskfitsize
                              ? {
                                  label: user.maskfitsize,
<<<<<<< HEAD
                                  id: user.maskfitsize,
                                }
                              : { label: "", id: "" }
                          }
                          options={["S", "M", "L"].map((e) => ({
                            value: e,
                            label: e,
                          }))}
                          onChange={(e) =>
                            this.onEditUser(
                              { id: "maskfitsize", value: e ? e.value : e },
                              true
                            )
                          }
=======
                                  id: user.maskfitsize
                                }
                              : { label: '', id: '' }
                          }
                          options={['S', 'M', 'L'].map((e) => ({
                            value: e,
                            label: e
                          }))}
                          onChange={(e) => this.onEditUser({ id: 'maskfitsize', value: e ? e.value : e }, true)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          isClearable
                        />
                      </FormControl>
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Fit Factor"
                        id="maskfitfactor"
                        className={classes.textField}
                        value={user.maskfitfactor ? user.maskfitfactor : ""}
=======
                        label='Fit Factor'
                        id='maskfitfactor'
                        className={classes.textField}
                        value={user.maskfitfactor ? user.maskfitfactor : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Particulate Filters Replaced On"
                        id="maskparticulatefilters"
                        className={classes.textField}
                        type="date"
                        value={
                          user.maskparticulatefilters
                            ? user.maskparticulatefilters
                            : ""
                        }
=======
                        label='Particulate Filters Replaced On'
                        id='maskparticulatefilters'
                        className={classes.textField}
                        type='date'
                        value={user.maskparticulatefilters ? user.maskparticulatefilters : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Organic Filters Replaced On"
                        id="maskorganicfilters"
                        className={classes.textField}
                        type="date"
                        value={
                          user.maskorganicfilters ? user.maskorganicfilters : ""
                        }
=======
                        label='Organic Filters Replaced On'
                        id='maskorganicfilters'
                        className={classes.textField}
                        type='date'
                        value={user.maskorganicfilters ? user.maskorganicfilters : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
<<<<<<< HEAD
                    {user.maskorganicfilters &&
                      new Date(user.maskorganicfilters) <= sixmonths && (
                        <ListItem>
                          <div className={classes.boldRed}>
                            Replace organic filters! <Error />
                          </div>
                        </ListItem>
                      )}
                  </Grid>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>
                        Other PPE
                      </Typography>
=======
                    {user.maskorganicfilters && new Date(user.maskorganicfilters) <= sixmonths && (
                      <ListItem>
                        <div className={classes.boldRed}>
                          Replace organic filters! <Error />
                        </div>
                      </ListItem>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>Other PPE</Typography>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    </ListItem>
                    <ListItem>
                      <FormControlLabel
                        className={classes.marginLeftSmall}
                        control={
                          <Checkbox
                            checked={user.ppeHighVis}
<<<<<<< HEAD
                            onChange={(e) =>
                              this.onEditUser(
                                { id: "ppeHighVis", value: e.target.checked },
                                true
                              )
                            }
                            value="ppeHighVis"
                          />
                        }
                        label="High-Vis"
=======
                            onChange={(e) => this.onEditUser({ id: 'ppeHighVis', value: e.target.checked }, true)}
                            value='ppeHighVis'
                          />
                        }
                        label='High-Vis'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel
                        className={classes.marginLeftSmall}
                        control={
                          <Checkbox
                            checked={user.ppeHardHat}
<<<<<<< HEAD
                            onChange={(e) =>
                              this.onEditUser(
                                { id: "ppeHardHat", value: e.target.checked },
                                true
                              )
                            }
                            value="ppeHardHat"
                          />
                        }
                        label="Hard Hat"
=======
                            onChange={(e) => this.onEditUser({ id: 'ppeHardHat', value: e.target.checked }, true)}
                            value='ppeHardHat'
                          />
                        }
                        label='Hard Hat'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel
                        className={classes.marginLeftSmall}
                        control={
                          <Checkbox
                            checked={user.ppeBoots}
<<<<<<< HEAD
                            onChange={(e) =>
                              this.onEditUser(
                                { id: "ppeBoots", value: e.target.checked },
                                true
                              )
                            }
                            value="ppeBoots"
                          />
                        }
                        label="Steel-Cap Boots"
=======
                            onChange={(e) => this.onEditUser({ id: 'ppeBoots', value: e.target.checked }, true)}
                            value='ppeBoots'
                          />
                        }
                        label='Steel-Cap Boots'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel
                        className={classes.marginLeftSmall}
                        control={
                          <Checkbox
                            checked={user.ppeGlasses}
<<<<<<< HEAD
                            onChange={(e) =>
                              this.onEditUser(
                                { id: "ppeGlasses", value: e.target.checked },
                                true
                              )
                            }
                            value="ppeGlasses"
                          />
                        }
                        label="Safety Glasses"
=======
                            onChange={(e) => this.onEditUser({ id: 'ppeGlasses', value: e.target.checked }, true)}
                            value='ppeGlasses'
                          />
                        }
                        label='Safety Glasses'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              )}
            </div>
          )}
          {tab === 3 && (
            <div>
              {this.state.isLoading || !user ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
<<<<<<< HEAD
                <Grid container justify="center" direction="row">
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>
                        Primary Emergency Contact
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Name"
                        id="emergencyprimaryname"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryname
                            ? user.emergencyprimaryname
                            : ""
                        }
=======
                <Grid container justify='center' direction='row'>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
                      <Typography className={classes.subHeading}>Primary Emergency Contact</Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label='Name'
                        id='emergencyprimaryname'
                        className={classes.textField}
                        value={user.emergencyprimaryname ? user.emergencyprimaryname : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Relation"
                        id="emergencyprimaryrelation"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryrelation
                            ? user.emergencyprimaryrelation
                            : ""
                        }
=======
                        label='Relation'
                        id='emergencyprimaryrelation'
                        className={classes.textField}
                        value={user.emergencyprimaryrelation ? user.emergencyprimaryrelation : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Home Phone"
                        id="emergencyprimaryhomephone"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryhomephone
                            ? user.emergencyprimaryhomephone
                            : ""
                        }
=======
                        label='Home Phone'
                        id='emergencyprimaryhomephone'
                        className={classes.textField}
                        value={user.emergencyprimaryhomephone ? user.emergencyprimaryhomephone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Work Phone"
                        id="emergencyprimaryworkphone"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryworkphone
                            ? user.emergencyprimaryworkphone
                            : ""
                        }
=======
                        label='Work Phone'
                        id='emergencyprimaryworkphone'
                        className={classes.textField}
                        value={user.emergencyprimaryworkphone ? user.emergencyprimaryworkphone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Mobile"
                        id="emergencyprimarymobile"
                        className={classes.textField}
                        value={
                          user.emergencyprimarymobile
                            ? user.emergencyprimarymobile
                            : ""
                        }
=======
                        label='Mobile'
                        id='emergencyprimarymobile'
                        className={classes.textField}
                        value={user.emergencyprimarymobile ? user.emergencyprimarymobile : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Email"
                        id="emergencyprimaryemail"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryemail
                            ? user.emergencyprimaryemail
                            : ""
                        }
=======
                        label='Email'
                        id='emergencyprimaryemail'
                        className={classes.textField}
                        value={user.emergencyprimaryemail ? user.emergencyprimaryemail : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Home Address"
                        id="emergencyprimaryhomeaddress"
                        className={classes.textField}
                        value={
                          user.emergencyprimaryhomeaddress
                            ? user.emergencyprimaryhomeaddress
                            : ""
                        }
=======
                        label='Home Address'
                        id='emergencyprimaryhomeaddress'
                        className={classes.textField}
                        value={user.emergencyprimaryhomeaddress ? user.emergencyprimaryhomeaddress : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={9} md={8} lg={7} xl={6}>
                    <ListItem>
<<<<<<< HEAD
                      <Typography className={classes.subHeading}>
                        Secondary Emergency Contact
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Name"
                        id="emergencysecondaryname"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryname
                            ? user.emergencysecondaryname
                            : ""
                        }
=======
                      <Typography className={classes.subHeading}>Secondary Emergency Contact</Typography>
                    </ListItem>
                    <ListItem>
                      <TextField
                        label='Name'
                        id='emergencysecondaryname'
                        className={classes.textField}
                        value={user.emergencysecondaryname ? user.emergencysecondaryname : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Relation"
                        id="emergencysecondaryrelation"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryrelation
                            ? user.emergencysecondaryrelation
                            : ""
                        }
=======
                        label='Relation'
                        id='emergencysecondaryrelation'
                        className={classes.textField}
                        value={user.emergencysecondaryrelation ? user.emergencysecondaryrelation : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Home Phone"
                        id="emergencysecondaryhomephone"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryhomephone
                            ? user.emergencysecondaryhomephone
                            : ""
                        }
=======
                        label='Home Phone'
                        id='emergencysecondaryhomephone'
                        className={classes.textField}
                        value={user.emergencysecondaryhomephone ? user.emergencysecondaryhomephone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Work Phone"
                        id="emergencysecondaryworkphone"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryworkphone
                            ? user.emergencysecondaryworkphone
                            : ""
                        }
=======
                        label='Work Phone'
                        id='emergencysecondaryworkphone'
                        className={classes.textField}
                        value={user.emergencysecondaryworkphone ? user.emergencysecondaryworkphone : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Mobile"
                        id="emergencysecondarymobile"
                        className={classes.textField}
                        value={
                          user.emergencysecondarymobile
                            ? user.emergencysecondarymobile
                            : ""
                        }
=======
                        label='Mobile'
                        id='emergencysecondarymobile'
                        className={classes.textField}
                        value={user.emergencysecondarymobile ? user.emergencysecondarymobile : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Email"
                        id="emergencysecondaryemail"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryemail
                            ? user.emergencysecondaryemail
                            : ""
                        }
=======
                        label='Email'
                        id='emergencysecondaryemail'
                        className={classes.textField}
                        value={user.emergencysecondaryemail ? user.emergencysecondaryemail : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
<<<<<<< HEAD
                        label="Home Address"
                        id="emergencysecondaryhomeaddress"
                        className={classes.textField}
                        value={
                          user.emergencysecondaryhomeaddress
                            ? user.emergencysecondaryhomeaddress
                            : ""
                        }
=======
                        label='Home Address'
                        id='emergencysecondaryhomeaddress'
                        className={classes.textField}
                        value={user.emergencysecondaryhomeaddress ? user.emergencysecondaryhomeaddress : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        onChange={(e) => this.onEditUser(e.target)}
                        InputLabelProps={{ shrink: true }}
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              )}
            </div>
          )}
          {tab === 4 && (
            <div>
              {this.state.isLoading ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
<<<<<<< HEAD
                <Grid
                  container
                  justify="flex-start"
                  direction="row"
                  style={{ width: 800 }}
                >
=======
                <Grid container justify='flex-start' direction='row' style={{ width: 800 }}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  <Grid item>
                    {this.props.permissions.map((permission) => {
                      return (
                        <div key={permission.name}>
                          <div className={classes.marginBottomSmall}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disabled={!admin}
<<<<<<< HEAD
                                  checked={
                                    user.auth
                                      ? user.auth[permission.name]
                                      : false
                                  }
=======
                                  checked={user.auth ? user.auth[permission.name] : false}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                  onChange={(e) =>
                                    this.onEditAuth(
                                      {
                                        id: permission.name,
<<<<<<< HEAD
                                        value: e.target.checked,
=======
                                        value: e.target.checked
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                      },
                                      user.auth
                                    )
                                  }
                                  value={permission.name}
                                />
                              }
                              label={permission.name}
                            />
                          </div>
                          <div style={{ marginBottom: 12 }}>
                            <FormHelperText>{permission.desc}</FormHelperText>
                          </div>
                        </div>
<<<<<<< HEAD
                      );
=======
                      )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    })}
                  </Grid>
                </Grid>
              )}
            </div>
          )}
        </div>
        {/* </Paper>*/}
      </div>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(UserDetails)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UserDetails))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
