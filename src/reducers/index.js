import { combineReducers } from "redux";

<<<<<<< HEAD
import asbestosLabReducer from "./asbestosLab";
import localReducer from "./local";
import modalReducer from "./modal";
import displayReducer from "./display";
import constReducer from "./const";
import footprintsReducer from "./footprints";
import jobsReducer from "./jobs";
=======
import asbestosLabReducer from './asbestosLab'
import localReducer from './local'
import modalReducer from './modal'
import displayReducer from './display'
import constReducer from './const'
import footprintsReducer from './footprints'
import jobsReducer from './jobs'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const rootReducer = combineReducers({
  local: localReducer,
  modal: modalReducer,
  display: displayReducer,
  const: constReducer,
  footprints: footprintsReducer,
  asbestosLab: asbestosLabReducer,
<<<<<<< HEAD
  jobs: jobsReducer,
});
=======
  jobs: jobsReducer
})
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export default rootReducer
