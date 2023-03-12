export const HIDE_MODAL = "HIDE_MODAL";
export const SHOW_MODAL = "SHOW_MODAL";
export const IS_LOADING = "IS_LOADING";
export const IS_EDIT = "IS_EDIT";
export const GET_DATA_EDIT = "GET_DATA_EDIT";
export const LoadingTabel = "LoadingTabel";
export const SHOW_MODAL_BANYAK = "SHOW_MODAL_BANYAK";
export const IS_EXPORT = "IS_EXPORT"
export const SET_FORM = "SET_FORM"

 const setForm = (form,data_form=[]) => {
  return (dispatch) => {
    dispatch({
      type: SET_FORM,
      payload: {
        data: {
          form_name : form,
          data : data_form
        },
      },
    });
  };
};
 const getDataEdit = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_EDIT,
      payload: {
        data: data,
      },
    });
  };
};

 const setLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: {
        data: data,
      },
    });
  };
};

const isExport = (data) => {
  return (dispatch) => {
    dispatch({
      type: IS_EXPORT,
      payload: {
        data: data,
      },
    });
  };
};

 const setLoadingTabel = (data) => {
  return (dispatch) => {
    dispatch({
      type: LoadingTabel,
      payload: {
        data: data,
      },
    });
  };
};
 const isEdit = (data) => {
  return (dispatch) => {
    dispatch({
      type: IS_EDIT,
      payload: {
        data: data,
      },
    });
  };
};
 const hideModal = () => {
  return (dispatch) => {
    dispatch({
      type: HIDE_MODAL,
      payload: {
        data: false,
      },
    });
  };
};
 const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MODAL,
      payload: {
        data: true,
      },
    });
  };
};
 const showModalBanyak = (data) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MODAL_BANYAK,
      payload: {
        data: data,
      },
    });
  };
};


const actionUtility = {
    hideModal,
    showModal,
    setLoading,
    isEdit,
    setLoadingTabel,
    showModalBanyak,
    getDataEdit,
    isExport,
    setForm
  }
  export default actionUtility