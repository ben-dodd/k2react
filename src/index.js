import MomentUtils from '@date-io/moment'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './config/theme'
import store from './store'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
