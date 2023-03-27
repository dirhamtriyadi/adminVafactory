import {
  React,
  PanelContent,
  useDispatch,
  useEffect,
  actionPenjualan,
  useSelector,
  selectorUtility,
  utilityActions,
} from "../../../components";
import DetailPenjualan from "./form/DetailPenjualan";
import TabelPenjualan from "./tabel";

const LihatPenjualan = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectorUtility.setForm);
  useEffect(() => {
    dispatch(actionPenjualan.getDataPenjualan());
    return () => {
      dispatch(utilityActions.setForm('LihatPenjualan'))
    }
  }, [dispatch]);
    
  return (
    <PanelContent menu={form.form_name === "LihatPenjualan"  ? "Lihat Penjualan" : "Detail Penjualan"}>
      {form.form_name === "DetailPenjualan" ? (
        <DetailPenjualan />
        ) : (
        <TabelPenjualan/>
      )}
    </PanelContent>
  );
};

export default LihatPenjualan;
