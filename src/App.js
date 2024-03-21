import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import dataJson from './data/project.json';
import './common.scss';
import './App.css';


function App() {
  return (
    <HashRouter>
      <header>
        <div>
          <Link to="/home">ZIIIIIIIIY</Link>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </header>

      <main>
        <section className="home"><Home /></section>
        <section className="about"><About /></section>
        <section className="project"><Project data={dataJson} /></section>
        <section className="contact"><Contact /></section>
      </main>
    </HashRouter>
  );
}

export default App;
