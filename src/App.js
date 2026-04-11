import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  useEffect(()=>{
    const els=document.querySelectorAll(".reveal,.reveal-l,.reveal-r");
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("up");});
    },{threshold:0.1});
    els.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[]);

  return (
    <>
      <div className="cin-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-cyber-matrix-1575542073438/1080p.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="orb orb-1"/>
      <div className="orb orb-2"/>
      <div className="grid-bg"/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Education/>
      <Contact/>
      <footer>
        <span className="foot-brand">Danuja Dewnith</span>
        <span>Built with <span className="foot-heart">♥</span> &amp; lots of coffee · 2026</span>
        <span>Sri Lanka 🇱🇰</span>
      </footer>
    </>
  );
}