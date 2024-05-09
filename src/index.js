// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import store from "./store/theme";
// import { Home } from "./components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       {/* <Home /> */}
  //       {/* <Router>
  //         <Route path="/" component={<Home />} />
  //       </Router> */}
  //     </BrowserRouter>
  //   </Provider>
);
