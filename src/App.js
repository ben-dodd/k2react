import React, { Component } from 'react';
import MainScreen from './components/MainScreen';
import K2SignInScreen from './components/K2SignInScreen';
import { auth } from './config/firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn() {
    this.setState({});
  }

  logOut() {
    auth.signOut()
      .then(() => {
        this.setState({});
      });
    }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div className='wrapper'>
        { auth.currentUser ?
          < MainScreen key='mainscreen' />
          :
          < K2SignInScreen />
        }
      </div>
    );
  }
}

export default withRouter(App);
