import { withStyles } from '@material-ui/core/styles'
import { styles } from 'config/styles'
import 'config/tags.css'
import { QC_ANALYSIS } from 'constants/modal-types'
import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { handleModalChange, hideModal } from 'actions/modal'
import _ from 'lodash'

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300)
  }
}

class QCAnalysisModal extends React.Component {
  render() {
    const { classes, modalProps, modalType } = this.props
    return (
      <Dialog open={modalType === QC_ANALYSIS} onClose={this.props.hideModal}>
        <DialogTitle>{modalProps.title}</DialogTitle>
        <DialogContent>In development.</DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.hideModal()} color='secondary'>
            Cancel
          </Button>
          <Button
            onClick={() => {
              modalProps.issueTestCertificate(modalProps.doc.version, modalProps.doc.changes)
              this.props.hideModal()
            }}
            color='primary'
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(QCAnalysisModal))
