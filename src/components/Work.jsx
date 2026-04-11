import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const works=[
  {title:"Web Development",desc:"Responsive, modern web apps with React, PHP, and MySQL — from landing pages to full management systems.",img:"https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80",chip:"Web",icon:"🌐"},
  {title:"Mobile Development",desc:"Cross-platform Android and Flutter applications that solve real problems with clean, intuitive interfaces.",img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",chip:"Mobile",icon:"📱"},
  {title:"Desktop Applications",desc:"C# desktop tools for business automation, service management, and professional reporting.",img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",chip:"Desktop",icon:"💻"},
  {title:"IoT & Hardware",desc:"Arduino-based hardware-software systems: smart sensors, automated robots, and real-time control systems.",img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",chip:"IoT",icon:"⚡"},
];

const ci={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:0.12}}};
const ii={hidden:{opacity:0,y:32},visible:{opacity:1,y:0,transition:{duration:0.5,type:"spring"}}};

export default function Work() {
  const ref=useRef(null); const iv=useInView(ref,{once:true,amount:0.1});
  return (
    <section id="work" className="sec" ref={ref}>
      <div className="sec-num">04</div>
      <motion.div className="sec-head" initial={{opacity:0,x:-28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6}}>
        <div className="sec-eyebrow">What I Do</div>
        <h2 className="sec-title">Areas of Expertise</h2>
        <p className="sec-sub">From frontend to firmware — I build across the full spectrum.</p>
      </motion.div>

      <motion.div className="work-grid" variants={ci} initial="hidden" animate={iv?"visible":"hidden"}>
        {works.map((w,i)=>(
          <motion.div key={i} className="work-card" variants={ii}>
            <div className="work-img-wrap">
              <img src={w.img} alt={w.title} className="work-img"/>
              <span className="work-chip">{w.chip}</span>
              <div className="work-icon-badge">{w.icon}</div>
            </div>
            <div className="work-body">
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}