import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Route } from "react-router-dom";
import store from "./store/theme";
import Home from "./components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router>
        <Route path="/" component={<Home />} />
      </Router>
    </BrowserRouter>
  </Provider>
);
