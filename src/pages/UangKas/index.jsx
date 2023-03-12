import {
  PanelContent,
  React,
  selectorUtility,
  useSelector,
  ModalGlobal,
  useDispatch
} from "../../components";
import ModalUangKas from "./form";
import TabelUangkas from "./tabel";
import { simpanUangKas } from "./redux";

const UangKas = () => {
  const isEdit = useSelector(selectorUtility.isEdit);
  const dispatch = useDispatch();

  const handleSubmit = (data)=>{
    dispatch(simpanUangKas());
  }
  return (
    <PanelContent menu="Uang Kas">
      <TabelUangkas />
      <ModalGlobal
        size="P"
        title={isEdit ? "Edit Data Uang kas" : "Tambah Data Uang kas"}
        content={<ModalUangKas onSubmit={(data) => handleSubmit(data)} />}
      />
    </PanelContent>
  );
};

export default UangKas;
