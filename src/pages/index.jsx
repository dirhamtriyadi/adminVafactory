import { lazy } from "react";
const LaporanUangKas = lazy(() => import("./Laporan/LaporanUangKas"));
const UangKas = lazy(() => import("./UangKas"));
const Dashboard = lazy(() => import("./Dashboard/dashboard"));
const DashboardV1 = lazy(() => import("./Dashboard/dashboard-v1"));
const Login = lazy(() => import("./Auth/index.jsx"));
const JenisPembayaran = lazy(() => import("./DataMaster/JenisPembyaran"));
const DataJenis = lazy(() => import("./DataMaster/DataJenis"));
const DataUsers = lazy(() => import("./ManageUsers/DataUsers"));
const HakAkses = lazy(() => import("./ManageUsers/HakAkses"));
const DataBarang = lazy(() => import("./Barang/DataBarang"));
const Penjualan = lazy(() => import("./Penjualan/TransaksiPenjualan"));
const DataCustomer = lazy(() => import("./DataCustomer"));
const LihatPenjualan = lazy(() => import("./Penjualan/LihatPenjualan"));

// Ade
const Tracking = lazy(() => import("./Tracking"));
const Orders = lazy(() => import("./Order"));
const OrderTransaction = lazy(() => import("./OrderTransaction"));
const OrderTracking = lazy(() => import("./OrderTracking"));

export {
    LaporanUangKas,
    LihatPenjualan,
    DataCustomer,
    Penjualan,
    DataBarang,
    Dashboard,
    DashboardV1,
    UangKas,
    Login,
    JenisPembayaran,
    HakAkses,
    DataUsers,
    DataJenis,

    // Ade
    Tracking,
    Orders,
    OrderTransaction,
    OrderTracking,
};
