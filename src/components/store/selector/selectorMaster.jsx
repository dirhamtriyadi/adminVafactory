const getDataJenisPembayaran = (state) => state.master.getDataJenisPembayaran;
const getDataKenis = (state) => state.master.getDataKenis;
const getDataProduk = (state) => state.master.getDataProduk;
const getDataCash = (state) => state.master.getDataCash;
const getDataCashAll = (state) => state.master.getDataCashAll;
const getDataCustomer = (state) => state.master.getDataCustomer;
const getDataUsers = (state) => state.master.getDataUsers;

// Ade
const getDataTracking = (state) => state.master.getDataTracking;
const getDataOrders = (state) => state.master.getDataOrders;
const getDataOrderTransaction = (state) => state.master.getDataOrderTransaction;
const getDataOrderTracking = (state) => state.master.getDataOrderTracking;
const getDataProfile = (state) => state.master.getDataProfile;

const selectorMaster = {
    getDataCustomer,
    getDataJenisPembayaran,
    getDataKenis,
    getDataProduk,
    getDataCash,
    getDataCashAll,
    getDataUsers,

    // Ade
    getDataTracking,
    getDataOrders,
    getDataOrderTransaction,
    getDataOrderTracking,
    getDataProfile,
};

export default selectorMaster;
