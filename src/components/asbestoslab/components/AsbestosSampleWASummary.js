<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import {
  writeDescription,
  getSampleColors,
  getWATotalDetails,
  writeSoilDetails,
} from "../../../actions/asbestosLab";

import SuggestionField from "../../../widgets/SuggestionField";
import { AsbButton } from "../../../widgets/FormWidgets";
import Grid from "@material-ui/core/Grid";
import TextyBox from "../../../widgets/TextyBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { addLog } from "../../../actions/local";

const waMap = {
  gt7: ">7",
  to7: "2-7",
  lt2: "<2",
};

const asbestosPercentLimit = 0.001;
const asbestosWeightLimit = 0.00001;
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { writeDescription, getSampleColors, getWATotalDetails, writeSoilDetails } from '../../../actions/asbestosLab'

import SuggestionField from '../../../widgets/SuggestionField'
import { AsbButton } from '../../../widgets/FormWidgets'
import Grid from '@material-ui/core/Grid'
import TextyBox from '../../../widgets/TextyBox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import { addLog } from '../../../actions/local'

const waMap = {
  gt7: '>7',
  to7: '2-7',
  lt2: '<2'
}

const asbestosPercentLimit = 0.001
const asbestosWeightLimit = 0.00001
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class AsbestosSampleWASummary extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.sample.waSoilAnalysis !== nextProps.sample.waSoilAnalysis ||
      this.props.sample.waLayerNum !== nextProps.waLayerNum ||
      this.props.sample.weightDry !== nextProps.sample.weightDry
    )
<<<<<<< HEAD
      return true;
    return false;
  }

  render() {
    const { classes, sample, that, noEdit } = this.props;
    let fractionMap = getWATotalDetails(sample, this.props.acmInSoilLimit);
    let waColors = getSampleColors({ result: fractionMap.result.total });
=======
      return true
    return false
  }

  render() {
    const { classes, sample, that, noEdit } = this.props
    let fractionMap = getWATotalDetails(sample, this.props.acmInSoilLimit)
    let waColors = getSampleColors({ result: fractionMap.result.total })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // let chartData = [];
    // if (sample.waSoilAnalysis) {
    //   Object.keys(waMap).forEach(key => {
    //     if (sample.waSoilAnalysis[`fraction${key}WeightAshed`]) {
    //       chartData.push({
    //         value: parseFloat(sample.waSoilAnalysis[`fraction${key}WeightAshed`]),
    //         name: waMap[key],
    //         label: waMap[key],
    //       });
    //     }
    //   });
    // }

    return (
      <div>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={4} className={classes.headingRow}>
            Description of Asbestos Forms
          </Grid>
          <Grid item xs={4} className={classes.headingRow}>
            Sample Weights
          </Grid>
          <Grid item xs={4} className={classes.headingRow}>
            Fraction Weights (ashed)
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={4} className={classes.entryRow}>
            {noEdit ? (
              sample.waSoilAnalysis && sample.waSoilAnalysis.formDescription
            ) : (
              <SuggestionField
                that={this}
<<<<<<< HEAD
                suggestions="asbestosInSoilSuggestions"
                defaultValue={
                  sample.waSoilAnalysis && sample.waSoilAnalysis.formDescription
                }
=======
                suggestions='asbestosInSoilSuggestions'
                defaultValue={sample.waSoilAnalysis && sample.waSoilAnalysis.formDescription}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                onModify={(value) => {
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
                          formDescription: value,
                        },
                      },
                    },
                  });
=======
                          ...that.state.samples[that.state.activeSample].waSoilAnalysis,
                          formDescription: value
                        }
                      }
                    }
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            )}
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>
            Received Weight
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.weightReceived ? (
                  `${sample.weightReceived}g`
                ) : (
                  `N/A`
                )
              ) : (
<<<<<<< HEAD
                <TextyBox
                  that={that}
                  sample={sample}
                  field={"weightReceived"}
                  end={"g"}
                  numericOnly={true}
                  dp={1}
                />
=======
                <TextyBox that={that} sample={sample} field={'weightReceived'} end={'g'} numericOnly={true} dp={1} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              )}
            </div>
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>{`> 7mm`}</Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
<<<<<<< HEAD
                sample.waSoilAnalysis &&
                sample.waSoilAnalysis.fractiongt7WeightAshed ? (
=======
                sample.waSoilAnalysis && sample.waSoilAnalysis.fractiongt7WeightAshed ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  `${sample.waSoilAnalysis.fractiongt7WeightAshed}g`
                ) : (
                  `N/A`
                )
              ) : (
                <TextyBox
                  that={that}
                  sample={sample}
<<<<<<< HEAD
                  base="waSoilAnalysis"
                  field="fractiongt7WeightAshed"
                  end={"g"}
=======
                  base='waSoilAnalysis'
                  field='fractiongt7WeightAshed'
                  end={'g'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  numericOnly={true}
                  dp={1}
                />
              )}
            </div>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={2} className={classes.firstColumn}>
            Moisture
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
<<<<<<< HEAD
            {this.props.moisture ? (
              <span>{this.props.moisture}%</span>
            ) : (
              <span>N/A</span>
            )}
