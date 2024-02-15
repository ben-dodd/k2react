<<<<<<< HEAD
import { INIT_CONSTANTS } from "../constants/action-types";
import { constRef } from "../config/firebase";

export const initConstants = () => dispatch => {
  constRef.get().then(doc => {
    dispatch({
      type: INIT_CONSTANTS,
      payload: doc.data()
    });
  });
};
=======
import { INIT_CONSTANTS } from '../constants/action-types'
import { constRef } from '../config/firebase'

export const initConstants = () => (dispatch) => {
  constRef.get().then((doc) => {
    dispatch({
      type: INIT_CONSTANTS,
      payload: doc.data()
    })
  })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
