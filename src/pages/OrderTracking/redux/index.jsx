import {
    masterActions,
    Swal,
    deleteData,
    putDataParams,
    utilityActions,
    ToastNotification,
    reset,
    postData,
    change,
    getItem,
    getToday,
} from "../../../components";

export const simpanDataOrderTracking = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataOrderTracking?.values
        const isEdit = state.utility.isEdit

        dispatch(utilityActions.setLoading(true))

        isEdit
            ? putDataParams("order-trackings/" + data.id, data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.order_id?.[0]) {
                        ToastNotification("info", res.data?.order_id?.[0])
                        return false
                    }
                    if (res.data?.status?.[0]) {
                        ToastNotification("info", res.data?.status?.[0])
                        return false
                    }
                    if (res.data?.description?.[0]) {
                        ToastNotification("info", res.data?.description?.[0])
                        return false
                    }
                    dispatch(masterActions.getDataOrderTracking())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataOrderTracking"))
                    ToastNotification("success", "Berhasil mengedit data Order Tracking")
                })
                .catch((err) => {
                    ToastNotification("info", "Edit data Order Tracking gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
            : postData("order-trackings", data)
                .then((res) => {
                    console.log(res.data);
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.order_id?.[0]) {
                        ToastNotification("info", res.data?.order_id?.[0])
                        return false
                    }
                    if (res.data?.status?.[0]) {
                        ToastNotification("info", res.data?.status?.[0])
                        return false
                    }
                    if (res.data?.description?.[0]) {
                        ToastNotification("info", res.data?.description?.[0])
                        return false
                    }
                    dispatch(masterActions.getDataOrderTracking())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataOrderTracking"))
                    ToastNotification("success", "Berhasil menambah data Order Tracking")
                })
                .catch((err) => {
                    ToastNotification("info", "Tambah data Order Tracking gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
    };
}

export const hapusDataOrderTracking = (row) => {
    return async (dispatch, getState) => {
        Swal.fire({
            html:
                "Apakah Anda Yakin Ingin " +
                "Menghapus " +
                "<h1><b>Order Tracking  " +
                row.order.order_number +
                "</b> ?</h1>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(utilityActions.setLoading(true));
                deleteData("order-trackings/" + row.id)
                    .then((res) => {
                        dispatch(utilityActions.setLoading(false));
                        dispatch(masterActions.getDataOrderTracking());
                        ToastNotification(
                            "success",
                            "Berhasil menghapus data orders"
                        );
                    })
                    .catch((err) => {
                        ToastNotification(
                            "info",
                            "Hapus data orders gagal, silahkan coba lagi !!!"
                        );
                        dispatch(utilityActions.setLoading(false));
                    });
            }
        });
    }
}