import {
  ADD_TAG,
  DELETE_TAG,
  EDIT_MODAL_DOC_COMMENT,
  EDIT_MODAL_DOC,
  EDIT_MODAL_DOC_STEPS,
  EDIT_MODAL_DOC_SAMPLES,
  EDIT_MODAL_GLOSSARY,
<<<<<<< HEAD
  EDIT_MODAL_SAMPLE,
  EDIT_MODAL,
  GET_SAMPLES,
=======
  EDIT_MODAL,
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  RESET_MODAL,
  RESET_MODAL_SECONDARY,
  SET_MODAL_ERROR,
  SHOW_MODAL,
<<<<<<< HEAD
  SHOW_MODAL_SECONDARY,
} from "../constants/action-types";

import { storage, cocsRef, asbestosSamplesRef } from "../config/firebase";
// import Resizer from 'react-image-file-resizer';

export const resetModal = () => dispatch => {
  dispatch({ type: RESET_MODAL });
};
=======
  SHOW_MODAL_SECONDARY
} from '../constants/action-types'

import { storage } from '../config/firebase'

export const resetModal = () => (dispatch) => {
  dispatch({ type: RESET_MODAL })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const hideModal = () => (dispatch) => {
  dispatch({
    type: RESET_MODAL
<<<<<<< HEAD
  });
};

export const hideModalSecondary = () => dispatch => {
  dispatch({
    type: RESET_MODAL_SECONDARY
  });
};
=======
  })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const hideModalSecondary = () => (dispatch) => {
  dispatch({
<<<<<<< HEAD
    type: SHOW_MODAL,
    modalType,
    modalProps
  });
};

export const showModalSecondary = ({ modalType, modalProps }) => dispatch => {
  dispatch({
    type: SHOW_MODAL_SECONDARY,
    modalType,
    modalProps,
  })
}

export const onUploadFile = ({ file, storagePath, prefix, imageQuality, imageHeight }) => async dispatch => {
  let urlField = 'fileUrl',
    refField = 'fileRef';

  // console.log(imageQuality);
  // console.log(imageHeight);
  //
  let uploadFile = file;
  //
  // if (imageQuality) {
  //   console.log('Do resize');
  //   Resizer.imageFileResizer(
  //     file,
  //     null, imageHeight, 'JPEG', imageQuality,
  //     0, uri => {
  //       console.log(uri);
  //       uploadFile = new File(uri, 'fileName');
  //     }, 'base64',
  //   );
  // }

  if (prefix) {
    urlField = `${prefix}Url`;
    refField = `${prefix}Ref`;
  }
  if (!file) return;
  dispatch({
    type: EDIT_MODAL,
    payload: {
      isUploading: true,
      uploadProgress: 0
    }
  });
  var path =
    storagePath +
    "_" +
    parseInt(Math.floor(Math.random() * Math.floor(1000))) +
    "_" +
    uploadFile.name;
  var uploadTask = storage.ref(path).put(uploadFile);
  uploadTask.on(
    "state_changed",
    snapshot => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      dispatch({
        type: EDIT_MODAL,
        payload: {
          uploadProgress: progress
        }
      });
    },
    error => {
      //console.log(error.code);
    },
    snapshot => {
      uploadTask.snapshot.ref.getDownloadURL().then(url => {
        dispatch({
          type: EDIT_MODAL_DOC,
          payload: {
            [refField]: path,
            [urlField]: url
          }
        });
        dispatch({
          type: EDIT_MODAL,
          payload: {
            isUploading: false,
            progress: 100
          }
        });
      });
    }
  );
};

export const setModalError = error => dispatch => {
  dispatch({
    type: SET_MODAL_ERROR,
    payload: error
  });
};

export const handleModalChange = target => dispatch => {
  //console.log(target);
  if (target.id === 'samples') {
    dispatch({
      type: EDIT_MODAL_DOC_SAMPLES,
      payload: target.value
    });
    // dispatch({
    //   type: GET_SAMPLES,
    //   cocUid: target.cocUid,
    //   payload: target.value,
    // });
  } else if (target.id === 'comment') {
    dispatch({
      type: EDIT_MODAL_DOC_COMMENT,
      payload: target.value,
    })
  } else if (target.id === 'doc') {
    dispatch({
      type: EDIT_MODAL_DOC,
      payload: target.value,
    });
  } else if (target.id === 'modal') {
    dispatch({
      type: EDIT_MODAL,
      payload: target.value,
    })
  } else {
    dispatch({
      type: EDIT_MODAL_DOC,
      payload: { [target.id]: target.value }
    });
  }
};

export const handleModalChangeStep = target => dispatch => {
  dispatch({
    type: EDIT_MODAL_DOC_STEPS,
    payload: target
  });
};

export const handleGlossaryChange = (number, type, value) => dispatch => {
  dispatch({
    type: EDIT_MODAL_GLOSSARY,
    payload: {
      number: number + 1,
      type: type,
      value: value
    }
  });
};

