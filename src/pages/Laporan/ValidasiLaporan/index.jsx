const ValidasiTanggal = (value) => {
  const errors = {};
  if (!value.tanggal_awal) {
    errors.tanggal_awal = "Tanggal Dari Tidak Boleh Kosong";
  }
  if (!value.tanggal_akhir) {
    errors.tanggal_akhir = "Tanggal Sampai Tidak Boleh Kosong";
  }
 
  return errors;
};

const ValidasiLaporan = {
  ValidasiTanggal,
};

export default ValidasiLaporan;
