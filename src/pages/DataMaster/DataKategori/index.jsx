import {
  ModalGlobal,
  PanelContent,
  React,
  useSelector,
  selectorUtility,
} from "../../../components";
import FormDataKategori from "./form";
import TabelDataKategori from "./tabel";

const DataKategori = () => {
  const isEdit = useSelector(selectorUtility.isEdit);

  return (
    <PanelContent menu="Data Kategori" submenu="Data master">
      <TabelDataKategori />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Kategori" : "Tambah Data Kategori"}
        content={<FormDataKategori />}
      />
    </PanelContent>
  );
};

export default DataKategori;
