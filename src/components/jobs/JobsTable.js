<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../config/styles";
import { connect } from "react-redux";

//Modals
import IconButton from "@material-ui/core/IconButton";
import ReactTable from "react-table";
import "react-table/react-table.css";
import NotWatchingIcon from "@material-ui/icons/BookmarkBorder";
import WatchingIcon from "@material-ui/icons/Bookmark";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../config/styles'
import { connect } from 'react-redux'

//Modals
import IconButton from '@material-ui/core/IconButton'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import NotWatchingIcon from '@material-ui/icons/BookmarkBorder'
import WatchingIcon from '@material-ui/icons/Bookmark'
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
  collateJobsList,
  getWfmUrl,
  getWfmClientUrl,
  getGoogleMapsUrl,
  onWatchJob,
<<<<<<< HEAD
  getDetailedWFMJob,
} from "../../actions/jobs";

import {
  getDaysSinceDate,
  getDaysSinceDateAgo,
  dateOf,
} from "../../actions/helpers";

import { filterMap, filterMapReset } from "../../actions/display";

import moment from "moment";

import JobMap from "./JobMap";
=======
  getDetailedWFMJob
} from '../../actions/jobs'

import { getDaysSinceDate, getDaysSinceDateAgo, dateOf } from '../../actions/helpers'

import { filterMap, filterMapReset } from '../../actions/display'

import moment from 'moment'

import JobMap from './JobMap'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    me: state.local.me,
    filter: state.display.filterMap,
    otherOptions: state.const.otherOptions,
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
<<<<<<< HEAD
    fetchCurrentJobState: (ignoreCompleted) =>
      dispatch(fetchCurrentJobState(ignoreCompleted)),
