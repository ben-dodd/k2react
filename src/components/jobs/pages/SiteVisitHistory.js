<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

//Modals
import { showModal } from "../../../actions/modal";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Select from "react-select";
import SuggestionField from "../../../widgets/SuggestionField";

import { DatePicker } from "@material-ui/pickers";
import _ from "lodash";

import classNames from "classnames";
import { dateOf, personnelConvert } from "../../../actions/helpers";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

//Modals
import { showModal } from '../../../actions/modal'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Select from 'react-select'
import SuggestionField from '../../../widgets/SuggestionField'

import { DatePicker } from '@material-ui/pickers'
import _ from 'lodash'

import classNames from 'classnames'
import { dateOf, personnelConvert } from '../../../actions/helpers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  fetchWFMJobs,
  fetchWFMLeads,
  fetchWFMClients,
  clearWfmJob,
  saveWFMItems,
  saveGeocodes,
  fetchGeocodes,
  updateGeocodes,
  saveStats,
  getJobColor,
<<<<<<< HEAD
  handleSiteChange,
} from "../../../actions/jobs";

import { filterMap, filterMapReset } from "../../../actions/display";
=======
  handleSiteChange
} from '../../../actions/jobs'

import { filterMap, filterMapReset } from '../../../actions/display'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    asbestosRemovalists: state.const.asbestosRemovalists,
    siteVisitTypeAsbestos: state.const.siteVisitTypeAsbestos,
    wfmJobs: state.jobs.wfmJobs,
    wfmJob: state.jobs.wfmJob,
    wfmLeads: state.jobs.wfmLeads,
    currentJobState: state.jobs.currentJobState,
    wfmItems: state.jobs.wfmItems,
    wfmStats: state.jobs.wfmStats,
    jobList: state.jobs.jobList,
    search: state.local.search,
    staff: state.local.staff,
    sites: state.jobs.sites,
    siteJobs: state.jobs.siteJobs,
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
    handleSiteChange: (info) => dispatch(handleSiteChange(info)),
<<<<<<< HEAD
    handleSiteChangeDebounced: _.debounce(
      (info) => dispatch(handleSiteChange(info)),
      2000
    ),
=======
    handleSiteChangeDebounced: _.debounce((info) => dispatch(handleSiteChange(info)), 2000),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    clearWfmJob: () => dispatch(clearWfmJob()),
    saveGeocodes: (g) => dispatch(saveGeocodes(g)),
    fetchGeocodes: () => dispatch(fetchGeocodes()),
    updateGeocodes: (g) => dispatch(updateGeocodes(g)),
    saveWFMItems: (items) => dispatch(saveWFMItems(items)),
    saveStats: (stats) => dispatch(saveStats(stats)),
    filterMap: (filter) => dispatch(filterMap(filter)),
    filterMapReset: () => dispatch(filterMapReset()),
