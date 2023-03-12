import { getItem, React, Tabel, useSelector, selectorUtility,useDispatch} from "../../../../components";
import { hapusBarang } from "../redux";

const TabelDataBarang = () => {
  const databarang = useSelector(selectorUtility.getDataEdit)
  const dispatch = useDispatch()
  const columns = [
    {
      dataField: "code",
      text: "Kode Barang",
    },
    {
      dataField: "name",
      text: "Nama Barang",
    },
    {
      dataField: "jumlah_beli",
      text: "Qty",
    },
    {
      dataField: "price",
      text: "Harga",
      formatter: (cell) => {
        return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
      },
    },
    {
      dataField: "total",
      text: "Total",
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
              <button type="button" className="btn btn-danger ml-2" onClick={(row)=>dispatch(hapusBarang(row))}>
                <i className="fa fa-trash"></i>
              </button>
          </div>
        );
      },
    },
  ];
  return <Tabel keyField="id" data={databarang === undefined ? [] : databarang.length === 0 ? getItem('data_barang_pembelian') : databarang} columns={columns} />;
};

export default TabelDataBarang;
