import {React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector} from '../../../components';
import { hapusDataOrderTracking } from '../redux';

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
            text: "NO Order",
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
                    <div className="d-flex">
                        <button
                            className="btn btn-sm btn-warning mr-2"
                            onClick={() => {
                                showModal(row, true);
                            }}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                                dispatch(hapusDataOrderTracking(row));
                            }}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
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
            status: item.status === 1 ? "Dalam Proses" : "Selesai",
            date: item.date,
        };
        return row;
    });

    return (
        <Tabel handleClick={() => showModal(false)} keyField="id" tambahData={true} columns={columns} data={hasil || []} />
    )
}

export default TabelOrderTracking