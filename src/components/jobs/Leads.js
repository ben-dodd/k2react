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
  getWfmUrl,
  getWfmClientUrl,
  getGoogleMapsUrl,
  getLeadHistoryDescription,
<<<<<<< HEAD
  onWatchLead,
} from "../../actions/jobs";

import {
  getDaysSinceDate,
  getDaysSinceDateAgo,
  dateOf,
} from "../../actions/helpers";

import { filterMap, filterMapReset } from "../../actions/display";
=======
  onWatchLead
} from '../../actions/jobs'

import { getDaysSinceDate, getDaysSinceDateAgo, dateOf } from '../../actions/helpers'

import { filterMap, filterMapReset } from '../../actions/display'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    me: state.local.me,
    filter: state.display.filterMap,
<<<<<<< HEAD
    otherOptions: state.const.otherOptions,
  };
};
=======
    otherOptions: state.const.otherOptions
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
<<<<<<< HEAD
    filterMapReset: () => dispatch(filterMapReset()),
  };
};

class Leads extends React.Component {
  state = {
    jobModal: null,
  };

  openJobModal = (m) => {
    this.setState({
      jobModal: m,
    });
  };

  render() {
    const { classes, jobList, that, me } = this.props;
    const daysSinceLastLeadAction =
      this.props.otherOptions &&
      this.props.otherOptions.filter(
        (opt) => opt.option === "daysSinceLastLeadAction"
      )[0].value
        ? parseInt(
            this.props.otherOptions.filter(
              (opt) => opt.option === "daysSinceLastLeadAction"
            )[0].value
          )
        : 30;
    let loading = jobList && Object.keys(jobList).length == 0;
    let leads = jobList
      ? Object.values(jobList).filter((m) => {
          let res = true;
          if (m.isJob) res = false;
          if (this.props.search) {
            // console.log(this.props.search);
            let terms = this.props.search.split(" ");
            let search =
              m.client + " " + m.category + " " + m.owner + " " + m.name;
            if (m.geocode) search = search + " " + m.geocode.address;
            terms.forEach((term) => {
              if (!search.toLowerCase().includes(term.toLowerCase())) {
                res = false;
=======
    filterMapReset: () => dispatch(filterMapReset())
  }
}

class Leads extends React.Component {
  state = {
    jobModal: null
  }

  openJobModal = (m) => {
    this.setState({
      jobModal: m
    })
  }

  render() {
    const { classes, jobList, that, me } = this.props
    const daysSinceLastLeadAction =
      this.props.otherOptions && this.props.otherOptions.filter((opt) => opt.option === 'daysSinceLastLeadAction')[0].value
        ? parseInt(this.props.otherOptions.filter((opt) => opt.option === 'daysSinceLastLeadAction')[0].value)
        : 30
    let loading = jobList && Object.keys(jobList).length == 0
    let leads = jobList
      ? Object.values(jobList).filter((m) => {
          let res = true
          if (m.isJob) res = false
          if (this.props.search) {
            // console.log(this.props.search);
            let terms = this.props.search.split(' ')
            let search = m.client + ' ' + m.category + ' ' + m.owner + ' ' + m.name
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

    return (
      <div className={classes.marginBottomSmall}>
        <ReactTable
          loading={loading}
          style={{
<<<<<<< HEAD
            cursor: "alias",
=======
            cursor: 'alias'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
          data={leads}
          pageSize={14}
          pageSizeOptions={[10, 15, 20, 25, 50, 100, 200]}
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
              )
                that.setState({ jobModal: rowInfo.original });
            },
            style:
              rowInfo &&
              rowInfo.original &&
              rowInfo.original.assigned &&
              rowInfo.original.assigned.includes(this.props.me.wfmUUID)
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
                me.watchedLeads && me.watchedLeads.includes(d.wfmID)
                  ? true
                  : false,
              maxWidth: 50,
              Cell: (c) => (
                <IconButton
                  onClick={() =>
                    c.original ? onWatchLead(c.original.wfmID, me) : null
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
              Header: "WFM Link",
              Cell: (c) => (
                <span>
                  <a
                    className={classes.urlSubtle}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={getWfmUrl(c.original)}
                  >
=======
                column.id !== 'watch' &&
                column.id !== 'jobNumber' &&
                column.id !== 'client' &&
                column.id !== 'geocodeAddress'
              )
                that.setState({ jobModal: rowInfo.original })
            },
            style:
              rowInfo && rowInfo.original && rowInfo.original.assigned && rowInfo.original.assigned.includes(this.props.me.wfmUUID)
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
              accessor: (d) => (me.watchedLeads && me.watchedLeads.includes(d.wfmID) ? true : false),
              maxWidth: 50,
              Cell: (c) => (
                <IconButton onClick={() => (c.original ? onWatchLead(c.original.wfmID, me) : null)} className={classes.iconTight}>
                  {c.value ? <WatchingIcon className={classes.bookmarkIconOn} /> : <NotWatchingIcon className={classes.bookmarkIconOff} />}
                </IconButton>
              )
            },
            {
              id: 'jobNumber',
              Header: 'WFM Link',
              Cell: (c) => (
                <span>
                  <a className={classes.urlSubtle} target='_blank' rel='noopener noreferrer' href={getWfmUrl(c.original)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    WFM
                  </a>
                </span>
              ),
<<<<<<< HEAD
              maxWidth: 80,
            },
            {
              id: "client",
              Header: "Client",
              accessor: (d) => d.client,
              Cell: (c) => (
                <span>
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
              id: "createdDate",
              Header: "Date Created",
              maxWidth: 120,
              accessor: (d) => dateOf(d.creationDate),
              Cell: (c) => (c.value ? getDaysSinceDateAgo(c.value) : "N/A"),
            },
            {
              id: "nextAction",
              Header: "Next Goal",
              accessor: (d) => d.nextActionType,
            },
            {
              id: "nextGoalDue",
              Header: "Next Goal Due",
=======
              maxWidth: 80
            },
            {
              id: 'client',
              Header: 'Client',
              accessor: (d) => d.client,
              Cell: (c) => (
                <span>
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
              id: 'createdDate',
              Header: 'Date Created',
              maxWidth: 120,
              accessor: (d) => dateOf(d.creationDate),
              Cell: (c) => (c.value ? getDaysSinceDateAgo(c.value) : 'N/A')
            },
            {
              id: 'nextAction',
              Header: 'Next Goal',
              accessor: (d) => d.nextActionType
            },
            {
              id: 'nextGoalDue',
              Header: 'Next Goal Due',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              maxWidth: 120,
              accessor: (d) => dateOf(d.nextActionDate),
              Cell: (c) =>
                c.value ? (
<<<<<<< HEAD
                  <span
                    className={
                      getDaysSinceDate(c.value) > 0
                        ? classes.red
                        : classes.black
                    }
                  >
                    {getDaysSinceDateAgo(c.value)}
                  </span>
                ) : (
                  <span className={classes.orange}>No Goal Set</span>
                ),
            },
            {
              id: "daysSinceLastGoal",
              Header: "Last Goal Completed",
              maxWidth: 120,
              accessor: (d) =>
                d.lastActionDate ? dateOf(d.lastActionDate) : null,
              Cell: (c) =>
                c.value ? (
                  getDaysSinceDateAgo(c.value)
                ) : (
                  <span className={classes.red}>No Goals Completed</span>
                ),
            },
            {
              id: "daysSinceLastAction",
              Header: "Last Action",
              maxWidth: 120,
              accessor: (d) =>
                d.history && d.history.length > 0 && d.history[0].date,
              Cell: (c) =>
                c.value ? (
                  <span
                    className={
                      getDaysSinceDate(c.value) > daysSinceLastLeadAction
                        ? classes.red
                        : classes.black
                    }
                  >
=======
                  <span className={getDaysSinceDate(c.value) > 0 ? classes.red : classes.black}>{getDaysSinceDateAgo(c.value)}</span>
                ) : (
                  <span className={classes.orange}>No Goal Set</span>
                )
            },
            {
              id: 'daysSinceLastGoal',
              Header: 'Last Goal Completed',
              maxWidth: 120,
              accessor: (d) => (d.lastActionDate ? dateOf(d.lastActionDate) : null),
              Cell: (c) => (c.value ? getDaysSinceDateAgo(c.value) : <span className={classes.red}>No Goals Completed</span>)
            },
            {
              id: 'daysSinceLastAction',
              Header: 'Last Action',
              maxWidth: 120,
              accessor: (d) => d.history && d.history.length > 0 && d.history[0].date,
              Cell: (c) =>
                c.value ? (
                  <span className={getDaysSinceDate(c.value) > daysSinceLastLeadAction ? classes.red : classes.black}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {getDaysSinceDateAgo(c.value)}
                  </span>
                ) : (
                  <span className={classes.orange}>No actions</span>
<<<<<<< HEAD
                ),
            },
            {
              id: "lastActionType",
              Header: "Last Action Type",
              accessor: (d) =>
                d.history && d.history.length > 0
                  ? getLeadHistoryDescription(d.history[0]).title
                  : "No actions",
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
  connect(mapStateToProps, mapDispatchToProps)(Leads)
);
=======
                )
            },
            {
              id: 'lastActionType',
              Header: 'Last Action Type',
              accessor: (d) => (d.history && d.history.length > 0 ? getLeadHistoryDescription(d.history[0]).title : 'No actions')
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Leads))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
