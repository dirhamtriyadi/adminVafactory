import { getItem,Swal,deleteData, reset,masterActions, postData, ToastNotification, utilityActions } from "../../../components";

export const simpanUangKas = () => {
    return async  (dispatch, getState) => {
        const state = getState();
        const data = state.form.ModalUangKas?.values;
        
        let hasil = {
            transaction_date : data.tanggal,
            user_id : getItem('userdata').user_id,
            cash_flow_type : data.type,
            amount : Number(data.nominal),
            payment_methods_id : data.jenis || 0,
            description : data.deskripsi,
        }
        dispatch(utilityActions.setLoading(true));

        postData('cash-flows',hasil)
        .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataCash());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormJenisPembayaran"));
            ToastNotification("success", "Berhasil menambahan jenis pembayran");
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Penambahan data jenis pembayaran gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          });
    }
}

export const hapusUangKas = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      // title: "Anda Yakin !!",
      // text: "Ingin Menghapus Data Ini ?",
      html:
        "Apakah Anda Yakin Ingin " +
        "Menghapus " +
        "<h1><b>Uang kas Ini " +
        "</b> ?</h1>",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData("cash-flows/" + row.id)
          .then((res) => {
            ToastNotification("success", "Data berhasil dihapus");
            dispatch(masterActions.getDataCash());
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Terjadi kesalahaan saat menghapus data !!!"
            );
          });
      }
    });
  };
};
