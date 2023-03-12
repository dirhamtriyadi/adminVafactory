const ValidasiCariBarang = (value) => {
    const errors = {};
    if (!value.kodebarang) {
        errors.kodebarang = "Kode Barang Tidak Boleh Kosong";
    }
    if (!value.jumlah_beli) {
        errors.jumlah_beli = "Qty Beli Tidak Boleh Kosong";
    }
    if (!value.code) {
        errors.code = "Kode Barang Tidak Boleh Kosong";
    }


    return errors;
}
const validasiPembayaran = value =>{
    const errors = {};
    if (!value.idCustomer) {
        errors.idCustomer = "Customer Tidak Boleh Kosong";
    }
    if (!value.jenis_pembayaran) {
        errors.jenis_pembayaran = "Jenis Pembayaran Tidak Boleh Kosong";
    }
    return errors;

}

const ValidasiFormJual = {
    ValidasiCariBarang,
    validasiPembayaran
}
export default ValidasiFormJual;


