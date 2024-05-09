import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Education } from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import Footer from "./components/Footer/Footer";
import Mode from "./theme/mode";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="App" style={theme}>
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <AboutMe />
      <Footer />
      <Mode />
    </div>
  );
}

export default App;
