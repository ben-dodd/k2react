import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import K2SignInScreen from './components/K2SignInScreen'
import MainScreen from './components/MainScreen'
import { auth } from './config/firebase'
import * as serviceWorker from './registerServiceWorker'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logIn() {
    // auth.updateProfile();
    this.setState({})
  }

  logOut() {
    auth.signOut().then(() => {
      serviceWorker.unregister()
      this.setState({})
    })
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe()
  }

  render() {
    return <div className='wrapper'>{auth.currentUser ? <MainScreen key='mainscreen' /> : <K2SignInScreen mode='initial' />}</div>
  }
}

export default withRouter(App)
