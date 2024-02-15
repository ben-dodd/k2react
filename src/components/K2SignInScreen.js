<<<<<<< HEAD
import React, { Component } from "react";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";
import firebase, { auth } from "../config/firebase.js";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../config/styles";
// import "../App.css";
import img_Logo from "../images/logo.png";
import ApiCalendar from "react-google-calendar-api";
import CircularProgress from "@material-ui/core/CircularProgress";
import { sendSlackMessage } from "../actions/local";
=======
import React, { Component } from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
import firebase, { auth } from '../config/firebase.js'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../config/styles'
// import "../App.css";
import img_Logo from '../images/logo.png'
import ApiCalendar from 'react-google-calendar-api'
import CircularProgress from '@material-ui/core/CircularProgress'
import { sendSlackMessage } from '../actions/local'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

class K2SignInScreen extends Component {
  constructor(props) {
    super(props)

<<<<<<< HEAD
    this.error = "";
=======
    this.error = ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    //
    // firebase.auth.GoogleAuthProvider.setCustomParameters({
    //   prompt: 'select_account'
    // });

    this.firebaseUIConfig = {
<<<<<<< HEAD
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          this.props.app.logIn();
          ApiCalendar.handleAuthClick();
          return false;
        },
        signInFailure: error => {
          console.error("** Firebase sign-in failed: ", error);
          this.loginFailed(error);
          return false;
=======
      signInFlow: 'popup',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          this.props.app.logIn()
          ApiCalendar.handleAuthClick()
          return false
        },
        signInFailure: (error) => {
          console.error('** Firebase sign-in failed: ', error)
          this.loginFailed(error)
          return false
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        }
      }
    }
  }

  loginFailed(error) {
<<<<<<< HEAD
    this.setState(error);
  }

  render() {
    const { mode, classes, handleLogOut } = this.props;
    return (
      <div>
        <img
          className={classes.signInImage}
          src={img_Logo}
          alt="K2 Environmental Ltd"
        />
        { mode === 'initial' &&
          <div className={classes.signInFirebase}>
            {/* <Button onClick='handleSignIn()'>Sign In</Button> */}
            <FirebaseAuth
              uiConfig={this.firebaseUIConfig}
              firebaseAuth={auth}
            />
          </div>
        }
        { mode === 'loginFailed' &&
          <div className={classes.flexRowCentered}>
            <Button variant="outlined" className={classes.signInLogOut} onClick={handleLogOut}>
              Log Out {auth.currentUser.displayName}
            </Button>
            <div className={classes.signInWarning}>
              You have not been authorised to view this site. Please
              wait for the{" "}<a href="mailto:ben@k2.co.nz">site admin</a>{" "}to create your account.
            </div>
          </div>
        }
        { mode === 'oldVersion' &&
          <div className={classes.flexRowCentered}>
            <div className={classes.signInWarning}>
              Your browser is using an old version of MyK2. Please hold the shift key and press F5
              to force your browser to use the latest version.
            </div>
          </div>
        }
        { mode === 'loading' &&
          <CircularProgress className={classes.signInCircle} size={'330px'} thickness={2.5} />
        }
=======
    this.setState(error)
  }

  render() {
    const { mode, classes, handleLogOut } = this.props
    return (
      <div>
        <img className={classes.signInImage} src={img_Logo} alt='K2 Environmental Ltd' />
        {mode === 'initial' && (
          <div className={classes.signInFirebase}>
            {/* <Button onClick='handleSignIn()'>Sign In</Button> */}
            <FirebaseAuth uiConfig={this.firebaseUIConfig} firebaseAuth={auth} />
          </div>
        )}
        {mode === 'loginFailed' && (
          <div className={classes.flexRowCentered}>
            <Button variant='outlined' className={classes.signInLogOut} onClick={handleLogOut}>
              Log Out {auth.currentUser.displayName}
            </Button>
            <div className={classes.signInWarning}>
              You have not been authorised to view this site. Please wait for the <a href='mailto:ben@k2.co.nz'>site admin</a> to create
              your account.
            </div>
          </div>
        )}
        {mode === 'oldVersion' && (
          <div className={classes.flexRowCentered}>
            <div className={classes.signInWarning}>
              Your browser is using an old version of MyK2. Please hold the shift key and press F5 to force your browser to use the latest
              version.
            </div>
          </div>
        )}
        {mode === 'loading' && <CircularProgress className={classes.signInCircle} size={'330px'} thickness={2.5} />}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      </div>
    );
  }
}

<<<<<<< HEAD
export default withStyles(styles)(K2SignInScreen);
=======
export default withStyles(styles)(K2SignInScreen)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
