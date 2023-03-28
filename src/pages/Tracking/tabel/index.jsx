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
                            onClick={() => dispatch(hapusDataTracking(row))}
                            className="btn btn-danger ml-2"
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                        </div>
                    </div>
                );
            },
        },
    ]
    const showModal = (row, isEdit) => {
        console.log(isEdit);
        dispatch(utilityActions.getDataEdit(row))
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit(isEdit ? true : false))
    }

    return (
        <Tabel handleClick={() => showModal(false)} keyField="id" tambahData={true} columns={columns} data={data[0]} />
    )
}

export default TabelTracking