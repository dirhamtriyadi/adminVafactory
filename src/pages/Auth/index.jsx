import {
  React,
  useEffect,
  useContext,
  withRouter,
  getItem,
} from "../../components";
import { bgLogin } from "../../assets";
import FromLogin from "./form";
import { PageSettings } from "../../config/page-settings.js";

let Login = (props) => {
  let contextType = useContext(PageSettings);
  useEffect(() => {
    const isLogin = getItem("token") || [];
    if (isLogin.length === 0) {
      props.history.push("/");
    } else {
      props.history.push("/dashboard");
    }
    contextType.handleSetPageSidebar(false);
    contextType.handleSetPageHeader(false);
    contextType.handleSetBodyWhiteBg(true);
    return () => {
      contextType.handleSetPageSidebar(true);
      contextType.handleSetPageHeader(true);
      contextType.handleSetBodyWhiteBg(false);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="login login-with-news-feed">
      <div className="news-feed">
        <div
          className="news-image"
          style={{
            backgroundImage: `url(${bgLogin})`,
          }}
        ></div>

        <div className="news-caption">
          <h4 className="caption-title">
            <b>Vafactory</b> Admin App
          </h4>
          <p>
            Jl. Raya Cicalengka - Majalaya, Cikuya, Kec. Cicalengka, Kabupaten
            Bandung, Jawa Barat 40395
          </p>
        </div>
      </div>
      <div className="right-content">
        <div className="login-header">
          <div className="brand">
            <span className="logo"></span> <b>Vafactory</b> Admin
          </div>
          <div className="icon">
            <i className="fa fa-sign-in"></i>
          </div>
        </div>
        <div className="login-content">
          <FromLogin props={props}/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
