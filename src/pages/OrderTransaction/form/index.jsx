import { selectorUtility, React, useSelector, Field, HiidenFiled, ReanderField, useDispatch, reduxForm, connect, useEffect, NumberOnly, selectorMaster, ReanderSelect, masterActions, currencyMask } from "../../../components"
import { simpanDataOrderTransaction } from "../redux"

let FormDataOrderTransaction = ({pristine, submitting}) => {
    const dispatch = useDispatch()

    let getDataOrders = useSelector(selectorMaster.getDataOrders || [])
    let hasilDataOrderTransaction = getDataOrders.map((list) => {
        console.log(list);
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
                    hasilDataOrderTransaction.length === 0
                    ? []
                    : hasilDataOrderTransaction.map((list) => {
                        let row = {
                            value: list.id,
                            name: list.name + ' - ' + list.order_number,
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
        <Field 
            name="user_id"
            component={HiidenFiled}
            type="hidden"
            label="user_id"
            readOnly={isEdit}
        />
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
                name="description"
                component={ReanderField}
                type="text"
                label="Keterangan Pembayaran"
                placeholder="Masukan Keterangan Pembayaran"
            />
        </div>
        <div className="col-12">
            <Field
                name="date"
                component={ReanderField}
                type="date"
                label="Tanggal Transaksi"
                placeholder="Masukan Tanggal Transaksi"
            />
        </div>
        <div className="col-12 text-right">
            <button className="btn btn-primary" type="button" onClick={() => dispatch(simpanDataOrderTransaction())} disabled={pristine || submitting || isLoading}>
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
    if (state.utility.getDataEdit !== null) {
        // console.log(state.utility.getDataEdit);
        return {
            initialValues: {
                id: state.utility.getDataEdit.id,
                order_id: state.utility.getDataEdit.order?.id,
                payment_method_id: state.utility.getDataEdit.payment_method?.id,
                description: state.utility.getDataEdit.description,
                amount: state.utility.getDataEdit.amount,
                date: state.utility.getDataEdit.date,
            },
        }
    }
}

FormDataOrderTransaction = reduxForm({
    form: "FormDataOrderTransaction",
    enableReinitialize: true,
})(FormDataOrderTransaction)

export default connect(maptostate)(FormDataOrderTransaction)