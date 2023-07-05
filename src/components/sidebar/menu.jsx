const Menu = [
    {
        path: "/dashboard",
        icon: "fa fa-th",
        title: "Dashboard",
        role: "dashboard",
    },
    {
        path: "#",
        icon: "fa fa-hdd",
        title: "Master",
        isShow: true,
        role: ["master-jenis-pembayaran", "master-jenis"],
        children: [
            { path: "/master-jenis-pembayaran", title: "Jenis Pembayaran", role: "master-jenis-pembayaran" },
            { path: "/master-jenis", title: "Jenis Printing", role: "master-jenis" },
        ],
    },
    {
        path: "/data-customer",
        icon: "fas fa-users",
        title: "Data Customer",
        role: "data-customer",
    },
    {
        path: "/data-barang",
        icon: "fas fa-archive",
        title: "Data Barang",
        role: "data-barang",
    },
    {
        path: "#",
        icon: "fas fa-store",
        title: "Penjualan",
        role: ["penjualan", "lihat-penjualan"],
        children: [
            { path: "/penjualan", title: "Transaksi Penjualan", role: "penjualan" },
            { path: "/lihat-penjualan", title: "Lihat Penjualan", role: "lihat-penjualan" },
        ],
    },

    {
        path: "/uang-kas",
        icon: "fas fa-money-bill-alt",
        title: "Uang Kas",
        role: "uang-kas",
    },
    {
        path: "/data-users",
        icon: "fas fa-users",
        title: "Data Users",
        role: "data-users",
    },

    {
        path: "#",
        icon: "fas fa-paste",
        title: "Laporan",
        role: ["laporan-uang-kas"],
        children: [{ path: "/laporan-uang-kas", title: "Laporan Uang Kas", role: "laporan-uang-kas" }],
    },

    // Ade
    {
        path: "/tracking",
        icon: "fas fa-truck",
        title: "Tracking",
        role: "tracking",
    },
    {
        path: "/orders",
        icon: "fas fa-archive",
        title: "Orders",
        role: "orders",
    },
    {
        path: "/order-transaction",
        icon: "fas fa-money-bill-alt",
        title: "Order Transaction",
        role: "order-transaction",
    },
    {
        path: "/order-tracking",
        icon: "fas fa-truck",
        title: "Order Tracking",
        role: "order-tracking",
    },
    {
        path: "/data-users",
        icon: "fas fa-users",
        title: "Data Users",
        role: "data-users",
    },
    {
        path: "/hak-akses-users",
        icon: "fas fa-user-lock",
        title: "Hak Akses Users",
        role: "hak-akses-users",
    }
];

export default Menu;
