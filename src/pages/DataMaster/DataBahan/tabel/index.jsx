import {
  React,
  Tabel,
  useEffect,
  utilityActions,
  useDispatch,
  masterActions,
  selectorMaster,
  useSelector,
} from "../../../../components";
import { hapusDataBahan } from "../redux";

const TabelDataBahan = () => {
  const dispatch = useDispatch();
  const databahan = useSelector(selectorMaster.getDataBahan);
  useEffect(() => {
    dispatch(masterActions.getDataBahan());
  }, [dispatch]);

  const columns = [
    {
      dataField: "name",
      text: "Nama Bahan",
      sort: true,
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
              <button
                onClick={() => showModal(row, true)}
                className="btn btn-primary"
              >
                <i className="fa fa-edit"></i>
              </button>
            </div>
            <div className="col-6 text-left">
              <button
                onClick={() => dispatch(hapusDataBahan(row))}
                className="btn btn-danger ml-2"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];
  const showModal = (data, isEdit) => {
    dispatch(utilityActions.getDataEdit(data));
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(isEdit ? true : false));
  };
  return (
    <Tabel
      handleClick={() => showModal(false)}
      keyField="id"
      tambahData={true}
      data={databahan[0]}
      columns={columns}
    />
  );
};

export default TabelDataBahan;
