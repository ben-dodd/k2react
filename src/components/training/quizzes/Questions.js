<<<<<<< HEAD
import React from "react";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { QUESTION, ADD_TO_QUIZ } from "../../../constants/modal-types";

import { connect } from "react-redux";
import {
  onSearchChange,
  onCatChange,
  fetchQuestions,
  fetchQuizzes
} from "../../../actions/local";
import { showModal } from "../../../actions/modal";
import store from "../../../store";
import QuestionList from "./QuestionList";
import QuestionModal from "./modals/QuestionModal";
import AddToQuizModal from "./modals/AddToQuizModal";
import { questionsRef } from "../../../config/firebase";
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
import { QUESTION, ADD_TO_QUIZ } from '../../../constants/modal-types'

import { connect } from 'react-redux'
import { onSearchChange, onCatChange, fetchQuestions, fetchQuizzes } from '../../../actions/local'
import { showModal } from '../../../actions/modal'
import store from '../../../store'
import QuestionList from './QuestionList'
import QuestionModal from './modals/QuestionModal'
import AddToQuizModal from './modals/AddToQuizModal'
import { questionsRef } from '../../../config/firebase'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  return {
    questions: state.local.questions,
    quiztags: state.const.quiztags,
    category: state.local.category,
    search: state.local.search,
    me: state.local.me
<<<<<<< HEAD
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuizzes: () => dispatch(fetchQuizzes()),
    showModal: modal => dispatch(showModal(modal))
  };
};

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listselect: null
    };
  }

  UNSAFE_componentWillMount() {
    this.props.fetchQuestions();
    this.props.fetchQuizzes();
    store.dispatch(onSearchChange(null));
    store.dispatch(onCatChange(null));
  }

  handleToggle = uid => {
    this.setState({
      listselect: uid
    });
  };

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
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuizzes: () => dispatch(fetchQuizzes()),
    showModal: (modal) => dispatch(showModal(modal))
  }
}

class Questions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listselect: null
    }
  }

  UNSAFE_componentWillMount() {
    this.props.fetchQuestions()
    this.props.fetchQuizzes()
    store.dispatch(onSearchChange(null))
    store.dispatch(onCatChange(null))
  }

  handleToggle = (uid) => {
    this.setState({
      listselect: uid
    })
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
        <QuestionModal />
        <AddToQuizModal />
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
                modalType: QUESTION,
                modalProps: {
<<<<<<< HEAD
                  title: "Add New Question",
                  doc: { type: "truefalse", tags: [], truefalse: "True" }
                }
              });
=======
                  title: 'Add New Question',
                  doc: { type: 'truefalse', tags: [], truefalse: 'True' }
                }
              })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          >
            Add New Question
          </Button>
        )}
        <Button
<<<<<<< HEAD
          variant="outlined"
          style={{ marginLeft: 16, marginBottom: 16 }}
          onClick={() => {
            this.props.history.push("../quizzes/");
=======
          variant='outlined'
          style={{ marginLeft: 16, marginBottom: 16 }}
          onClick={() => {
            this.props.history.push('../quizzes/')
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          }}
        >
          Back to Quizzes
        </Button>
        <Grid container spacing={1}>
<<<<<<< HEAD
          {this.props.quiztags.map(tag => {
            return (
              <Grid item key={tag.id}>
                <Button
                  variant="outlined"
                  color={
                    this.props.category === tag.id ? "secondary" : "primary"
                  }
=======
          {this.props.quiztags.map((tag) => {
            return (
              <Grid item key={tag.id}>
                <Button
                  variant='outlined'
                  color={this.props.category === tag.id ? 'secondary' : 'primary'}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                  onClick={() => this.switch(tag.id)}
                >
                  {tag.text}
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
          {this.props.questions &&
            this.props.questions
<<<<<<< HEAD
              .filter(doc => {
                if (this.props.search) {
                  if (doc.tags) {
                    return [...doc.tags, { text: doc.question }].find(tag =>
                      tag.text
                        .toLowerCase()
                        .includes(this.props.search.toLowerCase())
                    );
                  } else {
                    return doc.question
                      .toLowerCase()
                      .includes(this.props.search.toLowerCase());
                  }
                } else if (this.props.category) {
                  return (
                    doc.tags &&
                    doc.tags.map(tag => tag.id).includes(this.props.category)
                  );
                } else {
                  return true;
                }
              })
              .map(doc => {
=======
              .filter((doc) => {
                if (this.props.search) {
                  if (doc.tags) {
                    return [...doc.tags, { text: doc.question }].find((tag) =>
                      tag.text.toLowerCase().includes(this.props.search.toLowerCase())
                    )
                  } else {
                    return doc.question.toLowerCase().includes(this.props.search.toLowerCase())
                  }
                } else if (this.props.category) {
                  return doc.tags && doc.tags.map((tag) => tag.id).includes(this.props.category)
                } else {
                  return true
                }
              })
              .map((doc) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                return (
                  <div key={doc.uid}>
                    <QuestionList
                      question={doc}
                      showModal={() => {
<<<<<<< HEAD
                        if (!doc.tags) doc.tags = [];
                        this.props.showModal({
                          modalType: QUESTION,
                          modalProps: { title: "Edit Question", doc: doc }
                        });
                      }}
                      deleteQuestion={() => {
                        if (
                          window.confirm(
                            `Are you sure you wish to delete the question '${
                              doc.question
                            }'?`
                          )
                        )
                          questionsRef.doc(doc.uid).delete();
=======
                        if (!doc.tags) doc.tags = []
                        this.props.showModal({
                          modalType: QUESTION,
                          modalProps: { title: 'Edit Question', doc: doc }
                        })
                      }}
                      deleteQuestion={() => {
                        if (window.confirm(`Are you sure you wish to delete the question '${doc.question}'?`))
                          questionsRef.doc(doc.uid).delete()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
                      }}
                      addToQuiz={() => {
                        this.props.showModal({
                          modalType: ADD_TO_QUIZ,
<<<<<<< HEAD
                          modalProps: { title: "Add To Quiz", doc: doc }
                        });
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
  )(Questions)
);
=======
                          modalProps: { title: 'Add To Quiz', doc: doc }
                        })
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
