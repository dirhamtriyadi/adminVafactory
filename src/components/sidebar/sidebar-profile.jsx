
import { PageSettings } from "./../../config/page-settings.js";

import {React,Avatar,Link, getItem} from "../helpers"

class SidebarProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileActive: 0,
    };
    this.handleProfileExpand = this.handleProfileExpand.bind(this);
  }

  handleProfileExpand(e) {
    e.preventDefault();
    this.setState((state) => ({
      profileActive: !this.state.profileActive,
    }));
  }

  render() {
    return (
      <PageSettings.Consumer>
        {({ pageSidebarMinify }) => (
          <ul className="nav">
            <li
              className={
                "nav-profile " + (this.state.profileActive ? "expand " : "")
              }
            >
              <Link to="/" onClick={this.handleProfileExpand}>
                <div className="cover with-shadow"></div>
                <div className="image">
                  <Avatar name={getItem('userdata').name} size="30" color="#00743C" round="20px" />
                  <span
                    className="d-none d-md-inline"
                    style={{ cursor: "pointer" }}
                  ></span>{" "}
                </div>
                <div className="info">
                 {getItem('userdata').name}
                  <small>Level Admin</small>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </PageSettings.Consumer>
    );
  }
}

export default SidebarProfile;
