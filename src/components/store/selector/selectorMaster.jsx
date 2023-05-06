const getDataJenisPembayaran = (state) => state.master.getDataJenisPembayaran;
const getDataKenis = (state) => state.master.getDataKenis;
const getDataProduk = (state) => state.master.getDataProduk;
const getDataCash = (state) => state.master.getDataCash;
const getDataCustomer = (state) => state.master.getDataCustomer;

// Ade
const getDataTracking = (state) => state.master.getDataTracking;
const getDataOrders = (state) => state.master.getDataOrders;
const getDataOrderTransaction = (state) => state.master.getDataOrderTransaction;

const selectorMaster = {
    getDataCustomer,
    getDataJenisPembayaran,
    getDataKenis,
    getDataProduk,
    getDataCash,

    // Ade
    getDataTracking,
    getDataOrders,
    getDataOrderTransaction,
};

export default selectorMaster;
