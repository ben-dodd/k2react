<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import moment from "moment";
// import store from '../../store';
import { sitesRef, storage } from "../../../config/firebase";
import "../../../config/tags.css";

import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import SuggestionField from "../../../widgets/SuggestionField";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import UploadIcon from "@material-ui/icons/CloudUpload";
import CheckWriterIcon from "@material-ui/icons/Done";
import CheckCheckerIcon from "@material-ui/icons/DoneAll";
import CheckKTPIcon from "@material-ui/icons/VerifiedUser";
import Close from "@material-ui/icons/Close";
import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  resetModal,
  onUploadFile,
  setModalError,
} from "../../../actions/modal";
import { fetchSites } from "../../../actions/jobs";
import {
  getSampleColors,
  updateResultMap,
  writeDescription,
} from "../../../actions/asbestosLab";
import { getUserAttrs } from "../../../actions/local";
import {
  getMaterialRisk,
  getPriorityRisk,
  getTotalRisk,
} from "../../../actions/asbestosReportHelpers";
import {
  sendSlackMessage,
  numericAndLessThanOnly,
  dateOf,
  quillModules,
} from "../../../actions/helpers";
import { AsbButton, ScoreButton } from "../../../widgets/FormWidgets";
import _ from "lodash";
import classNames from "classnames";

import "../../../config/geosuggest.css";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import moment from 'moment'
// import store from '../../store';
import { sitesRef, storage } from '../../../config/firebase'
import '../../../config/tags.css'

import TextField from '@material-ui/core/TextField'
import LinearProgress from '@material-ui/core/LinearProgress'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import SuggestionField from '../../../widgets/SuggestionField'

// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'

import UploadIcon from '@material-ui/icons/CloudUpload'
import CheckWriterIcon from '@material-ui/icons/Done'
import CheckCheckerIcon from '@material-ui/icons/DoneAll'
import CheckKTPIcon from '@material-ui/icons/VerifiedUser'
import Close from '@material-ui/icons/Close'
import { hideModal, handleModalChange, handleModalSubmit, resetModal, onUploadFile, setModalError } from '../../../actions/modal'
import { fetchSites } from '../../../actions/jobs'
import { getSampleColors, updateResultMap, writeDescription } from '../../../actions/asbestosLab'
import { getUserAttrs } from '../../../actions/local'
import { getMaterialRisk, getPriorityRisk, getTotalRisk } from '../../../actions/asbestosReportHelpers'
import { sendSlackMessage, numericAndLessThanOnly, dateOf, quillModules } from '../../../actions/helpers'
import { AsbButton, ScoreButton } from '../../../widgets/FormWidgets'
import _ from 'lodash'
import classNames from 'classnames'

import '../../../config/geosuggest.css'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    userRefName: state.local.userRefName,
    sites: state.jobs.sites,
    siteCocs: state.jobs.siteCocs,
    siteJobs: state.jobs.siteJobs,
    samples: state.asbestosLab.samples,
    asbestosMaterialCategories: state.const.asbestosMaterialCategories,
    materialSuggestions: state.const.asbestosMaterialSuggestions,
    asbestosManagementOptions: state.const.asbestosManagementOptions,

<<<<<<< HEAD
    asbestosAccessibilitySuggestions:
      state.const.asbestosAccessibilitySuggestions,
=======
    asbestosAccessibilitySuggestions: state.const.asbestosAccessibilitySuggestions,
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // Material Risk
    asbestosProductScores: state.const.asbestosProductScores,
    asbestosSurfaceScores: state.const.asbestosSurfaceScores,
    asbestosDamageScores: state.const.asbestosDamageScores,

    // Activity
    asbestosPriMainActivityScores: state.const.asbestosPriMainActivityScores,
<<<<<<< HEAD
    asbestosPriSecondaryActivityScores:
      state.const.asbestosPriSecondaryActivityScores,
=======
    asbestosPriSecondaryActivityScores: state.const.asbestosPriSecondaryActivityScores,
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // Disturbance
    asbestosPriLocationScores: state.const.asbestosPriLocationScores,
    asbestosPriAccessibilityScores: state.const.asbestosPriAccessibilityScores,
    asbestosPriExtentScores: state.const.asbestosPriExtentScores,

    // Exposure
    asbestosPriOccupantsScores: state.const.asbestosPriOccupantsScores,
    asbestosPriUseFreqScores: state.const.asbestosPriUseFreqScores,
    asbestosPriAvgTimeScores: state.const.asbestosPriAvgTimeScores,

    // Maintenance
    asbestosPriMaintTypeScores: state.const.asbestosPriMaintTypeScores,
<<<<<<< HEAD
    asbestosPriMaintFreqScores: state.const.asbestosPriMaintFreqScores,
  };
};
=======
    asbestosPriMaintFreqScores: state.const.asbestosPriMaintFreqScores
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSites: (update) => dispatch(fetchSites(update)),
    hideModal: () => dispatch(hideModal()),
    setModalError: (e) => dispatch(setModalError(e)),
    resetModal: () => dispatch(resetModal()),
<<<<<<< HEAD
    onUploadFile: (file, pathRef, prefix, imageQuality) =>
      dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce(
      (target) => dispatch(handleModalChange(target)),
      300
    ),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
  };
};

const initState = {
  description: "",
=======
    onUploadFile: (file, pathRef, prefix, imageQuality) => dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef))
  }
}

const initState = {
  description: '',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  writeItemFirst: false,
  singularItem: false,
  inaccessibleItem: false,
  unknownItem: false,
<<<<<<< HEAD
  material: "",
  category: "",
  idKey: "p",
  sample: null,
  extent: "",
  extentNum: "",
  extentNumUnits: "m²",
  acmRemoved: false,
  acmRemovalJob: null,

  accessibility: "Easy",
  genericItem: false,
  genericItemBlurb: "",
  productScore: "1",
  damageScore: "0",
  damageDescription: "",
  surfaceScore: "1",
  surfaceDescription: "",
  damageSurfaceNotes: "",
  asbestosType: {
    ch: true,
    am: true,
    cr: true,
  },
  asbestosContent: "",

  comment: "",
  whyNotSampled: "",
  managementPrimary: "",
  managementSecondary: "",
  removalLicenceRequired: "",
  immediateActionRequired: "",
  shortTermAction: "",
  recommendations: "",
=======
  material: '',
  category: '',
  idKey: 'p',
  sample: null,
  extent: '',
  extentNum: '',
  extentNumUnits: 'm²',
  acmRemoved: false,
  acmRemovalJob: null,

  accessibility: 'Easy',
  genericItem: false,
  genericItemBlurb: '',
  productScore: '1',
  damageScore: '0',
  damageDescription: '',
  surfaceScore: '1',
  surfaceDescription: '',
  damageSurfaceNotes: '',
  asbestosType: {
    ch: true,
    am: true,
    cr: true
  },
  asbestosContent: '',

  comment: '',
  whyNotSampled: '',
  managementPrimary: '',
  managementSecondary: '',
  removalLicenceRequired: '',
  immediateActionRequired: '',
  shortTermAction: '',
  recommendations: '',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  priMainActivityScore: null,
  priSecondaryActivityScore: null,

  priLocationScore: null,
  priAccessibilityScore: null,
  priExtentScore: null,

  priOccupantScore: null,
  priUseFreqScore: null,
  priAvgTimeScore: null,

  priMaintTypeScore: null,
  priMaintFreqScore: null,

  materialRisk: null,
  priorityRisk: null,

  checkWriter: false,
  checkChecker: false,
  checkKTP: false,

  immediateRisk: false,
  sealImmediately: false,
  labelImmediately: false,

<<<<<<< HEAD
  room: { label: "", uid: "" },
  templateName: "",
  uid: null,
  sampleType: "bulk",
};

class AcmCard extends React.Component {
  state = initState;

