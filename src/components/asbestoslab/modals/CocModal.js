<<<<<<< HEAD
import React from "react";
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import {
  ASBESTOS_COC_EDIT,
  ASBESTOS_SAMPLE_EDIT_COC,
} from "../../../constants/modal-types";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "react-select";
import SuggestionField from "../../../widgets/SuggestionField";
import AsbestosSampleListAir from "../components/AsbestosSampleListAir";
import AsbestosSampleListBulk from "../components/AsbestosSampleListBulk";
// import { CSSTransition } from 'react-transition-group';
// import '../../../config/styles.css';

import { DatePicker } from "@material-ui/pickers";

import Add from "@material-ui/icons/Add";
import Sync from "@material-ui/icons/Sync";
import Link from "@material-ui/icons/Link";
import Go from "@material-ui/icons/ArrowForwardIos";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { ASBESTOS_COC_EDIT, ASBESTOS_SAMPLE_EDIT_COC } from '../../../constants/modal-types'

import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Select from 'react-select'
import SuggestionField from '../../../widgets/SuggestionField'
import AsbestosSampleListAir from '../components/AsbestosSampleListAir'
import AsbestosSampleListBulk from '../components/AsbestosSampleListBulk'

import { DatePicker } from '@material-ui/pickers'

import Add from '@material-ui/icons/Add'
import Sync from '@material-ui/icons/Sync'
import Link from '@material-ui/icons/Link'
import Go from '@material-ui/icons/ArrowForwardIos'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  onUploadFile,
  setModalError,
  resetModal,
<<<<<<< HEAD
  showModalSecondary,
} from "../../../actions/modal";
import { fetchStaff, addLog } from "../../../actions/local";
import {
  getDetailedWFMJob,
  resetWfmJob,
  getDefaultLetterAddress,
} from "../../../actions/jobs";
=======
  showModalSecondary
} from '../../../actions/modal'
import { fetchStaff, addLog } from '../../../actions/local'
import { getDetailedWFMJob, resetWfmJob, getDefaultLetterAddress } from '../../../actions/jobs'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  fetchSamples,
  handleCocSubmit,
  handleSampleChange,
  writeDescription,
  getAirSampleData,
  getSampleColors,
<<<<<<< HEAD
  updateResultMap,
} from "../../../actions/asbestosLab";
import {
  titleCase,
  sentenceCase,
  dateOf,
  personnelConvert,
  numericOnly,
} from "../../../actions/helpers";
import _ from "lodash";

const { whyDidYouUpdate } = require("why-did-you-update");
=======
  updateResultMap
} from '../../../actions/asbestosLab'
import { titleCase, sentenceCase, dateOf, personnelConvert, numericOnly } from '../../../actions/helpers'
import _ from 'lodash'

>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
const mapStateToProps = (state) => {
  return {
    materialSuggestions: state.const.asbestosMaterialSuggestions,
    asbestosMaterialCategories: state.const.asbestosMaterialCategories,
    acmInSoilLimits: state.const.acmInSoilLimits,
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    wfmJob: state.jobs.wfmJob,
    me: state.local.me,
    userRefName: state.local.userRefName,
    staff: state.local.staff,
    samples: state.asbestosLab.samples,
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
    hideModal: () => dispatch(hideModal()),
    fetchStaff: () => dispatch(fetchStaff()),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef)),
<<<<<<< HEAD
    handleModalChange: _.debounce(
      (target) => dispatch(handleModalChange(target)),
      50
    ),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
    handleSampleChange: (number, changes) =>
      dispatch(handleSampleChange(number, changes)),
=======
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 50),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef)),
    handleSampleChange: (number, changes) => dispatch(handleSampleChange(number, changes)),
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    setModalError: (error) => dispatch(setModalError(error)),
    showModalSecondary: (modal) => dispatch(showModalSecondary(modal)),
    getDetailedWFMJob: (info) => dispatch(getDetailedWFMJob(info)),
    resetWfmJob: () => dispatch(resetWfmJob()),
<<<<<<< HEAD
    fetchSamples: (cocUid, jobNumber, modal, airSamples) =>
      dispatch(fetchSamples(cocUid, jobNumber, modal, airSamples)),
    resetModal: () => dispatch(resetModal()),
  };
};
=======
    fetchSamples: (cocUid, jobNumber, modal, airSamples) => dispatch(fetchSamples(cocUid, jobNumber, modal, airSamples)),
    resetModal: () => dispatch(resetModal())
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

// function getStyles(name, that) {
//   return {
//     fontWeight:
//       that.state.personnel.indexOf(name) === -1
//         ? 200
//         : 600
//   };
// }

const initState = {
  jobNumber: null,
<<<<<<< HEAD
  sampleType: "bulk",
=======
  sampleType: 'bulk',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  personnel: [],
  personnelSetup: [],
  personnelPickup: [],
  // genericLocationSuggestions: [],
  // specificLocationSuggestions: [],
  // descriptionSuggestions: [],
  // materialSuggestions: [],
  syncError: null,
  modified: false,

  sampleEditModal: null,
  sampleEditModified: false,
  sampleDelete: false,
  sampleDoSwap: false,
<<<<<<< HEAD
  sampleSwap: "",
=======
  sampleSwap: '',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  // airFilterModal: null,
  // airFilterModified: false,
  // airFilterDelete: false,
  // airFilterDoSwap: false,
  // airFilterSwap: '',
  numberOfSamples: 10,

  defaultSampleDate: null,
  defaultSampledBy: [],
  dateSelected: false,
  personnelSelected: false,
  recentSuggestionsGenericLocation: [],
  recentSuggestionsSpecificLocation: [],
  recentSuggestionsDescription: [],
  recentSuggestionsMaterial: [],
  showBulkChangeSamples: false,

<<<<<<< HEAD
  samples: {},
};

class CocModal extends React.PureComponent {
  // static whyDidYouRender = true;
  state = initState;

  UNSAFE_componentWillMount() {
    if (Object.keys(this.props.staff).length < 1) this.props.fetchStaff();
    if (this.props.doc && this.props.doc.sampleType)
      this.setState({
        sampleType: this.props.doc.sampleType,
      });
  }

