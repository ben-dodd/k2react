<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { QUIZ } from "../../../../constants/modal-types";
import { quizzesRef } from "../../../../config/firebase";
import "../../../../config/tags.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
=======
import React from 'react'
// import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { QUIZ } from '../../../../constants/modal-types'
import { quizzesRef } from '../../../../config/firebase'
import '../../../../config/tags.css'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  onUploadFile,
  handleTagDelete,
  handleTagAddition
<<<<<<< HEAD
} from "../../../../actions/modal";
import { getUserAttrs } from "../../../../actions/local";
import _ from "lodash";

const mapStateToProps = state => {
=======
} from '../../../../actions/modal'
import { getUserAttrs } from '../../../../actions/local'
import _ from 'lodash'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    categories: state.const.trainingCategories,
    questions: state.local.questions
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef)),
    handleModalChange: _.debounce(
      target => dispatch(handleModalChange(target)),
      300
    ),
    handleSelectChange: target => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
    handleTagDelete: tag => dispatch(handleTagDelete(tag)),
    handleTagAddition: tag => dispatch(handleTagAddition(tag)),
    getUserAttrs: _.debounce(userPath => dispatch(getUserAttrs(userPath)), 1000)
  };
};

class QuizModal extends React.Component {
  getStyles = name => {
    let requiredlist = this.props.doc.required ? this.props.doc.required : [];
    let optionallist = this.props.doc.optional ? this.props.doc.optional : [];
    let list = requiredlist.concat(optionallist);
    return {
      fontWeight: list.indexOf(name) === -1 ? 200 : 600
    };
  };

  render() {
    const { modalProps, doc, classes, categories, questions } = this.props;
    let max = 0;
    if (doc.optional) max = max + doc.optional.length;
    if (doc.required) max = max + doc.required.length;
    return (
      <Dialog
        open={this.props.modalType === QUIZ}
        onClose={() => this.props.hideModal}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Quiz"}
        </DialogTitle>
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef)),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef)),
    handleTagDelete: (tag) => dispatch(handleTagDelete(tag)),
    handleTagAddition: (tag) => dispatch(handleTagAddition(tag)),
    getUserAttrs: _.debounce((userPath) => dispatch(getUserAttrs(userPath)), 1000)
  }
}

class QuizModal extends React.Component {
  getStyles = (name) => {
    let requiredlist = this.props.doc.required ? this.props.doc.required : []
    let optionallist = this.props.doc.optional ? this.props.doc.optional : []
    let list = requiredlist.concat(optionallist)
    return {
      fontWeight: list.indexOf(name) === -1 ? 200 : 600
    }
  }

