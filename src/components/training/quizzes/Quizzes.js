<<<<<<< HEAD
import React from "react";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { QUIZ } from "../../../constants/modal-types";

import { connect } from "react-redux";
import {
  onSearchChange,
  onCatChange,
  fetchQuizzes,
  fetchQuestions
} from "../../../actions/local";
import { showModal } from "../../../actions/modal";
import store from "../../../store";
import QuizModal from "./modals/QuizModal";
import QuizList from "./QuizList";
import { quizzesRef } from "../../../config/firebase";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

const mapStateToProps = state => {
=======
import React from 'react'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import { QUIZ } from '../../../constants/modal-types'

import { connect } from 'react-redux'
import { onSearchChange, onCatChange, fetchQuizzes, fetchQuestions } from '../../../actions/local'
import { showModal } from '../../../actions/modal'
import store from '../../../store'
import QuizModal from './modals/QuizModal'
import QuizList from './QuizList'
import { quizzesRef } from '../../../config/firebase'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    quizzes: state.local.quizzes,
    questions: state.local.questions,
    categories: state.const.trainingCategories,
    category: state.local.category,
    search: state.local.search,
    me: state.local.me
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuizzes: () => dispatch(fetchQuizzes()),
    fetchQuestions: () => dispatch(fetchQuestions()),
    showModal: modal => dispatch(showModal(modal))
  };
};

class Quizzes extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.fetchQuizzes();
    store.dispatch(onSearchChange(null));
    store.dispatch(onCatChange(null));
  }

  switch = category => {
    this.props.category === category
      ? store.dispatch(onCatChange(null))
      : store.dispatch(onCatChange(category));
    store.dispatch(onSearchChange(null));
    this.setState({
      modPath: null
    });
  };
=======
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuizzes: () => dispatch(fetchQuizzes()),
    fetchQuestions: () => dispatch(fetchQuestions()),
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class Quizzes extends React.Component {
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillMount() {
    this.props.fetchQuizzes()
    store.dispatch(onSearchChange(null))
    store.dispatch(onCatChange(null))
  }

  switch = (category) => {
    this.props.category === category ? store.dispatch(onCatChange(null)) : store.dispatch(onCatChange(category))
    store.dispatch(onSearchChange(null))
    this.setState({
      modPath: null
    })
  }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  render() {
    return (
      <div style={{ marginTop: 80 }}>
        <QuizModal />
<<<<<<< HEAD
        {this.props.me.auth["Quiz Editor"] && (
          <Button
            variant="outlined"
=======
        {this.props.me.auth['Quiz Editor'] && (
          <Button
            variant='outlined'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            style={{ marginBottom: 16 }}
            onClick={() => {
              this.props.showModal({
                modalType: QUIZ,
                modalProps: {
<<<<<<< HEAD
                  title: "Add New Quiz",
                  doc: { numberofquestions: 1, optional: [], required: [] }
                }
              });
=======
                  title: 'Add New Quiz',
                  doc: { numberofquestions: 1, optional: [], required: [] }
                }
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            Add New Quiz
          </Button>
        )}
        <Button
<<<<<<< HEAD
          variant="outlined"
          style={{ marginLeft: 16, marginBottom: 16 }}
          onClick={() => {
            this.props.history.push("../questions/");
=======
          variant='outlined'
          style={{ marginLeft: 16, marginBottom: 16 }}
          onClick={() => {
            this.props.history.push('../questions/')
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        >
          See All Questions
        </Button>
        <Grid container spacing={1}>
<<<<<<< HEAD
          {this.props.categories.map(cat => {
            return (
              <Grid item key={cat.key}>
                <Button
                  variant="outlined"
                  color={
                    this.props.category === cat.key ? "secondary" : "primary"
                  }
=======
          {this.props.categories.map((cat) => {
            return (
              <Grid item key={cat.key}>
                <Button
                  variant='outlined'
                  color={this.props.category === cat.key ? 'secondary' : 'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  onClick={() => this.switch(cat.key)}
                >
                  {cat.desc}
                </Button>
              </Grid>
<<<<<<< HEAD
            );
=======
            )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          })}
        </Grid>
        <List style={{ paddingTop: 30 }}>
          {this.props.quizzes
<<<<<<< HEAD
            .filter(doc => {
              if (this.props.search) {
                if (doc.tags) {
                  return [...doc.tags, doc.title].find(tag =>
                    tag.toLowerCase().includes(this.props.search.toLowerCase())
                  );
                } else {
                  return doc.title
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase());
                }
              } else if (this.props.category) {
                return doc.category === this.props.category;
              } else {
                return true;
              }
            })
            .map(doc => {
=======
            .filter((doc) => {
              if (this.props.search) {
                if (doc.tags) {
                  return [...doc.tags, doc.title].find((tag) => tag.toLowerCase().includes(this.props.search.toLowerCase()))
                } else {
                  return doc.title.toLowerCase().includes(this.props.search.toLowerCase())
                }
              } else if (this.props.category) {
                return doc.category === this.props.category
              } else {
                return true
              }
            })
            .map((doc) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
              return (
                <div key={doc.uid}>
                  <QuizList
                    quiz={doc}
                    showModal={() => {
<<<<<<< HEAD
                      if (!this.props.questions) this.props.fetchQuestions();
                      this.props.showModal({
                        modalType: QUIZ,
                        modalProps: { title: "Edit Quiz", doc: doc }
                      });
                    }}
                    deleteQuiz={() => {
                      if (
                        window.confirm(
                          `Are you sure you wish to delete the quiz '${
                            doc.title
                          }'?`
                        )
                      )
                        quizzesRef.doc(doc.uid).delete();
                    }}
                    editor={this.props.me.auth["Quiz Editor"]}
                  />
                </div>
              );
            })}
        </List>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Quizzes)
);
=======
                      if (!this.props.questions) this.props.fetchQuestions()
                      this.props.showModal({
                        modalType: QUIZ,
                        modalProps: { title: 'Edit Quiz', doc: doc }
                      })
                    }}
                    deleteQuiz={() => {
                      if (window.confirm(`Are you sure you wish to delete the quiz '${doc.title}'?`)) quizzesRef.doc(doc.uid).delete()
                    }}
                    editor={this.props.me.auth['Quiz Editor']}
                  />
                </div>
              )
            })}
        </List>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quizzes))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
