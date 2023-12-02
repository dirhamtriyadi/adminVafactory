import {React, Tabel, selectorUtility, useDispatch, useSelector, utilityActions} from "../../../components"

const DetailOrderTransaction = () => {
    const dispatch = useDispatch()
    const getDataEdit = useSelector(selectorUtility.getDataEdit)

    const columns = [
        {
            dataField: 'order_number',
            text: 'No Order',
            sort: true
        },
        {
            dataField: 'date',
            text: 'Order Date Transaction',
            sort: true
        },
        {
            dataField: 'amount',
            text: 'Amount',
            sort: true,
            formatter: (cell) => {
                return <div>{Number(cell || 0)?.toLocaleString("kr-KO") || 0}</div>;
            },
        },
        {
            dataField: 'description',
            text: 'Keterangan',
            sort: true
        },
    ]

    let hasil = getDataEdit[0].orderTransaction.map((list, index) => {
        let row = {
            order_number: getDataEdit[0].order_number,
            date: list.date,
            amount: list.amount,
            description: list.description
        }
        return row
    })

  return (
    // <>
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>No Order</th>
    //                 <th>Order Date</th>
    //                 <th>Amount</th>
    //                 <th>Keterangan</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //                 getDataEdit[0].orderTransaction.map((list, index) => {
    //                     return (
    //                         <tr key={index}>
    //                             <td>{getDataEdit[0].order_number}</td>
    //                             <td>{list.date}</td>
    //                             <td>{list.amount}</td>
    //                             <td>{list.description}</td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </tbody>
    //     </table>
    // </>
    <Tabel keyField="id" tambahData={false} columns={columns} data={hasil || []}/>
  )
}

export default DetailOrderTransaction