<<<<<<< HEAD
import React, { Component } from "react";
import MainScreen from "./components/MainScreen";
import K2SignInScreen from "./components/K2SignInScreen";
import { auth } from "./config/firebase";
import { withRouter } from "react-router-dom";
import * as serviceWorker from "./registerServiceWorker";

require("dotenv").config();
=======
import React, { Component } from 'react'
import MainScreen from './components/MainScreen'
import K2SignInScreen from './components/K2SignInScreen'
import { auth } from './config/firebase'
import { withRouter } from 'react-router-dom'
import * as serviceWorker from './registerServiceWorker'

require('dotenv').config()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logIn() {
    // auth.updateProfile();
<<<<<<< HEAD
    this.setState({});
=======
    this.setState({})
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  logOut() {
    auth.signOut().then(() => {
<<<<<<< HEAD
      serviceWorker.unregister();
      this.setState({});
    });
  }

  UNSAFE_componentWillMount() {
    auth.onAuthStateChanged(user => {
=======
      serviceWorker.unregister()
      this.setState({})
    })
  }

  UNSAFE_componentWillMount() {
    auth.onAuthStateChanged((user) => {
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      if (user) {
        this.setState({ user })
      }
    })
  }

  render() {
<<<<<<< HEAD
    return (
      <div className="wrapper">
        {auth.currentUser ? (
          <MainScreen key="mainscreen" />
        ) : (
          <K2SignInScreen mode="initial" />
        )}
      </div>
    );
=======
    return <div className='wrapper'>{auth.currentUser ? <MainScreen key='mainscreen' /> : <K2SignInScreen mode='initial' />}</div>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }
}

export default withRouter(App)
