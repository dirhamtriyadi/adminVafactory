import { masterActions, Swal, deleteData, putDataParams, utilityActions, ToastNotification, reset, postData, change, getItem } from "../../../components" 

export const cariNamaCustomer = (e) => {
    return async (dispatch, getState) => {
        // const state = getState()
        // let datacustomer = state.master.getDataCustomer[0].find((cek) => cek.id === e)
        // dispatch(change("FormDataOrders", "id", datacustomer.id))
        // dispatch(change("FormDataOrders", "name", datacustomer.name))
        // dispatch(change("FormDataOrders", "phone", datacustomer.phone))
        // dispatch(change("FormDataOrders", "address", datacustomer.address))
    }
}

export const cariNamaPrintType = (e) => {
    return async (dispatch, getState) => {
        const state = getState()
        let dataPrintType = state.master.getDataKenis[0].find((cek) => cek.id === e)
        dispatch(change("FormDataOrders", "price", dataPrintType.price))
        dispatch(change('FormDataOrders', 'qty', 1))
        dispatch(change('FormDataOrders', 'total', dataPrintType.price))
        dispatch(change('FormDataOrders', 'subtotal', dataPrintType.price))
    }
}

export const hitungTotal = (e) => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataOrders?.values
        const qty = e
        const price = data.price
        const total = qty * price
        // console.log(qty, price, total);
        // console.log(e);
        dispatch(change('FormDataOrders', 'total', total))
    }
}

export const hitungSubTotal = (e) => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataOrders?.values
        const discount = e.replace(/[^0-9]/g, '')
        const total = data.total
        const subTotal = total - discount
        // console.log(discount, total, total);
        // console.log(e);
        dispatch(change('FormDataOrders', 'subtotal', subTotal))
    }
}

export const simpanDataTracking = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataOrders?.values
        const isEdit = state.utility.isEdit

        let hasil = {
            id : data.id,
            user_id : getItem('userdata').id,
            customer_id : data.customer_id,
            print_type_id : data.print_type_id,
            qty : data.qty,
            price : data.price,
            total : data.total,
            discount : data.discount,
            subtotal : data.subtotal,
            name : data.name,
            description : data.description,
            order_date : data.order_date,
        }

        dispatch(utilityActions.setLoading(true))

        isEdit
            ? putDataParams("orders/" + data.id, hasil)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.user_id?.[0]) {
                        ToastNotification("info", res.data?.user_id?.[0])
                        return false
                    }
                    if (res.data?.customer_id?.[0]) {
                        ToastNotification("info", res.data?.customer_id?.[0])
                        return false
                    }
                    if (res.data?.print_type_id?.[0]) {
                        ToastNotification("info", res.data?.print_type_id?.[0])
                        return false
                    }
                    if (res.data?.qty?.[0]) {
                        ToastNotification("info", res.data?.qty?.[0])
                        return false
                    }
                    if (res.data?.price?.[0]) {
                        ToastNotification("info", res.data?.price?.[0])
                        return false
                    }
                    if (res.data?.total?.[0]) {
                        ToastNotification("info", res.data?.total?.[0])
                        return false
                    }
                    if (res.data?.discount?.[0]) {
                        ToastNotification("info", res.data?.discount?.[0])
                        return false
                    }
                    if (res.data?.subtotal?.[0]) {
                        ToastNotification("info", res.data?.subtotal?.[0])
                        return false
                    }
                    if (res.data?.name?.[0]) {
                        ToastNotification("info", res.data?.name?.[0])
                        return false
                    }
                    if (res.data?.description?.[0]) {
                        ToastNotification("info", res.data?.description?.[0])
                        return false
                    }
                    if (res.data?.order_date?.[0]) {
                        ToastNotification("info", res.data?.order_date?.[0])
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
            : postData("orders", hasil)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.user_id?.[0]) {
                        ToastNotification("info", res.data?.user_id?.[0])
                        return false
                    }
                    if (res.data?.customer_id?.[0]) {
                        ToastNotification("info", res.data?.customer_id?.[0])
                        return false
                    }
                    if (res.data?.print_type_id?.[0]) {
                        ToastNotification("info", res.data?.print_type_id?.[0])
                        return false
                    }
                    if (res.data?.qty?.[0]) {
                        ToastNotification("info", res.data?.qty?.[0])
                        return false
                    }
                    if (res.data?.price?.[0]) {
                        ToastNotification("info", res.data?.price?.[0])
                        return false
                    }
                    if (res.data?.total?.[0]) {
                        ToastNotification("info", res.data?.total?.[0])
                        return false
                    }
                    if (res.data?.discount?.[0]) {
                        ToastNotification("info", res.data?.discount?.[0])
                        return false
                    }
                    if (res.data?.subtotal?.[0]) {
                        ToastNotification("info", res.data?.subtotal?.[0])
                        return false
                    }
                    if (res.data?.name?.[0]) {
                        ToastNotification("info", res.data?.name?.[0])
                        return false
                    }
                    if (res.data?.description?.[0]) {
                        ToastNotification("info", res.data?.description?.[0])
                        return false
                    }
                    if (res.data?.order_date?.[0]) {
                        ToastNotification("info", res.data?.order_date?.[0])
                        return false
                    }

                    dispatch(masterActions.getDataOrders())
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