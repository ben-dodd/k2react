<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import classNames from "classnames";
import { ASBESTOS_SAMPLE_EDIT_COC } from "../../../constants/modal-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import { AsbButton } from "../../../widgets/FormWidgets";
import { DateTimePicker } from "@material-ui/pickers";

import Select from "react-select";

import SuggestionField from "../../../widgets/SuggestionField";
import { hideModalSecondary, handleModalChange } from "../../../actions/modal";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { ASBESTOS_SAMPLE_EDIT_COC } from '../../../constants/modal-types'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import InputAdornment from '@material-ui/core/InputAdornment'
import Tooltip from '@material-ui/core/Tooltip'
import { AsbButton } from '../../../widgets/FormWidgets'
import { DateTimePicker } from '@material-ui/pickers'

import Select from 'react-select'

import SuggestionField from '../../../widgets/SuggestionField'
import { hideModalSecondary, handleModalChange } from '../../../actions/modal'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  handleSampleChange,
  writeDescription,
  getAirSampleData,
  updateResultMap,
  getSampleColors,
  getBasicResult
<<<<<<< HEAD
} from "../../../actions/asbestosLab";
import { addLog } from "../../../actions/local";
import {
  sentenceCase,
  titleCase,
  personnelConvert,
  numericOnly,
  dateOf
} from "../../../actions/helpers";
import { SampleRadioSelector } from "../../../widgets/FormWidgets";
import NumberSpinner from "../../../widgets/NumberSpinner";
import _ from "lodash";

import { DatePicker } from "@material-ui/pickers";

const mapStateToProps = state => {
=======
} from '../../../actions/asbestosLab'
import { addLog } from '../../../actions/local'
import { sentenceCase, titleCase, personnelConvert, numericOnly, dateOf } from '../../../actions/helpers'
import { SampleRadioSelector } from '../../../widgets/FormWidgets'
import NumberSpinner from '../../../widgets/NumberSpinner'
import _ from 'lodash'

import { DatePicker } from '@material-ui/pickers'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    modalType: state.modal.modalTypeSecondary,
    modalProps: state.modal.modalPropsSecondary,
    modalPropsMain: state.modal.modalProps,
    genericLocationSuggestions: state.const.genericLocationSuggestions,
    specificLocationSuggestions: state.const.specificLocationSuggestions,
    descriptionSuggestions: state.const.asbestosDescriptionSuggestions,
    materialSuggestions: state.const.asbestosMaterialSuggestions,
    asbestosMaterialCategories: state.const.asbestosMaterialCategories,
    me: state.local.me,
    samples: state.asbestosLab.samples
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModalSecondary()),
    handleModalChange: target => dispatch(handleModalChange(target)),
    handleSampleChange: (number, changes) =>
      dispatch(handleSampleChange(number, changes))
  };
};
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModalSecondary()),
    handleModalChange: (target) => dispatch(handleModalChange(target)),
    handleSampleChange: (number, changes) => dispatch(handleSampleChange(number, changes))
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const actionInit = {
  modified: false,
  sampleDelete: false,
  sampleDoSwap: false,
<<<<<<< HEAD
  sampleSwap: ""
};
=======
  sampleSwap: ''
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const stateInit = {
  sample: {},
  doc: {},
  genericLocationSuggestions: [],
  specificLocationSuggestions: [],
  descriptionSuggestions: [],
  materialSuggestions: []
<<<<<<< HEAD
};

class AsbestosSampleCocEditModal extends React.PureComponent {
  state = { ...stateInit, ...actionInit };

