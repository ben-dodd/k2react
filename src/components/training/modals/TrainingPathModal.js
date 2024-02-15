<<<<<<< HEAD
import React from "react";
// import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../../config/styles";
import { connect } from "react-redux";

import ReactQuill from "react-quill";
// import ImageResize from 'quill-image-resize-module';
// import { ImageResize } from 'quill-image-resize-module';
// import { ImageDrop } from 'quill-image-drop-module';
import "react-quill/dist/quill.snow.css";

// import store from '../../store';
import { TRAINING } from "../../../constants/modal-types";
import { trainingPathsRef, storage } from "../../../config/firebase";
import "../../../config/tags.css";

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
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

import UploadIcon from "@material-ui/icons/CloudUpload";
import Close from "@material-ui/icons/Close";
import {
  hideModal,
  handleModalChange,
  handleModalChangeStep,
  handleModalSubmit,
  onUploadFile
} from "../../../actions/modal";
import { getUserAttrs } from "../../../actions/local";
import { sendSlackMessage, quillModules } from "../../../actions/helpers";
import _ from "lodash";
=======
import React from 'react'
// import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../../config/styles'
import { connect } from 'react-redux'

// import store from '../../store';
import { TRAINING } from '../../../constants/modal-types'
import { trainingPathsRef, storage } from '../../../config/firebase'
import '../../../config/tags.css'

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
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'

import UploadIcon from '@material-ui/icons/CloudUpload'
import Close from '@material-ui/icons/Close'
import { hideModal, handleModalChange, handleModalChangeStep, handleModalSubmit, onUploadFile } from '../../../actions/modal'
import { getUserAttrs } from '../../../actions/local'
import { sendSlackMessage, quillModules } from '../../../actions/helpers'
import _ from 'lodash'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

// Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/imageDrop', ImageDrop);

<<<<<<< HEAD
const mapStateToProps = state => {
=======
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
    handleSelectChange: target => dispatch(handleModalChange(target)),
    hideModal: () => dispatch(hideModal()),
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  };
};

class TrainingModuleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
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
    onUploadFile: (file, pathRef) => dispatch(onUploadFile(file, pathRef))
  }
}

class TrainingModuleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  getStyles = (uid, list) => {
    return {
<<<<<<< HEAD
      fontWeight:
        list && list.constructor === Array && list.indexOf(uid) > -1 ? 600 : 200
    };
  };
