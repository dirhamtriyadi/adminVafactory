const validasiJenisPembayaran = (value) => {
    const errors = {};
    if (!value.description) {
        errors.description = "Deskripsi Tidak Boleh Kosong";
    }
    if (!value.name) {
        errors.name = "Nama Tidak Boleh Kosong";
    }
    return errors;
}

export default validasiJenisPembayaran;


