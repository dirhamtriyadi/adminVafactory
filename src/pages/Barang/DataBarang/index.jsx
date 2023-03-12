import {
  PanelContent,
  React,
  selectorUtility,
  useSelector,
  ModalGlobal,
} from "../../../components";
import ModalTambahBarang from "./form";
import ModalFoto from "./form/ModalFoto";
import TabelDataBarang from "./tabel";
const DataBarang = () => {
  const showModalBanyak = useSelector(selectorUtility.showModalBanyak);

  const ContentModal = () => {
    if (showModalBanyak === "TAMBAH") {
      return <ModalTambahBarang />;
    }
    if (showModalBanyak === "DetailFoto") {
      return <ModalFoto />;
    }
    return <ModalTambahBarang />;
  };
  return (
    <PanelContent menu="Data Barang">
      <TabelDataBarang />
      <ModalGlobal
        size="P"
        title={
          showModalBanyak === "TAMBAH"
            ? "Tambah Data Data Barang"
            : showModalBanyak === "DetailFoto"
            ? "Detail Foto"
            : "Edit Data Data Barang"
        }
        content={<ContentModal />}
      />
    </PanelContent>
  );
};

export default DataBarang;
