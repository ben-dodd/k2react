import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootReducer from 'reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

export const history = createBrowserHistory()

const store = createStore(connectRouter(history)(rootReducer), {}, compose(applyMiddleware(routerMiddleware(history), reduxThunk)))

export default store