  wfmSync = () => {
    let jobNumber = this.props.doc.jobNumber;
    let initJobNumber = this.state.jobNumber;
    if (!jobNumber && this.state.jobNumber) jobNumber = this.state.jobNumber;
    if (!jobNumber) {
      this.props.setModalError("Enter the job number to sync with WorkflowMax");
    } else if (
      jobNumber.substring(0, 2).toUpperCase() !== "AS" &&
      this.props.otherOptions &&
      this.props.otherOptions.filter(
        (v) => v.option === "asbestosNumbersMustBeAS"
      )[0].value === "true"
    ) {
      this.props.setModalError('Asbestos job numbers must begin with "AS"');
    } else {
      this.props.setModalError(null);
      this.props.handleSelectChange({ id: "modal", value: { isNew: false } });
      let createUid = this.props.doc.uid === undefined;
=======
  samples: {}
}

class CocModal extends React.PureComponent {
  // static whyDidYouRender = true;
  state = initState

  UNSAFE_componentWillMount() {
    if (Object.keys(this.props.staff).length < 1) this.props.fetchStaff()
    if (this.props.doc && this.props.doc.sampleType)
      this.setState({
        sampleType: this.props.doc.sampleType
      })
  }

  wfmSync = () => {
    let jobNumber = this.props.doc.jobNumber
    let initJobNumber = this.state.jobNumber
    if (!jobNumber && this.state.jobNumber) jobNumber = this.state.jobNumber
    if (!jobNumber) {
      this.props.setModalError('Enter the job number to sync with WorkflowMax')
    } else if (
      jobNumber.substring(0, 2).toUpperCase() !== 'AS' &&
      this.props.otherOptions &&
      this.props.otherOptions.filter((v) => v.option === 'asbestosNumbersMustBeAS')[0].value === 'true'
    ) {
      this.props.setModalError('Asbestos job numbers must begin with "AS"')
    } else {
      this.props.setModalError(null)
      this.props.handleSelectChange({ id: 'modal', value: { isNew: false } })
      let createUid = this.props.doc.uid === undefined
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      this.props.getDetailedWFMJob({
        jobNumber,
        createUid,
        accessToken: this.props.wfmAccessToken,
<<<<<<< HEAD
        refreshToken: this.props.me.refreshToken,
      });
      let uid = this.props.doc.uid;
      // //console.log('wfmsync fetch samples');
      this.props.fetchSamples(
        uid,
        jobNumber,
        true,
        this.state.sampleType === "air"
      );
      this.setState({ modified: true });
    }
  };
=======
        refreshToken: this.props.me.refreshToken
      })
      let uid = this.props.doc.uid
      // //console.log('wfmsync fetch samples');
      this.props.fetchSamples(uid, jobNumber, true, this.state.sampleType === 'air')
      this.setState({ modified: true })
    }
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  loadSamples = () => {
    if (this.props.doc && !this.props.doc.samples)
      this.props.handleModalChange({
<<<<<<< HEAD
        id: "samples",
        value: this.props.samples[this.props.doc.uid] || {},
      });
  };

  handleResultClick = (res, sampleNumber) => {
    const { doc } = this.props;
    let sample =
      doc &&
      doc.samples &&
      doc.samples[sampleNumber + 1] &&
      !doc.samples[sampleNumber + 1].deleted
        ? doc.samples[sampleNumber + 1]
        : {};
    let newMap = updateResultMap(res, sample.result);
    this.props.handleSampleChange(sampleNumber, { result: newMap });
  };

  render() {
    const { modalProps, modalType, doc, wfmJob, classes, me } = this.props;
    console.log(doc);

    if (modalType === ASBESTOS_COC_EDIT) {
      const names = [{ name: "Client", uid: "Client" }].concat(
        Object.values(this.props.staff).sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      );

      let sampleNumbers = [this.state.numberOfSamples];
      if (doc && doc.samples)
        sampleNumbers = sampleNumbers.concat(
          Object.keys(doc.samples).map((key) => parseInt(key))
        );
      let numberOfSamples = Math.max(...sampleNumbers);
      let wfmSynced = doc.jobNumber && !modalProps.isNew;

      let blockInput = !doc.uid && (!wfmSynced || modalProps.error);
      if (blockInput !== false) blockInput = true;
      let noSamples = true;
      if (doc && doc.samples)
        Object.values(doc.samples).forEach((s) => {
          if (
            this.state.sampleType === "bulk" &&
            !s.deleted &&
            (s.description ||
              s.material ||
              s.specificLocation ||
              s.genericLocation)
          )
            noSamples = false;
          else if (
            this.state.sampleType === "air" &&
            !s.deleted &&
            (s.specificLocation ||
              s.initialFlowRate ||
              s.finalFlowRate ||
              s.startTime ||
              s.endTime ||
              s.totalRunTime)
          )
            noSamples = false;
        });
=======
        id: 'samples',
        value: this.props.samples[this.props.doc.uid] || {}
      })
  }

  handleResultClick = (res, sampleNumber) => {
    const { doc } = this.props
    let sample =
      doc && doc.samples && doc.samples[sampleNumber + 1] && !doc.samples[sampleNumber + 1].deleted ? doc.samples[sampleNumber + 1] : {}
    let newMap = updateResultMap(res, sample.result)
    this.props.handleSampleChange(sampleNumber, { result: newMap })
  }

  render() {
    const { modalProps, modalType, doc, wfmJob, classes, me } = this.props
    console.log(doc)

    if (modalType === ASBESTOS_COC_EDIT) {
      const names = [{ name: 'Client', uid: 'Client' }].concat(Object.values(this.props.staff).sort((a, b) => a.name.localeCompare(b.name)))

      let sampleNumbers = [this.state.numberOfSamples]
      if (doc && doc.samples) sampleNumbers = sampleNumbers.concat(Object.keys(doc.samples).map((key) => parseInt(key)))
      let numberOfSamples = Math.max(...sampleNumbers)
      let wfmSynced = doc.jobNumber && !modalProps.isNew

      let blockInput = !doc.uid && (!wfmSynced || modalProps.error)
      if (blockInput !== false) blockInput = true
      let noSamples = true
      if (doc && doc.samples)
        Object.values(doc.samples).forEach((s) => {
          if (this.state.sampleType === 'bulk' && !s.deleted && (s.description || s.material || s.specificLocation || s.genericLocation))
            noSamples = false
          else if (
            this.state.sampleType === 'air' &&
            !s.deleted &&
            (s.specificLocation || s.initialFlowRate || s.finalFlowRate || s.startTime || s.endTime || s.totalRunTime)
          )
            noSamples = false
        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

      return (
        <Dialog
          open={modalType === ASBESTOS_COC_EDIT}
          onClose={() => this.props.hideModal()}
          fullScreen={true}
<<<<<<< HEAD
          maxWidth="lg"
=======
          maxWidth='lg'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          disableEscapeKeyDown={!blockInput && (doc || wfmJob) !== false}
          fullWidth={true}
          onEnter={this.loadSamples}
        >
          {!blockInput && (doc || wfmJob) && (
            <DialogTitle>
              <div>
                <div>Create New Chain of Custody</div>
                <div className={classes.subtitle}>
<<<<<<< HEAD
                  {this.state.sampleType === "air" &&
                    "Membrane Filter Method for Estimating Airborne Asbestos Fibres (NOHSC 3003:2005)"}
                  {this.state.sampleType === "bulk" &&
                    "Qualitative Identification of Asbestos in Bulk Samples (AS 4964-2004)"}
=======
                  {this.state.sampleType === 'air' && 'Membrane Filter Method for Estimating Airborne Asbestos Fibres (NOHSC 3003:2005)'}
                  {this.state.sampleType === 'bulk' && 'Qualitative Identification of Asbestos in Bulk Samples (AS 4964-2004)'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                </div>
              </div>
            </DialogTitle>
          )}
          {!blockInput && (doc || wfmJob) ? (
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} lg={12}>
                      {!modalProps.isNew && wfmJob && (
                        <div>
                          {wfmJob.client ? (
                            <div className={classes.informationBoxRounded}>
                              <Grid container>
                                <Grid item>
                                  <b>{doc.jobNumber}</b>
                                  <br />
                                  <b>{wfmJob.wfmType}</b>
                                  <br />
                                  {wfmJob.client}
                                  <br />
                                  {wfmJob.address}
                                  <br />
                                </Grid>
                                <Grid item>
                                  <div className={classes.flexRow}>
<<<<<<< HEAD
                                    {((doc && doc.wfmID) ||
                                      (wfmJob && wfmJob.wfmID)) && (
                                      <Tooltip title="View Job on WorkflowMax">
                                        <IconButton
                                          onClick={() =>
                                            window.open(
                                              `https://my.workflowmax.com/job/jobview.aspx?id=${
                                                wfmJob
                                                  ? wfmJob.wfmID
                                                  : doc.wfmID
                                              }`
                                            )
                                          }
                                        >
                                          <Link
                                            className={classes.iconRegular}
                                          />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                    <Tooltip title="Re-sync Job with WorkflowMax">
=======
                                    {((doc && doc.wfmID) || (wfmJob && wfmJob.wfmID)) && (
                                      <Tooltip title='View Job on WorkflowMax'>
                                        <IconButton
                                          onClick={() =>
                                            window.open(
                                              `https://my.workflowmax.com/job/jobview.aspx?id=${wfmJob ? wfmJob.wfmID : doc.wfmID}`
                                            )
                                          }
                                        >
                                          <Link className={classes.iconRegular} />
                                        </IconButton>
                                      </Tooltip>
                                    )}
                                    <Tooltip title='Re-sync Job with WorkflowMax'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                      <IconButton onClick={this.wfmSync}>
                                        <Sync className={classes.iconRegular} />
                                      </IconButton>
                                    </Tooltip>
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                          ) : (
                            <div>
<<<<<<< HEAD
                              {doc.type !== "bulk" && (
=======
                              {doc.type !== 'bulk' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                <div className={classes.informationBox}>
                                  <Grid container>
                                    <Grid item>
                                      <b>{doc.jobNumber}</b>
                                      <br />
                                      <b>{doc.wfmType}</b>
                                      <br />
                                      {doc.client}
                                      <br />
                                      {doc.address}
                                      <br />
                                    </Grid>
                                    <Grid item>
                                      <div className={classes.flexRow}>
<<<<<<< HEAD
                                        {((doc && doc.wfmID) ||
                                          (wfmJob && wfmJob.wfmID)) && (
                                          <Tooltip title="View Job on WorkflowMax">
                                            <IconButton
                                              onClick={() =>
                                                window.open(
                                                  `https://my.workflowmax.com/job/jobview.aspx?id=${
                                                    wfmJob
                                                      ? wfmJob.wfmID
                                                      : doc.wfmID
                                                  }`
                                                )
                                              }
                                            >
                                              <Link
                                                className={classes.iconRegular}
                                              />
                                            </IconButton>
                                          </Tooltip>
                                        )}
                                        <Tooltip title="Sync Job with WorkflowMax">
                                          <IconButton onClick={this.wfmSync}>
                                            <Sync
                                              className={classes.iconRegular}
                                            />
=======
                                        {((doc && doc.wfmID) || (wfmJob && wfmJob.wfmID)) && (
                                          <Tooltip title='View Job on WorkflowMax'>
                                            <IconButton
                                              onClick={() =>
                                                window.open(
                                                  `https://my.workflowmax.com/job/jobview.aspx?id=${wfmJob ? wfmJob.wfmID : doc.wfmID}`
                                                )
                                              }
                                            >
                                              <Link className={classes.iconRegular} />
                                            </IconButton>
                                          </Tooltip>
                                        )}
                                        <Tooltip title='Sync Job with WorkflowMax'>
                                          <IconButton onClick={this.wfmSync}>
                                            <Sync className={classes.iconRegular} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                          </IconButton>
                                        </Tooltip>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      {doc.historicalCoc ? (
                        <div className={classes.informationBoxWhiteRounded}>
<<<<<<< HEAD
                          {this.state.sampleType === "air" && (
=======
                          {this.state.sampleType === 'air' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>
                              <InputLabel>Test Description</InputLabel>
                              <SuggestionField
                                that={this}
<<<<<<< HEAD
                                suggestions="airTestDescriptions"
                                defaultValue={doc.airTestDescription || ""}
                                onModify={(value) => {
                                  this.setState({
                                    modified: true,
                                  });
                                  this.props.handleModalChange({
                                    id: "airTestDescription",
                                    value: value,
                                  });
=======
                                suggestions='airTestDescriptions'
                                defaultValue={doc.airTestDescription || ''}
                                onModify={(value) => {
                                  this.setState({
                                    modified: true
                                  })
                                  this.props.handleModalChange({
                                    id: 'airTestDescription',
                                    value: value
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}
<<<<<<< HEAD
                          <InputLabel className={classes.marginTopSmall}>
                            Sampling Company
                          </InputLabel>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-label="inhouseSampling"
                              name="inhouseSampling"
                              value={doc.inhouseSampling || "true"}
                              onChange={(e) =>
                                this.props.handleModalChange({
                                  id: "inhouseSampling",
                                  value: e.target.value,
                                })
                              }
                            >
                              <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="K2 Environmental Ltd"
                              />
                              <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="3rd Party"
                              />
                            </RadioGroup>
                          </FormControl>
                          {doc.inhouseSampling === undefined ||
                          doc.inhouseSampling === "true" ? (
                            <div>
                              <InputLabel className={classes.marginTopSmall}>
                                Sampling By
                              </InputLabel>
=======
                          <InputLabel className={classes.marginTopSmall}>Sampling Company</InputLabel>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-label='inhouseSampling'
                              name='inhouseSampling'
                              value={doc.inhouseSampling || 'true'}
                              onChange={(e) =>
                                this.props.handleModalChange({
                                  id: 'inhouseSampling',
                                  value: e.target.value
                                })
                              }
                            >
                              <FormControlLabel value='true' control={<Radio />} label='K2 Environmental Ltd' />
                              <FormControlLabel value='false' control={<Radio />} label='3rd Party' />
                            </RadioGroup>
                          </FormControl>
                          {doc.inhouseSampling === undefined || doc.inhouseSampling === 'true' ? (
                            <div>
                              <InputLabel className={classes.marginTopSmall}>Sampling By</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              <Select
                                isMulti
                                className={classes.selectTight}
                                value={
                                  doc.sampledBy
                                    ? doc.sampledBy.map((e) => ({
                                        value: e.uid,
<<<<<<< HEAD
                                        label: e.name,
=======
                                        label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                      }))
                                    : null
                                }
                                options={[
                                  ...names.map((e) => ({
                                    value: e.uid,
<<<<<<< HEAD
                                    label: e.name,
                                  })),
                                  { value: "Other", label: "Other" },
                                ]}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "sampledBy",
                                    value: personnelConvert(e),
                                  });
                                }}
                              />
                              {doc.sampledBy &&
                                doc.sampledBy[0].value === "Other" && (
                                  <div>
                                    <TextField
                                      id="otherSampledBy"
                                      label="Sampling Personnel"
                                      style={{ width: "100%" }}
                                      defaultValue={doc && doc.otherSampledBy}
                                      onChange={(e) => {
                                        this.setState({ modified: true });
                                        this.props.handleModalChange({
                                          id: "otherSampledBy",
                                          value: e.target.value,
                                        });
                                      }}
                                    />
                                    {/* Asbestos Assessors Numbers in here? */}
                                  </div>
                                )}
=======
                                    label: e.name
                                  })),
                                  { value: 'Other', label: 'Other' }
                                ]}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'sampledBy',
                                    value: personnelConvert(e)
                                  })
                                }}
                              />
                              {doc.sampledBy && doc.sampledBy[0].value === 'Other' && (
                                <div>
                                  <TextField
                                    id='otherSampledBy'
                                    label='Sampling Personnel'
                                    style={{ width: '100%' }}
                                    defaultValue={doc && doc.otherSampledBy}
                                    onChange={(e) => {
                                      this.setState({ modified: true })
                                      this.props.handleModalChange({
                                        id: 'otherSampledBy',
                                        value: e.target.value
                                      })
                                    }}
                                  />
                                  {/* Asbestos Assessors Numbers in here? */}
                                </div>
                              )}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            </div>
                          ) : (
                            <div>
                              <TextField
<<<<<<< HEAD
                                id="samplingCompany"
                                label="Name of Sampling Company"
                                style={{ width: "100%" }}
                                defaultValue={doc && doc.samplingCompany}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "samplingCompany",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="samplingCompanyRef"
                                label="Sampling Company Job Reference"
                                style={{ width: "100%" }}
                                defaultValue={doc && doc.samplingCompanyRef}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "samplingCompanyRef",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="samplingCompanyPersonnel"
                                label="Name of Sampler"
                                style={{ width: "100%" }}
                                defaultValue={
                                  doc && doc.samplingCompanyPersonnel
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "samplingCompanyPersonnel",
                                    value: e.target.value,
                                  });
=======
                                id='samplingCompany'
                                label='Name of Sampling Company'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.samplingCompany}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'samplingCompany',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='samplingCompanyRef'
                                label='Sampling Company Job Reference'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.samplingCompanyRef}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'samplingCompanyRef',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='samplingCompanyPersonnel'
                                label='Name of Sampler'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.samplingCompanyPersonnel}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'samplingCompanyPersonnel',
                                    value: e.target.value
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}
<<<<<<< HEAD
                          <InputLabel className={classes.marginTopSmall}>
                            Sample Date
                          </InputLabel>
                          <DatePicker
                            value={
                              doc.sampleDate ? dateOf(doc.sampleDate) : null
                            }
                            autoOk
                            format="ddd, D MMMM YYYY"
                            clearable
                            openTo="year"
                            views={["year", "month", "date"]}
                            onChange={(date) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "sampleDate",
                                value: dateOf(date),
                              });
                            }}
                          />
                          <InputLabel className={classes.marginTopSmall}>
                            Testing Laboratory
                          </InputLabel>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-label="inhouseTesting"
                              name="inhouseTesting"
                              value={doc.inhouseTesting || "true"}
                              onChange={(e) =>
                                this.props.handleModalChange({
                                  id: "inhouseTesting",
                                  value: e.target.value,
                                })
                              }
                            >
                              <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="K2 Environmental Ltd"
                              />
                              <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="3rd Party"
                              />
                            </RadioGroup>
                          </FormControl>
                          {doc.inhouseTesting === undefined ||
                          doc.inhouseTesting === "true" ? (
                            <div>
                              <InputLabel className={classes.marginTopSmall}>
                                Analysis By
                              </InputLabel>
=======
                          <InputLabel className={classes.marginTopSmall}>Sample Date</InputLabel>
                          <DatePicker
                            value={doc.sampleDate ? dateOf(doc.sampleDate) : null}
                            autoOk
                            format='ddd, D MMMM YYYY'
                            clearable
                            openTo='year'
                            views={['year', 'month', 'date']}
                            onChange={(date) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'sampleDate',
                                value: dateOf(date)
                              })
                            }}
                          />
                          <InputLabel className={classes.marginTopSmall}>Testing Laboratory</InputLabel>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-label='inhouseTesting'
                              name='inhouseTesting'
                              value={doc.inhouseTesting || 'true'}
                              onChange={(e) =>
                                this.props.handleModalChange({
                                  id: 'inhouseTesting',
                                  value: e.target.value
                                })
                              }
                            >
                              <FormControlLabel value='true' control={<Radio />} label='K2 Environmental Ltd' />
                              <FormControlLabel value='false' control={<Radio />} label='3rd Party' />
                            </RadioGroup>
                          </FormControl>
                          {doc.inhouseTesting === undefined || doc.inhouseTesting === 'true' ? (
                            <div>
                              <InputLabel className={classes.marginTopSmall}>Analysis By</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              <Select
                                isMulti
                                className={classes.selectTight}
                                value={
                                  doc.analysisBy
                                    ? doc.analysisBy.map((e) => ({
                                        value: e.uid,
<<<<<<< HEAD
                                        label: e.name,
=======
                                        label: e.name
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                      }))
                                    : null
                                }
                                options={[
                                  ...names.map((e) => ({
                                    value: e.uid,
<<<<<<< HEAD
                                    label: e.name,
                                  })),
                                  { value: "other", label: "Other" },
                                ]}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "analysisBy",
                                    value: personnelConvert(e),
                                  });
=======
                                    label: e.name
                                  })),
                                  { value: 'other', label: 'Other' }
                                ]}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'analysisBy',
                                    value: personnelConvert(e)
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          ) : (
                            <div>
                              <TextField
<<<<<<< HEAD
                                id="testingLaboratory"
                                label="Testing Laboratory"
                                style={{ width: "100%" }}
                                defaultValue={doc && doc.testingLaboratory}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "testingLaboratory",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="testingLaboratoryRef"
                                label="Testing Laboratory Job Reference"
                                style={{ width: "100%" }}
                                defaultValue={doc && doc.testingLaboratoryRef}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "testingLaboratoryRef",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="testingLaboratoryAnalysts"
                                label="Name of Analyst(s)"
                                style={{ width: "100%" }}
                                defaultValue={
                                  doc && doc.testingLaboratoryAnalysts
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "testingLaboratoryAnalysts",
                                    value: e.target.value,
                                  });
=======
                                id='testingLaboratory'
                                label='Testing Laboratory'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.testingLaboratory}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'testingLaboratory',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='testingLaboratoryRef'
                                label='Testing Laboratory Job Reference'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.testingLaboratoryRef}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'testingLaboratoryRef',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='testingLaboratoryAnalysts'
                                label='Name of Analyst(s)'
                                style={{ width: '100%' }}
                                defaultValue={doc && doc.testingLaboratoryAnalysts}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'testingLaboratoryAnalysts',
                                    value: e.target.value
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}

