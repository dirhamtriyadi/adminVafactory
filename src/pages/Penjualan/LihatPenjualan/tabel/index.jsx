import {
  React,
  Tabel,
  useDispatch,
  useEffect,
  useSelector,
  selectorPenjualan,
  selectorMaster,
  utilityActions,
} from "../../../../components";
import actionMaster from "../../../../components/store/actions/master_action";
import { hapusTransaksi } from "../redux";

const TabelPenjualan = (props) => {
  const datapenjualan = useSelector(selectorPenjualan.getDataPenjualan);
  const DataCustomer = useSelector(selectorMaster.getDataCustomer);
  let cekCustomer = DataCustomer[0] === undefined ? [] : DataCustomer[0];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionMaster.getDataCustomer());
  }, [dispatch]);
  const columns = [
    {
      dataField: "transaction_number",
      text: "NO Transaksi",
    },
    {
      dataField: "customerName",
      text: "Nama Customer",
    },
    {
      dataField: "date",
      text: "Tanggal Transaksi",
    },
    {
      dataField: "totalHarga",
      text: "Total Harga",
      formatter: (cell) => {
        return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
      },
    },

    {
      dataField: "action",
      text: "Action",
      csvExport: false,
      headerClasses: "text-center",
      formatter: (rowcontent, row) => {
        return (
          <div className="text-center">
            <button type="button" onClick={()=>dispatch(hapusTransaksi(row))} className="btn btn-danger ml-2">
              <i className="fa fa-trash"></i>
            </button>
            <button type="button" onClick={()=>dispatch(utilityActions.setForm('DetailPenjualan',row))} className="btn btn-primary ml-2">
              <i className="fa fa-eye"></i>
            </button>
          </div>
        );
      },
    },
  ];

  let hasil = datapenjualan.map((list) => {
    let customer = cekCustomer.find((cek) => cek.id === parseInt(list.customers_id));
    let row = {
      id: list.id,
      phone : customer?.phone,
      transaction_number: list.transaction_number,
      customerName: customer?.name || "-",
      date: list.date,
      totalQty: list.transactionDetails.reduce(
        (a, b) => a + parseInt(b.qty),
        0
      ),
      totalHarga: list.transactionDetails.reduce(
        (a, b) => a + parseInt(b.subtotal),
        0
      ),
      detail_barang : list.transactionDetails

    };

    return row;
  });

  return <Tabel keyField="transaction_number" data={hasil} columns={columns} />;
};

export default TabelPenjualan;
