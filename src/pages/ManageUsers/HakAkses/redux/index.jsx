import axios from "axios"
import { ToastNotification, utilityActions, Swal, deleteData, reset, putDataParams, masterActions, postData } from "../../../../components"

export const simpanDataHakAkses = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormDataHakAkses?.values
        const isEdit = state.utility.isEdit
        const userdata = JSON.parse(localStorage.getItem("userdata"));

        dispatch(utilityActions.setLoading(true))

        isEdit
            ? putDataParams("roles/" + data.id, data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.name?.[0]) {
                        ToastNotification("info", res.data?.name?.[0])
                        return false
                    }
                    if (res.data?.user_id?.[0]) {
                        ToastNotification("info", res.data?.user_id?.[0])
                        return false
                    }

                    dispatch(masterActions.getDataUsers())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataHakAkses"))
                    ToastNotification("success", "Berhasil mengedit data hak akses. silahkan refresh halaman !!!")
                })
                .catch((err) => {
                    ToastNotification("info", "Edit data hak akses gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
            : postData("roles", data)
                .then((res) => {
                    dispatch(utilityActions.setLoading(false))
                    if (res.data?.name?.[0]) {
                        ToastNotification("info", res.data?.name?.[0])
                        return false
                    }
                    if (res.data?.user_id?.[0]) {
                        ToastNotification("info", res.data?.user_id?.[0])
                        return false
                    }

                    if(userdata.id === data.user_id){
                        const getData = async () => {
                            const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "user/check-role", {
                                headers: {
                                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                                },
                            });
                            localStorage.setItem("role", JSON.stringify(res.data));
                        }
                        getData();
                    }
                    dispatch(masterActions.getDataUsers())
                    dispatch(utilityActions.hideModal())
                    dispatch(reset("FormDataHakAkses"))
                    ToastNotification("success", "Berhasil menambah data hak akses. silahkan refresh halaman !!!")
                })
                .catch((err) => {
                    ToastNotification("info", "Tambah data hak akses gagal, silahkan coba lagi !!!")
                    dispatch(utilityActions.setLoading(false))
                })
    }
}

export const hapusDataHakAkses = (row) => {
    return async (dispatch, getState) => {
      const state = getState()
      const data = state.form.HakAkses?.values
      const userdata = JSON.parse(localStorage.getItem("userdata"));

      Swal.fire({
        // title: "Anda Yakin !!",
        // text: "Ingin Menghapus Data Ini ?",
        html:
          "Apakah Anda Yakin Ingin " +
          "Menghapus " +
          "<h1><b>Hak Akses  " +
          row.name +
          "</b> ?</h1>",
        icon: "warning",
        position: "top-center",
        cancelButtonText: "Tidak",
        showCancelButton: true,
        confirmButtonText: "OK",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("roles/" + row.id)
            .then((res) => {
              ToastNotification("success", "Data berhasil dihapus");
              if (userdata.id === data.user_id) {
                const getData = async () => {
                  const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "user/check-role", {
                    headers: {
                      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    },
                  });
                  localStorage.setItem("role", JSON.stringify(res.data));
                }
                getData();
              }
              dispatch(masterActions.getDataUsers());
              // window.location.reload();
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