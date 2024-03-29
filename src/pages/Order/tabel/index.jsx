import { React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector } from '../../../components';
import { hapusDataOrders } from '../redux';
import InvoiceOrder from '../pdf/invoice';
import {QRCodeCanvas} from "qrcode.react";

const TabelOrders = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectorMaster.getDataOrders)
    // console.log(data);

    useEffect(() => {
        dispatch(masterActions.getDataOrders());
    }, [dispatch]);

    const columns = [
        // {
        //     dataField: "qr_code",
        //     text: "QR Code",
        // },
        {
            dataField: "order_number",
            text: "No Order",
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
                console.log(row);
                return (
                    <div className="row text-center">
                        <div className="col-12 text-center">
                            <button
                                onClick={() => {
                                    // console.log("ini button",row);
                                    // qr code
                                    // const qrCodeCanvas = document.querySelector("#qr")
                                    // const qrCodeDataUri = qrCodeCanvas.toDataURL("image/png")
                                    // console.log(qrCodeDataUri);
                                    // InvoiceOrder(row, qrCodeCanvas)
                                    InvoiceOrder(row)
                                }}
                                className="btn btn-secondary"
                            >
                                <i className="fa fa-print"></i>
                            </button>
                            <button
                                onClick={() => showModal(row, "EDIT")}
                                className="btn btn-primary ml-2"
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
            // qr_code: <QRCodeCanvas value={list.order_number} id='qr' />,
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
            orderTracking: list.orderTracking,
            orderTransaction: list.orderTransaction,
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