<<<<<<< HEAD
                          <InputLabel className={classes.marginTopSmall}>
                            Received Date
                          </InputLabel>
                          <DatePicker
                            value={
                              doc.receivedDate ? dateOf(doc.receivedDate) : null
                            }
                            autoOk
                            format="ddd, D MMMM YYYY"
                            clearable
                            openTo="year"
                            views={["year", "month", "date"]}
                            onChange={(date) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "receivedDate",
                                value: dateOf(date),
                              });
                            }}
                          />

                          <InputLabel className={classes.marginTopSmall}>
                            Analysis Date
                          </InputLabel>
                          <DatePicker
                            value={
                              doc.analysisDate ? dateOf(doc.analysisDate) : null
                            }
                            autoOk
                            format="ddd, D MMMM YYYY"
                            clearable
                            openTo="year"
                            views={["year", "month", "date"]}
                            onChange={(date) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "analysisDate",
                                value: dateOf(date),
                              });
                            }}
                          />

                          <InputLabel className={classes.marginTopSmall}>
                            Certificate Issue Date
                          </InputLabel>
                          <DatePicker
                            value={doc.issueDate ? dateOf(doc.issueDate) : null}
                            autoOk
                            format="ddd, D MMMM YYYY"
                            clearable
                            openTo="year"
                            views={["year", "month", "date"]}
                            onChange={(date) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "issueDate",
                                value: dateOf(date),
                              });
                            }}
                          />
                          <TextField
                            id="historicalCocNotes"
                            label="Notes"
                            style={{ width: "100%" }}
                            defaultValue={doc && doc.historicalCocNotes}
                            rows={5}
                            helperText="Include any useful background information on this sampling."
                            multiline
                            onChange={(e) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "historicalCocNotes",
                                value: e.target.value,
                              });
