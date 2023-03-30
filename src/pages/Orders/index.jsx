import React from 'react'
import { PanelContent } from '../../components'
import TabelOrders from './tabel'

const Orders = () => {
  return (
    <PanelContent menu="Orders">
        <TabelOrders/>
    </PanelContent>
  )
}

export default Orders