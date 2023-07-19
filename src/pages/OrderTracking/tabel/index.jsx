import {React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector} from '../../../components';
import { hapusDataOrderTracking, updateProsesOrderTracking } from '../redux';

const TabelOrderTracking = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectorMaster.getDataOrderTracking)
    // console.log(data);

    useEffect(() => {
        dispatch(masterActions.getDataOrderTracking());
    }, [dispatch]);

    const columns = [
        {
            dataField: "order.order_number",
            text: "No Order",
            sort: true
        },
        {
            dataField: "order.name",
            text: "Nama Order",
            sort: true
        },
        {
            dataField: "order.customer.name",
            text: "Nama Customer",
            sort: true
        },
        {
            dataField: "tracking.name",
            text: "Nama Tracking",
            sort: true
        },
        {
            dataField: "description",
            text: "Keterangan",
            sort: true
        },
        {
            dataField: "status",
            text: "Status",
            sort: true
        },
        {
            dataField: "date",
            text: "Tanggal",
            sort: true
        },
        {
            dataField: "action",
            text: "Action",
            formatter: (cell, row) => {
                return (
                    <div className="row text-center">
                        <div className="col-12 text-center">
                            {
                                row.status === "Dalam Proses" ?
                                    <button
                                        className="btn btn-success mr-2"
                                        onClick={() => {
                                            dispatch(updateProsesOrderTracking(row));
                                        }}>
                                        <i className="fa fa-check"></i>
                                    </button>
                                    : null
                            }
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    showModal(row, true);
                                }}
                            >
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                className="btn btn-danger ml-2"
                                onClick={() => {
                                    dispatch(hapusDataOrderTracking(row));
                                }}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                );
            },
        },
    ];

    const showModal = (row, isEdit) => {
        dispatch(utilityActions.getDataEdit(row));
        dispatch(utilityActions.showModal());
        dispatch(utilityActions.isEdit(isEdit ? true : false));

    };

    let hasil = data.map((item) => {
        const row = {
            id: item.id,
            order: item.order,
            tracking: item.tracking,
            description: item.description,
            status: item.status === 0 ? "Dalam Proses" : "Selesai",
            date: item.date,
        };
        return row;
    });

    return (
        <Tabel handleClick={() => showModal(false)} keyField="id" tambahData={true} columns={columns} data={hasil || []} />
    )
}

export default TabelOrderTracking