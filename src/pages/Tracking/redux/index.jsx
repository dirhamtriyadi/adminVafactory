import { masterActions, Swal, deleteData, putDataParams, utilityActions, ToastNotification, reset, postData } from "../../../components" 

export const simpanDataTracking = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const data = state.form.FormDataTracking?.values
    const isEdit = state.utility.isEdit

    dispatch(utilityActions.setLoading(true))

    isEdit
        ? putDataParams("tracking/" + data.id, data)
            .then((res) => {
                dispatch(utilityActions.setLoading(false))
                if (res.data?.name?.[0]) {
                    ToastNotification("info", res.data?.name?.[0])
                    return false
                }
                if (res.data?.description?.[0]) {
                    ToastNotification("info", res.data?.description?.[0])
                    return false
                }

                dispatch(masterActions.getDataTracking())
                dispatch(utilityActions.hideModal())
                dispatch(reset("FormDataTracking"))
                ToastNotification("success", "Berhasil mengedit data tracking")
            })
            .catch((err) => {
                ToastNotification("info", "Edit data tracking gagal, silahkan coba lagi !!!")
                dispatch(utilityActions.setLoading(false))
            })
        : postData("tracking", data)
            .then((res) => {
                dispatch(utilityActions.setLoading(false))
                if (res.data?.name?.[0]) {
                    ToastNotification("info", res.data?.name?.[0])
                    return false
                }
                if (res.data?.description?.[0]) {
                    ToastNotification("info", res.data?.description?.[0])
                    return false
                }
                
                dispatch(masterActions.getDataTracking())
                dispatch(utilityActions.hideModal())
                dispatch(reset("FormDataTracking"))
                ToastNotification("success", "Berhasil menambah data tracking")
            })
            .catch((err) => {
                // console.log(err)
                ToastNotification("info", "Tambah data tracking gagal, silahkan coba lagi !!!")
                dispatch(utilityActions.setLoading(false))
            })
  }
}

export const hapusDataTracking = (row) => {
    return async (dispatch, getState) => {
        Swal.fire({
            // title: "Apakah anda yakin?",
            // text: "Data yang dihapus tidak dapat dikembalikan",
            html:
                "Apakah Anda Yakin Ingin " +
                "Menghapus " +
                "<h1><b>Customer  " +
                row.name +
                "</b> ?</h1>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData("tracking/" + row.id)
                    .then((res) => {
                        ToastNotification("success", "Berhasil menghapus data tracking")
                        dispatch(masterActions.getDataTracking())
                    })
                    .catch((err) => {
                        // console.log(err);
                        ToastNotification("info", "Hapus data tracking gagal, silahkan coba lagi !!!")
                    })
            }
        })
    }
}