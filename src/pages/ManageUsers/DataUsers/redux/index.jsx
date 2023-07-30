import { Swal, deleteData, ToastNotification, masterActions, reset, utilityActions, putDataParams, postData } from "../../../../components"

export const simpanDataUsers = () => {
    return async  (dispatch, getState) => {
        const state = getState();
        const data = state.form.FormDataUsers?.values;
        const isEdit = state.utility.isEdit;

        if(data.password?.[1]){
            if (data.password_confirmation?.[1] === undefined) {
                ToastNotification("info", "Konfirmasi Password tidak boleh kosong")
                return false
            }
        }

        if (data.password?.[1] !== data.password_confirmation?.[1]) {
            ToastNotification("info", "Password tidak sama")
            return false
        }

        dispatch(utilityActions.setLoading(true));

        isEdit
            ? putDataParams("user/" + data.id, data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false));
                    if (res.data?.name?.[0]) {
                        ToastNotification("info", res.data?.name?.[0]);
                        return false;
                    }
                    if (res.data?.email?.[0]) {
                        ToastNotification("info", res.data?.email?.[0]);
                        return false;
                    }
                    dispatch(masterActions.getDataUsers());
                    dispatch(utilityActions.hideModal());
                    dispatch(reset("FormDataUsers"));
                    ToastNotification("success", "Berhasil mengedit data user");
                })
                .catch((err) => {
                    ToastNotification("info", "Edit data user gagal, silahkan coba lagi !!!");
                    dispatch(utilityActions.setLoading(false));
                })
                : postData("user", data)
                    .then((res) => {
                        dispatch(utilityActions.setLoading(false));
                        if (res.data?.name?.[0]) {
                            ToastNotification("info", res.data?.name?.[0]);
                            return false;
                        }
                        if (res.data?.email?.[0]) {
                            ToastNotification("info", res.data?.email?.[0]);
                            return false;
                        }
                        if (res.data?.password?.[0]) {
                            ToastNotification("info", res.data?.password?.[0]);
                            return false;
                        }
                        dispatch(masterActions.getDataUsers());
                        dispatch(utilityActions.hideModal());
                        dispatch(reset("FormDataUsers"));
                        ToastNotification("success", "Berhasil menambahkan data user");
                    })
                    .catch((err) => {
                        ToastNotification("info", "Tambah data user gagal, silahkan coba lagi !!!");
                        dispatch(utilityActions.setLoading(false));
                    })
    }
}

export const hapusDataUsers = (row) => {
    return async  (dispatch, getState) => {
        Swal.fire({
            // title: "Anda Yakin !!",
            // text: "Ingin Menghapus Data Ini ?",
            html:
              "Apakah Anda Yakin Ingin " +
              "Menghapus " +
              "<h1><b>User  " +
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
              deleteData("user/" + row.id)
                .then((res) => {
                  ToastNotification("success", "Data berhasil dihapus");
                  dispatch(masterActions.getDataUsers());
                })
                .catch((err) => {
                  ToastNotification(
                    "info",
                    "Terjadi kesalahaan saat menghapus data !!!"
                  );
                });
            }
          });
    }
}