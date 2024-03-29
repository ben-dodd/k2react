<<<<<<< HEAD
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

import Edit from "@material-ui/icons/Edit";

import {
  TRAINING,
} from "../../constants/modal-types";
import {
  fetchTrainingPaths,
  fetchStaff,
  fetchDocuments,
  fetchMethods,
  fetchQuizzes
} from "../../actions/local";
import { showModal } from "../../actions/modal";
import TrainingPathModal from "./modals/TrainingPathModal";
import QuizModal from "./quizzes/modals/QuizModal";
import QuestionModal from "./quizzes/modals/QuestionModal";
import DocumentModal from "../library/modals/DocumentModal";

const mapStateToProps = state => {
  return {
    me: state.local.me,
    paths: state.local.trainingpaths
  };
};

const mapDispatchToProps = dispatch => {
=======
import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'

import Edit from '@material-ui/icons/Edit'

import { TRAINING } from '../../constants/modal-types'
import { fetchTrainingPaths, fetchStaff, fetchDocuments, fetchMethods, fetchQuizzes } from '../../actions/local'
import { showModal } from '../../actions/modal'
import TrainingPathModal from './modals/TrainingPathModal'
import QuizModal from './quizzes/modals/QuizModal'
import QuestionModal from './quizzes/modals/QuestionModal'
import DocumentModal from '../library/modals/DocumentModal'

const mapStateToProps = (state) => {
  return {
    me: state.local.me,
    paths: state.local.trainingpaths
  }
}

const mapDispatchToProps = (dispatch) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    fetchTrainingPaths: () => dispatch(fetchTrainingPaths()),
    fetchStaff: () => dispatch(fetchStaff()),
    fetchDocuments: () => dispatch(fetchDocuments()),
    fetchMethods: () => dispatch(fetchMethods()),
    fetchQuizzes: () => dispatch(fetchQuizzes()),
<<<<<<< HEAD
    showModal: modal => dispatch(showModal(modal))
  };
};

