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
  useEffect(() => {
    dispatch(masterActions.getDataCash());
  }, [dispatch]);

  const columns = [
    {
      dataField: "user.name",
      text: "User Id",
    },
    {
      dataField: "transaction_date",
      text: "Tanggal",
      sort: true
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
      headerClasses : "text-right",
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