=======
                          <InputLabel className={classes.marginTopSmall}>Received Date</InputLabel>
                          <DatePicker
                            value={doc.receivedDate ? dateOf(doc.receivedDate) : null}
                            autoOk
                            format='ddd, D MMMM YYYY'
                            clearable
                            openTo='year'
                            views={['year', 'month', 'date']}
                            onChange={(date) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'receivedDate',
                                value: dateOf(date)
                              })
                            }}
                          />

                          <InputLabel className={classes.marginTopSmall}>Analysis Date</InputLabel>
                          <DatePicker
                            value={doc.analysisDate ? dateOf(doc.analysisDate) : null}
                            autoOk
                            format='ddd, D MMMM YYYY'
                            clearable
                            openTo='year'
                            views={['year', 'month', 'date']}
                            onChange={(date) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'analysisDate',
                                value: dateOf(date)
                              })
                            }}
                          />

                          <InputLabel className={classes.marginTopSmall}>Certificate Issue Date</InputLabel>
                          <DatePicker
                            value={doc.issueDate ? dateOf(doc.issueDate) : null}
                            autoOk
                            format='ddd, D MMMM YYYY'
                            clearable
                            openTo='year'
                            views={['year', 'month', 'date']}
                            onChange={(date) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'issueDate',
                                value: dateOf(date)
                              })
                            }}
                          />
                          <TextField
                            id='historicalCocNotes'
                            label='Notes'
                            style={{ width: '100%' }}
                            defaultValue={doc && doc.historicalCocNotes}
                            rows={5}
                            helperText='Include any useful background information on this sampling.'
                            multiline
                            onChange={(e) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'historicalCocNotes',
                                value: e.target.value
                              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            }}
                          />
                        </div>
                      ) : (
                        <div className={classes.informationBoxWhiteRounded}>
<<<<<<< HEAD
                          {this.state.sampleType === "air" && (
=======
                          {this.state.sampleType === 'air' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>
                              <InputLabel>Test Description</InputLabel>
                              <SuggestionField
                                that={this}
<<<<<<< HEAD
                                suggestions="airTestDescriptions"
                                defaultValue={
                                  doc.airTestDescription
                                    ? doc.airTestDescription
                                    : ""
                                }
                                onModify={(value) => {
                                  this.setState({
                                    modified: true,
                                  });
                                  this.props.handleModalChange({
                                    id: "airTestDescription",
                                    value: value,
                                  });
                                }}
                              />
                              <InputLabel className={classes.marginTopSmall}>
                                Sampling By
                              </InputLabel>
=======
                                suggestions='airTestDescriptions'
                                defaultValue={doc.airTestDescription ? doc.airTestDescription : ''}
                                onModify={(value) => {
                                  this.setState({
                                    modified: true
                                  })
                                  this.props.handleModalChange({
                                    id: 'airTestDescription',
                                    value: value
                                  })
                                }}
                              />
                              <InputLabel className={classes.marginTopSmall}>Sampling By</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              <Select
                                isMulti
                                className={classes.selectTight}
                                value={
                                  doc.sampledBy
                                    ? doc.sampledBy.map((e) => ({
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
                                }))}
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "sampledBy",
                                    value: personnelConvert(e),
                                  });
=======
                                  label: e.name
                                }))}
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'sampledBy',
                                    value: personnelConvert(e)
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}
                          <TextField
