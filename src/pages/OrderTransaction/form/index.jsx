import { selectorUtility, React, useSelector, Field, HiidenFiled, ReanderField, useDispatch, reduxForm, connect, useEffect, NumberOnly, selectorMaster, ReanderSelect, masterActions, currencyMask } from "../../../components"

let FormDataOrderTransaction = ({pristine, submitting}) => {
    const dispatch = useDispatch()

    let dataOrders = useSelector(selectorMaster.getDataOrders || [])
    let hasilDataOrders = dataOrders.map((list) => {
        let row = {
            id: list.id,
            order_number: list.order_number,
            user: list.user,
            customer: list.customer,
            print_type: list.print_type,
            qty: list.qty,
            price: list.price,
            total: list.total,
            discount: list.discount,
            subtotal: list.subtotal,
            name: list.name,
            description: list.description,
            order_date: list.order_date,
        }
        return row
    })
    let dataPayment = useSelector(selectorMaster.getDataJenisPembayaran || [])

    useEffect(() => {
        dispatch(masterActions.getDataOrders());
        dispatch(masterActions.getDataJenisPembayaran());
    }, [dispatch])

    const isEdit = useSelector(selectorUtility.isEdit)
    const isLoading = useSelector(selectorUtility.isLoading)


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
                name="order_id"
                component={ReanderSelect}
                options={
                    hasilDataOrders.length === 0
                    ? []
                    : hasilDataOrders.map((list) => {
                        let row = {
                            value: list.id,
                            name: list.name,
                        };
                        return row;
                    })
                }
                type="text"
                label="No Order"
                placeholder="Masukan No Order"
                readOnly={isEdit}
            />
        </div>
        <div className="col-12">
            <Field
                name="payment_method_id"
                component={ReanderSelect}
                options={
                    dataPayment.length === 0
                    ? []
                    : dataPayment[0].map((list) => {
                        let row = {
                            value: list.id,
                            name: list.name,
                        };
                        return row;
                    })
                }
                type="text"
                label="Metode Pembayaran"
                placeholder="Masukan Metode Pembayaran"
                readOnly={isEdit}
            />
        </div>
        <div className="col-12">
            <Field
                name="amount"
                component={ReanderField}
                type="text"
                label="Jumlah Pembayaran"
                placeholder="Masukan Jumlah Pembayaran"
                normalize={NumberOnly}
                {...currencyMask}
            />
        </div>
        <div className="col-12">
            <Field
                name="date"
                component={ReanderField}
                type="date"
                label="Tanggal Order"
                placeholder="Masukan Tanggal Order"
            />
        </div>
        <div className="col-12 text-rig">
            {/* <button className="btn btn-primary" type="button" onClick={() => dispatch(simpanDataTracking())} disabled={pristine || submitting || isLoading}>
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
            </button> */}
        </div>
    </div>
  )
}

const maptostate = (state) => {
    if (state.utility.getDataEdit !== null) {
        return {
            initialValues: {
                id: state.utility.getDataEdit.id,
                user_id: state.utility.getDataEdit.user?.id,
                customer_id: state.utility.getDataEdit.customer?.id,
                print_type_id: state.utility.getDataEdit.print_type?.id,
                qty: state.utility.getDataEdit.qty,
                price: state.utility.getDataEdit.price,
                total: state.utility.getDataEdit.total,
                discount: state.utility.getDataEdit.discount,
                subtotal: state.utility.getDataEdit.subtotal,
                name: state.utility.getDataEdit.name,
                description: state.utility.getDataEdit.description,
                order_date: state.utility.getDataEdit.order_date,
            },
        }
    }
}

FormDataOrderTransaction = reduxForm({
    form: "FormDataOrderTransaction",
    enableReinitialize: true,
})(FormDataOrderTransaction)

export default connect(maptostate)(FormDataOrderTransaction)