<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import { ASBESTOS_LOGGED_SAMPLES, ASBESTOS_SAMPLE_DETAILS } from "../../../constants/modal-types";
import { docsRef } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ConfirmIcon from "@material-ui/icons/ThumbUp";
import ThumbsDown from "@material-ui/icons/ThumbDown";
import AddIcon from "@material-ui/icons/Add";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { hideModal, showModalSecondary } from "../../../actions/modal";
import { dateOf, milliToDHM, } from '../../../actions/helpers';
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { ASBESTOS_LOGGED_SAMPLES, ASBESTOS_SAMPLE_DETAILS } from '../../../constants/modal-types'
import { docsRef } from '../../../config/firebase'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import ConfirmIcon from '@material-ui/icons/ThumbUp'
import ThumbsDown from '@material-ui/icons/ThumbDown'
import AddIcon from '@material-ui/icons/Add'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { hideModal, showModalSecondary } from '../../../actions/modal'
import { dateOf, milliToDHM } from '../../../actions/helpers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  writeShorthandResult,
  writeDescription,
  fetchSamples,
  fetchSampleView,
  fetchAsbestosAnalysisLogs,
  fetchAsbestosSampleIssueLogs,
  fetchAsbestosCheckLogs,
<<<<<<< HEAD
  compareAsbestosResult,
} from "../../../actions/asbestosLab";
import moment from "moment";
import classNames from 'classnames';

const mapStateToProps = state => {
=======
  compareAsbestosResult
} from '../../../actions/asbestosLab'
import moment from 'moment'
import classNames from 'classnames'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    sampleIssueLogs: state.asbestosLab.asbestosSampleIssueLogs,
    asbestosAnalysisLogs: state.asbestosLab.asbestosAnalysisLogs,
<<<<<<< HEAD
    asbestosCheckLogs : state.asbestosLab.asbestosCheckLogs,
    cocs: state.asbestosLab.cocs,
    samples: state.asbestosLab.samples,
  };
};

const mapDispatchToProps = dispatch => {
=======
    asbestosCheckLogs: state.asbestosLab.asbestosCheckLogs,
    cocs: state.asbestosLab.cocs,
    samples: state.asbestosLab.samples
  }
}

const mapDispatchToProps = (dispatch) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    fetchAsbestosSampleIssueLogs: (limit) => dispatch(fetchAsbestosSampleIssueLogs(limit)),
    fetchAsbestosAnalysisLogs: (limit) => dispatch(fetchAsbestosAnalysisLogs(limit)),
    fetchAsbestosCheckLogs: (limit) => dispatch(fetchAsbestosCheckLogs(limit)),
    fetchSampleView: (cocUid, sampleUid, jobNumber) => dispatch(fetchSampleView(cocUid, sampleUid, jobNumber)),
<<<<<<< HEAD
    showModalSecondary: modal => dispatch(showModalSecondary(modal)),
    hideModal: () => dispatch(hideModal()),
  };
};

const defaultPageSize = 19;
const dateWidth = 140;
const personWidth = 150;
const resultWidth = 120;
const sampleNumberWidth = 120;
const categoryWidth = 100;
const clientWidth = 180;
const smallWidth = 50;
=======
    showModalSecondary: (modal) => dispatch(showModalSecondary(modal)),
    hideModal: () => dispatch(hideModal())
  }
}

