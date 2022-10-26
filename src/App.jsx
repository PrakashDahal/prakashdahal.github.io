import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
// import Experience from "./components/experience/Experience";
import Blog from "./components/blog/Blog";
import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        {/* <Experience /> */}
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
