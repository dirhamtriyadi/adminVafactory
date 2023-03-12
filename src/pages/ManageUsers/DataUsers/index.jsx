import {
  ModalGlobal,
  PanelContent,
  React,
  useSelector,
  selectorUtility,
} from "../../../components";
import FormDataUsers from "./form";
import TabelUsers from "./tabel";

const DataUsers = () => {
  const isEdit = useSelector(selectorUtility.isEdit);
  return (
    <PanelContent menu="Data Users" submenu="Manage Users">
      <TabelUsers />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data User" : "Tambah Data User"}
        content={<FormDataUsers />}
      />
    </PanelContent>
  );
};

export default DataUsers;
