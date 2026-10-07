import rootReducer from 'reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, {}, compose(applyMiddleware(reduxThunk)))

export default store
