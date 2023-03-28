import { lazy } from "react";
const LaporanUangKas = lazy(() => import ("./Laporan/LaporanUangKas"));
const UangKas = lazy(() => import("./UangKas"));
const DashboardV1 = lazy(() => import("./Dashboard/dashboard-v1"));
const Login = lazy(() => import("./Auth/index.jsx"));
const JenisPembayaran = lazy(() => import("./DataMaster/JenisPembyaran"));
const DataBahan = lazy(() => import("./DataMaster/DataBahan"));
const DataJenis = lazy(() => import("./DataMaster/DataJenis"));
const DataUsers = lazy(() => import("./ManageUsers/DataUsers"));
const HakAkses = lazy(() => import("./ManageUsers/HakAkses"));
const DataBarang = lazy(() => import("./Barang/DataBarang"));
const Penjualan = lazy(() => import("./Penjualan/TransaksiPenjualan"));
const DataCustomer = lazy(() => import("./DataCustomer"));
const LihatPenjualan = lazy(() => import("./Penjualan/LihatPenjualan"));

const Tracking = lazy(() => import("./Tracking"));

export {
  LaporanUangKas,
  LihatPenjualan,
  DataCustomer,
  Penjualan,
  DataBarang,
  DashboardV1,
  UangKas,
  Login,
  JenisPembayaran,
  HakAkses,
  DataUsers,
  DataBahan,
  DataJenis,

  Tracking,
};
