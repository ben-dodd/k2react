import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import '../../../config/tags.css'

import { SampleTextyLine } from '../../../widgets/FormWidgets'

import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { hideModal } from '../../../actions/modal'
import moment from 'moment'
import momentbusinessdays from 'moment-business-days'
import momenttimezone from 'moment-timezone'
import momentbusinesstime from 'moment-business-time'
import _ from 'lodash'
import { getStats } from '../../../utils/asbestosLab/getters'

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    me: state.local.me
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  }
}

class AsbestosCocDetailsModal extends React.Component {
  render() {
    const { classes, modalProps, modalType } = this.props
    let sample = modalProps.doc
    let job = modalProps.job

    return (
      <div>
        {job && sample && modalType === COC_STATS && (
          <Dialog
            open={modalType === COC_STATS}
            onClose={this.props.hideModal}
            onEnter={getStats(samples[job.uid], job)}
            maxWidth='lg'
            fullWidth={true}
          >
            <DialogTitle>{`Analysis Details for Sample ${sample.jobNumber}-${sample.sampleNumber}`}</DialogTitle>
            {sample && (
              <DialogContent>
                <Grid container alignItems='flex-start' justify='flex-end'>
                  <Grid item xs={6}>
                    <div className={classes.informationBox}>
                      <div className={classes.heading}>Turnaround Times</div>
                      {sample.receivedDate
                        ? sample.verified
                          ? SampleTextyLine(
                              'Turnaround Time',
                              `${moment.utc(timeInLab).format('H:mm')}/${moment.utc(timeInLabBusiness).format('H:mm')}`
                            )
                          : SampleTextyLine(
                              'Time In Lab',
                              `${moment.utc(timeInLab).format('H:mm')}/${moment.utc(timeInLabBusiness).format('H:mm')}`
                            )
                        : SampleTextyLine('Turnaround Time', 'Not yet received by lab')}
                    </div>
                    <div className={classes.informationBox}>
                      {/* <Grid item lg={2} xs={6}> */}
                      <span className={classes.headingInline}>Total Samples:</span>{' '}
                      <span className={classes.infoLight}>{stats && stats.totalSamples}</span>
                      <br />
                      <Tooltip title={'Red: Positive samples, Green: Negative samples, Black: Total samples with results'}>
                        <div className={classes.infoLight}>
                          <span className={classes.headingInline}>Results:</span>{' '}
                          <span className={classes.boldRed}>
                            {stats && stats.positiveSamples !== undefined ? stats.positiveSamples : 0}
                          </span>
                          -
                          <span className={classes.boldGreen}>
                            {stats && stats.negativeSamples !== undefined ? stats.negativeSamples : 0}
                          </span>
                          /
                          <span className={classes.boldBlack}>
                            {stats && parseInt(stats.positiveSamples) + parseInt(stats.negativeSamples)}
                          </span>
                        </div>
                      </Tooltip>
                      <Tooltip
                        title={
                          'Red: Second analysis contradicts first analysis, Orange: Second analysis shows variance in asbestos types reported, Green: First and second analysis match'
                        }
                      >
                        <div>
                          <span className={classes.headingInline}>Results Confirmed:</span>{' '}
                          {stats && stats.confirmedResults !== undefined && stats.confirmedResults > 0 ? (
                            <span className={classes.infoLight}>
                              <span className={classes.boldGreen}>
                                {stats && stats.confirmedResultsOK !== undefined && stats.confirmedResultsOK}
                              </span>
                              -
                              <span className={classes.boldOrange}>
                                {stats && stats.confirmedResultsConflict !== undefined && stats.confirmedResultsConflict}
                              </span>
                              -
                              <span className={classes.boldRed}>
                                {stats && stats.confirmedResultsWrong !== undefined && stats.confirmedResultsWrong}
                              </span>
                              /<span className={classes.boldBlack}>{stats && stats.confirmedResults}</span>
                            </span>
                          ) : (
                            <span>N/A</span>
                          )}
                        </div>
                      </Tooltip>
                      <Tooltip title={'Max/Average Time (Business Hours Only in Brackets)'}>
                        <div>
                          <span className={classes.headingInline}>Turnaround Time:</span>{' '}
                          {stats && stats.maxTurnaroundTime > 0 && stats.averageTurnaroundTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxTurnaroundTime).format('H:mm')}/{moment.utc(stats.averageTurnaroundTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}{' '}
                          (
                          {stats && stats.maxTurnaroundBusinessTime > 0 && stats.averageTurnaroundBusinessTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxTurnaroundBusinessTime).format('H:mm')}/
                              {moment.utc(stats.averageTurnaroundBusinessTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}
                          )
                          <br />
                          <span className={classes.headingInline}>Analysis Time:</span>{' '}
                          {stats && stats.maxAnalysisTime > 0 && stats.averageAnalysisTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxAnalysisTime).format('H:mm')}/{moment.utc(stats.averageAnalysisTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}{' '}
                          (
                          {stats && stats.maxAnalysisBusinessTime > 0 && stats.averageAnalysisBusinessTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxAnalysisBusinessTime).format('H:mm')}/
                              {moment.utc(stats.averageAnalysisBusinessTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}
                          )
                          <br />
                          <span className={classes.headingInline}>Report Time:</span>{' '}
                          {stats && stats.maxReportTime > 0 && stats.averageReportTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxReportTime).format('H:mm')}/{moment.utc(stats.averageReportTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}{' '}
                          (
                          {stats && stats.maxReportBusinessTime > 0 && stats.averageReportBusinessTime > 0 ? (
                            <span className={classes.infoLight}>
                              {moment.utc(stats.maxReportBusinessTime).format('H:mm')}/
                              {moment.utc(stats.averageReportBusinessTime).format('H:mm')}
                            </span>
                          ) : (
                            <span className={classes.infoLight}>N/A</span>
                          )}
                          )
                        </div>
                      </Tooltip>
                    </div>
                  </Grid>
                </Grid>
              </DialogContent>
            )}
            <DialogActions>
              <Button onClick={() => this.props.hideModal()} color='primary'>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosCocDetailsModal))
