import {React, Tabel, selectorUtility, useDispatch, useSelector} from "../../../components"

const DetailOrderTracking = () => {
    const dispacth = useDispatch()
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
        }
    ]

    let hasil = getDataEdit[0].orderTracking.map((list, index) => {
        let row = {
            order_number: getDataEdit[0].order_number,
            tracking: list.tracking.name,
            description: list.description,
            status: list.status,
            date: list.date
        }
        return row
    })

  return (
    <Tabel keyField="id" tambahData={true} columns={columns} data={hasil || []} />
  )
}

export default DetailOrderTracking