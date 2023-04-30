
import { React ,PanelContent, ModalGlobal, useSelector, selectorUtility } from "../../components"
import FormDataOrderTransaction from "./form"
import TabelOrderTransaction from "./table"


const OrderTransaction = () => {
  const isEdit = useSelector(selectorUtility.isEdit)

  return (
    <PanelContent menu="Order Transaction">
      <TabelOrderTransaction />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Order Transaction" : "Tambah Data Order Transaction"}
        content={<FormDataOrderTransaction />}
      />
    </PanelContent>
  )
}

export default OrderTransaction