<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../../config/styles";
import { connect } from "react-redux";
import { WithContext as ReactTags } from "react-tag-input";
// import store from '../../store';
import { QUESTION } from "../../../../constants/modal-types";
import { questionsRef } from "../../../../config/firebase";
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
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
=======
import React from 'react'
// import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../../config/styles'
import { connect } from 'react-redux'
import { WithContext as ReactTags } from 'react-tag-input'
// import store from '../../store';
import { QUESTION } from '../../../../constants/modal-types'
import { questionsRef } from '../../../../config/firebase'
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
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
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
    userRefName: state.local.userRefName,
    tags: state.modal.modalProps.tags,
    tagSuggestions: state.const.quiztags,
    questiontypes: state.const.questiontypes,
    delimiters: state.const.tagDelimiters
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class QuestionModal extends React.Component {
  // deleteImage = (file, uid) => {
  //   this.props.handleSelectChange({ id: 'fileUrl', value: null });
  //   this.props.handleSelectChange({ id: 'fileRef', value: null });
  //   if (uid) {
  //     let change = {
  //       fileUrl: null,
  //       fileRef: null,
  //     }
  //     usersRef.doc(this.props.modalProps.userPath).collection("attr").doc(uid).update(change);
  //   }
  //   storage.ref(file).delete();
  // }

  render() {
<<<<<<< HEAD
    const { modalProps, doc, classes, questiontypes } = this.props;
    return (
      <Dialog
        open={this.props.modalType === QUESTION}
        onClose={() => this.props.hideModal}
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Question"}
        </DialogTitle>
        <DialogContent>
          {!questiontypes[doc.type] && (
            <div>This question is not able to be edited.</div>
          )}
=======
    const { modalProps, doc, classes, questiontypes } = this.props
    return (
      <Dialog open={this.props.modalType === QUESTION} onClose={() => this.props.hideModal}>
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Question'}</DialogTitle>
        <DialogContent>
          {!questiontypes[doc.type] && <div>This question is not able to be edited.</div>}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          {doc.type && questiontypes && questiontypes[doc.type] && (
            <form>
              <FormGroup>
                <FormControl className={classes.dialogField}>
                  <InputLabel shrink>Question Type</InputLabel>
                  <Select
<<<<<<< HEAD
                    onChange={e => {
                      this.props.handleSelectChange({
                        id: "type",
                        value: e.target.value
                      });
                    }}
                    value={doc.type}
                    input={<Input name="type" id="type" />}
                  >
                    <option value="" />
                    {questiontypes &&
                      Object.keys(questiontypes).map(key => {
=======
                    onChange={(e) => {
                      this.props.handleSelectChange({
                        id: 'type',
                        value: e.target.value
                      })
                    }}
                    value={doc.type}
                    input={<Input name='type' id='type' />}
                  >
                    <option value='' />
                    {questiontypes &&
                      Object.keys(questiontypes).map((key) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        return (
                          <option key={key} value={key}>
                            {questiontypes[key].name}
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
                  id="question"
                  label="Question"
                  defaultValue={doc && doc.question}
                  multiline
                  className={classes.dialogField}
                  onChange={e => {
                    this.props.handleModalChange(e.target);
=======
                  id='question'
                  label='Question'
                  defaultValue={doc && doc.question}
                  multiline
                  className={classes.dialogField}
                  onChange={(e) => {
                    this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />

                {questiontypes[doc.type].truefalse && (
                  <FormControl className={classes.dialogField}>
                    <InputLabel shrink>True or False?</InputLabel>
                    <Select
<<<<<<< HEAD
                      onChange={e =>
                        this.props.handleSelectChange({
                          id: "truefalse",
=======
                      onChange={(e) =>
                        this.props.handleSelectChange({
                          id: 'truefalse',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          value: e.target.value
                        })
                      }
                      value={doc.truefalse}
<<<<<<< HEAD
                      input={<Input name="truefalse" id="truefalse" />}
                    >
                      {["True", "False"].map(key => {
=======
                      input={<Input name='truefalse' id='truefalse' />}
                    >
                      {['True', 'False'].map((key) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        return (
                          <option key={key} value={key}>
                            {key}
                          </option>
<<<<<<< HEAD
                        );
=======
                        )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      })}
                    </Select>
                  </FormControl>
                )}

                {questiontypes[doc.type].answer && (
                  <TextField
<<<<<<< HEAD
                    id="answer"
                    label="Answer"
                    defaultValue={doc && doc.answer}
                    className={classes.dialogField}
                    helperText="Enter an exact answer or use regular expressions (https://regex101.com/) to add some leeway (e.g. '\b(christchurch|chch|otautahi)\b' will allow either of those three answers, '^(?=.*\bimmunocompromised\b)(?=.*\bcarcinogenic\b).*$' will require both of those words in any order.)"
                    onChange={e => {
                      this.props.handleModalChange(e.target);
=======
                    id='answer'
                    label='Answer'
                    defaultValue={doc && doc.answer}
                    className={classes.dialogField}
                    helperText="Enter an exact answer or use regular expressions (https://regex101.com/) to add some leeway (e.g. '\b(christchurch|chch|otautahi)\b' will allow either of those three answers, '^(?=.*\bimmunocompromised\b)(?=.*\bcarcinogenic\b).*$' will require both of those words in any order.)"
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].correct && (
                  <TextField
<<<<<<< HEAD
                    id="correct"
                    label="Correct Answer(s)"
=======
                    id='correct'
                    label='Correct Answer(s)'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    multiline
                    defaultValue={
                      doc &&
                      doc.correct &&
                      doc.correct
<<<<<<< HEAD
                        .map(obj => {
                          return obj.text;
                        })
                        .join("\n")
                    }
                    helperText={
                      doc.type.includes("single")
                        ? ""
                        : "Put each correct option on a new line."
                    }
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split("\n")
                          .filter(Boolean)
                          .map(option => {
                            return { text: option };
                          })
                      });
=======
                        .map((obj) => {
                          return obj.text
                        })
                        .join('\n')
                    }
                    helperText={doc.type.includes('single') ? '' : 'Put each correct option on a new line.'}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split('\n')
                          .filter(Boolean)
                          .map((option) => {
                            return { text: option }
                          })
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].incorrect && (
                  <TextField
<<<<<<< HEAD
                    id="incorrect"
                    label="Incorrect Answers"
=======
                    id='incorrect'
                    label='Incorrect Answers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    multiline
                    defaultValue={
                      doc &&
                      doc.incorrect &&
                      doc.incorrect
<<<<<<< HEAD
                        .map(obj => {
                          return obj.text;
                        })
                        .join("\n")
                    }
                    helperText="Put each incorrect option on a new line."
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split("\n")
                          .filter(Boolean)
                          .map(option => {
                            return { text: option };
                          })
                      });
=======
                        .map((obj) => {
                          return obj.text
                        })
                        .join('\n')
                    }
                    helperText='Put each incorrect option on a new line.'
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split('\n')
                          .filter(Boolean)
                          .map((option) => {
                            return { text: option }
                          })
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].answers && (
                  <TextField
<<<<<<< HEAD
                    id="answers"
                    label="Answers"
=======
                    id='answers'
                    label='Answers'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    multiline
                    defaultValue={
                      doc &&
                      doc.answers &&
                      doc.answers
<<<<<<< HEAD
                        .map(obj => {
                          return obj.text;
                        })
                        .join("\n")
                    }
                    helperText="Put each option on a new line in the correct order."
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split("\n")
                          .filter(Boolean)
                          .map(option => {
                            return { text: option };
                          })
                      });
=======
                        .map((obj) => {
                          return obj.text
                        })
                        .join('\n')
                    }
                    helperText='Put each option on a new line in the correct order.'
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value
                          .split('\n')
                          .filter(Boolean)
                          .map((option) => {
                            return { text: option }
                          })
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].buckets && (
                  <TextField
<<<<<<< HEAD
                    id="buckets"
                    label="Buckets"
=======
                    id='buckets'
                    label='Buckets'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    multiline
                    defaultValue={
                      doc &&
                      doc.buckets &&
                      doc.buckets
<<<<<<< HEAD
                        .map(bucket => {
                          return [
                            bucket.label,
                            ...bucket.answers.map(obj => {
                              return obj.text;
                            })
                          ].join("\n");
                        })
                        .join("\n\n|")
                    }
                    helperText="Put the bucket label on the first line. Put each option on a new line below it. Separate each bucket with a pipe (|) symbol."
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value.split("|").map(bucket => {
                          let list = bucket.split("\n");
=======
                        .map((bucket) => {
                          return [
                            bucket.label,
                            ...bucket.answers.map((obj) => {
                              return obj.text
                            })
                          ].join('\n')
                        })
                        .join('\n\n|')
                    }
                    helperText='Put the bucket label on the first line. Put each option on a new line below it. Separate each bucket with a pipe (|) symbol.'
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange({
                        id: e.target.id,
                        value: e.target.value.split('|').map((bucket) => {
                          let list = bucket.split('\n')
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          return {
                            label: list[0],
                            answers: list
                              .splice(1)
                              .filter(Boolean)
<<<<<<< HEAD
                              .map(option => {
                                return { text: option };
                              })
                          };
                        })
                      });
=======
                              .map((option) => {
                                return { text: option }
                              })
                          }
                        })
                      })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].correctmax && (
                  <TextField
<<<<<<< HEAD
                    id="correctmax"
                    type="number"
=======
                    id='correctmax'
                    type='number'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    InputProps={{
                      inputProps: {
                        min: 1,
                        max: doc.correct && doc.correct.length
                      }
                    }}
<<<<<<< HEAD
                    label="Max Number of Correct Answers to Show"
                    defaultValue={doc && doc.correctmax}
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange(e.target);
=======
                    label='Max Number of Correct Answers to Show'
                    defaultValue={doc && doc.correctmax}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].correctmin && (
                  <TextField
<<<<<<< HEAD
                    id="correctmin"
                    type="number"
=======
                    id='correctmin'
                    type='number'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    InputProps={{
                      inputProps: {
                        min: 1,
                        max: doc.correct && doc.correct.length
                      }
                    }}
<<<<<<< HEAD
                    label="Min Number of Correct Answers to Show"
                    defaultValue={doc && doc.correctmin}
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange(e.target);
=======
                    label='Min Number of Correct Answers to Show'
                    defaultValue={doc && doc.correctmin}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                {questiontypes[doc.type].numberofoptions && (
                  <TextField
<<<<<<< HEAD
                    id="numberofoptions"
                    type="number"
                    InputProps={{
                      inputProps: {
                        min: 2,
                        max:
                          (doc.correct && doc.correct.length) +
                          (doc.incorrect + doc.incorrect.length)
                      }
                    }}
                    label="Total Number of Options to Show"
                    defaultValue={doc && doc.numberofoptions}
                    className={classes.dialogField}
                    onChange={e => {
                      this.props.handleModalChange(e.target);
=======
                    id='numberofoptions'
                    type='number'
                    InputProps={{
                      inputProps: {
                        min: 2,
                        max: (doc.correct && doc.correct.length) + (doc.incorrect + doc.incorrect.length)
                      }
                    }}
                    label='Total Number of Options to Show'
                    defaultValue={doc && doc.numberofoptions}
                    className={classes.dialogField}
                    onChange={(e) => {
                      this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    }}
                  />
                )}

                <TextField
<<<<<<< HEAD
                  id="hint"
                  label="Hint"
                  defaultValue={doc && doc.hint}
                  className={classes.dialogField}
                  multiline
                  helperText="Add a hint that can be viewed when doing the quiz."
                  onChange={e => {
                    this.props.handleModalChange(e.target);
=======
                  id='hint'
                  label='Hint'
                  defaultValue={doc && doc.hint}
                  className={classes.dialogField}
                  multiline
                  helperText='Add a hint that can be viewed when doing the quiz.'
                  onChange={(e) => {
                    this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />

                <TextField
<<<<<<< HEAD
                  id="note"
                  label="Note"
                  defaultValue={doc && doc.note}
                  className={classes.dialogField}
                  multiline
                  helperText="Add a note that can be displayed in the quiz results to aid understanding."
                  onChange={e => {
                    this.props.handleModalChange(e.target);
=======
                  id='note'
                  label='Note'
                  defaultValue={doc && doc.note}
                  className={classes.dialogField}
                  multiline
                  helperText='Add a note that can be displayed in the quiz results to aid understanding.'
                  onChange={(e) => {
                    this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />

                <div style={{ marginBottom: 128 }}>
                  <InputLabel shrink>Tags</InputLabel>
                  {this.props.tagSuggestions && (
                    <ReactTags
                      tags={doc.tags}
                      suggestions={this.props.tagSuggestions}
                      handleDelete={this.props.handleTagDelete}
                      handleAddition={this.props.handleTagAddition}
                      delimiters={this.props.delimiters}
<<<<<<< HEAD
                      handleFilterSuggestions={(
                        textInputValue,
                        possibleSuggestionsArray
                      ) => {
                        var lowerCaseQuery = textInputValue.toLowerCase();
                        return possibleSuggestionsArray.filter(suggestion => {
                          return suggestion.text
                            .toLowerCase()
                            .includes(lowerCaseQuery);
                        });
=======
                      handleFilterSuggestions={(textInputValue, possibleSuggestionsArray) => {
                        var lowerCaseQuery = textInputValue.toLowerCase()
                        return possibleSuggestionsArray.filter((suggestion) => {
                          return suggestion.text.toLowerCase().includes(lowerCaseQuery)
                        })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      minQueryLength={1}
                      inline={true}
                      allowDragDrop={false}
                      allowDeleteFromEmptyInput={false}
                      autofocus={false}
                      autocomplete={true}
                    />
                  )}
                </div>

                {/*
              { doc.fileUrl &&
                <div>
                  <img src={doc.fileUrl} alt='' width="200px" style={{ opacity: "0.5", borderStyle: "solid", borderWidth: "2px" }} />
                  <IconButton style={{ position: 'relative', top: '2px', left: "-120px", borderStyle: "solid", borderWidth: "2px", fontSize: 8, }} onClick={() => { if (window.confirm('Are you sure you wish to delete the image?')) this.deleteImage(doc.fileRef, doc.uid)}}>
                    <Close />
                  </IconButton>
                </div>
              }*/}

                {/*Always allow file upload

              <InputLabel style={{ fontSize: 12, marginTop: 4 }}>Upload Scanned Image (Image files are preferred over PDF)</InputLabel>
              <label>
                <UploadIcon className={classes.colorAccent} />
                <input id='attr_upload_file' type='file' style={{display: 'none'}} onChange={e =>
                {
                  if (doc.fileUrl) {
                    storage.ref(doc.fileRef).delete();
                  }
                  this.props.onUploadFile({
                  file: e.currentTarget.files[0],
                  storagePath: 'attr/' + modalProps.staffName.replace(/\s+/g, '') + '/' + doc.type + '_',
                  });

                }
                } />
                <LinearProgress style={{ marginTop: 4, }} variant="determinate" value={modalProps.uploadProgress} />
              </label>*/}
              </FormGroup>
            </form>
          )}
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
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: questionsRef
<<<<<<< HEAD
                });
              }}
              color="primary"
=======
                })
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
  )(QuestionModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(QuestionModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
