import { ButtonSound } from "../../../assets";
import {
  React,
  PanelContent,
  // Field,
  useDispatch,
  // ReanderField,
  useEffect,
  // selectorMaster,
  // useSelector,
  masterActions,
  // ReanderSelect,/
  getToday,
  change,
  getItem,
  ToastNotification,
  playSound,
  actionPenjualan,
  // NumberOnly,
  // currencyMask,
  // selectorUtility,
  useState,
  removeItem,
  // ToastNotification,
} from "../../../components";
import FormBayar from "./form/FormBayar";
import Layout1 from "./form/Layout1";
import { simpanPembayaran, tambahBarang } from "./redux";

let Penjualan = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(masterActions.getDataJenisPembayaran());
    dispatch(masterActions.getDataCustomer());
    dispatch(actionPenjualan.getDataPenjualan())    
    dispatch(change("Penjualan", "tgl_transaksi", getToday()));
    dispatch(change("Penjualan", "kasir", getItem("userdata").user_id));
    return () => {
      removeItem("data_barang_pembelian");
    };
  }, [dispatch]);


  const handleSubmit = (data) => {
    setLoading(true)
    if(data.code === undefined){
      ToastNotification('info',"Kode Barang Harus Dipilih")
      return false
    }
    if(data.jumlah_beli === undefined){
      ToastNotification('info',"Kode Barang Harus Dipilih")
      return false
    }
    dispatch(tambahBarang());
  };

  const simmpanPenjualan =(data)=>{
    playSound(ButtonSound)
    dispatch(simpanPembayaran())
  }
  return (
    <div className="row">
      <div className="col-8">
        <Layout1 onSubmit={(data) => handleSubmit(data)} Loading={Loading} />
      </div>

      <div className="col-4">
        <PanelContent>
          <FormBayar onSubmit={(data)=> simmpanPenjualan(data)}/>
        </PanelContent>
      </div>
    </div>
  );
};


export default Penjualan;
