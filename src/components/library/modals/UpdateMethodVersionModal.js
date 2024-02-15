<<<<<<< HEAD
import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import store from "../../../store";
import { UPDATE_METHOD_VERSION } from "../../../constants/modal-types";
import { methodsRef } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import {
  hideModal,
  handleModalChange,
  handleModalSubmit
} from "../../../actions/modal";
import _ from "lodash";

const mapStateToProps = state => {
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { UPDATE_METHOD_VERSION } from '../../../constants/modal-types'
import { methodsRef } from '../../../config/firebase'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import { hideModal, handleModalChange, handleModalSubmit } from '../../../actions/modal'
import _ from 'lodash'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    staff: state.local.staff,
    me: state.local.me
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    handleModalChange: _.debounce(
      target => dispatch(handleModalChange(target)),
      300
    )
  };
};

class UpdateMethodVersionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: {
        person: this.props.me.name,
        version: "",
        date: new Date(),
        changes: ""
      },
      newVersion: false
    };
  }

  render() {
    const { classes, modalProps, modalType, doc } = this.props;
    const { change, newVersion } = this.state;
    return (
      <Dialog
        open={modalType === UPDATE_METHOD_VERSION}
        onClose={this.props.hideModal}
      >
=======
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogTitle>Update Method</DialogTitle>
        <DialogContent>
          Please detail the changes made.
          <form>
            <FormGroup>
              <TextField
<<<<<<< HEAD
                id="changes"
                label="Version Changes"
=======
                id='changes'
                label='Version Changes'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                value={change && change.changes}
                multiline
                rows={5}
                className={classes.dialogField}
<<<<<<< HEAD
                onChange={e =>
=======
                onChange={(e) =>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
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
<<<<<<< HEAD
                <Checkbox
                  checked={newVersion || false}
                  onChange={e =>
                    this.setState({ newVersion: e.target.checked })
                  }
                  value="enabled"
                />
              }
              label="Flag as major update (requires re-reading of method)"
=======
                <Checkbox checked={newVersion || false} onChange={(e) => this.setState({ newVersion: e.target.checked })} value='enabled' />
              }
              label='Flag as major update (requires re-reading of method)'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            />
          </form>
        </DialogContent>
        <DialogActions>
<<<<<<< HEAD
          <Button onClick={() => this.props.hideModal()} color="secondary">
=======
          <Button onClick={() => this.props.hideModal()} color='secondary'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            Cancel
          </Button>
          <Button
            onClick={() => {
<<<<<<< HEAD
              let version = doc.version ? doc.version : 1;
              let patch = doc.patch ? doc.patch : 0;
              if (this.state.newVersion) {
                version = version + 1;
                patch = 0;
              } else {
                patch = patch + 1;
              }
              doc.changes.push(this.state.change);
              doc.version = version;
              doc.patch = patch;
              this.props.handleModalSubmit({
                doc: doc,
                pathRef: methodsRef
              });
            }}
            color="primary"
          >
            Submit
          </Button>
          }
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdateMethodVersionModal)
);
=======
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
