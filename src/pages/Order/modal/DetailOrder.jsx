import { React, useEffect, masterActions, Tabel, utilityActions, useDispatch, selectorMaster, useSelector, selectorUtility } from '../../../components';

const DetailOrder = () => {
  const dispatch = useDispatch()
  const getDataOrders = useSelector(selectorMaster.getDataOrders)
  const getDataEdit = useSelector(selectorUtility.getDataEdit)
  const dataFilter = getDataOrders.filter((list) => list.id === getDataEdit.id)

  // console.log(dataFilter);

  const showModal = (row, isEdit) => {
    dispatch(utilityActions.getDataEdit(row))
    dispatch(utilityActions.showModalBanyak(isEdit === "OrderTransaction" ? "OrderTransaction" : "OrderTracking"))
    dispatch(utilityActions.showModalBanyak(isEdit === "OrderTransaction" ? "OrderTransaction" : "OrderTracking"))
    dispatch(utilityActions.showModal())
  }

  return (
    <>
      <table className='table table-borderless'>
        <tbody>
          <tr>
            <td>Order Transaction</td>
            <td>
              <button className='btn btn-primary' onClick={() => showModal(dataFilter, "OrderTransaction")}><i className="fa fa-eye"></i></button>
            </td>
          </tr>
          <tr>
            <td>Order Tracking</td>
            <td>
              <button className='btn btn-primary' onClick={() => showModal(dataFilter, "OrderTracking")}><i className="fa fa-eye"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default DetailOrder