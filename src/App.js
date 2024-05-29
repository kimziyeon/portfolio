import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import About2 from "./component/About2";
import Project from './component/Project';
import Contact from './component/Contact';
import dataJson from './data/project.json';
import './common.scss';
import './App.css';
import './toggleBtn.scss';
import { useRef, useState } from "react";


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


  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();


  const mouseHandle = (e) => {
    // setMouseXY({ x: e.clientX, y: e.clientY });
    setMouseX(e.pageX)
    setMouseY(e.pageY)
  }

  return (
    <HashRouter>
      <header>
        <div>
          <Link to="/home" onClick={menuTop}>ZIIIIIIIIY</Link>
        </div>
        <nav>
          <Link to="/about2" onClick={() => menuclick(menuRef.current[1])}>About</Link>
          <Link to="/project" onClick={() => menuclick(menuRef.current[2])}>Project</Link>
          <Link to="/contact" onClick={() => menuclick(menuRef.current[3])}>Contact</Link>
        </nav>

      </header>

      <main>
        <div className="circle" style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}></div>
        {/* <div className="circle2" style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}></div> */}

        <section ref={(el) => { menuRef.current[0] = el }} className="home"><Home menuclick={menuclick} menuRef={menuRef} mouseHandle={mouseHandle} /></section>
        <section ref={(el) => { menuRef.current[1] = el }} className="about2"><About2 menuclick={menuclick} menuRef={menuRef} data={dataJson} mouseHandle={mouseHandle} /></section>
        <section ref={(el) => { menuRef.current[2] = el }} className="project"><Project menuclick={menuclick} menuRef={menuRef} data={dataJson} mouseHandle={mouseHandle} /></section>
        <section ref={(el) => { menuRef.current[3] = el }} className="contact"><Contact menuclick={menuclick} menuRef={menuRef} mouseHandle={mouseHandle} /></section>
      </main>
    </HashRouter>
  );
}

export default App;
