<<<<<<< HEAD
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
import { ASBESTOS_ACTION_DETAILS } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { DateTimePicker } from "@material-ui/pickers";
import { hideModalSecondary, hideModal } from "../../../actions/modal";
import { changeActionDetails } from "../../../actions/asbestosLab";
=======
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
import { ASBESTOS_ACTION_DETAILS } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { DateTimePicker } from '@material-ui/pickers'
import { hideModalSecondary, hideModal } from '../../../actions/modal'
import { changeActionDetails } from '../../../actions/asbestosLab'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    me: state.local.me,
    staff: state.local.staff,
    modalType: state.modal.modalTypeSecondary,
<<<<<<< HEAD
    modalProps: state.modal.modalPropsSecondary,
  };
};
=======
    modalProps: state.modal.modalPropsSecondary
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    hideModalSecondary: () => dispatch(hideModalSecondary()),
<<<<<<< HEAD
    hideModal: () => dispatch(hideModal()),
  };
};
=======
    hideModal: () => dispatch(hideModal())
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class AsbestosActionDetailsModal extends React.Component {
  state = {
    date: null,
<<<<<<< HEAD
    user: null,
  };

  render() {
    const { classes, modalProps, modalType } = this.props;
    const names = Object.values(this.props.staff)
      .filter((e) => e.auth && e.auth["Asbestos Bulk Analysis"])
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((e) => ({ value: e.uid, label: e.name }));
=======
    user: null
  }

  render() {
    const { classes, modalProps, modalType } = this.props
    const names = Object.values(this.props.staff)
      .filter((e) => e.auth && e.auth['Asbestos Bulk Analysis'])
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((e) => ({ value: e.uid, label: e.name }))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return modalType === ASBESTOS_ACTION_DETAILS ? (
      <Dialog
        open={modalType === ASBESTOS_ACTION_DETAILS}
        onClose={() => {
<<<<<<< HEAD
          this.props.hideModalSecondary();
          this.props.hideModal();
        }}
        classes={{ paper: classes.minHeightDialog40 }}
        maxWidth="xs"
        fullWidth={true}
        disableBackdropClick={true}
        scroll="paper"
      >
        <DialogTitle>{modalProps.title ? modalProps.title : ""}</DialogTitle>
=======
          this.props.hideModalSecondary()
          this.props.hideModal()
        }}
        classes={{ paper: classes.minHeightDialog40 }}
        maxWidth='xs'
        fullWidth={true}
        disableBackdropClick={true}
        scroll='paper'
      >
        <DialogTitle>{modalProps.title ? modalProps.title : ''}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>
          <DateTimePicker
            value={this.state.date ? this.state.date : new Date()}
            autoOk
            className={classes.formSelectDateTime}
<<<<<<< HEAD
            format="D MMMM YYYY, h:mma"
            clearable
            label="Action Date"
=======
            format='D MMMM YYYY, h:mma'
            clearable
            label='Action Date'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            onChange={(date) => this.setState({ date })}
          />
          <InputLabel className={classes.marginTopSmall}>Action By</InputLabel>
          <Select
            className={classes.selectTight}
<<<<<<< HEAD
            value={
              this.state.user
                ? { value: this.state.user.uid, label: this.state.user.name }
                : null
            }
            options={names}
            onChange={(e) =>
              this.setState({ user: { uid: e.value, name: e.label } })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.hideModalSecondary} color="secondary">
            Cancel
          </Button>{" "}
          :
          <Button
            onClick={() => {
              changeActionDetails(
                modalProps.job,
                modalProps.samples,
                modalProps.field,
                this.state,
                this.props.me
              );
              this.props.hideModalSecondary();
              this.props.hideModal();
            }}
            color="primary"
=======
            value={this.state.user ? { value: this.state.user.uid, label: this.state.user.name } : null}
            options={names}
            onChange={(e) => this.setState({ user: { uid: e.value, name: e.label } })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.hideModalSecondary} color='secondary'>
            Cancel
          </Button>{' '}
          :
          <Button
            onClick={() => {
              changeActionDetails(modalProps.job, modalProps.samples, modalProps.field, this.state, this.props.me)
              this.props.hideModalSecondary()
              this.props.hideModal()
            }}
            color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
    ) : null;
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AsbestosActionDetailsModal)
);
=======
    ) : null
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AsbestosActionDetailsModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
