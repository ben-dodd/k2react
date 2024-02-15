<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { NOTICES } from "../../../constants/modal-types";
import { noticesRef } from "../../../config/firebase";
import "../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";

import { DatePicker } from "@material-ui/pickers";

// import {SketchField, Tools} from ``'react-sketch';

import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  onUploadFile,
  handleTagDelete,
  handleTagAddition,
} from "../../../actions/modal";
import { getUserAttrs, fetchNotices } from "../../../actions/local";
import { dateOf, sendSlackMessage } from "../../../actions/helpers";
import _ from "lodash";
=======
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { NOTICES } from '../../../constants/modal-types'
import { noticesRef } from '../../../config/firebase'
import '../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from 'react-select'

import { DatePicker } from '@material-ui/pickers'

// import {SketchField, Tools} from ``'react-sketch';

import { hideModal, handleModalChange, handleModalSubmit, onUploadFile, handleTagDelete, handleTagAddition } from '../../../actions/modal'
import { getUserAttrs, fetchNotices } from '../../../actions/local'
import { dateOf, sendSlackMessage } from '../../../actions/helpers'
import _ from 'lodash'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapStateToProps = (state) => {
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    me: state.local.me,
    doc: state.modal.modalProps.doc,
    categories: state.const.noticeCategories,
<<<<<<< HEAD
    questions: state.local.questions,
  };
};
=======
    questions: state.local.questions
  }
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef)),
<<<<<<< HEAD
    handleModalChange: _.debounce(
      (target) => dispatch(handleModalChange(target)),
      300
    ),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
    handleTagDelete: (tag) => dispatch(handleTagDelete(tag)),
    handleTagAddition: (tag) => dispatch(handleTagAddition(tag)),
    getUserAttrs: _.debounce(
      (userPath) => dispatch(getUserAttrs(userPath)),
      1000
    ),
    fetchNotices: (update) => dispatch(fetchNotices(update)),
  };
};

class NoticeModal extends React.Component {
  render() {
    const { modalProps, doc, classes, categories, questions } = this.props;
    return (
      <Dialog
        open={this.props.modalType === NOTICES}
        onClose={() => this.props.hideModal}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Notice"}
        </DialogTitle>
=======
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef)),
    handleTagDelete: (tag) => dispatch(handleTagDelete(tag)),
    handleTagAddition: (tag) => dispatch(handleTagAddition(tag)),
    getUserAttrs: _.debounce((userPath) => dispatch(getUserAttrs(userPath)), 1000),
    fetchNotices: (update) => dispatch(fetchNotices(update))
  }
}