const defaultPageSize = 19
const dateWidth = 140
const personWidth = 150
const resultWidth = 120
const sampleNumberWidth = 120
const categoryWidth = 100
const clientWidth = 180
const smallWidth = 50
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class LoggedSamplesModal extends React.Component {
  state = {
    tabValue: 0,
    issueLimit: defaultPageSize,
    analysisLimit: defaultPageSize,
<<<<<<< HEAD
    checkLimit: defaultPageSize,
  }

  increaseIssueLimit = () => {
    this.props.fetchAsbestosSampleIssueLogs(this.state.issueLimit + defaultPageSize);
    this.setState({
      issueLimit: this.state.issueLimit + defaultPageSize,
=======
    checkLimit: defaultPageSize
  }

  increaseIssueLimit = () => {
    this.props.fetchAsbestosSampleIssueLogs(this.state.issueLimit + defaultPageSize)
    this.setState({
      issueLimit: this.state.issueLimit + defaultPageSize
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    })
  }

  increaseAnalysisLimit = () => {
<<<<<<< HEAD
    this.props.fetchAsbestosAnalysisLogs(this.state.analysisLimit + defaultPageSize);
    this.setState({
      analysisLimit: this.state.analysisLimit + defaultPageSize,
=======
    this.props.fetchAsbestosAnalysisLogs(this.state.analysisLimit + defaultPageSize)
    this.setState({
      analysisLimit: this.state.analysisLimit + defaultPageSize
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    })
  }

  increaseChecksLimit = () => {
<<<<<<< HEAD
    this.props.fetchAsbestosAnalysisLogs(this.state.checkLimit + defaultPageSize);
    this.setState({
      checkLimit: this.state.checkLimit + defaultPageSize,
=======
    this.props.fetchAsbestosAnalysisLogs(this.state.checkLimit + defaultPageSize)
    this.setState({
      checkLimit: this.state.checkLimit + defaultPageSize
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    })
  }

  handleTabChange = (event, value) => {
<<<<<<< HEAD
    this.setState({ tabValue: value });
  };

  loadLogs = () => {
    this.props.fetchAsbestosSampleIssueLogs(this.state.issueLimit);
    this.props.fetchAsbestosAnalysisLogs(this.state.analysisLimit);
    this.props.fetchAsbestosCheckLogs(this.state.checkLimit);
  }

  render() {
    const { classes, modalProps, modalType, sampleIssueLogs, asbestosAnalysisLogs, asbestosCheckLogs, } = this.props;
      let loadingIssue = sampleIssueLogs && Object.keys(sampleIssueLogs).length + defaultPageSize <= this.state.issueLimit,
        loadingAnalysis = asbestosAnalysisLogs && Object.keys(asbestosAnalysisLogs).length + defaultPageSize <= this.state.analysisLimit,
        loadingCheck = asbestosCheckLogs && Object.keys(asbestosCheckLogs).length + defaultPageSize <= this.state.checkLimit;
    return (
      modalType === ASBESTOS_LOGGED_SAMPLES &&
=======
    this.setState({ tabValue: value })
  }

  loadLogs = () => {
    this.props.fetchAsbestosSampleIssueLogs(this.state.issueLimit)
    this.props.fetchAsbestosAnalysisLogs(this.state.analysisLimit)
    this.props.fetchAsbestosCheckLogs(this.state.checkLimit)
  }

  render() {
    const { classes, modalProps, modalType, sampleIssueLogs, asbestosAnalysisLogs, asbestosCheckLogs } = this.props
    let loadingIssue = sampleIssueLogs && Object.keys(sampleIssueLogs).length + defaultPageSize <= this.state.issueLimit,
      loadingAnalysis = asbestosAnalysisLogs && Object.keys(asbestosAnalysisLogs).length + defaultPageSize <= this.state.analysisLimit,
      loadingCheck = asbestosCheckLogs && Object.keys(asbestosCheckLogs).length + defaultPageSize <= this.state.checkLimit
    return (
      modalType === ASBESTOS_LOGGED_SAMPLES && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <Dialog
          open={modalType === ASBESTOS_LOGGED_SAMPLES}
          onClose={this.props.hideModal}
          classes={{ paper: classes.minHeightDialog90 }}
<<<<<<< HEAD
          maxWidth="xl"
          fullWidth={true}
          onEnter={this.loadLogs}
        >
        <DialogTitle>Sample Logs</DialogTitle>
        <DialogContent>
          <div className={classes.flexRowRightAlign}>
            <Tooltip title="Load More">
              <IconButton
                onClick={e => {
                  this.state.tabValue === 0 && this.increaseIssueLimit();
                  this.state.tabValue === 1 && this.increaseAnalysisLimit();
                  this.state.tabValue === 2 && this.increaseChecksLimit();
                }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleTabChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="Samples Issued" />
            <Tab label="Sample Analysis" />
            <Tab label="Quality Control Checks" />
            {/*<Tab label="Stats" />*/}
          </Tabs>
          {this.state.tabValue === 0 &&
            <ReactTable
=======
          maxWidth='xl'
          fullWidth={true}
          onEnter={this.loadLogs}
        >
          <DialogTitle>Sample Logs</DialogTitle>
          <DialogContent>
            <div className={classes.flexRowRightAlign}>
              <Tooltip title='Load More'>
                <IconButton
                  onClick={(e) => {
                    this.state.tabValue === 0 && this.increaseIssueLimit()
                    this.state.tabValue === 1 && this.increaseAnalysisLimit()
                    this.state.tabValue === 2 && this.increaseChecksLimit()
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Tabs value={this.state.tabValue} onChange={this.handleTabChange} indicatorColor='secondary' textColor='secondary' centered>
              <Tab label='Samples Issued' />
              <Tab label='Sample Analysis' />
              <Tab label='Quality Control Checks' />
              {/*<Tab label="Stats" />*/}
            </Tabs>
            {this.state.tabValue === 0 && (
              <ReactTable
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                loading={loadingIssue}
                pageSize={defaultPageSize}
                showPageSizeOptions={false}
                style={{
<<<<<<< HEAD
                  cursor: 'pointer',
=======
                  cursor: 'pointer'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
                data={sampleIssueLogs ? Object.values(sampleIssueLogs) : []}
                getTdProps={(state, rowInfo, column, instance) => ({
                  onClick: () => {
<<<<<<< HEAD
                      this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber);
                      this.props.showModalSecondary({
                        modalType: ASBESTOS_SAMPLE_DETAILS,
                        modalProps: {
                          doc: false,
                          job: false,
                          cocUid: rowInfo.original.cocUid,
                          sampleNumber: rowInfo.original.sampleNumber,
                          noNext: true,
                        }
                      });
                    }
                  }
                )}
=======
                    this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber)
                    this.props.showModalSecondary({
                      modalType: ASBESTOS_SAMPLE_DETAILS,
                      modalProps: {
                        doc: false,
                        job: false,
                        cocUid: rowInfo.original.cocUid,
                        sampleNumber: rowInfo.original.sampleNumber,
                        noNext: true
                      }
                    })
                  }
                })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                defaultSorted={[
                  {
                    id: 'dateIssued',
                    desc: true
<<<<<<< HEAD
                  },
                ]}
                columns={
                [{
                  id: 'dateIssued',
                  Header: 'Date Issued',
                  accessor: d => d.issueDate,
                  maxWidth: dateWidth,
                  Cell: c => c.value !== "" ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : ""
                },{
                  id: 'dateReceived',
                  Header: 'Date Received',
                  accessor: d => d.receivedDate,
                  maxWidth: dateWidth,
                  Cell: c => c.value !== "" ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : ""
                },{
                  id: 'sampleNumber',
                  Header: 'Sample Number',
                  accessor: d => `${d.jobNumber}-${d.sampleNumber}${d.version !== undefined && ` (v${d.version})`}`,
                  maxWidth: sampleNumberWidth,
                },{
                  id: 'client',
                  Header: 'Client',
                  accessor: d => d.client,
                  maxWidth: clientWidth,
                },{
                  id: 'address',
                  Header: 'Address',
                  accessor: d => d.address,
                },{
                  id: 'description',
                  Header: 'Description',
                  accessor: d => writeDescription(d),
                },{
                  id: 'category',
                  Header: 'Category',
                  accessor: d => d.category,
                  maxWidth: categoryWidth,
                },{
                  id: 'result',
                  Header: 'Result',
                  accessor: d => writeShorthandResult(d.result),
                  maxWidth: resultWidth,
                },{
                  id: 'weightReceived',
                  Header: 'Weight Received',
                  accessor: d => d.weightReceived,
                  maxWidth: smallWidth,
                  Cell: c => c.value !== "" ? `${c.value}g` : ""
                },{
                  id: 'analyst',
                  Header: 'Analyst',
                  accessor: d => d.analysisBy,
                  maxWidth: personWidth,
                },{
                  id: 'turnaroundTime',
                  Header: 'Turnaround Time',
                  accessor: d => d.turnaroundTime,
                  maxWidth: smallWidth,
                  Cell: c => c.value !== "" ? milliToDHM(c.value, false, false) : ""
                }
                ]}
                defaultPageSize={25}
                className="-striped -highlight"
              />
          }
          {this.state.tabValue === 1 &&
            <ReactTable
=======
                  }
                ]}
                columns={[
                  {
                    id: 'dateIssued',
                    Header: 'Date Issued',
                    accessor: (d) => d.issueDate,
                    maxWidth: dateWidth,
                    Cell: (c) => (c.value !== '' ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : '')
                  },
                  {
                    id: 'dateReceived',
                    Header: 'Date Received',
                    accessor: (d) => d.receivedDate,
                    maxWidth: dateWidth,
                    Cell: (c) => (c.value !== '' ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : '')
                  },
                  {
                    id: 'sampleNumber',
                    Header: 'Sample Number',
                    accessor: (d) => `${d.jobNumber}-${d.sampleNumber}${d.version !== undefined && ` (v${d.version})`}`,
                    maxWidth: sampleNumberWidth
                  },
                  {
                    id: 'client',
                    Header: 'Client',
                    accessor: (d) => d.client,
                    maxWidth: clientWidth
                  },
                  {
                    id: 'address',
                    Header: 'Address',
                    accessor: (d) => d.address
                  },
                  {
                    id: 'description',
                    Header: 'Description',
                    accessor: (d) => writeDescription(d)
                  },
                  {
                    id: 'category',
                    Header: 'Category',
                    accessor: (d) => d.category,
                    maxWidth: categoryWidth
                  },
                  {
                    id: 'result',
                    Header: 'Result',
                    accessor: (d) => writeShorthandResult(d.result),
                    maxWidth: resultWidth
                  },
                  {
                    id: 'weightReceived',
                    Header: 'Weight Received',
                    accessor: (d) => d.weightReceived,
                    maxWidth: smallWidth,
                    Cell: (c) => (c.value !== '' ? `${c.value}g` : '')
                  },
                  {
                    id: 'analyst',
                    Header: 'Analyst',
                    accessor: (d) => d.analysisBy,
                    maxWidth: personWidth
                  },
                  {
                    id: 'turnaroundTime',
                    Header: 'Turnaround Time',
                    accessor: (d) => d.turnaroundTime,
                    maxWidth: smallWidth,
                    Cell: (c) => (c.value !== '' ? milliToDHM(c.value, false, false) : '')
                  }
                ]}
                defaultPageSize={25}
                className='-striped -highlight'
              />
            )}
            {this.state.tabValue === 1 && (
              <ReactTable
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                loading={loadingAnalysis}
                pageSize={defaultPageSize}
                showPageSizeOptions={false}
                style={{
<<<<<<< HEAD
                  cursor: 'pointer',
=======
                  cursor: 'pointer'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
                data={asbestosAnalysisLogs ? Object.values(asbestosAnalysisLogs) : []}
                getTdProps={(state, rowInfo, column, instance) => ({
                  onClick: () => {
<<<<<<< HEAD
                      this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber);
                      this.props.showModalSecondary({
                        modalType: ASBESTOS_SAMPLE_DETAILS,
                        modalProps: {
                          doc: false,
                          job: false,
                          cocUid: rowInfo.original.cocUid,
                          sampleNumber: rowInfo.original.sampleNumber,
                          noNext: true,
                        }
                      });
                    }
                  }
                )}
=======
                    this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber)
                    this.props.showModalSecondary({
                      modalType: ASBESTOS_SAMPLE_DETAILS,
                      modalProps: {
                        doc: false,
                        job: false,
                        cocUid: rowInfo.original.cocUid,
                        sampleNumber: rowInfo.original.sampleNumber,
                        noNext: true
                      }
                    })
                  }
                })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                defaultSorted={[
                  {
                    id: 'analysisDate',
                    desc: true
<<<<<<< HEAD
                  },
                ]}
                columns={
                [{
                  id: 'analysisDate',
                  Header: 'Analysis Date',
                  accessor: d => d.analysisDate,
                  maxWidth: dateWidth,
                  Cell: c => c.value !== "" ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : ""
                },{
                  id: 'sampleNumber',
                  Header: 'Sample Number',
                  accessor: d => `${d.jobNumber}-${d.sampleNumber}`,
                  maxWidth: sampleNumberWidth,
                },{
                  id: 'description',
                  Header: 'Description',
                  accessor: d => writeDescription(d),
                },{
                  id: 'category',
                  Header: 'Category',
                  accessor: d => d.category,
                  maxWidth: categoryWidth,
                },{
                  id: 'result',
                  Header: 'Result',
                  accessor: d => writeShorthandResult(d.result),
                  maxWidth: resultWidth,
                },{
                  id: 'weightReceived',
                  Header: 'Weight Received',
                  accessor: d => d.weightReceived,
                  maxWidth: smallWidth,
                  Cell: c => c.value !== "" ? `${c.value}g` : ""
                },{
                  id: 'analyst',
                  Header: 'Analyst',
                  accessor: d => d.analyst,
                  maxWidth: personWidth,
                },{
                  id: 'turnaroundTime',
                  Header: 'Turnaround Time',
                  accessor: d => d.receivedDate && d.analysisDate ? milliToDHM(dateOf(d.analysisDate)-dateOf(d.receivedDate), false, false) : '',
                  maxWidth: smallWidth,
                }
                ]}
                defaultPageSize={25}
                className="-striped -highlight"
              />
          }
          {this.state.tabValue === 2 &&
              <ReactTable
                  loading={loadingCheck}
                  pageSize={defaultPageSize}
                  showPageSizeOptions={false}
                  style={{
                    cursor: 'pointer',
                  }}
                  data={asbestosCheckLogs ? Object.values(asbestosCheckLogs) : []}
                  getTdProps={(state, rowInfo, column, instance) => ({
                    onClick: () => {
                        this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber);
                        this.props.showModalSecondary({
                          modalType: ASBESTOS_SAMPLE_DETAILS,
                          modalProps: {
                            doc: false,
                            job: false,
                            cocUid: rowInfo.original.cocUid,
                            sampleNumber: rowInfo.original.sampleNumber,
                            noNext: true,
                          }
                        });
                      }
                    }
                  )}
                  defaultSorted={[
                    {
                      id: 'checkDate',
                      desc: true
                    },
                  ]}
                  columns={
                  [{
                    id: 'checkDate',
                    Header: 'Check Date',
                    accessor: d => d.checkDate,
                    maxWidth: dateWidth,
                    Cell: c => {
                      console.log(c.value);
                      return c.value !== "" ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : ""
                    }
                  },{
                    id: 'sampleNumber',
                    Header: 'Sample Number',
                    accessor: d => `${d.jobNumber}-${d.sampleNumber}`,
                    maxWidth: sampleNumberWidth,
                  },{
                    id: 'description',
                    Header: 'Description',
                    accessor: d => writeDescription(d),
                  },{
                    id: 'category',
                    Header: 'Category',
                    accessor: d => d.category,
                    maxWidth: categoryWidth,
                  },{
                    id: 'originalResult',
                    Header: 'Original Result',
                    accessor: d => writeShorthandResult(d.originalResult),
                    maxWidth: resultWidth,
                  },{
                    id: 'result',
                    Header: 'Result',
                    accessor: d => writeShorthandResult(d.result),
                    maxWidth: resultWidth,
                  },{
                    id: 'compare',
                    Header: '',
                    accessor: d => {
                      console.log(d);
                      console.log(compareAsbestosResult({result: d.result}, {result: d.originalResult}));
                      return compareAsbestosResult({result: d.result}, {result: d.originalResult});
                    },
                    maxWidth: smallWidth,
                    Cell: c => c.value === 'no' ? <ThumbsDown className={classes.iconRegularRed} /> :
                      c.value === 'differentAsbestos' ? <ConfirmIcon className={classes.iconRegularOrange} /> :
                      <ConfirmIcon className={classes.iconRegularGreen} />
                  },{
                    id: 'weightReceived',
                    Header: 'Weight Received',
                    accessor: d => d.weightReceived,
                    maxWidth: smallWidth,
                    Cell: c => c.value !== "" ? `${c.value}g` : ""
                  },{
                    id: 'originalAnalysisBy',
                    Header: 'Original Analyst',
                    accessor: d => d.originalAnalysisBy,
                    maxWidth: personWidth,
                  },{
                    id: 'checker',
                    Header: 'Checker',
                    accessor: d => d.checker,
                    maxWidth: personWidth,
                  },
                  ]}
                  defaultPageSize={25}
                  className="-striped -highlight"
                />
            }
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.hideModal();
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
=======
                  }
                ]}
                columns={[
                  {
                    id: 'analysisDate',
                    Header: 'Analysis Date',
                    accessor: (d) => d.analysisDate,
                    maxWidth: dateWidth,
                    Cell: (c) => (c.value !== '' ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : '')
                  },
                  {
                    id: 'sampleNumber',
                    Header: 'Sample Number',
                    accessor: (d) => `${d.jobNumber}-${d.sampleNumber}`,
                    maxWidth: sampleNumberWidth
                  },
                  {
                    id: 'description',
                    Header: 'Description',
                    accessor: (d) => writeDescription(d)
                  },
                  {
                    id: 'category',
                    Header: 'Category',
                    accessor: (d) => d.category,
                    maxWidth: categoryWidth
                  },
                  {
                    id: 'result',
                    Header: 'Result',
                    accessor: (d) => writeShorthandResult(d.result),
                    maxWidth: resultWidth
                  },
                  {
                    id: 'weightReceived',
                    Header: 'Weight Received',
                    accessor: (d) => d.weightReceived,
                    maxWidth: smallWidth,
                    Cell: (c) => (c.value !== '' ? `${c.value}g` : '')
                  },
                  {
                    id: 'analyst',
                    Header: 'Analyst',
                    accessor: (d) => d.analyst,
                    maxWidth: personWidth
                  },
                  {
                    id: 'turnaroundTime',
                    Header: 'Turnaround Time',
                    accessor: (d) =>
                      d.receivedDate && d.analysisDate ? milliToDHM(dateOf(d.analysisDate) - dateOf(d.receivedDate), false, false) : '',
                    maxWidth: smallWidth
                  }
                ]}
                defaultPageSize={25}
                className='-striped -highlight'
              />
            )}
            {this.state.tabValue === 2 && (
              <ReactTable
                loading={loadingCheck}
                pageSize={defaultPageSize}
                showPageSizeOptions={false}
                style={{
                  cursor: 'pointer'
                }}
                data={asbestosCheckLogs ? Object.values(asbestosCheckLogs) : []}
                getTdProps={(state, rowInfo, column, instance) => ({
                  onClick: () => {
                    this.props.fetchSampleView(rowInfo.original.cocUid, rowInfo.original.sampleUid, rowInfo.original.jobNumber)
                    this.props.showModalSecondary({
                      modalType: ASBESTOS_SAMPLE_DETAILS,
                      modalProps: {
                        doc: false,
                        job: false,
                        cocUid: rowInfo.original.cocUid,
                        sampleNumber: rowInfo.original.sampleNumber,
                        noNext: true
                      }
                    })
                  }
                })}
                defaultSorted={[
                  {
                    id: 'checkDate',
                    desc: true
                  }
                ]}
                columns={[
                  {
                    id: 'checkDate',
                    Header: 'Check Date',
                    accessor: (d) => d.checkDate,
                    maxWidth: dateWidth,
                    Cell: (c) => {
                      console.log(c.value)
                      return c.value !== '' ? moment(dateOf(c.value)).format('D MMM YYYY, h:mma') : ''
                    }
                  },
                  {
                    id: 'sampleNumber',
                    Header: 'Sample Number',
                    accessor: (d) => `${d.jobNumber}-${d.sampleNumber}`,
                    maxWidth: sampleNumberWidth
                  },
                  {
                    id: 'description',
                    Header: 'Description',
                    accessor: (d) => writeDescription(d)
                  },
                  {
                    id: 'category',
                    Header: 'Category',
                    accessor: (d) => d.category,
                    maxWidth: categoryWidth
                  },
                  {
                    id: 'originalResult',
                    Header: 'Original Result',
                    accessor: (d) => writeShorthandResult(d.originalResult),
                    maxWidth: resultWidth
                  },
                  {
                    id: 'result',
                    Header: 'Result',
                    accessor: (d) => writeShorthandResult(d.result),
                    maxWidth: resultWidth
                  },
                  {
                    id: 'compare',
                    Header: '',
                    accessor: (d) => {
                      console.log(d)
                      console.log(compareAsbestosResult({ result: d.result }, { result: d.originalResult }))
                      return compareAsbestosResult({ result: d.result }, { result: d.originalResult })
                    },
                    maxWidth: smallWidth,
                    Cell: (c) =>
                      c.value === 'no' ? (
                        <ThumbsDown className={classes.iconRegularRed} />
                      ) : c.value === 'differentAsbestos' ? (
                        <ConfirmIcon className={classes.iconRegularOrange} />
                      ) : (
                        <ConfirmIcon className={classes.iconRegularGreen} />
                      )
                  },
                  {
                    id: 'weightReceived',
                    Header: 'Weight Received',
                    accessor: (d) => d.weightReceived,
                    maxWidth: smallWidth,
                    Cell: (c) => (c.value !== '' ? `${c.value}g` : '')
                  },
                  {
                    id: 'originalAnalysisBy',
                    Header: 'Original Analyst',
                    accessor: (d) => d.originalAnalysisBy,
                    maxWidth: personWidth
                  },
                  {
                    id: 'checker',
                    Header: 'Checker',
                    accessor: (d) => d.checker,
                    maxWidth: personWidth
                  }
                ]}
                defaultPageSize={25}
                className='-striped -highlight'
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.hideModal()
              }}
              color='primary'
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    )
  }
}

<<<<<<< HEAD
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoggedSamplesModal)
);
=======
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoggedSamplesModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
