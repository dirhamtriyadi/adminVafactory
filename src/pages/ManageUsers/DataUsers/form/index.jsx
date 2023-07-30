import {
  React,
  ReanderField,
  Field,
  HiidenFiled,
  useSelector,
  reduxForm,
  connect,
  ReanderSelect,
  selectorUtility,
  useDispatch
} from "../../../../components";
import { simpanDataUsers } from "../redux";

let FormDataUsers = ({ pristine, submitting }) => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        {isEdit ? (
          <>
            <Field
              name="_id"
              component={HiidenFiled}
              type="hidden"
              label="id"
              readOnly={isEdit}
            />
          </>
        ) : null}
        <div className="col-12">
          <Field
            name="name"
            component={ReanderField}
            type="text"
            label="Nama"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="col-12">
          <Field
            name="email"
            component={ReanderField}
            type="email"
            label="Email"
            placeholder="Masukan Email"
          />
        </div>

        <div className="col-12">
          <Field
            name="password"
            component={ReanderField}
            type="password"
            label="Password"
            placeholder="Masukan Password"
          />
        </div>
        <div className="col-12">
          <Field
            name="password_confirmation"
            component={ReanderField}
            type="password"
            label="Konfirmasi Password"
            placeholder="Masukan Konfirmasi Password"
          />
        </div>
        <div className="col-12 text-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>dispatch(simpanDataUsers())}
            disabled={pristine || submitting || isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang
                Menyimpan
              </>
            ) : (
              "Simpan Data"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const maptostate = (state) => {
  if (state.utility.getDataEdit !== null) {
    return {
      initialValues: {
        id: state.utility.getDataEdit.id,
        name: state.utility.getDataEdit.name,
        email: state.utility.getDataEdit.email,
      },
    };
  }
}

FormDataUsers = reduxForm({
  form: "FormDataUsers",
  enableReinitialize: true,
})(FormDataUsers);
export default connect(maptostate)(FormDataUsers);
