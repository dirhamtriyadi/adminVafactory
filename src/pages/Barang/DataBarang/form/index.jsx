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
  currencyMask,
} from "../../../../components";
import { getValue, simpanBarang } from "../redux";
let ModalTambahBarang = ({ pristine, submitting }) => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  const dispatch = useDispatch();

  return (
    <div>
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
        <Field
          name="foto"
          component={HiidenFiled}
          type="hidden"
          label="foto"
          readOnly={isEdit}
        />
        <div className="col-12">
          <Field
            name="code"
            component={ReanderField}
            type="text"
            label="Kode Barang"
            placeholder="Masukan Kode Barang"
          />
        </div>
        <div className="col-12">
          <Field
            name="name"
            component={ReanderField}
            type="text"
            label="Nama Barang"
            placeholder="Masukan Nama Barang"
          />
        </div>
        <div className="col-12">
          <Field
            name="price"
            component={ReanderField}
            {...currencyMask}
            type="text"
            label="Harga"
            placeholder="Masukan Harga"
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
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="" className="text-black">
              Foro
            </label>
            <input
              name="file"
              type="file"
              className="form-control"
              placeholder="Masukan Foto"
              onChange={(e) => dispatch(getValue(e))}
            />
          </div>
        </div>

        <div className="col-12 text-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(simpanBarang())}
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
          code: state.utility.getDataEdit.code,
          price: state.utility.getDataEdit.price,
          description: state.utility.getDataEdit.description,
        },
      };
    }
  };
ModalTambahBarang = reduxForm({
  form: "ModalTambahBarang",
  enableReinitialize: true,
})(ModalTambahBarang);
export default connect(maptostate)(ModalTambahBarang);
