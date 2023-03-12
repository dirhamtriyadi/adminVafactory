import { React } from "../components/helpers";

import { DashboardV1, DataBahan, DataJenis, Login, DataUsers, HakAkses,  UangKas, JenisPembayaran, DataBarang, Penjualan, DataCustomer, LaporanUangKas } from "../pages";
import LihatPenjualan from "../pages/Penjualan/LihatPenjualan";

const routes = [
  {
    path: "/",
    title: "Login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/login",
    title: "Login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard V1",
    component: () => <DashboardV1 />,
  },

  
  // Uang Kas
  
  {
    path: "/uang-kas",
    exact: true,
    title: "Uang Kas",
    component: () => <UangKas />,
  },
 


  // Manage Users
  {
    path: "/data-users",
    exact: true,
    title: "Data User",
    component: () => <DataUsers />,
  },
  {
    path: "/hak-akses-users",
    exact: true,
    title: "Hak Akses User",
    component: () => <HakAkses />,
  },
  {
    path: "/data-barang",
    exact: true,
    title: "Data Barang",
    component: () => <DataBarang />,
  },

  // Data Masteer
  {
    path: "/master-bahan",
    exact: true,
    title: "Data Bahan",
    component: () => <DataBahan />,
  },
  {
    path: "/master-jenis-pembayaran",
    exact: true,
    title: "Master Jenis Pembayaran",
    component: () => <JenisPembayaran />,
  },
  {
    path: "/master-jenis",
    exact: true,
    title: "Data Jenis",
    component: () => <DataJenis />,
  },
  {
    path: "/penjualan",
    exact: true,
    title: "Penjualan",
    component: () => <Penjualan />,
  },
  {
    path: "/lihat-penjualan",
    exact: true,
    title: "Lihat Penjualan",
    component: () => <LihatPenjualan />,
  },
  
  {
    path: "/data-customer",
    exact: true,
    title: "Data Customer",
    component: () => <DataCustomer />,
  },


  {
    path: "/laporan-uang-kas",
    exact: true,
    title: "Laporan Uang kas",
    component: () => <LaporanUangKas />,
  },

];

export default routes;
