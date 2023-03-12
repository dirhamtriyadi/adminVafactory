import {
  Field,
  React,
  ReanderField,
  reduxForm,
  connect,
  PanelContent,
  NumberOnly,
  currencyMask,
  useDispatch,
  ReanderSelect,
  masterActions,
  useEffect,
  selectorMaster,
  useSelector,
  HiidenFiled,
} from "../../../../components";
import { cariNamaBarang } from "../redux";
import TabelDataBarang from "../tabel";
import ValidasiFormJual from "../../validasiForm";

let Layout1 = ({ handleSubmit,Loading }) => {
  const dispatch = useDispatch();
  let databarang = useSelector(selectorMaster.getDataProduk || []);
  useEffect(() => {
    dispatch(masterActions.getDataProduk());
  }, [dispatch]);
  return (
    <PanelContent>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <div className="row">
          <div className="col-3">
            <Field
              name="code"
              component={ReanderSelect}
              options={
                databarang.length === 0
                  ? []
                  : databarang[0].map((list) => {
                      let row = {
                        value: list.code,
                        name: list.name,
                      };
                      return row;
                    })
              }
              type="text"
              onChange={(e) => dispatch(cariNamaBarang(e))}
              label="Kode Data Barang"
              placeholder="Masukan Kode Barang"
            />
          </div>
          <div className="col-3">
            <Field
              name="description"
              component={HiidenFiled}
              type="hidden"
              readOnly
            />
            <Field name="id" component={HiidenFiled} type="hidden" readOnly />
            <Field
              name="name"
              component={ReanderField}
              type="text"
              readOnly
              label="Nama Barang"
              placeholder="Nama Barang"
            />
          </div>
          <div className="col-3">
            <Field
              name="price"
              component={ReanderField}
              type="text"
              {...currencyMask}
              normalize={NumberOnly}
              label="Harga"
              placeholder="Harga"
            />
          </div>
          <div className="col-3">
            <Field
              name="jumlah_beli"
              component={ReanderField}
              type="text"
              normalize={NumberOnly}
              label="Qty Pembelian"
              placeholder="Qty Pembelian"
            />
          </div>
          <div className="col-9 text-right"></div>
          <div className="col-3 text-right">
            <button className="btn btn-primary btn-block"> Simpan </button>
          </div>
        </div>
        <div className="mt-2">
          <TabelDataBarang Loading={Loading} />
        </div>
      </form>
    </PanelContent>
  );
};

// export default Layout1;

Layout1 = reduxForm({
  form: "FormCariBarang",
  enableReinitialize: true,
  validate: ValidasiFormJual.ValidasiCariBarang,
})(Layout1);
export default connect(null)(Layout1);
