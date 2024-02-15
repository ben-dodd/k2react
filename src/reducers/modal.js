import {
  ADD_TAG,
  DELETE_TAG,
  EDIT_MODAL_DOC,
  EDIT_MODAL_DOC_COMMENT,
  EDIT_MODAL_DOC_STEPS,
  EDIT_MODAL_DOC_SAMPLES,
  EDIT_MODAL_GLOSSARY,
  EDIT_MODAL_SAMPLE,
  EDIT_MODAL,
  HIDE_MODAL,
  HIDE_MODAL_SECONDARY,
  RESET_MODAL,
  RESET_MODAL_SECONDARY,
  SET_MODAL_ERROR,
  SHOW_MODAL,
<<<<<<< HEAD
  SHOW_MODAL_SECONDARY,
} from "../constants/action-types";
import { SOIL_DETAILS } from "../constants/modal-types";
=======
  SHOW_MODAL_SECONDARY
} from '../constants/action-types'
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const modalInit = {
  modalType: null,
  modalProps: {
    doc: {
      personnel: [],
      dates: [],
<<<<<<< HEAD
      type: ""
=======
      type: ''
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    },
    isUploading: false,
    uploadProgress: 0,
    tags: []
<<<<<<< HEAD
  },
  modalTypeSecondary: null,
  modalPropsSecondary: {
    doc: {

    },
=======
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  },
  modalTypeSecondary: null,
  modalPropsSecondary: {
    doc: {}
  }
}

// All properties related to dialog boxes etc.
export default function modalReducer(state = modalInit, action) {
  switch (action.type) {
    case RESET_MODAL:
<<<<<<< HEAD
      return modalInit;
    case RESET_MODAL_SECONDARY:
      return {...state,
        modalTypeSecondary: null,
        modalPropsSecondary: {
          doc: {

          },
=======
      return modalInit
    case RESET_MODAL_SECONDARY:
      return {
        ...state,
        modalTypeSecondary: null,
        modalPropsSecondary: {
          doc: {}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        }
      }
    case SHOW_MODAL:
      // console.log(action);
      return {
        modalProps: {
          ...state.modalProps,
          ...action.modalProps
        },
        modalType: action.modalType
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case SHOW_MODAL_SECONDARY:
      return {
        ...state,
        modalPropsSecondary: {
          ...state.modalPropsSecondary,
          ...action.modalProps
        },
        modalTypeSecondary: action.modalType
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case EDIT_MODAL_DOC:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            ...action.payload
          }
        }
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case EDIT_MODAL_DOC_COMMENT:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            comment: {
              ...state.modalProps.doc.comment,
<<<<<<< HEAD
              text: action.payload,
=======
              text: action.payload
            }
          }
        }
      }
    case EDIT_MODAL_DOC_SAMPLES:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            samples: action.payload
          }
        }
      }
    case EDIT_MODAL_DOC_STEPS:
      if (state.modalProps.doc && state.modalProps.doc.steps) {
        if (action.payload.object) {
          return {
            ...state,
            modalProps: {
              ...state.modalProps,
              doc: {
                ...state.modalProps.doc,
                steps: {
                  ...state.modalProps.doc.steps,
                  [action.payload.step]: {
                    ...state.modalProps.doc.steps[action.payload.step],
                    [action.payload.id]: {
                      ...state.modalProps.doc.steps[action.payload.step][action.payload.id],
                      ...action.payload.value
                    }
                  }
                }
              }
            }
          }
        } else {
          return {
            ...state,
            modalProps: {
              ...state.modalProps,
              doc: {
                ...state.modalProps.doc,
                steps: {
                  ...state.modalProps.doc.steps,
                  [action.payload.step]: {
                    ...state.modalProps.doc.steps[action.payload.step],
                    [action.payload.id]: action.payload.value
                  }
                }
              }
            }
          }
        }
      } else return state
    case EDIT_MODAL_GLOSSARY:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            glossary: {
              ...state.modalProps.doc.glossary,
              [action.payload.number]: {
                ...state.modalProps.doc.glossary[action.payload.number],
                [action.payload.type]: action.payload.value
              }
            }
          }
        }
      }
    case EDIT_MODAL_SAMPLE:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            samples: {
              ...state.modalProps.doc.samples,
              [action.payload.number]: {
                ...state.modalProps.doc.samples[action.payload.number],
                ...action.payload.changes
              }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }
          }
        }
      }
    case EDIT_MODAL_DOC_SAMPLES:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            samples: action.payload,
          }
        }
      };
    case EDIT_MODAL_DOC_STEPS:
      if (state.modalProps.doc && state.modalProps.doc.steps) {
        if (action.payload.object) {
          return {
            ...state,
            modalProps: {
              ...state.modalProps,
              doc: {
                ...state.modalProps.doc,
                steps: {
                  ...state.modalProps.doc.steps,
                  [action.payload.step]: {
                    ...state.modalProps.doc.steps[action.payload.step],
                    [action.payload.id]: {
                      ...state.modalProps.doc.steps[action.payload.step][
                        action.payload.id
                      ],
                      ...action.payload.value
                    }
                  }
                }
              }
            }
          };
        } else {
          return {
            ...state,
            modalProps: {
              ...state.modalProps,
              doc: {
                ...state.modalProps.doc,
                steps: {
                  ...state.modalProps.doc.steps,
                  [action.payload.step]: {
                    ...state.modalProps.doc.steps[action.payload.step],
                    [action.payload.id]: action.payload.value
                  }
                }
              }
            }
          };
        }
      } else return state;
    case EDIT_MODAL_GLOSSARY:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            glossary: {
              ...state.modalProps.doc.glossary,
              [action.payload.number]: {
                ...state.modalProps.doc.glossary[action.payload.number],
                [action.payload.type]: action.payload.value
              }
            }
          }
        }
      };
    case EDIT_MODAL_SAMPLE:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            samples: {
              ...state.modalProps.doc.samples,
              [action.payload.number]: {
                ...state.modalProps.doc.samples[action.payload.number],
                ...action.payload.changes,
              }
            }
          }
        }
      };
    case EDIT_MODAL:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          ...action.payload
        }
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case HIDE_MODAL:
      return {
        ...state,
        modalType: null
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case HIDE_MODAL_SECONDARY:
      return {
        ...state,
        modalTypeSecondary: null
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case ADD_TAG:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
            tags: [...state.modalProps.doc.tags, action.payload]
          }
        }
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case DELETE_TAG:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          doc: {
            ...state.modalProps.doc,
<<<<<<< HEAD
            tags: [
              ...state.modalProps.doc.tags.filter(
                (tag, index) => index !== action.payload
              )
            ]
          }
        }
      };
=======
            tags: [...state.modalProps.doc.tags.filter((tag, index) => index !== action.payload)]
          }
        }
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    case SET_MODAL_ERROR:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          error: action.payload
        }
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    default:
      return state
  }
}
