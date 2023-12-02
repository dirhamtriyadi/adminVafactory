import { selectorUtility, React, useSelector, useDispatch, HiidenFiled, Field, InputGroup, useEffect, ReanderSelect, selectorMaster, useState, connect, getItem, reduxForm } from "../../../../components"
import { ReanderMultiSelect } from "../../../../components/helpers/field"
import { simpanDataHakAkses } from "../redux"


let FormDataHakAkses = ({pristine, submitting}) => {
    const dispatch = useDispatch()
    const isEdit = useSelector(selectorUtility.isEdit)
    const isLoading = useSelector(selectorUtility.isLoading)

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
                type="hidden"
                label="Nama User"
            />
        </div>
        <div className="col-12">
            <Field
                name="name"
                component={ReanderMultiSelect}
                options={[
                    { value: "dashboard", label: "dashboard" },
                    { value: "master-jenis-pembayaran", label: "master-jenis-pembayaran" },
                    { value: "master-kategori", label: "master-kategori" },
                    { value: "data-customer", label: "data-customer" },
                    { value: "data-barang", label: "data-barang" },
                    { value: "penjualan", label: "penjualan" },
                    { value: "lihat-penjualan", label: "lihat-penjualan" },
                    { value: "uang-kas", label: "uang-kas" },
                    { value: "data-users", label: "data-users" },
                    { value: "laporan-uang-kas", label: "laporan-uang-kas" },
                    { value: "tracking", label: "tracking" },
                    { value: "orders", label: "orders" },
                    { value: "order-transaction", label: "order-transaction" },
                    { value: "order-tracking", label: "order-tracking" },
                    { value: "hak-akses-users", label: "hak-akses-users" },
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
    return {
        initialValues: {
            name: [],
            user_id: state.form.HakAkses.values.user_id,
        },
    };
}

FormDataHakAkses = reduxForm({
    form: "FormDataHakAkses",
    enableReinitialize: true,
})(FormDataHakAkses)
export default connect(maptostate)(FormDataHakAkses);