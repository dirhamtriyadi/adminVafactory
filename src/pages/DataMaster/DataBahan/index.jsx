import {
  ModalGlobal,
  PanelContent,
  React,
  useSelector,
  selectorUtility,
} from "../../../components";
import FormDataBahan from "./form";
import TabelDataBahan from "./tabel";

const DataBahan = () => {
  const isEdit = useSelector(selectorUtility.isEdit);

  return (
    <PanelContent menu="Data Bahan" submenu="Data master">
      <TabelDataBahan />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Data Bahan" : "Tambah Data Data Bahan"}
        content={<FormDataBahan />}
      />
    </PanelContent>
  );
};

export default DataBahan;
