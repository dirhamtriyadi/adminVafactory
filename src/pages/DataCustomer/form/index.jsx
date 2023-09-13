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
  NumberOnly,
  useEffect
} from "../../../components";
import { simpanDataCustomer } from "../redux";

let FormDataCustomer = ({pristine, submitting}) => {
  const dispatch = useDispatch();

  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  useEffect(() => {
     document.getElementById('name').focus()
}, [isEdit])
  return (
    <div className="row">
      {isEdit ? (
        <>
          <Field
            name="user_id"
            component={HiidenFiled}
            type="hidden"
            label="user_id"
            readOnly={isEdit}
          />
        </>
      ) : null}
      <div className="col-12">
        <Field
          id="name"
          name="name"
          component={ReanderField}
          type="text"
          label="Nama Customer*"
          placeholder="Masukan Nama Customer"
        />
      </div>
      <div className="col-12">
        <Field
          name="phone"
          component={ReanderField}
          type="text"
          normalize={NumberOnly}
          label="No Hp"
          placeholder="Masukan No Hp"
        />
      </div>
      <div className="col-12">
        <Field
          name="email"
          component={ReanderField}
          type="text"
          label="Email"
          placeholder="Masukan Email"
        />
      </div>
      <div className="col-12">
        <Field
          name="address"
          component={ReanderField}
          type="text"
          label="Alamat"
          placeholder="Masukan Alamat"
        />
      </div>
      <div className="col-12 text-right">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(simpanDataCustomer())}
          disabled={pristine || submitting || isLoading}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang Menyimpan
            </>
          ) : (
            "Simpan Data"
          )}
        </button>
      </div>
    </div>
  );
};
const maptostate = (state) => {
  // console.log(state.utility.getDataEdit);
    if (state.utility.getDataEdit !== null) {
      return {
        initialValues: {
          id: state.utility.getDataEdit.id,
          name: state.utility.getDataEdit.name,
          phone: state.utility.getDataEdit.phone,
          email: state.utility.getDataEdit.email,
          address: state.utility.getDataEdit.address,
        },
      };
    }
  };

FormDataCustomer = reduxForm({
    form: "FormDataCustomer",
    enableReinitialize: true,
  })(FormDataCustomer);
  export default connect(maptostate)(FormDataCustomer);