<<<<<<< HEAD
    showModal: (modal) => dispatch(showModal(modal)),
  };
};
=======
    showModal: (modal) => dispatch(showModal(modal))
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class SiteVisitHistory extends React.Component {
  state = {
    countSiteVisitsAsbestos: 1,
    countClearances: 1,

<<<<<<< HEAD
    update: {},
  };

  UNSAFE_componentWillMount() {
    let countSiteVisitsAsbestos = 1,
      countClearances = 1;
    if (this.props.sites && this.props.sites[this.props.site]) {
      let site = this.props.sites[this.props.site];
      if (site.siteVisits && Object.keys(site.siteVisits).length > 0) {
        countSiteVisitsAsbestos = Math.max(
          ...Object.keys(site.siteVisits).map((key) => parseInt(key))
        );
      }
      if (
        site.asbestosRemovals &&
        Object.keys(site.asbestosRemovals).length > 0
      ) {
        countClearances = Math.max(
          ...Object.keys(site.asbestosRemovals).map((key) => parseInt(key))
        );
=======
    update: {}
  }

  UNSAFE_componentWillMount() {
    let countSiteVisitsAsbestos = 1,
      countClearances = 1
    if (this.props.sites && this.props.sites[this.props.site]) {
      let site = this.props.sites[this.props.site]
      if (site.siteVisits && Object.keys(site.siteVisits).length > 0) {
        countSiteVisitsAsbestos = Math.max(...Object.keys(site.siteVisits).map((key) => parseInt(key)))
      }
      if (site.asbestosRemovals && Object.keys(site.asbestosRemovals).length > 0) {
        countClearances = Math.max(...Object.keys(site.asbestosRemovals).map((key) => parseInt(key)))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    }
    this.setState({
      countSiteVisitsAsbestos,
<<<<<<< HEAD
      countClearances,
    });
=======
      countClearances
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  addList = (field) => {
    this.setState({
<<<<<<< HEAD
      [`count${field}`]: this.state[`count${field}`]
        ? this.state[`count${field}`] + 1
        : 2,
    });
  };

  removeList = (field) => {
    let obj = field ? field.slice(0, 1).toLowerCase() + field.slice(1) : null;
    let num = this.state[`count${field}`] ? this.state[`count${field}`] : 1;
=======
      [`count${field}`]: this.state[`count${field}`] ? this.state[`count${field}`] + 1 : 2
    })
  }

  removeList = (field) => {
    let obj = field ? field.slice(0, 1).toLowerCase() + field.slice(1) : null
    let num = this.state[`count${field}`] ? this.state[`count${field}`] : 1
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (obj)
      this.props.handleSiteChange({
        site: this.props.sites[this.props.site],
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
    const { classes, that, site } = this.props;
    const names = [{ name: "3rd Party", uid: "3rd Party" }].concat(
      Object.values(this.props.staff).sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
    const m =
      this.props.sites && this.props.sites[site]
        ? this.props.sites[site]
        : null;

    console.log(m);

    if (m) {
      const color = classes[getJobColor(m.primaryJobType)];
      return (
        <div>
          <div className={classes.informationBoxWhiteRounded}>
            <div className={classNames(color, classes.expandHeading)}>
              Site Visits
            </div>
            <div
              className={classNames(classes.subHeading, classes.flexRowCenter)}
            >
              <IconButton
                size="small"
                aria-label="add"
                className={classes.marginLeftSmall}
                onClick={() => this.addList("SiteVisitsAsbestos")}
=======
        val: 'delete'
      })
    this.setState({
      [`count${field}`]: this.state[`count${field}`] ? (this.state[`count${field}`] > 1 ? this.state[`count${field}`] - 1 : 1) : 1
    })
  }

  render() {
    const { classes, that, site } = this.props
    const names = [{ name: '3rd Party', uid: '3rd Party' }].concat(
      Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name))
    )
    const m = this.props.sites && this.props.sites[site] ? this.props.sites[site] : null

    console.log(m)

    if (m) {
      const color = classes[getJobColor(m.primaryJobType)]
      return (
        <div>
          <div className={classes.informationBoxWhiteRounded}>
            <div className={classNames(color, classes.expandHeading)}>Site Visits</div>
            <div className={classNames(classes.subHeading, classes.flexRowCenter)}>
              <IconButton
                size='small'
                aria-label='add'
                className={classes.marginLeftSmall}
                onClick={() => this.addList('SiteVisitsAsbestos')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                <AddIcon />
              </IconButton>
              <IconButton
<<<<<<< HEAD
                size="small"
                aria-label="remove"
                className={classes.marginLeftSmall}
                onClick={() => this.removeList("SiteVisitsAsbestos")}
=======
                size='small'
                aria-label='remove'
                className={classes.marginLeftSmall}
                onClick={() => this.removeList('SiteVisitsAsbestos')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                <RemoveIcon />
              </IconButton>
            </div>
<<<<<<< HEAD
            {[
              ...Array(
                this.state.countSiteVisitsAsbestos
                  ? this.state.countSiteVisitsAsbestos
                  : 1
              ).keys(),
            ].map((i) => {
              let num = i + 1,
                s = m.siteVisits && m.siteVisits[num] ? m.siteVisits[num] : {};
              console.log(s);
              return (
                <div
                  className={classes.flexRowHoverPretty}
                  key={`siteVisitsAsbestos${num}`}
                >
=======
            {[...Array(this.state.countSiteVisitsAsbestos ? this.state.countSiteVisitsAsbestos : 1).keys()].map((i) => {
              let num = i + 1,
                s = m.siteVisits && m.siteVisits[num] ? m.siteVisits[num] : {}
              console.log(s)
              return (
                <div className={classes.flexRowHoverPretty} key={`siteVisitsAsbestos${num}`}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  <div className={classes.circleShaded}>{num}</div>
                  <DatePicker
                    value={s.date ? dateOf(s.date) : null}
                    autoOk
                    className={classes.columnMed}
<<<<<<< HEAD
                    format="ddd, D MMMM YYYY"
                    label={"Date"}
                    disableToolbar
                    variant="inline"
                    openTo="year"
                    views={["year", "month", "date"]}
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: "siteVisitsAsbestos",
                        o2: num.toString(),
                        field: "date",
                        val: dateOf(date),
                      });
=======
                    format='ddd, D MMMM YYYY'
                    label={'Date'}
                    disableToolbar
                    variant='inline'
                    openTo='year'
                    views={['year', 'month', 'date']}
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: 'siteVisitsAsbestos',
                        o2: num.toString(),
                        field: 'date',
                        val: dateOf(date)
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                  <div>
                    <InputLabel>Site Personnel</InputLabel>
                    <Select
                      isMulti
                      className={classNames(
                        classes.selectTight,
<<<<<<< HEAD
                        s.personnel && s.personnel[0].uid === "3rd Party"
                          ? classes.columnMed
                          : classes.columnExtraLarge
=======
                        s.personnel && s.personnel[0].uid === '3rd Party' ? classes.columnMed : classes.columnExtraLarge
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      )}
                      value={
                        s.personnel
                          ? s.personnel.map((e) => ({
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
                        this.props.handleSiteChange({
                          site: m,
<<<<<<< HEAD
                          o1: "siteVisitsAsbestos",
                          o2: num.toString(),
                          field: "personnel",
                          val: personnelConvert(e),
                        });
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === "3rd Party" && (
                    <TextField
                      label="3rd Party Company Name"
=======
                          o1: 'siteVisitsAsbestos',
                          o2: num.toString(),
                          field: 'personnel',
                          val: personnelConvert(e)
                        })
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === '3rd Party' && (
                    <TextField
                      label='3rd Party Company Name'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      className={classes.columnMedLarge}
                      defaultValue={s.companyName ? s.companyName : null}
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
<<<<<<< HEAD
                          o1: "siteVisitsAsbestos",
                          o2: num.toString(),
                          field: "companyName",
                          val: e.target.value,
                        });
=======
                          o1: 'siteVisitsAsbestos',
                          o2: num.toString(),
                          field: 'companyName',
                          val: e.target.value
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  )}
                  <div>
                    <InputLabel>Site Visit Type</InputLabel>
                    <Select
<<<<<<< HEAD
                      className={classNames(
                        classes.selectTight,
                        classes.columnLarge
                      )}
=======
                      className={classNames(classes.selectTight, classes.columnLarge)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      value={
                        s.type
                          ? {
                              value: s.type,
<<<<<<< HEAD
                              label: this.props.siteVisitTypeAsbestos.filter(
                                (e) => e.value === s.type
                              )[0].label,
=======
                              label: this.props.siteVisitTypeAsbestos.filter((e) => e.value === s.type)[0].label
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            }
                          : null
                      }
                      options={this.props.siteVisitTypeAsbestos}
                      onChange={(e) => {
                        this.props.handleSiteChange({
                          site: m,
<<<<<<< HEAD
                          o1: "siteVisitsAsbestos",
                          o2: num.toString(),
                          field: "type",
                          val: e.value,
                        });
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === "3rd Party" ? (
                    <TextField
                      label="Reference/Job Number"
                      className={classes.columnMed}
                      defaultValue={
                        s.referenceNumber ? s.referenceNumber : null
                      }
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: "siteVisitsAsbestos",
                          o2: num.toString(),
                          field: "referenceNumber",
                          val: e.target.value,
                        });
=======
                          o1: 'siteVisitsAsbestos',
                          o2: num.toString(),
                          field: 'type',
                          val: e.value
                        })
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === '3rd Party' ? (
                    <TextField
                      label='Reference/Job Number'
                      className={classes.columnMed}
                      defaultValue={s.referenceNumber ? s.referenceNumber : null}
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: 'siteVisitsAsbestos',
                          o2: num.toString(),
                          field: 'referenceNumber',
                          val: e.target.value
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  ) : (
                    <div>
                      <InputLabel>Job Number</InputLabel>
                      <Select
<<<<<<< HEAD
                        placeholder={"Add Job Numbers from Home Screen"}
                        className={classNames(
                          classes.selectTight,
                          classes.columnMed
                        )}
=======
                        placeholder={'Add Job Numbers from Home Screen'}
                        className={classNames(classes.selectTight, classes.columnMed)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          s.referenceNumber
                            ? {
                                value: s.referenceNumber,
<<<<<<< HEAD
                                label: s.referenceNumber,
=======
                                label: s.referenceNumber
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }
                            : null
                        }
                        options={
                          this.props.siteJobs &&
                          this.props.siteJobs[m.uid] &&
<<<<<<< HEAD
                          Object.values(this.props.siteJobs[m.uid]).map(
                            (e) => ({
                              value: e.jobNumber,
                              label: `${e.jobNumber}: ${e.jobDescription}`,
                            })
                          )
=======
                          Object.values(this.props.siteJobs[m.uid]).map((e) => ({
                            value: e.jobNumber,
                            label: `${e.jobNumber}: ${e.jobDescription}`
                          }))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }
                        onChange={(e) => {
                          this.props.handleSiteChange({
                            site: m,
<<<<<<< HEAD
                            o1: "siteVisitsAsbestos",
                            o2: num.toString(),
                            field: "referenceNumber",
                            val: e.value,
                          });
=======
                            o1: 'siteVisitsAsbestos',
                            o2: num.toString(),
                            field: 'referenceNumber',
                            val: e.value
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                    </div>
                  )}
                  <div className={classes.spacerSmall} />
                  <TextField
<<<<<<< HEAD
                    label="Notes"
=======
                    label='Notes'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    className={classes.columnLarge}
                    defaultValue={s.notes ? s.notes : null}
                    onChange={(e) => {
                      this.props.handleSiteChangeDebounced({
                        site: m,
<<<<<<< HEAD
                        o1: "siteVisitsAsbestos",
                        o2: num.toString(),
                        field: "notes",
                        val: e.target.value,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.informationBoxWhiteRounded}>
            <div className={classNames(color, classes.expandHeading)}>
              Clearances
            </div>
            <div
              className={classNames(classes.subHeading, classes.flexRowCenter)}
            >
              <IconButton
                size="small"
                aria-label="add"
                className={classes.marginLeftSmall}
                onClick={() => this.addList("Clearances")}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                size="small"
                aria-label="remove"
                className={classes.marginLeftSmall}
                onClick={() => this.removeList("Clearances")}
=======
                        o1: 'siteVisitsAsbestos',
                        o2: num.toString(),
                        field: 'notes',
                        val: e.target.value
                      })
                    }}
                  />
                </div>
              )
            })}
          </div>
          <div className={classes.informationBoxWhiteRounded}>
            <div className={classNames(color, classes.expandHeading)}>Clearances</div>
            <div className={classNames(classes.subHeading, classes.flexRowCenter)}>
              <IconButton size='small' aria-label='add' className={classes.marginLeftSmall} onClick={() => this.addList('Clearances')}>
                <AddIcon />
              </IconButton>
              <IconButton
                size='small'
                aria-label='remove'
                className={classes.marginLeftSmall}
                onClick={() => this.removeList('Clearances')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                <RemoveIcon />
              </IconButton>
            </div>
<<<<<<< HEAD
            {[
              ...Array(
                this.state.countClearances ? this.state.countClearances : 1
              ).keys(),
            ].map((i) => {
              let num = i + 1,
                s = m.clearances && m.clearances[num] ? m.clearances[num] : {};
=======
            {[...Array(this.state.countClearances ? this.state.countClearances : 1).keys()].map((i) => {
              let num = i + 1,
                s = m.clearances && m.clearances[num] ? m.clearances[num] : {}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              return (
                <div className={classes.flexRowHover} key={`clearance${num}`}>
                  <div className={classes.circleShaded}>{num}</div>
                  <div className={classes.columnMedLarge}>
                    <InputLabel>Asbestos Removalist</InputLabel>
                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      suggestions="asbestosRemovalists"
                      defaultValue={
                        s.asbestosRemovalist ? s.asbestosRemovalist : ""
                      }
                      onModify={(value) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: "clearances",
                          o2: num.toString(),
                          field: "asbestosRemovalist",
                          val: value,
                        });
                        if (
                          this.props.asbestosRemovalists &&
                          this.props.asbestosRemovalists.filter(
                            (e) => e.label === value
                          ).length > 0
                        )
                          this.props.handleSiteChange({
                            site: m,
                            o1: "clearances",
                            o2: num.toString(),
                            field: "asbestosRemovalistLicence",
                            val: this.props.asbestosRemovalists.filter(
                              (e) => e.label === value
                            )[0].value,
                          });
=======
                      suggestions='asbestosRemovalists'
                      defaultValue={s.asbestosRemovalist ? s.asbestosRemovalist : ''}
                      onModify={(value) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: 'clearances',
                          o2: num.toString(),
                          field: 'asbestosRemovalist',
                          val: value
                        })
                        if (this.props.asbestosRemovalists && this.props.asbestosRemovalists.filter((e) => e.label === value).length > 0)
                          this.props.handleSiteChange({
                            site: m,
                            o1: 'clearances',
                            o2: num.toString(),
                            field: 'asbestosRemovalistLicence',
                            val: this.props.asbestosRemovalists.filter((e) => e.label === value)[0].value
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  </div>
                  <TextField
<<<<<<< HEAD
                    label="Asbestos Removalist Licence Number"
                    className={classes.columnMed}
                    value={
                      s.asbestosRemovalistLicence
                        ? s.asbestosRemovalistLicence
                        : ""
                    }
                    onChange={(e) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: "clearances",
                        o2: num.toString(),
                        field: "asbestosRemovalistLicence",
                        val: e.target.value,
                      });
=======
                    label='Asbestos Removalist Licence Number'
                    className={classes.columnMed}
                    value={s.asbestosRemovalistLicence ? s.asbestosRemovalistLicence : ''}
                    onChange={(e) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: 'clearances',
                        o2: num.toString(),
                        field: 'asbestosRemovalistLicence',
                        val: e.target.value
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                  <DatePicker
                    value={s.removalDate ? dateOf(s.removalDate) : null}
                    autoOk
                    className={classes.columnMed}
<<<<<<< HEAD
                    format="ddd, D MMMM YYYY"
                    variant="inline"
                    disableToolbar
                    label={"Removal Completion Date"}
                    views={["year", "month", "date"]}
                    openTo="year"
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: "clearances",
                        o2: num.toString(),
                        field: "removalDate",
                        val: dateOf(date),
                      });
                    }}
                  />
                  <TextField
                    label="Description of Removal"
                    className={classes.columnMedLarge}
                    multiline
                    defaultValue={s.description ? s.description : ""}
                    onChange={(e) => {
                      this.props.handleSiteChangeDebounced({
                        site: m,
                        o1: "clearances",
                        o2: num.toString(),
                        field: "description",
                        val: e.target.value,
                      });
=======
                    format='ddd, D MMMM YYYY'
                    variant='inline'
                    disableToolbar
                    label={'Removal Completion Date'}
                    views={['year', 'month', 'date']}
                    openTo='year'
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: 'clearances',
                        o2: num.toString(),
                        field: 'removalDate',
                        val: dateOf(date)
                      })
                    }}
                  />
                  <TextField
                    label='Description of Removal'
                    className={classes.columnMedLarge}
                    multiline
                    defaultValue={s.description ? s.description : ''}
                    onChange={(e) => {
                      this.props.handleSiteChangeDebounced({
                        site: m,
                        o1: 'clearances',
                        o2: num.toString(),
                        field: 'description',
                        val: e.target.value
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                  <div className={classes.spacerSmall} />
                  <DatePicker
                    value={s.clearanceDate ? dateOf(s.clearanceDate) : null}
                    autoOk
                    className={classes.columnMed}
<<<<<<< HEAD
                    format="ddd, D MMMM YYYY"
                    variant="inline"
                    disableToolbar
                    label={"Clearance Inspection Date"}
                    views={["year", "month", "date"]}
                    openTo="year"
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: "clearances",
                        o2: num.toString(),
                        field: "clearanceDate",
                        val: dateOf(date),
                      });
                    }}
                  />
                  <div className={classes.spacerSmall} />
                  <div
                    className={
                      s.personnel && s.personnel[0].uid === "3rd Party"
                        ? classes.columnMed
                        : classes.columnLarge
                    }
                  >
=======
                    format='ddd, D MMMM YYYY'
                    variant='inline'
                    disableToolbar
                    label={'Clearance Inspection Date'}
                    views={['year', 'month', 'date']}
                    openTo='year'
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: 'clearances',
                        o2: num.toString(),
                        field: 'clearanceDate',
                        val: dateOf(date)
                      })
                    }}
                  />
                  <div className={classes.spacerSmall} />
                  <div className={s.personnel && s.personnel[0].uid === '3rd Party' ? classes.columnMed : classes.columnLarge}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <InputLabel>Asbestos Assessor</InputLabel>
                    <Select
                      isMulti
                      className={classes.selectTight}
                      value={
                        s.personnel
                          ? s.personnel.map((e) => ({
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
                        this.props.handleSiteChange({
                          site: m,
<<<<<<< HEAD
                          o1: "clearances",
                          o2: num.toString(),
                          field: "personnel",
                          val: personnelConvert(e),
                        });
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === "3rd Party" && (
                    <TextField
                      label="Licence Number"
                      className={classes.columnMed}
                      defaultValue={
                        s.asbestosAssessorLicence
                          ? s.asbestosAssessorLicence
                          : ""
                      }
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: "clearances",
                          o2: num.toString(),
                          field: "asbestosAssessorLicence",
                          val: e.target.value,
                        });
                      }}
                    />
                  )}
                  {s.personnel && s.personnel[0].uid === "3rd Party" ? (
                    <TextField
                      label="Reference/Job Number"
                      className={classes.columnMed}
                      defaultValue={
                        s.referenceNumber ? s.referenceNumber : null
                      }
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: "clearances",
                          o2: num.toString(),
                          field: "referenceNumber",
                          val: e.target.value,
                        });
=======
                          o1: 'clearances',
                          o2: num.toString(),
                          field: 'personnel',
                          val: personnelConvert(e)
                        })
                      }}
                    />
                  </div>
                  {s.personnel && s.personnel[0].uid === '3rd Party' && (
                    <TextField
                      label='Licence Number'
                      className={classes.columnMed}
                      defaultValue={s.asbestosAssessorLicence ? s.asbestosAssessorLicence : ''}
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: 'clearances',
                          o2: num.toString(),
                          field: 'asbestosAssessorLicence',
                          val: e.target.value
                        })
                      }}
                    />
                  )}
                  {s.personnel && s.personnel[0].uid === '3rd Party' ? (
                    <TextField
                      label='Reference/Job Number'
                      className={classes.columnMed}
                      defaultValue={s.referenceNumber ? s.referenceNumber : null}
                      onChange={(e) => {
                        this.props.handleSiteChangeDebounced({
                          site: m,
                          o1: 'clearances',
                          o2: num.toString(),
                          field: 'referenceNumber',
                          val: e.target.value
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  ) : (
                    <div>
                      <InputLabel>Job Number</InputLabel>
                      <Select
<<<<<<< HEAD
                        placeholder={"Add Job Numbers from Home Screen"}
                        className={classNames(
                          classes.selectTight,
                          classes.columnMed
                        )}
=======
                        placeholder={'Add Job Numbers from Home Screen'}
                        className={classNames(classes.selectTight, classes.columnMed)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value={
                          s.referenceNumber
                            ? {
                                value: s.referenceNumber,
<<<<<<< HEAD
                                label: s.referenceNumber,
=======
                                label: s.referenceNumber
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              }
                            : null
                        }
                        options={
                          this.props.siteJobs &&
                          this.props.siteJobs[m.uid] &&
<<<<<<< HEAD
                          Object.values(this.props.siteJobs[m.uid]).map(
                            (e) => ({
                              value: e.jobNumber,
                              label: `${e.jobNumber}: ${e.jobDescription}`,
                            })
                          )
=======
                          Object.values(this.props.siteJobs[m.uid]).map((e) => ({
                            value: e.jobNumber,
                            label: `${e.jobNumber}: ${e.jobDescription}`
                          }))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }
                        onChange={(e) => {
                          this.props.handleSiteChange({
                            site: m,
<<<<<<< HEAD
                            o1: "clearances",
                            o2: num.toString(),
                            field: "referenceNumber",
                            val: e.value,
                          });
=======
                            o1: 'clearances',
                            o2: num.toString(),
                            field: 'referenceNumber',
                            val: e.value
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                    </div>
                  )}
                  <div className={classes.spacerSmall} />
                  <DatePicker
                    value={s.issueDate ? dateOf(s.issueDate) : null}
                    autoOk
                    className={classes.columnMed}
<<<<<<< HEAD
                    format="ddd, D MMMM YYYY"
                    variant="inline"
                    disableToolbar
                    label={"Certificate Issue Date"}
                    views={["year", "month", "date"]}
                    openTo="year"
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: "clearances",
                        o2: num.toString(),
                        field: "issueDate",
                        val: dateOf(date),
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else return <div />;
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SiteVisitHistory)
);
=======
                    format='ddd, D MMMM YYYY'
                    variant='inline'
                    disableToolbar
                    label={'Certificate Issue Date'}
                    views={['year', 'month', 'date']}
                    openTo='year'
                    onChange={(date) => {
                      this.props.handleSiteChange({
                        site: m,
                        o1: 'clearances',
                        o2: num.toString(),
                        field: 'issueDate',
                        val: dateOf(date)
                      })
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    } else return <div />
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SiteVisitHistory))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
