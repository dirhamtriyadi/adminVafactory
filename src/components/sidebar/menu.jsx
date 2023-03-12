const Menu = [
  {
    path: "/dashboard",
    icon: "fa fa-th",
    title: "Dashboard",
  },
  {
    path: "#",
    icon: "fa fa-hdd",
    title: "Master",
    isShow: true,
    children: [
      { path: "/master-jenis-pembayaran", title: "Jenis Pembayaran" },
      { path: "/master-bahan", title: "Bahan Kain" },
      { path: "/master-jenis", title: "Jenis Printing" },
    ],
  },
  {
    path: "/data-customer",
    icon: "fas fa-users",
    title: "Data Customer",
  },
  {
    path: "/data-barang",
    icon: "fas fa-archive",
    title: "Data Barang",
  },
  {
    path: "#",
    icon: "fas fa-store",
    title: "Penjualan",
    children: [
      { path: "/penjualan", title: "Transaksi Penjualan" },
      { path: "/lihat-penjualan", title: "Lihat Penjualan" },
    ],
  },

  {
    path: "/uang-kas",
    icon: "fas fa-money-bill-alt",
    title: "Uang Kas",
  },
  {
    path: "/data-users",
    icon: "fas fa-users",
    title: "Data Users",
  },

    {
    path: "#",
    icon: "fas fa-paste",
    title: "Laporan",
    children: [
      { path: "/laporan-uang-kas", title: "Laporan Uang Kas" },
    ],
  },

];

export default Menu;
