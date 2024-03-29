<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { SITE } from "../../constants/modal-types";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import SiteModal from "./modals/SiteModal";

import { fetchStaff } from "../../actions/local";
import { fetchSites, getJobColor, getSiteIcon } from "../../actions/jobs";
import { showModal } from "../../actions/modal";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import { SITE } from '../../constants/modal-types'

import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

import SiteModal from './modals/SiteModal'

import { fetchStaff } from '../../actions/local'
import { fetchSites, getJobColor, getSiteIcon } from '../../actions/jobs'
import { showModal } from '../../actions/modal'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    sites: state.jobs.sites,
    me: state.local.me,
    methods: state.local.methods,
    modalType: state.modal.modalType,
    category: state.local.category,
    search: state.local.search,
<<<<<<< HEAD
    staff: state.local.staff,
  };
};
=======
    staff: state.local.staff
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSites: () => dispatch(fetchSites()),
    fetchStaff: () => dispatch(fetchStaff()),
<<<<<<< HEAD
    showModal: (modal) => dispatch(showModal(modal)),
  };
};

class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listselect: null,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.fetchSites();
  }

  render() {
    const { classes, sites } = this.props;
    const defaultImagePath =
      "https://firebasestorage.googleapis.com/v0/b/k2flutter-f03a1.appspot.com/o/sites%2FSite%20Photo%20Placeholder.png?alt=media&token=eb19d430-70b5-4290-a683-08abfc6b410b";
=======
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class Sites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listselect: null
    }
  }

  UNSAFE_componentWillMount() {
    this.props.fetchSites()
  }

  render() {
    const { classes, sites } = this.props
    const defaultImagePath =
      'https://firebasestorage.googleapis.com/v0/b/k2flutter-f03a1.appspot.com/o/sites%2FSite%20Photo%20Placeholder.png?alt=media&token=eb19d430-70b5-4290-a683-08abfc6b410b'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <div className={classes.marginTopStandard}>
        {this.props.modalType === SITE && <SiteModal />}
        <div className={classes.flexRowRightAlign}>
<<<<<<< HEAD
          <Tooltip title="Add New Site">
=======
          <Tooltip title='Add New Site'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <IconButton
              onClick={(e) =>
                this.props.showModal({
                  modalType: SITE,
<<<<<<< HEAD
                  modalProps: { doc: { deleted: false } },
=======
                  modalProps: { doc: { deleted: false } }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })
              }
            >
              <AddIcon className={classes.iconRegular} />
            </IconButton>
          </Tooltip>
        </div>
        <Grid container spacing={2}>
          {sites &&
            Object.values(sites)
              .filter((a) => {
                if (this.props.search) {
<<<<<<< HEAD
                  let search = [a.siteName, a.primaryJobType, a.type];
                  let searchterm = this.props.search.toLowerCase().split(" ");
                  let res = true;
                  searchterm.forEach((term) => {
                    if (
                      search.find(
                        (tag) => tag && tag.toLowerCase().includes(term)
                      ) === undefined
                    )
                      res = false;
                  });
                  return res;
                } else {
                  return true;
                }
              })
              .sort(
                (a, b) => a.siteName && a.siteName.localeCompare(b.siteName)
              )
              .map((site) => {
                const color = classes[getJobColor(site.primaryJobType)];
                return (
                  <Grid item sm={12} md={6} lg={4} xl={3} key={site.uid}>
                    <Fade
                      in={true}
                      style={{ transformOrigin: "0 0 0" }}
                      timeout={1000}
                    >
                      <Card className={classes.siteCard}>
                        <CardHeader
                          avatar={
                            <Avatar
                              className={color}
                              style={{ backgroundColor: "white" }}
                            >
=======
                  let search = [a.siteName, a.primaryJobType, a.type]
                  let searchterm = this.props.search.toLowerCase().split(' ')
                  let res = true
                  searchterm.forEach((term) => {
                    if (search.find((tag) => tag && tag.toLowerCase().includes(term)) === undefined) res = false
                  })
                  return res
                } else {
                  return true
                }
              })
              .sort((a, b) => a.siteName && a.siteName.localeCompare(b.siteName))
              .map((site) => {
                const color = classes[getJobColor(site.primaryJobType)]
                return (
                  <Grid item sm={12} md={6} lg={4} xl={3} key={site.uid}>
                    <Fade in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                      <Card className={classes.siteCard}>
                        <CardHeader
                          avatar={
                            <Avatar className={color} style={{ backgroundColor: 'white' }}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              {getSiteIcon(site.type)}
                            </Avatar>
                          }
                          action={
                            <IconButton
                              onClick={(e) => {
                                this.props.showModal({
                                  modalType: SITE,
<<<<<<< HEAD
                                  modalProps: { doc: site },
                                });
=======
                                  modalProps: { doc: site }
                                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          }
                          title={site.siteName}
                          subheader={site.client}
                        />
                        {site.jobList && (
                          <CardContent>
                            {site.jobList.map((job) => (
                              <div>
                                <b>{job.jobNumber}</b> {job.jobDescription}
                              </div>
                            ))}
                          </CardContent>
                        )}
<<<<<<< HEAD
                        <Link to={"site/" + site.uid}>
                          <CardMedia
                            style={{
                              height: 0,
                              paddingTop: "56.25%", // 16:9
                            }}
                            className={classes.hoverImage}
                            image={
                              site.siteImageUrl
                                ? site.siteImageUrl
                                : defaultImagePath
                            }
=======
                        <Link to={'site/' + site.uid}>
                          <CardMedia
                            style={{
                              height: 0,
                              paddingTop: '56.25%' // 16:9
                            }}
                            className={classes.hoverImage}
                            image={site.siteImageUrl ? site.siteImageUrl : defaultImagePath}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          />
                        </Link>
                        {/*<CardContent>
                    </CardContent>
                    <CardActions>
                    </CardActions>*/}
                      </Card>
                    </Fade>
                  </Grid>
<<<<<<< HEAD
                );
              })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Sites)
);
=======
                )
              })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sites))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