  deleteImage = () => {
    storage.ref(this.state.acmImageRef).delete();
    this.setState({ acmImageUrl: null, acmImageRef: null });
  };

  handleAsbestosType = (res) => {
    this.setState({
      asbestosType: updateResultMap(res, this.state.asbestosType),
    });
  };

  UNSAFE_componentWillMount() {
    console.log("mount");
    this.loadAcm();
  }

  componentWillUnmount() {
    console.log("unmount");
    this.saveAcm(this.state);
  }

  loadAcm = () => {
    console.log("loading");
    if (this.props.item) {
      let item = { ...this.props.item };
      if (item.sample) {
        let cocUid = item.sample.cocUid,
          sampleNumber = item.sample.sampleNumber;
        if (
          this.props.samples &&
          this.props.samples[cocUid] &&
          this.props.samples[cocUid][sampleNumber]
        ) {
          item.sample = this.props.samples[cocUid][sampleNumber];
          if (this.props.samples[cocUid][sampleNumber].sampleType)
            item.sampleType = this.props.samples[cocUid][
              sampleNumber
            ].sampleType;
        }
      }
      console.log(item);
      this.setState({ ...initState, ...item });
    }
  };

  saveAcm = (item) => {
    console.log("saving");
    sitesRef.doc(this.props.site).collection("acm").doc(item.uid).update(item);
  };

  render() {
    console.log(this.props.const);
    const { modalProps, item, classes } = this.props;
    if (item.uid !== this.state.uid) {
      this.saveAcm(this.state);
      this.loadAcm();
    }
    let samples = {};
=======
  room: { label: '', uid: '' },
  templateName: '',
  uid: null,
  sampleType: 'bulk'
}

class AcmCard extends React.Component {
  state = initState

  deleteImage = () => {
    storage.ref(this.state.acmImageRef).delete()
    this.setState({ acmImageUrl: null, acmImageRef: null })
  }

  handleAsbestosType = (res) => {
    this.setState({
      asbestosType: updateResultMap(res, this.state.asbestosType)
    })
  }

  UNSAFE_componentWillMount() {
    console.log('mount')
    this.loadAcm()
  }

  componentWillUnmount() {
    console.log('unmount')
    this.saveAcm(this.state)
  }

  loadAcm = () => {
    console.log('loading')
    if (this.props.item) {
      let item = { ...this.props.item }
      if (item.sample) {
        let cocUid = item.sample.cocUid,
          sampleNumber = item.sample.sampleNumber
        if (this.props.samples && this.props.samples[cocUid] && this.props.samples[cocUid][sampleNumber]) {
          item.sample = this.props.samples[cocUid][sampleNumber]
          if (this.props.samples[cocUid][sampleNumber].sampleType) item.sampleType = this.props.samples[cocUid][sampleNumber].sampleType
        }
      }
      console.log(item)
      this.setState({ ...initState, ...item })
    }
  }

  saveAcm = (item) => {
    console.log('saving')
    sitesRef.doc(this.props.site).collection('acm').doc(item.uid).update(item)
  }

  render() {
    console.log(this.props.const)
    const { modalProps, item, classes } = this.props
    if (item.uid !== this.state.uid) {
      this.saveAcm(this.state)
      this.loadAcm()
    }
    let samples = {}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    this.props.siteCocs &&
      this.props.siteCocs[this.props.site] &&
      Object.keys(this.props.siteCocs[this.props.site]).forEach((k) => {
        if (this.props.samples && this.props.samples[k])
          Object.values(this.props.samples[k]).forEach((m) => {
<<<<<<< HEAD
            samples[m.uid] = m;
          });
      });
    const negative =
      this.state.sample &&
      this.state.sample.result &&
      this.state.sample.result.no;
    const hasResult =
      this.state.idKey === "i" && this.state.sample && this.state.sample.result;
    const colors = hasResult
      ? getSampleColors(this.state.sample)
      : getSampleColors({ result: this.state.asbestosType });
    const totalRisk =
      this.state.priorityRisk &&
      this.state.materialRisk &&
      this.state.materialRisk.color
        ? getTotalRisk(this.state.materialRisk, this.state.priorityRisk)
        : null;
    return (
      <Card className={classes.singlePaneDialog}>
        {item.sampleType === "air" ? (
          <CardContent>
            <div className={classes.flexRowSpread}>
              <div className={classes.heading}>{`${
                this.state.room ? this.state.room.label : ""
              } Air Sample`}</div>
              <div className={classes.flexRow}>
                <Tooltip title="All Information and Assessments Completed by Writer">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkWriter: !this.state.checkWriter })
                    }
                  >
                    <CheckWriterIcon
                      className={
                        this.state.checkWriter ? classes.colorsOk : null
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="All Information and Assessments Reviewed by Checker">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkChecker: !this.state.checkChecker })
                    }
                  >
                    <CheckCheckerIcon
                      className={
                        this.state.checkChecker ? classes.colorsOk : null
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="All Information and Assessments Reviewed by KTP">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkKTP: !this.state.checkKTP })
                    }
                  >
                    <CheckKTPIcon
                      className={this.state.checkKTP ? classes.colorsOk : null}
                    />
