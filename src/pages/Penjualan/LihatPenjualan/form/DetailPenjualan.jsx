import {
  React,
  ReanderField,
  Field,
  connect,
  reduxForm,
  utilityActions,
  useDispatch,
  selectorMaster,
  masterActions,
  useSelector,
  useEffect
} from "../../../../components";
import InvoicePenjualan from "../pdf/invoice";
import invoiceCustomer from "../pdf/invoiceCustomer";
import TabelDetailPenjualan from "../tabel/TabelDetailPenjualan";

let DetailPenjualan = (props) => {
  const dispatch = useDispatch();
  let cekdatabarang = useSelector(selectorMaster.getDataProduk);

  useEffect(() => {
    dispatch(masterActions.getDataProduk());
  }, [dispatch]);

    let databarang = props.databarang?.detail_barang.map((list)=>{
        let barang = cekdatabarang[0]?.find(
          (cek) => cek.id === parseInt(list.product_id)
        );
        let row = {
            ...list,
            id: list.id,
            kode_barang : barang?.code,
            nama_barang : barang?.name,
        };
      return row  
    })

    let laporanpdf = {
        transaction_number: props.databarang?.transaction_number,
        customerName: props.databarang?.customerName,
        phone: props.databarang?.phone,
        date: props.databarang?.date,
        databarang : databarang
    }

  return (
    <div className="row">
      <div className="col-3">
        <Field
          id="transaction_number"
          name="transaction_number"
          component={ReanderField}
          type="text"
          readOnly
          label="No Transaksi"
        />
      </div>
      <div className="col-3">
        <Field
          id="date"
          name="date"
          component={ReanderField}
          type="text"
          readOnly
          label="Tgl Transaksi"
        />
      </div>
      <div className="col-3">
        <Field
          id="customerName"
          name="customerName"
          component={ReanderField}
          type="text"
          readOnly
          label="Nama Customer"
        />
      </div>
      <div className="col-3">
        <Field
          id="phone"
          name="phone"
          component={ReanderField}
          type="text"
          readOnly
          label="No Hp"
        />
      </div>
      <div className="col-12">
        <TabelDetailPenjualan databarang={databarang} />
      </div>
      <div className="col-6">
        <button
          type="button"
          onClick={() =>
            dispatch(utilityActions.setForm("LihatPenjualan"))
          }
          className="btn btn-primary"
        >
          Kembali
        </button>
      </div>
      <div className="col-6 text-right">
        <button
          type="button"
          className="btn btn-warning"
          onClick={()=> (
            InvoicePenjualan(laporanpdf)
            // InvoicePenjualan(laporanpdf),
            // invoiceCustomer(laporanpdf)
          )}
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

const maptostate = (state) => {
  if (state.utility.setForm !== null) {
    return {
      initialValues: {
        transaction_number: state.utility.setForm?.data?.transaction_number,
        customerName: state.utility.setForm?.data?.customerName,
        phone: state.utility.setForm?.data?.phone,
        date: state.utility.setForm?.data?.date,
      },
      databarang: state.utility.setForm?.data,
    };
  }
};
DetailPenjualan = reduxForm({
  form: "DetailPenjualan",
  enableReinitialize: true,
})(DetailPenjualan);
export default connect(maptostate)(DetailPenjualan);
