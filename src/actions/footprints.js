<<<<<<< HEAD
import { MARK_FOOTPRINT } from "../constants/action-types";
=======
import { MARK_FOOTPRINT } from '../constants/action-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const markFootprint = (area) => (dispatch) => {
  dispatch({
    type: MARK_FOOTPRINT,
    payload: { [area]: true }
<<<<<<< HEAD
  });
};
=======
  })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
