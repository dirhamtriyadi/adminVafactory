import {React, Tabel, selectorUtility, useDispatch, useSelector, utilityActions} from "../../../components"

const DetailOrderTracking = () => {
    const dispatch = useDispatch()
    const getDataEdit = useSelector(selectorUtility.getDataEdit)

    const columns = [
        {
            dataField: 'order_number',
            text: 'No Order',
            sort: true
        },
        {
            dataField: 'tracking',
            text: 'Nama Tracking',
            sort: true
        },
        {
            dataField: 'description',
            text: 'Keterangan',
            sort: true
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: true
        },
        {
            dataField: 'date',
            text: 'Tanggal',
            sort: true
        },
    ]

    const showModal = (row, isEdit) => {
        // console.log(row);
        // console.log(isEdit);
        dispatch(utilityActions.getDataEdit(row))
        dispatch(utilityActions.showModalBanyak(
            isEdit === "TAMBAHORDERTRACKING" ? "TAMBAHORDERTRACKING" : "hehe",
        ))
        if (isEdit === "TAMBAHORDERTRACKING") {
            dispatch(utilityActions.setLoading(false))
        }
        dispatch(utilityActions.showModal())
        dispatch(utilityActions.isEdit("TAMBAHORDERTRACKING"))
    }

    let hasil = getDataEdit[0].orderTracking.map((list, index) => {
        let row = {
            order_number: getDataEdit[0].order_number,
            tracking: list.tracking.name,
            description: list.description,
            status: list.status === 1 ? 'Selesai' : 'Dalam Proses',
            date: list.date
        }
        return row
    })

  return (
    <Tabel keyField="id" tambahData={false} columns={columns} data={hasil || []} />
  )
}

export default DetailOrderTracking