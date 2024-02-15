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
  return {
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    doc: state.modal.modalProps.doc,
    me: state.local.me,
    categories: state.const.noticeCategories,
    questions: state.local.questions,
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
            defaultValue={doc && doc.comment && doc.comment.text ? doc.comment.text : null}
            className={classes.dialogField}
            multiline
            rows={5}
            onChange={(e) => {
              this.props.handleModalChange({
                id: 'comment',
                value: e.target.value
              })
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.hideModal()
            }}
            color='secondary'
          >
            Cancel
          </Button>
          {modalProps.isUploading ? (
            <Button color='primary' disabled>
              Submit
            </Button>
          ) : (
            <Button
              onClick={() => {
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
                  } else {
                    comments = {
                      ...comments,
                      [comment.uid]: comment
                    }
                  }

                  let message = {
                    text: `${this.props.me.name} has ${newComment ? 'added a new' : 'edited a'} comment.`
                  }
                  sendSlackMessage(message, true)

                  // Reset all staff read if a new or edited comment
                  newDoc = {
                    ...doc.notice,
                    comments
                  }
                  removeNoticeReads(doc.notice, this.props.noticeReads)
                }

                //console.log(newDoc);
                this.props.handleModalSubmit({
                  doc: newDoc,
                  pathRef: noticesRef
                })
                this.props.fetchNotices(true)
              }}
              color='primary'
            >
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CommentModal))
