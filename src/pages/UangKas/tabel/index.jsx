import {
  React,
  useEffect,
  masterActions,
  Tabel,
  utilityActions,
  useDispatch,
  selectorMaster,
  useSelector,
  getToday
} from "../../../components";
import { hapusUangKas } from "../redux";

const TabelUangkas = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataCash)
  // console.log("ini di uang kas",data);
  useEffect(() => {
    dispatch(masterActions.getDataCash());
  }, [dispatch]);

  const columns = [
    {
      dataField: "user.name",
      text: "User Id",
      sort: true,
      style: function callback(cell, row, rowIndex, colIndex) {
        // console.log(cell, row, rowIndex, colIndex);
        return row.cash_flow_type === "UANGMASUK" ? { backgroundColor: "#00FF00" } : { backgroundColor: "#FF0000" };
      }
    },
    {
      dataField: "transaction_date",
      text: "Tanggal",
      sort: true,
      style: function callback(cell, row, rowIndex, colIndex) {
        // console.log(cell, row, rowIndex, colIndex);
        return row.cash_flow_type === "UANGMASUK" ? { backgroundColor: "#00FF00" } : { backgroundColor: "#FF0000" };
      }
    },
    
    {
      dataField: "description",
      text: "Deskripsi",
      sort: true,
      style: function callback(cell, row, rowIndex, colIndex) {
        // console.log(cell, row, rowIndex, colIndex);
        return row.cash_flow_type === "UANGMASUK" ? { backgroundColor: "#00FF00" } : { backgroundColor: "#FF0000" };
      }
    },
    {
      dataField: "cash_flow_type",
      text: "Type",
      sort: true,
      style: function callback(cell, row, rowIndex, colIndex) {
        // console.log(cell, row, rowIndex, colIndex);
        return row.cash_flow_type === "UANGMASUK" ? { backgroundColor: "#00FF00" } : { backgroundColor: "#FF0000" };
      }
    },
    {
      dataField: "amount",
      text: "Nominal",
      headerClasses : "text-right",
      sort: true,
      style: function callback(cell, row, rowIndex, colIndex) {
        // console.log(cell, row, rowIndex, colIndex);
        return row.cash_flow_type === "UANGMASUK" ? { backgroundColor: "#00FF00" } : { backgroundColor: "#FF0000" };
      },
      formatter: (cell) => {
        return (
          <div className="text-right">
            {" "}
            {cell === undefined ? 0 : Number(cell).toLocaleString("kr-KO")}{" "}
          </div>
        );
      },
    },
    {
      dataField: "action",
      text: "Action",
      csvExport: false,
      headerClasses: "text-center",
      formatter: (rowcontent, row) => {
        // console.log(row.cash_flow_type);
        return (
          <div className="row text-center">
            <div className={row.transaction_date === getToday() ? "col-12" : "d-none" }>
              <button className="btn btn-danger ml-2" onClick={()=>dispatch(hapusUangKas(row))}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];
  const showModalUangKas = () => {
    dispatch(utilityActions.getDataEdit(false));
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(false));
  };
  return (
    <Tabel
      handleClick={() => showModalUangKas()}
      keyField="id"
      tambahData={true}
      data={data}
      columns={columns}
    />
  );
};

export default TabelUangkas;
