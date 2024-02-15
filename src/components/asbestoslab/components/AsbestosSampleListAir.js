<<<<<<< HEAD
import React from "react";
import classNames from "classnames";
import moment from "moment";
import {
  writeDescription,
  getAirSampleData
} from "../../../actions/asbestosLab";
import { dateOf, numericOnly, titleCase } from "../../../actions/helpers";
import { ASBESTOS_SAMPLE_EDIT_COC } from "../../../constants/modal-types";
import SuggestionField from "../../../widgets/SuggestionField";
import Select from "react-select";

import { DateTimePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";

function AsbestoSampleListAir(props) {
  const {
    classes,
    doc,
    i,
    disabled,
    names,
    sampleType,
    onEdit,
    listType,
    that
  } = props;
  let sample =
    doc && doc.samples && doc.samples[i + 1] ? doc.samples[i + 1] : {};
  let calcs = {};
  if (
    (sample.initialFlowRate && sample.finalFlowRate) ||
    (sample.startTime && sample.endTime)
  )
    calcs = getAirSampleData(sample);
=======
import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import { writeDescription, getAirSampleData } from '../../../actions/asbestosLab'
import { dateOf, numericOnly, titleCase } from '../../../actions/helpers'
import { ASBESTOS_SAMPLE_EDIT_COC } from '../../../constants/modal-types'
import SuggestionField from '../../../widgets/SuggestionField'
import Select from 'react-select'

import { DateTimePicker } from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'

function AsbestoSampleListAir(props) {
  const { classes, doc, i, disabled, names, sampleType, onEdit, listType, that } = props
  let sample = doc && doc.samples && doc.samples[i + 1] ? doc.samples[i + 1] : {}
  let calcs = {}
  if ((sample.initialFlowRate && sample.finalFlowRate) || (sample.startTime && sample.endTime)) calcs = getAirSampleData(sample)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  // console.log(calcs);
  // console.log(sample);
  // console.log(doc);

<<<<<<< HEAD
  return listType === "heading" ? (
=======
  return listType === 'heading' ? (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    <div>
      <div className={classNames(classes.flexRow, classes.headingInline)}>
        <div className={classes.spacerSmall} />
        <div className={classes.columnSmall} />
        <div className={classes.columnMed}>Location</div>
        <div className={classes.columnSmall} />
        <div className={classes.columnDoubleSmall}>Flow Rates (mL/min)</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnMedSmall}>Average Rate</div>
        <div className={classes.columnDoubleMedSmall}>Times</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnMedSmallCentered}>Run Time</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnMed}>Sample Volume</div>
        <div className={classes.spacerSmall} />
<<<<<<< HEAD
        {doc.historicalCoc && (
          <div className={classes.columnSmall}>Fibre Result</div>
        )}
        {doc.historicalCoc && (
          <div className={classes.columnSmall}>Reported Concentration</div>
        )}
=======
        {doc.historicalCoc && <div className={classes.columnSmall}>Fibre Result</div>}
        {doc.historicalCoc && <div className={classes.columnSmall}>Reported Concentration</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <div className={classes.columnMedLargeCentered}>Sampling Errors</div>
      </div>
      <div className={classNames(classes.flexRow, classes.infoLight)}>
        <div className={classes.spacerSmall} />
        <div className={classes.columnSmall} />
        <div className={classes.columnMed} />
        <div className={classes.columnSmall} />
        <div className={classes.columnSmallCentered}>Initial</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnSmallCentered}>Final</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnMedSmall} />
        <div className={classes.columnMedSmallCentered}>Start</div>
        <div className={classes.columnMedSmallCentered}>Finish</div>
        <div className={classes.spacerSmall} />
        <div className={classes.columnMedSmall} />
        <div className={classes.spacerSmall} />
        <div className={classes.columnMed} />
        <div className={classes.spacerSmall} />
        {doc.historicalCoc && <div className={classes.columnSmall} />}
        {doc.historicalCoc && <div className={classes.columnSmall} />}
        <div className={classes.columnMedLarge} />
      </div>
    </div>
<<<<<<< HEAD
  ) : listType === "editable" ? (
    <div
      className={classNames(
        classes.paddingTopBottomSmall,
        classes.flexRowHover
      )}
      key={i}
    >
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div
          className={
            disabled ? classes.circleShadedDisabled : classes.circleShaded
          }
        >
          {i + 1}
        </div>
=======
  ) : listType === 'editable' ? (
    <div className={classNames(classes.paddingTopBottomSmall, classes.flexRowHover)} key={i}>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div className={disabled ? classes.circleShadedDisabled : classes.circleShaded}>{i + 1}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      </div>
      <div className={classNames(classes.paddingSidesSmall, classes.columnMed)}>
        <SuggestionField
          that={that}
<<<<<<< HEAD
          suggestions="airLocationSuggestions"
          defaultValue={sample.specificLocation ? sample.specificLocation : ""}
          disabled={disabled}
          onModify={value => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, {
              specificLocation: titleCase(value.trim())
            });
=======
          suggestions='airLocationSuggestions'
          defaultValue={sample.specificLocation ? sample.specificLocation : ''}
          disabled={disabled}
          onModify={(value) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, {
              specificLocation: titleCase(value.trim())
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.columnSmall} />
      <div className={classes.columnSmall}>
        <TextField
<<<<<<< HEAD
          value={sample.initialFlowRate ? sample.initialFlowRate : ""}
          onChange={e => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, {
              initialFlowRate: numericOnly(e.target.value.trim())
            });
=======
          value={sample.initialFlowRate ? sample.initialFlowRate : ''}
          onChange={(e) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, {
              initialFlowRate: numericOnly(e.target.value.trim())
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <TextField
<<<<<<< HEAD
          value={sample.finalFlowRate ? sample.finalFlowRate : ""}
          onChange={e => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, {
              finalFlowRate: numericOnly(e.target.value.trim())
            });
=======
          value={sample.finalFlowRate ? sample.finalFlowRate : ''}
          onChange={(e) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, {
              finalFlowRate: numericOnly(e.target.value.trim())
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedSmall}>
        {sample.initialFlowRate && sample.finalFlowRate ? (
          <span
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
              ? `${parseFloat(calcs.averageFlowRate).toFixed(1)} mL/min`
              : ""}
=======
                  ? classes.informationBoxWarning
                  : classes.informationBoxOk
            }
          >
            {calcs.averageFlowRate ? `${parseFloat(calcs.averageFlowRate).toFixed(1)} mL/min` : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          </span>
        ) : (
          <span />
        )}
      </div>
      <div className={classes.columnMedSmall}>
        <DateTimePicker
          value={sample.startTime ? sample.startTime : null}
          autoOk
<<<<<<< HEAD
          format="D/MM/YY, hh:mma"
          disabled={disabled}
          clearable
          openTo="year"
          views={["year", "month", "date", "hours", "minutes"]}
          onChange={date => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, { startTime: dateOf(date) });
=======
          format='D/MM/YY, hh:mma'
          disabled={disabled}
          clearable
          openTo='year'
          views={['year', 'month', 'date', 'hours', 'minutes']}
          onChange={(date) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, { startTime: dateOf(date) })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.columnMedSmall}>
        <DateTimePicker
          value={sample.endTime ? sample.endTime : null}
          autoOk
<<<<<<< HEAD
          format="D/MM/YY, hh:mma"
          disabled={disabled}
          clearable
          openTo="year"
          views={["year", "month", "date", "hours", "minutes"]}
          onChange={date => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, {
              endTime: dateOf(date),
              totalRunTime: null
            });
=======
          format='D/MM/YY, hh:mma'
          disabled={disabled}
          clearable
          openTo='year'
          views={['year', 'month', 'date', 'hours', 'minutes']}
          onChange={(date) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, {
              endTime: dateOf(date),
              totalRunTime: null
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedSmall}>
        <TextField
          value={sample.totalRunTime ? sample.totalRunTime : calcs.runTime}
          InputProps={{
<<<<<<< HEAD
            endAdornment: <InputAdornment position="end">mins</InputAdornment>
          }}
          onChange={e => {
            that.setState({ modified: true });
            that.props.handleSampleChange(i, {
              totalRunTime: numericOnly(e.target.value.trim())
            });
=======
            endAdornment: <InputAdornment position='end'>mins</InputAdornment>
          }}
          onChange={(e) => {
            that.setState({ modified: true })
            that.props.handleSampleChange(i, {
              totalRunTime: numericOnly(e.target.value.trim())
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMed}>
        {calcs.sampleVolume ? (
          <span
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
          </span>
        ) : (
<<<<<<< HEAD
          ""
=======
          ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        )}
      </div>
      {doc.historicalCoc && (
        <div className={classes.columnSmall}>
          <TextField
<<<<<<< HEAD
            value={
              sample.fibreResult || sample.fibreResult === 0
                ? sample.fibreResult
                : ""
            }
            onChange={e => {
              that.setState({ modified: true });
              that.props.handleSampleChange(i, {
                fibreResult: numericOnly(e.target.value.trim())
              });
=======
            value={sample.fibreResult || sample.fibreResult === 0 ? sample.fibreResult : ''}
            onChange={(e) => {
              that.setState({ modified: true })
              that.props.handleSampleChange(i, {
                fibreResult: numericOnly(e.target.value.trim())
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          />
        </div>
      )}
      {doc.historicalCoc && <div className={classes.columnSmall} />}
      <div className={classes.columnMedLarge}>
        {calcs.differenceTooHigh || calcs.sampleVolumeMuchTooLow ? (
          <div className={classes.boldRed}>
            {calcs.differenceTooHigh && (
<<<<<<< HEAD
              <Tooltip title="The difference between flow rates is greater than 10 per cent. The sample must be rejected.">
=======
              <Tooltip title='The difference between flow rates is greater than 10 per cent. The sample must be rejected.'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <div>Difference between flow rates is too high.</div>
              </Tooltip>
            )}
            {calcs.sampleVolumeMuchTooLow && (
<<<<<<< HEAD
              <Tooltip title="Sample volumes of less than 100L are not recommended because of the increased loss of precision in the results obtained. They may also lead to higher reporting limits than may be desired.">
=======
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
        )}
      </div>
    </div>
  ) : sampleType === "air" ? (
    <div
      className={disabled ? classes.flexRowHoverDisabled : classes.flexRowHover}
      key={i}
    >
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div
          className={
            disabled ? classes.circleShadedDisabled : classes.circleShaded
          }
        >
          {i + 1}
        </div>
      </div>
      <div className={classNames(classes.paddingSidesSmall, classes.columnMed)}>
        {sample.specificLocation ? sample.specificLocation : ""}
      </div>
      <div className={classes.columnSmall} />
      <div className={classes.columnSmallCentered}>
        {sample.initialFlowRate
          ? `${parseFloat(sample.initialFlowRate).toFixed(1)} mL/min`
          : ""}
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmallCentered}>
        {sample.finalFlowRate
          ? `${parseFloat(sample.finalFlowRate).toFixed(1)} mL/min`
          : ""}
=======
          <div className={classes.boldGreen}>No Sampling Errors or Warnings</div>
        ) : (
          ''
        )}
      </div>
    </div>
  ) : sampleType === 'air' ? (
    <div className={disabled ? classes.flexRowHoverDisabled : classes.flexRowHover} key={i}>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div className={disabled ? classes.circleShadedDisabled : classes.circleShaded}>{i + 1}</div>
      </div>
      <div className={classNames(classes.paddingSidesSmall, classes.columnMed)}>
        {sample.specificLocation ? sample.specificLocation : ''}
      </div>
      <div className={classes.columnSmall} />
      <div className={classes.columnSmallCentered}>
        {sample.initialFlowRate ? `${parseFloat(sample.initialFlowRate).toFixed(1)} mL/min` : ''}
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmallCentered}>
        {sample.finalFlowRate ? `${parseFloat(sample.finalFlowRate).toFixed(1)} mL/min` : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedSmallCentered}>
        {sample.averageFlowRate ? (
          <span
            className={
              sample.differenceTooHigh
                ? sample.informationBoxError
                : sample.sampleRateLow || sample.sampleRateHigh
<<<<<<< HEAD
                ? classes.informationBoxWarning
                : classes.informationBoxOk
=======
                  ? classes.informationBoxWarning
                  : classes.informationBoxOk
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }
          >
            {`${parseFloat(sample.averageFlowRate).toFixed(1)} mL/min`}
          </span>
        ) : (
<<<<<<< HEAD
          ""
        )}
      </div>
      <div className={classes.columnMedSmallCentered}>
        {sample.startTime
          ? moment(dateOf(sample.startTime)).format("D/MM/YY, hh:mma")
          : ""}
      </div>
      <div className={classes.columnMedSmallCentered}>
        {sample.endTime
          ? moment(dateOf(sample.endTime)).format("D/MM/YY, hh:mma")
          : ""}
      </div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedSmallCentered}>
        {sample.runTime ? `${sample.runTime} mins` : ""}
      </div>
=======
          ''
        )}
      </div>
      <div className={classes.columnMedSmallCentered}>
        {sample.startTime ? moment(dateOf(sample.startTime)).format('D/MM/YY, hh:mma') : ''}
      </div>
      <div className={classes.columnMedSmallCentered}>{sample.endTime ? moment(dateOf(sample.endTime)).format('D/MM/YY, hh:mma') : ''}</div>
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedSmallCentered}>{sample.runTime ? `${sample.runTime} mins` : ''}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      <div className={classes.spacerSmall} />
      <div className={classes.columnMedCentered}>
        {sample.sampleVolume ? (
          <span
            className={
              sample.sampleVolumeMuchTooLow
                ? classes.informationBoxError
                : sample.sampleVolumeTooLow
<<<<<<< HEAD
                ? classes.informationBoxWarning
                : classes.informationBoxOk
=======
                  ? classes.informationBoxWarning
                  : classes.informationBoxOk
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }
          >
            {`${parseFloat(sample.sampleVolume).toFixed(1)}L`}
          </span>
        ) : (
<<<<<<< HEAD
          ""
        )}
      </div>
      {doc.historicalCoc && (
        <div className={classes.columnSmall}>
          {sample.fibreResult || sample.fibreResult === 0
            ? sample.fibreResult
            : ""}
        </div>
=======
          ''
        )}
      </div>
      {doc.historicalCoc && (
        <div className={classes.columnSmall}>{sample.fibreResult || sample.fibreResult === 0 ? sample.fibreResult : ''}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      )}
      {doc.historicalCoc && (
        <div className={classes.columnSmall}>
          {calcs.reportConcentration ? (
<<<<<<< HEAD
            <div
              className={
                calcs.reportConcentration.includes("<")
                  ? classes.informationBoxOk
                  : calcs.informationBoxError
              }
            >
              {calcs.reportConcentration}
            </div>
          ) : (
            ""
=======
            <div className={calcs.reportConcentration.includes('<') ? classes.informationBoxOk : calcs.informationBoxError}>
              {calcs.reportConcentration}
            </div>
          ) : (
            ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          )}
        </div>
      )}
      <div className={classes.columnMedLarge}>
        {!disabled && (
          <IconButton onClick={onEdit}>
            <EditIcon className={classes.iconRegular} />
          </IconButton>
        )}
      </div>
    </div>
  ) : (
<<<<<<< HEAD
    <div
      className={disabled ? classes.flexRowHoverDisabled : classes.flexRowHover}
      key={i}
    >
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div
          className={
            disabled ? classes.circleShadedDisabled : classes.circleShaded
          }
        >
          {i + 1}
        </div>
      </div>
      <div
        className={classNames(
          classes.paddingSidesSmall,
          classes.columnMedSmall
        )}
      >
        {sample.specificLocation ? sample.specificLocation : "Untitled"} (Air
        Sample)
      </div>
    </div>
  );
}

export default AsbestoSampleListAir;
=======
    <div className={disabled ? classes.flexRowHoverDisabled : classes.flexRowHover} key={i}>
      <div className={classes.spacerSmall} />
      <div className={classes.columnSmall}>
        <div className={disabled ? classes.circleShadedDisabled : classes.circleShaded}>{i + 1}</div>
      </div>
      <div className={classNames(classes.paddingSidesSmall, classes.columnMedSmall)}>
        {sample.specificLocation ? sample.specificLocation : 'Untitled'} (Air Sample)
      </div>
    </div>
  )
}

export default AsbestoSampleListAir
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
