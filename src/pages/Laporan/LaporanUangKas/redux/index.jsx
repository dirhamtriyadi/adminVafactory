import { ToastNotification, utilityActions } from "../../../../components";
import { getDataParams } from "../../../../config/axios";

export const CariLaporanUangKas = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.TabelLaporanUangKas?.values;

    // console.log(data)
    let hasil = {
      start_date: data.tanggal_awal,
      end_date: data.tanggal_akhir,
    };

    dispatch(utilityActions.setLoading(true));
    getDataParams("cash-flows", hasil)
      .then((res) => {
        dispatch(utilityActions.setLoading(false));

        if (res.data.length === 0) {
          dispatch(utilityActions.isExport(false));
          ToastNotification("info", "Laporan Tidak Tersedia");
          return false;
        }
        ToastNotification("success", "Laporan Tersedia");
        dispatch(utilityActions.isExport(true));
        dispatch(utilityActions.getDataEdit(res.data));
      })
      .catch((err) => {
        dispatch(utilityActions.isExport(false));
        dispatch(utilityActions.setLoading(false));
        ToastNotification("info", "Laporan Tidak Tersedia");
      });
  };
};
