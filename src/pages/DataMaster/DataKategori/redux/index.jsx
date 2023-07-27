import { masterActions,Swal,deleteData, putDataParams, utilityActions,ToastNotification,reset,postData } from "../../../../components";

export const simpanDataKategori = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const data = state.form.FormDataJenis?.values;
        const isEdit = state.utility.isEdit;
    
        dispatch(utilityActions.setLoading(true));
    
        isEdit
          ? putDataParams("print-types/" + data.id, data)
              .then((res) => {
                dispatch(utilityActions.setLoading(false));
                dispatch(masterActions.getDataKenis());
                dispatch(utilityActions.hideModal());
                dispatch(reset("FormDataJenis"));
                ToastNotification(
                  "success",
                  "Berhasil mengedit data jenis"
                );
              })
              .catch((err) => {
                ToastNotification(
                  "info",
                  "Edit data jenis gagal, silahkan coba lagi !!!"
                );
                dispatch(utilityActions.setLoading(false));
              })
          : postData("print-types", data)
              .then((res) => {
                dispatch(utilityActions.setLoading(false));
                dispatch(masterActions.getDataKenis());
                dispatch(utilityActions.hideModal());
                dispatch(reset("FormDataJenis"));
                ToastNotification("success", "Berhasil menambahan data jenis");
              })
              .catch((err) => {
                ToastNotification(
                  "info",
                  "Penambahan data jenis gagal, silahkan coba lagi !!!"
                );
                dispatch(utilityActions.setLoading(false));
              });
      };
}

export const hapusDataKategori = (row) => {
    return async (dispatch, getState) => {
      Swal.fire({
        // title: "Anda Yakin !!",
        // text: "Ingin Menghapus Data Ini ?",
        html:
          "Apakah Anda Yakin Ingin " +
          "Menghapus " +
          "<h1><b>Kategori  " +
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
          deleteData("print-types/" + row.id)
            .then((res) => {
              ToastNotification("success", "Data berhasil dihapus");
              dispatch(masterActions.getDataKenis());
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
  