import { React } from "../components/helpers";

import {
    DashboardV1,
    Dashboard,
    DataJenis,
    Login,
    DataUsers,
    HakAkses,
    UangKas,
    JenisPembayaran,
    DataBarang,
    Penjualan,
    DataCustomer,
    LaporanUangKas,
    Tracking,
    Orders,
    OrderTransaction,
    OrderTracking,
    Profile,
} from "../pages";
import LihatPenjualan from "../pages/Penjualan/LihatPenjualan";

const routes = [
    {
        path: "/",
        title: "Login",
        exact: true,
        role: "login",
        component: () => <Login />,
    },
    {
        path: "/login",
        title: "Login",
        exact: true,
        role: "login",
        component: () => <Login />,
    },
    {
        path: "/dashboard",
        exact: true,
        title: "Dashboard V1",
        role: "dashboard",
        component: () => <Dashboard />,
    },

    // Uang Kas

    {
        path: "/uang-kas",
        exact: true,
        title: "Uang Kas",
        role: "uang-kas",
        component: () => <UangKas />,
    },

    // Manage Users
    {
        path: "/data-users",
        exact: true,
        title: "Data User",
        role: "data-users",
        component: () => <DataUsers />,
    },
    {
        path: "/hak-akses-users",
        exact: true,
        title: "Hak Akses User",
        role: "hak-akses-users",
        component: () => <HakAkses />,
    },
    {
        path: "/data-barang",
        exact: true,
        title: "Data Barang",
        role: "data-barang",
        component: () => <DataBarang />,
    },

    // Data Masteer
    {
        path: "/master-jenis-pembayaran",
        exact: true,
        title: "Master Jenis Pembayaran",
        role: "master-jenis-pembayaran",
        component: () => <JenisPembayaran />,
    },
    {
        path: "/master-kategori",
        exact: true,
        title: "Data Jenis",
        role: "master-kategori",
        component: () => <DataJenis />,
    },
    {
        path: "/penjualan",
        exact: true,
        title: "Penjualan",
        role: "penjualan",
        component: () => <Penjualan />,
    },
    {
        path: "/lihat-penjualan",
        exact: true,
        title: "Lihat Penjualan",
        role: "lihat-penjualan",
        component: () => <LihatPenjualan />,
    },

    {
        path: "/data-customer",
        exact: true,
        title: "Data Customer",
        role: "data-customer",
        component: () => <DataCustomer />,
    },

    {
        path: "/laporan-uang-kas",
        exact: true,
        title: "Laporan Uang kas",
        role: "laporan-uang-kas",
        component: () => <LaporanUangKas />,
    },

    // Ade
    // Tracking
    {
        path: "/tracking",
        exact: true,
        title: "Tracking",
        role: "tracking",
        component: () => <Tracking />,
    },

    // Orders
    {
        path: "/orders",
        exact: true,
        title: "Orders",
        role: "orders",
        component: () => <Orders />,
    },

    // Order Transaction
    {
        path: "/order-transaction",
        exact: true,
        title: "Order Transaction",
        role: "order-transaction",
        component: () => <OrderTransaction />,
    },

    // Order Tracking
    {
        path: "/order-tracking",
        exact: true,
        title: "Order Tracking",
        role: "order-tracking",
        component: () => <OrderTracking />,
    },

    // Profile
    {
        path: "/profile",
        exact: true,
        title: "Profile",
        role: "profile",
        component: () => <Profile />,
    },
];

export default routes;
