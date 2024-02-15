import {
  APP_HAS_LOADED,
  ASBESTOS_SAMPLE_DISPLAY_MODE,
  ASBESTOS_LAB_EXPANDED,
  RESET_DISPLAY,
  TAB_STAFF,
  TAB_MY_DETAILS,
  TOGGLE_DO_NOT_RENDER,
  FILTER_STAFF,
  FILTER_MAP,
<<<<<<< HEAD
  FILTER_MAP_RESET,
} from "../constants/action-types";
=======
  FILTER_MAP_RESET
} from '../constants/action-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const filterStaff = {
  officeFilters: {},
  officeFilterOn: false,
  attrFilters: {},
  attrFilterOn: false,
  authFilters: {},
  authFilterOn: false,
<<<<<<< HEAD
  attrFilters: {},
  attrFilterOn: false,
  docview: "none",
};
=======
  docview: 'none'
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const filterMap = {
  filterViewCompleted: false,
  filterJobLead: '',
  filterOnJobLead: false,
  filterCategory: '',
  filterOnCategory: false,
  filterState: '',
  filterOnState: false,

  filterK2Jobs: false,

  filterCreatedInTheLast: false,
  createdInTheLast: 7,
  filterCompletedInTheLast: false,
  completedInTheLast: 7,
  filterUpdatedInTheLast: false,
  updatedInTheLast: 7,
  filterActionsOverdueBy: false,
<<<<<<< HEAD
  actionsOverdueBy: 7,
=======
  actionsOverdueBy: 7
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
}

const displayInit = {
  asbestosSampleDisplayAdvanced: false,
  initialLoading: true,
  tabStaff: 0,
  tabMyDetails: 0,
  doNotRender: false, // HOLDS OFF ON RENDERING UNTIL SWITCHED ON
  filterStaff: filterStaff,
  filterMap: filterMap,
<<<<<<< HEAD
  asbestosLabExpanded: null,
};
=======
  asbestosLabExpanded: null
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

// Properties related to all other displays
export default function displayReducer(state = displayInit, action) {
  switch (action.type) {
    case RESET_DISPLAY:
      return displayInit
    case APP_HAS_LOADED:
      return {
        ...state,
        initialLoading: false
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case ASBESTOS_SAMPLE_DISPLAY_MODE:
      return {
        ...state,
        asbestosSampleDisplayAdvanced: !state.asbestosSampleDisplayAdvanced
      }
    case ASBESTOS_LAB_EXPANDED:
      return {
        ...state,
<<<<<<< HEAD
        asbestosLabExpanded: action.payload,
=======
        asbestosLabExpanded: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    case TAB_STAFF:
      return {
        ...state,
<<<<<<< HEAD
        tabStaff: action.payload,
=======
        tabStaff: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    case TAB_MY_DETAILS:
      return {
        ...state,
<<<<<<< HEAD
        tabMyDetails: action.payload,
=======
        tabMyDetails: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    case FILTER_STAFF:
      return {
        ...state,
<<<<<<< HEAD
        filterStaff: action.payload,
=======
        filterStaff: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    case FILTER_MAP:
      return {
        ...state,
<<<<<<< HEAD
        filterMap: action.payload,
=======
        filterMap: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    case FILTER_MAP_RESET:
      return {
        ...state,
<<<<<<< HEAD
        filterMap: filterMap,
      }
    case TOGGLE_DO_NOT_RENDER:
      console.log(action.payload);
      return{
        ...state,
        doNotRender: action.payload,
=======
        filterMap: filterMap
      }
    case TOGGLE_DO_NOT_RENDER:
      console.log(action.payload)
      return {
        ...state,
        doNotRender: action.payload
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
      }
    default:
      return state
  }
}
