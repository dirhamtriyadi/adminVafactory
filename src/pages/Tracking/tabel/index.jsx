import { React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector } from '../../../components';
import { hapusDataTracking } from '../redux';

const TabelTracking = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectorMaster.getDataTracking)
    // console.log(data);
    useEffect(() => {
        dispatch(masterActions.getDataTracking());
    }, [dispatch]);

    // console.log(data);

    const columns = [
        {
            dataField: "name",
            text: "Nama Tracking",
            sort: true
        },
        {
            dataField: "description",
            text: "Deskripsi",
        },
        {
            dataField: "action",
            text: "Action",
            csvExport: false,
            headerClasses: "text-center",
            formatter: (rowcontent, row) => {
                return (
                    <div className="row text-center">
                        <div className="col-6">
                            <button className="btn btn-primary w-100" onClick={() => showModal(row, true)}>
                                <i className="fa fa-edit"></i>
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger w-100" onClick={() => dispatch(hapusDataTracking(row))}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                );
            },
        },
    ]
    const showModal = (row, isEdit) => {
        dispatch(utilityActions.getDataEdit(row))
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit(isEdit))
    }

    return (
        <Tabel handleClick={() => showModal(false, "TAMBAH")} keyField="id" tambahData={true} columns={columns} data={data[0]} />
    )
}

export default TabelTracking