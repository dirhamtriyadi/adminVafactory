import { GET_DATA_EDIT, HIDE_MODAL, IS_EDIT, IS_EXPORT, IS_LOADING, LoadingTabel, SET_FORM, SHOW_MODAL, SHOW_MODAL_BANYAK } from "../actions/utility_action";


const initialState = {
  setLoading: false,
  modalDialog: false,
  setLoadingTabel: false,
  isEdit: false,
  showModalBanyak: 'TAMBAH',
  getDataEdit: [],
  isExport : false,
  setForm : []

};

const utility = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_FORM:
      return {
        ...state,
        setForm: actions.payload.data,
      };
    case IS_EXPORT:
      return {
        ...state,
        isExport: actions.payload.data,
      };
    case SHOW_MODAL_BANYAK:
      return {
        ...state,
        showModalBanyak: actions.payload.data,
      };
    case LoadingTabel:
      return {
        ...state,
        setLoadingTabel: actions.payload.data,
      };
    case GET_DATA_EDIT:
      return {
        ...state,
        getDataEdit: actions.payload.data,
      };
    case IS_LOADING:
      return {
        ...state,
        setLoading: actions.payload.data,
      };
      case HIDE_MODAL:
        return {
          ...state,
          modalDialog: actions.payload.data,
        };
      case SHOW_MODAL:
        return {
          ...state,
          modalDialog: actions.payload.data,
        };
      case IS_EDIT:
        return {
          ...state,
          isEdit: actions.payload.data,
        };
    default:
      return state;
  }
};

export default utility;
