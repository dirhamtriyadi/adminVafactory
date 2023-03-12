import {
  React,
  Tabel,
} from "../../../../components";

const TabelDetailPenjualan = (props) => {
 

  const columns = [
    {
      dataField: "kode_barang",
      text: "Kode Barang",
    },
    {
      dataField: "nama_barang",
      text: "Nama Barang",
    },
    {
      dataField: "qty",
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
      dataField: "subtotal",
      text: "Total Harga",
      formatter: (cell) => {
        return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
      },
    },
  ];

 
  return <Tabel keyField="id" data={props.databarang} columns={columns} />;
};

export default TabelDetailPenjualan;
