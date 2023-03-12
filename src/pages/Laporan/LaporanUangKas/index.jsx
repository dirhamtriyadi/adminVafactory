import React from "react";
import { PanelContent, useDispatch } from "../../../components";
import { CariLaporanUangKas } from "./redux";
import TabelLaporanUangKas from "./Tabel";

const LaporanUangKas = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(CariLaporanUangKas());
  };
  return (
    <PanelContent menu="Laporan Uang Kas">
      <TabelLaporanUangKas onSubmit={(data) => handleSubmit(data)} />
    </PanelContent>
  );
};

export default LaporanUangKas;
