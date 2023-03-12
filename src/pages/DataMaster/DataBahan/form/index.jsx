import {
  React,
  ReanderField,
  Field,
  HiidenFiled,
  useSelector,
  reduxForm,
  connect,
  selectorUtility,
  useDispatch,
  useEffect
} from "../../../../components";
import { simpanDataBahan } from "../redux";

let FormDataBahan = ({ pristine, submitting }) => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    isEdit ? document.getElementById('name').focus() : document.getElementById('name').focus()
}, [isEdit])
  return (
    <div>
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
            id="name"
            name="name"
            component={ReanderField}
            type="text"
            label="Nama Bahan"
            placeholder="Masukan Nama Bahan"
          />
        </div>
        <div className="col-12">
          <Field
            name="description"
            component={ReanderField}
            type="text"
            label="Deskripsi"
            placeholder="Masukan Deskripsi"
          />
        </div>

        <div className="col-12 text-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(simpanDataBahan())}
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
        description: state.utility.getDataEdit.description,
      },
    };
  }
};
FormDataBahan = reduxForm({
  form: "FormDataBahan",
  enableReinitialize: true,
})(FormDataBahan);
export default connect(maptostate)(FormDataBahan);
