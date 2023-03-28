import React from 'react'
import { ModalGlobal, PanelContent, useSelector, selectorUtility } from '../../components'
import FormDataTracking from './form'
import TabelTracking from './tabel'

const Tracking = () => {
  const isEdit = useSelector(selectorUtility.isEdit)

  return (
    <PanelContent menu="Tracking">
        <TabelTracking />
        <ModalGlobal size="P" title={isEdit ? "Edit Data Tracking" : "Tambah Data Tracking"} content={<FormDataTracking/>} />
    </PanelContent>
  )
}

export default Tracking