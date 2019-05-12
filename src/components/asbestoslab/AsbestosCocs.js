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
  fetchWFMClients,
} from "../../actions/local";

//Modals
import { COC } from "../../constants/modal-types";
import { showModal } from "../../actions/modal";
import CocModal from "./CocModal";
import UpdateCertificateVersion from "./UpdateCertificateVersion";
import QCAnalysis from "./QCAnalysis";
import WAAnalysis from "./WAAnalysis";
import DownloadLabCertificateModal from "./DownloadLabCertificateModal";
import SampleHistoryModal from "./SampleHistoryModal";
import CocLog from "./CocLog";

import AsbestosBulkCocCard from "./AsbestosBulkCocCard";

import RefreshIcon from "@material-ui/icons/Refresh";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import moment from "moment";


const mapStateToProps = state => {
  return {
    cocs: state.local.cocs,
    search: state.local.search,
    me: state.local.me,
    staff: state.local.staff,
    clients: state.local.wfmClients,
    bulkanalysts: state.local.bulkanalysts,
    airanalysts: state.local.airanalysts,
    analyst: state.local.analyst,
    analysismode: state.local.analysismode
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
    setAnalysisMode: analysismode => dispatch(setAnalysisMode(analysismode))
  };
};

class AsbestosCocs extends React.Component {
  state = {
    analyst: false,
    searchClient: '',
    searchJobNumber: '',
    searchStartDate: moment().subtract(100, 'days').format('YYYY-MM-DD'),
    searchEndDate: moment().format('YYYY-MM-DD'),
  };

  componentWillMount = () => {
    this.props.fetchCocs();
    if (this.props.clients.length === 0) this.props.fetchWFMClients();
    if (this.props.me && this.props.me.auth) {
      if (
        this.props.me.auth["Asbestos Air Analysis"] ||
        this.props.me.auth["Asbestos Admin"] ||
        this.props.me.auth["Asbestos Bulk Analysis"]
      ) {
        this.setState({
          analyst: true
        });
      }
    }
  };

  searchCocs = (searchTerm) => {
    if (searchTerm === 'jobNumber') {
      if (this.state.searchJobNumber !== '') {

      }
    }
  }

  render() {
    const { cocs } = this.props;

    return (
      <div style={{ marginTop: 80 }}>
        <CocModal />
        <UpdateCertificateVersion />
        <SampleHistoryModal />
        <QCAnalysis />
        <WAAnalysis />
        <DownloadLabCertificateModal />
        <CocLog />
        <Grid container spacing={16} alignItems='flex-start'>
          <Grid item>
            <Button
              variant="outlined"
              style={{ marginBottom: 16, width: 220 }}
              onClick={() => {
                this.props.showModal({
                  modalType: COC,
                  modalProps: {
                    title: "Add New Chain of Custody",
                    doc: { dates: [], personnel: [], personnelSetup: [], personnelPickup: [], samples: {}, type: "bulk", deleted: false, versionUpToDate: false, }
                  }
                });
              }}
            >
              New Chain of Custody
            </Button>
            {this.state.analyst && (
              <div
                style={{
                  borderRadius: 4,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#ccc",
                  width: 220,
                  marginBottom: 12,
                  padding: 12
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <InputLabel style={{ marginLeft: 12 }}>
                    Report Analysis As:
                  </InputLabel>
                </div>
                <div>
                  <FormControl style={{ width: 200 }}>
                    <InputLabel shrink>Analyst</InputLabel>
                    <Select
                      value={this.props.analyst}
                      onChange={e => this.props.setAnalyst(e.target.value)}
                      input={<Input name="analyst" id="analyst" />}
                    >
                      {this.props.bulkanalysts.map(analyst => {
                        return (
                          <option key={analyst.uid} value={analyst.name}>
                            {analyst.name}
                          </option>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>
            )}
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                borderRadius: 4,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#ccc",
                width: '100%',
                padding: 12
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <InputLabel style={{ marginLeft: 12 }}>
                  Get Chains of Custody by Job Number
                </InputLabel>
              </div>
              <div>
                <FormControl style={{ width: '80%', marginRight: 8, }}>
                  <InputLabel shrink>Job Number</InputLabel>
                  <Input
                    id="searchJobNumber"
                    value={this.state.searchJobNumber}
                    onChange={e => this.setState({ searchJobNumber: e.target.value})}
                    startAdornment={<InputAdornment position="start">AS</InputAdornment>}
                  />
                </FormControl>
                <Button
                  variant="outlined"
                  style={{ marginTop: 16, marginBottom: 16, marginLeft: 1 }}
                  onClick={() => this.props.fetchCocsByJobNumber(`AS${this.state.searchJobNumber}`)}
                >
                  Go
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xl={this.state.analyst ? 7 : 9} lg={12}>
            <div
              style={{
                borderRadius: 4,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#ccc",
                width: '100%',
                padding: 12
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <InputLabel style={{ marginLeft: 12 }}>
                  Search Historic Chains of Custody
                </InputLabel>
              </div>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                <FormControl style={{ width: '100%'}}>
                  <InputLabel shrink>Client</InputLabel>
                  <Select
                    value={this.state.searchClient}
                    onChange={e => {
                      if (e.target.value === "-") this.setState({searchClient: ""}); else this.setState({searchClient: e.target.value});
                    }}
                    input={<Input name="searchClient" id="searchClient" />}
                  >
                    {this.props.clients.map(client => {
                      return (
                        <option key={client.wfmID} value={client.name}>
                          {client.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="searchStartDate"
                    label="From"
                    type="date"
                    value={this.state.searchStartDate}
                    onChange={e => this.setState({ searchStartDate: e.target.value})}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="searchEndDate"
                    label="To"
                    type="date"
                    value={this.state.searchEndDate}
                    onChange={e => this.setState({ searchEndDate: e.target.value})}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    style={{ marginTop: 16, marginBottom: 16 }}
                    onClick={() => this.props.fetchCocsBySearch(this.state.searchClient, this.state.searchStartDate, this.state.searchEndDate)}
                  >
                    Go
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        {Object.keys(cocs).length < 1 ? (
          <div
            style={{
              marginTop: 16,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            No CoCs found.
            {/*<CircularProgress
              style={{
                margin: 40
              }}
            />*/}
          </div>
        ) : (
          <div style={{ marginTop: 16, }}>
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
                return res;
              })
              .map(job => {
                let version = 1;
                if (cocs[job].reportversion)
                  version = cocs[job].reportversion + 1;
                return <AsbestosBulkCocCard key={job} job={cocs[job]} />;
              })}
          </div>
        )}
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