  render() {
    const { modalProps, doc, classes, categories, questions } = this.props
    let max = 0
    if (doc.optional) max = max + doc.optional.length
    if (doc.required) max = max + doc.required.length
    return (
      <Dialog open={this.props.modalType === QUIZ} onClose={() => this.props.hideModal}>
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Quiz'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>
          <form>
            <FormGroup>
              <FormControl className={classes.dialogField}>
                <InputLabel shrink>Quiz Category</InputLabel>
                <Select
<<<<<<< HEAD
                  onChange={e => {
                    this.props.handleSelectChange({
                      id: "category",
                      value: e.target.value
                    });
                  }}
                  value={doc.category}
                  input={<Input name="category" id="category" />}
                >
                  <option value="" />
                  {categories &&
                    categories.map(category => {
=======
                  onChange={(e) => {
                    this.props.handleSelectChange({
                      id: 'category',
                      value: e.target.value
                    })
                  }}
                  value={doc.category}
                  input={<Input name='category' id='category' />}
                >
                  <option value='' />
                  {categories &&
                    categories.map((category) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      return (
                        <option key={category.key} value={category.key}>
                          {category.desc}
                        </option>
<<<<<<< HEAD
                      );
=======
                      )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    })}
                </Select>
              </FormControl>
              <TextField
<<<<<<< HEAD
                id="title"
                label="Title"
                defaultValue={doc && doc.title}
                className={classes.dialogField}
                onChange={e => {
                  this.props.handleModalChange(e.target);
                }}
              />
              <TextField
                id="desc"
                label="Description"
                defaultValue={doc && doc.desc}
                multiline
                className={classes.dialogField}
                onChange={e => {
                  this.props.handleModalChange(e.target);
=======
                id='title'
                label='Title'
                defaultValue={doc && doc.title}
                className={classes.dialogField}
                onChange={(e) => {
                  this.props.handleModalChange(e.target)
                }}
              />
              <TextField
                id='desc'
                label='Description'
                defaultValue={doc && doc.desc}
                multiline
                className={classes.dialogField}
                onChange={(e) => {
                  this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
              <FormControl className={classes.dialogField}>
                <InputLabel>Required Questions</InputLabel>
                <Select
                  multiple
                  value={doc.required ? doc.required : []}
<<<<<<< HEAD
                  onChange={e => {
                    this.props.handleSelectChange({
                      id: "required",
                      value: e.target.value
                    });
                  }}
                  input={<Input id="required" />}
                  renderValue={selected => (
                    <div>{selected.length} questions selected.</div>
                  )}
=======
                  onChange={(e) => {
                    this.props.handleSelectChange({
                      id: 'required',
                      value: e.target.value
                    })
                  }}
                  input={<Input id='required' />}
                  renderValue={(selected) => <div>{selected.length} questions selected.</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 500
                      }
                    }
                  }}
                >
<<<<<<< HEAD
                  {questions.map(question => {
                    if (!doc.optional) doc.optional = [];
                    let disabled = doc.optional.indexOf(question.uid) > -1;
                    return (
                      <MenuItem
                        key={question.uid}
                        value={question.uid}
                        style={this.getStyles(question.uid)}
                        disabled={disabled}
                      >
                        {question.question}
                      </MenuItem>
                    );
=======
                  {questions.map((question) => {
                    if (!doc.optional) doc.optional = []
                    let disabled = doc.optional.indexOf(question.uid) > -1
                    return (
                      <MenuItem key={question.uid} value={question.uid} style={this.getStyles(question.uid)} disabled={disabled}>
                        {question.question}
                      </MenuItem>
                    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  })}
                </Select>
              </FormControl>
              <FormControl className={classes.dialogField}>
                <InputLabel>Optional Questions</InputLabel>
                <Select
                  multiple
                  value={doc.optional ? doc.optional : []}
<<<<<<< HEAD
                  onChange={e => {
                    this.props.handleSelectChange({
                      id: "optional",
                      value: e.target.value
                    });
                  }}
                  input={<Input id="optional" />}
                  renderValue={selected => (
                    <div>{selected.length} questions selected.</div>
                  )}
=======
                  onChange={(e) => {
                    this.props.handleSelectChange({
                      id: 'optional',
                      value: e.target.value
                    })
                  }}
                  input={<Input id='optional' />}
                  renderValue={(selected) => <div>{selected.length} questions selected.</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 500
                      }
                    }
                  }}
                >
<<<<<<< HEAD
                  {questions.map(question => {
                    if (!doc.required) doc.required = [];
                    let disabled = doc.required.indexOf(question.uid) > -1;
                    return (
                      <MenuItem
                        key={question.uid}
                        value={question.uid}
                        style={this.getStyles(question.uid)}
                        disabled={disabled}
                      >
                        {question.question}
                      </MenuItem>
                    );
=======
                  {questions.map((question) => {
                    if (!doc.required) doc.required = []
                    let disabled = doc.required.indexOf(question.uid) > -1
                    return (
                      <MenuItem key={question.uid} value={question.uid} style={this.getStyles(question.uid)} disabled={disabled}>
                        {question.question}
                      </MenuItem>
                    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  })}
                </Select>
              </FormControl>
              <TextField
<<<<<<< HEAD
                id="numberofquestions"
                type="number"
                InputProps={{ inputProps: { min: 1, max: max } }}
                label="Number of Questions to Display"
                defaultValue={doc && doc.numberofquestions}
                className={classes.dialogField}
                onChange={e => {
                  this.props.handleModalChange(e.target);
=======
                id='numberofquestions'
                type='number'
                InputProps={{ inputProps: { min: 1, max: max } }}
                label='Number of Questions to Display'
                defaultValue={doc && doc.numberofquestions}
                className={classes.dialogField}
                onChange={(e) => {
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
                if (doc.category && doc.title) {
<<<<<<< HEAD
                  doc.type =
                    doc.category.toUpperCase() +
                    "-" +
                    doc.title.replace(/\s+/g, "-").toLowerCase();
                  this.props.handleModalSubmit({
                    doc: doc,
                    pathRef: quizzesRef
                  });
                } else {
                  window.alert("Add a category and title before submitting.");
                }
              }}
              color="primary"
=======
                  doc.type = doc.category.toUpperCase() + '-' + doc.title.replace(/\s+/g, '-').toLowerCase()
                  this.props.handleModalSubmit({
                    doc: doc,
                    pathRef: quizzesRef
                  })
                } else {
                  window.alert('Add a category and title before submitting.')
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuizModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(QuizModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
