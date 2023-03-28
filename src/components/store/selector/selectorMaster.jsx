const getDataJenisPembayaran = (state) => state.master.getDataJenisPembayaran;
const getDataBahan = (state) => state.master.getDataBahan;
const getDataKenis = (state) => state.master.getDataKenis;
const getDataProduk = (state) => state.master.getDataProduk;
const getDataCash = (state) => state.master.getDataCash;
const getDataCustomer = (state) => state.master.getDataCustomer;

// Ade
const getDataTracking = (state) => state.master.getDataTracking;

const selectorMaster = {
  getDataCustomer,
  getDataJenisPembayaran,
  getDataBahan,
  getDataKenis,
  getDataProduk,
  getDataCash,

  // Ade
  getDataTracking
};

export default selectorMaster;
