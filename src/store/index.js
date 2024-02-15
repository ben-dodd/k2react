<<<<<<< HEAD
import reduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
=======
import reduxThunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const history = createBrowserHistory()

<<<<<<< HEAD
const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(applyMiddleware(routerMiddleware(history), reduxThunk))
);
=======
const store = createStore(connectRouter(history)(rootReducer), {}, compose(applyMiddleware(routerMiddleware(history), reduxThunk)))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export default store
