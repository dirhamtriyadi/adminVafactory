import { getData } from "../../../config/axios";

export const GET_DATA_JENIS_PEMBAYARAN = "GET_DATA_JENIS_PEMBAYARAN";
export const GET_DATA_JENIS = "GET_DATA_JENIS";
export const GET_DATA_PRODUK = "GET_DATA_PRODUK";
export const GET_DATA_CASH = "GET_DATA_CASH";
export const GET_DATA_CASH_ALL = "GET_DATA_CASH_ALL";
export const GET_DATA_CUSTOMER = "GET_DATA_CUSTOMER";
export const GET_DATA_USERS = "GET_DATA_USERS";

// Ade
export const GET_DATA_TRACKING = "GET_DATA_TRACKING";
export const GET_DATA_ORDERS = "GET_DATA_ORDERS";
export const GET_DATA_ORDER_TRANSACTION = "GET_DATA_ORDER_TRANSACTION";
export const GET_DATA_ORDER_TRACKING = "GET_DATA_ORDER_TRACKING";
export const GET_DATA_PROFILE = "GET_DATA_PROFILE";

const getDataUsers = () => {
    return (dispatch) => {
        getData("user")
            .then((res) => {
                dispatch({
                    type: GET_DATA_USERS,
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
const getDataCashAll = () => {
    return (dispatch) => {
        getData("cash-flows/get-all")
            .then((res) => {
                dispatch({
                    type: GET_DATA_CASH_ALL,
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

// Ade
const getDataTracking = () => {
    return (dispatch) => {
        getData("tracking")
            .then((res) => {
                dispatch({
                    type: GET_DATA_TRACKING,
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

const getDataOrders = () => {
    return (dispatch) => {
        getData("orders")
            .then((res) => {
                dispatch({
                    type: GET_DATA_ORDERS,
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

const getDataOrderTransaction = () => {
    return (dispatch) => {
        getData("order-transactions")
            .then((res) => {
                dispatch({
                    type: GET_DATA_ORDER_TRANSACTION,
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

const getDataOrderTracking = () => {
    return (dispatch) => {
        getData("order-trackings")
            .then((res) => {
                dispatch({
                    type: GET_DATA_ORDER_TRACKING,
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

const getDataProfile = (haha) => {
    return (dispatch) => {
        getData("user/" + haha)
            .then((res) => {
                dispatch({
                    type: GET_DATA_PROFILE,
                    payload: {
                        data: res.data,
                    },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

const actionMaster = {
    getDataKenis,
    getDataJenisPembayaran,
    getDataProduk,
    getDataCash,
    getDataCashAll,
    getDataCustomer,
    getDataUsers,

    // Ade
    getDataTracking,
    getDataOrders,
    getDataOrderTransaction,
    getDataOrderTracking,
    getDataProfile,
};
export default actionMaster;
