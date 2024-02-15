<<<<<<< HEAD
import { MARK_FOOTPRINT } from "../constants/action-types";

const footprintsInit = {
  footprints: {}
};
=======
import { MARK_FOOTPRINT } from '../constants/action-types'

const footprintsInit = {
  footprints: {}
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

// Properties related to local data retrieved from firebase
export default function footprintsReducer(state = footprintsInit, action) {
  switch (action.type) {
    case MARK_FOOTPRINT:
      return {
        ...state,
        footprints: {
          ...state.footprints,
          ...action.payload
        }
      };
    default:
      return state
  }
}
