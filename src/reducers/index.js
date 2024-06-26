import { combineReducers } from 'redux'

import asbestosLabReducer from './asbestosLab'
import localReducer from './local'
import modalReducer from './modal'
import displayReducer from './display'
import constReducer from './const'
import footprintsReducer from './footprints'
import jobsReducer from './jobs'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    local: localReducer,
    modal: modalReducer,
    display: displayReducer,
    const: constReducer,
    footprints: footprintsReducer,
    asbestosLab: asbestosLabReducer,
    jobs: jobsReducer
  })

export default createRootReducer
