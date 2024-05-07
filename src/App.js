// import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
// import Home from "./components/Home/Home";
import "./style.css";
// import { useEffect, useState } from "react";
import Home from "./component/Home/Home";

function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
