import reduxThunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from '../reducers'

export const history = createBrowserHistory()

const store = createStore(createRootReducer(history), {}, compose(applyMiddleware(routerMiddleware(history), reduxThunk)))

export default store
