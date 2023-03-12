import { getData } from "../../../config/axios";

export const GET_DATA_JENIS_PEMBAYARAN = "GET_DATA_JENIS_PEMBAYARAN";
export const GET_DATA_BAHAN = "GET_DATA_BAHAN";
export const GET_DATA_JENIS = "GET_DATA_JENIS";
export const GET_DATA_PRODUK = "GET_DATA_PRODUK";
export const GET_DATA_CASH = "GET_DATA_CASH";
export const GET_DATA_CUSTOMER = "GET_DATA_CUSTOMER";



const getDataCustomer = () => {
    return (dispatch) => {
      getData("customers")
        .then((res) => {
          dispatch({
            type: GET_DATA_CUSTOMER,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
  };
const getDataCash = () => {
    return (dispatch) => {
      getData("cash-flows")
        .then((res) => {
          dispatch({
            type: GET_DATA_CASH,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
const getDataProduk = () => {
    return (dispatch) => {
      getData("products")
        .then((res) => {
          dispatch({
            type: GET_DATA_PRODUK,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
const getDataKenis = () => {
    return (dispatch) => {
      getData("print-types")
        .then((res) => {
          dispatch({
            type: GET_DATA_JENIS,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
const getDataBahan = () => {
    return (dispatch) => {
      getData("materials")
        .then((res) => {
          dispatch({
            type: GET_DATA_BAHAN,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
const getDataJenisPembayaran = () => {
    return (dispatch) => {
      getData("payment-methods")
        .then((res) => {
          dispatch({
            type: GET_DATA_JENIS_PEMBAYARAN,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };


  const actionMaster = {
    getDataKenis,
    getDataBahan,
    getDataJenisPembayaran,
    getDataProduk,
    getDataCash,
    getDataCustomer
  }
  export default actionMaster