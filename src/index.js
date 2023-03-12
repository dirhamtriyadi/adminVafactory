import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./components/store";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    // window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? (a) => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