class TrainingOverview extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTrainingPaths();
=======
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class TrainingOverview extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTrainingPaths()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }
  render() {
    return (
      <div style={{ marginTop: 80 }}>
<<<<<<< HEAD
        {this.props.me.auth["Training Editor"] && (
          <div>
            <Button
              variant="outlined"
              style={{ marginBottom: 16 }}
              onClick={() => {
                let doc = {
                  title: "",
                  subtitle: "",
                  img: "",
=======
        {this.props.me.auth['Training Editor'] && (
          <div>
            <Button
              variant='outlined'
              style={{ marginBottom: 16 }}
              onClick={() => {
                let doc = {
                  title: '',
                  subtitle: '',
                  img: '',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  trainers: [],
                  ktp: [],
                  steps: {
                    outline: {
                      enabled: true,
                      outline:
<<<<<<< HEAD
                        "<p>By the end of this module you will be able to complete X.</p><p><br></p><p>This covers:</p><ul><li>Thing 1</li><li>Thing 2</li></ul><p><br></p><p>If at any time you need assistance with the content in this module please speak to a trained team member.</p>"
=======
                        '<p>By the end of this module you will be able to complete X.</p><p><br></p><p>This covers:</p><ul><li>Thing 1</li><li>Thing 2</li></ul><p><br></p><p>If at any time you need assistance with the content in this module please speak to a trained team member.</p>'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                    },
                    bgreading: {
                      enabled: true,
                      outline:
<<<<<<< HEAD
                        "<p>This stage covers the background knowledge required to understand X.</p><p><br></p><p>By the end of this stage you should understand:</p><ul><li>Concept 1</li><li>Concept 2</li><li>Concept 3</li></ul>",
                      requiredcaption:
                        "Prior to undertaking X, you must have read the following documents.",
                      requiredreadings: [],
                      quiz: "",
                      supplementarycaption:
                        "Additional readings are below, it is not required that you have read these prior to X.",
=======
                        '<p>This stage covers the background knowledge required to understand X.</p><p><br></p><p>By the end of this stage you should understand:</p><ul><li>Concept 1</li><li>Concept 2</li><li>Concept 3</li></ul>',
                      requiredcaption: 'Prior to undertaking X, you must have read the following documents.',
                      requiredreadings: [],
                      quiz: '',
                      supplementarycaption: 'Additional readings are below, it is not required that you have read these prior to X.',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      supplementaryreadings: [],
                      readinglog: [],
                      quizlog: []
                    },
                    practical: {
                      enabled: true,
                      outline:
                        '<p>This stage covers the practical aspects of X.</p><p><br></p><p>By the end of this stage you should understand:</p><ul><li>How to use the following X equipment:</li><li class="ql-indent-1">Equipment 1</li><li class="ql-indent-1">Equipment 2</li><li class="ql-indent-1">Equipment 3</li><li>Skill 2</li><li>Skill 3</li><li>Skill 4</li></ul>',
                      requiredcaption:
<<<<<<< HEAD
                        "The following methods must be read before starting in-house training. A short quiz follows each one to assess comprehension.",
                      requiredmethods: [],
                      supplementarycaption:
                        "The following methods detail less common sampling techniques and procedures.",
=======
                        'The following methods must be read before starting in-house training. A short quiz follows each one to assess comprehension.',
                      requiredmethods: [],
                      supplementarycaption: 'The following methods detail less common sampling techniques and procedures.',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      supplementarymethods: [],
                      methodlog: [],
                      quizlog: []
                    },
                    inhouse: {
                      enabled: true,
                      outline:
<<<<<<< HEAD
                        "<p>In this stage you will undertake a mock biological assessment through to completion.</p><p><br></p><p>By the end of this stage you should understand:</p><ul><li>Task 1</li><li>Task 2</li><li>Task 3</li></ul>",
=======
                        '<p>In this stage you will undertake a mock biological assessment through to completion.</p><p><br></p><p>By the end of this stage you should understand:</p><ul><li>Task 1</li><li>Task 2</li><li>Task 3</li></ul>',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      checklist: []
                    },
                    jobtypes: {},
                    sitevisits: {
                      enabled: true,
                      outline:
<<<<<<< HEAD
                        "In this stage you will conduct supervised visits on sites. These will be assessed by a trained site technician.",
                      jobtypes: [
                        {
                          name: "",
=======
                        'In this stage you will conduct supervised visits on sites. These will be assessed by a trained site technician.',
                      jobtypes: [
                        {
                          name: '',
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                          number: 0
                        }
                      ]
                    },
                    review: {
                      enabled: true
                    }
                  }
<<<<<<< HEAD
                };
                this.props.fetchStaff();
                this.props.fetchDocuments();
                this.props.fetchMethods();
                this.props.fetchQuizzes();
                this.props.showModal({
                  modalType: TRAINING,
                  modalProps: { title: "Add New Training Path", doc: doc }
                });
=======
                }
                this.props.fetchStaff()
                this.props.fetchDocuments()
                this.props.fetchMethods()
                this.props.fetchQuizzes()
                this.props.showModal({
                  modalType: TRAINING,
                  modalProps: { title: 'Add New Training Path', doc: doc }
                })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              }}
            >
              Add New Training Path
            </Button>
            {/*<Button variant='outlined' style={{ marginBottom: 16, marginLeft: 16, }} onClick={() => {
                this.props.showModal({ modalType: QUIZ, modalProps: { title: 'Add New Quiz', } })}}>
                Add New Quiz
              </Button>
              <Button variant='outlined' style={{ marginBottom: 16, marginLeft: 16, }} onClick={() => {
                this.props.showModal({ modalType: QUESTION, modalProps: { title: 'Add New Quiz Question', } })}}>
                Add New Quiz Question
              </Button>
              <Button variant='outlined' style={{ marginBottom: 16, marginLeft: 16, }} onClick={() => {
                this.props.showModal({ modalType: DOCUMENT, modalProps: { title: 'Add New Reading', } })}}>
                Add New Reading
              </Button>*/}
          </div>
        )}
        <TrainingPathModal />
        <QuizModal />
        <QuestionModal />
        <DocumentModal />
        <GridList cellHeight={300} cols={4}>
<<<<<<< HEAD
          {this.props.paths.map(path => {
            const url = "/training/" + path.uid;
            return (
              <GridListTile key={path.uid}>
                <Link to={url}>
                  {path.img ? (
                    <img src={path.img} alt={path.title} />
                  ) : (
                    <img src={path.fileUrl} alt={path.title} />
                  )}
                </Link>
=======
          {this.props.paths.map((path) => {
            const url = '/training/' + path.uid
            return (
              <GridListTile key={path.uid}>
                <Link to={url}>{path.img ? <img src={path.img} alt={path.title} /> : <img src={path.fileUrl} alt={path.title} />}</Link>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                <GridListTileBar
                  title={path.title}
                  subtitle={path.subtitle}
                  actionIcon={
                    <div>
<<<<<<< HEAD
                      {this.props.me.auth["Training Editor"] && (
                        <IconButton
                          onClick={() => {
                            this.props.fetchStaff();
                            this.props.fetchDocuments();
                            this.props.fetchMethods();
                            this.props.fetchQuizzes();
                            this.props.showModal({
                              modalType: TRAINING,
                              modalProps: {
                                title: "Edit Training Module",
                                doc: path
                              }
                            });
                          }}
                        >
                          <Edit style={{ color: "white" }} />
=======
                      {this.props.me.auth['Training Editor'] && (
                        <IconButton
                          onClick={() => {
                            this.props.fetchStaff()
                            this.props.fetchDocuments()
                            this.props.fetchMethods()
                            this.props.fetchQuizzes()
                            this.props.showModal({
                              modalType: TRAINING,
                              modalProps: {
                                title: 'Edit Training Module',
                                doc: path
                              }
                            })
                          }}
                        >
                          <Edit style={{ color: 'white' }} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                        </IconButton>
                      )}
                    </div>
                  }
                />
              </GridListTile>
<<<<<<< HEAD
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingOverview);
=======
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingOverview)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
