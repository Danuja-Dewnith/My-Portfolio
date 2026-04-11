import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform
} from "framer-motion";

import Avatar from "../assets/Avatar.jpg"; // ✅ FIXED import

const stats = [
  { n: "7+", l: "Projects" },
  { n: "3.7", l: "GPA" },
  { n: "HND", l: "Pursuing" },
  { n: "Open", l: "To Work" }
];

const tags = [
  "Java","Spring Boot","React","Flutter","Android",
  "Node.js","MySQL","MongoDB","C#","PHP","Arduino","Git"
];

export default function About() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, amount: 0.15 });

  // 🔥 3D TILT
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const ci = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const ii = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" }
    }
  };

  return (
    <section id="about" className="sec" ref={ref}>
      <div className="sec-num">01</div>

      {/* HEADER */}
      <motion.div
        className="sec-head reveal-l"
        animate={iv ? { opacity: 1, x: 0 } : {}}
        initial={{ opacity: 0, x: -28 }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-eyebrow">About Me</div>
        <h2 className="sec-title">
          The Story<br />Behind the Code
        </h2>
        <p className="sec-sub">
          Software Engineering undergraduate passionate about building real-world solutions.
        </p>
      </motion.div>

      <div className="about-grid">

        {/* 🔥 LEFT SIDE (IMAGE + TILT) */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          animate={iv ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="about-img-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={Avatar} alt="Profile" className="about-img" />
          </motion.div>

          {/* STATS */}
          <div className="about-mini-cards">
            {stats.map((s) => (
              <div key={s.l} className="amc">
                <div className="amc-num">{s.n}</div>
                <div className="amc-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={ci}
          initial="hidden"
          animate={iv ? "visible" : "hidden"}
        >
          <motion.p className="about-bio" variants={ii}>
            I'm a <strong>Software Engineering undergraduate</strong> at NIBM with hands-on experience in full-stack and cross-platform mobile development. Skilled in <strong>Java, Spring Boot, React, and Flutter</strong>, with a solid foundation in data structures and algorithms.
          </motion.p>

          <motion.p className="about-bio" variants={ii}>
            I've built AI-integrated healthcare platforms, microservices-based factory systems, and IoT hardware projects. Every line of code is driven by a desire to solve <strong>meaningful real-world problems</strong>.
          </motion.p>

          <motion.div className="about-quote" variants={ii}>
            <p>
              "Passionate about developing scalable solutions and seeking an internship to apply technical expertise and grow in a professional environment."
            </p>
          </motion.div>

          <motion.div className="about-tags" variants={ii}>
            {tags.map((t) => (
              <span key={t} className="atag">{t}</span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}