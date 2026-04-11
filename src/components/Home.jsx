import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "../assets/pro.jpg";
// Import the PDF directly
import cvPDF from "../assets/Danuja_Dewnith_CV_(2026,03,31).pdf";

const roles = [
  "Full Stack Developer",
  "Android Developer",
  "Flutter Developer",
  "Java Engineer",
  "Problem Solver",
];

export default function Home() {
  const [text, setText] = useState("");
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.88]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  useEffect(() => {
    const cur = roles[ri];
    let t;
    if (!del && ci < cur.length) {
      t = setTimeout(() => {
        setText(cur.slice(0, ci + 1));
        setCi((c) => c + 1);
      }, 82);
    } else if (!del && ci === cur.length) {
      t = setTimeout(() => setDel(true), 2200);
    } else if (del && ci > 0) {
      t = setTimeout(() => {
        setText(cur.slice(0, ci - 1));
        setCi((c) => c - 1);
      }, 42);
    } else {
      setDel(false);
      setRi((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [ci, del, ri]);

  useEffect(() => {
    const move = (e) => {
      const g = document.querySelector(".cursor-glow");
      if (g) {
        g.style.left = e.clientX + "px";
        g.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Handle PDF download with proper file handling
  const handleDownloadCV = (e) => {
    e.preventDefault();
    
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Danuja_Dewnith_CV.pdf'; // Clean filename without special characters
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="cursor-glow" />
      <motion.div className="hero-content" style={{ opacity, scale, y }}>
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Open to Internship · Sri Lanka
          </div>
          <h1 className="hero-h1">
            <span className="line1">HI, I'M</span>
            <span className="line2">DANUJA</span>
          </h1>
          <p className="hero-role">
            {text}
            <span className="cursor-blink" />
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span> <span>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
            <button onClick={handleDownloadCV} className="btn-cv">
              ↓ CV
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="hero-card-stack">
            <div className="hc hc-back1" />
            <div className="hc hc-back2" />
            <div className="hc hc-main">
              <div className="hc-avatar-row">
                <img src={profileImg} alt="Danuja" className="hc-avatar" />
                <div>
                  <div className="hc-name">Danuja Dewnith</div>
                  <div className="hc-role-tag">SE Undergraduate · NIBM</div>
                </div>
              </div>
              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                  margin: "4px 0",
                }}
              />
              <div className="hc-stat-row">
                <div className="hc-stat">
                  <div className="hc-stat-num">7+</div>
                  <div className="hc-stat-lbl">Projects</div>
                </div>
                <div className="hc-stat">
                  <div className="hc-stat-num">3.7</div>
                  <div className="hc-stat-lbl">GPA</div>
                </div>
                <div className="hc-stat">
                  <div className="hc-stat-num">HND</div>
                  <div className="hc-stat-lbl">Pursuing</div>
                </div>
              </div>
              <div className="hc-tags">
                {["Java", "Flutter", "React", "Spring Boot", "Node.js"].map(
                  (t) => (
                    <span key={t} className="hc-tag">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div
        className="hero-scroll"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}