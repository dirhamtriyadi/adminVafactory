import {
  ModalGlobal,
  PanelContent,
  selectorUtility,
  React,
  useSelector,
} from "../../components";
import FormDataCustomer from "./form";
import TabelCustomer from "./tabel";

const DataCustomer = () => {
  const isEdit = useSelector(selectorUtility.isEdit);

  return (
    <PanelContent menu="Data Customer">
      <TabelCustomer />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data  Customer" : "Tambah  Data Customer"}
        content={<FormDataCustomer />}
      />
    </PanelContent>
  );
};

export default DataCustomer;
