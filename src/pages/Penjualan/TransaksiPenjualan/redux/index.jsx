import Swal from "sweetalert2";
import {
  change,
  getItem,
  setItem,
  ToastNotification,
  utilityActions,
  reset,
  postData,
  getToday,
  removeItem,
} from "../../../../components";
import InvoicePenjualan from "../pdf/invoice";

export const tambahBarang = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.FormCariBarang?.values;
    dispatch(utilityActions.setLoading(true));

    let cek = getItem("data_barang_pembelian");
    let hasil = cek.findIndex((list) => list.code === data.code);

    let databaru = {
      ...data,
      total: data.jumlah_beli * data.price,
    };
    setTimeout(() => {
      if (hasil === -1) {
        cek.push(databaru);
        setItem("data_barang_pembelian", cek);
        dispatch(utilityActions.getDataEdit(cek));
        dispatch(reset("FormCariBarang"));
      } else {
        ToastNotification("info", "Barang sudah ada di tabel");
      }
      dispatch(utilityActions.setLoading(false));
    }, 100);
  };
};

export const cariNamaBarang = (e) => {
  return async (dispatch, getState) => {
    const state = getState();
    let databarng = state.master.getDataProduk[0].find((cek) => cek.code === e);
    dispatch(change("FormCariBarang", "id", databarng.id));
    dispatch(change("FormCariBarang", "name", databarng.name));
    dispatch(change("FormCariBarang", "price", databarng.price));
    dispatch(change("FormCariBarang", "description", databarng.description));
  };
};

export const hapusBarang = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      title: "Anda Yakin !!",
      text: "Ingin Menghapus Data Ini ?",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let data = getItem("data_barang_pembelian");
        data.splice(row.id, 1);
        setItem("data_barang_pembelian", data);
        dispatch(utilityActions.getDataEdit(data));
      }
    });
  };
};

export const simpanPembayaran = (e) => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.FormBayar?.values;
    let databarang = getItem("data_barang_pembelian").map((list) => {
      let row = {
        product_id: list.id,
        name: list.name,
        qty: Number(list.jumlah_beli),
        price: Number(list.price),
        subtotal: Number(list.total),
        description: list.description,
      };
      return row;
    });

    let datapenjualan = state.penjualan.getDataPenjualan.pop();

    let nomerGenerate = "";
    if (datapenjualan === undefined) {
      nomerGenerate = "TR" + getToday().replaceAll("-", 0) + "0001";
    } else {
      let nomor = datapenjualan.transaction_number;
      let str = nomor.substring(0, nomor.length - 1);
      let angkaTerakhir = nomor.substr(nomor.length - 1);
      let calculasi = parseInt(angkaTerakhir) + parseInt(1);
      nomerGenerate = `${str}` + calculasi;
    }


    let ceknama = state.master.getDataCustomer?.[0].find((cek)=>cek.id === data.idCustomer)

    let hasil = {
      transaction_number: nomerGenerate,
      date: getToday(),
      users_id: getItem("userdata").id,
      name: ceknama.name,
      customers_id: data.idCustomer,
      items: databarang,
      payment: {
        jenis: data.jenis_pembayaran,
        total_bayar: data.total_user_bayar,
      },
    };

    dispatch(utilityActions.setLoading(true));
    postData("transactions", hasil)
      .then((res) => {
        dispatch(utilityActions.setLoading(false));
        if (res.data?.users_id?.[0]) {
          ToastNotification("info", res.data?.users_id?.[0]);
          return false;
        }
        InvoicePenjualan(hasil)
        ToastNotification("success", "Transaksi Berhasil");
        dispatch(reset("FormBayar"));
        dispatch(reset("FormCariBarang"));
        removeItem("data_barang_pembelian");
        dispatch(utilityActions.getDataEdit([]));
      })
      .catch((err) => {
        ToastNotification("info", "Transaksi Gagal");
        dispatch(utilityActions.setLoading(false));
      });
  };
};
