import {
  React,
  Tabel,
  useEffect,
  utilityActions,
  useDispatch,
  masterActions,
  selectorMaster,
  useSelector
} from "../../../../components";
import { hapusDataKategori } from "../redux";

const TabelDataJenis = () => {
  const dispatch = useDispatch();
  let data = useSelector(selectorMaster.getDataKenis)
  useEffect(() => {
    dispatch(masterActions.getDataKenis());
  }, [dispatch]);
  const columns = [
    {
      dataField: "name",
      text: "Nama Kategori",
    },
    {
      dataField: "price",
      text: "Harga",
      formatter: (cell) => {
        return (
          <div>
            {Number(cell || 0)?.toLocaleString("kr-KO") || 0}
          </div>
        );
      },
    },
    {
      dataField: "description",
      text: "Deskripsi",
    },
    {
      dataField: "action",
      text: "Action",
      csvExport: false,
      headerClasses: "text-center",
      formatter: (rowcontent, row) => {
        return (
          <div className="row text-center">
            <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={()=>showModal(row,true)}>
                <i className="fa fa-edit"></i>
              </button>
              </div>
            <div className="col-6 text-left">
              <button onClick={()=> dispatch(hapusDataKategori(row))} className="btn btn-danger ml-2">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];
  const showModal = (data,isEdit) => {
    dispatch(utilityActions.getDataEdit(data));
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(isEdit));
  };
  return (
    <Tabel
      handleClick={() => showModal(false)}
      keyField="id"
      tambahData={true}
      data={data[0] || []}
      columns={columns}
    />
  );
};

export default TabelDataJenis;
