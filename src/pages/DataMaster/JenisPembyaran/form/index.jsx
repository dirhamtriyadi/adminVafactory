import {
  React,
  ReanderField,
  Field,
  HiidenFiled,
  useSelector,
  reduxForm,
  connect,
  selectorUtility,
  useEffect,
} from "../../../../components";
import validasiJenisPembayaran from "../validasi";

let FormJenisPembayaran = (props) => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  useEffect(() => {
    isEdit
      ? document.getElementById("name").focus()
      : document.getElementById("name").focus();
  }, [isEdit]);
  return (
    <form
      onSubmit={props.handleSubmit}
      autoComplete="off"
      onKeyPress={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
    >
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
            label="Nama"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="col-12">
          <Field
            id="description"
            name="description"
            component={ReanderField}
            type="text"
            label="Deskriosi"
            placeholder="Masukan Deskriosi"
          />
        </div>
        <div className="col-12 text-right">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={props.pristine || props.submitting || isLoading}
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
    </form>
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
FormJenisPembayaran = reduxForm({
  form: "FormJenisPembayaran",
  enableReinitialize: true,
  validate: validasiJenisPembayaran,
})(FormJenisPembayaran);
export default connect(maptostate)(FormJenisPembayaran);
