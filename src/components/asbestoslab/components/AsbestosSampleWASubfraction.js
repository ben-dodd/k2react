<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import { getSampleColors, updateResultMap } from "../../../actions/asbestosLab";
import classNames from "classnames";

import { AsbButton } from "../../../widgets/FormWidgets";
import TextField from "@material-ui/core/TextField";
import Select from "react-select";
import Grid from "@material-ui/core/Grid";

import { addLog } from "../../../actions/local";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { getSampleColors, updateResultMap } from '../../../actions/asbestosLab'
import classNames from 'classnames'

import { AsbButton } from '../../../widgets/FormWidgets'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid'

import { addLog } from '../../../actions/local'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    asbestosInSoilForms: state.const.asbestosInSoilForms,
<<<<<<< HEAD
    asbestosInSoilConcentrations: state.const.asbestosInSoilConcentrations,
  };
};

class AsbestosSampleWASubfraction extends React.Component {
  state = {
    form: this.props.sample.waSoilAnalysis[
      `subfraction${this.props.fraction}-${this.props.num}`
    ].formDescription
      ? this.props.sample.waSoilAnalysis[
          `subfraction${this.props.fraction}-${this.props.num}`
        ].formDescription
      : "",
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.sample.sampleNumber !== nextProps.sample.sampleNumber)
      return true;
    if (
      this.props.sample.waSoilAnalysis &&
      nextProps.sample.waSoilAnalysis &&
      this.props.sample.waSoilAnalysis[
        `subfraction${this.props.fraction}-${this.props.num}`
      ] !==
        nextProps.sample.waSoilAnalysis[
          `subfraction${this.props.fraction}-${this.props.num}`
        ]
    )
      return true;
    return false;
  }

  render() {
    const { classes, num, sample, fraction, that, prefix } = this.props;

    let layer = {};
    let colors = {};

    if (
      sample.waSoilAnalysis &&
      sample.waSoilAnalysis[`subfraction${fraction}-${num}`]
    ) {
      layer = sample.waSoilAnalysis[`subfraction${fraction}-${num}`];
      colors = getSampleColors(layer);
    } else {
      colors = getSampleColors(null);
    }

    return (
      <Grid
        container
        className={classes.flexRowHover}
        direction="row"
        spacing={1}
      >
=======
    asbestosInSoilConcentrations: state.const.asbestosInSoilConcentrations
  }
}

