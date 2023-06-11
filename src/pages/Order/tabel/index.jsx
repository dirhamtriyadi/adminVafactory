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
            dataField: "order_number",
            text: "NO Order",
            sort: true
        },
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
            formatter: (cell) => {
                return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
            },
        },
        {
            dataField: "total",
            text: "Total Harga",
            formatter: (cell) => {
                return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
            },
        },
        {
            dataField: "discount",
            text: "Diskon",
            formatter: (cell) => {
                return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
            },
        },
        {
            dataField: "subtotal",
            text: "Subtotal",
            formatter: (cell) => {
                return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
            },
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
                        <div className="col-12 text-center">
                            <button
                                onClick={() => showModal(row, true)}
                                className="btn btn-primary"
                            >
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                onClick={() => showModal(row, "DetailOrder")}
                                className="btn btn-warning ml-2"
                            >
                                <i className="fa fa-eye"></i>
                            </button>
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
        dispatch(utilityActions.showModalBanyak(
            isEdit === "DetailOrder" ? "DetailOrder" : "FormOrders"
        ))
        if (isEdit === "DetailOrder") {
            dispatch(utilityActions.setLoading(false))
        }
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit(isEdit === "EDIT" ? true : false))
    }

    let hasil = data.map((list) => {
        let row = {
            id: list.id,
            order_number: list.order_number,
            user: list.user,
            customer: list.customer,
            print_type: list.print_type,
            qty: list.qty,
            price: list.price,
            total: list.total,
            discount: list.discount,
            subtotal: list.subtotal,
            name: list.name,
            description: list.description,
            order_date: list.order_date,
        }
        return row
    })

  return (
    <Tabel handleClick={() => showModal(false, "TAMBAH")} keyField="id" tambahData={true} columns={columns} data={hasil || []} />
  )
}

export default TabelOrders