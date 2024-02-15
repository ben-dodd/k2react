<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";
// import store from '../../store';
import { COMMENT } from "../../../constants/modal-types";
import { noticesRef } from "../../../config/firebase";
import "../../../config/tags.css";
import moment from "moment";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import {
  hideModal,
  handleModalChange,
  handleModalSubmit,
  onUploadFile,
  handleTagDelete,
  handleTagAddition
} from "../../../actions/modal";
import { getUserAttrs, fetchNotices, removeNoticeReads, } from "../../../actions/local";
import { sendSlackMessage, } from '../../../actions/helpers';
import _ from "lodash";

const mapStateToProps = state => {
=======
import React from 'react'
// import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'
// import store from '../../store';
import { COMMENT } from '../../../constants/modal-types'
import { noticesRef } from '../../../config/firebase'
import '../../../config/tags.css'
import moment from 'moment'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

import { hideModal, handleModalChange, handleModalSubmit, onUploadFile, handleTagDelete, handleTagAddition } from '../../../actions/modal'
import { getUserAttrs, fetchNotices, removeNoticeReads } from '../../../actions/local'
import { sendSlackMessage } from '../../../actions/helpers'
import _ from 'lodash'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    me: state.local.me,
    categories: state.const.noticeCategories,
    questions: state.local.questions,
<<<<<<< HEAD
    noticeReads: state.local.noticeReads,
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
    getUserAttrs: _.debounce(userPath => dispatch(getUserAttrs(userPath)), 1000),
    fetchNotices: (update) => dispatch(fetchNotices(update)),
  };
};

class CommentModal extends React.Component {
  render() {
    const { modalProps, doc, classes, } = this.props;

    return (
      <Dialog
        open={this.props.modalType === COMMENT}
        onClose={() => this.props.hideModal}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Comment"}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="text"
            label="Comment"
=======
    noticeReads: state.local.noticeReads
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
    getUserAttrs: _.debounce((userPath) => dispatch(getUserAttrs(userPath)), 1000),
    fetchNotices: (update) => dispatch(fetchNotices(update))
  }
}

class CommentModal extends React.Component {
  render() {
    const { modalProps, doc, classes } = this.props

    return (
      <Dialog open={this.props.modalType === COMMENT} onClose={() => this.props.hideModal}>
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Comment'}</DialogTitle>
        <DialogContent>
          <TextField
            id='text'
            label='Comment'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            defaultValue={doc && doc.comment && doc.comment.text ? doc.comment.text : null}
            className={classes.dialogField}
            multiline
            rows={5}
<<<<<<< HEAD
            onChange={e => {
              this.props.handleModalChange({id: 'comment', value: e.target.value, });
=======
            onChange={(e) => {
              this.props.handleModalChange({
                id: 'comment',
                value: e.target.value
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          />
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
<<<<<<< HEAD
                let comment = doc.comment;
                let newComment = comment && !comment.uid;
                if (comment && !comment.uid && comment.text && comment.text !== '') {
                  comment.uid = moment().format('x');
                }
                let newDoc = {};
                let comments = doc.notice.comments;
                if ((!comment.text || comment.text === '') && comment.uid) {
                  //console.log(comments);
                  delete comments[comment.uid];
                  newDoc = {
                    ...doc.notice,
                    comments,
                  }
                } else {
                  if (!comments) {
                    comments = {[comment.uid]: comment};
=======
                let comment = doc.comment
                let newComment = comment && !comment.uid
                if (comment && !comment.uid && comment.text && comment.text !== '') {
                  comment.uid = moment().format('x')
                }
                let newDoc = {}
                let comments = doc.notice.comments
                if ((!comment.text || comment.text === '') && comment.uid) {
                  //console.log(comments);
                  delete comments[comment.uid]
                  newDoc = {
                    ...doc.notice,
                    comments
                  }
                } else {
                  if (!comments) {
                    comments = { [comment.uid]: comment }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  } else {
                    comments = {
                      ...comments,
                      [comment.uid]: comment
                    }
                  }

                  let message = {
<<<<<<< HEAD
                    text: `${
                      this.props.me.name
                    } has ${newComment ? 'added a new' : 'edited a'} comment.`
                  };
                  sendSlackMessage(message, true);
=======
                    text: `${this.props.me.name} has ${newComment ? 'added a new' : 'edited a'} comment.`
                  }
                  sendSlackMessage(message, true)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

                  // Reset all staff read if a new or edited comment
                  newDoc = {
                    ...doc.notice,
<<<<<<< HEAD
                    comments,
                  }
                  removeNoticeReads(doc.notice, this.props.noticeReads);
=======
                    comments
                  }
                  removeNoticeReads(doc.notice, this.props.noticeReads)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }

                //console.log(newDoc);
                this.props.handleModalSubmit({
                  doc: newDoc,
<<<<<<< HEAD
                  pathRef: noticesRef,
                });
                this.props.fetchNotices(true);
              }}
              color="primary"
=======
                  pathRef: noticesRef
                })
                this.props.fetchNotices(true)
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
  )(CommentModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CommentModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