export const handleModalSubmit = ({ doc, pathRef, docid }) => dispatch => {
  let uid;
  if (doc.uid) {
    pathRef.doc(doc.uid).set(doc);
  } else if (docid === 'random') {
    pathRef.doc().set(doc);
  } else if (docid) {
    pathRef.doc(docid).set({ ...doc, uid: docid });
  } else {
    // //console.log(doc.type);
    uid = doc.type + parseInt(Math.floor(Math.random() * Math.floor(1000)));
    // //console.log(uid);
    pathRef.doc(uid).set({ ...doc, uid: uid });
  }
  dispatch({ type: RESET_MODAL });
};

export const handleModalSubmitToDoc = ({ doc, pathRef }) => dispatch => {
  pathRef.set(doc);
  dispatch({ type: RESET_MODAL });
};
=======
    type: RESET_MODAL_SECONDARY
  })
}

export const showModal =
  ({ modalType, modalProps }) =>
  (dispatch) => {
    dispatch({
      type: SHOW_MODAL,
      modalType,
      modalProps
    })
  }

export const showModalSecondary =
  ({ modalType, modalProps }) =>
  (dispatch) => {
    dispatch({
      type: SHOW_MODAL_SECONDARY,
      modalType,
      modalProps
    })
  }

export const onUploadFile =
  ({ file, storagePath, prefix, imageQuality, imageHeight }) =>
  async (dispatch) => {
    let urlField = 'fileUrl',
      refField = 'fileRef'

    // console.log(imageQuality);
    // console.log(imageHeight);
    //
    let uploadFile = file
    //
    // if (imageQuality) {
    //   console.log('Do resize');
    //   Resizer.imageFileResizer(
    //     file,
    //     null, imageHeight, 'JPEG', imageQuality,
    //     0, uri => {
    //       console.log(uri);
    //       uploadFile = new File(uri, 'fileName');
    //     }, 'base64',
    //   );
    // }

    if (prefix) {
      urlField = `${prefix}Url`
      refField = `${prefix}Ref`
    }
    if (!file) return
    dispatch({
      type: EDIT_MODAL,
      payload: {
        isUploading: true,
        uploadProgress: 0
      }
    })
    var path = storagePath + '_' + parseInt(Math.floor(Math.random() * Math.floor(1000))) + '_' + uploadFile.name
    var uploadTask = storage.ref(path).put(uploadFile)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        dispatch({
          type: EDIT_MODAL,
          payload: {
            uploadProgress: progress
          }
        })
      },
      (error) => {
        //console.log(error.code);
      },
      (snapshot) => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          dispatch({
            type: EDIT_MODAL_DOC,
            payload: {
              [refField]: path,
              [urlField]: url
            }
          })
          dispatch({
            type: EDIT_MODAL,
            payload: {
              isUploading: false,
              progress: 100
            }
          })
        })
      }
    )
  }

export const setModalError = (error) => (dispatch) => {
  dispatch({
    type: SET_MODAL_ERROR,
    payload: error
  })
}

export const handleModalChange = (target) => (dispatch) => {
  //console.log(target);
  if (target.id === 'samples') {
    dispatch({
      type: EDIT_MODAL_DOC_SAMPLES,
      payload: target.value
    })
    // dispatch({
    //   type: GET_SAMPLES,
    //   cocUid: target.cocUid,
    //   payload: target.value,
    // });
  } else if (target.id === 'comment') {
    dispatch({
      type: EDIT_MODAL_DOC_COMMENT,
      payload: target.value
    })
  } else if (target.id === 'doc') {
    dispatch({
      type: EDIT_MODAL_DOC,
      payload: target.value
    })
  } else if (target.id === 'modal') {
    dispatch({
      type: EDIT_MODAL,
      payload: target.value
    })
  } else {
    dispatch({
      type: EDIT_MODAL_DOC,
      payload: { [target.id]: target.value }
    })
  }
}

export const handleModalChangeStep = (target) => (dispatch) => {
  dispatch({
    type: EDIT_MODAL_DOC_STEPS,
    payload: target
  })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const handleGlossaryChange = (number, type, value) => (dispatch) => {
  dispatch({
    type: EDIT_MODAL_GLOSSARY,
    payload: {
      number: number + 1,
      type: type,
      value: value
    }
  })
}

export const handleModalSubmit =
  ({ doc, pathRef, docid }) =>
  (dispatch) => {
    let uid
    if (doc.uid) {
      pathRef.doc(doc.uid).set(doc)
    } else if (docid === 'random') {
      pathRef.doc().set(doc)
    } else if (docid) {
      pathRef.doc(docid).set({ ...doc, uid: docid })
    } else {
      // //console.log(doc.type);
      uid = doc.type + parseInt(Math.floor(Math.random() * Math.floor(1000)))
      // //console.log(uid);
      pathRef.doc(uid).set({ ...doc, uid: uid })
    }
    dispatch({ type: RESET_MODAL })
  }

export const handleModalSubmitToDoc =
  ({ doc, pathRef }) =>
  (dispatch) => {
    pathRef.set(doc)
    dispatch({ type: RESET_MODAL })
  }

export const handleTagAddition = (addedTag) => (dispatch) => {
  dispatch({
    type: ADD_TAG,
    payload: addedTag
<<<<<<< HEAD
  });
};
=======
  })
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

export const handleTagDelete = (removedTag) => (dispatch) => {
  dispatch({
    type: DELETE_TAG,
    payload: removedTag
  });
};
