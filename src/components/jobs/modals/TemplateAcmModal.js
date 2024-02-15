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

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    userRefName: state.local.userRefName,
    asbestosMaterialCategories: state.const.asbestosMaterialCategories,
    materialSuggestions: state.const.asbestosMaterialSuggestions,
    asbestosManagementOptions: state.const.asbestosManagementOptions,

    asbestosAccessibilitySuggestions: state.const.asbestosAccessibilitySuggestions,

    // Material Risk
    asbestosProductScores: state.const.asbestosProductScores,
    asbestosSurfaceScores: state.const.asbestosSurfaceScores,
    asbestosDamageScores: state.const.asbestosDamageScores,

    // Activity
    asbestosPriMainActivityScores: state.const.asbestosPriMainActivityScores,
    asbestosPriSecondaryActivityScores: state.const.asbestosPriSecondaryActivityScores,

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
    asbestosPriMaintFreqScores: state.const.asbestosPriMaintFreqScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSites: (update) => dispatch(fetchSites(update)),
    hideModal: () => dispatch(hideModal()),
    setModalError: (e) => dispatch(setModalError(e)),
    resetModal: () => dispatch(resetModal()),
    onUploadFile: (file, pathRef, prefix, imageQuality) => dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef))
  }
}

class TemplateAcmModal extends React.Component {
  state = {
    asbestosType: {
      ch: true,
      am: true,
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
    return (
      <Dialog
        open={this.props.modalType === TEMPLATE_ACM}
        onClose={this.props.hideModal}
        onEnter={this.loadTemplate}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add ACM Template'}</DialogTitle>
        <DialogContent>
          <InputLabel>Template Name</InputLabel>
          <TextField
            value={
              this.state.templateName
                ? this.state.templateName
                : this.state.description && this.state.material
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
            <FormControlLabel
              className={classes.marginTopSmall}
              control={
                <Switch
                  checked={this.state.writeItemFirst || false}
                  onClick={(e) => {
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
            <FormControlLabel
              className={classes.marginTopSmall}
              control={
                <Switch
                  checked={this.state.singularItem || false}
                  onClick={(e) => {
                    this.setState({ singularItem: e.target.checked })
                  }}
                  value='singularItem'
                  color='secondary'
                />
              }
              label='Write as Singular Item'
            />
          </Tooltip>
          <div className={classes.flexRow}>
            <FormControlLabel
              className={classes.marginTopSmall}
              control={
                <Switch
                  checked={this.state.inaccessibleItem || false}
                  onClick={(e) => {
                    this.setState({ inaccessibleItem: e.target.checked })
                  }}
                  value='inaccessibleItem'
                  color='secondary'
                />
              }
              label='Inaccessible Item'
            />

            <FormControlLabel
              className={classes.marginTopSmall}
              control={
                <Switch
                  checked={this.state.unknownItem || false}
                  onClick={(e) => {
                    this.setState({ unknownItem: e.target.checked })
                  }}
                  value='unknownItem'
                  color='secondary'
                />
              }
              label='Unknown Item'
            />
          </div>

          {!this.state.unknownItem && (
            <div>
              <SuggestionField
                that={this}
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
                  }
                  this.setState({
                    material: value,
                    category,
                    asbestosType,
                    asbestosContent
                  })
                }}
              />
              <InputLabel className={classes.marginTopSmall}>Material Category</InputLabel>
              <Select
                className={classes.selectTight}
                value={
                  this.state.category
                    ? {
                        value: this.state.category,
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
                }}
              />
            </div>
          )}

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
            })}
          </div>

          <SuggestionField
            that={this}
            suggestions='extentSuggestions'
            label='Extent Description'
            controlled
            value={this.state.extent || ''}
            onModify={(value) => this.setState({ extent: value })}
          />

          <div className={classes.flexRow}>
            <TextField
              id='extentNum'
              label='Extent Amount'
              style={{ width: '60%' }}
              value={this.state.extentNum}
              onChange={(e) =>
                this.setState({
                  extentNum: numericAndLessThanOnly(e.target.value)
                })
              }
            />
            <Select
              className={classNames(classes.selectTight, classes.columnSmall)}
              value={
                this.state.extentNumUnits
                  ? {
                      value: this.state.extentNumUnits,
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
              }}
            />
          </div>

          <FormControlLabel
            control={
              <Switch
                checked={this.state.acmRemoved || false}
                onClick={(e) => {
                  this.setState({ acmRemoved: e.target.checked })
                }}
                value='acmRemoved'
                color='secondary'
              />
            }
            label='ACM Removed'
          />

          {this.state.acmRemoved && (
            <div>
              <InputLabel className={classes.marginTopSmall}>Clearance Job</InputLabel>
              <Select
                className={classes.selectTight}
                value={
                  this.state.acmRemovalJob
                    ? {
                        value: this.state.acmRemovalJob,
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
                      }))
                    : []
                }
                onChange={(e) => {
                  this.setState({ acmRemovalJob: e.value })
                }}
              />
            </div>
          )}

          <InputLabel className={classes.marginTopSmall}>Accessibility Score</InputLabel>
          <div className={classes.flexRow}>
            {this.props.asbestosAccessibilitySuggestions &&
              this.props.asbestosAccessibilitySuggestions.map((res) => {
                return ScoreButton(
                  classes[`colorsButton${this.state.accessibility === res.label ? res.color : 'Off'}`],
                  classes[`colorsDiv${this.state.accessibility === res.label ? res.color : 'Off'}`],
                  res.label,
                  res.tooltip,
                  () => this.setState({ accessibility: res.label })
                )
              })}
          </div>

          <FormControlLabel
            control={
              <Switch
                checked={this.state.genericItem || false}
                onClick={(e) => {
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
                modules={quillModules}
                theme="snow"
                className={classes.marginBottomMedium}
                onChange={(content, delta, source) => {
                  if (source === 'user')
                    this.setState({ genericItemBlurb: content })
                }}
              /> */}
            </div>
          )}

          {!this.state.unknownItem && (
            <div>
              <InputLabel className={classes.marginTopSmall}>Product Score</InputLabel>
              <div className={classes.flexRow}>
                {this.props.asbestosProductScores &&
                  this.props.asbestosProductScores.map((res) => {
                    return ScoreButton(
                      classes[`colorsButton${this.state.productScore === res.label ? res.color : 'Off'}`],
                      classes[`colorsDiv${this.state.productScore === res.label ? res.color : 'Off'}`],
                      res.label,
                      res.tooltip,
                      () =>
                        this.setState({
                          productScore: res.label,
                          materialRisk: getMaterialRisk({
                            ...this.state,
                            productScore: res.label
                          })
                        })
                    )
                  })}
              </div>

              <InputLabel className={classes.marginTopSmall}>Damage Score</InputLabel>
              <div className={classes.flexRow}>
                {this.props.asbestosDamageScores &&
                  this.props.asbestosDamageScores.map((res) => {
                    return ScoreButton(
                      classes[`colorsButton${this.state.damageScore === res.label ? res.color : 'Off'}`],
                      classes[`colorsDiv${this.state.damageScore === res.label ? res.color : 'Off'}`],
                      res.label,
                      res.tooltip,
                      () =>
                        this.setState({
                          damageScore: res.label,
                          materialRisk: getMaterialRisk({
                            ...this.state,
                            damageScore: res.label
                          })
                        })
                    )
                  })}
              </div>
              <SuggestionField
                that={this}
                suggestions='damageSuggestions'
                label='Damage Description'
                controlled
                value={this.state.damageDescription || ''}
                onModify={(value) => this.setState({ damageDescription: value })}
              />

              <InputLabel className={classes.marginTopSmall}>Surface Score</InputLabel>
              <div className={classes.flexRow}>
                {this.props.asbestosSurfaceScores &&
                  this.props.asbestosSurfaceScores.map((res) => {
                    return ScoreButton(
                      classes[`colorsButton${this.state.surfaceScore === res.label ? res.color : 'Off'}`],
                      classes[`colorsDiv${this.state.surfaceScore === res.label ? res.color : 'Off'}`],
                      res.label,
                      res.tooltip,
                      () =>
                        this.setState({
                          surfaceScore: res.label,
                          materialRisk: getMaterialRisk({
                            ...this.state,
                            surfaceScore: res.label
                          })
                        })
                    )
                  })}
              </div>
              <SuggestionField
                that={this}
                suggestions='asbestosSurfaceSuggestions'
                label='Surface Treatment Description'
                controlled
                value={this.state.surfaceDescription || ''}
                onModify={(value) => this.setState({ surfaceDescription: value })}
              />

              <div className={classes.flexRowSpread}>
                <div>
                  <InputLabel className={classes.marginTopSmall}>Presumed Asbestos Type</InputLabel>
                  <div className={classes.flexRow}>
                    {['ch', 'am', 'cr'].map((res) => {
                      return AsbButton(classes[`colorsButton${colors[res]}`], classes[`colorsDiv${colors[res]}`], res, () =>
                        this.handleAsbestosType(res)
                      )
                    })}
                  </div>
                </div>

                <div>
                  <TextField
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
                    }}
                  />
                </div>
              </div>

              {this.state.materialRisk && (
                <div
                  className={classes[`totalDiv${this.state.materialRisk.color}`]}
                >{`Material Risk: ${this.state.materialRisk.text} (${this.state.materialRisk.score})`}</div>
              )}
            </div>
          )}

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
            />
          )}

          <InputLabel className={classes.marginTopSmall}>Comment for Report</InputLabel>
          <ReactQuill
            value={this.state.comment || ''}
            modules={quillModules}
            className={classes.marginBottomMedium}
            theme='snow'
            onChange={(content, delta, source) => {
              if (source === 'user') this.setState({ comment: content })
            }}
          />

          <InputLabel className={classes.marginTopSmall}>Basic Primary Management</InputLabel>
          <Select
            className={classes.selectTight}
            value={
              this.state.managementPrimary
                ? {
                    value: this.state.managementPrimary,
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
          <Select
            className={classes.selectTight}
            value={
              this.state.managementSecondary
                ? {
                    value: this.state.managementSecondary,
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
          <Select
            className={classes.selectTight}
            value={
              this.state.removalLicenceRequired
                ? {
                    value: this.state.removalLicenceRequired,
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
          <ReactQuill
            value={this.state.recommendations || ''}
            modules={quillModules}
            theme='snow'
            className={classes.marginBottomMedium}
            onChange={(content, delta, source) => {
              if (source === 'user') this.setState({ recommendations: content })
            }}
          />

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
                <div className={classes.flexRow}>
                  {this.props[e.options] &&
                    this.props[e.options].map((res) => {
                      return ScoreButton(
                        classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        res.label,
                        res.tooltip,
                        () =>
                          this.setState({
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
                <div className={classes.flexRow}>
                  {this.props[e.options] &&
                    this.props[e.options].map((res) => {
                      return ScoreButton(
                        classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        res.label,
                        res.tooltip,
                        () =>
                          this.setState({
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
                <div className={classes.flexRow}>
                  {this.props[e.options] &&
                    this.props[e.options].map((res) => {
                      return ScoreButton(
                        classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        res.label,
                        res.tooltip,
                        () =>
                          this.setState({
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
                <div className={classes.flexRow}>
                  {this.props[e.options] &&
                    this.props[e.options].map((res) => {
                      return ScoreButton(
                        classes[`colorsButton${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        classes[`colorsDiv${this.state[e.stateVar] === res.label ? res.color : 'Off'}`],
                        res.label,
                        res.tooltip,
                        () =>
                          this.setState({
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

          <div className={classes.flexRowSpread}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.immediateRisk || false}
                  onChange={(e) => this.setState({ immediateRisk: e.target.checked })}
                />
              }
              label='Material is immediate health risk'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.labelImmediately || false}
                  onChange={(e) => this.setState({ labelImmediately: e.target.checked })}
                />
              }
              label='Material must be labelled'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.sealImmediately || false}
                  onChange={(e) => this.setState({ sealImmediately: e.target.checked })}
                />
              }
              label='Material must be sealed/encapsulated immediately'
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
            <div className={classes[`totalDiv${totalRisk.color}`]}>{`Combined Risk: ${totalRisk.text} (${totalRisk.score})`}</div>
          )}

          <InputLabel className={classes.marginTopSmall}>Thumbnail Image</InputLabel>
          {this.state.acmImageUrl && (
            <div className={classes.marginTopSmall}>
              <img
                src={this.state.acmImageUrl}
                alt=''
                width='200px'
                style={{
                  opacity: '0.5',
                  borderStyle: 'solid',
                  borderWidth: '2px'
                }}
              />
              <IconButton
                style={{
                  position: 'relative',
                  top: '2px',
                  left: '-120px',
                  borderStyle: 'solid',
                  borderWidth: '2px',
                  fontSize: 8
                }}
                onClick={() => {
                  if (window.confirm('Are you sure you wish to delete the image?')) this.deleteImage()
                }}
              >
                <Close />
              </IconButton>
            </div>
          )}
          <label>
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
            Cancel
          </Button>
          <Button
            onClick={() =>
              this.props.handleModalSubmit({
                doc: this.state,
                pathRef: templateAcmRef,
                docid: 'random'
              })
            }
            color='primary'
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TemplateAcmModal))
