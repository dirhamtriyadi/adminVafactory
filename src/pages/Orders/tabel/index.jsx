import { React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector } from '../../../components';
import { hapusDataOrders } from '../redux';

const TabelOrders = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectorMaster.getDataOrders)
    // console.log(data);

    useEffect(() => {
        dispatch(masterActions.getDataOrders());
    }, [dispatch]);

    const columns = [
        {
            dataField: "user.name",
            text: "Nama Penginput",
            sort: true
        },
        {
            dataField: "customer.name",
            text: "Nama Customer",
            sort: true
        },
        {
            dataField: "print_type.name",
            text: "Jenis Print",
            sort: true
        },
        {
            dataField: "qty",
            text: "Jumlah",
        },
        {
            dataField: "price",
            text: "Harga",
        },
        {
            dataField: "total",
            text: "Total Harga",
        },
        {
            dataField: "discount",
            text: "Diskon",
        },
        {
            dataField: "subtotal",
            text: "Subtotal",
        },
        {
            dataField: "name",
            text: "Nama Orders",
            sort: true
        },
        {
            dataField: "description",
            text: "Deskripsi",
        },
        {
            dataField: "order_date",
            text: "Tanggal Order",
            sort: true
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
                            onClick={() => dispatch(hapusDataOrders(row))}
                            className="btn btn-danger ml-2"
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                        </div>
                    </div>
                );
            },
        }
    ]
    const showModal = (row, isEdit) => {
        dispatch(utilityActions.getDataEdit(row))
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit(isEdit ? true : false))
    }

  return (
    <Tabel handleClick={() => showModal(false)} keyField="id" tambahData={true} columns={columns} data={data[0] || []} />
  )
}

export default TabelOrders