  loadProps = () => {
    if (this.props.modalProps) {
      let samples = {};
      if (
        this.props.samples &&
        this.props.samples[this.props.modalProps.doc.uid]
      ) {
        Object.values(
          this.props.samples[this.props.modalProps.doc.uid]
        ).forEach(s => {
          if (s.cocUid === this.props.modalProps.doc.uid)
            samples[s.sampleNumber] = s;
        });
=======
}

class AsbestosSampleCocEditModal extends React.PureComponent {
  state = { ...stateInit, ...actionInit }

  loadProps = () => {
    if (this.props.modalProps) {
      let samples = {}
      if (this.props.samples && this.props.samples[this.props.modalProps.doc.uid]) {
        Object.values(this.props.samples[this.props.modalProps.doc.uid]).forEach((s) => {
          if (s.cocUid === this.props.modalProps.doc.uid) samples[s.sampleNumber] = s
        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
      this.setState({
        sample: this.props.modalProps.sample,
        sampleSwap: this.props.modalProps.sample.sampleNumber,
        samples
<<<<<<< HEAD
      });
    }
  };

  saveAndHide = () => {
    //console.log('Hiding');
    this.setState(stateInit);
    // console.log('on exit ' + this.state.modified);
    this.props.modalProps.onExit(true);
    // this.props.modalProps.onExit(this.state.modified);
    this.props.hideModal();
  };

  deleteSample = onComplete => {
    const { me, modalProps } = this.props;
    const { sample, samples } = this.state;
    let log = {
      type: "Delete",
      log: `Sample ${sample.jobNumber}-${
        sample.sampleNumber
      } (${writeDescription(sample)}) deleted.`,
      chainOfCustody: sample.cocUid,
      sample: sample.uid
    };
    addLog("asbestosLab", log, me);
=======
      })
    }
  }

  saveAndHide = () => {
    //console.log('Hiding');
    this.setState(stateInit)
    // console.log('on exit ' + this.state.modified);
    this.props.modalProps.onExit(true)
    // this.props.modalProps.onExit(this.state.modified);
    this.props.hideModal()
  }

  deleteSample = (onComplete) => {
    const { me, modalProps } = this.props
    const { sample, samples } = this.state
    let log = {
      type: 'Delete',
      log: `Sample ${sample.jobNumber}-${sample.sampleNumber} (${writeDescription(sample)}) deleted.`,
      chainOfCustody: sample.cocUid,
      sample: sample.uid
    }
    addLog('asbestosLab', log, me)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // this.props.handleSampleChange(parseInt(sample.sampleNumber) - 1, {deleted: true});
    // Set sample DELETED flag to true

    let newSamples = {
      ...samples,
      [sample.sampleNumber]: {
        ...sample,
        deleted: true
      }
<<<<<<< HEAD
    };
    // delete newSamples[this.state.sampleEditModal.sampleNumber];
    this.props.handleModalChange({
      id: "samples",
      value: newSamples,
      cocUid: modalProps.doc.uid
    });
    this.setState({ modified: true });
    onComplete();
  };

  moveSample = onComplete => {
    const { me, modalProps } = this.props;
    const { sample, samples } = this.state;
    let log = {
      type: "ID Change",
      log: `Sample ${sample.jobNumber}-${
        sample.sampleNumber
      } (${writeDescription(sample)}) moved to sample number ${
=======
    }
    // delete newSamples[this.state.sampleEditModal.sampleNumber];
    this.props.handleModalChange({
      id: 'samples',
      value: newSamples,
      cocUid: modalProps.doc.uid
    })
    this.setState({ modified: true })
    onComplete()
  }

  moveSample = (onComplete) => {
    const { me, modalProps } = this.props
    const { sample, samples } = this.state
    let log = {
      type: 'ID Change',
      log: `Sample ${sample.jobNumber}-${sample.sampleNumber} (${writeDescription(sample)}) moved to sample number ${
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        sample.jobNumber
      }-${this.state.sampleSwap}.`,
      chainOfCustody: sample.cocUid,
      sample: sample.uid
<<<<<<< HEAD
    };
    addLog("asbestosLab", log, me);
=======
    }
    addLog('asbestosLab', log, me)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let newSamples = {
      ...samples,
      [this.state.sampleSwap]: {
        ...sample,
        sampleNumber: this.state.sampleSwap,
        verified: false
      }
<<<<<<< HEAD
    };

    delete newSamples[sample.sampleNumber];
    this.props.handleModalChange({
      id: "samples",
      value: newSamples,
      cocUid: modalProps.doc.uid
    });
    this.setState({ modified: true });
    onComplete();
  };

  swapSample = onComplete => {
    const { me, modalProps } = this.props;
    const { sample, samples } = this.state;
    let log = {
      type: "ID Change",
      log: `Samples ${sample.jobNumber}-${
        sample.sampleNumber
      } (${writeDescription(sample)}) and ${sample.jobNumber}-${
=======
    }

    delete newSamples[sample.sampleNumber]
    this.props.handleModalChange({
      id: 'samples',
      value: newSamples,
      cocUid: modalProps.doc.uid
    })
    this.setState({ modified: true })
    onComplete()
  }

  swapSample = (onComplete) => {
    const { me, modalProps } = this.props
    const { sample, samples } = this.state
    let log = {
      type: 'ID Change',
      log: `Samples ${sample.jobNumber}-${sample.sampleNumber} (${writeDescription(sample)}) and ${sample.jobNumber}-${
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        this.state.sampleSwap
      } (${writeDescription(samples[this.state.sampleSwap])}) swapped numbers.`,
      chainOfCustody: sample.cocUid,
      sample: sample.uid
<<<<<<< HEAD
    };
    addLog("asbestosLab", log, me);
    log = {
      type: "ID Change",
      log: `Samples ${sample.jobNumber}-${
        sample.sampleNumber
      } (${writeDescription(sample)}) and ${sample.jobNumber}-${
=======
    }
    addLog('asbestosLab', log, me)
    log = {
      type: 'ID Change',
      log: `Samples ${sample.jobNumber}-${sample.sampleNumber} (${writeDescription(sample)}) and ${sample.jobNumber}-${
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        this.state.sampleSwap
      } (${writeDescription(samples[this.state.sampleSwap])}) swapped numbers.`,
      chainOfCustody: sample.cocUid,
      sample: samples[this.state.sampleSwap].uid
<<<<<<< HEAD
    };
    addLog("asbestosLab", log, me);
=======
    }
    addLog('asbestosLab', log, me)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    let newSamples = {
      ...samples,
      [this.state.sampleSwap]: {
        ...sample,
        sampleNumber: this.state.sampleSwap,
        verified: false
      },
      [sample.sampleNumber]: {
        ...samples[this.state.sampleSwap],
        sampleNumber: sample.sampleNumber,
        verified: false
      }
<<<<<<< HEAD
    };

    this.props.handleModalChange({
      id: "samples",
      value: newSamples,
      cocUid: modalProps.doc.uid
    });
    this.setState({ modified: true });
    onComplete();
  };

  saveSample = onComplete => {
    const { sample, samples } = this.state;
    const { modalProps } = this.props;
    if (sample) {
      let calcs = {};
      if (
        (sample.initialFlowRate && sample.finalFlowRate) ||
        (sample.startTime && sample.endTime)
      )
        calcs = getAirSampleData(sample);
      console.log(
        _.isEqual(
          { ...sample, ...calcs },
          this.props.samples[sample.cocUid][sample.sampleNumber]
        )
      );
      let log = {};
      if (
        this.state.sampleDelete &&
        window.confirm("Are you sure you wish to delete this sample?")
      ) {
        // Delete sample
        this.deleteSample(onComplete);
        // //console.log(doc.samples);
      } else if (this.state.sampleDoSwap) {
        if (this.state.sampleSwap === "") {
          window.alert("You have not selected a sample number to move to.");
        } else if (this.state.sampleSwap < 1) {
          window.alert("Sample numbers must be a positive integer.");
        } else if (
          samples[this.state.sampleSwap] === undefined &&
          window.confirm(
            `Are you sure you wish to move this sample to number ${this.state.sampleSwap}`
          )
        ) {
          // Move to sample number
          this.moveSample(onComplete);
=======
    }

    this.props.handleModalChange({
      id: 'samples',
      value: newSamples,
      cocUid: modalProps.doc.uid
    })
    this.setState({ modified: true })
    onComplete()
  }

  saveSample = (onComplete) => {
    const { sample, samples } = this.state
    const { modalProps } = this.props
    if (sample) {
      let calcs = {}
      if ((sample.initialFlowRate && sample.finalFlowRate) || (sample.startTime && sample.endTime)) calcs = getAirSampleData(sample)
      console.log(_.isEqual({ ...sample, ...calcs }, this.props.samples[sample.cocUid][sample.sampleNumber]))
      let log = {}
      if (this.state.sampleDelete && window.confirm('Are you sure you wish to delete this sample?')) {
        // Delete sample
        this.deleteSample(onComplete)
        // //console.log(doc.samples);
      } else if (this.state.sampleDoSwap) {
        if (this.state.sampleSwap === '') {
          window.alert('You have not selected a sample number to move to.')
        } else if (this.state.sampleSwap < 1) {
          window.alert('Sample numbers must be a positive integer.')
        } else if (
          samples[this.state.sampleSwap] === undefined &&
          window.confirm(`Are you sure you wish to move this sample to number ${this.state.sampleSwap}`)
        ) {
          // Move to sample number
          this.moveSample(onComplete)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        } else if (
          samples[this.state.sampleSwap] !== undefined &&
          window.confirm(
            `There is already a sample using that sample number. Do you wish to swap sample ${
              this.state.sample.sampleNumber
<<<<<<< HEAD
            } with sample ${this.state.sampleSwap} (${writeDescription(
              samples[this.state.sampleSwap]
            )})?`
          )
        ) {
          // Swap sample number
          this.swapSample(onComplete);
          // //console.log(doc.samples);
        } else if (
          samples[this.state.sampleSwap] !== undefined &&
          samples[this.state.sampleSwap]["cocUid"] !== modalProps.doc.uid
        ) {
          window.alert(
            "You cannot move this sample to that sample number as it is being used by a sample in a different Chain of Custody."
          );
        }
      } else {
        if (
          sample.uid &&
          !_.isEqual(
            { ...sample, ...calcs },
            this.props.samples[sample.cocUid][sample.sampleNumber]
          )
        ) {
          log = {
            type: "Edit",
=======
            } with sample ${this.state.sampleSwap} (${writeDescription(samples[this.state.sampleSwap])})?`
          )
        ) {
          // Swap sample number
          this.swapSample(onComplete)
          // //console.log(doc.samples);
        } else if (samples[this.state.sampleSwap] !== undefined && samples[this.state.sampleSwap]['cocUid'] !== modalProps.doc.uid) {
          window.alert('You cannot move this sample to that sample number as it is being used by a sample in a different Chain of Custody.')
        }
      } else {
        if (sample.uid && !_.isEqual({ ...sample, ...calcs }, this.props.samples[sample.cocUid][sample.sampleNumber])) {
          log = {
            type: 'Edit',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            log: `Details of sample ${this.state.sample.jobNumber}-${
              this.state.sample.sampleNumber
            } (${writeDescription(this.state.sample)}) modified.`,
            sample: sample.uid,
            chainOfCustody: sample.cocUid
<<<<<<< HEAD
          };
          addLog("asbestosLab", log, this.props.me);
          let i = parseInt(sample.sampleNumber) - 1;
          console.log(this.state.sample);
          if (sample.sampleType === "air")
            this.props.handleSampleChange(i, { ...sample, ...calcs });
          else
            this.props.handleSampleChange(i, {
              verified: false,
              genericLocation: sample.genericLocation
                ? sample.genericLocation
                : null,
              specificLocation: sample.specificLocation
                ? sample.specificLocation
                : null,
              category: sample.category ? sample.category : "Other",
=======
          }
          addLog('asbestosLab', log, this.props.me)
          let i = parseInt(sample.sampleNumber) - 1
          console.log(this.state.sample)
          if (sample.sampleType === 'air') this.props.handleSampleChange(i, { ...sample, ...calcs })
          else
            this.props.handleSampleChange(i, {
              verified: false,
              genericLocation: sample.genericLocation ? sample.genericLocation : null,
              specificLocation: sample.specificLocation ? sample.specificLocation : null,
              category: sample.category ? sample.category : 'Other',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              description: sample.description ? sample.description : null,
              material: sample.material ? sample.material : null,
              sampleDate: sample.sampleDate ? sample.sampleDate : null,
              sampledBy: sample.sampledBy ? sample.sampledBy : null,
<<<<<<< HEAD
              samplingMethod: sample.samplingMethod
                ? sample.samplingMethod
                : null,
              sampleQuantity: sample.sampleQuantity
                ? sample.sampleQuantity
                : null
            });
=======
              samplingMethod: sample.samplingMethod ? sample.samplingMethod : null,
              sampleQuantity: sample.sampleQuantity ? sample.sampleQuantity : null
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        } else {
          // console.log(this.props.samples[sample.cocUid][sample.sampleNumber]);
          // console.log(sample);
        }
      }
    } else {
<<<<<<< HEAD
      console.log("No Sample");
    }
    onComplete();
  };

  previousSample = () => {
    let newSampleNumber = parseInt(this.state.sample.sampleNumber) - 1;
=======
      console.log('No Sample')
    }
    onComplete()
  }

  previousSample = () => {
    let newSampleNumber = parseInt(this.state.sample.sampleNumber) - 1
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (this.props.modalPropsMain.doc.samples[newSampleNumber]) {
      this.setState({
        sample: this.props.modalPropsMain.doc.samples[newSampleNumber],
        sampleSwap: newSampleNumber,
        ...actionInit
<<<<<<< HEAD
      });
=======
      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    } else {
      this.setState({
        sample: {
          sampleNumber: newSampleNumber,
          jobNumber: this.props.modalPropsMain.doc.jobNumber
        },
        sampleSwap: newSampleNumber,
        ...actionInit
<<<<<<< HEAD
      });
    }
  };

  nextSample = () => {
    let newSampleNumber = parseInt(this.state.sample.sampleNumber) + 1;
=======
      })
    }
  }

  nextSample = () => {
    let newSampleNumber = parseInt(this.state.sample.sampleNumber) + 1
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (this.props.modalPropsMain.doc.samples[newSampleNumber]) {
      this.setState({
        sample: this.props.modalPropsMain.doc.samples[newSampleNumber],
        sampleSwap: newSampleNumber,
        ...actionInit
<<<<<<< HEAD
      });
=======
      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    } else {
      this.setState({
        sample: {
          sampleNumber: newSampleNumber,
          jobNumber: this.props.modalPropsMain.doc.jobNumber
        },
        sampleSwap: newSampleNumber,
        ...actionInit
<<<<<<< HEAD
      });
    }
  };

  handleResultClick = res => {
    let newMap = updateResultMap(res, this.state.sample.result);
=======
      })
    }
  }

  handleResultClick = (res) => {
    let newMap = updateResultMap(res, this.state.sample.result)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    this.setState({
      modified: true,
      sample: {
        ...this.state.sample,
        result: newMap
      }
<<<<<<< HEAD
    });
  };

  render() {
    const { classes, modalProps, modalType, samples } = this.props;
    const { sample } = this.state;
    const disabled = sample.cocUid != modalProps.doc.uid;
    console.log(sample);

    let calcs = {};
    if (
      (sample.initialFlowRate && sample.finalFlowRate) ||
      (sample.startTime && sample.endTime)
    )
      calcs = getAirSampleData(sample);

    let colors = getSampleColors(sample);
    let basicResult = getBasicResult(sample);
=======
    })
  }

  render() {
    const { classes, modalProps, modalType, samples } = this.props
    const { sample } = this.state
    const disabled = sample.cocUid != modalProps.doc.uid
    console.log(sample)

    let calcs = {}
    if ((sample.initialFlowRate && sample.finalFlowRate) || (sample.startTime && sample.endTime)) calcs = getAirSampleData(sample)

    let colors = getSampleColors(sample)
    let basicResult = getBasicResult(sample)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    if (modalType === ASBESTOS_SAMPLE_EDIT_COC) {
      return (
        <Dialog
<<<<<<< HEAD
          maxWidth="sm"
          style={{ minHeight: 600 }}
          scroll="body"
=======
          maxWidth='sm'
          style={{ minHeight: 600 }}
          scroll='body'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          fullWidth={true}
          open={modalType === ASBESTOS_SAMPLE_EDIT_COC}
          onEnter={this.loadProps}
        >
          <DialogTitle>
            {sample && sample.jobNumber
<<<<<<< HEAD
              ? `Edit Sample ${sample.jobNumber}-${
                  sample.sampleNumber
                }: ${writeDescription(sample)}`
=======
              ? `Edit Sample ${sample.jobNumber}-${sample.sampleNumber}: ${writeDescription(sample)}`
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              : `Edit Sample`}
          </DialogTitle>
          <DialogContent>
            {sample && (
              <div>
<<<<<<< HEAD
                {sample.sampleType === "air" ? (
                  <div>
                    <SuggestionField
                      that={this}
                      label="Location"
                      suggestions="airLocationSuggestions"
                      value={sample.specificLocation}
                      controlled
                      disabled={disabled}
                      onModify={value => {
=======
                {sample.sampleType === 'air' ? (
                  <div>
                    <SuggestionField
                      that={this}
                      label='Location'
                      suggestions='airLocationSuggestions'
                      value={sample.specificLocation}
                      controlled
                      disabled={disabled}
                      onModify={(value) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...sample,
                            specificLocation: titleCase(value)
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                    <div className={classes.flexRow}>
                      <TextField
<<<<<<< HEAD
                        label="Initial Flow Rate"
                        value={
                          sample.initialFlowRate ? sample.initialFlowRate : ""
                        }
                        onChange={e => {
                          this.setState({
                            sample: {
                              ...sample,
                              initialFlowRate: numericOnly(
                                e.target.value.trim()
                              )
                            },
                            modified: true
                          });
=======
                        label='Initial Flow Rate'
                        value={sample.initialFlowRate ? sample.initialFlowRate : ''}
                        onChange={(e) => {
                          this.setState({
                            sample: {
                              ...sample,
                              initialFlowRate: numericOnly(e.target.value.trim())
                            },
                            modified: true
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      <div className={classes.spacerSmall} />
                      <TextField
<<<<<<< HEAD
                        label="Final Flow Rate"
                        value={sample.finalFlowRate ? sample.finalFlowRate : ""}
                        onChange={e => {
=======
                        label='Final Flow Rate'
                        value={sample.finalFlowRate ? sample.finalFlowRate : ''}
                        onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          this.setState({
                            sample: {
                              ...sample,
                              finalFlowRate: numericOnly(e.target.value.trim())
                            },
                            modified: true
<<<<<<< HEAD
                          });
=======
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      {sample.initialFlowRate && sample.finalFlowRate ? (
                        <div
                          className={
                            calcs.differenceTooHigh
                              ? classes.informationBoxError
                              : calcs.sampleRateLow || calcs.sampleRateHigh
<<<<<<< HEAD
                              ? classes.informationBoxWarning
                              : classes.informationBoxOk
                          }
                        >
                          {calcs.averageFlowRate
                            ? `${parseFloat(calcs.averageFlowRate).toFixed(
                                1
                              )} mL/min`
                            : ""}
=======
                                ? classes.informationBoxWarning
                                : classes.informationBoxOk
                          }
                        >
                          {calcs.averageFlowRate ? `${parseFloat(calcs.averageFlowRate).toFixed(1)} mL/min` : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>

                    <div className={classes.flexRowBottom}>
                      <div>
<<<<<<< HEAD
                        <InputLabel className={classes.marginTopSmall}>
                          Start Time
                        </InputLabel>
                        <DateTimePicker
                          value={dateOf(sample.startTime) || null}
                          autoOk
                          format="D/MM/YY, hh:mma"
                          disabled={disabled}
                          clearable
                          views={["hours", "minutes"]}
                          onChange={date => {
=======
                        <InputLabel className={classes.marginTopSmall}>Start Time</InputLabel>
                        <DateTimePicker
                          value={dateOf(sample.startTime) || null}
                          autoOk
                          format='D/MM/YY, hh:mma'
                          disabled={disabled}
                          clearable
                          views={['hours', 'minutes']}
                          onChange={(date) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            this.setState({
                              sample: {
                                ...sample,
                                startTime: dateOf(date)
                              },
                              modified: true
<<<<<<< HEAD
                            });
=======
                            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }}
                        />
                      </div>
                      <div className={classes.spacerSmall} />
                      <div>
<<<<<<< HEAD
                        <InputLabel className={classes.marginTopSmall}>
                          End Time
                        </InputLabel>
                        <DateTimePicker
                          value={dateOf(sample.endTime) || null}
                          autoOk
                          format="D/MM/YY, hh:mma"
                          disabled={disabled}
                          clearable
                          views={["hours", "minutes"]}
                          onChange={date => {
=======
                        <InputLabel className={classes.marginTopSmall}>End Time</InputLabel>
                        <DateTimePicker
                          value={dateOf(sample.endTime) || null}
                          autoOk
                          format='D/MM/YY, hh:mma'
                          disabled={disabled}
                          clearable
                          views={['hours', 'minutes']}
                          onChange={(date) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            this.setState({
                              sample: {
                                ...sample,
                                endTime: dateOf(date)
                              },
                              modified: true
<<<<<<< HEAD
                            });
=======
                            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }}
                        />
                      </div>
                      <div className={classes.spacerSmall} />
                      <TextField
<<<<<<< HEAD
                        value={
                          sample.totalRunTime
                            ? sample.totalRunTime
                            : calcs.runTime
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mins</InputAdornment>
                          )
                        }}
                        onChange={e => {
=======
                        value={sample.totalRunTime ? sample.totalRunTime : calcs.runTime}
                        InputProps={{
                          endAdornment: <InputAdornment position='end'>mins</InputAdornment>
                        }}
                        onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          this.setState({
                            sample: {
                              ...sample,
                              totalRunTime: numericOnly(e.target.value.trim())
                            },
                            modified: true
<<<<<<< HEAD
                          });
=======
                          })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        }}
                      />
                      {calcs.sampleVolume ? (
                        <div
                          className={
                            calcs.sampleVolumeMuchTooLow
                              ? classes.informationBoxError
                              : calcs.sampleVolumeTooLow
<<<<<<< HEAD
                              ? classes.informationBoxWarning
                              : classes.informationBoxOk
=======
                                ? classes.informationBoxWarning
                                : classes.informationBoxOk
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }
                        >
                          {`${parseFloat(calcs.sampleVolume).toFixed(1)}L`}
                        </div>
                      ) : (
<<<<<<< HEAD
                        ""
=======
                        ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      )}
                    </div>
                    {modalProps.doc.historicalCoc && (
                      <div className={classes.flexRow}>
                        <TextField
<<<<<<< HEAD
                          label="Fibre Count"
                          value={sample.fibreResult || ""}
                          onChange={e => {
=======
                          label='Fibre Count'
                          value={sample.fibreResult || ''}
                          onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            this.setState({
                              sample: {
                                ...sample,
                                fibreResult: numericOnly(e.target.value.trim())
                              },
                              modified: true
<<<<<<< HEAD
                            });
                          }}
                        />
                        {calcs.reportConcentration ? (
                          <div
                            className={
                              calcs.reportConcentration.includes("<")
                                ? classes.informationBoxOk
                                : classes.informationBoxError
                            }
                          >
                            {calcs.reportConcentration}
                          </div>
                        ) : (
                          ""
=======
                            })
                          }}
                        />
                        {calcs.reportConcentration ? (
                          <div className={calcs.reportConcentration.includes('<') ? classes.informationBoxOk : classes.informationBoxError}>
                            {calcs.reportConcentration}
                          </div>
                        ) : (
                          ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        )}
                      </div>
                    )}

                    {calcs.differenceTooHigh || calcs.sampleVolumeMuchTooLow ? (
                      <div className={classes.boldRed}>
                        {calcs.differenceTooHigh && (
<<<<<<< HEAD
                          <Tooltip title="The difference between flow rates is greater than 10 per cent. The sample must be rejected.">
                            <div>
                              Difference between flow rates is too high.
                            </div>
                          </Tooltip>
                        )}
                        {calcs.sampleVolumeMuchTooLow && (
                          <Tooltip title="Sample volumes of less than 100L are not recommended because of the increased loss of precision in the results obtained. They may also lead to higher reporting limits than may be desired.">
=======
                          <Tooltip title='The difference between flow rates is greater than 10 per cent. The sample must be rejected.'>
                            <div>Difference between flow rates is too high.</div>
                          </Tooltip>
                        )}
                        {calcs.sampleVolumeMuchTooLow && (
                          <Tooltip title='Sample volumes of less than 100L are not recommended because of the increased loss of precision in the results obtained. They may also lead to higher reporting limits than may be desired.'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>Sample volume too low to be accurate.</div>
                          </Tooltip>
                        )}
                      </div>
<<<<<<< HEAD
                    ) : calcs.sampleRateLow ||
                      calcs.sampleRateHigh ||
                      calcs.sampleVolumeTooLow ? (
                      <div className={classes.boldOrange}>
                        {calcs.sampleRateLow && (
                          <Tooltip title="Flow rates of less than 400 mL/min may preclude countable fibres from being collected from the airborne dust cloud.">
=======
                    ) : calcs.sampleRateLow || calcs.sampleRateHigh || calcs.sampleVolumeTooLow ? (
                      <div className={classes.boldOrange}>
                        {calcs.sampleRateLow && (
                          <Tooltip title='Flow rates of less than 400 mL/min may preclude countable fibres from being collected from the airborne dust cloud.'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>Flow rate lower than recommended.</div>
                          </Tooltip>
                        )}
                        {calcs.sampleRateHigh && (
<<<<<<< HEAD
                          <Tooltip title="Flow rates greater than 8000 mL/min may result in interference from excessively large particles and may also cause leakage problems for most available filter holders.">
=======
                          <Tooltip title='Flow rates greater than 8000 mL/min may result in interference from excessively large particles and may also cause leakage problems for most available filter holders.'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>Flow rate higher than recommended.</div>
                          </Tooltip>
                        )}
                        {calcs.sampleVolumeTooLow && (
<<<<<<< HEAD
                          <Tooltip title="Asbestos clearance air tests must have a sample volume of 360L or greater.">
=======
                          <Tooltip title='Asbestos clearance air tests must have a sample volume of 360L or greater.'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            <div>Sample volume too low for clearances.</div>
                          </Tooltip>
                        )}
                      </div>
                    ) : calcs.runTime && calcs.averageFlowRate ? (
<<<<<<< HEAD
                      <div className={classes.boldGreen}>
                        No Sampling Errors or Warnings
                      </div>
                    ) : (
                      ""
=======
                      <div className={classes.boldGreen}>No Sampling Errors or Warnings</div>
                    ) : (
                      ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    )}
                  </div>
                ) : (
                  <div>
                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      label="Generic Location"
                      suggestions="genericLocationSuggestions"
                      value={sample.genericLocation}
                      controlled
                      disabled={disabled}
                      onModify={value => {
=======
                      label='Generic Location'
                      suggestions='genericLocationSuggestions'
                      value={sample.genericLocation}
                      controlled
                      disabled={disabled}
                      onModify={(value) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...sample,
                            genericLocation: titleCase(value)
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      label="Specific Location"
                      suggestions="specificLocationSuggestions"
                      value={sample.specificLocation}
                      controlled
                      disabled={disabled}
                      onModify={value => {
=======
                      label='Specific Location'
                      suggestions='specificLocationSuggestions'
                      value={sample.specificLocation}
                      controlled
                      disabled={disabled}
                      onModify={(value) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...sample,
                            specificLocation: titleCase(value)
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      label="Description/Item"
                      suggestions="descriptionSuggestions"
                      value={sample.description}
                      controlled
                      disabled={disabled}
                      onModify={value => {
=======
                      label='Description/Item'
                      suggestions='descriptionSuggestions'
                      value={sample.description}
                      controlled
                      disabled={disabled}
                      onModify={(value) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...this.state.sample,
                            description: sentenceCase(value)
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <SuggestionField
                      that={this}
<<<<<<< HEAD
                      label="Material"
                      suggestions="materialSuggestions"
                      value={sample.material}
                      controlled
                      disabled={disabled}
                      onModify={value => {
                        let category = "";
                        if (sample.category) category = sample.category;
                        else {
                          let materialObj = Object.values(
                            this.props.materialSuggestions
                          ).filter(e => e.label === value);
                          if (materialObj.length > 0) {
                            category = materialObj[0].category;
=======
                      label='Material'
                      suggestions='materialSuggestions'
                      value={sample.material}
                      controlled
                      disabled={disabled}
                      onModify={(value) => {
                        let category = ''
                        if (sample.category) category = sample.category
                        else {
                          let materialObj = Object.values(this.props.materialSuggestions).filter((e) => e.label === value)
                          if (materialObj.length > 0) {
                            category = materialObj[0].category
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          }
                        }
                        this.setState({
                          sample: {
                            ...sample,
                            material: value,
                            category
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <Select
                      className={classes.select}
<<<<<<< HEAD
                      value={
                        sample.category
                          ? { value: sample.category, label: sample.category }
                          : { value: "", label: "" }
                      }
                      options={this.props.asbestosMaterialCategories.map(e => ({
=======
                      value={sample.category ? { value: sample.category, label: sample.category } : { value: '', label: '' }}
                      options={this.props.asbestosMaterialCategories.map((e) => ({
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value: e.label,
                        label: e.label
                      }))}
                      disabled={disabled}
<<<<<<< HEAD
                      onChange={e => {
=======
                      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...sample,
                            category: e.value
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <Select
                      isMulti
                      className={classes.select}
                      value={
                        sample.sampledBy
<<<<<<< HEAD
                          ? sample.sampledBy.map(e => ({
=======
                          ? sample.sampledBy.map((e) => ({
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                              value: e.uid,
                              label: e.name
                            }))
                          : []
                      }
<<<<<<< HEAD
                      options={modalProps.names.map(e => ({
=======
                      options={modalProps.names.map((e) => ({
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        value: e.uid,
                        label: e.name
                      }))}
                      disabled={disabled}
<<<<<<< HEAD
                      onChange={e => {
=======
                      onChange={(e) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...sample,
                            sampledBy: personnelConvert(e)
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />
                    <DatePicker
                      className={classes.columnMedSmall}
<<<<<<< HEAD
                      value={
                        sample.sampleDate ? sample.sampleDate.toDate() : null
                      }
                      autoOk
                      format="ddd, D MMMM YYYY"
                      clearable
                      disabled={disabled}
                      label="Sample Date"
                      onChange={date => {
=======
                      value={sample.sampleDate ? sample.sampleDate.toDate() : null}
                      autoOk
                      format='ddd, D MMMM YYYY'
                      clearable
                      disabled={disabled}
                      label='Sample Date'
                      onChange={(date) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sample: {
                            ...this.state.sample,
                            sampleDate: date
                          },
                          modified: true
<<<<<<< HEAD
                        });
=======
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                    />

                    <div className={classes.marginTopSmall}>
                      <InputLabel>Sampling Method</InputLabel>
<<<<<<< HEAD
                      {SampleRadioSelector(
                        this,
                        sample,
                        "samplingMethod",
                        "bulk",
                        "Sampling Method",
                        [
                          { value: "bulk", label: "Bulk" },
                          { value: "tape", label: "Tape" },
                          { value: "swab", label: "Swab" }
                        ]
                      )}
                    </div>
                    {(sample.samplingMethod === "tape" ||
                      sample.samplingMethod === "swab") && (
=======
                      {SampleRadioSelector(this, sample, 'samplingMethod', 'bulk', 'Sampling Method', [
                        { value: 'bulk', label: 'Bulk' },
                        { value: 'tape', label: 'Tape' },
                        { value: 'swab', label: 'Swab' }
                      ])}
                    </div>
                    {(sample.samplingMethod === 'tape' || sample.samplingMethod === 'swab') && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      <div>
                        <InputLabel>{`Number of ${sample.samplingMethod}s`}</InputLabel>
                        <NumberSpinner
                          min={1}
                          value={sample.sampleQuantity}
<<<<<<< HEAD
                          onChange={value =>
=======
                          onChange={(value) =>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                            this.setState({
                              sample: {
                                ...this.state.sample,
                                sampleQuantity: value
                              },
                              modified: true
                            })
                          }
                        />
                      </div>
                    )}

                    {modalProps.doc.historicalCoc && (
<<<<<<< HEAD
                      <div
                        className={classNames(
                          classes.flexRow,
                          classes.columnExtraLarge
                        )}
                      >
                        {["ch", "am", "cr", "umf", "no"].map(res => {
                          return AsbButton(
                            classes[`colorsButton${colors[res]}`],
                            classes[`colorsDiv${colors[res]}`],
                            res,
                            () => this.handleResultClick(res)
                          );
=======
                      <div className={classNames(classes.flexRow, classes.columnExtraLarge)}>
                        {['ch', 'am', 'cr', 'umf', 'no'].map((res) => {
                          return AsbButton(classes[`colorsButton${colors[res]}`], classes[`colorsDiv${colors[res]}`], res, () =>
                            this.handleResultClick(res)
                          )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        })}
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <div className={classes.flexRow}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.sampleDoSwap}
<<<<<<< HEAD
                          onChange={event => {
                            this.setState({
                              sampleDoSwap: !this.state.sampleDoSwap,
                              sampleDelete: false
                            });
                          }}
                          value="priority"
                          color="secondary"
                        />
                      }
                      label="Move Sample to Number"
=======
                          onChange={(event) => {
                            this.setState({
                              sampleDoSwap: !this.state.sampleDoSwap,
                              sampleDelete: false
                            })
                          }}
                          value='priority'
                          color='secondary'
                        />
                      }
                      label='Move Sample to Number'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    />
                    <NumberSpinner
                      min={1}
                      value={this.state.sampleSwap}
<<<<<<< HEAD
                      onChange={num =>
=======
                      onChange={(num) =>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        this.setState({
                          sampleSwap: num
                        })
                      }
                    />
                  </div>
                  <div className={classes.informationBox}>
<<<<<<< HEAD
                    {samples &&
                    samples[sample.cocUid] &&
                    samples[sample.cocUid][this.state.sampleSwap] !== undefined
                      ? writeDescription(
                          samples[sample.cocUid][this.state.sampleSwap]
                        )
                      : !this.state.sampleSwap
                      ? writeDescription(sample)
                      : "<EMPTY>"}
=======
                    {samples && samples[sample.cocUid] && samples[sample.cocUid][this.state.sampleSwap] !== undefined
                      ? writeDescription(samples[sample.cocUid][this.state.sampleSwap])
                      : !this.state.sampleSwap
                        ? writeDescription(sample)
                        : '<EMPTY>'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  </div>
                  <div className={classes.flexRow}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.sampleDelete}
<<<<<<< HEAD
                          onChange={event => {
                            this.setState({
                              sampleDelete: !this.state.sampleDelete,
                              sampleDoSwap: false
                            });
                          }}
                          value="priority"
                          color="secondary"
                        />
                      }
                      label="Delete Sample"
=======
                          onChange={(event) => {
                            this.setState({
                              sampleDelete: !this.state.sampleDelete,
                              sampleDoSwap: false
                            })
                          }}
                          value='priority'
                          color='secondary'
                        />
                      }
                      label='Delete Sample'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    />
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
          <DialogActions>
<<<<<<< HEAD
            <Button onClick={this.props.hideModal} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => this.saveSample(this.previousSample)}
              color="inherit"
              disabled={parseInt(sample.sampleNumber) === 1}
            >
=======
            <Button onClick={this.props.hideModal} color='secondary'>
              Cancel
            </Button>
            <Button onClick={() => this.saveSample(this.previousSample)} color='inherit' disabled={parseInt(sample.sampleNumber) === 1}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              Previous
            </Button>
            <Button
              onClick={() => {
<<<<<<< HEAD
                console.log(sample.specificLocation);
                this.saveSample(this.nextSample);
              }}
              color="secondary"
            >
              Next
            </Button>
            <Button
              onClick={() => this.saveSample(this.saveAndHide)}
              color="primary"
            >
=======
                console.log(sample.specificLocation)
                this.saveSample(this.nextSample)
              }}
              color='secondary'
            >
              Next
            </Button>
            <Button onClick={() => this.saveSample(this.saveAndHide)} color='primary'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              Submit
            </Button>
          </DialogActions>
        </Dialog>
<<<<<<< HEAD
      );
    } else return null;
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsbestosSampleCocEditModal)
);
=======
      )
    } else return null
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosSampleCocEditModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