=======
            samples[m.uid] = m
          })
      })
    const negative = this.state.sample && this.state.sample.result && this.state.sample.result.no
    const hasResult = this.state.idKey === 'i' && this.state.sample && this.state.sample.result
    const colors = hasResult ? getSampleColors(this.state.sample) : getSampleColors({ result: this.state.asbestosType })
    const totalRisk =
      this.state.priorityRisk && this.state.materialRisk && this.state.materialRisk.color
        ? getTotalRisk(this.state.materialRisk, this.state.priorityRisk)
        : null
    return (
      <Card className={classes.singlePaneDialog}>
        {item.sampleType === 'air' ? (
          <CardContent>
            <div className={classes.flexRowSpread}>
              <div className={classes.heading}>{`${this.state.room ? this.state.room.label : ''} Air Sample`}</div>
              <div className={classes.flexRow}>
                <Tooltip title='All Information and Assessments Completed by Writer'>
                  <IconButton onClick={() => this.setState({ checkWriter: !this.state.checkWriter })}>
                    <CheckWriterIcon className={this.state.checkWriter ? classes.colorsOk : null} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='All Information and Assessments Reviewed by Checker'>
                  <IconButton onClick={() => this.setState({ checkChecker: !this.state.checkChecker })}>
                    <CheckCheckerIcon className={this.state.checkChecker ? classes.colorsOk : null} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='All Information and Assessments Reviewed by KTP'>
                  <IconButton onClick={() => this.setState({ checkKTP: !this.state.checkKTP })}>
                    <CheckKTPIcon className={this.state.checkKTP ? classes.colorsOk : null} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </IconButton>
                </Tooltip>
              </div>
            </div>
<<<<<<< HEAD
            <InputLabel className={classes.marginTopSmall}>
              Sample Number
            </InputLabel>
=======
            <InputLabel className={classes.marginTopSmall}>Sample Number</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <Select
              className={classes.selectTight}
              isClearable
              value={
                this.state.sample
                  ? {
                      value: this.state.sample,
<<<<<<< HEAD
                      label: `${this.state.sample.jobNumber}-${
                        this.state.sample.sampleNumber
                      }: ${writeDescription(this.state.sample)}`,
                    }
                  : { value: "", label: "" }
              }
              options={Object.values(samples)
                .filter((e) => e.sampleType === "air")
                .map((e) => ({
                  value: e || null,
                  label: e
                    ? `${e.jobNumber}-${e.sampleNumber}: ${writeDescription(e)}`
                    : null,
                }))}
              onChange={(e) => {
                this.setState({ sample: e ? e.value : null });
              }}
            />
            <InputLabel className={classes.marginTopSmall}>
              Concentration
            </InputLabel>
            {this.state.sample && this.state.sample.reportConcentration ? (
              <div
                className={
                  this.state.sample.reportConcentration.includes("<")
                    ? classes.informationBoxOk
                    : classes.informationBoxError
                }
              >
                {this.state.sample.reportConcentration}
              </div>
            ) : (
              ""
=======
                      label: `${this.state.sample.jobNumber}-${this.state.sample.sampleNumber}: ${writeDescription(this.state.sample)}`
                    }
                  : { value: '', label: '' }
              }
              options={Object.values(samples)
                .filter((e) => e.sampleType === 'air')
                .map((e) => ({
                  value: e || null,
                  label: e ? `${e.jobNumber}-${e.sampleNumber}: ${writeDescription(e)}` : null
                }))}
              onChange={(e) => {
                this.setState({ sample: e ? e.value : null })
              }}
            />
            <InputLabel className={classes.marginTopSmall}>Concentration</InputLabel>
            {this.state.sample && this.state.sample.reportConcentration ? (
              <div className={this.state.sample.reportConcentration.includes('<') ? classes.informationBoxOk : classes.informationBoxError}>
                {this.state.sample.reportConcentration}
              </div>
            ) : (
              ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            )}
          </CardContent>
        ) : (
          <CardContent>
            <div className={classes.flexRowSpread}>
<<<<<<< HEAD
              <div className={classes.heading}>
                {this.state.room && this.state.room.label}
              </div>
              <div className={classes.flexRow}>
                <Tooltip title="All Information and Assessments Completed by Writer">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkWriter: !this.state.checkWriter })
                    }
                  >
                    <CheckWriterIcon
                      className={
                        this.state.checkWriter ? classes.colorsOk : null
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="All Information and Assessments Reviewed by Checker">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkChecker: !this.state.checkChecker })
                    }
                  >
                    <CheckCheckerIcon
                      className={
                        this.state.checkChecker ? classes.colorsOk : null
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="All Information and Assessments Reviewed by KTP">
                  <IconButton
                    onClick={() =>
                      this.setState({ checkKTP: !this.state.checkKTP })
                    }
                  >
                    <CheckKTPIcon
                      className={this.state.checkKTP ? classes.colorsOk : null}
                    />
=======
              <div className={classes.heading}>{this.state.room && this.state.room.label}</div>
              <div className={classes.flexRow}>
                <Tooltip title='All Information and Assessments Completed by Writer'>
                  <IconButton onClick={() => this.setState({ checkWriter: !this.state.checkWriter })}>
                    <CheckWriterIcon className={this.state.checkWriter ? classes.colorsOk : null} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='All Information and Assessments Reviewed by Checker'>
                  <IconButton onClick={() => this.setState({ checkChecker: !this.state.checkChecker })}>
                    <CheckCheckerIcon className={this.state.checkChecker ? classes.colorsOk : null} />
                  </IconButton>
                </Tooltip>
                <Tooltip title='All Information and Assessments Reviewed by KTP'>
                  <IconButton onClick={() => this.setState({ checkKTP: !this.state.checkKTP })}>
                    <CheckKTPIcon className={this.state.checkKTP ? classes.colorsOk : null} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <SuggestionField
              that={this}
<<<<<<< HEAD
              suggestions="descriptionSuggestions"
              label="Item Description"
              controlled
              value={this.state.description ? this.state.description : ""}
              onModify={(value) => this.setState({ description: value })}
            />
            <Tooltip title="Write item before material (e.g. pipework lagging), otherwise material will be written first (e.g. cement sheet soffits)">
=======
              suggestions='descriptionSuggestions'
              label='Item Description'
              controlled
              value={this.state.description ? this.state.description : ''}
              onModify={(value) => this.setState({ description: value })}
            />
            <Tooltip title='Write item before material (e.g. pipework lagging), otherwise material will be written first (e.g. cement sheet soffits)'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              <FormControlLabel
                className={classes.marginTopSmall}
                control={
                  <Switch
                    checked={this.state.writeItemFirst || false}
                    onClick={(e) => {
<<<<<<< HEAD
                      this.setState({ writeItemFirst: e.target.checked });
                    }}
                    value="writeItemFirst"
                    color="secondary"
                  />
                }
                label="Write Item First"
              />
            </Tooltip>
            <Tooltip title="Write item as singular (e.g. It Is instead of They Are)">
=======
                      this.setState({ writeItemFirst: e.target.checked })
                    }}
                    value='writeItemFirst'
                    color='secondary'
                  />
                }
                label='Write Item First'
              />
            </Tooltip>
            <Tooltip title='Write item as singular (e.g. It Is instead of They Are)'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              <FormControlLabel
                className={classes.marginTopSmall}
                control={
                  <Switch
                    checked={this.state.singularItem || false}
                    onClick={(e) => {
<<<<<<< HEAD
                      this.setState({ singularItem: e.target.checked });
                    }}
                    value="singularItem"
                    color="secondary"
                  />
                }
                label="Write as Singular Item"
=======
                      this.setState({ singularItem: e.target.checked })
                    }}
                    value='singularItem'
                    color='secondary'
                  />
                }
                label='Write as Singular Item'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              />
            </Tooltip>
            <div className={classes.flexRow}>
              <FormControlLabel
                className={classes.marginTopSmall}
                control={
                  <Switch
                    checked={this.state.inaccessibleItem || false}
                    onClick={(e) => {
<<<<<<< HEAD
                      this.setState({ inaccessibleItem: e.target.checked });
                    }}
                    value="inaccessibleItem"
                    color="secondary"
                  />
                }
                label="Inaccessible Item"
=======
                      this.setState({ inaccessibleItem: e.target.checked })
                    }}
                    value='inaccessibleItem'
                    color='secondary'
                  />
                }
                label='Inaccessible Item'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              />

              <FormControlLabel
                className={classes.marginTopSmall}
                control={
                  <Switch
                    checked={this.state.unknownItem || false}
                    onClick={(e) => {
<<<<<<< HEAD
                      this.setState({ unknownItem: e.target.checked });
                    }}
                    value="unknownItem"
                    color="secondary"
                  />
                }
                label="Unknown Item"
