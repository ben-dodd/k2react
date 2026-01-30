import { withStyles } from '@material-ui/core/styles'
import { styles } from 'config/styles'
import 'config/tags.css'
import { ASBESTOS_SAMPLE_LOG } from 'constants/modal-types'
import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import { dateOf } from 'actions/helpers'
import { clearLog, fetchLogs } from 'actions/local'
import { hideModal } from 'actions/modal'
import moment from 'moment'

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    logs: state.local.logs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogs: (uid, limit) => dispatch(fetchLogs('asbestosLab', 'sample', uid, limit)),
    clearLog: () => dispatch(clearLog()),
    hideModal: () => dispatch(hideModal())
  }
}

class SampleLogModal extends React.Component {
  render() {
    const { classes, modalProps, modalType, logs } = this.props
    // //console.log('Printing modal props');
    // //console.log(JSON.stringify(modalProps));
    // //console.log(modalProps.uid.toString());
    return (
      modalType === ASBESTOS_SAMPLE_LOG && (
        <Dialog
          open={modalType === ASBESTOS_SAMPLE_LOG}
          onClose={this.props.hideModal}
          maxWidth='lg'
          fullWidth={true}
          onEnter={() => this.props.fetchLogs(modalProps.uid, 20)}
          onExit={this.props.clearLog}
        >
          <DialogTitle>{modalProps.title ? modalProps.title : 'Sample History'}</DialogTitle>
          <DialogContent>
            <Grid container direction='column'>
              <Grid item>
                <Grid container style={{ fontWeight: 'bold' }}>
                  <Grid item xs={2}>
                    Date
                  </Grid>
                  <Grid item xs={1}>
                    Category
                  </Grid>
                  <Grid item xs={7}>
                    Change
                  </Grid>
                  <Grid item xs={2}>
                    User
                  </Grid>
                </Grid>
                {logs &&
                  logs.map((log) => {
                    return (
                      <Grid key={log.uid} container style={{ marginTop: 12 }}>
                        <Grid item xs={2}>
                          {moment(dateOf(log.date)).format('D MMM YYYY, h:mma')}
                        </Grid>
                        <Grid item xs={1}>
                          {log.type}
                        </Grid>
                        <Grid item xs={7}>
                          {log.log}
                        </Grid>
                        <Grid item xs={2}>
                          {log.userName}
                        </Grid>
                      </Grid>
                    )
                  })}
              </Grid>
            </Grid>
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
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SampleLogModal))
