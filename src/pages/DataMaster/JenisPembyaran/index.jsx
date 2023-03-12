import {
    PanelContent,
    React,
    selectorUtility,
    useSelector,
    ModalGlobal,
    useDispatch
  } from "../../../components";
import TabelJenisPembayaran from "./tabel";
import FormJenisPembayaran from "./form"
import { simpanJenisPembayaran } from "./redux";
  const JenisPembayaran = () => {
    const dispatch = useDispatch()
    const isEdit = useSelector(selectorUtility.isEdit);
    const handleSubmit = (data) =>{
      dispatch(simpanJenisPembayaran())
    }
    return (
      <PanelContent menu="Jenis Pembayaran">
        <TabelJenisPembayaran />
        <ModalGlobal
          size="P"
          title={isEdit ? "Edit Data Jenis Pembayaran" : "Tambah Data Jenis Pembayaran"}
          content={<FormJenisPembayaran onSubmit={(data)=>handleSubmit(data)} />}
        />
      </PanelContent>
    );
  };
  
  export default JenisPembayaran;
  