=======
            {this.props.moisture ? <span>{this.props.moisture}%</span> : <span>N/A</span>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>
            Dry Weight
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.weightDry ? (
                  `${sample.weightDry}g`
                ) : (
                  `N/A`
                )
              ) : (
<<<<<<< HEAD
                <TextyBox
                  that={that}
                  sample={sample}
                  field={"weightDry"}
                  end={"g"}
                  numericOnly={true}
                  dp={1}
                />
=======
                <TextyBox that={that} sample={sample} field={'weightDry'} end={'g'} numericOnly={true} dp={1} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              )}
            </div>
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>{`2 - 7mm`}</Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
<<<<<<< HEAD
                sample.waSoilAnalysis &&
                sample.waSoilAnalysis.fractionto7WeightAshed ? (
=======
                sample.waSoilAnalysis && sample.waSoilAnalysis.fractionto7WeightAshed ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  `${sample.waSoilAnalysis.fractionto7WeightAshed}g`
                ) : (
                  `N/A`
                )
              ) : (
                <TextyBox
                  that={that}
                  sample={sample}
<<<<<<< HEAD
                  base="waSoilAnalysis"
                  field="fractionto7WeightAshed"
                  end={"g"}
=======
                  base='waSoilAnalysis'
                  field='fractionto7WeightAshed'
                  end={'g'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  numericOnly={true}
                  dp={1}
                />
              )}
            </div>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={2} className={classes.firstColumn}>
            Total Ashed Fraction Weight
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
            {sample.waSoilAnalysis &&
            sample.waSoilAnalysis.fractiongt7WeightAshed &&
            sample.waSoilAnalysis.fractionto7WeightAshed &&
            sample.waSoilAnalysis.fractionlt2WeightAshed ? (
              <span
                className={
                  (
                    parseFloat(sample.waSoilAnalysis.fractiongt7WeightAshed) +
                    parseFloat(sample.waSoilAnalysis.fractionto7WeightAshed) +
                    parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed)
                  ).toFixed(1) !== parseFloat(sample.weightAshed).toFixed(1)
                    ? classes.boldRed
                    : classes.boldBlack
                }
              >
                {(
                  parseFloat(sample.waSoilAnalysis.fractiongt7WeightAshed) +
                  parseFloat(sample.waSoilAnalysis.fractionto7WeightAshed) +
                  parseFloat(sample.waSoilAnalysis.fractionlt2WeightAshed)
                ).toFixed(1)}
                g
              </span>
            ) : (
              <span>N/A</span>
            )}
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>
            Ashed Weight
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.weightAshed ? (
                  `${sample.weightAshed}g`
                ) : (
                  `N/A`
                )
              ) : (
<<<<<<< HEAD
                <TextyBox
                  that={that}
                  sample={sample}
                  field={"weightAshed"}
                  end={"g"}
                  numericOnly={true}
                  dp={1}
                />
=======
                <TextyBox that={that} sample={sample} field={'weightAshed'} end={'g'} numericOnly={true} dp={1} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              )}
            </div>
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>{`< 2mm`}</Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
<<<<<<< HEAD
                sample.waSoilAnalysis &&
                sample.waSoilAnalysis.fractionlt2WeightAshed ? (
=======
                sample.waSoilAnalysis && sample.waSoilAnalysis.fractionlt2WeightAshed ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  `${sample.waSoilAnalysis.fractionlt2WeightAshed}g`
                ) : (
                  `N/A`
                )
              ) : (
                <TextyBox
                  that={that}
                  sample={sample}
<<<<<<< HEAD
                  base="waSoilAnalysis"
                  field="fractionlt2WeightAshed"
                  end={"g"}
=======
                  base='waSoilAnalysis'
                  field='fractionlt2WeightAshed'
                  end={'g'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  numericOnly={true}
                  dp={1}
                />
              )}
            </div>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={1} className={classes.firstColumn}>
            Geotechnical Soil Description
          </Grid>
          <Grid item xs={3} className={classes.entryRow}>
            {writeSoilDetails(sample.soilDetails)}
          </Grid>
          <Grid item xs={2} className={classes.firstColumn}>
            Subsample Weight
          </Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.weightSubsample ? (
                  `${sample.weightSubsample}g`
                ) : (
                  `N/A`
                )
              ) : (
                <TextyBox
                  that={that}
                  sample={sample}
<<<<<<< HEAD
                  field="weightSubsample"
                  helperText="Record the weight of the subsample before drying (if the whole sample isn't analysed"
                  end={"g"}
=======
                  field='weightSubsample'
                  helperText="Record the weight of the subsample before drying (if the whole sample isn't analysed"
                  end={'g'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  numericOnly={true}
                  dp={1}
                />
              )}
            </div>
          </Grid>
