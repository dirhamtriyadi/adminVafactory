const Menu = [
    {
        path: "/dashboard",
        icon: "fa fa-th",
        title: "Dashboard",
        role: "dashboard",
    },
    {
        path: "/data-customer",
        icon: "fas fa-users",
        title: "Data Customer",
        role: "data-customer",
    },
    // {
    //     path: "/data-barang",
    //     icon: "fas fa-archive",
    //     title: "Data Barang",
    //     role: "data-barang",
    // },
    {
        path: "#",
        icon: "fas fa-store",
        title: "Penjualan Toko",
        role: ["data-barang", "penjualan", "lihat-penjualan"],
        children: [
            { path: "/penjualan", title: "Transaksi Penjualan", role: "penjualan" },
            { path: "/lihat-penjualan", title: "Lihat Penjualan", role: "lihat-penjualan" },
            { path: "/data-barang", title: "Data Barang", role: "data-barang" },
        ],
    },
    {
        path: "#",
        icon: "fas fa-archive",
        title: "Orders",
        role: ["orders", "order-transaction", "order-tracking"],
        children: [
            { path: "/orders", title: "Orders", role: "orders" },
            { path: "/order-transaction", title: "Order Transaction", role: "order-transaction" },
            { path: "/order-tracking", title: "Order Tracking", role: "order-tracking" },
        ]
    },
    // Uang Kas
    // {
    //     path: "/uang-kas",
    //     icon: "fas fa-money-bill-alt",
    //     title: "Uang Kas",
    //     role: "uang-kas",
    // },
    // {
    //     path: "/data-users",
    //     icon: "fas fa-users",
    //     title: "Data Users",
    //     role: "data-users",
    // },

    {
        path: "#",
        icon: "fas fa-paste",
        title: "Uang Kas",
        role: ["laporan-uang-kas", "uang-kas"],
        children: [
            { path: "/uang-kas", title: "Uang Kas", role: "uang-kas" },
            { path: "/laporan-uang-kas", title: "Laporan Uang Kas", role: "laporan-uang-kas" }
        ],
    },

    // Ade
    // Tracking
    // {
    //     path: "/tracking",
    //     icon: "fas fa-truck",
    //     title: "Tracking",
    //     role: "tracking",
    // },
    // Orders
    // {
    //     path: "/orders",
    //     icon: "fas fa-archive",
    //     title: "Orders",
    //     role: "orders",
    // },
    // {
    //     path: "/order-transaction",
    //     icon: "fas fa-money-bill-alt",
    //     title: "Order Transaction",
    //     role: "order-transaction",
    // },
    // {
    //     path: "/order-tracking",
    //     icon: "fas fa-truck",
    //     title: "Order Tracking",
    //     role: "order-tracking",
    // },
    {
        path: "#",
        icon: "fa fa-hdd",
        title: "Master",
        isShow: true,
        role: ["master-jenis-pembayaran", "master-kategori", "tracking"],
        children: [
            { path: "/master-jenis-pembayaran", title: "Jenis Pembayaran", role: "master-jenis-pembayaran" },
            { path: "/master-kategori", title: "Kategori", role: "master-kategori" },
            { path: "/tracking", title: "Tracking", role: "tracking" },
        ],
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
