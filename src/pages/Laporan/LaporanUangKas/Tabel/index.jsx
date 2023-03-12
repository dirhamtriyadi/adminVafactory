import {
  React,
  useEffect,
  masterActions,
  Tabel,
  Field,
  useDispatch,
  useSelector,
  reduxForm,
  connect,
  ReanderField,
  selectorUtility,
  utilityActions,
} from "../../../../components";
import ValidasiLaporan from "../../ValidasiLaporan";
import CetakLaporanUangKas from "../pdf";

let TabelLaporanUangKas = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorUtility.isLoading);
  const Data = useSelector(selectorUtility.getDataEdit)
  const isExport = useSelector(selectorUtility.isExport)

  useEffect(() => {
    dispatch(masterActions.getDataCash());
    dispatch(utilityActions.getDataEdit());
  }, [dispatch]);

  const columns = [
    {
      dataField: "user.name",
      text: "User Id",
    },
    {
      dataField: "transaction_date",
      text: "Tanggal",
      sort: true,
    },

    {
      dataField: "description",
      text: "Deskripsi",
    },
    {
      dataField: "cash_flow_type",
      text: "Type",
    },
    {
      dataField: "amount",
      text: "Nominal",
      headerClasses: "text-right",
      formatter: (cell) => {
        return (
          <div className="text-right">
            {" "}
            {cell === undefined ? 0 : Number(cell).toLocaleString("kr-KO")}{" "}
          </div>
        );
      },
    },
  ];
  const print = () => {
    CetakLaporanUangKas(Data)
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
        <div className="col-4">
          <Field
            name="tanggal_awal"
            component={ReanderField}
            type="date"
            label="Tanggal Dari"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-4">
          <Field
            name="tanggal_akhir"
            component={ReanderField}
            type="date"
            label="Tanggal Samoai"
            placeholder="Masukan Tanggal"
          />
        </div>
        <div className="col-4 mt-4">
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
              "Cari Data"
            )}
          </button>
        </div>
        <div className="col-12">
          <Tabel
            handleClick={() => print()}
            keyField="id"
            btnText="Print Laporan"
            tambahData={isExport}
            data={Data}
            columns={columns}
          />
        </div>
      </div>
    </form>
  );
};

// export default TabelLaporanUangKas;

TabelLaporanUangKas = reduxForm({
  form: "TabelLaporanUangKas",
  enableReinitialize: true,
  validate : ValidasiLaporan.ValidasiTanggal
})(TabelLaporanUangKas);
export default connect()(TabelLaporanUangKas);
