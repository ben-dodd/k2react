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
import {
  fetchWFMClients,
} from "../../actions/local";

//Modals
import { COC } from "../../constants/modal-types";
import { showModal } from "../../actions/modal";
import CocModal from "./modals/CocModal";
import UpdateCertificateVersionModal from "./modals/UpdateCertificateVersionModal";
import WAAnalysisModal from "./modals/WAAnalysisModal";
import SoilDetailsModal from "./modals/SoilDetailsModal";
import AsbestosSampleEditModal from "./modals/AsbestosSampleEditModal";
import DownloadLabCertificateModal from "./modals/DownloadLabCertificateModal";
import AsbestosSampleDetailsModal from "./modals/AsbestosSampleDetailsModal";
import AsbestosSampleActionsModal from "./modals/AsbestosSampleActionsModal";
import AsbestosSampleCocEditModal from "./modals/AsbestosSampleCocEditModal";
import ConfirmResultModal from "./modals/ConfirmResultModal";
import SampleLogModal from "./modals/SampleLogModal";
import CocLogModal from "./modals/CocLogModal";

import AsbestosBulkCocCard from "./components/AsbestosBulkCocCard";

import Select from "react-select";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import momenttimezone from "moment-timezone";
import momentbusinesstime from "moment-business-time";

import {
  DatePicker,
} from "@material-ui/pickers";

const mapStateToProps = state => {
  return {
    cocs: state.asbestosLab.cocs,
    search: state.local.search,
    me: state.local.me,
    staff: state.local.staff,
    clients: state.local.wfmClients,
    bulkAnalysts: state.asbestosLab.bulkAnalysts,
    airAnalysts: state.asbestosLab.airAnalysts,
    analyst: state.asbestosLab.analyst,
    analysisMode: state.asbestosLab.analysisMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCocs: () => dispatch(fetchCocs()),
    fetchCocsByJobNumber: jobNumber => dispatch(fetchCocsByJobNumber(jobNumber)),
    fetchCocsBySearch: (client, startDate, endDate) => dispatch(fetchCocsBySearch(client, startDate, endDate)),
    fetchWFMClients: () => dispatch(fetchWFMClients()),
    showModal: modal => dispatch(showModal(modal)),
    setAnalyst: analyst => dispatch(setAnalyst(analyst)),
    setAnalysisMode: analysisMode => dispatch(setAnalysisMode(analysisMode)),
  };
};

class AsbestosCocs extends React.PureComponent {
  // static whyDidYouRender = true;
  state = {
    analyst: false,
    searchClient: '',
    searchJobNumber: '',
    searchStartDate: moment().subtract(100, 'days').format('YYYY-MM-DD'),
    searchEndDate: moment().format('YYYY-MM-DD'),
  };

