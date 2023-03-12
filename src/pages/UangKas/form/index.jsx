import {
  React,
  ReanderField,
  Field,
  HiidenFiled,
  useSelector,
  reduxForm,
  connect,
  selectorUtility,
  ReanderSelect,
  useState,
  useDispatch,
  currencyMask,
  masterActions,
  useEffect,
  selectorMaster,
} from "../../../components";
import { ReanderTextArea } from "../../../components/helpers/field";
import { VadliasiUangKas } from "../validasi";
let ModalUangKas = (props) => {
  const [type, setType] = useState(false);
  const isEdit = useSelector(selectorUtility.isEdit);
  const isLoading = useSelector(selectorUtility.isLoading);
  const dispatch = useDispatch();

  const datJenisPembayaran = useSelector(selectorMaster.getDataJenisPembayaran);
  useEffect(() => {
    dispatch(masterActions.getDataJenisPembayaran());
  }, [dispatch]);

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
            name="tanggal"
            component={ReanderField}
            type="date"
            label="Tanggal"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-12">
          <Field
            name="nominal"
            component={ReanderField}
            {...currencyMask}
            type="text"
            label="Nominal"
            placeholder="Masukan Nominal"
          />
        </div>

        <div className="col-12">
          <Field
            name="type"
            onChange={(e) => setType(e === "UANGMASUK" ? true : false)}
            component={ReanderSelect}
            options={[
              {
                value: "UANGMASUK",
                name: "UANG MASUK",
              },
              {
                value: "UANGKELUAR",
                name: "UANG KELUAR",
              },
            ]}
            label="Type"
            placeholder="Pilih Type"
          />
        </div>
        {type && (
          <div className="col-12">
            <Field
              name="jenis"
              component={ReanderSelect}
              options={datJenisPembayaran[0].map((list) => {
                let row = {
                  value: list.id,
                  name: list.name,
                };
                return row;
              })}
              label="Jenis Pembayaran"
              placeholder="Pilih Jenis Pembayaran"
            />
          </div>
        )}
        <div className="col-12">
          <Field
            name="deskripsi"
            component={ReanderTextArea}
            type="text"
            label="Deskripsi"
            placeholder="Masukan Deskripsi"
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

ModalUangKas = reduxForm({
  form: "ModalUangKas",
  enableReinitialize: true,
  validate: VadliasiUangKas,
})(ModalUangKas);
export default connect(null)(ModalUangKas);
