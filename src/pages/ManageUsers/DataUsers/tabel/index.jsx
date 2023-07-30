import {
  React,
  Tabel,
  masterActions,
  selectorMaster,
  useSelector,
  useDispatch,
  useEffect,
  utilityActions,
} from "../../../../components";
import { hapusDataUsers } from "../redux"

const TabelUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataUsers);

  useEffect(() => {
    dispatch(masterActions.getDataUsers());
  }, [dispatch]);

  const columns = [
    {
      dataField: "name",
      text: "Nama",
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "action",
      text: "Action",
      csvExport: false,
      headerClasses: "text-center",
      formatter: (rowcontent, row) => {
        return (
          <div className="row text-center">
            <div className="col-12">
              <button className="btn btn-primary" onClick={() => showModalUser(row, true)}>
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger ml-2" onClick={() => dispatch(hapusDataUsers(row))}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];
  const showModalUser = (data, isEdit) => {
    dispatch(utilityActions.getDataEdit(data));
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(isEdit));
  };
  return (
    <Tabel
      handleClick={() => showModalUser()}
      keyField="id"
      tambahData={true}
      data={data[0] || []}
      columns={columns}
    />
  );
};

export default TabelUsers;
