import {
  masterActions,
  Swal,
  deleteData,
  putDataParams,
  utilityActions,
  ToastNotification,
  reset,
  postData,
} from "../../../components";

export const simpanDataCustomer = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.FormDataCustomer?.values;
    const isEdit = state.utility.isEdit;

    dispatch(utilityActions.setLoading(true));

    isEdit
      ? putDataParams("customers/" + data.id, data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            if (res.data?.name?.[0]) {
              ToastNotification("info", res.data?.name?.[0]);
              return false;
            }
            // if (res.data?.phone?.[0]) {
            //   ToastNotification("info", res.data?.phone?.[0]);
            //   return false;
            // }
            // if (res.data?.email?.[0]) {
            //   ToastNotification("info", res.data?.email?.[0]);
            //   return false;
            // }
           
            dispatch(masterActions.getDataCustomer());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormDataCustomer"));
            ToastNotification("success", "Berhasil mengedit data customer");
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Edit data customer gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          })
      : postData("customers", data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            if (res.data?.name?.[0]) {
              ToastNotification("info", res.data?.name?.[0]);
              return false;
            }
            // if (res.data?.phone?.[0]) {
            //   ToastNotification("info", res.data?.phone?.[0]);
            //   return false;
            // }
            // if (res.data?.email?.[0]) {
            //   ToastNotification("info", res.data?.email?.[0]);
            //   return false;
            // }
           
            // console.log(res.data.name[0])

            dispatch(masterActions.getDataCustomer());
            dispatch(utilityActions.hideModal());
            dispatch(reset("FormDataCustomer"));
            ToastNotification("success", "Berhasil menambahan data customer");
          })
          .catch((err) => {
            // console.log(err)
            ToastNotification(
              "info",
              "Penambahan data customer gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          });
  };
};

export const hapusDataCustomer = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      // title: "Anda Yakin !!",
      // text: "Ingin Menghapus Data Ini ?",
      html:
        "Apakah Anda Yakin Ingin " +
        "Menghapus " +
        "<h1><b>Customer  " +
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
        deleteData("customers/" + row.id)
          .then((res) => {
            ToastNotification("success", "Data berhasil dihapus");
            dispatch(masterActions.getDataCustomer());
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
