import { selectorUtility, React, useSelector, useDispatch, HiidenFiled, Field, ReanderField, useEffect, ReanderSelect, selectorMaster, useState, connect, getItem, reduxForm } from "../../../../components"
import { simpanDataHakAkses } from "../redux"

let FormDataHakAkses = ({pristine, submitting}) => {
    const dispatch = useDispatch()
    const data = useSelector(selectorMaster.getDataUsers)
    const getDataEdit = useSelector(selectorUtility.getDataEdit)
    const isEdit = useSelector(selectorUtility.isEdit)
    const isLoading = useSelector(selectorUtility.isLoading)

    // const data2 = [
    //     "dashboard",
    //     "master-jenis-pembayaran",
    //     "master-jenis",
    //     "data-customer",
    //     "data-barang",
    //     "penjualan",
    //     "lihat-penjualan",
    //     "uang-kas",
    //     "data-users",
    //     "laporan-uangkas",
    //     "tracking",
    //     "orders",
    //     "order-transaction",
    //     "order-tracking",
    //     "hak-akses-users",
    // ]
    // console.log("ini get data edit", getDataEdit[0].role);
    // const data1 = getDataEdit[0].role.map((list) => {
    //     data2.map((list2) => {
    //         if (list2 === list.name) {
    //             console.log("ini list 2", list2);
    //             return list2
    //         }
    //         return list2
    //     })
    //     // let data = list.name === "dashboard" ? null : '{ value: "dashboard", name: "dashboard" },'
    //     // return data
    // })
    // // console.log("ini data 1", data1);
    // useEffect(() => {
    //      document.getElementById('name').focus()
    // }, [isEdit])
  return (
    <div className="row">
        {isEdit ? (
            <>
                <Field
                    name="role_id"
                    component={HiidenFiled}
                    type="hidden"
                    label="role_id"
                    readOnly={isEdit}
                />
            </>
        ) : null}
        <div className="col-12">
            <Field
                name="user_id"
                component={HiidenFiled}
                type="text"
                label="Nama User"
                placeholder="Masukan Nama User"
            />
        </div>
        <div className="col-12">
            <Field
                name="name"
                component={ReanderSelect}
                options={[
                    { value: "dashboard", name: "dashboard" },
                    { value: "master-jenis-pembayaran", name: "master-jenis-pembayaran" },
                    { value: "master-jenis", name: "master-jenis" },
                    { value: "data-customer", name: "data-customer" },
                    { value: "data-barang", name: "data-barang" },
                    { value: "penjualan", name: "penjualan" },
                    { value: "uang-kas", name: "uang-kas" },
                    { value: "data-users", name: "data-users" },
                    { value: "laporan-uangkas", name: "laporan-uangkas" },
                    { value: "tracking", name: "tracking" },
                    { value: "orders", name: "orders" },
                    { value: "order-transaction", name: "order-transaction" },
                    { value: "order-tracking", name: "order-tracking" },
                    { value: "hak-akses-users", name: "hak-akses-users" },
                ]}
                type="text"
                label="Nama Hak Akses"
                placeholder="Masukan Nama Hak Akses"
            />
        </div>
        <div className="col-12">
            <button
                className="btn btn-primary"
                type="button"
                disabled={pristine || submitting || isLoading}
                onClick={() => dispatch(simpanDataHakAkses())}
            >Simpan</button>
        </div>
    </div>
  )
}

const maptostate = (state) => {
    // console.log(state);
    return {
        initialValues: {
            name: null,
            user_id: state.form.HakAkses.values.user_id,
        },
    };
}

FormDataHakAkses = reduxForm({
    form: "FormDataHakAkses",
    enableReinitialize: true,
})(FormDataHakAkses)
export default connect(maptostate)(FormDataHakAkses);