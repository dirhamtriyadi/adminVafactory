import React from "react";
import {
  Tabel,
  utilityActions,
  useDispatch,
  selectorMaster,
  useSelector,
  useEffect,
  masterActions
} from "../../../components";
import { hapusDataCustomer } from "../redux";

const TabelCustomer = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataCustomer);

  useEffect(() => {
    dispatch(masterActions.getDataCustomer());
  }, [dispatch]);

  const columns = [
    {
      dataField: "name",
      text: "Nama Customer",
    },
    {
      dataField: "phone",
      text: "Hp",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "address",
      text: "Alamat",
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
              <button onClick={()=> dispatch(hapusDataCustomer(row))} className="btn btn-danger ml-2">
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
      data={data[0]}
      columns={columns}
    />
  );
};

export default TabelCustomer;
