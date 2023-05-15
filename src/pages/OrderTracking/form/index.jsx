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
import { simpanDataOrderTracking } from "../redux";

let FormDataOrderTracking = ({ pristine, submitting }) => {
    const dispatch = useDispatch();
    const dataOrder = useSelector(selectorMaster.getDataOrders || []);
    const dataTracking = useSelector(selectorMaster.getDataTracking || []);

    let cekTracking = dataTracking[0] === undefined ? [] : dataTracking[0];

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
                                      name: list.order_number + ' - ' + list.name,
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
                        cekTracking === 0
                            ? []
                            : cekTracking.map((list) => {
                                let data = {
                                    value: list.id,
                                    name: list.name,
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
                    onClick={() => dispatch(simpanDataOrderTracking())}
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
    if(state.utility.getDataEdit !== null){
        return {
            initialValues: {
                id: state.utility.getDataEdit.id,
                order_id: state.utility.getDataEdit.order?.id,
                tracking_id: state.utility.getDataEdit.tracking?.id,
                description: state.utility.getDataEdit.description,
                status: state.utility.getDataEdit.status,
                date: state.utility.getDataEdit.date,
            },
        };
    }
};

FormDataOrderTracking = reduxForm({
    form: "FormDataOrderTracking",
    enableReinitialize: true,
})(FormDataOrderTracking)

export default connect(maptostate)(FormDataOrderTracking);
