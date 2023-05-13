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

let FormDataOrderTracking = ({ pristine, submitting }) => {
    const dispatch = useDispatch();
    let dataOrder = useSelector(selectorMaster.getDataOrders || []);
    let dataTracking = useSelector(selectorMaster.getDataTracking || []);

    useEffect(() => {
        dispatch(masterActions.getDataOrders());
        dispatch(masterActions.getDataTracking());
    }, [dispatch]);

    const isEdit = useSelector(selectorUtility.isEdit);
    const isLoading = useSelector(selectorUtility.isLoading);

    useEffect(() => {}, [isEdit]);

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
                        dataOrder === 0
                            ? []
                            : dataOrder.map((list) => {
                                  let data = {
                                      value: list.id,
                                      name: list.order_number,
                                  };
                                  return data;
                              })
                    }
                    type="text"
                    placeholder="Masukan Order Number"
                    label="Order Number"
                />
            </div>
            <div className="col-12">
                <Field
                    name="tracking_id"
                    component={ReanderSelect}
                    options={
                        dataTracking === 0
                            ? []
                            : dataTracking.map((list) => {
                                let data = {
                                    value: list[0].id,
                                    name: list[0].name,
                                };
                                return data;
                            })
                    }
                    type="text"
                    label="Tracking"
                    placeholder="Masukan Tracking"
                    readOnly={isEdit}
                />
            </div>
            <div className="col-12">
                <Field
                    name="description"
                    component={ReanderField}
                    type="text"
                    label="Keterangan"
                    placeholder="Masukan Keterangan"
                />
            </div>
            <div className="col-12">
                <Field
                    name="status"
                    component={ReanderSelect}
                    options={[
                        { value: "1", name: "Dalam Proses" },
                        { value: "2", name: "Selesai" },
                    ]}
                    placeholder="Masukan Status"
                    label="Status"
                />
            </div>
            <div className="col-12">
                <Field
                    name="date"
                    component={ReanderField}
                    type="datetime-local"
                    label="Tanggal"
                />
            </div>
            <div className="col-12 text-right">
                <button
                    className="btn btn-primary"
                    type="button"
                    // onClick={() => dispatch(simpanDataTracking())}
                    disabled={pristine || submitting || isLoading}
                >
                    <>Simpan</>
                    {/* {isLoading ? (
                        <>
                            <i className="fa fa-spinner fa-spin mr-2" />
                            Loading...
                        </>
                    ) : (
                        <>Simpan</>
                    )} */}
                </button>
            </div>
        </div>
    );
};

FormDataOrderTracking = reduxForm({
    form: "FormDataOrderTracking",
    enableReinitialize: true,
})(FormDataOrderTracking)

export default FormDataOrderTracking;
