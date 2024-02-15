<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListItem from "@material-ui/core/ListItem";
// import Paper from '@material-ui/core/Paper';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import Input from "@material-ui/core/Input";

import LocationCity from "@material-ui/icons/LocationCity";
import School from "@material-ui/icons/School";
import Face from "@material-ui/icons/Face";
import LocalHospital from "@material-ui/icons/LocalHospital";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Https from "@material-ui/icons/Https";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import "react-table/react-table.css";
import Popup from "reactjs-popup";
import ApiCalendar from "react-google-calendar-api";

import StaffOverviewListItem from "./components/StaffOverviewListItem.js";
import { connect } from "react-redux";
import { getUserAttrs, fetchStaff } from "../../actions/local";
import { tabStaff, filterStaff } from "../../actions/display";
import { auth, usersRef } from "../../config/firebase";

const mapStateToProps = state => {
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'

import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListItem from '@material-ui/core/ListItem'
// import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Chip from '@material-ui/core/Chip'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'
import Input from '@material-ui/core/Input'

import LocationCity from '@material-ui/icons/LocationCity'
import School from '@material-ui/icons/School'
import Face from '@material-ui/icons/Face'
import LocalHospital from '@material-ui/icons/LocalHospital'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Https from '@material-ui/icons/Https'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'

import 'react-table/react-table.css'
import Popup from 'reactjs-popup'
import ApiCalendar from 'react-google-calendar-api'

import StaffOverviewListItem from './components/StaffOverviewListItem.js'
import { connect } from 'react-redux'
import { getUserAttrs, fetchStaff } from '../../actions/local'
import { tabStaff, filterStaff } from '../../actions/display'
import { auth, usersRef } from '../../config/firebase'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    staff: state.local.staff,
    me: state.local.me,
    search: state.local.search,
    offices: state.const.offices,
    contacts: state.const.officeContacts,
    permissions: state.const.permissions,
    qualificationtypes: state.const.qualificationtypes,
    tab: state.display.tabStaff,
    filter: state.display.filterStaff
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAttrs: userPath => dispatch(getUserAttrs(userPath)),
    fetchStaff: () => dispatch(fetchStaff()),
    tabStaff: tab => dispatch(tabStaff(tab)),
    filterStaff: filter => dispatch(filterStaff(filter))
  };
};

class Staff extends React.Component {
  constructor(props) {
    super(props);
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAttrs: (userPath) => dispatch(getUserAttrs(userPath)),
    fetchStaff: () => dispatch(fetchStaff()),
    tabStaff: (tab) => dispatch(tabStaff(tab)),
    filterStaff: (filter) => dispatch(filterStaff(filter))
  }
}

class Staff extends React.Component {
  constructor(props) {
    super(props)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    this.state = {
      tabValue: this.props.tab,
      admin: false,
      filterStaff: this.props.filter,
      events: {}
<<<<<<< HEAD
    };
  }

  componentWillMount() {
    if (!this.state.staff) this.props.fetchStaff();
  }

