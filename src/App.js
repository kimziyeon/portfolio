import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import dataJson from './data/project.json';
import './common.scss';
import './App.css';
import { useRef } from "react";


function App() {
  const menuRef = useRef([]);

  const menuclick = (menu) => {
    menu.scrollIntoView({ behavior: "smooth" });
  }

  // const menuTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  const menuTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // function menuTop() {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  return (
    <HashRouter>
      <header>
        <div>
          <Link to="/home" onClick={menuTop}>ZIIIIIIIIY</Link>
        </div>
        <nav>
          <Link to="/about" onClick={() => menuclick(menuRef.current[1])}>About</Link>
          <Link to="/project" onClick={() => menuclick(menuRef.current[2])}>Project</Link>
          <Link to="/contact" onClick={() => menuclick(menuRef.current[3])}>Contact</Link>
        </nav>

      </header>

      <main>
        <section ref={(el) => { menuRef.current[0] = el }} className="home"><Home menuclick={menuclick} menuRef={menuRef} /></section>
        <section ref={(el) => { menuRef.current[1] = el }} className="about"><About menuclick={menuclick} menuRef={menuRef} /></section>
        <section ref={(el) => { menuRef.current[2] = el }} className="project"><Project menuclick={menuclick} menuRef={menuRef} data={dataJson} /></section>
        <section ref={(el) => { menuRef.current[3] = el }} className="contact"><Contact menuclick={menuclick} menuRef={menuRef} /></section>
      </main>
    </HashRouter>
  );
}

export default App;
