import {
  React,
  connect,
  useSelector,
  Field,
  reduxForm,
  ReanderField,
  useEffect,
  selectorUtility,
  useDispatch,
  getSession,
} from "../../../components";
import metadata from "../../../metadata.json";
import { loginAction } from "../redux";
const date = new Date();

const rememberme = getSession('rememberme')
const maptostate = (state) =>{
  if(rememberme !== true){
    return{
      initialValues: {
        email : rememberme.email,
        password : rememberme.password,
        rememberme : rememberme.rememberme,
      }
    }
  }
}
let FromLogin = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorUtility.isLoading);
  useEffect(() => {
    document.getElementById("email").focus();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Field
            id="email"
            name="email"
            component={ReanderField}
            type="text"
            label="Email"
            placeholder="Masukan Email"
          />
        </div>
        <div className="col-12">
          <Field
            name="password"
            component={ReanderField}
            type="password"
            label="Masukan Password"
            placeholder="Masukan Masukan Password"
          />
        </div>
        <div className="col-12">
          <Field name="rememberme" id="rememberme" component="input" type="checkbox"/> Remember Me
        </div>

        <div className="col-12 text-right mt-3">
          <div className="login-buttons">
            <button
              type="button"
              onClick={() => dispatch(loginAction(props))}
              disabled={rememberme ? false : props.pristine || props.submitting || isLoading}
              className="btn btn-success btn-block btn-lg"
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> &nbsp; Sedang Login
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <hr />
          <p className="text-center text-grey-darker">
            &copy;Vafactorty All Right Reserved {date.getFullYear()}
            <br />
            {metadata.buildMajor}.{metadata.buildMinor}.{metadata.buildRevision}{" "}
            © {metadata.buildTag}
          </p>
        </div>
      </div>
    </div>
  );
};

FromLogin = reduxForm({
  form: "FromLogin",
  enableReinitialize: true,
})(FromLogin);
export default connect(maptostate)(FromLogin);
