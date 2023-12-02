import React from 'react'
import { PanelContent, ModalGlobal, useSelector, selectorUtility } from '../../components'
import TabelOrderTracking from './tabel'
import FormDataOrderTracking from './form'

const OrderTracking = () => {
  const isEdit = useSelector(selectorUtility.isEdit)

  return (
    <PanelContent menu="Order Tracking">
        <TabelOrderTracking />
        <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Order Tracking" : "Tambah Data Order Tracking"}
        content={<FormDataOrderTracking />}
      />
    </PanelContent>
  )
}

export default OrderTracking