  componentWillMount = () => {
    if (this.props.clients.length === 0) this.props.fetchWFMClients();
    this.props.fetchCocs();
    if (this.props.me && this.props.me.auth) {
      if (
        this.props.me.auth["Asbestos Air Analysis"] ||
        this.props.me.auth["Asbestos Admin"] ||
        this.props.me.auth["Asbestos Bulk Analysis"]
      ) {
        this.setState({
          analyst: true
        });
        if (this.props.analyst !== this.props.me.name) this.props.setAnalyst(this.props.me.name);
      }
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    // return true;
    if (Object.keys(this.props.cocs).length !== Object.keys(nextProps.cocs).length ||
      this.props.clients.length !== nextProps.clients.length ||
      this.props.analyst !== nextProps.analyst ||
      this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { cocs, classes } = this.props;
    moment.tz.setDefault("Pacific/Auckland");
    moment.updateLocale('en', {
      // workingWeekdays: [1,2,3,4,5],
      workinghours: {
        0: null,
        1: ['08:30:00', '17:00:00'],
        2: ['08:30:00', '17:00:00'],
        3: ['08:30:00', '17:00:00'],
        4: ['08:30:00', '17:00:00'],
        5: ['08:30:00', '17:00:00'],
        6: null,
      },
      holidays: [],
    });

    console.log('Asbestos Cocs Re-Rendering');

    return (
      <div className={classes.marginTopStandard}>
        <CocModal />
        <UpdateCertificateVersionModal />
        <SampleLogModal />
        <WAAnalysisModal />
        <AsbestosSampleEditModal />
        <DownloadLabCertificateModal />
        <CocLogModal />
        <SoilDetailsModal />
        <AsbestosSampleCocEditModal />
        <ConfirmResultModal />
        <AsbestosSampleDetailsModal />
        <AsbestosSampleActionsModal />
        <Button
          variant="outlined"
          className={classes.marginBottomSmall}
          onClick={() => {
            this.props.showModal({
              modalType: COC,
              modalProps: {
                title: "Add New Chain of Custody",
                doc: { dates: [], personnel: [], samples: {}, deleted: false, versionUpToDate: false, mostRecentIssueSent: false, },
                isNew: true,
              }
            });
          }}
        >
          New Chain of Custody
        </Button>
        <div className={classes.flexRow}>
          <div className={classes.searchBoxRoot}>
            <InputLabel className={classes.marginLeftBottomSmall}>Search by Job Number</InputLabel>
            <div>
              <FormControl>
                <InputLabel shrink>Job Number</InputLabel>
                <Input
                  id="searchJobNumber"
                  value={this.state.searchJobNumber}
                  onChange={e => this.setState({ searchJobNumber: e.target.value})}
                  startAdornment={<InputAdornment position="start">AS</InputAdornment>}
                />
              </FormControl>
              <Button
                className={classes.buttonGo}
                onClick={() => this.props.fetchCocsByJobNumber(`AS${this.state.searchJobNumber}`)}
              >
                Go
              </Button>
            </div>
          </div>
          <div className={classes.spacerSmall} />
          <div className={classes.searchBoxRoot} >
            <InputLabel className={classes.marginLeftBottomSmall}>Search by Client and/or Date</InputLabel>
            <div className={classes.flexRow}>
              <FormControl className={classes.formSelectClient}>
                <InputLabel shrink>Client</InputLabel>
                <Select
                  className={classes.select}
                  defaultValue={{label: this.state.searchClient, id: this.state.searchClient}}
                  options={this.props.clients.map(client => ({ value: client.name, label: client.name }))}
                  onChange={e => this.setState({searchClient: e ? e.value : ""})}
                  isClearable
                  isSearchable
                />
              </FormControl>
              <div className={classes.spacerSmall} />
              <DatePicker
                value={this.state.searchStartDate}
                autoOk
                label="From"
                openTo="year"
                format="D MMMM YYYY"
                views={['year', 'month', 'date']}
                clearable
                onChange={date => this.setState({ searchStartDate: date})}
              />
              <DatePicker
                value={this.state.searchEndDate}
                autoOk
                label="To"
                openTo="year"
                disableFuture
                format="D MMMM YYYY"
                clearable
                views={['year', 'month', 'date']}
                onChange={date => this.setState({ searchEndDate: date})}
              />
              <Button
                className={classes.buttonGo}
                onClick={() => this.props.fetchCocsBySearch(this.state.searchClient, this.state.searchStartDate, this.state.searchEndDate)}
              >
                Go
              </Button>
            </div>
          </div>
          <div className={classes.spacerSmall} />
          {this.state.analyst && (
            <div className={classes.searchBoxRoot}>
              <InputLabel className={classes.marginLeftBottomSmall}>
                Report Analysis As:
              </InputLabel>
              <div>
                <FormControl className={classes.formSelectStaff}>
                  <InputLabel shrink>Analyst</InputLabel>
                  <Select
                    className={classes.select}
                    defaultValue={{label: this.props.analyst, id: this.props.analyst }}
                    options={this.props.bulkAnalysts.map(e => ({ value: e.name, label: e.name }))}
                    onChange={e => this.props.setAnalyst(e ? e.value : e)}
                  />
                </FormControl>
              </div>
            </div>
          )}
        </div>
        {Object.keys(cocs)
          .filter(job => {
            let res = true;
            if (this.props.search) {
              let terms = this.props.search.split(" ");
              let search =
                job + " " + cocs[job].client + " " + cocs[job].address;
              terms.forEach(term => {
                if (!search.toLowerCase().includes(term.toLowerCase()))
                  res = false;
              });
            }
            if (this.state.searchClient !== "" && cocs[job].client !== this.state.searchClient) res = false;
            if (this.state.searchStartDate !== "" && moment(cocs[job].lastModified.toDate()).isBefore(new Date(this.state.searchStartDate), 'day')) res = false;
            if (this.state.searchEndDate !== "" && moment(cocs[job].lastModified.toDate()).isAfter(new Date(this.state.searchEndDate), 'day')) res = false;
            if (this.state.searchJobNumber !== "" && cocs[job].jobNumber.includes(this.state.searchJobNumber.toUpperCase()) === false) res = false;
            if (cocs[job].deleted === true) res = false;
            return res;
          }).length < 1 ? (
            <div className={classes.marginTopSmall}>
              <LinearProgress color="secondary" />
            </div>
          ) : (
            <div className={classes.marginTopSmall}>
              {Object.keys(cocs)
                .filter(job => {
                  let res = true;
                  if (this.props.search) {
                    let terms = this.props.search.split(" ");
                    let search =
                      job + " " + cocs[job].client + " " + cocs[job].address;
                    terms.forEach(term => {
                      if (!search.toLowerCase().includes(term.toLowerCase()))
                        res = false;
                    });
                  }
                  if (this.state.searchClient !== "" && cocs[job].client !== this.state.searchClient) res = false;
                  if (this.state.searchStartDate !== "" && moment(cocs[job].lastModified.toDate()).isBefore(new Date(this.state.searchStartDate), 'day')) res = false;
                  if (this.state.searchEndDate !== "" && moment(cocs[job].lastModified.toDate()).isAfter(new Date(this.state.searchEndDate), 'day')) res = false;
                  if (this.state.searchJobNumber !== "" && cocs[job].jobNumber.includes(this.state.searchJobNumber.toUpperCase()) === false) res = false;
                  if (cocs[job].deleted === true) res = false;
                  return res;
                })
                .map(job => {
                  // what is the version thing doing
                  let version = 1;
                  // console.log(cocs[job]);
                  if (cocs[job].reportversion)
                    version = cocs[job].reportversion + 1;
                  return <AsbestosBulkCocCard key={job} job={job} />;
                })}
            </div>
          )
        }
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsbestosCocs)
);
