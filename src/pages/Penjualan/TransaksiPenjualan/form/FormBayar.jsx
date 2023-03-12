import { Beep } from "../../../../assets";
import {
  reduxForm,
  React,
  connect,
  formValueSelector,
  Field,
  ReanderSelect,
  ReanderField,
  NumberOnly,
  currencyMask,
  getItem,
  change,
  useDispatch,
  masterActions,
  useSelector,
  useEffect,
  selectorMaster,
  playSound,
} from "../../../../components";
import ValidasiFormJual from "../../validasiForm";

let FormBayar = (props) => {
  const dispatch = useDispatch();

  const customer = useSelector(selectorMaster.getDataCustomer);
  const datJenisPembayaran = useSelector(selectorMaster.getDataJenisPembayaran);

  useEffect(() => {
    dispatch(masterActions.getDataJenisPembayaran());
    dispatch(masterActions.getDataCustomer());
  }, [dispatch]);
  let cekJenisPembayaran = datJenisPembayaran[0] === undefined ? [] : datJenisPembayaran[0];
  let cekCustomer = customer[0] === undefined ? [] : customer[0];
  const setTotal = (jml) => {
    // console.log(props.total_user_bayar + parseInt(jml))
    let hasil = parseInt(props.total_user_bayar )+ parseInt(jml)
    dispatch(change("FormBayar", "total_user_bayar", hasil));
    playSound(Beep)
  };
  const hitunSotal = () => {
    dispatch(change("FormBayar", "total_user_bayar", props.sisanya));
  };
  return (
    <form
      onSubmit={props.handleSubmit}
      autoComplete="off"
      onKeyPress={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
    >
      <div className="row">
        <div className="col-6">
          <Field
            name="idCustomer"
            component={ReanderSelect}
            type="text"
            options={cekCustomer.map((list) => {
              let row = {
                value: list.id,
                name: list.name,
              };
              return row;
            })}
            label="Pilih Customer"
            placeholder="Pilih Customer"
          />
        </div>
        <div className="col-6">
          <Field
            name="jenis_pembayaran"
            component={ReanderSelect}
            options={cekJenisPembayaran.map((list) => {
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
      </div>

      <div className="row">
        <div className="col-6 text-left">
          <h3>Total</h3>
        </div>
        <div className="col-6 text-right">
          <h3>Rp.{props.totalHarga}</h3>
        </div>
        <div className="col-12">
          <div className="card" style={{ backgroundColor: "#eceff1" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-6 text-left">
                  <h3>Cash</h3>
                </div>
                <div className="col-6 text-right">
                  <Field
                    id="total"
                    name="total_user_bayar"
                    onBlur={() => hitunSotal()}
                    component={ReanderField}
                    type="text"
                    {...currencyMask}
                    normalize={NumberOnly}
                    placeholder="0"
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setTotal(2000)}
                        style={{ backgroundColor: "white" }}
                        className="btn btn-block"
                      >
                        +2.000
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setTotal(5000)}
                        style={{ backgroundColor: "white" }}
                        className="btn  btn-block"
                      >
                        +5.000
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setTotal(10000)}
                        style={{ backgroundColor: "white" }}
                        className="btn btn-block"
                      >
                        +10.000
                      </button>
                    </div>
                    <div className="col-12">
                      <br />
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        style={{ backgroundColor: "white" }}
                        className="btn btn-block"
                        onClick={() => setTotal(20000)}
                      >
                        +20.000
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setTotal(50000)}
                        style={{ backgroundColor: "white" }}
                        className="btn  btn-block"
                      >
                        +50.000
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        onClick={() => setTotal(100000)}
                        style={{ backgroundColor: "white" }}
                        className="btn btn-block"
                      >
                        +100.000
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          {props.databarang.length !== 0 &&
          <div
            className={`alert ${
              props.sisa > 0
                ? "alert-success"
                : props.sisa === 0
                ? "alert-success"
                : "alert-danger"
            }`}
          >
            <div className="row">
              <div className="col-6 text-left">
                <h5>
                  {props.sisa > 0
                    ? "Kembali"
                    : props.sisa === 0
                    ? "Pass"
                    : "Kurang"}
                </h5>
              </div>
              <div className="col-6 text-right">
                <h5>Rp.{props.sisa.toLocaleString("kr-ko")}</h5>
              </div>
            </div>
          </div>
          }
        </div>
        <div className="col-12">
          {/* <button disabled={props.databarang === 0 ? true : props.sisa > 0 ? false : props.sisa === 0 ? false : true} type="submit" className="btn btn-primary btn-block"> */}
          <button disabled={props.pristine || props.submitting || props.isLoading} type="submit" className="btn btn-primary btn-block">
            Bayar
          </button>
        </div>
      </div>
    </form>
  );
};

FormBayar = reduxForm({
  form: "FormBayar",
  enableReinitialize: true,
  validate : ValidasiFormJual.validasiPembayaran
})(FormBayar);
const selector = formValueSelector("FormBayar");
export default connect((state) => {
  const { total_user_bayar, idCustomer } = selector(
    state,
    "total_user_bayar",
    "idCustomer"
  );
  let totalBarang = getItem("data_barang_pembelian")
    .reduce((a, b) => a + Number(b.total), 0)
    .toLocaleString("kr-Ko");
  let sisanya =
    Number(total_user_bayar || 0) - Number(NumberOnly(totalBarang || 0));

  return {
    total_user_bayar: total_user_bayar || 0,
    totalHarga: totalBarang || 0,
    sisa: sisanya || 0,
    idCustomer : idCustomer,
    databarang : getItem("data_barang_pembelian")
  };
})(FormBayar);