=======
      fontWeight: list && list.constructor === Array && list.indexOf(uid) > -1 ? 600 : 200
    }
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  sendNewAttrSlack = () => {
    let message = {
      text: `${this.props.modalProps.staffName} has added a new module.\n${this.props.qualificationtypes[this.props.doc.type].name}`
<<<<<<< HEAD
    };
    sendSlackMessage(message, true);
  };

  deleteImage = (file, uid) => {
    this.props.handleSelectChange({ id: "fileUrl", value: null });
    this.props.handleSelectChange({ id: "fileRef", value: null });
=======
    }
    sendSlackMessage(message, true)
  }

  deleteImage = (file, uid) => {
    this.props.handleSelectChange({ id: 'fileUrl', value: null })
    this.props.handleSelectChange({ id: 'fileRef', value: null })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    if (uid) {
      let change = {
        fileUrl: null,
        fileRef: null
<<<<<<< HEAD
      };
      trainingPathsRef.doc(this.props.doc.uid).update(change);
    }
    storage.ref(file).delete();
  };

  getPage = () => {
    const { modalProps, doc, classes } = this.props;
    const staff = { ...this.props.staff, [this.props.me.uid]: this.props.me };
=======
      }
      trainingPathsRef.doc(this.props.doc.uid).update(change)
    }
    storage.ref(file).delete()
  }

  getPage = () => {
    const { modalProps, doc, classes } = this.props
    const staff = { ...this.props.staff, [this.props.me.uid]: this.props.me }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page1 = (
      <form>
        <FormGroup>
          <TextField
<<<<<<< HEAD
            id="title"
            label="Title"
            defaultValue={doc && doc.title}
            onChange={e => {
              this.props.handleModalChange(e.target);
            }}
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            defaultValue={doc && doc.subtitle}
            onChange={e => {
              this.props.handleModalChange(e.target);
=======
            id='title'
            label='Title'
            defaultValue={doc && doc.title}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
            }}
          />
          <TextField
            id='subtitle'
            label='Subtitle'
            defaultValue={doc && doc.subtitle}
            onChange={(e) => {
              this.props.handleModalChange(e.target)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          />

          {doc.fileUrl && (
            <div>
              <img
                src={doc.fileUrl}
<<<<<<< HEAD
                alt=""
                width="200px"
                style={{
                  opacity: "0.5",
                  borderStyle: "solid",
                  borderWidth: "2px"
=======
                alt=''
                width='200px'
                style={{
                  opacity: '0.5',
                  borderStyle: 'solid',
                  borderWidth: '2px'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
              <IconButton
                style={{
<<<<<<< HEAD
                  position: "relative",
                  top: "2px",
                  left: "-120px",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  fontSize: 8
                }}
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete the image?")
                  )
                    this.deleteImage(doc.fileRef, doc.uid);
=======
                  position: 'relative',
                  top: '2px',
                  left: '-120px',
                  borderStyle: 'solid',
                  borderWidth: '2px',
                  fontSize: 8
                }}
                onClick={() => {
                  if (window.confirm('Are you sure you wish to delete the image?')) this.deleteImage(doc.fileRef, doc.uid)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              >
                <Close />
              </IconButton>
            </div>
          )}

<<<<<<< HEAD
          <InputLabel style={{ fontSize: 12, marginTop: 4 }}>
            Title Photo
          </InputLabel>
          <label>
            <UploadIcon className={classes.colorAccent} />
            <input
              id="attr_upload_file"
              type="file"
              style={{ display: "none" }}
              onChange={e => {
                if (doc.fileUrl && e.currentTarget.files[0]) {
                  storage.ref(doc.fileRef).delete();
                }
                this.props.onUploadFile({
                  file: e.currentTarget.files[0],
                  storagePath:
                    "training/coverphotos/" + doc.title.replace(/\s+/g, "")
                });
              }}
            />
            <LinearProgress
              style={{ marginTop: 4 }}
              variant="determinate"
              value={modalProps.uploadProgress}
            />
          </label>
        </FormGroup>
      </form>
    );
=======
          <InputLabel style={{ fontSize: 12, marginTop: 4 }}>Title Photo</InputLabel>
          <label>
            <UploadIcon className={classes.colorAccent} />
            <input
              id='attr_upload_file'
              type='file'
              style={{ display: 'none' }}
              onChange={(e) => {
                if (doc.fileUrl && e.currentTarget.files[0]) {
                  storage.ref(doc.fileRef).delete()
                }
                this.props.onUploadFile({
                  file: e.currentTarget.files[0],
                  storagePath: 'training/coverphotos/' + doc.title.replace(/\s+/g, '')
                })
              }}
            />
            <LinearProgress style={{ marginTop: 4 }} variant='determinate' value={modalProps.uploadProgress} />
          </label>
        </FormGroup>
      </form>
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page2 = (
      <form>
        <h5>Outline</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps && doc.steps.outline && doc.steps.outline.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "outline",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps && doc.steps.outline && doc.steps.outline.outline) || ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            console.log(content);
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "outline",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
=======
              checked={(doc.steps && doc.steps.outline && doc.steps.outline.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'outline',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.outline && doc.steps.outline.outline) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            console.log(content)
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'outline',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <FormGroup>
          <FormControl className={classes.dialogField}>
            <InputLabel>Trainers</InputLabel>
            <Select
              multiple
              value={doc.trainers ? doc.trainers : []}
<<<<<<< HEAD
              onChange={e => {
                this.props.handleSelectChange({
                  id: "trainers",
                  value: e.target.value
                });
              }}
              input={<Input id="trainers" />}
              renderValue={selected => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map(value => (
                    <Chip
                      key={value}
                      label={staff[value] && staff[value].name}
                      style={{ margin: 5 }}
                    />
=======
              onChange={(e) => {
                this.props.handleSelectChange({
                  id: 'trainers',
                  value: e.target.value
                })
              }}
              input={<Input id='trainers' />}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={staff[value] && staff[value].name} style={{ margin: 5 }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(staff)
                .sort((a, b) => a.name.localeCompare(b.name))
<<<<<<< HEAD
                .map(staff => (
                  <MenuItem
                    key={staff.uid}
                    value={staff.uid}
                    style={this.getStyles(staff.uid, doc.trainers)}
                  >
=======
                .map((staff) => (
                  <MenuItem key={staff.uid} value={staff.uid} style={this.getStyles(staff.uid, doc.trainers)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {staff.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl className={classes.dialogField}>
            <InputLabel>KTPs</InputLabel>
            <Select
              multiple
              value={doc.ktp ? doc.ktp : []}
<<<<<<< HEAD
              onChange={e => {
                this.props.handleSelectChange({
                  id: "ktp",
                  value: e.target.value
                });
              }}
              input={<Input id="ktp" />}
              renderValue={selected => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map(value => (
                    <Chip
                      key={value}
                      label={staff[value] && staff[value].name}
                      style={{ margin: 5 }}
                    />
=======
              onChange={(e) => {
                this.props.handleSelectChange({
                  id: 'ktp',
                  value: e.target.value
                })
              }}
              input={<Input id='ktp' />}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={staff[value] && staff[value].name} style={{ margin: 5 }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(staff)
                .sort((a, b) => a.name.localeCompare(b.name))
<<<<<<< HEAD
                .map(staff => (
                  <MenuItem
                    key={staff.uid}
                    value={staff.uid}
                    style={this.getStyles(staff.uid, doc.ktp)}
                  >
=======
                .map((staff) => (
                  <MenuItem key={staff.uid} value={staff.uid} style={this.getStyles(staff.uid, doc.ktp)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    {staff.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </FormGroup>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page3 = (
      <form>
        <h5>Background Readings</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps &&
                  doc.steps.bgreading &&
                  doc.steps.bgreading.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "bgreading",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps && doc.steps.bgreading && doc.steps.bgreading.outline) ||
            ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "bgreading",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
        <FormGroup>
          <TextField
            id="requiredcaption"
            label="Caption"
            value={
              (doc.steps &&
                doc.steps.bgreading &&
                doc.steps.bgreading.requiredcaption) ||
              ""
            }
            onChange={e => {
              this.props.handleModalChangeStep({
                step: "bgreading",
                id: "requiredcaption",
                value: e.target.value
              });
=======
              checked={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'bgreading',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.outline) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'bgreading',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
        <FormGroup>
          <TextField
            id='requiredcaption'
            label='Caption'
            value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.requiredcaption) || ''}
            onChange={(e) => {
              this.props.handleModalChangeStep({
                step: 'bgreading',
                id: 'requiredcaption',
                value: e.target.value
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel>Required Readings</InputLabel>
            <Select
              multiple
<<<<<<< HEAD
              value={
                (doc.steps &&
                  doc.steps.bgreading &&
                  doc.steps.bgreading.requiredreadings) ||
                []
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "bgreading",
                  id: "requiredreadings",
                  value: e.target.value
                });
              }}
              input={<Input id="requiredreadings" />}
              renderValue={selected => {
                //console.log(selected);
                return (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {selected &&
                      selected.map(value => (
                        <Chip
                          key={value}
                          label={
                            this.props.documents.filter(
                              doc => doc.uid === value
                            )[0].title
                          }
                          style={{ margin: 5 }}
                        />
                      ))}
                  </div>
                );
=======
              value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.requiredreadings) || []}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'bgreading',
                  id: 'requiredreadings',
                  value: e.target.value
                })
              }}
              input={<Input id='requiredreadings' />}
              renderValue={(selected) => {
                //console.log(selected);
                return (
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selected &&
                      selected.map((value) => (
                        <Chip key={value} label={this.props.documents.filter((doc) => doc.uid === value)[0].title} style={{ margin: 5 }} />
                      ))}
                  </div>
                )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(this.props.documents)
                .sort((a, b) => a.title.localeCompare(b.title))
<<<<<<< HEAD
                .map(reading => (
                  <MenuItem
                    key={reading.uid}
                    value={reading.uid}
                    style={this.getStyles(
                      reading.uid,
                      doc.steps &&
                        doc.steps.begreading &&
                        doc.steps.bgreading.requiredreadings
                    )}
=======
                .map((reading) => (
                  <MenuItem
                    key={reading.uid}
                    value={reading.uid}
                    style={this.getStyles(reading.uid, doc.steps && doc.steps.begreading && doc.steps.bgreading.requiredreadings)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >
                    {reading.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
<<<<<<< HEAD
            id="supplementarycaption"
            label="Caption"
            value={
              (doc.steps &&
                doc.steps.bgreading &&
                doc.steps.bgreading.supplementarycaption) ||
              ""
            }
            onChange={e => {
              this.props.handleModalChangeStep({
                step: "bgreading",
                id: "supplementarycaption",
                value: e.target.value
              });
=======
            id='supplementarycaption'
            label='Caption'
            value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.supplementarycaption) || ''}
            onChange={(e) => {
              this.props.handleModalChangeStep({
                step: 'bgreading',
                id: 'supplementarycaption',
                value: e.target.value
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel>Supplementary Readings</InputLabel>
            <Select
              multiple
<<<<<<< HEAD
              value={
                (doc.steps &&
                  doc.steps.bgreading &&
                  doc.steps.bgreading.supplementaryreadings) ||
                []
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "bgreading",
                  id: "supplementaryreadings",
                  value: e.target.value
                });
              }}
              input={<Input id="supplementaryreadings" />}
              renderValue={selected => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map(value => (
                    <Chip
                      key={value}
                      label={
                        this.props.documents.filter(doc => doc.uid === value)[0]
                          .title
                      }
                      style={{ margin: 5 }}
                    />
=======
              value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.supplementaryreadings) || []}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'bgreading',
                  id: 'supplementaryreadings',
                  value: e.target.value
                })
              }}
              input={<Input id='supplementaryreadings' />}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={this.props.documents.filter((doc) => doc.uid === value)[0].title} style={{ margin: 5 }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(this.props.documents)
                .sort((a, b) => a.title.localeCompare(b.title))
<<<<<<< HEAD
                .map(reading => (
                  <MenuItem
                    key={reading.uid}
                    value={reading.uid}
                    style={this.getStyles(
                      reading.uid,
                      doc.steps &&
                        doc.steps.begreading &&
                        doc.steps.bgreading.supplementaryreadings
                    )}
=======
                .map((reading) => (
                  <MenuItem
                    key={reading.uid}
                    value={reading.uid}
                    style={this.getStyles(reading.uid, doc.steps && doc.steps.begreading && doc.steps.bgreading.supplementaryreadings)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >
                    {reading.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel shrink>Reading Quiz</InputLabel>
            <Select
<<<<<<< HEAD
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "bgreading",
                  id: "quiz",
                  value: e.target.value
                });
              }}
              value={
                (doc.steps &&
                  doc.steps.bgreading &&
                  doc.steps.bgreading.quiz) ||
                ""
              }
              input={<Input name="quiz" id="quiz" />}
            >
              <option value="" />
              {this.props.quizzes &&
                this.props.quizzes.map(quiz => {
=======
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'bgreading',
                  id: 'quiz',
                  value: e.target.value
                })
              }}
              value={(doc.steps && doc.steps.bgreading && doc.steps.bgreading.quiz) || ''}
              input={<Input name='quiz' id='quiz' />}
            >
              <option value='' />
              {this.props.quizzes &&
                this.props.quizzes.map((quiz) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  return (
                    <option key={quiz.uid} value={quiz.uid}>
                      {quiz.title}
                    </option>
<<<<<<< HEAD
                  );
=======
                  )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                })}
            </Select>
          </FormControl>
        </FormGroup>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page4 = (
      <form>
        <h5>Practical Training</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps &&
                  doc.steps.practical &&
                  doc.steps.practical.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "practical",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps && doc.steps.practical && doc.steps.practical.outline) ||
            ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "practical",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
        <FormGroup>
          <TextField
            id="requiredcaption"
            label="Caption"
            value={
              (doc.steps &&
                doc.steps.practical &&
                doc.steps.practical.requiredcaption) ||
              ""
            }
            onChange={e => {
              this.props.handleModalChangeStep({
                step: "practical",
                id: "requiredcaption",
                value: e.target.value
              });
=======
              checked={(doc.steps && doc.steps.practical && doc.steps.practical.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'practical',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.practical && doc.steps.practical.outline) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'practical',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
        <FormGroup>
          <TextField
            id='requiredcaption'
            label='Caption'
            value={(doc.steps && doc.steps.practical && doc.steps.practical.requiredcaption) || ''}
            onChange={(e) => {
              this.props.handleModalChangeStep({
                step: 'practical',
                id: 'requiredcaption',
                value: e.target.value
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel>Required Methods</InputLabel>
            <Select
              multiple
<<<<<<< HEAD
              value={
                (doc.steps &&
                  doc.steps.practical &&
                  doc.steps.practical.requiredmethods) ||
                []
              }
              onChange={e => {
                //console.log(e);
                this.props.handleModalChangeStep({
                  step: "practical",
                  id: "requiredmethods",
                  value: e.target.value
                });
              }}
              input={<Input id="requiredmethods" />}
              renderValue={selected => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map(value => (
                    <Chip
                      key={value}
                      label={
                        this.props.methods.filter(doc => doc.uid === value)[0]
                          .title
                      }
                      style={{ margin: 5 }}
                    />
=======
              value={(doc.steps && doc.steps.practical && doc.steps.practical.requiredmethods) || []}
              onChange={(e) => {
                //console.log(e);
                this.props.handleModalChangeStep({
                  step: 'practical',
                  id: 'requiredmethods',
                  value: e.target.value
                })
              }}
              input={<Input id='requiredmethods' />}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={this.props.methods.filter((doc) => doc.uid === value)[0].title} style={{ margin: 5 }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(this.props.methods)
                .sort((a, b) => a.title.localeCompare(b.title))
<<<<<<< HEAD
                .map(method => (
                  <MenuItem
                    key={method.uid}
                    value={method.uid}
                    style={this.getStyles(
                      method.uid,
                      doc.steps &&
                        doc.steps.practical &&
                        doc.steps.practical.requiredmethods
                    )}
=======
                .map((method) => (
                  <MenuItem
                    key={method.uid}
                    value={method.uid}
                    style={this.getStyles(method.uid, doc.steps && doc.steps.practical && doc.steps.practical.requiredmethods)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >
                    {method.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
<<<<<<< HEAD
            id="supplementarycaption"
            label="Caption"
            value={
              (doc.steps &&
                doc.steps.practical &&
                doc.steps.practical.supplementarycaption) ||
              ""
            }
            onChange={e => {
              this.props.handleModalChangeStep({
                step: "practical",
                id: "supplementarycaption",
                value: e.target.value
              });
=======
            id='supplementarycaption'
            label='Caption'
            value={(doc.steps && doc.steps.practical && doc.steps.practical.supplementarycaption) || ''}
            onChange={(e) => {
              this.props.handleModalChangeStep({
                step: 'practical',
                id: 'supplementarycaption',
                value: e.target.value
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
            InputLabelProps={{ shrink: true }}
          />
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel>Supplementary Methods</InputLabel>
            <Select
              multiple
<<<<<<< HEAD
              value={
                (doc.steps &&
                  doc.steps.practical &&
                  doc.steps.practical.supplementarymethods) ||
                []
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "practical",
                  id: "supplementarymethods",
                  value: e.target.value
                });
              }}
              input={<Input id="supplementarymethods" />}
              renderValue={selected => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map(value => (
                    <Chip
                      key={value}
                      label={
                        this.props.methods.filter(doc => doc.uid === value)[0]
                          .title
                      }
                      style={{ margin: 5 }}
                    />
=======
              value={(doc.steps && doc.steps.practical && doc.steps.practical.supplementarymethods) || []}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'practical',
                  id: 'supplementarymethods',
                  value: e.target.value
                })
              }}
              input={<Input id='supplementarymethods' />}
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((value) => (
                    <Chip key={value} label={this.props.methods.filter((doc) => doc.uid === value)[0].title} style={{ margin: 5 }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  ))}
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 500
                  }
                }
              }}
            >
              {Object.values(this.props.methods)
                .sort((a, b) => a.title.localeCompare(b.title))
<<<<<<< HEAD
                .map(method => (
                  <MenuItem
                    key={method.uid}
                    value={method.uid}
                    style={this.getStyles(
                      method.uid,
                      doc.steps &&
                        doc.steps.practical &&
                        doc.steps.practical.supplementarymethods
                    )}
=======
                .map((method) => (
                  <MenuItem
                    key={method.uid}
                    value={method.uid}
                    style={this.getStyles(method.uid, doc.steps && doc.steps.practical && doc.steps.practical.supplementarymethods)}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  >
                    {method.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </FormGroup>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page5 = (
      <form>
        <h5>In-House Training</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps && doc.steps.inhouse && doc.steps.inhouse.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "inhouse",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps && doc.steps.inhouse && doc.steps.inhouse.outline) || ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "inhouse",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
        <TextField
          id="checklist"
          label="Checklist"
=======
              checked={(doc.steps && doc.steps.inhouse && doc.steps.inhouse.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'inhouse',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.inhouse && doc.steps.inhouse.outline) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'inhouse',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
        <TextField
          id='checklist'
          label='Checklist'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          multiline
          fullWidth
          rows={10}
          rowsMax={10}
          defaultValue={
            (doc.steps &&
              doc.steps.inhouse &&
              doc.steps.inhouse.checklist &&
              doc.steps.inhouse.checklist
<<<<<<< HEAD
                .map(obj => {
                  return obj.text;
                })
                .join("\n")) ||
            ""
          }
          helperText="Put each task on a new line."
          onChange={e => {
            this.props.handleModalChangeStep({
              step: "inhouse",
              id: "checklist",
              value: e.target.value
                .split("\n")
                .filter(Boolean)
                .map(option => {
                  return { text: option };
                })
            });
          }}
        />
      </form>
    );
=======
                .map((obj) => {
                  return obj.text
                })
                .join('\n')) ||
            ''
          }
          helperText='Put each task on a new line.'
          onChange={(e) => {
            this.props.handleModalChangeStep({
              step: 'inhouse',
              id: 'checklist',
              value: e.target.value
                .split('\n')
                .filter(Boolean)
                .map((option) => {
                  return { text: option }
                })
            })
          }}
        />
      </form>
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page6 = (
      <form>
        <h5>Site Visits</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps &&
                  doc.steps.sitevisits &&
                  doc.steps.sitevisits.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "sitevisits",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps &&
              doc.steps.sitevisits &&
              doc.steps.sitevisits.outline) ||
            ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "sitevisits",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
=======
              checked={(doc.steps && doc.steps.sitevisits && doc.steps.sitevisits.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'sitevisits',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.sitevisits && doc.steps.sitevisits.outline) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'sitevisits',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <Grid container>
          <Grid item xs={9}>
            <h6>Job Description</h6>
          </Grid>
          <Grid item xs={3}>
            <h6>Number of Visits Required</h6>
          </Grid>
        </Grid>
<<<<<<< HEAD
        {Array.from(Array(10), (x, i) => i).map(i => (
          <Grid container key={i}>
            <Grid item xs={9}>
              <TextField
                id={"jobdesc" + i}
                defaultValue={
                  doc.steps &&
                  doc.steps.jobtypes &&
                  doc.steps.jobtypes[i] &&
                  doc.steps.jobtypes[i].name
                }
                fullWidth
                onChange={e => {
                  this.props.handleModalChangeStep({
                    step: "jobtypes",
                    id: [i],
                    value: { name: e.target.value, object: true }
                  });
=======
        {Array.from(Array(10), (x, i) => i).map((i) => (
          <Grid container key={i}>
            <Grid item xs={9}>
              <TextField
                id={'jobdesc' + i}
                defaultValue={doc.steps && doc.steps.jobtypes && doc.steps.jobtypes[i] && doc.steps.jobtypes[i].name}
                fullWidth
                onChange={(e) => {
                  this.props.handleModalChangeStep({
                    step: 'jobtypes',
                    id: [i],
                    value: { name: e.target.value, object: true }
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
<<<<<<< HEAD
                id={"number" + i}
                type="number"
                defaultValue={
                  doc.steps &&
                  doc.steps.jobtypes &&
                  doc.steps.jobtypes[i] &&
                  doc.steps.jobtypes[i].number
                }
                fullWidth
                onChange={e => {
                  this.props.handleModalChangeStep({
                    step: "jobtypes",
                    id: [i],
                    value: { number: e.target.value },
                    object: true
                  });
=======
                id={'number' + i}
                type='number'
                defaultValue={doc.steps && doc.steps.jobtypes && doc.steps.jobtypes[i] && doc.steps.jobtypes[i].number}
                fullWidth
                onChange={(e) => {
                  this.props.handleModalChangeStep({
                    step: 'jobtypes',
                    id: [i],
                    value: { number: e.target.value },
                    object: true
                  })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                }}
              />
            </Grid>
          </Grid>
        ))}
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    const page7 = (
      <form>
        <h5>Review</h5>
        <FormControlLabel
          control={
            <Checkbox
<<<<<<< HEAD
              checked={
                (doc.steps && doc.steps.review && doc.steps.review.enabled) ||
                false
              }
              onChange={e => {
                this.props.handleModalChangeStep({
                  step: "review",
                  id: "enabled",
                  value: e.target.checked
                });
              }}
              value="enabled"
            />
          }
          label="Show this section"
        />
        <ReactQuill
          value={
            (doc.steps && doc.steps.review && doc.steps.outline.review) || ""
          }
          modules={quillModules}
          theme="snow"
          onChange={(content, delta, source) => {
            if (source === "user")
              this.props.handleModalChangeStep({
                step: "review",
                id: "outline",
                value: content
              });
          }}
          style={{ marginBottom: 16 }}
        />
        <FormGroup />
      </form>
    );

    switch (this.state.page) {
      case 1:
        return page1;
      case 2:
        return page2;
      case 3:
        return page3;
      case 4:
        return page4;
      case 5:
        return page5;
      case 6:
        return page6;
      case 7:
        return page7;
      default:
        return page1;
    }
  };

  render() {
    const { modalProps, doc } = this.props;

    return (
      <Dialog
        key="trainingmodulemodal"
        open={this.props.modalType === TRAINING}
        onEnter={() => this.setState({ page: 1 })}
        onClose={() => this.props.hideModal}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          {modalProps.title ? modalProps.title : "Add New Training Module"}
        </DialogTitle>
=======
              checked={(doc.steps && doc.steps.review && doc.steps.review.enabled) || false}
              onChange={(e) => {
                this.props.handleModalChangeStep({
                  step: 'review',
                  id: 'enabled',
                  value: e.target.checked
                })
              }}
              value='enabled'
            />
          }
          label='Show this section'
        />
        {/* <ReactQuill
          value={(doc.steps && doc.steps.review && doc.steps.outline.review) || ''}
          modules={quillModules}
          theme='snow'
          onChange={(content, delta, source) => {
            if (source === 'user')
              this.props.handleModalChangeStep({
                step: 'review',
                id: 'outline',
                value: content
              })
          }}
          style={{ marginBottom: 16 }}
        /> */}
        <FormGroup />
      </form>
    )

    switch (this.state.page) {
      case 1:
        return page1
      case 2:
        return page2
      case 3:
        return page3
      case 4:
        return page4
      case 5:
        return page5
      case 6:
        return page6
      case 7:
        return page7
      default:
        return page1
    }
  }

  render() {
    const { modalProps, doc } = this.props

    return (
      <Dialog
        key='trainingmodulemodal'
        open={this.props.modalType === TRAINING}
        onEnter={() => this.setState({ page: 1 })}
        onClose={() => this.props.hideModal}
        maxWidth='lg'
        fullWidth
      >
        <DialogTitle>{modalProps.title ? modalProps.title : 'Add New Training Module'}</DialogTitle>
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
            disabled={this.state.page === 7}
            onClick={() => {
<<<<<<< HEAD
              this.setState({ page: this.state.page + 1 });
            }}
            color="default"
=======
              this.setState({ page: this.state.page + 1 })
            }}
            color='default'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          >
            Forward
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
                if (!doc.uid) {
                  if (doc.title) {
<<<<<<< HEAD
                    doc.uid = doc.title.replace(/\s+/g, "-").toLowerCase();
                  } else {
                    doc.uid = Math.round(Math.random() * 1000000).toString();
=======
                    doc.uid = doc.title.replace(/\s+/g, '-').toLowerCase()
                  } else {
                    doc.uid = Math.round(Math.random() * 1000000).toString()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  }
                }
                this.props.handleModalSubmit({
                  doc: doc,
                  pathRef: trainingPathsRef
<<<<<<< HEAD
                });
                // this.sendNewAttrSlack();
              }}
              color="primary"
=======
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
  )(TrainingModuleModal)
);
=======
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrainingModuleModal))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