<<<<<<< HEAD
                            id="labInstructions"
                            label="Lab Instructions"
                            style={{ width: "100%" }}
                            defaultValue={doc && doc.labInstructions}
                            rows={5}
                            helperText="Include any information that may be useful for the lab. E.g. for a soil sample you might include information on what contamination you are expecting."
                            multiline
                            onChange={(e) => {
                              this.setState({ modified: true });
                              this.props.handleModalChange({
                                id: "labInstructions",
                                value: e.target.value,
                              });
=======
                            id='labInstructions'
                            label='Lab Instructions'
                            style={{ width: '100%' }}
                            defaultValue={doc && doc.labInstructions}
                            rows={5}
                            helperText='Include any information that may be useful for the lab. E.g. for a soil sample you might include information on what contamination you are expecting.'
                            multiline
                            onChange={(e) => {
                              this.setState({ modified: true })
                              this.props.handleModalChange({
                                id: 'labInstructions',
                                value: e.target.value
                              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            }}
                          />
                          <FormControlLabel
                            control={
                              <Switch
                                checked={doc.priority === 1 ? true : false}
                                onClick={(e) => {
<<<<<<< HEAD
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "priority",
                                    value: doc.priority === 1 ? 0 : 1,
                                  });
                                }}
                                value="priority"
                                color="secondary"
                              />
                            }
                            label="Urgent"
=======
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'priority',
                                    value: doc.priority === 1 ? 0 : 1
                                  })
                                }}
                                value='priority'
                                color='secondary'
                              />
                            }
                            label='Urgent'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          />
                          <FormControlLabel
                            control={
                              <Switch
<<<<<<< HEAD
                                checked={
                                  doc.isClearance === true ? true : false
                                }
                                onClick={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "isClearance",
                                    value: e.target.checked,
                                  });
                                }}
                                value="isClearance"
                                color="secondary"
                              />
                            }
                            label="Clearance"
=======
                                checked={doc.isClearance === true ? true : false}
                                onClick={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'isClearance',
                                    value: e.target.checked
                                  })
                                }}
                                value='isClearance'
                                color='secondary'
                              />
                            }
                            label='Clearance'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          />
                        </div>
                      )}
                    </Grid>
                    {!doc.historicalCoc && (
                      <Grid item xs={8} lg={12}>
<<<<<<< HEAD
                        {this.state.sampleType === "bulk" && (
=======
                        {this.state.sampleType === 'bulk' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          <div className={classes.informationBoxWhiteRounded}>
                            <FormControlLabel
                              control={
                                <Switch
<<<<<<< HEAD
                                  checked={
                                    doc.waAnalysis === true ? true : false
                                  }
                                  onClick={(e) => {
                                    this.setState({ modified: true });
                                    this.props.handleModalChange({
                                      id: "waAnalysis",
                                      value: e.target.checked,
                                    });
                                  }}
                                  value="priority"
                                  color="primary"
                                />
                              }
                              label="Western Australian Standard Analysis"
=======
                                  checked={doc.waAnalysis === true ? true : false}
                                  onClick={(e) => {
                                    this.setState({ modified: true })
                                    this.props.handleModalChange({
                                      id: 'waAnalysis',
                                      value: e.target.checked
                                    })
                                  }}
                                  value='priority'
                                  color='primary'
                                />
                              }
                              label='Western Australian Standard Analysis'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            />
                            {doc.waAnalysis && (
                              <div>
                                <Select
                                  value={
                                    doc.acmInSoilLimit
                                      ? {
                                          value: doc.acmInSoilLimit,
<<<<<<< HEAD
                                          label: this.props.acmInSoilLimits.filter(
                                            (e) =>
                                              e.value === doc.acmInSoilLimit
                                          )[0].label,
                                        }
                                      : {
                                          value: "0.01",
                                          label: this.props.acmInSoilLimits.filter(
                                            (e) => e.value === "0.01"
                                          )[0].label,
                                        }
                                  }
                                  options={this.props.acmInSoilLimits.map(
                                    (e) => ({ value: e.value, label: e.label })
                                  )}
                                  onChange={(e) => {
                                    this.setState({ modified: true });
                                    this.props.handleModalChange({
                                      id: "acmInSoilLimit",
                                      value: e.value,
                                    });
=======
                                          label: this.props.acmInSoilLimits.filter((e) => e.value === doc.acmInSoilLimit)[0].label
                                        }
                                      : {
                                          value: '0.01',
                                          label: this.props.acmInSoilLimits.filter((e) => e.value === '0.01')[0].label
                                        }
                                  }
                                  options={this.props.acmInSoilLimits.map((e) => ({ value: e.value, label: e.label }))}
                                  onChange={(e) => {
                                    this.setState({ modified: true })
                                    this.props.handleModalChange({
                                      id: 'acmInSoilLimit',
                                      value: e.value
                                    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                  }}
                                />
                                <div className={classes.informationBoxRounded}>
                                  <div className={classes.bold}>
                                    {doc.acmInSoilLimit
<<<<<<< HEAD
                                      ? this.props.acmInSoilLimits.filter(
                                          (e) => e.value === doc.acmInSoilLimit
                                        )[0].heading
                                      : this.props.acmInSoilLimits.filter(
                                          (e) => e.value === "0.01"
                                        )[0].heading}
                                  </div>
                                  <div>
                                    {doc.acmInSoilLimit
                                      ? this.props.acmInSoilLimits.filter(
                                          (e) => e.value === doc.acmInSoilLimit
                                        )[0].description
                                      : this.props.acmInSoilLimits.filter(
                                          (e) => e.value === "0.01"
                                        )[0].description}
=======
                                      ? this.props.acmInSoilLimits.filter((e) => e.value === doc.acmInSoilLimit)[0].heading
                                      : this.props.acmInSoilLimits.filter((e) => e.value === '0.01')[0].heading}
                                  </div>
                                  <div>
                                    {doc.acmInSoilLimit
                                      ? this.props.acmInSoilLimits.filter((e) => e.value === doc.acmInSoilLimit)[0].description
                                      : this.props.acmInSoilLimits.filter((e) => e.value === '0.01')[0].description}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        <div className={classes.informationBoxWhiteRounded}>
                          <FormControlLabel
                            control={
                              <Switch
<<<<<<< HEAD
                                checked={
                                  doc.labToContactClient === true ? true : false
                                }
                                onClick={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "labToContactClient",
                                    value: e.target.checked,
                                  });
                                }}
                                value="labToContactClient"
                                color="primary"
                              />
                            }
                            label="Lab to Contact Client"
=======
                                checked={doc.labToContactClient === true ? true : false}
                                onClick={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'labToContactClient',
                                    value: e.target.checked
                                  })
                                }}
                                value='labToContactClient'
                                color='primary'
                              />
                            }
                            label='Lab to Contact Client'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          />
                          {doc.labToContactClient && (
                            <div>
                              <TextField
<<<<<<< HEAD
                                id="labContactName"
                                label="Contact Name"
                                value={
                                  doc && doc.labContactName
                                    ? doc.labContactName
                                    : doc.contact && doc.contact.name
                                    ? doc.contact.name
                                    : ""
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "labContactName",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="labContactNumber"
                                label="Contact Number"
=======
                                id='labContactName'
                                label='Contact Name'
                                value={
                                  doc && doc.labContactName ? doc.labContactName : doc.contact && doc.contact.name ? doc.contact.name : ''
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'labContactName',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='labContactNumber'
                                label='Contact Number'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                value={
                                  doc && doc.labContactNumber
                                    ? doc.labContactNumber
                                    : doc.contact && doc.contact.mobile
<<<<<<< HEAD
                                    ? doc.contact.mobile
                                    : doc.contact && doc.contact.phone
                                    ? doc.contact.phone
                                    : ""
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "labContactNumber",
                                    value: e.target.value,
                                  });
                                }}
                              />
                              <TextField
                                id="labContactEmail"
                                label="Contact Email"
=======
                                      ? doc.contact.mobile
                                      : doc.contact && doc.contact.phone
                                        ? doc.contact.phone
                                        : ''
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'labContactNumber',
                                    value: e.target.value
                                  })
                                }}
                              />
                              <TextField
                                id='labContactEmail'
                                label='Contact Email'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                value={
                                  doc && doc.labContactEmail
                                    ? doc.labContactEmail
                                    : doc.contact && doc.contact.email
<<<<<<< HEAD
                                    ? doc.contact.email
                                    : ""
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "labContactEmail",
                                    value: e.target.value,
                                  });
