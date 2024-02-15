<<<<<<< HEAD
import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

import { DOCUMENT } from "../../../constants/modal-types";
import { docsRef, storage } from "../../../config/firebase";
import "../../../config/tags.css";

import { RichEditor } from "../../editor/RichEditor";
import { EditorState, ContentState, convertToRaw } from "draft-js";
// import ReactRichEditor from 'react-rich-text-editor'
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import UploadIcon from "@material-ui/icons/CloudUpload";
=======
import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

import { DOCUMENT } from '../../../constants/modal-types'
import { docsRef, storage } from '../../../config/firebase'
import '../../../config/tags.css'

import { RichEditor } from '../../editor/RichEditor'
// import { EditorState, ContentState, convertToRaw } from "draft-js";
// import ReactRichEditor from 'react-rich-text-editor'
// import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import LinearProgress from '@material-ui/core/LinearProgress'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import UploadIcon from '@material-ui/icons/CloudUpload'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

import {
  hideModal,
  showModal,
  handleModalChange,
  handleModalChangeStep,
  handleModalSubmit,
  onUploadFile,
  handleTagAddition,
  handleTagDelete
<<<<<<< HEAD
} from "../../../actions/modal";
import { getUserAttrs, } from "../../../actions/local";
import { sendSlackMessage, } from '../../../actions/helpers';
import _ from "lodash";

const mapStateToProps = state => {
=======
} from '../../../actions/modal'
import { getUserAttrs } from '../../../actions/local'
import { sendSlackMessage } from '../../../actions/helpers'
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
    userRefName: state.local.userRefName,
    categories: state.const.documentCategories
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
    handleSelectChange: target => dispatch(handleModalChange(target)),
    hideModal: () => dispatch(hideModal()),
    showModal: modal => dispatch(showModal(modal)),
    handleTagDelete: tag => dispatch(handleTagDelete(tag)),
    handleTagAddition: tag => dispatch(handleTagAddition(tag)),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  };
};

class DocumentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      editorState: {}
    };
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAttrs: _.debounce((userPath) => dispatch(getUserAttrs(userPath)), 1000),
    handleModalChange: _.debounce((target) => dispatch(handleModalChange(target)), 300),
    handleModalChangeStep: (target) => dispatch(handleModalChangeStep(target)),
    handleModalSubmit: (doc, pathRef) => dispatch(handleModalSubmit(doc, pathRef)),
    handleSelectChange: (target) => dispatch(handleModalChange(target)),
    hideModal: () => dispatch(hideModal()),
    showModal: (modal) => dispatch(showModal(modal)),
    handleTagDelete: (tag) => dispatch(handleTagDelete(tag)),
    handleTagAddition: (tag) => dispatch(handleTagAddition(tag)),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  }
}

class DocumentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      editorState: {}
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  UNSAFE_componentWillMount = () => {
    if (this.props.doc.content) {
      this.setState({
        editorState: {
          ...this.state.editorState,
          single: this.convertToDraft(this.props.doc.content)
        }
<<<<<<< HEAD
      });
    }
  };

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
    const { modalProps, doc, classes } = this.props;
    const { editorState, page } = this.state;
