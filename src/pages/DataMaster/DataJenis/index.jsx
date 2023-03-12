import {
  ModalGlobal,
  PanelContent,
  React,
  useSelector,
  selectorUtility,
} from "../../../components";
import FormDataJenis from "./form";
import TabelDataJenis from "./tabel";

const DataJenis = () => {
  const isEdit = useSelector(selectorUtility.isEdit);

  return (
    <PanelContent menu="Data Jenis" submenu="Data master">
      <TabelDataJenis />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Data Jenis" : "Tambah Data Data Jenis"}
        content={<FormDataJenis />}
      />
    </PanelContent>
  );
};

export default DataJenis;
