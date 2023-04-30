import { React, Tabel, useDispatch, utilityActions, useSelector, selectorMaster, useEffect,masterActions } from "../../../components";

const TabelOrderTransaction = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorMaster.getDataOrderTransaction);
  // console.log(data);

  useEffect(() => {
    dispatch(masterActions.getDataOrderTransaction());
  }, [dispatch]);

  const columns = [
    {
      dataField: "order_id",
      text: "No Order",
      sort: true,
    },
    {
      dataField: "payment_method_id",
      text: "Metode Pembayaran",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Jumlah",
      sort: true,
    },
    {
      dataField: "date",
      text: "Tanggal",
      sort: true,
    },
  ];

  const showModal = (row, isEdit) => {
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
  console.log(data);

  const hasil = data.map((list) => {
    let row = {
      id: list.id,
      order_id: list.order.order_number,
      payment_method_id: list.payment_method.name,
      amount: list.amount,
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
