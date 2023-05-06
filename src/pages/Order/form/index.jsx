import {
    selectorUtility,
    React,
    useSelector,
    Field,
    HiidenFiled,
    ReanderField,
    useDispatch,
    reduxForm,
    connect,
    useEffect,
    NumberOnly,
    selectorMaster,
    ReanderSelect,
    masterActions,
    currencyMask,
} from "../../../components";
import {
    cariNamaCustomer,
    cariNamaPrintType,
    ubahDiscount,
    ubahQty,
    ubahHarga,
    simpanDataTracking,
} from "../redux";

let FormDataOrders = ({ pristine, submitting }) => {
    const dispatch = useDispatch();
    let dataCustomer = useSelector(selectorMaster.getDataCustomer || []);
    let dataPrintType = useSelector(selectorMaster.getDataKenis || []);

    useEffect(() => {
        dispatch(masterActions.getDataCustomer());
        dispatch(masterActions.getDataKenis());
    }, [dispatch]);

    const isEdit = useSelector(selectorUtility.isEdit);
    const isLoading = useSelector(selectorUtility.isLoading);

    useEffect(() => {
        document.getElementById("name").focus();
    }, [isEdit]);

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
            <Field
                name="user_id"
                component={HiidenFiled}
                type="hidden"
                label="user"
                value={localStorage.getItem("userdata.id")}
                readOnly={isEdit}
            />
            <div className="col-12">
                <Field
                    name="customer_id"
                    component={ReanderSelect}
                    options={
                        dataCustomer.length === 0
                            ? []
                            : dataCustomer[0].map((list) => {
                                  let row = {
                                      value: list.id,
                                      name: list.name,
                                  };
                                  return row;
                              })
                    }
                    type="text"
                    onChange={(e) => dispatch(cariNamaCustomer(e))}
                    label="Nama Customer"
                    placeholder="Masukan Nama Customer"
                    readOnly={isEdit}
                />
            </div>
            <div className="col-12">
                <Field
                    name="print_type_id"
                    component={ReanderSelect}
                    options={
                        dataPrintType.length === 0
                            ? []
                            : dataPrintType[0].map((list) => {
                                  let row = {
                                      value: list.id,
                                      name: list.name,
                                  };
                                  return row;
                              })
                    }
                    type="text"
                    onChange={(e) => dispatch(cariNamaPrintType(e))}
                    label="Nama Type Print"
                    placeholder="Masukan Type Print"
                    readOnly={isEdit}
                />
            </div>
            <div className="col-12">
                <Field
                    name="qty"
                    component={ReanderField}
                    type="text"
                    label="Qty"
                    placeholder="Masukan Qty"
                    onChange={(e) => dispatch(ubahQty(e.target.value))}
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
                    normalize={NumberOnly}
                    // readOnly={true}
                    {...currencyMask}
                    onChange={(e) => dispatch(ubahHarga(e.target.value))}
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
                    {...currencyMask}
                />
            </div>
            <div className="col-12">
                <Field
                    name="discount"
                    component={ReanderField}
                    type="text"
                    label="Diskon"
                    {...currencyMask}
                    onChange={(e) => dispatch(ubahDiscount(e.target.value))}
                    placeholder="Masukan Diskon"
                />
            </div>
            <div className="col-12">
                <Field
                    name="subtotal"
                    component={ReanderField}
                    type="text"
                    label="Sub Total"
                    placeholder="Masukan Sub Total"
                    readOnly={true}
                    {...currencyMask}
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
                    label="Deskripsi"
                    placeholder="Masukan Nama Deskripsi"
                />
            </div>
            <div className="col-12">
                <Field
                    name="order_date"
                    component={ReanderField}
                    type="date"
                    label="Tanggal Order"
                    placeholder="Masukan Tanggal Order"
                />
            </div>
            <div className="col-12 text-rig">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => dispatch(simpanDataTracking())}
                    disabled={pristine || submitting || isLoading}
                >
                    {isLoading ? (
                        <>
                            <i className="fa fa-spinner fa-spin mr-2" />
                            Loading...
                        </>
                    ) : (
                        <>Simpan</>
                    )}
                </button>
            </div>
        </div>
    );
};

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
        };
    }
};

FormDataOrders = reduxForm({
    form: "FormDataOrders",
    enableReinitialize: true,
})(FormDataOrders);

export default connect(maptostate)(FormDataOrders);
