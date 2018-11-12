import React from 'react';

import { Button, Grid, Card, CardContent, Typography, CircularProgress, Paper, Avatar, Stepper, Step, StepButton } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { methodsRef, usersRef, auth } from '../../config/firebase';
import LineTo, { SteppedLineTo } from 'react-lineto';
import MethodNode from './MethodNode';
import { ArrowBack, ArrowDownward, ArrowForward, ArrowUpward, AddCircle, Lock, LockOpen, } from '@material-ui/icons';
import store from '../../store';
import { setStepper } from '../../actions/local';

const iconStyle = {
  color: '#FF2D00',
  fontSize: 40,
}

const mapStateToProps = state => {
  return {
    steppers: state.local.steppers,
    methodLog: state.local.methodLog,
  };
};

class Method extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      method: {},
      isLoading: true,
      activeStep: 0,
      completed: new Set(),
    }
  }

  componentDidMount(){
    let step = 0;
    if (this.props.steppers[this.props.match.params.uid]) step = this.props.steppers[this.props.match.params.uid];
    var completed = new Set();
    var com = [];
    var logs = [];
    this.props.methodLog.forEach(m => {
      if (m.uid == this.props.match.params.uid) {
        if (m.sections) {
          Object.keys(m.sections).forEach(k => {
            completed.add(parseInt(k));
          });
        }
      }
    });
    methodsRef.doc(this.props.match.params.uid).get().then((doc) => {
      this.setState({
        totalSteps: doc.data().sections.length,
        method: doc.data(),
        isLoading: false,
        completed: completed,
        com: com,
        logs: logs,
        activeStep: step,
      });
    });
  }

  getSteps = () => {
    let steps = [];
    this.state.method.sections.map(step => {
      steps.push(step.label);
    });
    return steps;
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = this.getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
    store.dispatch(setStepper(this.props.steppers, this.props.match.params.uid, this.state.activeStep));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
    store.dispatch(setStepper(this.props.steppers, this.props.match.params.uid, this.state.activeStep));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
    store.dispatch(setStepper(this.props.steppers, this.props.match.params.uid, this.state.activeStep));
  };

  handleComplete = () => {
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });
    this.completeMethod(this.state.activeStep);
    if (completed.size !== this.state.totalSteps) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
    });
    store.dispatch(setStepper(this.props.steppers, this.props.match.params.uid, this.state.activeStep));
  };

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  isLastStep() {
    return this.state.activeStep === this.state.totalSteps - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.state.totalSteps;
  }

  completeMethod = step => {
    var methodCompletedDate = '';

    usersRef.doc(auth.currentUser.uid).collection("methodlog").doc(this.props.match.params.uid).get().then((doc) => {
      let sections = {};
      if (doc.exists) sections = doc.data().sections;
      if (sections == undefined) sections = {};
      sections[step] = new Date();
      if (this.allStepsCompleted()) methodCompletedDate = sections[step];
      usersRef.doc(auth.currentUser.uid).collection("methodlog").doc(this.props.match.params.uid).set({
          methodCompleted: methodCompletedDate,
          sections: sections,
      });
    });
  }

  render() {
    const { method, activeStep, totalSteps } = this.state;

    return (
        <div style = {{ marginTop: 80 }}>
          { this.state.isLoading ?
            <div>
              <CircularProgress />
            </div>
          :
            <div>
              <div style={{ textAlign: 'center', fontSize: 24, color: 'white', backgroundColor: '#006D44', padding: 12, }}>{ method.title }</div>
              <div style={{ textAlign: 'center', fontSize: 18, color: 'white', backgroundColor: '#006D44', padding: 12, }}>{ method.subtitle }</div>
              <Stepper nonLinear activeStep={activeStep}>
                { method.sections.map((section, index) => {
                  return(
                    <Step key={section.title}>
                      <StepButton
                        onClick={this.handleStep(index)}
                        completed={this.state.completed.has(index)}
                        >
                        {section.title}
                      </StepButton>
                    </Step>
                  );
                })}
              </Stepper>
              <div style={{ marginTop: 12, }}>
                { this.allStepsCompleted() ? (
                  <div>
                    <Typography style = {{ marginBottom: 8, }}>
                      All sections read.
                    </Typography>
                    <Button onClick={this.handleReset}>Reset</Button>
                  </div>
                ) : (
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    style={{ marginRight: 12 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                  >
                    Next
                  </Button>
                  {activeStep !== totalSteps &&
                    (this.state.completed.has(activeStep) ? (
                      <Typography variant="caption" style={{ display: 'inline-block' }}>
                        Section {activeStep + 1} already read
                      </Typography>
                    ) : (
                      <Button variant="contained" color="primary" onClick={this.handleComplete}>
                        {this.completedSteps() === totalSteps - 1 ? 'Mark Method as Read' : 'Mark Section as Read'}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              <Paper style={{
                padding: 20,
                margin: 20,
                maxWidth: 800,
              }}>
                <div style={{ fontSize: 26, fontWeight: 600, color: '#004c2f', }} dangerouslySetInnerHTML={{ __html: method.sections[activeStep].title}} />
                <div style={{ color: '#444', marginBottom: 12, }} dangerouslySetInnerHTML={{ __html: method.sections[activeStep].text}} />
                { method.sections[activeStep].sections && method.sections[activeStep].sections.map(node => {
                  return(
                    <MethodNode key={node.title} node={node} />
                  );
                })}
              </Paper>
            </div>
        }
        </div>
      );
    }
}

export default connect(mapStateToProps)(Method);;