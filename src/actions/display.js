import {
  APP_HAS_LOADED,
  ASBESTOS_SAMPLE_DISPLAY_MODE,
  ASBESTOS_LAB_EXPANDED,
  RESET_DISPLAY,
  TOGGLE_DO_NOT_RENDER,
  TAB_STAFF,
  TAB_MY_DETAILS,
  FILTER_STAFF,
  FILTER_MAP,
<<<<<<< HEAD
  FILTER_MAP_RESET,
} from "../constants/action-types";
=======
  FILTER_MAP_RESET
} from '../constants/action-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const resetDisplay = () => (dispatch) => {
  dispatch({ type: RESET_DISPLAY })
}

export const appHasLoaded = () => (dispatch) => {
  dispatch({
    type: APP_HAS_LOADED
<<<<<<< HEAD
  });
};

// Settings that should last a session
export const tabStaff = (tab) => dispatch => {
  dispatch({
    type: TAB_STAFF,
    payload: tab,
  })
}

export const tabMyDetails = (tab) => dispatch => {
  dispatch({
    type: TAB_MY_DETAILS,
    payload: tab,
  })
}

export const filterStaff = filter => dispatch => {
  dispatch({
    type: FILTER_STAFF,
    payload: filter,
  })
}

export const filterMap = filter => dispatch => {
  dispatch({
    type: FILTER_MAP,
    payload: filter,
  })
}

export const filterMapReset = () => dispatch => {
  dispatch({
    type: FILTER_MAP_RESET,
  })
}

export const toggleAsbestosSampleDisplayMode = () => dispatch => {
  dispatch({
    type: ASBESTOS_SAMPLE_DISPLAY_MODE,
  })
}

export const setAsbestosLabExpanded = ex => dispatch => {
  dispatch({
    type: ASBESTOS_LAB_EXPANDED,
    payload: ex,
  })
}

export const toggleDoNotRender = on => dispatch => {
  console.log('toggling');
  dispatch({
    type: TOGGLE_DO_NOT_RENDER,
    payload: on,
=======
  })
}

// Settings that should last a session
export const tabStaff = (tab) => (dispatch) => {
  dispatch({
    type: TAB_STAFF,
    payload: tab
  })
}

export const tabMyDetails = (tab) => (dispatch) => {
  dispatch({
    type: TAB_MY_DETAILS,
    payload: tab
  })
}

export const filterStaff = (filter) => (dispatch) => {
  dispatch({
    type: FILTER_STAFF,
    payload: filter
  })
}

export const filterMap = (filter) => (dispatch) => {
  dispatch({
    type: FILTER_MAP,
    payload: filter
  })
}

export const filterMapReset = () => (dispatch) => {
  dispatch({
    type: FILTER_MAP_RESET
  })
}

export const toggleAsbestosSampleDisplayMode = () => (dispatch) => {
  dispatch({
    type: ASBESTOS_SAMPLE_DISPLAY_MODE
  })
}

export const setAsbestosLabExpanded = (ex) => (dispatch) => {
  dispatch({
    type: ASBESTOS_LAB_EXPANDED,
    payload: ex
  })
}

export const toggleDoNotRender = (on) => (dispatch) => {
  console.log('toggling')
  dispatch({
    type: TOGGLE_DO_NOT_RENDER,
    payload: on
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  })
}
