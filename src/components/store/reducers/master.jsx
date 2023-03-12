import { GET_DATA_BAHAN, GET_DATA_CASH, GET_DATA_CUSTOMER, GET_DATA_JENIS, GET_DATA_JENIS_PEMBAYARAN, GET_DATA_PRODUK } from "../actions/master_action";


const initialState = {
  getDataJenisPembayaran: [],
  getDataBahan: [],
  getDataKenis: [],
  getDataProduk: [],
  getDataCash: [],
  getDataCustomer: [],

};

const master = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DATA_CUSTOMER:
      return {
        ...state,
        getDataCustomer: actions.payload.data,
      };
    case GET_DATA_CASH:
      return {
        ...state,
        getDataCash: actions.payload.data,
      };
    case GET_DATA_PRODUK:
      return {
        ...state,
        getDataProduk: actions.payload.data,
      };
    case GET_DATA_JENIS:
      return {
        ...state,
        getDataKenis: actions.payload.data,
      };
    case GET_DATA_BAHAN:
      return {
        ...state,
        getDataBahan: actions.payload.data,
      };
    case GET_DATA_JENIS_PEMBAYARAN:
      return {
        ...state,
        getDataJenisPembayaran: actions.payload.data,
      };
    default:
      return state;
  }
};

export default master;
