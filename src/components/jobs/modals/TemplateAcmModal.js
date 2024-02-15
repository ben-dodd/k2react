<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import moment from "moment";
// import store from '../../store';
import { TEMPLATE_ACM } from "../../../constants/modal-types";
import { sitesRef, storage, templateAcmRef } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
// import Geosuggest from 'react-geosuggest';
import ImageUploader from "react-images-upload";
import ImageTools from "../../../config/ImageTools";
import SuggestionField from "../../../widgets/SuggestionField";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import UploadIcon from "@material-ui/icons/CloudUpload";
import Go from "@material-ui/icons/ArrowForwardIos";
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
import {
  getMaterialRisk,
  getPriorityRisk,
  getTotalRisk,
} from "../../../actions/asbestosReportHelpers";
import { getUserAttrs } from "../../../actions/local";
import {
  sendSlackMessage,
  numericAndLessThanOnly,
  quillModules,
  dateOf,
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
import { TEMPLATE_ACM } from '../../../constants/modal-types'
import { storage, templateAcmRef } from '../../../config/firebase'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import LinearProgress from '@material-ui/core/LinearProgress'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import SuggestionField from '../../../widgets/SuggestionField'

import UploadIcon from '@material-ui/icons/CloudUpload'
import Close from '@material-ui/icons/Close'
import { hideModal, handleModalChange, handleModalSubmit, resetModal, onUploadFile, setModalError } from '../../../actions/modal'
import { fetchSites } from '../../../actions/jobs'
import { getSampleColors, updateResultMap, writeDescription } from '../../../actions/asbestosLab'
import { getMaterialRisk, getPriorityRisk, getTotalRisk } from '../../../actions/asbestosReportHelpers'
import { getUserAttrs } from '../../../actions/local'
import { sendSlackMessage, numericAndLessThanOnly, quillModules, dateOf } from '../../../actions/helpers'
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
=======
    onUploadFile: (file, pathRef, prefix, imageQuality) => dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef))
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class TemplateAcmModal extends React.Component {
  state = {
    asbestosType: {
      ch: true,
      am: true,
<<<<<<< HEAD
      cr: true,
    },
  };

  deleteImage = () => {
    storage.ref(this.state.acmImageRef).delete();
    this.setState({ acmImageUrl: null, acmImageRef: null });
  };

  loadTemplate = () => {
    if (this.props.doc) {
      this.setState(this.props.doc);
    }
  };

  handleAsbestosType = (res) => {
    this.setState({
      asbestosType: updateResultMap(res, this.state.asbestosType),
    });
  };

  render() {
    const { modalProps, doc, classes } = this.props;
    const colors = getSampleColors({ result: this.state.asbestosType });
    const totalRisk =
      this.state.priorityRisk &&
      this.state.materialRisk &&
      this.state.materialRisk.color
        ? getTotalRisk(this.state.materialRisk, this.state.priorityRisk)
        : null;
=======
      cr: true
    }
  }

  deleteImage = () => {
    storage.ref(this.state.acmImageRef).delete()
    this.setState({ acmImageUrl: null, acmImageRef: null })
  }

  loadTemplate = () => {
    if (this.props.doc) {
      this.setState(this.props.doc)
    }
  }

  handleAsbestosType = (res) => {
    this.setState({
      asbestosType: updateResultMap(res, this.state.asbestosType)
    })
  }

  render() {
    const { modalProps, doc, classes } = this.props
    const colors = getSampleColors({ result: this.state.asbestosType })
    const totalRisk =
      this.state.priorityRisk && this.state.materialRisk && this.state.materialRisk.color
        ? getTotalRisk(this.state.materialRisk, this.state.priorityRisk)
        : null
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    return (
      <Dialog
        open={this.props.modalType === TEMPLATE_ACM}
        onClose={this.props.hideModal}
        onEnter={this.loadTemplate}
        fullWidth
<<<<<<< HEAD
        maxWidth={"sm"}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add ACM Template"}
        </DialogTitle>
=======
        maxWidth={'sm'}
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add ACM Template'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>
          <InputLabel>Template Name</InputLabel>
          <TextField
            value={
              this.state.templateName
                ? this.state.templateName
                : this.state.description && this.state.material
<<<<<<< HEAD
                ? `${this.state.description} ${this.state.material}`
                : this.state.description
                ? this.state.description
                : this.state.material
                ? this.state.material
                : ""
            }
            onChange={(e) => this.setState({ templateName: e.target.value })}
          />
          <InputLabel className={classes.marginTopSmall}>
            Item Description
          </InputLabel>
          <SuggestionField
            that={this}
            suggestions="descriptionSuggestions"
            value={this.state.description || ""}
            controlled
            onModify={(value) => this.setState({ description: value })}
          />
          <Tooltip title="Write item before material (e.g. pipework lagging), otherwise material will be written first (e.g. cement sheet soffits)">
=======
                  ? `${this.state.description} ${this.state.material}`
                  : this.state.description
                    ? this.state.description
                    : this.state.material
                      ? this.state.material
                      : ''
            }
            onChange={(e) => this.setState({ templateName: e.target.value })}
          />
          <InputLabel className={classes.marginTopSmall}>Item Description</InputLabel>
          <SuggestionField
            that={this}
            suggestions='descriptionSuggestions'
            value={this.state.description || ''}
            controlled
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
                  this.setState({ category: e.value });
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
                  this.setState({ category: e.value })
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
                color: "Bad",
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
                color: 'Bad',
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            })}
          </div>

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
                value={
                  this.state.acmRemovalJob
                    ? {
                        value: this.state.acmRemovalJob,
<<<<<<< HEAD
                        label: `${this.state.acmRemovalJob.referenceNumber} ${
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
                  this.props.sites[this.props.site].clearances
                    ? Object.values(
                        this.props.sites[this.props.site].clearances
                      ).map((e) => ({
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
                  this.props.sites && this.props.sites[this.props.site] && this.props.sites[this.props.site].clearances
                    ? Object.values(this.props.sites[this.props.site].clearances).map((e) => ({
                        value: e,
                        label: `${e.referenceNumber} ${e.asbestosRemovalist} (${moment(dateOf(e.removalDate)).format('D MMM YYYY')})`
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }))
                    : []
                }
                onChange={(e) => {
<<<<<<< HEAD
                  this.setState({ acmRemovalJob: e.value });
=======
                  this.setState({ acmRemovalJob: e.value })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            </div>
          )}

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
                      this.state.accessibility === res.label ? res.color : "Off"
                    }`
                  ],
                  classes[
                    `colorsDiv${
                      this.state.accessibility === res.label ? res.color : "Off"
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
                    Presumed Asbestos Type
                  </InputLabel>
                  <div className={classes.flexRow}>
                    {["ch", "am", "cr"].map((res) => {
                      return AsbButton(
                        classes[`colorsButton${colors[res]}`],
                        classes[`colorsDiv${colors[res]}`],
                        res,
                        () => this.handleAsbestosType(res)
                      );
=======
                  <InputLabel className={classes.marginTopSmall}>Presumed Asbestos Type</InputLabel>
                  <div className={classes.flexRow}>
                    {['ch', 'am', 'cr'].map((res) => {
                      return AsbButton(classes[`colorsButton${colors[res]}`], classes[`colorsDiv${colors[res]}`], res, () =>
                        this.handleAsbestosType(res)
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              onModify={(value) => this.setState({ whyNotSampled: value })}
            />
          )}

<<<<<<< HEAD
          <InputLabel className={classes.marginTopSmall}>
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
          />

          <InputLabel className={classes.marginTopSmall}>
            Basic Primary Management
          </InputLabel>
=======
          <InputLabel className={classes.marginTopSmall}>Comment for Report</InputLabel>
          {/* <ReactQuill
            value={this.state.comment || ''}
            modules={quillModules}
            className={classes.marginBottomMedium}
            theme='snow'
            onChange={(content, delta, source) => {
              if (source === 'user') this.setState({ comment: content })
            }}
          /> */}

          <InputLabel className={classes.marginTopSmall}>Basic Primary Management</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Select
            className={classes.selectTight}
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
              this.setState({ managementPrimary: e.value });
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
              this.setState({ managementPrimary: e.value })
            }}
          />

          <InputLabel className={classes.marginTopSmall}>Basic Secondary Management</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Select
            className={classes.selectTight}
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
              this.setState({ managementSecondary: e.value });
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
              this.setState({ managementSecondary: e.value })
            }}
          />

          <InputLabel className={classes.marginTopSmall}>Removal Licence Required</InputLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Select
            className={classes.selectTight}
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
              this.setState({ removalLicenceRequired: e.value });
            }}
          />

          <InputLabel className={classes.marginTopSmall}>
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
          />

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
                    label: this.state.removalLicenceRequired
                  }
                : { value: '', label: '' }
            }
            options={['Class A', 'Class B', 'Unlicensed'].map((e) => ({
              value: e,
              label: e
            }))}
            onChange={(e) => {
              this.setState({ removalLicenceRequired: e.value })
            }}
          />

          <InputLabel className={classes.marginTopSmall}>Management Recommendations</InputLabel>
          {/* <ReactQuill
            value={this.state.recommendations || ''}
            modules={quillModules}
            theme='snow'
            className={classes.marginBottomMedium}
            onChange={(content, delta, source) => {
              if (source === 'user') this.setState({ recommendations: content })
            }}
          /> */}

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
              className={classes[`totalDiv${this.state.materialRisk.color}`]}
            >{`Material Risk: ${this.state.materialRisk.text} (${this.state.materialRisk.score})`}</div>
          )}

          {this.state.priorityRisk && (
            <div
              className={classes[`totalDiv${this.state.priorityRisk.color}`]}
            >{`Priority Risk: ${this.state.priorityRisk.text} (${this.state.priorityRisk.score})`}</div>
          )}

          {totalRisk && (
<<<<<<< HEAD
            <div
              className={classes[`totalDiv${totalRisk.color}`]}
            >{`Combined Risk: ${totalRisk.text} (${totalRisk.score})`}</div>
          )}

          <InputLabel className={classes.marginTopSmall}>
            Thumbnail Image
          </InputLabel>
=======
            <div className={classes[`totalDiv${totalRisk.color}`]}>{`Combined Risk: ${totalRisk.text} (${totalRisk.score})`}</div>
          )}

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
                    window.confirm("Are you sure you wish to delete the image?")
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
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.resetModal} color="secondary">
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
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.resetModal} color='secondary'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            Cancel
          </Button>
          <Button
            onClick={() =>
              this.props.handleModalSubmit({
                doc: this.state,
                pathRef: templateAcmRef,
<<<<<<< HEAD
                docid: "random",
              })
            }
            color="primary"
=======
                docid: 'random'
              })
            }
            color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TemplateAcmModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TemplateAcmModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
