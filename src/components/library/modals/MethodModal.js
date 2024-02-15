<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

import { RichEditor } from "../../editor/RichEditor";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

// import store from '../../store';
import { METHOD, UPDATE_METHOD_VERSION } from "../../../constants/modal-types";
import { methodsRef } from "../../../config/firebase";
import "../../../config/tags.css";

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
import Grid from "@material-ui/core/Grid";

import Add from "@material-ui/icons/Add";
=======
import React from 'react'
// import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

import { RichEditor } from '../../editor/RichEditor'
// import { EditorState, ContentState, convertToRaw } from 'draft-js'
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'

// import store from '../../store';
import { METHOD } from '../../../constants/modal-types'
import { methodsRef } from '../../../config/firebase'
import '../../../config/tags.css'

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
import Grid from '@material-ui/core/Grid'

import Add from '@material-ui/icons/Add'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
import {
  hideModal,
  showModal,
  handleModalChange,
  handleModalChangeStep,
  handleModalSubmit,
  onUploadFile,
  handleGlossaryChange
<<<<<<< HEAD
} from "../../../actions/modal";
import { sendSlackMessage, } from '../../../actions/helpers';
import { getUserAttrs, } from "../../../actions/local";
import _ from "lodash";

const mapStateToProps = state => {
=======
} from '../../../actions/modal'
import { sendSlackMessage } from '../../../actions/helpers'
import { getUserAttrs } from '../../../actions/local'
import _ from 'lodash'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    delimiters: state.const.tagDelimiters,
    doc: state.modal.modalProps.doc,
    documents: state.local.documents,
    methods: state.local.methods,
    me: state.local.me,
    quizzes: state.local.quizzes,
    modalProps: state.modal.modalProps,
    modalType: state.modal.modalType,
    qualificationtypes: state.const.qualificationtypes,
    staff: state.local.staff,
    tags: state.modal.modalProps.tags,
    tagSuggestions: state.const.docTagSuggestions,
    userRefName: state.local.userRefName
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserAttrs: _.debounce(
      userPath => dispatch(getUserAttrs(userPath)),
      1000
    ),
    handleModalChange: _.debounce(
      target => dispatch(handleModalChange(target)),
      300
    ),
    handleModalChangeStep: target => dispatch(handleModalChangeStep(target)),
    handleModalSubmit: (doc, pathRef) =>
      dispatch(handleModalSubmit(doc, pathRef)),
    handleGlossaryChange: (number, type, value) =>
      dispatch(handleGlossaryChange(number, type, value)),
    handleSelectChange: target => dispatch(handleModalChange(target)),
    hideModal: () => dispatch(hideModal()),
    showModal: modal => dispatch(showModal(modal)),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  };
};

class MethodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      editorState: {}
    };
  }

  convertToDraft = html => {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      //console.log(EditorState.createWithContent(contentState));
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  };

  getStyles = (uid, list) => {
    return {
      fontWeight:
        list && list.constructor === Array && list.indexOf(uid) > -1 ? 600 : 200
    };
  };

  sendNewAttrSlack = () => {
    let message = {
      text: `${this.props.modalProps.staffName} has added a new module.\n${
        this.props.qualificationtypes[this.props.doc.type].name
      }`
    };
    sendSlackMessage(message, true);
  };

  getPage = () => {
    const { doc, classes } = this.props;
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAttrs: _.debounce((userPath) => dispatch(getUserAttrs(userPath)), 1000),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleModalChangeStep: (target) => dispatch(handleModalChangeStep(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef)),
    handleGlossaryChange: (number, type, value) => dispatch(handleGlossaryChange(number, type, value)),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    hideModal: () => dispatch(hideModal()),
    showModal: (modal) => dispatch(showModal(modal)),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  }
}

class MethodModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      editorState: {}
    }
  }

  convertToDraft = (html) => {
    const contentBlock = htmlToDraft(html)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      //console.log(EditorState.createWithContent(contentState));
      return EditorState.createWithContent(contentState)
    } else {
      return EditorState.createEmpty()
    }
  }

  getStyles = (uid, list) => {
    return {
      fontWeight: list && list.constructor === Array && list.indexOf(uid) > -1 ? 600 : 200
    }
  }

  sendNewAttrSlack = () => {
    let message = {
      text: `${this.props.modalProps.staffName} has added a new module.\n${this.props.qualificationtypes[this.props.doc.type].name}`
    }
    sendSlackMessage(message, true)
  }

  getPage = () => {
    const { doc, classes } = this.props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    const staff = Object.values({
      ...this.props.staff,
      [this.props.me.uid]: this.props.me
    })
<<<<<<< HEAD
      .map(staff => staff.name)
      .sort();
=======
      .map((staff) => staff.name)
      .sort()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const headerpage = (
      <form>
        <FormGroup>
          <TextField
<<<<<<< HEAD
            id="title"
            label="Title"
            className={classes.dialogField}
            defaultValue={doc && doc.title}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            className={classes.dialogField}
            defaultValue={doc && doc.subtitle}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="tmCode"
            label="TM Code"
            className={classes.dialogField}
            defaultValue={doc && doc.tmCode}
            helperText="e.g. TM 4.21-17 Part 1"
            onChange={e => {
              this.props.handleModalChange(e.target);
=======
            id='title'
            label='Title'
            className={classes.dialogField}
            defaultValue={doc && doc.title}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='subtitle'
            label='Subtitle'
            className={classes.dialogField}
            defaultValue={doc && doc.subtitle}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='tmCode'
            label='TM Code'
            className={classes.dialogField}
            defaultValue={doc && doc.tmCode}
            helperText='e.g. TM 4.21-17 Part 1'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          />
          <FormControl className={classes.dialogField}>
            <InputLabel shrink>Prepared By</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                this.props.handleModalChange({
                  id: "preparedBy",
                  value: e.target.value
                });
              }}
              value={doc && doc.preparedBy}
              input={<Input name="preparedBy" id="preparedBy" />}
            >
              <option value="" />
              {staff &&
                staff.map(staff => {
=======
              onChange={(e) => {
                this.props.handleModalChange({
                  id: 'preparedBy',
                  value: e.target.value
                })
              }}
              value={doc && doc.preparedBy}
              input={<Input name='preparedBy' id='preparedBy' />}
            >
              <option value='' />
              {staff &&
                staff.map((staff) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <option key={staff} value={staff}>
                      {staff}
                    </option>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </Select>
          </FormControl>
          <FormControl className={classes.dialogField}>
            <InputLabel shrink>Checked By</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                this.props.handleModalChange({
                  id: "checkedBy",
                  value: e.target.value
                });
              }}
              value={doc && doc.checkedBy}
              input={<Input name="checkedBy" id="checkedBy" />}
            >
              <option value="" />
              {staff &&
                staff.map(staff => {
=======
              onChange={(e) => {
                this.props.handleModalChange({
                  id: 'checkedBy',
                  value: e.target.value
                })
              }}
              value={doc && doc.checkedBy}
              input={<Input name='checkedBy' id='checkedBy' />}
            >
              <option value='' />
              {staff &&
                staff.map((staff) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <option key={staff} value={staff}>
                      {staff}
                    </option>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </Select>
          </FormControl>
          <FormControl className={classes.dialogField}>
            <InputLabel shrink>Document Controller</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                this.props.handleModalChange({
                  id: "documentController",
                  value: e.target.value
                });
              }}
              value={doc && doc.documentController}
              input={
                <Input name="documentController" id="documentController" />
              }
            >
              <option value="" />
              {staff &&
                staff.map(staff => {
=======
              onChange={(e) => {
                this.props.handleModalChange({
                  id: 'documentController',
                  value: e.target.value
                })
              }}
              value={doc && doc.documentController}
              input={<Input name='documentController' id='documentController' />}
            >
              <option value='' />
              {staff &&
                staff.map((staff) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <option key={staff} value={staff}>
                      {staff}
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
            id="referencemethod"
            label="Reference Method"
            fullWidth
            multiline
            style={{ marginBottom: 12 }}
            value={(doc && doc.referencemethod) || ""}
            onChange={e => {
              this.props.handleModalChange({
                id: "referencemethod",
                value: e.target.value
              });
            }}
          />
          <TextField
            id="deviations"
            label="Deviations"
            fullWidth
            multiline
            style={{ marginBottom: 12 }}
            value={(doc && doc.deviations) || ""}
            onChange={e => {
              this.props.handleModalChange({
                id: "deviations",
                value: e.target.value
              });
            }}
          />
          <InputLabel style={{ fontSize: 12, marginTop: 4 }}>
            Current Version
          </InputLabel>
          {`${doc.version}.${doc.patch}`}
        </FormGroup>
      </form>
    );
=======
            id='referencemethod'
            label='Reference Method'
            fullWidth
            multiline
            style={{ marginBottom: 12 }}
            value={(doc && doc.referencemethod) || ''}
            onChange={(e) => {
              this.props.handleModalChange({
                id: 'referencemethod',
                value: e.target.value
              })
            }}
          />
          <TextField
            id='deviations'
            label='Deviations'
            fullWidth
            multiline
            style={{ marginBottom: 12 }}
            value={(doc && doc.deviations) || ''}
            onChange={(e) => {
              this.props.handleModalChange({
                id: 'deviations',
                value: e.target.value
              })
            }}
          />
          <InputLabel style={{ fontSize: 12, marginTop: 4 }}>Current Version</InputLabel>
          {`${doc.version}.${doc.patch}`}
        </FormGroup>
      </form>
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const glossarypage = (
      <form>
        <h5>Glossary</h5>
<<<<<<< HEAD
        {Array.from(
          Array(doc.numberInGlossary ? doc.numberInGlossary : 10),
          (x, i) => i
        ).map(i => {
=======
        {Array.from(Array(doc.numberInGlossary ? doc.numberInGlossary : 10), (x, i) => i).map((i) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          return (
            <Grid container key={i}>
              <Grid item xs={4}>
                <TextField
                  id={`glossaryterm${i + 1}`}
<<<<<<< HEAD
                  style={{ width: "100%" }}
                  defaultValue={
                    doc &&
                    doc.glossary &&
                    doc.glossary[i + 1] &&
                    doc.glossary[i + 1].term
                  }
                  onChange={e => {
                    this.props.handleGlossaryChange(i, "term", e.target.value);
=======
                  style={{ width: '100%' }}
                  defaultValue={doc && doc.glossary && doc.glossary[i + 1] && doc.glossary[i + 1].term}
                  onChange={(e) => {
                    this.props.handleGlossaryChange(i, 'term', e.target.value)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
              </Grid>
              <Grid item xs={8} style={{ paddingLeft: 12, paddingRight: 12 }}>
                <TextField
                  id={`glossarydefinition{i+1}`}
                  multiline
<<<<<<< HEAD
                  style={{ width: "100%" }}
                  defaultValue={
                    doc &&
                    doc.glossary &&
                    doc.glossary[i + 1] &&
                    doc.glossary[i + 1].definition
                  }
                  onChange={e => {
                    this.props.handleGlossaryChange(
                      i,
                      "definition",
                      e.target.value
                    );
=======
                  style={{ width: '100%' }}
                  defaultValue={doc && doc.glossary && doc.glossary[i + 1] && doc.glossary[i + 1].definition}
                  onChange={(e) => {
                    this.props.handleGlossaryChange(i, 'definition', e.target.value)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }}
                />
              </Grid>
            </Grid>
<<<<<<< HEAD
          );
        })}
        <Grid container justify="center" alignItems="center">
=======
          )
        })}
        <Grid container justify='center' alignItems='center'>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <Grid item xs={12}>
            <Button
              style={{ marginTop: 24, marginLeft: 128 }}
              onClick={() => {
                this.props.handleModalChange({
<<<<<<< HEAD
                  id: "numberInGlossary",
                  value: doc.numberInGlossary ? doc.numberInGlossary + 10 : 20
                });
=======
                  id: 'numberInGlossary',
                  value: doc.numberInGlossary ? doc.numberInGlossary + 10 : 20
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            >
              <Add style={{ marginRight: 12 }} /> Add More Terms
            </Button>
          </Grid>
        </Grid>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const contentpage = (
      <form>
        <h5>Section {this.state.page - 2}</h5>
        <TextField
<<<<<<< HEAD
          id="title"
          label="Title"
          fullWidth
          style={{ marginBottom: 12 }}
          value={
            (doc.steps &&
              doc.steps[this.state.page - 3] &&
              doc.steps[this.state.page - 3].title) ||
            ""
          }
          onChange={e =>
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: "title",
=======
          id='title'
          label='Title'
          fullWidth
          style={{ marginBottom: 12 }}
          value={(doc.steps && doc.steps[this.state.page - 3] && doc.steps[this.state.page - 3].title) || ''}
          onChange={(e) =>
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: 'title',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              value: e.target.value
            })
          }
        />

        <RichEditor
          editorState={this.state.editorState[this.state.page - 3]}
<<<<<<< HEAD
          onEditorStateChange={changedState => {
=======
          onEditorStateChange={(changedState) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            this.setState({
              editorState: {
                ...this.state.editorState,
                [this.state.page - 3]: changedState
              }
<<<<<<< HEAD
            });
            let html = draftToHtml(
              convertToRaw(changedState.getCurrentContent())
            );
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: "content",
              value: html
            });
=======
            })
            let html = draftToHtml(convertToRaw(changedState.getCurrentContent()))
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: 'content',
              value: html
            })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        />

        <TextField
<<<<<<< HEAD
          id="html"
          label="HTML"
          multiline
          fullWidth
          style={{ marginBottom: 12 }}
          value={
            (doc.steps &&
              doc.steps[this.state.page - 3] &&
              doc.steps[this.state.page - 3].content) ||
            ""
          }
          onChange={e =>
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: "content",
=======
          id='html'
          label='HTML'
          multiline
          fullWidth
          style={{ marginBottom: 12 }}
          value={(doc.steps && doc.steps[this.state.page - 3] && doc.steps[this.state.page - 3].content) || ''}
          onChange={(e) =>
            this.props.handleModalChangeStep({
              step: (this.state.page - 3).toString(),
              id: 'content',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              value: e.target.value
            })
          }
        />
      </form>
<<<<<<< HEAD
    );

    switch (this.state.page) {
      case 1:
        return headerpage;
        break;
      case 2:
        return glossarypage;
      default:
        return contentpage;
    }
  };

  render() {
    const { modalProps, doc, classes } = this.props;

    return (
      <Dialog
        key="methodmodal"
        maxWidth="md"
=======
    )

    switch (this.state.page) {
      case 1:
        return headerpage
        break
      case 2:
        return glossarypage
      default:
        return contentpage
    }
  }

  render() {
    const { modalProps, doc, classes } = this.props

    return (
      <Dialog
        key='methodmodal'
        maxWidth='md'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        fullWidth={true}
        open={this.props.modalType === METHOD}
        onEnter={() => this.setState({ page: 1 })}
        onClose={() => this.props.hideModal}
      >
<<<<<<< HEAD
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New K2 Method"}
        </DialogTitle>
=======
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New K2 Method'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>{this.getPage()}</DialogContent>
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
          <Button
            disabled={this.state.page === 1}
            onClick={() => {
<<<<<<< HEAD
              this.setState({ page: this.state.page - 1 });
            }}
            color="default"
=======
              this.setState({ page: this.state.page - 1 })
            }}
            color='default'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Back
          </Button>
          <Button
            onClick={() => {
              if (!this.state.editorState[this.state.page - 1]) {
<<<<<<< HEAD
                if (
                  doc.steps &&
                  doc.steps[this.state.page - 1] &&
                  doc.steps[this.state.page - 1].content
                ) {
                  this.setState({
                    editorState: {
                      ...this.state.editorState,
                      [this.state.page - 1]: this.convertToDraft(
                        doc.steps[this.state.page - 1].content
                      )
                    }
                  });
=======
                if (doc.steps && doc.steps[this.state.page - 1] && doc.steps[this.state.page - 1].content) {
                  this.setState({
                    editorState: {
                      ...this.state.editorState,
                      [this.state.page - 1]: this.convertToDraft(doc.steps[this.state.page - 1].content)
                    }
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                } else {
                  this.setState({
                    editorState: {
                      ...this.state.editorState,
                      [this.state.page - 1]: EditorState.createEmpty()
                    }
<<<<<<< HEAD
                  });
                }
              }
              this.setState({ page: this.state.page + 1 });
            }}
            color="default"
=======
                  })
                }
              }
              this.setState({ page: this.state.page + 1 })
            }}
            color='default'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Forward
          </Button>
          <Button
            onClick={() => {
<<<<<<< HEAD
              let i = 1;
              doc.steps &&
                Object.values(doc.steps).forEach(step => {
                  if (!step.title) step.title = "Section " + i;
                  i = i + 1;
                });
              if (!doc.uid) {
                if (doc.tmCode) {
                  doc.uid = doc.tmCode.replace(/\s+/g, "-").toUpperCase();
                } else if (doc.title) {
                  doc.uid = doc.title.replace(/\s+/g, "-").toLowerCase();
                } else {
                  doc.uid = Math.round(Math.random() * 1000000).toString();
=======
              let i = 1
              doc.steps &&
                Object.values(doc.steps).forEach((step) => {
                  if (!step.title) step.title = 'Section ' + i
                  i = i + 1
                })
              if (!doc.uid) {
                if (doc.tmCode) {
                  doc.uid = doc.tmCode.replace(/\s+/g, '-').toUpperCase()
                } else if (doc.title) {
                  doc.uid = doc.title.replace(/\s+/g, '-').toLowerCase()
                } else {
                  doc.uid = Math.round(Math.random() * 1000000).toString()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: methodsRef
<<<<<<< HEAD
                });
=======
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              } else {
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: methodsRef
<<<<<<< HEAD
                });
=======
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                // this.props.showModal({ modalType: UPDATE_METHOD_VERSION, modalProps: { doc: doc, } });
              }
              // this.sendNewAttrSlack();
            }}
<<<<<<< HEAD
            color="primary"
=======
            color='primary'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Submit
          </Button>
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
  )(MethodModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MethodModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
