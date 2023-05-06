import { masterActions, Swal, deleteData, putDataParams, utilityActions, ToastNotification, reset, postData } from "../../../components" 

export const simpanDataOrderTransaction = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        const data = state.form.FormDataOrderTransaction?.values
        const isEdit = state.utility.isEdit

        dispatch(utilityActions.setLoading(true))

        isEdit
            ? putDataParams("order-transactions/" + data.id, data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.order_id?.[0]) {
                        ToastNotification("info", res.data?.order_id?.[0])
                        return false
                    }
                    if (res.data?.payment_method_id?.[0]) {
                        ToastNotification("info", res.data?.payment_method_id?.[0])
                        return false
                    }
                    if (res.data?.amount?.[0]) {
                        ToastNotification("info", res.data?.amount?.[0])
                        return false
                    }
                    if (res.data?.date?.[0]) {
                        ToastNotification("info", res.data?.date?.[0])
                        return false
                    }
                    dispatch(masterActions.getDataOrderTransaction())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataOrderTransaction"))
                    ToastNotification("success", "Berhasil mengedit data Order Transaction")
                })
                .catch((err) => {
                    ToastNotification("info", "Edit data Order Transaction gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
            : postData("order-transactions", data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.order_id?.[0]) {
                        ToastNotification("info", res.data?.order_id?.[0])
                        return false
                    }
                    if (res.data?.payment_method_id?.[0]) {
                        ToastNotification("info", res.data?.payment_method_id?.[0])
                        return false
                    }
                    if (res.data?.amount?.[0]) {
                        ToastNotification("info", res.data?.amount?.[0])
                        return false
                    }
                    if (res.data?.date?.[0]) {
                        ToastNotification("info", res.data?.date?.[0])
                        return false
                    }
                    dispatch(masterActions.getDataOrderTransaction())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataOrderTransaction"))
                    ToastNotification("success", "Berhasil menambah data Order Transaction")
                })
                .catch((err) => {
                    console.log(err);
                    ToastNotification("info", "Tambah data Order Transaction gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                });
    }
}

export const hapusDataOrderTransaction = (row) => {
    return async (dispatch, getState) => {
        // console.log(row);
      Swal.fire({
        // title: "Anda Yakin !!",
        // text: "Ingin Menghapus Data Ini ?",
        html:
          "Apakah Anda Yakin Ingin " +
          "Menghapus " +
          "<h1><b>Order Transaction  " +
          row.id +
          "</b> ?</h1>",
        icon: "warning",
        position: "top-center",
        cancelButtonText: "Tidak",
        showCancelButton: true,
        confirmButtonText: "OK",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("order-transactions/" + row.id)
            .then((res) => {
              ToastNotification("success", "Data berhasil dihapus");
              dispatch(masterActions.getDataOrderTransaction());
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