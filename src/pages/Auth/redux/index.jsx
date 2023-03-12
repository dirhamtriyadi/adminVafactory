import {
  postData,
  setItem,
  ToastNotification,
  utilityActions,
  setSession,
  removeSession,
} from "../../../components";

export const loginAction = () => {
  return async (dispatch, getState) => {
    // const history = useHistory();
    const state = getState();
    const data = state.form.FromLogin?.values;

    dispatch(utilityActions.setLoading(true));
    if (data.rememberme === true) {
      setSession("rememberme", data);
    } else {
      removeSession("rememberme");
    }

    let hasil = {
      email: data.email,
      password: data.password,
    };

    postData("login", hasil)
      .then((res) => {
        setItem("userdata", res.data);
        setItem("token", res.data.access_token);
        setTimeout(() => {
          window.location.replace("/dashboard");
        }, 200);
      })
      .catch((err) => {
        // console.log(err)
        ToastNotification(
          "info",
          "Email atau password yang anda masukan salah !!!"
        );
        dispatch(utilityActions.setLoading(false));
      });
  };
};
