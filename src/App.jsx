import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Blog from "./components/blog/Blog";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
        <Blog />
      </div>
    </div>
  );
}

export default App;