=======
                      this.setState({ unknownItem: e.target.checked })
                    }}
                    value='unknownItem'
                    color='secondary'
                  />
                }
                label='Unknown Item'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              />
            </div>

            {!this.state.unknownItem && (
              <div>
                <SuggestionField
                  that={this}
<<<<<<< HEAD
                  suggestions="materialSuggestions"
                  label="Material"
                  controlled
                  value={this.state.material ? this.state.material : ""}
                  onModify={(value) => {
                    let category = "",
                      asbestosType = this.state.asbestosType
                        ? this.state.asbestosType
                        : { ch: true, am: true, cr: true },
                      asbestosContent = this.state.asbestosContent
                        ? this.state.asbestosContent
                        : "",
                      materialObj = Object.values(
                        this.props.materialSuggestions
                      ).filter((e) => e.label === value);
                    if (materialObj.length > 0) {
                      category = materialObj[0].category;
                      if (materialObj[0].asbestosType)
                        asbestosType = {
                          ch: materialObj[0].asbestosType.includes("ch"),
                          am: materialObj[0].asbestosType.includes("am"),
                          cr: materialObj[0].asbestosType.includes("cr"),
                        };
                      if (materialObj[0].asbestosContent)
                        asbestosContent = parseInt(
                          materialObj[0].asbestosContent
                        );
=======
                  suggestions='materialSuggestions'
                  label='Material'
                  controlled
                  value={this.state.material ? this.state.material : ''}
                  onModify={(value) => {
                    let category = '',
                      asbestosType = this.state.asbestosType ? this.state.asbestosType : { ch: true, am: true, cr: true },
                      asbestosContent = this.state.asbestosContent ? this.state.asbestosContent : '',
                      materialObj = Object.values(this.props.materialSuggestions).filter((e) => e.label === value)
                    if (materialObj.length > 0) {
                      category = materialObj[0].category
                      if (materialObj[0].asbestosType)
                        asbestosType = {
                          ch: materialObj[0].asbestosType.includes('ch'),
                          am: materialObj[0].asbestosType.includes('am'),
                          cr: materialObj[0].asbestosType.includes('cr')
                        }
                      if (materialObj[0].asbestosContent) asbestosContent = parseInt(materialObj[0].asbestosContent)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }
                    this.setState({
                      material: value,
                      category,
                      asbestosType,
<<<<<<< HEAD
                      asbestosContent,
                    });
                  }}
                />
                <InputLabel className={classes.marginTopSmall}>
                  Material Category
                </InputLabel>
=======
                      asbestosContent
                    })
                  }}
                />
                <InputLabel className={classes.marginTopSmall}>Material Category</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  isClearable
                  className={classes.selectTight}
                  value={
                    this.state.category
                      ? {
                          value: this.state.category,
<<<<<<< HEAD
                          label: this.state.category,
                        }
                      : { value: "", label: "" }
                  }
                  options={this.props.asbestosMaterialCategories.map((e) => ({
                    value: e.label,
                    label: e.label,
                  }))}
                  onChange={(e) => {
                    this.setState({ category: e ? e.value : null });
=======
                          label: this.state.category
                        }
                      : { value: '', label: '' }
                  }
                  options={this.props.asbestosMaterialCategories.map((e) => ({
                    value: e.label,
                    label: e.label
                  }))}
                  onChange={(e) => {
                    this.setState({ category: e ? e.value : null })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
              </div>
            )}

<<<<<<< HEAD
            <InputLabel className={classes.marginTopSmall}>
              Identification
            </InputLabel>
            <div className={classes.flexRow}>
              {[
                {
                  label: "Presumed",
                  value: "p",
                  color: "Warning",
                  tooltip: "Default.",
                },
                {
                  label: "Strongly Presumed",
                  value: "s",
                  color: "StrongWarning",
                  tooltip: "Strongly presumed.",
                },
                {
                  label: "Sampled",
                  value: "i",
                  color: negative ? "Ok" : "Bad",
                  tooltip: "Sampled.",
                },
              ].map((res) => {
                return ScoreButton(
                  classes[
                    `colorsButton${
                      this.state.idKey === res.value ? res.color : "Off"
                    }`
                  ],
                  classes[
                    `colorsDiv${
                      this.state.idKey === res.value ? res.color : "Off"
                    }`
                  ],
                  res.label,
                  res.tooltip,
                  () => this.setState({ idKey: res.value })
                );
              })}
            </div>
            {(this.state.idKey === "i" || this.state.idKey === "s") && (
              <div>
                <InputLabel className={classes.marginTopSmall}>
                  {this.state.idKey === "i"
                    ? "Sample Number"
                    : "Presume As Sample"}
=======
            <InputLabel className={classes.marginTopSmall}>Identification</InputLabel>
            <div className={classes.flexRow}>
              {[
                {
                  label: 'Presumed',
                  value: 'p',
                  color: 'Warning',
                  tooltip: 'Default.'
                },
                {
                  label: 'Strongly Presumed',
                  value: 's',
                  color: 'StrongWarning',
                  tooltip: 'Strongly presumed.'
                },
                {
                  label: 'Sampled',
                  value: 'i',
                  color: negative ? 'Ok' : 'Bad',
                  tooltip: 'Sampled.'
                }
              ].map((res) => {
                return ScoreButton(
                  classes[`colorsButton${this.state.idKey === res.value ? res.color : 'Off'}`],
                  classes[`colorsDiv${this.state.idKey === res.value ? res.color : 'Off'}`],
                  res.label,
                  res.tooltip,
                  () => this.setState({ idKey: res.value })
                )
              })}
            </div>
            {(this.state.idKey === 'i' || this.state.idKey === 's') && (
              <div>
                <InputLabel className={classes.marginTopSmall}>
                  {this.state.idKey === 'i' ? 'Sample Number' : 'Presume As Sample'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                </InputLabel>
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.sample
                      ? {
                          value: this.state.sample,
<<<<<<< HEAD
                          label: `${this.state.sample.jobNumber}-${
                            this.state.sample.sampleNumber
                          }: ${writeDescription(this.state.sample)}`,
                        }
                      : { value: "", label: "" }
                  }
                  options={Object.values(samples)
                    .filter((e) => e.sampleType !== "air")
                    .map((e) => ({
                      value: e || null,
                      label: e
                        ? `${e.jobNumber}-${e.sampleNumber}: ${writeDescription(
                            e
                          )}`
                        : null,
=======
                          label: `${this.state.sample.jobNumber}-${this.state.sample.sampleNumber}: ${writeDescription(this.state.sample)}`
                        }
                      : { value: '', label: '' }
                  }
                  options={Object.values(samples)
                    .filter((e) => e.sampleType !== 'air')
                    .map((e) => ({
                      value: e || null,
                      label: e ? `${e.jobNumber}-${e.sampleNumber}: ${writeDescription(e)}` : null
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }))}
                  onChange={(e) => {
                    this.setState({
                      sample: e.value,
                      materialRisk: getMaterialRisk({
                        ...this.state,
<<<<<<< HEAD
                        sample: e ? e.value : null,
                      }),
                    });
=======
                        sample: e ? e.value : null
                      })
                    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
              </div>
            )}
            <SuggestionField
              that={this}
<<<<<<< HEAD
              suggestions="extentSuggestions"
              label="Extent Description"
              controlled
              value={this.state.extent || ""}
=======
              suggestions='extentSuggestions'
              label='Extent Description'
              controlled
              value={this.state.extent || ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              onModify={(value) => this.setState({ extent: value })}
            />

            <div className={classes.flexRow}>
              <TextField
<<<<<<< HEAD
                id="extentNum"
                label="Extent Amount"
                style={{ width: "60%" }}
                value={this.state.extentNum}
                onChange={(e) =>
                  this.setState({
                    extentNum: numericAndLessThanOnly(e.target.value),
=======
                id='extentNum'
                label='Extent Amount'
                style={{ width: '60%' }}
                value={this.state.extentNum}
                onChange={(e) =>
                  this.setState({
                    extentNum: numericAndLessThanOnly(e.target.value)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  })
                }
              />
              <Select
                className={classNames(classes.selectTight, classes.columnSmall)}
                value={
                  this.state.extentNumUnits
                    ? {
                        value: this.state.extentNumUnits,
<<<<<<< HEAD
                        label: this.state.extentNumUnits,
                      }
                    : { value: "m²", label: "m²" }
                }
                options={["m²", "m", "lm", "m³", "items"].map((e) => ({
                  value: e,
                  label: e,
                }))}
                onChange={(e) => {
                  this.setState({ extentNumUnits: e.value });
=======
                        label: this.state.extentNumUnits
                      }
                    : { value: 'm²', label: 'm²' }
                }
                options={['m²', 'm', 'lm', 'm³', 'items'].map((e) => ({
                  value: e,
                  label: e
                }))}
                onChange={(e) => {
                  this.setState({ extentNumUnits: e.value })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            </div>

            {!negative && (
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.acmRemoved || false}
                      onClick={(e) => {
<<<<<<< HEAD
                        this.setState({ acmRemoved: e.target.checked });
                      }}
                      value="acmRemoved"
                      color="secondary"
                    />
                  }
                  label="ACM Removed"
=======
                        this.setState({ acmRemoved: e.target.checked })
                      }}
                      value='acmRemoved'
                      color='secondary'
                    />
                  }
                  label='ACM Removed'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                />

                {this.state.acmRemoved && (
                  <div>
<<<<<<< HEAD
                    <InputLabel className={classes.marginTopSmall}>
                      Clearance Job
                    </InputLabel>
=======
                    <InputLabel className={classes.marginTopSmall}>Clearance Job</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <Select
                      className={classes.selectTight}
                      isClearable
                      value={
                        this.state.acmRemovalJob
                          ? {
                              value: this.state.acmRemovalJob,
<<<<<<< HEAD
                              label: `${
                                this.state.acmRemovalJob.referenceNumber
                              } ${
                                this.state.acmRemovalJob.asbestosRemovalist
                              } (${moment(
                                dateOf(this.state.acmRemovalJob.removalDate)
                              ).format("D MMM YYYY")})`,
                            }
                          : { value: "", label: "" }
                      }
                      options={
                        this.props.sites &&
                        this.props.sites[this.props.site] &&
                        this.props.sites[this.props.site].asbestosRemovals
                          ? this.props.sites[
                              this.props.site
                            ].asbestosRemovals.map((e) => ({
                              value: e,
                              label: `${e.referenceNumber} ${
                                e.asbestosRemovalist
                              } (${moment(dateOf(e.removalDate)).format(
                                "D MMM YYYY"
                              )})`,
=======
                              label: `${this.state.acmRemovalJob.referenceNumber} ${this.state.acmRemovalJob.asbestosRemovalist} (${moment(
                                dateOf(this.state.acmRemovalJob.removalDate)
                              ).format('D MMM YYYY')})`
                            }
                          : { value: '', label: '' }
                      }
                      options={
                        this.props.sites && this.props.sites[this.props.site] && this.props.sites[this.props.site].asbestosRemovals
                          ? this.props.sites[this.props.site].asbestosRemovals.map((e) => ({
                              value: e,
                              label: `${e.referenceNumber} ${e.asbestosRemovalist} (${moment(dateOf(e.removalDate)).format('D MMM YYYY')})`
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            }))
                          : []
                      }
                      onChange={(e) => {
<<<<<<< HEAD
                        this.setState({ acmRemovalJob: e ? e.value : null });
=======
                        this.setState({ acmRemovalJob: e ? e.value : null })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {!negative && !this.state.acmRemoved && (
              <div>
<<<<<<< HEAD
                <InputLabel className={classes.marginTopSmall}>
                  Accessibility Score
                </InputLabel>
=======
                <InputLabel className={classes.marginTopSmall}>Accessibility Score</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <div className={classes.flexRow}>
                  {this.props.asbestosAccessibilitySuggestions &&
                    this.props.asbestosAccessibilitySuggestions.map((res) => {
                      return ScoreButton(
<<<<<<< HEAD
                        classes[
                          `colorsButton${
                            this.state.accessibility === res.label
                              ? res.color
                              : "Off"
                          }`
                        ],
                        classes[
                          `colorsDiv${
                            this.state.accessibility === res.label
                              ? res.color
                              : "Off"
                          }`
                        ],
                        res.label,
                        res.tooltip,
                        () => this.setState({ accessibility: res.label })
                      );
=======
                        classes[`colorsButton${this.state.accessibility === res.label ? res.color : 'Off'}`],
                        classes[`colorsDiv${this.state.accessibility === res.label ? res.color : 'Off'}`],
                        res.label,
                        res.tooltip,
                        () => this.setState({ accessibility: res.label })
                      )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    })}
                </div>

                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.genericItem || false}
                      onClick={(e) => {
<<<<<<< HEAD
                        this.setState({ genericItem: e.target.checked });
                      }}
                      value="genericItem"
                      color="secondary"
                    />
                  }
                  label="Generic Item"
                />
                {this.state.genericItem && (
                  <div>
                    <InputLabel className={classes.marginTopSmall}>
                      Blurb for Report
                    </InputLabel>
                    <ReactQuill
                      value={this.state.genericItemBlurb || ""}
=======
                        this.setState({ genericItem: e.target.checked })
                      }}
                      value='genericItem'
                      color='secondary'
                    />
                  }
                  label='Generic Item'
                />
                {this.state.genericItem && (
                  <div>
                    <InputLabel className={classes.marginTopSmall}>Blurb for Report</InputLabel>
                    {/* <ReactQuill
                      value={this.state.genericItemBlurb || ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      modules={quillModules}
                      theme="snow"
                      className={classes.marginBottomMedium}
                      onChange={(content, delta, source) => {
<<<<<<< HEAD
                        if (source === "user")
                          this.setState({ genericItemBlurb: content });
                      }}
                    />
=======
                        if (source === 'user')
                          this.setState({ genericItemBlurb: content })
                      }}
                    /> */}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                )}

                {!this.state.unknownItem && (
                  <div>
<<<<<<< HEAD
                    <InputLabel className={classes.marginTopSmall}>
                      Product Score
                    </InputLabel>
=======
                    <InputLabel className={classes.marginTopSmall}>Product Score</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <div className={classes.flexRow}>
                      {this.props.asbestosProductScores &&
                        this.props.asbestosProductScores.map((res) => {
                          return ScoreButton(
<<<<<<< HEAD
                            classes[
                              `colorsButton${
                                this.state.productScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
                            classes[
                              `colorsDiv${
                                this.state.productScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
=======
                            classes[`colorsButton${this.state.productScore === res.label ? res.color : 'Off'}`],
                            classes[`colorsDiv${this.state.productScore === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            res.label,
                            res.tooltip,
                            () =>
                              this.setState({
                                productScore: res.label,
                                materialRisk: getMaterialRisk({
                                  ...this.state,
<<<<<<< HEAD
                                  productScore: res.label,
                                }),
                              })
                          );
                        })}
                    </div>

                    <InputLabel className={classes.marginTopSmall}>
                      Damage Score
                    </InputLabel>
=======
                                  productScore: res.label
                                })
                              })
                          )
                        })}
                    </div>

                    <InputLabel className={classes.marginTopSmall}>Damage Score</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <div className={classes.flexRow}>
                      {this.props.asbestosDamageScores &&
                        this.props.asbestosDamageScores.map((res) => {
                          return ScoreButton(
<<<<<<< HEAD
                            classes[
                              `colorsButton${
                                this.state.damageScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
                            classes[
                              `colorsDiv${
                                this.state.damageScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
=======
                            classes[`colorsButton${this.state.damageScore === res.label ? res.color : 'Off'}`],
                            classes[`colorsDiv${this.state.damageScore === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            res.label,
                            res.tooltip,
                            () =>
                              this.setState({
                                damageScore: res.label,
                                materialRisk: getMaterialRisk({
                                  ...this.state,
<<<<<<< HEAD
                                  damageScore: res.label,
                                }),
                              })
                          );
=======
                                  damageScore: res.label
                                })
                              })
                          )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        })}
                    </div>
                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      suggestions="damageSuggestions"
                      label="Damage Description"
                      controlled
                      value={this.state.damageDescription || ""}
                      onModify={(value) =>
                        this.setState({ damageDescription: value })
                      }
                    />

                    <InputLabel className={classes.marginTopSmall}>
                      Surface Score
                    </InputLabel>
=======
                      suggestions='damageSuggestions'
                      label='Damage Description'
                      controlled
                      value={this.state.damageDescription || ''}
                      onModify={(value) => this.setState({ damageDescription: value })}
                    />

                    <InputLabel className={classes.marginTopSmall}>Surface Score</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    <div className={classes.flexRow}>
                      {this.props.asbestosSurfaceScores &&
                        this.props.asbestosSurfaceScores.map((res) => {
                          return ScoreButton(
<<<<<<< HEAD
                            classes[
                              `colorsButton${
                                this.state.surfaceScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
                            classes[
                              `colorsDiv${
                                this.state.surfaceScore === res.label
                                  ? res.color
                                  : "Off"
                              }`
                            ],
=======
                            classes[`colorsButton${this.state.surfaceScore === res.label ? res.color : 'Off'}`],
                            classes[`colorsDiv${this.state.surfaceScore === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            res.label,
                            res.tooltip,
                            () =>
                              this.setState({
                                surfaceScore: res.label,
                                materialRisk: getMaterialRisk({
                                  ...this.state,
<<<<<<< HEAD
                                  surfaceScore: res.label,
                                }),
                              })
                          );
=======
                                  surfaceScore: res.label
                                })
                              })
                          )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        })}
                    </div>
                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      suggestions="asbestosSurfaceSuggestions"
                      label="Surface Treatment Description"
                      controlled
                      value={this.state.surfaceDescription || ""}
                      onModify={(value) =>
                        this.setState({ surfaceDescription: value })
                      }
=======
                      suggestions='asbestosSurfaceSuggestions'
                      label='Surface Treatment Description'
                      controlled
                      value={this.state.surfaceDescription || ''}
                      onModify={(value) => this.setState({ surfaceDescription: value })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    />

                    <div className={classes.flexRowSpread}>
                      <div>
<<<<<<< HEAD
                        <InputLabel className={classes.marginTopSmall}>
                          {hasResult
                            ? "Asbestos Type"
                            : "Presumed Asbestos Type"}
                        </InputLabel>
                        <div className={classes.flexRow}>
                          {["ch", "am", "cr"].map((res) => {
=======
                        <InputLabel className={classes.marginTopSmall}>{hasResult ? 'Asbestos Type' : 'Presumed Asbestos Type'}</InputLabel>
                        <div className={classes.flexRow}>
                          {['ch', 'am', 'cr'].map((res) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            return AsbButton(
                              classes[`colorsButton${colors[res]}`],
                              classes[`colorsDiv${colors[res]}`],
                              res,
<<<<<<< HEAD
                              hasResult
                                ? null
                                : () => this.handleAsbestosType(res)
                            );
=======
                              hasResult ? null : () => this.handleAsbestosType(res)
                            )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          })}
                        </div>
                      </div>

                      <div>
                        <TextField
<<<<<<< HEAD
                          label="Estimated Asbestos Concentration"
                          value={
                            this.state.asbestosContent
                              ? this.state.asbestosContent
                              : ""
                          }
                          style={{ width: "20%" }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">%</InputAdornment>
                            ),
                          }}
                          onChange={(e) => {
                            this.setState({
                              asbestosContent: numericAndLessThanOnly(
                                e.target.value,
                                1
                              ),
                            });
=======
                          label='Estimated Asbestos Concentration'
                          value={this.state.asbestosContent ? this.state.asbestosContent : ''}
                          style={{ width: '20%' }}
                          InputProps={{
                            endAdornment: <InputAdornment position='end'>%</InputAdornment>
                          }}
                          onChange={(e) => {
                            this.setState({
                              asbestosContent: numericAndLessThanOnly(e.target.value, 1)
                            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }}
                        />
                      </div>
                    </div>

                    {this.state.materialRisk && (
                      <div
<<<<<<< HEAD
                        className={
                          classes[`totalDiv${this.state.materialRisk.color}`]
                        }
=======
                        className={classes[`totalDiv${this.state.materialRisk.color}`]}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      >{`Material Risk: ${this.state.materialRisk.text} (${this.state.materialRisk.score})`}</div>
                    )}
                  </div>
                )}

<<<<<<< HEAD
                {this.state.idKey !== "i" && !this.state.inaccessibleItem && (
                  <SuggestionField
                    that={this}
                    suggestions="asbestosWhyNotSampledSuggestions"
                    controlled
                    value={this.state.whyNotSampled || ""}
                    multiline
                    rows={2}
                    label="Why Not Sampled?"
                    onModify={(value) =>
                      this.setState({ whyNotSampled: value })
                    }
=======
                {this.state.idKey !== 'i' && !this.state.inaccessibleItem && (
                  <SuggestionField
                    that={this}
                    suggestions='asbestosWhyNotSampledSuggestions'
                    controlled
                    value={this.state.whyNotSampled || ''}
                    multiline
                    rows={2}
                    label='Why Not Sampled?'
                    onModify={(value) => this.setState({ whyNotSampled: value })}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  />
                )}

                <TextField
<<<<<<< HEAD
                  style={{ width: "100%" }}
                  label="Damage/Surface Notes"
                  value={
                    this.state.damageSurfaceNotes
                      ? this.state.damageSurfaceNotes
                      : ""
                  }
                  onChange={(e) => {
                    this.setState({
                      damageSurfaceNotes: e.target.value,
                    });
=======
                  style={{ width: '100%' }}
                  label='Damage/Surface Notes'
                  value={this.state.damageSurfaceNotes ? this.state.damageSurfaceNotes : ''}
                  onChange={(e) => {
                    this.setState({
                      damageSurfaceNotes: e.target.value
                    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />

                {/*<InputLabel className={classes.marginTopSmall}>
                  Comment for Report
                </InputLabel>
                <ReactQuill
                  value={this.state.comment || ""}
                  modules={quillModules}
                  className={classes.marginBottomMedium}
                  theme="snow"
                  onChange={(content, delta, source) => {
                    if (source === "user") this.setState({ comment: content });
                  }}
                />*/}

<<<<<<< HEAD
                <InputLabel className={classes.marginTopSmall}>
                  Basic Primary Management
                </InputLabel>
=======
                <InputLabel className={classes.marginTopSmall}>Basic Primary Management</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.managementPrimary
                      ? {
                          value: this.state.managementPrimary,
<<<<<<< HEAD
                          label: this.state.managementPrimary,
                        }
                      : { value: "", label: "" }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label,
                  }))}
                  onChange={(e) => {
                    this.setState({ managementPrimary: e ? e.value : null });
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>
                  Basic Secondary Management
                </InputLabel>
=======
                          label: this.state.managementPrimary
                        }
                      : { value: '', label: '' }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label
                  }))}
                  onChange={(e) => {
                    this.setState({ managementPrimary: e ? e.value : null })
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>Basic Secondary Management</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.managementSecondary
                      ? {
                          value: this.state.managementSecondary,
<<<<<<< HEAD
                          label: this.state.managementSecondary,
                        }
                      : { value: "", label: "" }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label,
                  }))}
                  onChange={(e) => {
                    this.setState({ managementSecondary: e ? e.value : null });
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>
                  Removal Licence Required
                </InputLabel>
=======
                          label: this.state.managementSecondary
                        }
                      : { value: '', label: '' }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label
                  }))}
                  onChange={(e) => {
                    this.setState({ managementSecondary: e ? e.value : null })
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>Removal Licence Required</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.removalLicenceRequired
                      ? {
                          value: this.state.removalLicenceRequired,
<<<<<<< HEAD
                          label: this.state.removalLicenceRequired,
                        }
                      : { value: "", label: "" }
                  }
                  options={["Class A", "Class B", "Unlicensed"].map((e) => ({
                    value: e,
                    label: e,
                  }))}
                  onChange={(e) => {
                    this.setState({
                      removalLicenceRequired: e ? e.value : null,
                    });
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>
                  Immediate Action Required
                </InputLabel>
=======
                          label: this.state.removalLicenceRequired
                        }
                      : { value: '', label: '' }
                  }
                  options={['Class A', 'Class B', 'Unlicensed'].map((e) => ({
                    value: e,
                    label: e
                  }))}
                  onChange={(e) => {
                    this.setState({
                      removalLicenceRequired: e ? e.value : null
                    })
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>Immediate Action Required</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.immediateActionRequired
                      ? {
                          value: this.state.immediateActionRequired,
<<<<<<< HEAD
                          label: this.state.immediateActionRequired,
                        }
                      : { value: "", label: "" }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label,
                  }))}
                  onChange={(e) => {
                    this.setState({
                      immediateActionRequired: e ? e.value : null,
                    });
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>
                  Short Term Action
                </InputLabel>
=======
                          label: this.state.immediateActionRequired
                        }
                      : { value: '', label: '' }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label
                  }))}
                  onChange={(e) => {
                    this.setState({
                      immediateActionRequired: e ? e.value : null
                    })
                  }}
                />

                <InputLabel className={classes.marginTopSmall}>Short Term Action</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <Select
                  className={classes.selectTight}
                  isClearable
                  value={
                    this.state.shortTermAction
                      ? {
                          value: this.state.shortTermAction,
<<<<<<< HEAD
                          label: this.state.shortTermAction,
                        }
                      : { value: "", label: "" }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label,
                  }))}
                  onChange={(e) => {
                    this.setState({ shortTermAction: e.value });
=======
                          label: this.state.shortTermAction
                        }
                      : { value: '', label: '' }
                  }
                  options={this.props.asbestosManagementOptions.map((e) => ({
                    value: e.label,
                    label: e.label
                  }))}
                  onChange={(e) => {
                    this.setState({ shortTermAction: e.value })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />

                {/*<InputLabel className={classes.marginTopSmall}>
                  Management Recommendations
                </InputLabel>
                <ReactQuill
                  value={this.state.recommendations || ""}
                  modules={quillModules}
                  theme="snow"
                  className={classes.marginBottomMedium}
                  onChange={(content, delta, source) => {
                    if (source === "user")
                      this.setState({ recommendations: content });
                  }}
                />*/}

<<<<<<< HEAD
                <InputLabel className={classes.marginTopSmall}>
                  Priority Risk Assessment
                </InputLabel>
                <InputLabel className={classes.marginTopSmall}>
                  Normal Occupant Activity
                </InputLabel>

                {[
                  {
                    label: "Main type of activity in area",
                    options: "asbestosPriMainActivityScores",
                    stateVar: "priMainActivityScore",
                  },
                  {
                    label: "Secondary activities for area",
                    options: "asbestosPriSecondaryActivityScores",
                    stateVar: "priSecondaryActivityScore",
                  },
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>
                        {e.label}
                      </InputLabel>
=======
                <InputLabel className={classes.marginTopSmall}>Priority Risk Assessment</InputLabel>
                <InputLabel className={classes.marginTopSmall}>Normal Occupant Activity</InputLabel>

                {[
                  {
                    label: 'Main type of activity in area',
                    options: 'asbestosPriMainActivityScores',
                    stateVar: 'priMainActivityScore'
                  },
                  {
                    label: 'Secondary activities for area',
                    options: 'asbestosPriSecondaryActivityScores',
                    stateVar: 'priSecondaryActivityScore'
                  }
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>{e.label}</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      <div className={classes.flexRow}>
                        {this.props[e.options] &&
                          this.props[e.options].map((res) => {
                            return ScoreButton(
<<<<<<< HEAD
                              classes[
                                `colorsButton${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
                              classes[
                                `colorsDiv${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
=======
                              classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                              classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              res.label,
                              res.tooltip,
                              () =>
                                this.setState({
<<<<<<< HEAD
                                  [e.stateVar]:
                                    this.state[e.stateVar] === res.label
                                      ? null
                                      : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]:
                                      this.state[e.stateVar] === res.label
                                        ? null
                                        : res.label,
                                  }),
                                })
                            );
                          })}
                      </div>
                    </div>
                  );
                })}

                <InputLabel className={classes.marginTopSmall}>
                  Likelihood of Disturbance
                </InputLabel>

                {[
                  {
                    label: "Location",
                    options: "asbestosPriLocationScores",
                    stateVar: "priLocationScore",
                  },
                  {
                    label: "Accessibility",
                    options: "asbestosPriAccessibilityScores",
                    stateVar: "priAccessibilityScore",
                  },
                  {
                    label: "Extent/amount",
                    options: "asbestosPriExtentScores",
                    stateVar: "priExtentScore",
                  },
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>
                        {e.label}
                      </InputLabel>
=======
                                  [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label
                                  })
                                })
                            )
                          })}
                      </div>
                    </div>
                  )
                })}

                <InputLabel className={classes.marginTopSmall}>Likelihood of Disturbance</InputLabel>

                {[
                  {
                    label: 'Location',
                    options: 'asbestosPriLocationScores',
                    stateVar: 'priLocationScore'
                  },
                  {
                    label: 'Accessibility',
                    options: 'asbestosPriAccessibilityScores',
                    stateVar: 'priAccessibilityScore'
                  },
                  {
                    label: 'Extent/amount',
                    options: 'asbestosPriExtentScores',
                    stateVar: 'priExtentScore'
                  }
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>{e.label}</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      <div className={classes.flexRow}>
                        {this.props[e.options] &&
                          this.props[e.options].map((res) => {
                            return ScoreButton(
<<<<<<< HEAD
                              classes[
                                `colorsButton${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
                              classes[
                                `colorsDiv${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
=======
                              classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                              classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              res.label,
                              res.tooltip,
                              () =>
                                this.setState({
<<<<<<< HEAD
                                  [e.stateVar]:
                                    this.state[e.stateVar] === res.label
                                      ? null
                                      : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]:
                                      this.state[e.stateVar] === res.label
                                        ? null
                                        : res.label,
                                  }),
                                })
                            );
                          })}
                      </div>
                    </div>
                  );
                })}

                <InputLabel className={classes.marginTopSmall}>
                  Human Exposure Potential
                </InputLabel>

                {[
                  {
                    label: "Number of occupants",
                    options: "asbestosPriOccupantsScores",
                    stateVar: "priOccupantScore",
                  },
                  {
                    label: "Frequency of use of area",
                    options: "asbestosPriUseFreqScores",
                    stateVar: "priUseFreqScore",
                  },
                  {
                    label: "Average daily time area is in use",
                    options: "asbestosPriAvgTimeScores",
                    stateVar: "priAvgTimeScore",
                  },
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>
                        {e.label}
                      </InputLabel>
=======
                                  [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label
                                  })
                                })
                            )
                          })}
                      </div>
                    </div>
                  )
                })}

                <InputLabel className={classes.marginTopSmall}>Human Exposure Potential</InputLabel>

                {[
                  {
                    label: 'Number of occupants',
                    options: 'asbestosPriOccupantsScores',
                    stateVar: 'priOccupantScore'
                  },
                  {
                    label: 'Frequency of use of area',
                    options: 'asbestosPriUseFreqScores',
                    stateVar: 'priUseFreqScore'
                  },
                  {
                    label: 'Average daily time area is in use',
                    options: 'asbestosPriAvgTimeScores',
                    stateVar: 'priAvgTimeScore'
                  }
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>{e.label}</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      <div className={classes.flexRow}>
                        {this.props[e.options] &&
                          this.props[e.options].map((res) => {
                            return ScoreButton(
<<<<<<< HEAD
                              classes[
                                `colorsButton${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
                              classes[
                                `colorsDiv${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
=======
                              classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                              classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              res.label,
                              res.tooltip,
                              () =>
                                this.setState({
<<<<<<< HEAD
                                  [e.stateVar]:
                                    this.state[e.stateVar] === res.label
                                      ? null
                                      : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]:
                                      this.state[e.stateVar] === res.label
                                        ? null
                                        : res.label,
                                  }),
                                })
                            );
                          })}
                      </div>
                    </div>
                  );
                })}

                <InputLabel className={classes.marginTopSmall}>
                  Maintenance
                </InputLabel>

                {[
                  {
                    label: "Type of maintenance activity",
                    options: "asbestosPriMaintTypeScores",
                    stateVar: "priMaintTypeScore",
                  },
                  {
                    label: "Frequency of maintenance activity",
                    options: "asbestosPriMaintFreqScores",
                    stateVar: "priMaintFreqScore",
                  },
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>
                        {e.label}
                      </InputLabel>
=======
                                  [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label
                                  })
                                })
                            )
                          })}
                      </div>
                    </div>
                  )
                })}

                <InputLabel className={classes.marginTopSmall}>Maintenance</InputLabel>

                {[
                  {
                    label: 'Type of maintenance activity',
                    options: 'asbestosPriMaintTypeScores',
                    stateVar: 'priMaintTypeScore'
                  },
                  {
                    label: 'Frequency of maintenance activity',
                    options: 'asbestosPriMaintFreqScores',
                    stateVar: 'priMaintFreqScore'
                  }
                ].map((e) => {
                  return (
                    <div>
                      <InputLabel className={classes.marginTopSmall}>{e.label}</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      <div className={classes.flexRow}>
                        {this.props[e.options] &&
                          this.props[e.options].map((res) => {
                            return ScoreButton(
<<<<<<< HEAD
                              classes[
                                `colorsButton${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
                              classes[
                                `colorsDiv${
                                  this.state[e.stateVar] === res.label
                                    ? res.color
                                    : "Off"
                                }`
                              ],
=======
                              classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                              classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              res.label,
                              res.tooltip,
                              () =>
                                this.setState({
<<<<<<< HEAD
                                  [e.stateVar]:
                                    this.state[e.stateVar] === res.label
                                      ? null
                                      : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]:
                                      this.state[e.stateVar] === res.label
                                        ? null
                                        : res.label,
                                  }),
                                })
                            );
                          })}
                      </div>
                    </div>
                  );
=======
                                  [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label,
                                  priorityRisk: getPriorityRisk({
                                    ...this.state,
                                    [e.stateVar]: this.state[e.stateVar] === res.label ? null : res.label
                                  })
                                })
                            )
                          })}
                      </div>
                    </div>
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}

                <div className={classes.flexRowSpread}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.immediateRisk || false}
<<<<<<< HEAD
                        onChange={(e) =>
                          this.setState({ immediateRisk: e.target.checked })
                        }
                      />
                    }
                    label="Material is immediate health risk"
=======
                        onChange={(e) => this.setState({ immediateRisk: e.target.checked })}
                      />
                    }
                    label='Material is immediate health risk'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.labelImmediately || false}
<<<<<<< HEAD
                        onChange={(e) =>
                          this.setState({ labelImmediately: e.target.checked })
                        }
                      />
                    }
                    label="Material must be labelled"
=======
                        onChange={(e) => this.setState({ labelImmediately: e.target.checked })}
                      />
                    }
                    label='Material must be labelled'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.sealImmediately || false}
<<<<<<< HEAD
                        onChange={(e) =>
                          this.setState({ sealImmediately: e.target.checked })
                        }
                      />
                    }
                    label="Material must be sealed/encapsulated immediately"
=======
                        onChange={(e) => this.setState({ sealImmediately: e.target.checked })}
                      />
                    }
                    label='Material must be sealed/encapsulated immediately'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  />
                </div>

                {this.state.materialRisk && (
                  <div
<<<<<<< HEAD
                    className={
                      classes[`totalDiv${this.state.materialRisk.color}`]
                    }
=======
                    className={classes[`totalDiv${this.state.materialRisk.color}`]}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >{`Material Risk: ${this.state.materialRisk.text} (${this.state.materialRisk.score})`}</div>
                )}

                {this.state.priorityRisk && (
                  <div
<<<<<<< HEAD
                    className={
                      classes[`totalDiv${this.state.priorityRisk.color}`]
                    }
=======
                    className={classes[`totalDiv${this.state.priorityRisk.color}`]}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >{`Priority Risk: ${this.state.priorityRisk.text} (${this.state.priorityRisk.score})`}</div>
                )}

                {totalRisk && (
<<<<<<< HEAD
                  <div
                    className={classes[`totalDiv${totalRisk.color}`]}
                  >{`Combined Risk: ${totalRisk.text} (${totalRisk.score})`}</div>
=======
                  <div className={classes[`totalDiv${totalRisk.color}`]}>{`Combined Risk: ${totalRisk.text} (${totalRisk.score})`}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                )}
              </div>
            )}

<<<<<<< HEAD
            <InputLabel className={classes.marginTopSmall}>
              Thumbnail Image
            </InputLabel>
=======
            <InputLabel className={classes.marginTopSmall}>Thumbnail Image</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            {this.state.acmImageUrl && (
              <div className={classes.marginTopSmall}>
                <img
                  src={this.state.acmImageUrl}
<<<<<<< HEAD
                  alt=""
                  width="200px"
                  style={{
                    opacity: "0.5",
                    borderStyle: "solid",
                    borderWidth: "2px",
=======
                  alt=''
                  width='200px'
                  style={{
                    opacity: '0.5',
                    borderStyle: 'solid',
                    borderWidth: '2px'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
                <IconButton
                  style={{
<<<<<<< HEAD
                    position: "relative",
                    top: "2px",
                    left: "-120px",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    fontSize: 8,
                  }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete the image?"
                      )
                    )
                      this.deleteImage();
=======
                    position: 'relative',
                    top: '2px',
                    left: '-120px',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    fontSize: 8
                  }}
                  onClick={() => {
                    if (window.confirm('Are you sure you wish to delete the image?')) this.deleteImage()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                >
                  <Close />
                </IconButton>
              </div>
            )}
            <label>
<<<<<<< HEAD
              <UploadIcon
                className={classNames(classes.hoverCursor, classes.colorAccent)}
              />
              <input
                id="attr_upload_file"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  if (this.state.acmImageUrl) {
                    storage.ref(this.state.acmImageRef).delete();
                  }
                  this.props.onUploadFile({
                    file: e.currentTarget.files[0],
                    storagePath: "sites/",
                    prefix: "siteImage",
                    imageQuality: 30,
                    imageHeight: 100,
                  });
                }}
              />
              <LinearProgress
                className={classes.formInputLarge}
                variant="determinate"
                value={modalProps.uploadProgress}
              />
=======
              <UploadIcon className={classNames(classes.hoverCursor, classes.colorAccent)} />
              <input
                id='attr_upload_file'
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (this.state.acmImageUrl) {
                    storage.ref(this.state.acmImageRef).delete()
                  }
                  this.props.onUploadFile({
                    file: e.currentTarget.files[0],
                    storagePath: 'sites/',
                    prefix: 'siteImage',
                    imageQuality: 30,
                    imageHeight: 100
                  })
                }}
              />
              <LinearProgress className={classes.formInputLarge} variant='determinate' value={modalProps.uploadProgress} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </label>

            {/*<InputLabel className={classes.marginTopSmall}>Thumbnail Image</InputLabel>
            {this.state.siteImageUrl && (
              <div className={classes.marginTopSmall}>
                <img
                  src={this.state.acmImageUrl}
                  alt=""
                  width="200px"
                  style={{
                    opacity: "0.5",
                    borderStyle: "solid",
                    borderWidth: "2px"
                  }}
                />
                <IconButton
                  style={{
                    position: "relative",
                    top: "2px",
                    left: "-120px",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    fontSize: 8
                  }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete the image?"
                      )
                    )
                      this.deleteImage();
                  }}
                >
                  <Close />
                </IconButton>
              </div>
            )}
            <label>
              <UploadIcon className={classNames(classes.hoverCursor, classes.colorAccent)} />
              <input
                id="attr_upload_file"
                type="file"
                style={{ display: "none" }}
                onChange={e => {
                  if (this.state.acmImageUrl) {
                    storage.ref(this.state.acmImageRef).delete();
                  }
                  this.props.onUploadFile({
                    file: e.currentTarget.files[0],
                    storagePath: "sites/",
                    prefix: 'siteImage',
                    imageQuality: 30,
                    imageHeight: 100,
                  });
                }}
              />
              <LinearProgress
                className={classes.formInputLarge}
                variant="determinate"
                value={modalProps.uploadProgress}
              />
            </label>*/}
          </CardContent>
        )}
      </Card>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AcmCard)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AcmCard))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
