import {
  dataURLtoFile,
  reset,
  Swal,
  resizeFile,
  change,
  postImage,
  ToastNotification,
  postData,
  utilityActions,
  masterActions,
  putDataParams,
  deleteData,
} from "../../../../components";
import { deleteImage } from "../../../../config/axios";

export const simpanBarang = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.form.ModalTambahBarang?.values;
    const isEdit = state.utility.isEdit;
    const file = data.foto !== undefined ? dataURLtoFile(data.foto) : undefined;
    let edit = {
        code : data.code,
        description : data.description,
        name : data.name,
        price : data.price,
    }
    isEdit
      ? putDataParams("products/" + data.id, edit)
          .then((res) => {
            if (file !== undefined) {
              postImage(file, "foto_produk/" + data.id)
                .then((res) => {
                  // console.log(err)
                })
                .catch((err) => {
                  // console.log(err)
                });
            }
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataProduk());
            dispatch(utilityActions.hideModal());
            dispatch(reset("ModalTambahBarang"));
            ToastNotification("success", "Berhasil mengedit data barang");
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Edit data barang gagal, silahkan coba lagi !!!"
            );
            dispatch(utilityActions.setLoading(false));
          })
      : postData("products", data)
          .then((res) => {
            dispatch(utilityActions.setLoading(false));
            dispatch(masterActions.getDataProduk());
            dispatch(utilityActions.hideModal());
            dispatch(reset("ModalTambahBarang"));
            ToastNotification("success", "Data barang gagal disimpan");
            if (file !== undefined) {
              postImage(file, "foto_produk/" + res.data[1].id)
                .then((res) => {
                  // console.log(err)
                })
                .catch((err) => {
                  // console.log(err)
                });
            }
          })
          .catch((err) => {
            ToastNotification("info", "Data barang gagal disimpan");
          });
  };
};

export const getValue = (event) => {
  return async (dispatch, getState) => {
    try {
      const file = event.target.files[0];
      const res = await resizeFile(file);
      dispatch(change("ModalTambahBarang", "foto", res));
    } catch (err) {
      // console.log(err);
      return [];
    }
  };
};

export const hapusProdduk = (row) => {
  return async (dispatch, getState) => {
    Swal.fire({
      // title: "Anda Yakin !!",
      // text: "Ingin Menghapus Data Ini ?",
      html:
        "Apakah Anda Yakin Ingin " +
        "Menghapus " +
        "<h1><b>Produk   " +
        row.name +
        "</b> ini ?</h1>",
      icon: "warning",
      position: "top-center",
      cancelButtonText: "Tidak",
      showCancelButton: true,
      confirmButtonText: "OK",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData("products/" + row.id)
          .then((res) => {
            deleteImage("foto_produk/" + row.id)
              .then((res) => {})
              .catch((err) => {});
            ToastNotification("success", "Data berhasil dihapus");
            dispatch(masterActions.getDataProduk());
          })
          .catch((err) => {
            ToastNotification(
              "info",
              "Terjadi kesalahaan saat menghapus data !!!"
            );
          });
      }
    });
  };
};
