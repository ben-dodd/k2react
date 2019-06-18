import {
  APP_HAS_LOADED,
  RESET_DISPLAY,
  TAB_STAFF,
  TAB_MY_DETAILS,
  FILTER_STAFF,
  FILTER_MAP,
  FILTER_MAP_RESET,
} from "../constants/action-types";

export const resetDisplay = () => dispatch => {
  dispatch({ type: RESET_DISPLAY });
};

export const appHasLoaded = () => dispatch => {
  dispatch({
    type: APP_HAS_LOADED
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
