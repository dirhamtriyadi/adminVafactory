import { masterActions, putDataParams, ToastNotification, reset, utilityActions, getItem, setItem } from "../../../components"

export const simpanDataProfile = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const data = state.form.FormProfile?.values
        const isEdit = state.utility.isEdit

        if(data.password?.[1]){
            if (data.password_confirmation?.[1] === undefined) {
                ToastNotification("info", "Konfirmasi Password tidak boleh kosong")
                return false
            }
        }

        if (data.password?.[1] !== data.password_confirmation?.[1]) {
            ToastNotification("info", "Password tidak sama")
            return false
        }
        
        putDataParams("user/" + data.id, data)
            .then((res) => {
                if (res.data?.name?.[0]) {
                    ToastNotification("info", res.data?.name?.[0])
                    return false
                }
                if (res.data?.email?.[0]) {
                    ToastNotification("info", res.data?.email?.[0])
                    return false
                }
                if (res.data?.password?.[0]) {
                    ToastNotification("info", res.data?.password?.[0])
                    return false
                }
                dispatch(masterActions.getDataProfile(getItem("userdata").id))
                setItem("userdata", res.data[1]);
                dispatch(reset("FormProfile"))
                ToastNotification("success", "Berhasil mengedit data Profile")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((err) => {
                ToastNotification("info", "Edit data Profile gagal, silahkan coba lagi !!!")
                dispatch(utilityActions.setLoading(false))
            })
    }
}