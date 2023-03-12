
export const VadliasiUangKas = value =>{
    const errors = {};
    if (!value.tanggal) {
        errors.tanggal = "Tanggal Tidak Boleh Kosong";
    }
    if (!value.nominal) {
        errors.nominal = "Jenis Pembayaran Tidak Boleh Kosong";
    }
    if (!value.deskripsi) {
        errors.deskripsi = "Deskripsi Tidak Boleh Kosong";
    }
    if (!value.type) {
        errors.type = "Tipe Harus Dipilih";
    }
    if(value.type === "UANGMASUK"){
        if(!value.jenis){
        errors.jenis = "Jenis Harus Dipilih";
        }
    }
    return errors;

}

