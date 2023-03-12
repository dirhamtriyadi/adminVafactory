import { getData } from "../../../config/axios";

export const GET_DATA_PENJUALAN = "GET_DATA_PENJUALAN";



const getDataPenjualan = () => {
    return (dispatch) => {
      getData("transactions")
        .then((res) => {
          dispatch({
            type: GET_DATA_PENJUALAN,
            payload: {
              data: res.data,
            },
          });
        })
        .catch((err) => {
        //   console.log(err.response);
        dispatch({
            type: GET_DATA_PENJUALAN,
            payload: {
              data: [],
            },
          });
        });
    };
  };


  const acttionPenjualan = {
    getDataPenjualan,
  }
  export default acttionPenjualan