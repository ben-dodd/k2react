<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { TEMPLATE_BUILDING_MATERIAL } from "../../../constants/modal-types";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import SuggestionField from "../../../widgets/SuggestionField";

import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  resetModal,
  onUploadFile,
  setModalError,
} from "../../../actions/modal";
import { fetchSites } from "../../../actions/jobs";
import _ from "lodash";

import "../../../config/geosuggest.css";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { TEMPLATE_BUILDING_MATERIAL } from '../../../constants/modal-types'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import SuggestionField from '../../../widgets/SuggestionField'

import { hideModal, handleModalChange, handleModalSubmit, resetModal, onUploadFile, setModalError } from '../../../actions/modal'
import { fetchSites } from '../../../actions/jobs'
import _ from 'lodash'

import '../../../config/geosuggest.css'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
<<<<<<< HEAD
    userRefName: state.local.userRefName,
  };
};
=======
    userRefName: state.local.userRefName
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSites: (update) => dispatch(fetchSites(update)),
    hideModal: () => dispatch(hideModal()),
    setModalError: (e) => dispatch(setModalError(e)),
    resetModal: () => dispatch(resetModal()),
<<<<<<< HEAD
    onUploadFile: (file, pathRef, prefix, imageQuality) =>
      dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce(
      (target) => dispatch(handleModalChange(target)),
      300
    ),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
  };
};

class TemplateBmModal extends React.Component {
  state = {
    jobNumber: "",
  };

  render() {
    const { modalProps, classes } = this.props;
    return (
      <Dialog
        open={this.props.modalType === TEMPLATE_BUILDING_MATERIAL}
        onClose={this.props.hideModal}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add Job to Site"}
        </DialogTitle>
=======
    onUploadFile: (file, pathRef, prefix, imageQuality) => dispatch(onUploadFile(file, pathRef, prefix, imageQuality)),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef))
  }
}

class TemplateBmModal extends React.Component {
  state = {
    jobNumber: ''
  }

  render() {
    const { modalProps, classes } = this.props
    return (
      <Dialog open={this.props.modalType === TEMPLATE_BUILDING_MATERIAL} onClose={this.props.hideModal}>
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add Job to Site'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>
          <InputLabel>Job Description</InputLabel>
          <SuggestionField
            that={this}
<<<<<<< HEAD
            suggestions="siteJobDescriptions"
            defaultValue={
              this.state.jobDescription ? this.state.jobDescription : ""
            }
=======
            suggestions='siteJobDescriptions'
            defaultValue={this.state.jobDescription ? this.state.jobDescription : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            onModify={(value) => this.setState({ jobDescription: value })}
          />
          <FormControl>
            <InputLabel shrink>Job Number</InputLabel>
            <Input
<<<<<<< HEAD
              id="jobNumber"
=======
              id='jobNumber'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              className={classes.bigInput}
              value={this.state.jobNumber}
              onChange={(e) => {
                this.setState({
<<<<<<< HEAD
                  jobNumber: e.target.value.replace(/\s/g, "").toUpperCase(),
                });
              }}
            />
          </FormControl>
          {modalProps.error && (
            <div className={classes.informationBox}>{modalProps.error}</div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.resetModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.wfmSync} color="primary">
=======
                  jobNumber: e.target.value.replace(/\s/g, '').toUpperCase()
                })
              }}
            />
          </FormControl>
          {modalProps.error && <div className={classes.informationBox}>{modalProps.error}</div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.resetModal} color='secondary'>
            Cancel
          </Button>
          <Button onClick={this.wfmSync} color='primary'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            Submit
          </Button>
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TemplateBmModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TemplateBmModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
