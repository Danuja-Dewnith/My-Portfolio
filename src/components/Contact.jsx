import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";

const links=[
  {icon:"✉",label:"danujadewnith@gmail.com",href:"mailto:danujadewnith@gmail.com"},
  {icon:"📞",label:"+94 71 893 4714",href:"tel:+94718934714"},
  {icon:"💬",label:"WhatsApp",href:"https://wa.me/94718934714"},
  {icon:"⌥",label:"GitHub",href:"https://github.com/Danuja-Dewnith"},
  {icon:"in",label:"LinkedIn",href:"https://www.linkedin.com/in/danuja-dewnith-munasingha-53439a371"},
];

export default function Contact() {
  const form=useRef(); const ref=useRef(null);
  const iv=useInView(ref,{once:true,amount:0.1});
  const [status,setStatus]=useState(""); const [loading,setLoading]=useState(false);

  const send=e=>{
    e.preventDefault(); setLoading(true); setStatus("");
    emailjs.sendForm("service_mo969u8","template_rv2g6ew",form.current,"7MjX6zi3HKT7CmdRr")
      .then(()=>{setStatus("✓ Message sent!");form.current.reset();setLoading(false);})
      .catch(()=>{setStatus("✕ Failed. Please try again.");setLoading(false);});
  };

  return (
    <section id="contact" className="sec" ref={ref}>
      <div className="sec-num">06</div>
      <motion.div className="sec-head" initial={{opacity:0,x:-28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6}}>
        <div className="sec-eyebrow">Contact</div>
        <h2 className="sec-title">Let's Build<br/>Something</h2>
        <p className="sec-sub">Open to internships, freelance, and interesting collaborations.</p>
      </motion.div>

      <div className="contact-layout">
        <motion.div className="contact-left" initial={{opacity:0,x:-28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.2}}>
          <h3>Get In Touch</h3>
          <p>Whether you have a project, an opportunity, or just want to connect — I'm always excited to hear from you.</p>
          <div className="contact-links">
            {links.map((l,i)=>(
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="cl">
                <div className="cl-icon">{l.icon}</div>
                <span>{l.label}</span>
                <span className="cl-arrow">→</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-form" initial={{opacity:0,x:28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.3}}>
          <form ref={form} onSubmit={send}>
            <div className="form-row">
              <div className="ff"><label>Name</label><input type="text" name="from_name" placeholder="John Doe" required/></div>
              <div className="ff"><label>Email</label><input type="email" name="from_email" placeholder="john@example.com" required/></div>
            </div>
            <div className="ff"><label>Subject</label><input type="text" name="subject" placeholder="Internship Opportunity" required/></div>
            <div className="ff"><label>Message</label><textarea name="message" rows="5" placeholder="Tell me about your project or opportunity..." required/></div>
            <button type="submit" className="submit-btn" disabled={loading}>{loading?"Sending...":"Send Message →"}</button>
          </form>
          {status&&<p className="form-status">{status}</p>}
        </motion.div>
      </div>
    </section>
  );
}