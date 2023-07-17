import { Suspense } from "react";
import { React, withRouter, Route, getItem } from "../helpers";
import Skeleton from "react-loading-skeleton";

import routes from "./../../config/page-route.jsx";
import { PageSettings } from "./../../config/page-settings.js";

function setTitle(path, routeArray) {
  var pageTitle;
  for (var i = 0; i < routeArray.length; i++) {
    if (routeArray[i].path === path) {
      pageTitle = "Vafactory | " + routeArray[i].title;
    }
  }
  document.title = pageTitle ? pageTitle : "Va";
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getItem("role"),
    };
    // console.log(this.state.user);
  }
  componentDidMount() {
    setTitle(this.props.history.location.pathname, routes);
  }
  componentWillMount() {
    this.props.history.listen(() => {
      setTitle(this.props.history.location.pathname, routes);
    });
  }

  render() {
    return (
      <Suspense fallback={<Skeleton width={"100%"} height={1000} />}>
        <PageSettings.Consumer>
          {({
            pageContentFullWidth,
            pageContentClass,
            pageContentInverseMode,
          }) => (
            <div
              className={
                "content " +
                (pageContentFullWidth ? "content-full-width " : "") +
                (pageContentInverseMode ? "content-inverse-mode " : "") +
                pageContentClass
              }
            >
              {routes.map((route, index) => (
                route.path === "/" || route.path === "/login" ? (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ) : (
                  // this.state.user.includes(route.role) && (
                  //   <Route
                  //     key={index}
                  //     path={route.path}
                  //     exact={route.exact}
                  //     component={route.component}
                  //   />
                  // )
                  this.state.user.map((item, index) => (
                    item.name === route.role && (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                        />
                    )
                  ))
                )
              ))}
            </div>
          )}
        </PageSettings.Consumer>
      </Suspense>
    );
  }
}

export default withRouter(Content);
