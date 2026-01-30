import { withStyles } from '@material-ui/core/styles'
import { methodsRef } from 'config/firebase'
import { styles } from 'config/styles'
import 'config/tags.css'
import { UPDATE_METHOD_VERSION } from 'constants/modal-types'
import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import { handleModalChange, hideModal } from 'actions/modal'
import _ from 'lodash'

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    staff: state.local.staff,
    me: state.local.me
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300)
  }
}

class UpdateMethodVersionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      change: {
        person: this.props.me.name,
        version: '',
        date: new Date(),
        changes: ''
      },
      newVersion: false
    }
  }

  render() {
    const { classes, modalProps, modalType, doc } = this.props
    const { change, newVersion } = this.state
    return (
      <Dialog open={modalType === UPDATE_METHOD_VERSION} onClose={this.props.hideModal}>
        <DialogTitle>Update Method</DialogTitle>
        <DialogContent>
          Please detail the changes made.
          <form>
            <FormGroup>
              <TextField
                id='changes'
                label='Version Changes'
                value={change && change.changes}
                multiline
                rows={5}
                className={classes.dialogField}
                onChange={(e) =>
                  this.setState({
                    change: {
                      ...change,
                      changes: e.target.value
                    }
                  })
                }
              />
            </FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={newVersion || false} onChange={(e) => this.setState({ newVersion: e.target.checked })} value='enabled' />
              }
              label='Flag as major update (requires re-reading of method)'
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.hideModal()} color='secondary'>
            Cancel
          </Button>
          <Button
            onClick={() => {
              let version = doc.version ? doc.version : 1
              let patch = doc.patch ? doc.patch : 0
              if (this.state.newVersion) {
                version = version + 1
                patch = 0
              } else {
                patch = patch + 1
              }
              doc.changes.push(this.state.change)
              doc.version = version
              doc.patch = patch
              this.props.handleModalSubmit({
                doc: doc,
                pathRef: methodsRef
              })
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UpdateMethodVersionModal))