class AsbestosSampleWASubfraction extends React.Component {
  state = {
    form: this.props.sample.waSoilAnalysis[`subfraction${this.props.fraction}-${this.props.num}`].formDescription
      ? this.props.sample.waSoilAnalysis[`subfraction${this.props.fraction}-${this.props.num}`].formDescription
      : ''
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.sample.sampleNumber !== nextProps.sample.sampleNumber) return true
    if (
      this.props.sample.waSoilAnalysis &&
      nextProps.sample.waSoilAnalysis &&
      this.props.sample.waSoilAnalysis[`subfraction${this.props.fraction}-${this.props.num}`] !==
        nextProps.sample.waSoilAnalysis[`subfraction${this.props.fraction}-${this.props.num}`]
    )
      return true
    return false
  }

  render() {
    const { classes, num, sample, fraction, that, prefix } = this.props

    let layer = {}
    let colors = {}

    if (sample.waSoilAnalysis && sample.waSoilAnalysis[`subfraction${fraction}-${num}`]) {
      layer = sample.waSoilAnalysis[`subfraction${fraction}-${num}`]
      colors = getSampleColors(layer)
    } else {
      colors = getSampleColors(null)
    }

    return (
      <Grid container className={classes.flexRowHover} direction='row' spacing={1}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <Grid item xs={12} lg={6} className={classes.flexRow}>
          <div className={classNames(classes.bold, classes.columnSmall)}>
            <TextField
              id={`l${num}ID`}
<<<<<<< HEAD
              label="ID"
              InputLabelProps={{ shrink: true }}
              value={layer.containerID ? layer.containerID : ""}
              onChange={(e) => {
                this.setLayerVar(
                  "containerID",
                  num,
                  fraction,
                  e.target.value,
                  that
                );
=======
              label='ID'
              InputLabelProps={{ shrink: true }}
              value={layer.containerID ? layer.containerID : ''}
              onChange={(e) => {
                this.setLayerVar('containerID', num, fraction, e.target.value, that)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          </div>
          <div className={classes.columnMedSmall}>
            <TextField
              id={`l${num}Weight`}
<<<<<<< HEAD
              label="Weight (g)"
              InputLabelProps={{ shrink: true }}
              value={layer.weight ? layer.weight : ""}
              type="number"
              onChange={(e) => {
                this.setLayerVar("weight", num, fraction, e.target.value, that);
=======
              label='Weight (g)'
              InputLabelProps={{ shrink: true }}
              value={layer.weight ? layer.weight : ''}
              type='number'
              onChange={(e) => {
                this.setLayerVar('weight', num, fraction, e.target.value, that)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          </div>
          <div className={classes.spacerSmall} />
          <div className={classes.columnMedSmall}>
            <TextField
              id={`l${num}TareWeight`}
<<<<<<< HEAD
              label="Tare Weight (g)"
              InputLabelProps={{ shrink: true }}
              value={layer.tareWeight ? layer.tareWeight : ""}
              type="number"
              onChange={(e) => {
                this.setLayerVar(
                  "tareWeight",
                  num,
                  fraction,
                  e.target.value,
                  that
                );
=======
              label='Tare Weight (g)'
              InputLabelProps={{ shrink: true }}
              value={layer.tareWeight ? layer.tareWeight : ''}
              type='number'
              onChange={(e) => {
                this.setLayerVar('tareWeight', num, fraction, e.target.value, that)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          </div>
          <div className={classes.spacerSmall} />
          <div className={classes.columnMedSmall}>
            <Select
              value={
                layer.concentration
                  ? {
                      value: layer.concentration,
<<<<<<< HEAD
                      label: this.props.asbestosInSoilConcentrations.filter(
                        (e) => e.value === layer.concentration
                      )[0].label,
                    }
                  : { value: "", label: "" }
              }
              options={this.props.asbestosInSoilConcentrations.map((e) => ({
                value: e.value,
                label: e.label,
=======
                      label: this.props.asbestosInSoilConcentrations.filter((e) => e.value === layer.concentration)[0].label
                    }
                  : { value: '', label: '' }
              }
              options={this.props.asbestosInSoilConcentrations.map((e) => ({
                value: e.value,
                label: e.label
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }))}
              onChange={(e) => {
                that.setState({
                  modified: true,
                  samples: {
                    ...that.state.samples,
                    [that.state.activeSample]: {
                      ...that.state.samples[that.state.activeSample],
                      waSoilAnalysis: {
<<<<<<< HEAD
                        ...that.state.samples[that.state.activeSample]
                          .waSoilAnalysis,
                        [`subfraction${fraction}-${num}`]: {
                          ...that.state.samples[that.state.activeSample]
                            .waSoilAnalysis[`subfraction${fraction}-${num}`],
                          concentration: e.value,
                        },
                      },
                    },
                  },
                });
=======
                        ...that.state.samples[that.state.activeSample].waSoilAnalysis,
                        [`subfraction${fraction}-${num}`]: {
                          ...that.state.samples[that.state.activeSample].waSoilAnalysis[`subfraction${fraction}-${num}`],
                          concentration: e.value
                        }
                      }
                    }
                  }
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          </div>
          <div className={classes.spacerSmall} />
          <div className={classes.columnMedSmall}>
            <Select
              value={
                layer.form
                  ? {
                      value: layer.form,
<<<<<<< HEAD
                      label: this.props.asbestosInSoilForms.filter(
                        (e) => e.value === layer.form
                      )[0].label,
                    }
                  : { value: "", label: "" }
              }
              options={
                this.props.fraction === "gt7"
                  ? this.props.asbestosInSoilForms.map((e) => ({
                      value: e.value,
                      label: e.label,
                    }))
                  : this.props.asbestosInSoilForms
                      .filter((e) => e.value !== "acm")
                      .map((e) => ({ value: e.value, label: e.label }))
=======
                      label: this.props.asbestosInSoilForms.filter((e) => e.value === layer.form)[0].label
                    }
                  : { value: '', label: '' }
              }
              options={
                this.props.fraction === 'gt7'
                  ? this.props.asbestosInSoilForms.map((e) => ({
                      value: e.value,
                      label: e.label
                    }))
                  : this.props.asbestosInSoilForms.filter((e) => e.value !== 'acm').map((e) => ({ value: e.value, label: e.label }))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }
              onChange={(e) => {
                that.setState({
                  modified: true,
                  samples: {
                    ...that.state.samples,
                    [that.state.activeSample]: {
                      ...that.state.samples[that.state.activeSample],
                      waSoilAnalysis: {
<<<<<<< HEAD
                        ...that.state.samples[that.state.activeSample]
                          .waSoilAnalysis,
                        [`subfraction${fraction}-${num}`]: {
                          ...that.state.samples[that.state.activeSample]
                            .waSoilAnalysis[`subfraction${fraction}-${num}`],
                          form: e.value,
                        },
                      },
                    },
                  },
                });
=======
                        ...that.state.samples[that.state.activeSample].waSoilAnalysis,
                        [`subfraction${fraction}-${num}`]: {
                          ...that.state.samples[that.state.activeSample].waSoilAnalysis[`subfraction${fraction}-${num}`],
                          form: e.value
                        }
                      }
                    }
                  }
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          </div>
          <div className={classes.columnMedSmall}>
<<<<<<< HEAD
            <div
              className={classNames(
                classes.informationBoxRounded,
                classes.bold
              )}
            >
              {layer.concentration && layer.weight
                ? layer.tareWeight
                  ? parseFloat(layer.tareWeight) > parseFloat(layer.weight)
                    ? "0.00000g"
                    : (
                        ((parseFloat(layer.weight) -
                          parseFloat(layer.tareWeight)) *
                          parseFloat(layer.concentration)) /
                        100
                      ).toFixed(5) + "g"
                  : (
                      (parseFloat(layer.weight) *
                        parseFloat(layer.concentration)) /
                      100
                    ).toFixed(5) + "g"
                : ""}
=======
            <div className={classNames(classes.informationBoxRounded, classes.bold)}>
              {layer.concentration && layer.weight
                ? layer.tareWeight
                  ? parseFloat(layer.tareWeight) > parseFloat(layer.weight)
                    ? '0.00000g'
                    : (((parseFloat(layer.weight) - parseFloat(layer.tareWeight)) * parseFloat(layer.concentration)) / 100).toFixed(5) + 'g'
                  : ((parseFloat(layer.weight) * parseFloat(layer.concentration)) / 100).toFixed(5) + 'g'
                : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.flexRowRightAlign}>
<<<<<<< HEAD
            {["ch", "am", "cr", "umf", "no", "org", "smf"].map((res) => {
              return AsbButton(
                classes[`colorsButton${colors[res]}`],
                classes[`colorsDiv${colors[res]}`],
                res,
                (e) => this.toggleLayerRes(res, num, fraction, sample, that)
              );
=======
            {['ch', 'am', 'cr', 'umf', 'no', 'org', 'smf'].map((res) => {
              return AsbButton(classes[`colorsButton${colors[res]}`], classes[`colorsDiv${colors[res]}`], res, (e) =>
                this.toggleLayerRes(res, num, fraction, sample, that)
              )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            })}
          </div>
        </Grid>
      </Grid>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  setLayerVar = (variable, num, fraction, val, that) => {
    that.setState({
      modified: true,
      samples: {
        ...that.state.samples,
        [that.state.activeSample]: {
          ...that.state.samples[that.state.activeSample],
          waSoilAnalysis: {
            ...that.state.samples[that.state.activeSample].waSoilAnalysis,
            [`subfraction${fraction}-${num}`]: {
<<<<<<< HEAD
              ...that.state.samples[that.state.activeSample].waSoilAnalysis[
                `subfraction${fraction}-${num}`
              ],
              [variable]: val,
              verified: false,
            },
          },
        },
      },
    });
  };

  toggleLayerRes = (res, num, fraction, sample, that) => {
    let newMap = updateResultMap(
      res,
      sample.waSoilAnalysis[`subfraction${fraction}-${num}`].result
    );
    this.setLayerVar("result", num, fraction, newMap, that);
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, null)(AsbestosSampleWASubfraction)
);
=======
              ...that.state.samples[that.state.activeSample].waSoilAnalysis[`subfraction${fraction}-${num}`],
              [variable]: val,
              verified: false
            }
          }
        }
      }
    })
  }

  toggleLayerRes = (res, num, fraction, sample, that) => {
    let newMap = updateResultMap(res, sample.waSoilAnalysis[`subfraction${fraction}-${num}`].result)
    this.setLayerVar('result', num, fraction, newMap, that)
  }
}

export default withStyles(styles)(connect(mapStateToProps, null)(AsbestosSampleWASubfraction))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
