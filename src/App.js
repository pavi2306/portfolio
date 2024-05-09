import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="App" style={theme}>
      <Navbar />
      <Home />
      {/* <Education />
      <Projects />
      <AboutMe />
      <Footer />
      <Mode /> */}
    </div>
  );
}

export default App;
