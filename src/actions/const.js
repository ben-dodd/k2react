import { constRef } from 'config/firebase'
import { INIT_CONSTANTS } from 'constants/action-types'

export const initConstants = () => (dispatch) => {
  constRef.get().then((doc) => {
    dispatch({
      type: INIT_CONSTANTS,
      payload: doc.data()
    })
  })
}
