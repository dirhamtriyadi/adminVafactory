import { masterActions, Swal, deleteData, putDataParams, utilityActions, ToastNotification, reset, postData } from "../../../components" 

export const simpanDataTracking = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataOrders?.values
        const isEdit = state.utility.isEdit

        dispatch(utilityActions.setLoading(true))

        isEdit
            ? putDataParams("orders/" + data.id, data)
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
                    dispatch(reset("FormDataOrders"))
                    ToastNotification("success", "Berhasil mengedit data tracking")
                })
                .catch((err) => {
                    ToastNotification("info", "Edit data tracking gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
            : postData("orders", data)
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
                    dispatch(reset("FormDataOrders"))
                    ToastNotification("success", "Berhasil menambah data tracking")
                })
                .catch((err) => {
                    console.log(err)
                    ToastNotification("info", "Tambah data tracking gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
    }

}

export const hapusDataOrders = (row) => {
    return async (dispatch, getState) => {
        Swal.fire({
            html: 
                "Apakah Anda Yakin Ingin " +
                "Menghapus " +
                "<h1><b>Orders  " +
                row.name +
                "</b> ?</h1>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(utilityActions.setLoading(true))
                deleteData("orders/" + row.id)
                    .then((res) => {
                        dispatch(utilityActions.setLoading(false))
                        dispatch(masterActions.getDataOrders())
                        ToastNotification("success", "Berhasil menghapus data orders")
                    })
                    .catch((err) => {
                        ToastNotification("info", "Hapus data orders gagal, silahkan coba lagi !!!")
                        dispatch(utilityActions.setLoading(false))
                    })
            }
        })
    }
}