  filterOffice = chip => {
    let state = true;
    if (this.props.filter.officeFilters[chip]) state = false;

    let filterOn = false;
=======
    }
  }

  componentWillMount() {
    if (!this.state.staff) this.props.fetchStaff()
  }

  filterOffice = (chip) => {
    let state = true
    if (this.props.filter.officeFilters[chip]) state = false

    let filterOn = false
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let officeFilters = {
      ...this.props.filter.officeFilters,
      [chip]: state
<<<<<<< HEAD
    };

    Object.values(officeFilters).forEach(filter => {
      if (filter) filterOn = true;
    });
=======
    }

    Object.values(officeFilters).forEach((filter) => {
      if (filter) filterOn = true
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let newFilter = {
      ...this.props.filter,
      officeFilters: officeFilters,
      officeFilterOn: filterOn
<<<<<<< HEAD
    };

    this.props.filterStaff(newFilter);
  };

  filterAttr = chip => {
    let state = true;
    if (this.props.filter.attrFilters[chip]) state = false;

    let filterOn = state;
=======
    }

    this.props.filterStaff(newFilter)
  }

  filterAttr = (chip) => {
    let state = true
    if (this.props.filter.attrFilters[chip]) state = false

    let filterOn = state
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let attrFilters = {
      ...this.props.filter.attrFilters,
      [chip]: state
<<<<<<< HEAD
    };

    Object.values(attrFilters).forEach(filter => {
      if (filter) filterOn = true;
    });
=======
    }

    Object.values(attrFilters).forEach((filter) => {
      if (filter) filterOn = true
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let newFilters = {
      ...this.props.filter,
      attrFilters: attrFilters,
      attrFilterOn: filterOn
<<<<<<< HEAD
    };

    this.props.filterStaff(newFilters);
  };

  filterAuth = chip => {
    let state = true;
    if (this.props.filter.authFilters[chip]) state = false;

    let filterOn = state;
=======
    }

    this.props.filterStaff(newFilters)
  }

  filterAuth = (chip) => {
    let state = true
    if (this.props.filter.authFilters[chip]) state = false

    let filterOn = state
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let authFilters = {
      ...this.props.filter.authFilters,
      [chip]: state
<<<<<<< HEAD
    };

    Object.values(authFilters).forEach(filter => {
      if (filter) filterOn = true;
    });
=======
    }

    Object.values(authFilters).forEach((filter) => {
      if (filter) filterOn = true
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let newFilters = {
      ...this.props.filter,
      authFilters: authFilters,
      authFilterOn: filterOn
<<<<<<< HEAD
    };

    this.props.filterStaff(newFilters);
  };

  handleTabChange = (event, value) => {
    this.props.tabStaff(value);
  };
=======
    }

    this.props.filterStaff(newFilters)
  }

  handleTabChange = (event, value) => {
    this.props.tabStaff(value)
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  getEvents = (expanded, calendarid) => {
    if (expanded && calendarid) {
      if (ApiCalendar.sign && !this.state.events[calendarid]) {
        //console.log("Api calendar is signed");
<<<<<<< HEAD
        ApiCalendar.listUpcomingEvents(7, calendarid).then(
          ({ result }: any) => {
            // Possible error here
            //console.log("Results in");
            this.setState({
              events: {
                ...this.state.events,
                [calendarid]: result.items
              }
            });
            //console.log(result.items);
          }
        );
      }
    }
  };

  updateAllStaff = () => {
    //console.log("Updating all staff");
    Object.keys(this.props.staff).forEach(userPath => {
      //console.log("Updating " + userPath);
      this.props.getUserAttrs(userPath);
    });
  };

  setDocView = type => {
    let newFilter = {
      ...this.props.filter,
      docview: type
    };
    this.props.filterStaff(newFilter);
  };

  email = who => {
    var list = [];
    Object.values(this.props.staff).forEach(user => {
      if (
        user.auth &&
        user.auth["K2 Staff"] &&
        user.email &&
        user.uid !== auth.currentUser.uid
      ) {
        if (who === "all") {
          list.push(user.email);
        } else if (who === "Christchurch" && user.office === "Christchurch") {
          list.push(user.email);
        } else if (who === "Auckland" && user.office !== "Christchurch") {
          list.push(user.email);
        }
      }
    });
    let href = "mailto:" + list.join(";");
    window.location.href = href;
  };

  filterUser = user => {
    let filter = false;
    if (
      this.props.filter.officeFilterOn === false ||
      this.props.filter.officeFilters[user.office]
    )
      filter = true;
    if (this.props.filter.attrFilterOn) {
      if (this.props.filter.attrFilters["IP402"] && !user.ip402) filter = false;
      if (this.props.filter.attrFilters["Asbestos Assessor"] && !user.aanumber)
        filter = false;
      if (this.props.filter.attrFilters["Tertiary Degree"] && !user.tertiary)
        filter = false;
      if (
        this.props.filter.attrFilters["Science Degree"] &&
        !(user.tertiary && user.tertiary.includes("Sc"))
      )
        filter = false;
      if (
        this.props.filter.attrFilters["Mask Fit Tested"] &&
        user.maskfit !== "OK"
      )
        filter = false;
      if (this.props.filter.attrFilters["First Aid"] && !user.firstaid)
        filter = false;
    }
    if (this.props.filter.authFilterOn) {
      this.props.permissions.forEach(permission => {
        if (!user.auth) filter = false;
        else if (
          this.props.filter.authFilters[permission.name] &&
          !user.auth[permission.name]
        )
          filter = false;
      });
    }
    if (this.props.search) {
      if (
        !(user.name + user.office + user.jobdescription)
          .toLowerCase()
          .includes(this.props.search.toLowerCase())
      )
        filter = false;
    }
    return filter;
  };

  getDocs = () => {
    const staff = Object.values(this.props.staff).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    let docs = [];
    if (this.props.filter.docview !== "none") {
      staff.forEach(e => {
        if (e.docimages && e.docimages.length > 0) {
          if (
            !this.props.search ||
            (e.name + e.office + e.jobdescription)
              .toLowerCase()
              .includes(this.props.search.toLowerCase())
          ) {
            e.docimages.forEach(attr => {
=======
        ApiCalendar.listUpcomingEvents(7, calendarid).then(({ result }) => {
          // Possible error here
          //console.log("Results in");
          this.setState({
            events: {
              ...this.state.events,
              [calendarid]: result.items
            }
          })
          //console.log(result.items);
        })
      }
    }
  }

  updateAllStaff = () => {
    //console.log("Updating all staff");
    Object.keys(this.props.staff).forEach((userPath) => {
      //console.log("Updating " + userPath);
      this.props.getUserAttrs(userPath)
    })
  }

  setDocView = (type) => {
    let newFilter = {
      ...this.props.filter,
      docview: type
    }
    this.props.filterStaff(newFilter)
  }

  email = (who) => {
    var list = []
    Object.values(this.props.staff).forEach((user) => {
      if (user.auth && user.auth['K2 Staff'] && user.email && user.uid !== auth.currentUser.uid) {
        if (who === 'all') {
          list.push(user.email)
        } else if (who === 'Christchurch' && user.office === 'Christchurch') {
          list.push(user.email)
        } else if (who === 'Auckland' && user.office !== 'Christchurch') {
          list.push(user.email)
        }
      }
    })
    let href = 'mailto:' + list.join(';')
    window.location.href = href
  }

  filterUser = (user) => {
    let filter = false
    if (this.props.filter.officeFilterOn === false || this.props.filter.officeFilters[user.office]) filter = true
    if (this.props.filter.attrFilterOn) {
      if (this.props.filter.attrFilters['IP402'] && !user.ip402) filter = false
      if (this.props.filter.attrFilters['Asbestos Assessor'] && !user.aanumber) filter = false
      if (this.props.filter.attrFilters['Tertiary Degree'] && !user.tertiary) filter = false
      if (this.props.filter.attrFilters['Science Degree'] && !(user.tertiary && user.tertiary.includes('Sc'))) filter = false
      if (this.props.filter.attrFilters['Mask Fit Tested'] && user.maskfit !== 'OK') filter = false
      if (this.props.filter.attrFilters['First Aid'] && !user.firstaid) filter = false
    }
    if (this.props.filter.authFilterOn) {
      this.props.permissions.forEach((permission) => {
        if (!user.auth) filter = false
        else if (this.props.filter.authFilters[permission.name] && !user.auth[permission.name]) filter = false
      })
    }
    if (this.props.search) {
      if (!(user.name + user.office + user.jobdescription).toLowerCase().includes(this.props.search.toLowerCase())) filter = false
    }
    return filter
  }

  getDocs = () => {
    const staff = Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name))
    let docs = []
    if (this.props.filter.docview !== 'none') {
      staff.forEach((e) => {
        if (e.docimages && e.docimages.length > 0) {
          if (!this.props.search || (e.name + e.office + e.jobdescription).toLowerCase().includes(this.props.search.toLowerCase())) {
            e.docimages.forEach((attr) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              if (attr.type === this.props.filter.docview) {
                docs.push({
                  url: attr.url,
                  name: e.name
<<<<<<< HEAD
                });
              }
            });
          }
        }
      });
    }
    return docs;
  };
=======
                })
              }
            })
          }
        }
      })
    }
    return docs
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  render() {
    // const TreeTable = treeTableHOC(ReactTable);
    // const staff = Object.values(this.props.staff).concat([this.props.me]).sort((a, b) => a.name.localeCompare(b.name));
    const staff = Object.values(this.props.staff)
      .sort((a, b) => a.name.localeCompare(b.name))
<<<<<<< HEAD
      .filter(e => e.key !== "historic");
    const { classes, tab } = this.props;
    const docs = this.getDocs();
    const filter = (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          Filters
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div className={classes.flexRow}>
              {this.props.offices.map(chip => {
=======
      .filter((e) => e.key !== 'historic')
    const { classes, tab } = this.props
    const docs = this.getDocs()
    const filter = (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>Filters</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div className={classes.flexRow}>
              {this.props.offices.map((chip) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <div key={chip} className={classes.paddingAllSmall}>
                    <Chip
                      icon={<LocationCity />}
<<<<<<< HEAD
                      variant="outlined"
                      color={
                        this.props.filter.officeFilters[chip]
                          ? "secondary"
                          : "default"
                      }
=======
                      variant='outlined'
                      color={this.props.filter.officeFilters[chip] ? 'secondary' : 'default'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      onClick={() => this.filterOffice(chip)}
                      label={chip}
                    />
                  </div>
<<<<<<< HEAD
                );
              })}
            </div>
            <div className={classes.flexRow}>
              {[
                "IP402",
                "Asbestos Assessor",
                "Tertiary Degree",
                "Science Degree",
                "Mask Fit Tested",
                "First Aid"
              ].map(chip => {
=======
                )
              })}
            </div>
            <div className={classes.flexRow}>
              {['IP402', 'Asbestos Assessor', 'Tertiary Degree', 'Science Degree', 'Mask Fit Tested', 'First Aid'].map((chip) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <div key={chip} className={classes.paddingAllSmall}>
                    <Chip
                      icon={<School />}
<<<<<<< HEAD
                      variant="outlined"
                      color={
                        this.props.filter.attrFilters[chip]
                          ? "secondary"
                          : "default"
                      }
=======
                      variant='outlined'
                      color={this.props.filter.attrFilters[chip] ? 'secondary' : 'default'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      onClick={() => this.filterAttr(chip)}
                      label={chip}
                    />
                  </div>
<<<<<<< HEAD
                );
              })}
            </div>
            <div className={classes.flexRow}>
              {this.props.permissions.map(chip => {
=======
                )
              })}
            </div>
            <div className={classes.flexRow}>
              {this.props.permissions.map((chip) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <div key={chip.name} className={classes.paddingAllSmall}>
                    <Chip
                      icon={<Https />}
<<<<<<< HEAD
                      variant="outlined"
                      color={
                        this.props.filter.authFilters[chip.name]
                          ? "secondary"
                          : "default"
                      }
=======
                      variant='outlined'
                      color={this.props.filter.authFilters[chip.name] ? 'secondary' : 'default'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      onClick={() => this.filterAuth(chip.name)}
                      label={chip.name}
                    />
                  </div>
<<<<<<< HEAD
                );
=======
                )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              })}
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return (
      <div className={classes.marginTopStandard}>
        <div className={classes.marginBottomStandard}>
<<<<<<< HEAD
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="Overview" />
            <Tab label="Contact List" />
            <Tab label="Qualifications" />
            <Tab label="Documents" />
=======
          <Tabs value={tab} onChange={this.handleTabChange} indicatorColor='secondary' textColor='secondary' centered>
            <Tab label='Overview' />
            <Tab label='Contact List' />
            <Tab label='Qualifications' />
            <Tab label='Documents' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          </Tabs>
        </div>
        <div className={classes.paperFlexRow}>
          {tab === 0 && (
            <div className={classes.paperWidth}>
              {filter}
              {staff.length > 0 ? (
                <div className={classes.marginTopSmall}>
                  {staff
<<<<<<< HEAD
                    .filter(user => {
                      return this.filterUser(user);
                    })
                    .map(user => {
=======
                    .filter((user) => {
                      return this.filterUser(user)
                    })
                    .map((user) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      return (
                        <ExpansionPanel
                          key={user.name}
                          onChange={(event, ex) => {
<<<<<<< HEAD
                            this.getEvents(ex, user.gmail);
=======
                            this.getEvents(ex, user.gmail)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }}
                        >
                          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                            <b>{user.name}</b>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <StaffOverviewListItem
                              staff={{
                                ...user,
                                events: this.state.events[user.gmail]
                              }}
                            />
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
<<<<<<< HEAD
                      );
=======
                      )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    })}
                </div>
              ) : (
                <CircularProgress />
              )}
            </div>
          )}
          {tab === 1 && (
            <div className={classes.paperWidth}>
<<<<<<< HEAD
              <Button
                onClick={() => this.email("all")}
                color="primary"
                variant="outlined"
              >
                Email All Staff
              </Button>
              <Button
                onClick={() => this.email("Christchurch")}
                color="primary"
                variant="outlined"
                className={classes.marginSidesSmall}
              >
                Email Christchurch Staff
              </Button>
              <Button
                onClick={() => this.email("Auckland")}
                color="primary"
                variant="outlined"
              >
                Email North Island Staff
              </Button>
              {this.props.contacts.map(user => {
=======
              <Button onClick={() => this.email('all')} color='primary' variant='outlined'>
                Email All Staff
              </Button>
              <Button onClick={() => this.email('Christchurch')} color='primary' variant='outlined' className={classes.marginSidesSmall}>
                Email Christchurch Staff
              </Button>
              <Button onClick={() => this.email('Auckland')} color='primary' variant='outlined'>
                Email North Island Staff
              </Button>
              {this.props.contacts.map((user) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <ListItem key={user.name}>
                    <Grid container>
                      <Grid item xs={3}>
                        {user.name}
                      </Grid>
                      <Grid item xs={3}>
                        {user.workphone ? (
<<<<<<< HEAD
                          <Popup
                            trigger={
                              <a href={"tel:" + user.workphone}>
                                {user.workphone}
                              </a>
                            }
                            position="bottom center"
                            on="hover"
                          >
                            <div className={classes.popupPhoneNumber}>
                              {user.workphone}
                            </div>
=======
                          <Popup trigger={<a href={'tel:' + user.workphone}>{user.workphone}</a>} position='bottom center' on='hover'>
                            <div className={classes.popupPhoneNumber}>{user.workphone}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          </Popup>
                        ) : (
                          <div>Phone not listed.</div>
                        )}
                      </Grid>
                    </Grid>
                  </ListItem>
<<<<<<< HEAD
                );
              })}
              <hr />
              {staff
                .filter(user => {
                  if (this.props.search) {
                    return user.name
                      .toLowerCase()
                      .includes(this.props.search.toLowerCase());
                  } else {
                    return true;
                  }
                })
                .map(user => {
=======
                )
              })}
              <hr />
              {staff
                .filter((user) => {
                  if (this.props.search) {
                    return user.name.toLowerCase().includes(this.props.search.toLowerCase())
                  } else {
                    return true
                  }
                })
                .map((user) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <ListItem className={classes.hoverItem} key={user.name}>
                      <Grid container>
                        <Grid item xs={3}>
                          {user.name}
                        </Grid>
                        <Grid item xs={3}>
                          {user.workphone ? (
<<<<<<< HEAD
                            <Popup
                              trigger={
                                <a href={"tel:" + user.workphone}>
                                  {user.workphone}
                                </a>
                              }
                              position="bottom center"
                              on="hover"
                            >
                              <div className={classes.popupPhoneNumber}>
                                {user.workphone}
                              </div>
=======
                            <Popup trigger={<a href={'tel:' + user.workphone}>{user.workphone}</a>} position='bottom center' on='hover'>
                              <div className={classes.popupPhoneNumber}>{user.workphone}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            </Popup>
                          ) : (
                            <div>Phone not listed.</div>
                          )}
                        </Grid>
                        <Grid item xs={3}>
                          {user.email ? (
<<<<<<< HEAD
                            <a
                              className={classes.noTextDecoration}
                              href={"mailto:" + user.email}
                            >
=======
                            <a className={classes.noTextDecoration} href={'mailto:' + user.email}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              {user.email}
                            </a>
                          ) : (
                            <div>Email not set.</div>
                          )}
                        </Grid>
                        <Grid item xs={3}>
                          {user.gmail ? (
<<<<<<< HEAD
                            <a
                              className={classes.noTextDecoration}
                              href={"mailto:" + user.gmail}
                            >
=======
                            <a className={classes.noTextDecoration} href={'mailto:' + user.gmail}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              {user.gmail}
                            </a>
                          ) : (
                            <div>Gmail not set.</div>
                          )}
                        </Grid>
                      </Grid>
                    </ListItem>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </div>
          )}
          {tab === 2 && (
            <div className={classes.paperWidth}>
              {filter}
              <ListItem>
                <Grid container className={classes.bold}>
                  <Grid item xs={2}>
                    Name
                  </Grid>
                  <Grid item xs={1}>
                    Tertiary
                  </Grid>
                  <Grid item xs={1}>
                    <div className={classes.flexRowCenter}>IP402</div>
                  </Grid>
                  <Grid item xs={1}>
<<<<<<< HEAD
                    <div className={classes.flexRowCenter}>
                      Asbestos Assessor
                    </div>
=======
                    <div className={classes.flexRowCenter}>Asbestos Assessor</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </Grid>
                  <Grid item xs={1}>
                    <div className={classes.flexRowCenter}>Mask Fit</div>
                  </Grid>
                  <Grid item xs={1}>
                    <div className={classes.flexRowCenter}>First Aid</div>
                  </Grid>
                  <Grid item xs={5}>
                    NZQA Unit Standards Training
                  </Grid>
                </Grid>
              </ListItem>
              {staff
<<<<<<< HEAD
                .filter(user => {
                  return this.filterUser(user);
                })
                .map(user => {
=======
                .filter((user) => {
                  return this.filterUser(user)
                })
                .map((user) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <ListItem className={classes.hoverItemFat} key={user.name}>
                      <Grid container>
                        <Grid item xs={2}>
                          {user.name}
                        </Grid>
                        <Grid item xs={1}>
                          {user.tertiary}
                        </Grid>
                        <Grid item xs={1}>
<<<<<<< HEAD
                          {user.ip402 && (
                            <CheckCircleOutline
                              className={classes.iconRegularGreen}
                            />
                          )}
=======
                          {user.ip402 && <CheckCircleOutline className={classes.iconRegularGreen} />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        </Grid>
                        <Grid item xs={1}>
                          {user.aanumber}
                        </Grid>
                        <Grid item xs={1}>
<<<<<<< HEAD
                          {user.maskfit && (
                            <Face
                              className={
                                user.maskfit === "OK"
                                  ? classes.iconRegularGreen
                                  : classes.iconRegularRed
                              }
                            />
                          )}
                        </Grid>
                        <Grid item xs={1}>
                          {user.firstaid && (
                            <LocalHospital
                              className={
                                user.firstaid === "OK"
                                  ? classes.iconRegularGreen
                                  : classes.iconRegularRed
                              }
                            />
=======
                          {user.maskfit && <Face className={user.maskfit === 'OK' ? classes.iconRegularGreen : classes.iconRegularRed} />}
                        </Grid>
                        <Grid item xs={1}>
                          {user.firstaid && (
                            <LocalHospital className={user.firstaid === 'OK' ? classes.iconRegularGreen : classes.iconRegularRed} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          )}
                        </Grid>
                        <Grid item xs={5}>
                          {user.nzqatraining}
                        </Grid>
                      </Grid>
                    </ListItem>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </div>
          )}
          {tab === 3 && (
            <div className={classes.paperWidth}>
              <FormControl className={classes.formInputLarge}>
                <InputLabel shrink>Document Type</InputLabel>
                <Select
                  className={classes.select}
                  defaultValue={{
                    label: this.props.filter.docview,
                    id: this.props.filter.docview
                  }}
<<<<<<< HEAD
                  options={Object.keys(this.props.qualificationtypes).map(
                    e => ({
                      value: e,
                      label: this.props.qualificationtypes[e].name
                    })
                  )}
                  onChange={e => this.setDocView(e ? e.value : e)}
=======
                  options={Object.keys(this.props.qualificationtypes).map((e) => ({
                    value: e,
                    label: this.props.qualificationtypes[e].name
                  }))}
                  onChange={(e) => this.setDocView(e ? e.value : e)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  isClearable
                />
              </FormControl>
              <Button
                className={classes.marginTopStandard}
<<<<<<< HEAD
                variant="outlined"
                color="primary"
                onClick={() => {
                  let url =
                    "https://api.k2.co.nz/v1/doc/scripts/staff/qualification_documents.php?images=" +
                    docs.map(doc => encodeURIComponent(doc.url)).join(";") +
                    "&doctype=" +
                    this.props.qualificationtypes[this.props.filter.docview]
                      .name +
                    "&format=A5";
                  window.open(url);
=======
                variant='outlined'
                color='primary'
                onClick={() => {
                  let url =
                    'https://api.k2.co.nz/v1/doc/scripts/staff/qualification_documents.php?images=' +
                    docs.map((doc) => encodeURIComponent(doc.url)).join(';') +
                    '&doctype=' +
                    this.props.qualificationtypes[this.props.filter.docview].name +
                    '&format=A5'
                  window.open(url)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                Printable Version
              </Button>
<<<<<<< HEAD
              {this.props.filter.docview !== "none" && (
                <GridList
                  cellHeight={
                    this.props.filter.docview
                      ? this.props.qualificationtypes[this.props.filter.docview]
                          .cellHeight
                      : 420
                  }
                  cols={
                    this.props.filter.docview
                      ? this.props.qualificationtypes[this.props.filter.docview]
                          .cols
                      : 6
                  }
                >
                  {docs.map(doc => {
                    return (
                      <GridListTile
                        key={doc.url}
                        onClick={() => window.open(doc.url)}
                      >
                        <img src={doc.url} alt={doc.name} />
                        <GridListTileBar title={doc.name} />
                      </GridListTile>
                    );
=======
              {this.props.filter.docview !== 'none' && (
                <GridList
                  cellHeight={this.props.filter.docview ? this.props.qualificationtypes[this.props.filter.docview].cellHeight : 420}
                  cols={this.props.filter.docview ? this.props.qualificationtypes[this.props.filter.docview].cols : 6}
                >
                  {docs.map((doc) => {
                    return (
                      <GridListTile key={doc.url} onClick={() => window.open(doc.url)}>
                        <img src={doc.url} alt={doc.name} />
                        <GridListTileBar title={doc.name} />
                      </GridListTile>
                    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  })}
                </GridList>
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Staff)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Staff))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