=======
    fetchCurrentJobState: (ignoreCompleted) => dispatch(fetchCurrentJobState(ignoreCompleted)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    saveCurrentJobState: (state) => dispatch(saveCurrentJobState(state)),
    saveGeocodes: (g) => dispatch(saveGeocodes(g)),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    updateGeocodes: (g) => dispatch(updateGeocodes(g)),
    saveWFMItems: (items) => dispatch(saveWFMItems(items)),
    saveStats: (stats) => dispatch(saveStats(stats)),
    filterMap: (filter) => dispatch(filterMap(filter)),
    filterMapReset: () => dispatch(filterMapReset()),
    getDetailedWFMJob: (info) => dispatch(getDetailedWFMJob(info)),
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

class JobsTable extends React.Component {
  state = {
    jobModal: null,
  };

  render() {
    const { classes, jobList, that, me } = this.props;
    const daysSinceLastJobAction =
      this.props.otherOptions &&
      this.props.otherOptions.filter(
        (opt) => opt.option === "daysSinceLastJobAction"
      )[0].value
        ? parseInt(
            this.props.otherOptions.filter(
              (opt) => opt.option === "daysSinceLastJobAction"
            )[0].value
          )
        : 15;
    let loading = jobList && Object.keys(jobList).length == 0;
=======
    collateJobsList: (wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes) =>
      dispatch(collateJobsList(wfmJobs, wfmLeads, currentJobState, wfmClients, geocodes))
  }
}

class JobsTable extends React.Component {
  state = {
    jobModal: null
  }

  render() {
    const { classes, jobList, that, me } = this.props
    const daysSinceLastJobAction =
      this.props.otherOptions && this.props.otherOptions.filter((opt) => opt.option === 'daysSinceLastJobAction')[0].value
        ? parseInt(this.props.otherOptions.filter((opt) => opt.option === 'daysSinceLastJobAction')[0].value)
        : 15
    let loading = jobList && Object.keys(jobList).length == 0
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // console.log(jobList);

    let jobs = jobList
      ? Object.values(jobList).filter((m) => {
<<<<<<< HEAD
          let res = true;
          // if (!m.isJob || m.wfmState === "Completed") res = false;
          if (!m.isJob) res = false;

          if (this.props.search) {
            // console.log(this.props.search);
            let terms = this.props.search.split(" ");
            let search =
              m.jobNumber +
              " " +
              m.client +
              " " +
              m.category +
              " " +
              m.owner +
              " " +
              m.name;
            if (m.geocode) search = search + " " + m.geocode.address;
            terms.forEach((term) => {
              if (!search.toLowerCase().includes(term.toLowerCase())) {
                res = false;
=======
          let res = true
          // if (!m.isJob || m.wfmState === "Completed") res = false;
          if (!m.isJob) res = false

          if (this.props.search) {
            // console.log(this.props.search);
            let terms = this.props.search.split(' ')
            let search = m.jobNumber + ' ' + m.client + ' ' + m.category + ' ' + m.owner + ' ' + m.name
            if (m.geocode) search = search + ' ' + m.geocode.address
            terms.forEach((term) => {
              if (!search.toLowerCase().includes(term.toLowerCase())) {
                res = false
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              } else {
                // console.log(term);
                // console.log(search);
              }
<<<<<<< HEAD
            });
          }
          return res;
        })
      : [];
=======
            })
          }
          return res
        })
      : []
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // console.log(jobs);
    return (
      <div className={classes.marginBottomSmall}>
        <ReactTable
          loading={loading}
          pageSize={14}
          pageSizeOptions={[10, 15, 20, 25, 50, 100, 200]}
          style={{
<<<<<<< HEAD
            cursor: "alias",
=======
            cursor: 'alias'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
          data={jobs}
          getTdProps={(state, rowInfo, column, instance) => ({
            onClick: () => {
              if (
                rowInfo &&
                rowInfo.original &&
<<<<<<< HEAD
                column.id !== "watch" &&
                column.id !== "jobNumber" &&
                column.id !== "client" &&
                column.id !== "geocodeAddress"
=======
                column.id !== 'watch' &&
                column.id !== 'jobNumber' &&
                column.id !== 'client' &&
                column.id !== 'geocodeAddress'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              ) {
                // console.log(getDetailedWFMJob);
                this.props.getDetailedWFMJob({
                  jobNumber: rowInfo.original.jobNumber,
                  accessToken: this.props.wfmAccessToken,
<<<<<<< HEAD
                  refreshToken: this.props.me.refreshToken,
                });
                that.setState({ jobModal: rowInfo.original });
=======
                  refreshToken: this.props.me.refreshToken
                })
                that.setState({ jobModal: rowInfo.original })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }
            },
            style:
              rowInfo &&
              rowInfo.original &&
              rowInfo.original.assigned &&
<<<<<<< HEAD
              rowInfo.original.assigned
                .map((e) => e.id)
                .includes(this.props.me.wfmUUID)
                ? { background: "#FFFF99" }
                : {},
          })}
          defaultSorted={[
            {
              id: "watch",
              desc: true,
            },
            {
              id: "daysSinceLastAction",
              desc: true,
            },
          ]}
          columns={[
            {
              id: "watch",
              Header: "",
              accessor: (d) =>
                me.watchedJobs && me.watchedJobs.includes(d.jobNumber)
                  ? true
                  : false,
              maxWidth: 50,
              Cell: (c) => (
                <IconButton
                  onClick={() =>
                    c.original ? onWatchJob(c.original.jobNumber, me) : null
                  }
                  className={classes.iconTight}
                >
                  {c.value ? (
                    <WatchingIcon className={classes.bookmarkIconOn} />
                  ) : (
                    <NotWatchingIcon className={classes.bookmarkIconOff} />
                  )}
                </IconButton>
              ),
            },
            {
              id: "jobNumber",
              Header: "Job Number",
              accessor: (d) => d.jobNumber,
              Cell: (c) => (
                <span style={{ cursor: "default" }}>
                  <a
                    className={classes.urlSubtle}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={getWfmUrl(c.original)}
                  >
=======
              rowInfo.original.assigned.map((e) => e.id).includes(this.props.me.wfmUUID)
                ? { background: '#FFFF99' }
                : {}
          })}
          defaultSorted={[
            {
              id: 'watch',
              desc: true
            },
            {
              id: 'daysSinceLastAction',
              desc: true
            }
          ]}
          columns={[
            {
              id: 'watch',
              Header: '',
              accessor: (d) => (me.watchedJobs && me.watchedJobs.includes(d.jobNumber) ? true : false),
              maxWidth: 50,
              Cell: (c) => (
                <IconButton onClick={() => (c.original ? onWatchJob(c.original.jobNumber, me) : null)} className={classes.iconTight}>
                  {c.value ? <WatchingIcon className={classes.bookmarkIconOn} /> : <NotWatchingIcon className={classes.bookmarkIconOff} />}
                </IconButton>
              )
            },
            {
              id: 'jobNumber',
              Header: 'Job Number',
              accessor: (d) => d.jobNumber,
              Cell: (c) => (
                <span style={{ cursor: 'default' }}>
                  <a className={classes.urlSubtle} target='_blank' rel='noopener noreferrer' href={getWfmUrl(c.original)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {c.value}
                  </a>
                </span>
              ),
<<<<<<< HEAD
              maxWidth: 80,
            },
            {
              id: "client",
              Header: "Client",
=======
              maxWidth: 80
            },
            {
              id: 'client',
              Header: 'Client',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              accessor: (d) => d.client,
              maxWidth: 200,
              Cell: (c) => (
                <span>
<<<<<<< HEAD
                  <a
                    className={classes.urlSubtle}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={getWfmClientUrl(c.original)}
                  >
                    {c.value}
                  </a>
                </span>
              ),
            },
            {
              Header: "Name",
              accessor: "name",
            },
            {
              id: "owner",
              Header: "Manager",
              accessor: (d) =>
                d.owner || d.owner === "No manager name"
                  ? d.owner
                  : "Not Assigned",
              maxWidth: 120,
            },
            {
              Header: "State",
              accessor: "wfmState",
              maxWidth: 180,
            },
            {
              id: "daysSinceLastAction",
              Header: "State Changed",
              accessor: (d) => d.lastActionDate,
              maxWidth: 120,
              Cell: (c) => (
                <span
                  className={
                    getDaysSinceDate(c.value) > daysSinceLastJobAction
                      ? classes.red
                      : classes.black
                  }
                >
                  {getDaysSinceDateAgo(c.value)}
                </span>
              ),
            },
            {
              id: "dueDate",
              Header: "Due Date",
              accessor: (d) => d.dueDate,
              maxWidth: 120,
              Cell: (c) => (
                <span
                  className={
                    dateOf(c.value) < new Date() ? classes.red : classes.black
                  }
                >
                  {c.value !== ""
                    ? moment(dateOf(c.value)).format("D MMMM YYYY")
                    : "Due date not set"}
                </span>
              ),
            },
            {
              Header: "Category",
              accessor: "category",
              maxWidth: 160,
            },
            {
              id: "geocodeAddress",
              Header: "Google Maps",
              accessor: (d) => d.geocode.address,
              Cell: (c) => (
                <span>
                  <a
                    className={classes.urlSubtle}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={getGoogleMapsUrl(c.original)}
                  >
                    {c.value}
                  </a>
                </span>
              ),
            },
          ]}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(JobsTable)
);
=======
                  <a className={classes.urlSubtle} target='_blank' rel='noopener noreferrer' href={getWfmClientUrl(c.original)}>
                    {c.value}
                  </a>
                </span>
              )
            },
            {
              Header: 'Name',
              accessor: 'name'
            },
            {
              id: 'owner',
              Header: 'Manager',
              accessor: (d) => (d.owner || d.owner === 'No manager name' ? d.owner : 'Not Assigned'),
              maxWidth: 120
            },
            {
              Header: 'State',
              accessor: 'wfmState',
              maxWidth: 180
            },
            {
              id: 'daysSinceLastAction',
              Header: 'State Changed',
              accessor: (d) => d.lastActionDate,
              maxWidth: 120,
              Cell: (c) => (
                <span className={getDaysSinceDate(c.value) > daysSinceLastJobAction ? classes.red : classes.black}>
                  {getDaysSinceDateAgo(c.value)}
                </span>
              )
            },
            {
              id: 'dueDate',
              Header: 'Due Date',
              accessor: (d) => d.dueDate,
              maxWidth: 120,
              Cell: (c) => (
                <span className={dateOf(c.value) < new Date() ? classes.red : classes.black}>
                  {c.value !== '' ? moment(dateOf(c.value)).format('D MMMM YYYY') : 'Due date not set'}
                </span>
              )
            },
            {
              Header: 'Category',
              accessor: 'category',
              maxWidth: 160
            },
            {
              id: 'geocodeAddress',
              Header: 'Google Maps',
              accessor: (d) => d.geocode.address,
              Cell: (c) => (
                <span>
                  <a className={classes.urlSubtle} target='_blank' rel='noopener noreferrer' href={getGoogleMapsUrl(c.original)}>
                    {c.value}
                  </a>
                </span>
              )
            }
          ]}
          defaultPageSize={25}
          className='-striped -highlight'
        />
      </div>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(JobsTable))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
