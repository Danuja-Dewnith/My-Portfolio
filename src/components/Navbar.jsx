import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/pro.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["home","about","skills","projects","work","education","contact"];
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled?" scrolled":""}`}>
        <a className="nav-brand" href="#home">
          <img src={profileImg} alt="Danuja" className="nav-avatar"/>
          <span className="nav-name">Danuja Dewnith</span>
        </a>
        <ul className="nav-links">
          {navItems.map(s=>(
            <li key={s}>
              <Link to={s} smooth duration={700} offset={-70} className={s==="contact"?"nav-cta":""}>
                {s.charAt(0).toUpperCase()+s.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button className={`nav-hamburger${menuOpen?" open":""}`} onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`mobile-overlay${menuOpen?" open":""}`} onClick={close}/>
      <div className={`mobile-nav${menuOpen?" open":""}`}>
        {navItems.map(s=>(
          <Link key={s} to={s} smooth duration={700} offset={-70} onClick={close}>
            {s.charAt(0).toUpperCase()+s.slice(1)}
          </Link>
        ))}
      </div>
    </>
  );
}