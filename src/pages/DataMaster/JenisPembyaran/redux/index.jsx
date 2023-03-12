import {
  masterActions,
  postData,
  ToastNotification,
  utilityActions,
  Swal,
  reset,
  putDataParams,
  deleteData,
} from "../../../../components";

export const simpanJenisPembayaran = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.FormJenisPembayaran?.values;
    const isEdit = state.utility.isEdit;

    dispatch(utilityActions.setLoading(true));

    isEdit
      ? putDataParams("payment-methods/" + data.id, data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataJenisPembayaran());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormJenisPembayaran"));
            ToastNotification(
              "success",
              "Berhasil mengedit data jenis pembayran"
            );
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Edit data jenis pembayaran gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          })
      : postData("payment-methods", data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataJenisPembayaran());
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
  };
};

export const hapusJenisPembayaran = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      // title: "Anda Yakin !!",
      // text: "Ingin Menghapus Data Ini ?",
      html:
        "Apakah Anda Yakin Ingin " +
        "Menghapus " +
        "<h1><b>Jenis Pembayaran " +
        row.name +
        "</b> ?</h1>",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData("payment-methods/" + row.id)
          .then((res) => {
            ToastNotification("success", "Data berhasil dihapus");
            dispatch(masterActions.getDataJenisPembayaran());
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