class NoticeModal extends React.Component {
  render() {
    const { modalProps, doc, classes, categories, questions } = this.props
    return (
      <Dialog open={this.props.modalType === NOTICES} onClose={() => this.props.hideModal}>
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Notice'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>
          <form>
            <FormGroup>
              <FormControl className={classes.dialogField}>
                <InputLabel shrink>Notice Category</InputLabel>
                <Select
                  className={classes.select}
<<<<<<< HEAD
                  value={
                    doc.category
                      ? { label: doc.categorydesc, id: doc.category }
                      : { label: "", id: "" }
                  }
=======
                  value={doc.category ? { label: doc.categorydesc, id: doc.category } : { label: '', id: '' }}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  options={
                    categories &&
                    categories.map((category) => ({
                      value: category.key,
<<<<<<< HEAD
                      label: category.desc,
=======
                      label: category.desc
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }))
                  }
                  onChange={(e) => {
                    this.props.handleSelectChange({
<<<<<<< HEAD
                      id: "category",
                      value: e.value,
                    });
                    this.props.handleSelectChange({
                      id: "categorydesc",
                      value: e.label,
                    });
=======
                      id: 'category',
                      value: e.value
                    })
                    this.props.handleSelectChange({
                      id: 'categorydesc',
                      value: e.label
                    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
              </FormControl>
              <DatePicker
                value={doc.date}
                autoOk
<<<<<<< HEAD
                label={doc.category === "has" ? "Incident Date" : "Date"}
                openTo="year"
                format="D MMMM YYYY"
                views={["year", "month", "date"]}
=======
                label={doc.category === 'has' ? 'Incident Date' : 'Date'}
                openTo='year'
                format='D MMMM YYYY'
                views={['year', 'month', 'date']}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                clearable
                onChange={(date) =>
                  this.props.handleModalChange({
                    value: dateOf(date),
<<<<<<< HEAD
                    id: "date",
=======
                    id: 'date'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  })
                }
              />
              <div className={classes.marginBottomSmall} />
              <TextField
<<<<<<< HEAD
                id="job"
                label={
                  doc.category === "client"
                    ? "Client Name"
                    : doc.category === "geneq"
                    ? "Title"
                    : "Job Number, Site Address or Subject"
                }
                defaultValue={doc && doc.job ? doc.job : ""}
                className={classes.dialogField}
                onChange={(e) => {
                  this.props.handleModalChange(e.target);
                }}
              />
              {doc.category === "has" && (
                <div>
                  <TextField
                    id="incidentno"
                    label="Incident No."
                    defaultValue={doc && doc.incidentno ? doc.incidentno : ""}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target);
                    }}
                  />
                  <TextField
                    id="incidentstaff"
                    label="Staff Involved"
                    defaultValue={
                      doc && doc.incidentstaff ? doc.incidentstaff : ""
                    }
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target);
                    }}
                  />
                  <TextField
                    id="incidentdesc"
                    label="Incident Description"
                    defaultValue={
                      doc && doc.incidentdesc ? doc.incidentdesc : ""
                    }
=======
                id='job'
                label={
                  doc.category === 'client' ? 'Client Name' : doc.category === 'geneq' ? 'Title' : 'Job Number, Site Address or Subject'
                }
                defaultValue={doc && doc.job ? doc.job : ''}
                className={classes.dialogField}
                onChange={(e) => {
                  this.props.handleModalChange(e.target)
                }}
              />
              {doc.category === 'has' && (
                <div>
                  <TextField
                    id='incidentno'
                    label='Incident No.'
                    defaultValue={doc && doc.incidentno ? doc.incidentno : ''}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
                    }}
                  />
                  <TextField
                    id='incidentstaff'
                    label='Staff Involved'
                    defaultValue={doc && doc.incidentstaff ? doc.incidentstaff : ''}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
                    }}
                  />
                  <TextField
                    id='incidentdesc'
                    label='Incident Description'
                    defaultValue={doc && doc.incidentdesc ? doc.incidentdesc : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    className={classes.dialogField}
                    multiline
                    rows={3}
                    onChange={(e) => {
<<<<<<< HEAD
                      this.props.handleModalChange(e.target);
=======
                      this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                </div>
              )}
              <TextField
<<<<<<< HEAD
                id="text"
                label={
                  "genleadseqclient".includes(doc.category)
                    ? "Message"
                    : "Learnings"
                }
                defaultValue={doc && doc.text ? doc.text : ""}
=======
                id='text'
                label={'genleadseqclient'.includes(doc.category) ? 'Message' : 'Learnings'}
                defaultValue={doc && doc.text ? doc.text : ''}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                className={classes.dialogField}
                multiline
                rows={10}
                rowsMax={30}
                onChange={(e) => {
<<<<<<< HEAD
                  this.props.handleModalChange(e.target);
=======
                  this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
<<<<<<< HEAD
              this.props.hideModal();
            }}
            color="secondary"
=======
              this.props.hideModal()
            }}
            color='secondary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Cancel
          </Button>
          {modalProps.isUploading ? (
<<<<<<< HEAD
            <Button color="primary" disabled>
=======
            <Button color='primary' disabled>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              Submit
            </Button>
          ) : (
            <Button
              onClick={() => {
                if (doc.category) {
<<<<<<< HEAD
                  doc.type = doc.category + "-" + doc.date + "-";
                  doc.author.replace(/\s+/g, "_");
                  this.props.handleModalSubmit({
                    doc: doc,
                    pathRef: noticesRef,
                  });
                  let message = {
                    text: `${this.props.me.name} has ${
                      doc.uid ? "edited a" : "added a new"
                    } ${doc.categorydesc} notice.
                    ${doc.text && `\n${doc.text}`}`,
                  };
                  sendSlackMessage(message, true);
                  this.props.fetchNotices(true);
                } else {
                  window.alert("Add a category before submitting.");
                }
              }}
              color="primary"
=======
                  doc.type = doc.category + '-' + doc.date + '-'
                  doc.author.replace(/\s+/g, '_')
                  this.props.handleModalSubmit({
                    doc: doc,
                    pathRef: noticesRef
                  })
                  let message = {
                    text: `${this.props.me.name} has ${doc.uid ? 'edited a' : 'added a new'} ${doc.categorydesc} notice.
                    ${doc.text && `\n${doc.text}`}`
                  }
                  sendSlackMessage(message, true)
                  this.props.fetchNotices(true)
                } else {
                  window.alert('Add a category before submitting.')
                }
              }}
              color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(NoticeModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NoticeModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