<<<<<<< HEAD
          <Grid
            item
            xs={2}
            className={classes.firstColumn}
          >{`< 2mm Subsample`}</Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.waSoilAnalysis &&
                sample.waSoilAnalysis.fractionlt2WeightAshedSubsample ? (
=======
          <Grid item xs={2} className={classes.firstColumn}>{`< 2mm Subsample`}</Grid>
          <Grid item xs={2} className={classes.entryRow}>
            <div className={classes.formInputMedium}>
              {noEdit ? (
                sample.waSoilAnalysis && sample.waSoilAnalysis.fractionlt2WeightAshedSubsample ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  `${sample.waSoilAnalysis.fractionlt2WeightAshedSubsample}g`
                ) : (
                  `N/A`
                )
              ) : (
                <TextyBox
                  that={that}
                  sample={sample}
<<<<<<< HEAD
                  base="waSoilAnalysis"
                  field="fractionlt2WeightAshedSubsample"
                  helperText="Record the weight of the subsample of the <2mm fraction if applicable. This will multiply the asbestos weights in that fraction according to the proportion analysed."
                  end={"g"}
=======
                  base='waSoilAnalysis'
                  field='fractionlt2WeightAshedSubsample'
                  helperText='Record the weight of the subsample of the <2mm fraction if applicable. This will multiply the asbestos weights in that fraction according to the proportion analysed.'
                  end={'g'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  numericOnly={true}
                  dp={1}
                />
              )}
            </div>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Grid container direction="row">
=======
        <Grid container direction='row'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={4} className={classes.headingRow}>
            Asbestos Form
          </Grid>
          <Grid item xs={2} className={classes.headingRow}>
            Fractions Present
          </Grid>
          <Grid item xs={2} className={classes.headingRow}>
            Asbestos Types
          </Grid>
          <Grid item xs={2} className={classes.headingRow}>
            Weight (g)
          </Grid>
          <Grid item xs={2} className={classes.headingRow}>
            Percentage of Total
          </Grid>
        </Grid>
        {[
          {
<<<<<<< HEAD
            label: "All Forms",
            value: "total",
            red:
              fractionMap.concentration.acmFloat > this.props.acmInSoilLimit ||
              fractionMap.concentration.faaf > 0.001,
          },
          {
            label: "Asbestos-containing Material (ACM)",
            value: "acm",
            red:
              fractionMap.concentration.acmFloat >= this.props.acmInSoilLimit,
          },
          {
            label: "Friable Asbestos (FA)",
            value: "fa",
            red: fractionMap.concentration.fa >= 0.001,
          },
          {
            label: "Asbestos Fines (AF)",
            value: "af",
            red: fractionMap.concentration.af >= 0.001,
          },
          {
            label: "Combined FA and AF",
            value: "faaf",
            red: fractionMap.concentration.faaf >= 0.001,
          },
        ].map((row) => (
          <Grid container direction="row" key={row.value}>
=======
            label: 'All Forms',
            value: 'total',
            red: fractionMap.concentration.acmFloat > this.props.acmInSoilLimit || fractionMap.concentration.faaf > 0.001
          },
          {
            label: 'Asbestos-containing Material (ACM)',
            value: 'acm',
            red: fractionMap.concentration.acmFloat >= this.props.acmInSoilLimit
          },
          {
            label: 'Friable Asbestos (FA)',
            value: 'fa',
            red: fractionMap.concentration.fa >= 0.001
          },
          {
            label: 'Asbestos Fines (AF)',
            value: 'af',
            red: fractionMap.concentration.af >= 0.001
          },
          {
            label: 'Combined FA and AF',
            value: 'faaf',
            red: fractionMap.concentration.faaf >= 0.001
          }
        ].map((row) => (
          <Grid container direction='row' key={row.value}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <Grid item xs={4} className={classes.firstColumn}>
              {row.label}
            </Grid>
            <Grid item xs={2} className={classes.textColumn}>
              {Object.keys(fractionMap.fractions[row.value])
                .map((f) => waMap[f])
<<<<<<< HEAD
                .join(", ")
                .toUpperCase()}
            </Grid>
            <Grid item xs={2} className={classes.textColumn}>
              {Object.keys(fractionMap.result[row.value])
                .join(", ")
                .toUpperCase()}
            </Grid>
            <Grid item xs={2} className={classes.numberColumn}>
              {!fractionMap.weight[row.value] ||
              fractionMap.weight[row.value] < asbestosWeightLimit ? (
=======
                .join(', ')
                .toUpperCase()}
            </Grid>
            <Grid item xs={2} className={classes.textColumn}>
              {Object.keys(fractionMap.result[row.value]).join(', ').toUpperCase()}
            </Grid>
            <Grid item xs={2} className={classes.numberColumn}>
              {!fractionMap.weight[row.value] || fractionMap.weight[row.value] < asbestosWeightLimit ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <span>{`<${asbestosWeightLimit}g`}</span>
              ) : (
                <span>{fractionMap.weight[row.value]}g</span>
              )}
            </Grid>
            <Grid item xs={2} className={classes.numberColumn}>
<<<<<<< HEAD
              {!fractionMap.concentration[row.value] ||
              fractionMap.concentration[row.value] < asbestosPercentLimit ? (
                <span
                  className={classes.boldBlack}
                >{`<${asbestosPercentLimit}%`}</span>
              ) : (
                <span className={row.red ? classes.boldRed : classes.boldBlack}>
                  {fractionMap.concentration[row.value]}%
                </span>
=======
              {!fractionMap.concentration[row.value] || fractionMap.concentration[row.value] < asbestosPercentLimit ? (
                <span className={classes.boldBlack}>{`<${asbestosPercentLimit}%`}</span>
              ) : (
                <span className={row.red ? classes.boldRed : classes.boldBlack}>{fractionMap.concentration[row.value]}%</span>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              )}
            </Grid>
          </Grid>
        ))}
        <div className={classes.flexRowRightAlign}>
          {noEdit ? (
            sample.waAnalysisComplete ? (
              <span className={classes.colorsDivOk}>Analysis Complete</span>
            ) : (
              <span className={classes.colorsDivOff}>Analysis Incomplete</span>
            )
          ) : (
            <FormControlLabel
              control={
                <Switch
                  checked={sample.waAnalysisComplete === true ? true : false}
                  onClick={(e) => {
                    that.setState({
                      modified: true,
                      samples: {
                        ...that.state.samples,
                        [that.state.activeSample]: {
                          ...that.state.samples[that.state.activeSample],
                          waAnalysisComplete: e.target.checked,
                          waAnalysisCompletedBy: {
                            name: this.props.me.name,
<<<<<<< HEAD
                            uid: this.props.me.uid,
                          },
                          waAnalysisCompleteDate: new Date(),
                        },
                      },
                    });
                    let log = {
                      type: "Analysis",
                      log:
                        e.target.checked === true
                          ? `Sample ${sample.sampleNumber} (${writeDescription(
                              sample
                            )}) WA Analysis marked as complete.`
                          : `Sample ${sample.sampleNumber} (${writeDescription(
                              sample
                            )}) WA Analysis marked as incomplete.`,
                      sample: sample.uid,
                      chainOfCustody: sample.cocUid,
                    };
                    addLog("asbestosLab", log, this.props.me);
                  }}
                  value="waAnalysisComplete"
                  color="primary"
                />
              }
              label="WA Analysis Complete"
=======
                            uid: this.props.me.uid
                          },
                          waAnalysisCompleteDate: new Date()
                        }
                      }
                    })
                    let log = {
                      type: 'Analysis',
                      log:
                        e.target.checked === true
                          ? `Sample ${sample.sampleNumber} (${writeDescription(sample)}) WA Analysis marked as complete.`
                          : `Sample ${sample.sampleNumber} (${writeDescription(sample)}) WA Analysis marked as incomplete.`,
                      sample: sample.uid,
                      chainOfCustody: sample.cocUid
                    }
                    addLog('asbestosLab', log, this.props.me)
                  }}
                  value='waAnalysisComplete'
                  color='primary'
                />
              }
              label='WA Analysis Complete'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            />
          )}
        </div>
        {/*false && <div>
          {chartData.length > 1 && <PieChart width={200} height={200}>
            <Pie data={chartData} dataKey="value" nameKey="name" labelLine={false} label>
              {
                chartData.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={theme.palette.colorList[index % theme.palette.colorList.length]}
                  />)
              }
            </Pie>
          </PieChart>}
        </div>*/}
        {false &&
          fractionMap &&
          fractionMap.types &&
          Object.keys(fractionMap.types).map((type) => {
            // console.log(type);
            return (
              <div className={classes.flexRowTotals} key={type}>
<<<<<<< HEAD
                <div className={classes.circleShadedHighlighted}>
                  {type.toUpperCase()}
                </div>
=======
                <div className={classes.circleShadedHighlighted}>{type.toUpperCase()}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <div className={classes.columnMedSmall} />
                <div className={classes.spacerSmall} />
                <div className={classes.columnMedSmall} />
                <div className={classes.spacerSmall} />
                <div className={classes.columnMedSmall}>
<<<<<<< HEAD
                  {fractionMap && fractionMap.weight[type]
                    ? `${fractionMap.weight[type]}g`
                    : ""}
=======
                  {fractionMap && fractionMap.weight[type] ? `${fractionMap.weight[type]}g` : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                </div>
                <div className={classes.spacerSmall} />
                <div className={classes.columnLarge}>
                  {fractionMap && fractionMap.concentration[type] ? (
                    <span
                      className={
<<<<<<< HEAD
                        (type === "acm" &&
                          fractionMap.concentration.acm > 0.01) ||
                        (type !== "acm" &&
                          fractionMap.concentration[type] > 0.001)
=======
                        (type === 'acm' && fractionMap.concentration.acm > 0.01) ||
                        (type !== 'acm' && fractionMap.concentration[type] > 0.001)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          ? classes.boldRedWarningText
                          : classes.boldBlack
                      }
                    >
                      {fractionMap.concentration[type]}%
                    </span>
                  ) : (
<<<<<<< HEAD
                    ""
                  )}
                </div>
                <div className={classes.flexRowRightAlign}>
                  {["ch", "am", "cr", "umf", "no", "org", "smf"].map((res) => {
                    let cols = getSampleColors({
                      result: fractionMap.result[type],
                    });
                    return AsbButton(
                      classes[`colorsButton${cols[res]}`],
                      classes[`colorsDiv${cols[res]}`],
                      res,
                      null
                    );
                  })}
                </div>
              </div>
            );
=======
                    ''
                  )}
                </div>
                <div className={classes.flexRowRightAlign}>
                  {['ch', 'am', 'cr', 'umf', 'no', 'org', 'smf'].map((res) => {
                    let cols = getSampleColors({
                      result: fractionMap.result[type]
                    })
                    return AsbButton(classes[`colorsButton${cols[res]}`], classes[`colorsDiv${cols[res]}`], res, null)
                  })}
                </div>
              </div>
            )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          })}
        {false && (
          <div className={classes.flexRowTotals}>
            <div className={classes.circleShadedHighlighted}>ALL</div>
            <div className={classes.columnMedSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.columnMedSmall} />
            <div className={classes.spacerSmall} />
<<<<<<< HEAD
            <div className={classes.columnMedSmall}>
              {fractionMap && fractionMap.weight.total
                ? `${fractionMap.weight.total}g`
                : ""}
            </div>
=======
            <div className={classes.columnMedSmall}>{fractionMap && fractionMap.weight.total ? `${fractionMap.weight.total}g` : ''}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div className={classes.spacerSmall} />
            <div className={classes.columnLarge}>
              {fractionMap && fractionMap.concentration.total ? (
                <span
                  className={
<<<<<<< HEAD
                    fractionMap.concentration.acm > 0.01 ||
                    fractionMap.concentration.faaf > 0.001
=======
                    fractionMap.concentration.acm > 0.01 || fractionMap.concentration.faaf > 0.001
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      ? classes.boldRedWarningText
                      : classes.boldBlack
                  }
                >
                  {fractionMap.concentration.total}%
                </span>
              ) : (
<<<<<<< HEAD
                ""
              )}
            </div>
            <div className={classes.flexRowRightAlign}>
              {["ch", "am", "cr", "umf", "no", "org", "smf"].map((res) => {
                return AsbButton(
                  classes[`colorsButton${waColors[res]}`],
                  classes[`colorsDiv${waColors[res]}`],
                  res,
                  null
                );
=======
                ''
              )}
            </div>
            <div className={classes.flexRowRightAlign}>
              {['ch', 'am', 'cr', 'umf', 'no', 'org', 'smf'].map((res) => {
                return AsbButton(classes[`colorsButton${waColors[res]}`], classes[`colorsDiv${waColors[res]}`], res, null)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              })}
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(AsbestosSampleWASummary);
=======
    )
  }
}

export default withStyles(styles)(AsbestosSampleWASummary)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
