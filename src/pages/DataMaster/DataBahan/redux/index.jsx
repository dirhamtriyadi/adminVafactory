import {
  masterActions,
  postData,
  ToastNotification,
  utilityActions,
  reset,
  Swal,
  deleteData,
  putDataParams,
} from "../../../../components";

export const simpanDataBahan = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.FormDataBahan?.values;
    const isEdit = state.utility.isEdit;

    dispatch(utilityActions.setLoading(true));

    isEdit
      ? putDataParams("materials/" + data.id, data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataBahan());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormJenisPembayaran"));
            ToastNotification(
              "success",
              "Berhasil mengedit data bahan"
            );
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Edit data bahan gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          })
      : postData("materials", data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataBahan());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormJenisPembayaran"));
            ToastNotification("success", "Berhasil menambahan data bahan");
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Penambahan data bahan gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          });
  };
};

export const hapusDataBahan = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      // title: "Anda Yakin !!",
      // text: "Ingin Menghapus Data Ini ?",
      html:
        "Apakah Anda Yakin Ingin " +
        "Menghapus " +
        "<h1><b>Bahan  " +
        row.name +
        "</b> ini ?</h1>",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData("materials/" + row.id)
          .then((res) => {
            ToastNotification("success", "Data berhasil dihapus");
            dispatch(masterActions.getDataBahan());
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
