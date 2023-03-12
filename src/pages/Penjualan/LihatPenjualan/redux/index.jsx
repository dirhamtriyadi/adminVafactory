import Swal from "sweetalert2";
import { acttionPenjualan, deleteData, getToday, ToastNotification } from "../../../../components";

export const hapusTransaksi = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      title: "Anda Yakin !!",
      text: "Ingin Menghapus Data Ini ?",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
        // console.log(row)
        if (result.isConfirmed) {
          if(row.date === getToday()){
              deleteData("transactions/" + row.id)
                .then((res) => {
                  ToastNotification("success", "Data berhasil dihapus");
                  dispatch(acttionPenjualan.getDataPenjualan());
                })
                .catch((err) => {
                  ToastNotification(
                    "info",
                    "Terjadi kesalahaan saat menghapus data !!!"
                  );
                });
          }else{
            ToastNotification(
                "info",
                "Tidak Bisa Membatal Transaksi Lama!!!"
              );
          }
      }
    });
  };
};
