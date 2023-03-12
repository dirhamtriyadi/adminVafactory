import { GET_DATA_PENJUALAN } from "../actions/transaksi_action";

const initialState = {
  getDataPenjualan: [],
};

const penjualan = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DATA_PENJUALAN:
      return {
        ...state,
        getDataPenjualan: actions.payload.data,
      };
    default:
      return state;
  }
};

export default penjualan;
