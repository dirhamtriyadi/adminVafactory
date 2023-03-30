import { selectorUtility, React, useSelector, Field, HiidenFiled, ReanderField, useDispatch, reduxForm, connect, useEffect, useState, NumberOnly } from "../../../components"
import { simpanDataTracking } from "../redux"

let FormDataOrders = ({pristine, submitting}) => {
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    const isEdit = useSelector(selectorUtility.isEdit)
    const isLoading = useSelector(selectorUtility.isLoading)

    useEffect(() => {
        setTotal(qty * price)
    }, [qty, price])

    useEffect(() => {
        console.log(total);
    }, [total])

    useEffect(() => {
        document.getElementById('name').focus()
    }, [isEdit])

  return (
    <div className="row">
        {isEdit ? (
            <>
                <Field
                    name="id"
                    component={HiidenFiled}
                    type="hidden"
                    label="id"
                    readOnly={isEdit}
                />
            </>
        ) : null}
        <div className="col-12">
            <Field
                name="user"
                component={ReanderField}
                type="text"
                label="Nama Penginput"
                placeholder="Masukan Nama Penginput"
                readOnly={isEdit}

            />
        </div>
        <div className="col-12">
            <Field
                name="customer"
                component={ReanderField}
                type="text"
                label="Nama Customer"
                placeholder="Masukan Nama Customer"
                readOnly={isEdit}
            />
        </div>
        <div className="col-12">
            <Field
                name="print_type"
                component={ReanderField}
                type="text"
                label="Jenis Print"
                placeholder="Masukan Jenis Print"
                readOnly={isEdit}
            />
        </div>
        <div className="col-12">
            <Field
                name="qty"
                component={ReanderField}
                type="text"
                label="Jumlah"
                placeholder="Masukan Jumlah"
                onChange={(e) => setQty(e.target.value)}
                normalize={NumberOnly}
            />
        </div>
        <div className="col-12">
            <Field
                name="price"
                component={ReanderField}
                type="text"
                label="Harga"
                placeholder="Masukan Harga"
                onChange={(e) => setPrice(e.target.value)}
                normalize={NumberOnly}
            />
        </div>
        <div className="col-12">
            <Field
                readOnly={true}
                name="total"
                component={ReanderField}
                type="text"
                label="Total Harga"
                placeholder="Masukan Total Harga"
                normalize={total}
            />
        </div>
        <div className="col-12">
            <Field
                id="name"
                name="name"
                component={ReanderField}
                type="text"
                label="Nama Orders"
                placeholder="Masukan Nama Orders"
            />
        </div>
        <div className="col-12">
            <Field
                name="description"
                component={ReanderField}
                type="text"
                label="Nama Deskripsi"
                placeholder="Masukan Nama Deskripsi"
            />
        </div>
        <div className="col-12 text-rig">
            <button className="btn btn-primary" type="button" onClick={() => dispatch(simpanDataTracking())} disabled={pristine || submitting || isLoading}>
                {isLoading ? (
                    <>
                        <i className="fa fa-spinner fa-spin mr-2" />
                        Loading...
                    </>
                ) : (
                    <>
                        Simpan
                    </>
                )}
            </button>
        </div>
    </div>
  )
}

const maptostate = (state) => {
    console.log(state.utility.getDataEdit);
    if (state.utility.getDataEdit !== null) {
        return {
            initialValues: {
                id: state.utility.getDataEdit.id,
                user: state.utility.getDataEdit.user?.name,
                customer: state.utility.getDataEdit.customer?.name,
                print_type: state.utility.getDataEdit.print_type?.name,
                qty: state.utility.getDataEdit.qty,
                price: state.utility.getDataEdit.price,
                total: state.utility.getDataEdit.total,
                name: state.utility.getDataEdit.name,
                description: state.utility.getDataEdit.description,
            },
        }
    }
}

FormDataOrders = reduxForm({
    form: "FormDataOrders",
    enableReinitialize: true,
})(FormDataOrders)

export default connect(maptostate)(FormDataOrders)