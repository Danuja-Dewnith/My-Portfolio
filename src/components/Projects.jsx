import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const projects = [
  {
    feat: true,
    title: "LifeLink – AI Blood & Organ Donation System",
    desc: "Full-stack mobile & web healthcare platform for real-time donor-recipient matching. AI-based organ health prediction, GPS matching, chatbot support, RBAC security, and Agile workflow.",
    tech: [
      { i: "flutter/flutter-original" },
      { i: "react/react-original" },
      { i: "nodejs/nodejs-original" },
      { i: "mongodb/mongodb-original" },
    ],
    link: "https://github.com/Danuja-Dewnith/LifeLink-Mobile-and-Web-application",
    date: "Feb–Mar 2026",
    badge: "FEATURED · AI",
  },
  {
    tall: true,
    title: "Factory Management System",
    desc: "Microservices-based factory system with production tracking, employee management, inventory control, and RESTful API integration.",
    tech: [
      { i: "java/java-original" },
      { i: "spring/spring-original" },
      { i: "react/react-original" },
      { i: "mysql/mysql-original" },
    ],
    link: "https://github.com/Danuja-Dewnith/Factory-Management-System-Through-Micro-Service",
    date: "Jun 2025",
  },
  {
    title: "Hotel Management System",
    desc: "Web-based hotel management for room booking, food ordering, staff management and billing.",
    tech: [
      { i: "html5/html5-original" },
      { i: "php/php-original" },
      { i: "mysql/mysql-original" },
    ],
    link: "https://github.com/Danuja-Dewnith/Omi-Family-Restaurant-web-application",
    date: "Aug–Oct 2025",
  },
  {
    title: "PizzaMania Android App",
    desc: "Android app with SQLite-based authentication, registration, login, and clean mobile navigation.",
    tech: [
      { i: "android/android-original" },
      { i: "sqlite/sqlite-original" },
      { i: "java/java-original" },
    ],
    link: "https://github.com/Danuja-Dewnith/Pizza-Maina-Modile-App",
    date: "Sep 2025",
  },
  {
    title: "MM Auto Electrical Desktop",
    desc: "C# desktop tool for service management and Crystal Reports business reporting.",
    tech: [{ i: "csharp/csharp-original" }],
    link: "https://github.com/Danuja-Dewnith/MM-Auto-Electrical-Desktop-Application",
    date: "2025",
  },
  {
    title: "Warehouse Robot & Smart Harbour",
    desc: "Two IoT/Arduino projects: robo-forklift with ultrasonic arm, and smart harbor with real-time ship docking and water level monitoring.",
    tech: [{ i: "arduino/arduino-original" }],
    link: "https://github.com/Danuja-Dewnith/Warehouse-Robot-Arduino",
    date: "2024",
  },
];

const ci = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const ii = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring" },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, amount: 0.05 });
  return (
    <section id="projects" className="sec" ref={ref}>
      <div className="sec-num">03</div>
      <motion.div
        className="sec-head"
        initial={{ opacity: 0, x: -28 }}
        animate={iv ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-eyebrow">Projects</div>
        <h2 className="sec-title">Things I've Built</h2>
        <p className="sec-sub">
          Real solutions across web, mobile, desktop, and hardware.
        </p>
      </motion.div>

      <motion.div
        className="projects-bento"
        variants={ci}
        initial="hidden"
        animate={iv ? "visible" : "hidden"}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`proj-card${p.feat ? " feat" : ""}${p.tall ? " tall" : ""}`}
            variants={ii}
          >
            <div className="proj-num">
              <span>PROJECT {String(i + 1).padStart(2, "0")}</span>
              <span
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                {p.badge && <span className="proj-badge">{p.badge}</span>}
                <span className="proj-date">{p.date}</span>
              </span>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-tech-row">
              {p.tech.map((t, j) => (
                <img key={j} src={`${CDN}${t.i}.svg`} alt="" />
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              GitHub <span className="proj-arrow">↗</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
