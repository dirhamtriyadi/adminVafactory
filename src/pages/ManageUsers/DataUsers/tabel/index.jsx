import {
  React,
  Tabel,
  useDispatch,
  utilityActions,
} from "../../../../components";

const TabelUsers = () => {
  const dispatch = useDispatch();
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
      dataField: "level",
      text: "Level",
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
              <button className="btn btn-primary">
                <i className="fa fa-edit"></i>
              </button>
              <button className="btn btn-danger ml-2">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];
  const showModalUser = () => {
    dispatch(utilityActions.getDataEdit(false));
    dispatch(utilityActions.showModal());
    dispatch(utilityActions.isEdit(false));
  };
  return (
    <Tabel
      handleClick={() => showModalUser()}
      keyField="_id"
      tambahData={true}
      data={[]}
      columns={columns}
    />
  );
};

export default TabelUsers;