=======
                                      ? doc.contact.email
                                      : ''
                                }
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'labContactEmail',
                                    value: e.target.value
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}
                        </div>
                        <div className={classes.informationBoxWhiteRounded}>
                          <FormControlLabel
                            control={
                              <Switch
<<<<<<< HEAD
                                checked={
                                  doc.sendCoverLetterWithCertificate === true
                                    ? true
                                    : false
                                }
                                onClick={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "sendCoverLetterWithCertificate",
                                    value: e.target.checked,
                                  });
                                }}
                                value="sendCoverLetterWithCertificate"
                                color="primary"
                              />
                            }
                            label="Send Cover Letter with Certificate"
=======
                                checked={doc.sendCoverLetterWithCertificate === true ? true : false}
                                onClick={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'sendCoverLetterWithCertificate',
                                    value: e.target.checked
                                  })
                                }}
                                value='sendCoverLetterWithCertificate'
                                color='primary'
                              />
                            }
                            label='Send Cover Letter with Certificate'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          />
                          {doc.sendCoverLetterWithCertificate && (
                            <div>
                              <TextField
<<<<<<< HEAD
                                id="letterAddress"
                                label="Cover Letter Address"
                                style={{ width: "100%" }}
                                defaultValue={getDefaultLetterAddress(doc)}
                                rowsMax={10}
                                helperText="The address to be put on the front page of the certificate cover letter."
                                multiline
                                onChange={(e) => {
                                  this.setState({ modified: true });
                                  this.props.handleModalChange({
                                    id: "coverLetterAddress",
                                    value: e.target.value,
                                  });
=======
                                id='letterAddress'
                                label='Cover Letter Address'
                                style={{ width: '100%' }}
                                defaultValue={getDefaultLetterAddress(doc)}
                                rowsMax={10}
                                helperText='The address to be put on the front page of the certificate cover letter.'
                                multiline
                                onChange={(e) => {
                                  this.setState({ modified: true })
                                  this.props.handleModalChange({
                                    id: 'coverLetterAddress',
                                    value: e.target.value
                                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                }}
                              />
                            </div>
                          )}
                        </div>
                        {false && doc.uid && (
                          <div className={classes.informationBoxWhiteRounded}>
                            <FormControlLabel
                              control={
                                <Switch
<<<<<<< HEAD
                                  checked={
                                    this.state.showBulkChangeSamples === true
                                      ? true
                                      : false
                                  }
                                  onClick={(e) => {
                                    this.setState({
                                      showBulkChangeSamples: true,
                                    });
                                  }}
                                  value="showBulkChangeSamples"
                                  color="primary"
                                />
                              }
                              label="Bulk Change Sample Details"
=======
                                  checked={this.state.showBulkChangeSamples === true ? true : false}
                                  onClick={(e) => {
                                    this.setState({
                                      showBulkChangeSamples: true
                                    })
                                  }}
                                  value='showBulkChangeSamples'
                                  color='primary'
                                />
                              }
                              label='Bulk Change Sample Details'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            />
                            {this.state.showBulkChangeSamples && (
                              <div>
                                <TextField
<<<<<<< HEAD
                                  id="letterAddress"
                                  label="Cover Letter Address"
                                  style={{ width: "100%" }}
                                  defaultValue={getDefaultLetterAddress(doc)}
                                  rows={5}
                                  helperText="The address to be put on the front page of the certificate cover letter."
                                  multiline
                                  onChange={(e) => {
                                    this.setState({ modified: true });
                                    this.props.handleModalChange({
                                      id: "coverLetterAddress",
                                      value: e.target.value,
                                    });
=======
                                  id='letterAddress'
                                  label='Cover Letter Address'
                                  style={{ width: '100%' }}
                                  defaultValue={getDefaultLetterAddress(doc)}
                                  rows={5}
                                  helperText='The address to be put on the front page of the certificate cover letter.'
                                  multiline
                                  onChange={(e) => {
                                    this.setState({ modified: true })
                                    this.props.handleModalChange({
                                      id: 'coverLetterAddress',
                                      value: e.target.value
                                    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={10}>
<<<<<<< HEAD
                  {this.state.sampleType === "bulk" ? (
                    <AsbestosSampleListBulk
                      listType="heading"
                      classes={classes}
                      doc={doc}
                    />
                  ) : (
                    <AsbestosSampleListAir
                      listType="heading"
                      classes={classes}
                      doc={doc}
                    />
                  )}
                  {this.state.sampleType === "bulk"
                    ? Array.from(Array(numberOfSamples), (x, i) => i).map(
                        (i) => {
                          let sample =
                            doc &&
                            doc.samples &&
                            doc.samples[i + 1] &&
                            !doc.samples[i + 1].deleted
                              ? doc.samples[i + 1]
                              : {};
                          let disabled =
                            blockInput ||
                            (sample.cocUid && sample.cocUid !== doc.uid);
                          if (!disabled) disabled = false;
                          return sample.uid && sample.deleted === false ? (
                            sample.sampleType === "air" ? (
                              <AsbestosSampleListAir
                                key={i}
                                i={i}
                                disabled={disabled}
                                names={names}
                                classes={classes}
                                sampleType="bulk"
                                doc={doc}
                                onEdit={() =>
                                  this.props.showModalSecondary({
                                    modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                    modalProps: {
                                      doc,
                                      sample,
                                      names,
                                      onExit: (modified) =>
                                        this.setState({
                                          modified: modified,
                                        }),
                                    },
                                  })
                                }
                              />
                            ) : (
                              <AsbestosSampleListBulk
                                key={i}
                                i={i}
                                disabled={disabled}
                                names={names}
                                classes={classes}
                                sampleType="bulk"
                                doc={doc}
                                onEdit={() =>
                                  this.props.showModalSecondary({
                                    modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                    modalProps: {
                                      doc,
                                      sample,
                                      names,
                                      onExit: (modified) =>
                                        this.setState({
                                          modified: modified,
                                        }),
                                    },
                                  })
                                }
                              />
                            )
=======
                  {this.state.sampleType === 'bulk' ? (
                    <AsbestosSampleListBulk listType='heading' classes={classes} doc={doc} />
                  ) : (
                    <AsbestosSampleListAir listType='heading' classes={classes} doc={doc} />
                  )}
                  {this.state.sampleType === 'bulk'
                    ? Array.from(Array(numberOfSamples), (x, i) => i).map((i) => {
                        let sample = doc && doc.samples && doc.samples[i + 1] && !doc.samples[i + 1].deleted ? doc.samples[i + 1] : {}
                        let disabled = blockInput || (sample.cocUid && sample.cocUid !== doc.uid)
                        if (!disabled) disabled = false
                        return sample.uid && sample.deleted === false ? (
                          sample.sampleType === 'air' ? (
                            <AsbestosSampleListAir
                              key={i}
                              i={i}
                              disabled={disabled}
                              names={names}
                              classes={classes}
                              sampleType='bulk'
                              doc={doc}
                              onEdit={() =>
                                this.props.showModalSecondary({
                                  modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                  modalProps: {
                                    doc,
                                    sample,
                                    names,
                                    onExit: (modified) =>
                                      this.setState({
                                        modified: modified
                                      })
                                  }
                                })
                              }
                            />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          ) : (
                            <AsbestosSampleListBulk
                              key={i}
                              i={i}
                              disabled={disabled}
                              names={names}
                              classes={classes}
<<<<<<< HEAD
                              doc={doc}
                              listType="editable"
                              that={this}
                            />
                          );
                        }
                      )
                    : Array.from(Array(numberOfSamples), (x, i) => i).map(
                        (i) => {
                          let sample =
                            doc &&
                            doc.samples &&
                            doc.samples[i + 1] &&
                            !doc.samples[i + 1].deleted
                              ? doc.samples[i + 1]
                              : {};
                          let disabled =
                            blockInput ||
                            (sample.cocUid && sample.cocUid !== doc.uid);
                          if (!disabled) disabled = false;
                          return sample.uid && sample.deleted === false ? (
                            sample.sampleType === "air" ? (
                              <AsbestosSampleListAir
                                i={i}
                                disabled={disabled}
                                names={names}
                                classes={classes}
                                sampleType="air"
                                doc={doc}
                                onEdit={() =>
                                  this.props.showModalSecondary({
                                    modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                    modalProps: {
                                      doc,
                                      sample,
                                      names,
                                      onExit: (modified) =>
                                        this.setState({
                                          modified: modified,
                                        }),
                                    },
                                  })
                                }
                              />
                            ) : (
                              <AsbestosSampleListBulk
                                i={i}
                                disabled={disabled}
                                names={names}
                                classes={classes}
                                sampleType="air"
                                doc={doc}
                                onEdit={() =>
                                  this.props.showModalSecondary({
                                    modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                    modalProps: {
                                      doc,
                                      sample,
                                      names,
                                      onExit: (modified) =>
                                        this.setState({
                                          modified: modified,
                                        }),
                                    },
                                  })
                                }
                              />
                            )
                          ) : (
                            <AsbestosSampleListAir
                              key={i}
=======
                              sampleType='bulk'
                              doc={doc}
                              onEdit={() =>
                                this.props.showModalSecondary({
                                  modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                  modalProps: {
                                    doc,
                                    sample,
                                    names,
                                    onExit: (modified) =>
                                      this.setState({
                                        modified: modified
                                      })
                                  }
                                })
                              }
                            />
                          )
                        ) : (
                          <AsbestosSampleListBulk
                            key={i}
                            i={i}
                            disabled={disabled}
                            names={names}
                            classes={classes}
                            doc={doc}
                            listType='editable'
                            that={this}
                          />
                        )
                      })
                    : Array.from(Array(numberOfSamples), (x, i) => i).map((i) => {
                        let sample = doc && doc.samples && doc.samples[i + 1] && !doc.samples[i + 1].deleted ? doc.samples[i + 1] : {}
                        let disabled = blockInput || (sample.cocUid && sample.cocUid !== doc.uid)
                        if (!disabled) disabled = false
                        return sample.uid && sample.deleted === false ? (
                          sample.sampleType === 'air' ? (
                            <AsbestosSampleListAir
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              i={i}
                              disabled={disabled}
                              names={names}
                              classes={classes}
<<<<<<< HEAD
                              doc={doc}
                              listType="editable"
                              that={this}
                            />
                          );
                        }
                      )}
                  <Button
                    className={classes.buttonViewMore}
                    onClick={() => {
                      this.setState({ numberOfSamples: numberOfSamples + 10 });
                    }}
                  >
                    <Add className={classes.marginRightSmall} /> Add More
                    Samples
=======
                              sampleType='air'
                              doc={doc}
                              onEdit={() =>
                                this.props.showModalSecondary({
                                  modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                  modalProps: {
                                    doc,
                                    sample,
                                    names,
                                    onExit: (modified) =>
                                      this.setState({
                                        modified: modified
                                      })
                                  }
                                })
                              }
                            />
                          ) : (
                            <AsbestosSampleListBulk
                              i={i}
                              disabled={disabled}
                              names={names}
                              classes={classes}
                              sampleType='air'
                              doc={doc}
                              onEdit={() =>
                                this.props.showModalSecondary({
                                  modalType: ASBESTOS_SAMPLE_EDIT_COC,
                                  modalProps: {
                                    doc,
                                    sample,
                                    names,
                                    onExit: (modified) =>
                                      this.setState({
                                        modified: modified
                                      })
                                  }
                                })
                              }
                            />
                          )
                        ) : (
                          <AsbestosSampleListAir
                            key={i}
                            i={i}
                            disabled={disabled}
                            names={names}
                            classes={classes}
                            doc={doc}
                            listType='editable'
                            that={this}
                          />
                        )
                      })}
                  <Button
                    className={classes.buttonViewMore}
                    onClick={() => {
                      this.setState({ numberOfSamples: numberOfSamples + 10 })
                    }}
                  >
                    <Add className={classes.marginRightSmall} /> Add More Samples
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          ) : (
            <DialogContent className={classes.boxDark}>
              <div className={classes.informationBoxWhiteRounded}>
                <div style={{ fontSize: 24 }}>Create New Chain of Custody</div>
<<<<<<< HEAD
                {this.props.me.name === "Ben Dodd" && (
                  <div>
                    <Tooltip title="Step 1: Select your sample type">
                      <FormControl>
                        <RadioGroup
                          row
                          aria-label="sampleType"
                          name="sampleType"
                          value={this.state.sampleType}
                          onChange={(e) =>
                            this.setState({ sampleType: e.target.value })
                          }
                        >
                          <FormControlLabel
                            value="bulk"
                            control={<Radio />}
                            label="Bulk"
                          />
                          <FormControlLabel
                            value="air"
                            control={<Radio />}
                            label="Air Filter"
                          />
=======
                {this.props.me.name === 'Ben Dodd' && (
                  <div>
                    <Tooltip title='Step 1: Select your sample type'>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-label='sampleType'
                          name='sampleType'
                          value={this.state.sampleType}
                          onChange={(e) => this.setState({ sampleType: e.target.value })}
                        >
                          <FormControlLabel value='bulk' control={<Radio />} label='Bulk' />
                          <FormControlLabel value='air' control={<Radio />} label='Air Filter' />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        </RadioGroup>
                      </FormControl>
                    </Tooltip>
                  </div>
                )}
<<<<<<< HEAD
                <Tooltip title="Enter the job number to get details from WorkflowMax">
                  <FormControl>
                    <InputLabel shrink>Job Number</InputLabel>
                    <Input
                      id="jobNumber"
                      className={classes.bigInput}
                      value={this.state.jobNumber || ""}
                      onChange={(e) => {
                        // this.setState({ modified: true, });
                        this.setState({
                          jobNumber: e.target.value
                            .replace(/\s/g, "")
                            .toUpperCase(),
                        });
=======
                <Tooltip title='Enter the job number to get details from WorkflowMax'>
                  <FormControl>
                    <InputLabel shrink>Job Number</InputLabel>
                    <Input
                      id='jobNumber'
                      className={classes.bigInput}
                      value={this.state.jobNumber || ''}
                      onChange={(e) => {
                        // this.setState({ modified: true, });
                        this.setState({
                          jobNumber: e.target.value.replace(/\s/g, '').toUpperCase()
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      // startAdornment={<InputAdornment position="start">AS</InputAdornment>}
                    />
                  </FormControl>
                </Tooltip>
<<<<<<< HEAD
                <Tooltip title="Step 3: Click the button to begin adding samples">
=======
                <Tooltip title='Step 3: Click the button to begin adding samples'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  <IconButton onClick={this.wfmSync}>
                    <Go style={{ fontSize: 48 }} />
                  </IconButton>
                </Tooltip>
<<<<<<< HEAD
                {modalProps.error && (
                  <div className={classes.informationBox}>
                    {modalProps.error}
                  </div>
                )}
=======
                {modalProps.error && <div className={classes.informationBox}>{modalProps.error}</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              </div>
            </DialogContent>
          )}
          {(wfmSynced || modalProps.error) && (doc || wfmJob) ? (
            <DialogActions>
              <Button
                onClick={() => {
<<<<<<< HEAD
                  this.props.resetWfmJob();
                  this.props.resetModal();
                }}
                color="secondary"
=======
                  this.props.resetWfmJob()
                  this.props.resetModal()
                }}
                color='secondary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                Cancel
              </Button>
              <Button
                disabled={!this.state.modified || !wfmSynced || noSamples}
                onClick={() => {
                  if (wfmJob.client) {
<<<<<<< HEAD
                    doc.jobNumber = doc.jobNumber
                      ? doc.jobNumber.toUpperCase().trim()
                      : null;
                    doc.client = wfmJob.client ? wfmJob.client.trim() : null;
                    doc.address = wfmJob.address ? wfmJob.address.trim() : null;
                    doc.clientOrderNumber = wfmJob.clientOrderNumber.trim()
                      ? wfmJob.clientOrderNumber
                      : null;
                    doc.contact = wfmJob.contact ? wfmJob.contact : null;
                    doc.dueDate = wfmJob.dueDate ? wfmJob.dueDate : null;
                    doc.manager = wfmJob.manager ? wfmJob.manager.trim() : null;
                    doc.managerID = wfmJob.managerID
                      ? wfmJob.managerID.trim()
                      : null;
                    doc.wfmType = wfmJob.wfmType ? wfmJob.wfmType : null;
                    doc.wfmID = wfmJob.wfmID ? wfmJob.wfmID : null;
                    doc.wfmState = wfmJob.wfmState ? wfmJob.wfmState : null;
                  }
                  let now = new Date();
                  let originalSamples = {};
                  if (!doc.createdDate) {
                    let log = {
                      type: "Create",
                      log: `Chain of Custody created.`,
                      chainOfCustody: doc.uid,
                    };
                    addLog("asbestosLab", log, me);
                    doc.deleted = false;
                    doc.createdDate = now;
                    doc.createdBy = { id: me.uid, name: me.name };
                    if (Object.keys(doc.samples).length === 0)
                      doc.status = "No Samples";
                    else if (doc.historicalCoc) doc.status = "Historical";
                    else doc.status = "In Transit";
                  } else originalSamples = this.props.samples[doc.uid];
                  if (doc.historicalCoc) {
                    doc.versionUpToDate = true;
                    doc.mostRecentIssueSent = true;
                  } else {
                    doc.versionUpToDate = false;
                    doc.mostRecentIssueSent = false;
                  }
                  doc.lastModified = now;
                  if (this.state.sampleType !== "air") {
                    doc.defaultSampleDate = this.state.defaultSampleDate;
                    doc.defaultSampledBy = this.state.defaultSampledBy;
=======
                    doc.jobNumber = doc.jobNumber ? doc.jobNumber.toUpperCase().trim() : null
                    doc.client = wfmJob.client ? wfmJob.client.trim() : null
                    doc.address = wfmJob.address ? wfmJob.address.trim() : null
                    doc.clientOrderNumber = wfmJob.clientOrderNumber.trim() ? wfmJob.clientOrderNumber : null
                    doc.contact = wfmJob.contact ? wfmJob.contact : null
                    doc.dueDate = wfmJob.dueDate ? wfmJob.dueDate : null
                    doc.manager = wfmJob.manager ? wfmJob.manager.trim() : null
                    doc.managerID = wfmJob.managerID ? wfmJob.managerID.trim() : null
                    doc.wfmType = wfmJob.wfmType ? wfmJob.wfmType : null
                    doc.wfmID = wfmJob.wfmID ? wfmJob.wfmID : null
                    doc.wfmState = wfmJob.wfmState ? wfmJob.wfmState : null
                  }
                  let now = new Date()
                  let originalSamples = {}
                  if (!doc.createdDate) {
                    let log = {
                      type: 'Create',
                      log: `Chain of Custody created.`,
                      chainOfCustody: doc.uid
                    }
                    addLog('asbestosLab', log, me)
                    doc.deleted = false
                    doc.createdDate = now
                    doc.createdBy = { id: me.uid, name: me.name }
                    if (Object.keys(doc.samples).length === 0) doc.status = 'No Samples'
                    else if (doc.historicalCoc) doc.status = 'Historical'
                    else doc.status = 'In Transit'
                  } else originalSamples = this.props.samples[doc.uid]
                  if (doc.historicalCoc) {
                    doc.versionUpToDate = true
                    doc.mostRecentIssueSent = true
                  } else {
                    doc.versionUpToDate = false
                    doc.mostRecentIssueSent = false
                  }
                  doc.lastModified = now
                  if (this.state.sampleType !== 'air') {
                    doc.defaultSampleDate = this.state.defaultSampleDate
                    doc.defaultSampledBy = this.state.defaultSampledBy
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }
                  handleCocSubmit({
                    doc: doc,
                    me: me,
                    originalSamples,
<<<<<<< HEAD
                    sampleType: this.state.sampleType,
                  });
                  this.props.resetModal();
                  this.props.resetWfmJob();
                }}
                color="primary"
=======
                    sampleType: this.state.sampleType
                  })
                  this.props.resetModal()
                  this.props.resetWfmJob()
                }}
                color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                Submit
              </Button>
            </DialogActions>
          ) : (
            <DialogActions>
              <Button
                onClick={() => {
<<<<<<< HEAD
                  this.props.resetWfmJob();
                  this.props.resetModal();
                }}
                color="secondary"
=======
                  this.props.resetWfmJob()
                  this.props.resetModal()
                }}
                color='secondary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              >
                Cancel
              </Button>
            </DialogActions>
          )}
        </Dialog>
<<<<<<< HEAD
      );
    } else return null;
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CocModal)
);
=======
      )
    } else return null
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CocModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
