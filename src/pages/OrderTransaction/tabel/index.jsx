import { React, Tabel, useDispatch, utilityActions, useSelector, selectorMaster, useEffect,masterActions } from "../../../components";
import { hapusDataOrderTransaction } from "../redux";

const TabelOrderTransaction = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataOrderTransaction);
  // console.log(data);

  useEffect(() => {
    dispatch(masterActions.getDataOrderTransaction());
  }, [dispatch]);

  const columns = [
    {
      dataField: "order.order_number",
      text: "NO Order",
      sort: true,
    },
    {
      dataField: "payment_method.name",
      text: "Metode Pembayaran",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Jumlah",
      sort: true,
      formatter: (cell) => {
          return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
      },
    },
    {
      dataField: "description",
      text: "Keterangan",
      sort: true,
    },
    {
      dataField: "date",
      text: "Tanggal",
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
            <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={()=>showModal(row,true)}>
                <i className="fa fa-edit"></i>
              </button>
              </div>
            <div className="col-6 text-left">
              <button onClick={()=> dispatch(hapusDataOrderTransaction(row))} className="btn btn-danger ml-2">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  const showModal = (row, isEdit) => {
    // console.log(row);
    dispatch(utilityActions.getDataEdit(row))
    dispatch(utilityActions.showModal())
    dispatch(utilityActions.isEdit(isEdit ? true : false))
  }

  // const hasil = data.map((list) => {
  //   const hasil = list.map((list) => {
  //     let row = {
  //       id: list.id,
  //       order_id: list.order.order_number,
  //       payment_method_id: list.payment_method.name,
  //       amount: list.amount,
  //       date: list.date,
  //     };
  //     return row;
  //   });
  //   return hasil;
  //   // let row = {
  //   //   id: list.id,
  //   //   order_id: list.order_number,
  //   //   payment_method_id: list.name,
  //   //   amount: list.amount,
  //   //   date: list.date,
  //   // };
  //   // return row;
  // });
  // console.log(data);

  const hasil = data.map((list) => {
    // console.log(list);
    let row = {
      id: list.id,
      order: list.order,
      payment_method: list.payment_method,
      amount: list.amount,
      description: list.description,
      date: list.date,
    };
    return row;
  })

  return (
    <Tabel
      handleClick={() => showModal(false)}
      keyField="id"
      tambahData={true}
      columns={columns}
      data={hasil || []}
    />
  );
};

export default TabelOrderTransaction;