=======
      })
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
    const { modalProps, doc, classes } = this.props
    const { editorState, page } = this.state
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    // const staff = { ...this.props.staff, [this.props.me.uid]: this.props.me };

    const headerpage = (
      <form>
        <FormGroup>
          <FormControl className={classes.dialogField}>
            <InputLabel shrink>Document Type</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                if (e.target.value === "Multi Page" && !doc.steps)
                  doc.steps = {};
                this.props.handleModalChange({
                  id: "docType",
                  value: e.target.value
                });
              }}
              value={(doc && doc.docType) || "PDF"}
              input={<Input name="docType" id="docType" />}
            >
              {[
                "Link",
                "PDF",
                "Image",
                "File",
                "Single Page",
                "Multi Page"
              ].map(type => {
=======
              onChange={(e) => {
                if (e.target.value === 'Multi Page' && !doc.steps) doc.steps = {}
                this.props.handleModalChange({
                  id: 'docType',
                  value: e.target.value
                })
              }}
              value={(doc && doc.docType) || 'PDF'}
              input={<Input name='docType' id='docType' />}
            >
              {['Link', 'PDF', 'Image', 'File', 'Single Page', 'Multi Page'].map((type) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <option key={type} value={type}>
                    {type}
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
            <InputLabel shrink>Document Category</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                this.props.handleModalChange({
                  id: "category",
                  value: e.target.value
                });
              }}
              value={(doc && doc.category) || "gen"}
              input={<Input name="category" id="category" />}
            >
              {this.props.categories &&
                this.props.categories.map(cat => {
=======
              onChange={(e) => {
                this.props.handleModalChange({
                  id: 'category',
                  value: e.target.value
                })
              }}
              value={(doc && doc.category) || 'gen'}
              input={<Input name='category' id='category' />}
            >
              {this.props.categories &&
                this.props.categories.map((cat) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <option key={cat.key} value={cat.key}>
                      {cat.desc}
                    </option>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </Select>
          </FormControl>
          <InputLabel shrink>Tags</InputLabel>
          {this.props.tagSuggestions && doc.tags && (
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
                  return suggestion.text.toLowerCase().includes(lowerCaseQuery);
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
<<<<<<< HEAD
          {doc.docType === "Link" && (
            <TextField
              id="link"
              label="Link"
              multiline
              className={classes.dialogField}
              defaultValue={(doc && doc.link) || ""}
              helperText="Enter the full web link."
              onChange={e => {
                this.props.handleModalChange(e.target);
=======
          {doc.docType === 'Link' && (
            <TextField
              id='link'
              label='Link'
              multiline
              className={classes.dialogField}
              defaultValue={(doc && doc.link) || ''}
              helperText='Enter the full web link.'
              onChange={(e) => {
                this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            />
          )}
          <TextField
<<<<<<< HEAD
            id="title"
            label="Title"
            className={classes.dialogField}
            defaultValue={(doc && doc.title) || ""}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            className={classes.dialogField}
            defaultValue={(doc && doc.subtitle) || ""}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="code"
            label="Code"
            className={classes.dialogField}
            defaultValue={(doc && doc.code) || ""}
            helperText="Code or reference number (e.g. AS/NZS 1715:2009)"
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="author"
            label="Author"
            className={classes.dialogField}
            defaultValue={(doc && doc.author) || ""}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="publisher"
            label="Publisher"
            className={classes.dialogField}
            defaultValue={(doc && doc.publisher) || ""}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="date"
            label="Date Published"
            type="date"
            defaultValue={doc && doc.date}
            className={classes.dialogField}
            helperText="Enter the date of first publishing."
            onChange={e => {
              this.props.handleModalChange(e.target);
=======
            id='title'
            label='Title'
            className={classes.dialogField}
            defaultValue={(doc && doc.title) || ''}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='subtitle'
            label='Subtitle'
            className={classes.dialogField}
            defaultValue={(doc && doc.subtitle) || ''}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='code'
            label='Code'
            className={classes.dialogField}
            defaultValue={(doc && doc.code) || ''}
            helperText='Code or reference number (e.g. AS/NZS 1715:2009)'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='author'
            label='Author'
            className={classes.dialogField}
            defaultValue={(doc && doc.author) || ''}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='publisher'
            label='Publisher'
            className={classes.dialogField}
            defaultValue={(doc && doc.publisher) || ''}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='date'
            label='Date Published'
            type='date'
            defaultValue={doc && doc.date}
            className={classes.dialogField}
            helperText='Enter the date of first publishing.'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
<<<<<<< HEAD
            id="updateDate"
            label="Date of Last Update"
            type="date"
            defaultValue={doc && doc.updateDate}
            className={classes.dialogField}
            helperText="Enter the date of the last update."
            onChange={e => {
              this.props.handleModalChange(e.target);
=======
            id='updateDate'
            label='Date of Last Update'
            type='date'
            defaultValue={doc && doc.updateDate}
            className={classes.dialogField}
            helperText='Enter the date of the last update.'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
<<<<<<< HEAD
            id="desc"
            label="Description"
            multiline
            className={classes.dialogField}
            defaultValue={(doc && doc.desc) || ""}
            helperText="Give a description of the purpose of the document."
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="source"
            label="Source"
            multiline
            className={classes.dialogField}
            defaultValue={doc && doc.source}
            helperText="Enter the source of the document, e.g. the website address."
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="references"
            label="References"
            multiline
            className={classes.dialogField}
            defaultValue={(doc && doc.references) || ""}
            helperText="List any links or references this document is based on."
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          {doc.docType === "Single Page" && (
=======
            id='desc'
            label='Description'
            multiline
            className={classes.dialogField}
            defaultValue={(doc && doc.desc) || ''}
            helperText='Give a description of the purpose of the document.'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='source'
            label='Source'
            multiline
            className={classes.dialogField}
            defaultValue={doc && doc.source}
            helperText='Enter the source of the document, e.g. the website address.'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='references'
            label='References'
            multiline
            className={classes.dialogField}
            defaultValue={(doc && doc.references) || ''}
            helperText='List any links or references this document is based on.'
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          {doc.docType === 'Single Page' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div>
              <InputLabel shrink>Content</InputLabel>
              {/*<SlateEditor />*/}
              <RichEditor
<<<<<<< HEAD
                editorState={editorState["single"]}
                onEditorStateChange={changedState => {
=======
                editorState={editorState['single']}
                onEditorStateChange={(changedState) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  this.setState({
                    editorState: {
                      ...editorState,
                      single: changedState
                    }
<<<<<<< HEAD
                  });
                  let html = draftToHtml(
                    convertToRaw(changedState.getCurrentContent())
                  );
                  this.props.handleModalChange({ id: "content", value: html });
=======
                  })
                  let html = draftToHtml(convertToRaw(changedState.getCurrentContent()))
                  this.props.handleModalChange({ id: 'content', value: html })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />

              {/*<TextField
               id="html"
               label="HTML"
               multiline
               fullWidth
               style={{ marginBottom: 12, }}
               value={doc.content || ''}
               onChange={e => this.props.handleModalChange({id: 'content', value: e.target.value})}
             />*/}
            </div>
          )}

<<<<<<< HEAD
          {(doc.docType === "PDF" ||
            doc.docType === "File" ||
            doc.docType === "Image") && (
            <label>
              <UploadIcon className={classes.colorAccent} />
              <input
                id="attr_upload_file"
                type="file"
                style={{ display: "none" }}
                onChange={e => {
                  if (doc.fileUrl) {
                    storage.ref(doc.fileRef).delete();
                  }
                  this.props.onUploadFile({
                    file: e.currentTarget.files[0],
                    storagePath: "documents/"
                  });
                }}
              />
              <LinearProgress
                variant="determinate"
                value={modalProps.uploadProgress}
              />
=======
          {(doc.docType === 'PDF' || doc.docType === 'File' || doc.docType === 'Image') && (
            <label>
              <UploadIcon className={classes.colorAccent} />
              <input
                id='attr_upload_file'
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (doc.fileUrl) {
                    storage.ref(doc.fileRef).delete()
                  }
                  this.props.onUploadFile({
                    file: e.currentTarget.files[0],
                    storagePath: 'documents/'
                  })
                }}
              />
              <LinearProgress variant='determinate' value={modalProps.uploadProgress} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            </label>
          )}
        </FormGroup>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const contentpage = (
      <form>
        <h5>Page {page - 1}</h5>
        <TextField
<<<<<<< HEAD
          id="title"
          label="Title"
          style={{ marginBottom: 12 }}
          value={
            (doc.steps && doc.steps[page - 2] && doc.steps[page - 2].title) ||
            ""
          }
          onChange={e =>
            this.props.handleModalChangeStep({
              step: (page - 2).toString(),
              id: "title",
=======
          id='title'
          label='Title'
          style={{ marginBottom: 12 }}
          value={(doc.steps && doc.steps[page - 2] && doc.steps[page - 2].title) || ''}
          onChange={(e) =>
            this.props.handleModalChangeStep({
              step: (page - 2).toString(),
              id: 'title',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              value: e.target.value
            })
          }
        />
        {/*<ReactRichEditor
          height={200}
          showAll={true}
        />*/}
        {/*<RichEditor
          editorState={editorState[page - 2]}
          onEditorStateChange={changedState => {
            this.setState({
              editorState: {
                ...editorState,
                [page - 2]: changedState
              }
            });
            let html = draftToHtml(
              convertToRaw(changedState.getCurrentContent())
            );
            //console.log(html);
            this.props.handleModalChangeStep({
              step: page - 2,
              id: "content",
              value: html
            });
          }}
        />*/}
        <textarea
          readOnly
          style={{ width: 800 }}
<<<<<<< HEAD
          value={
            editorState[page - 2] &&
            draftToHtml(convertToRaw(editorState[page - 2].getCurrentContent()))
          }
        />
      </form>
    );

    switch (this.state.page) {
      case 1:
        return headerpage;
      default:
        return contentpage;
    }
  };

  render() {
    const { modalProps, doc } = this.props;

    return (
      <Dialog
        key="documentmodal"
        maxWidth="md"
=======
          value={editorState[page - 2] && draftToHtml(convertToRaw(editorState[page - 2].getCurrentContent()))}
        />
      </form>
    )

    switch (this.state.page) {
      case 1:
        return headerpage
      default:
        return contentpage
    }
  }

  render() {
    const { modalProps, doc } = this.props

    return (
      <Dialog
        key='documentmodal'
        maxWidth='md'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        fullWidth={true}
        open={this.props.modalType === DOCUMENT}
        onEnter={() => this.setState({ page: 1 })}
        onClose={() => this.props.hideModal}
      >
<<<<<<< HEAD
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Document"}
        </DialogTitle>
=======
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Document'}</DialogTitle>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <DialogContent>{this.getPage()}</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
<<<<<<< HEAD
              this.props.hideModal();
            }}
            color="secondary"
          >
            Cancel
          </Button>
          {doc.docType === "Multi Page" && (
=======
              this.props.hideModal()
            }}
            color='secondary'
          >
            Cancel
          </Button>
          {doc.docType === 'Multi Page' && (
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            <div>
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
            </div>
          )}
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
                if (!doc.date) {
<<<<<<< HEAD
                  doc.date = new Date();
                }
                if (doc.steps) {
                  // fill in missing labels, remove missing pages
                  let pages = {};
                  let i = 1;
                  Object.values(doc.steps).forEach(step => {
                    if (!step.title) step.title = "Page " + i;
                    pages[i - 1] = step;
                    i = i + 1;
                  });
                  doc.steps = pages;
                }
                if (!doc.uid) {
                  if (doc.title) {
                    doc.uid = doc.title
                      .replace(/\s+|\/+|\\+\:+\;+\.+/g, "-")
                      .toLowerCase();
                  } else {
                    doc.uid =
                      doc.docType +
                      Math.round(Math.random() * 1000000).toString();
                  }
                }
                if (doc.fileUrl) doc.link = doc.fileUrl;
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: docsRef
                });
                // this.sendNewAttrSlack();
              }}
              color="primary"
=======
                  doc.date = new Date()
                }
                if (doc.steps) {
                  // fill in missing labels, remove missing pages
                  let pages = {}
                  let i = 1
                  Object.values(doc.steps).forEach((step) => {
                    if (!step.title) step.title = 'Page ' + i
                    pages[i - 1] = step
                    i = i + 1
                  })
                  doc.steps = pages
                }
                if (!doc.uid) {
                  if (doc.title) {
                    doc.uid = doc.title.replace(/\s+|\/+|\\+\:+\;+\.+/g, '-').toLowerCase()
                  } else {
                    doc.uid = doc.docType + Math.round(Math.random() * 1000000).toString()
                  }
                }
                if (doc.fileUrl) doc.link = doc.fileUrl
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: docsRef
                })
                // this.sendNewAttrSlack();
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
  )(DocumentModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DocumentModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
