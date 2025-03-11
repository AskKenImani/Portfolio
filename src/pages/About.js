import React from "react";
import { motion } from "framer-motion";

const textScrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const About = () => {
  return (
    <motion.section 
      className="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textScrollVariants}
    >
      <motion.h2 variants={textScrollVariants}>About Me</motion.h2>
      <motion.div className="about-box" variants={textScrollVariants}>
        <p>
          Hi, I'm <strong>Kehinde Imani</strong>, a skilled <strong>Frontend Developer</strong>, 
          <strong>Virtual Assistant</strong>, and <strong>Mathematics Educator</strong>.  
        </p>
    
        <p>
          With a background in <strong>Mechanical Engineering</strong>, my journey into tech was fueled by a deep passion 
          for creativity, problem-solving, and bringing ideas to life through code.  
          Despite my engineering roots, I found my true calling in Frontend Development, 
          where I get to blend design, logic, and user experience to create interactive, high-performance web applications.
        </p>
    
        <p>
          Today, I specialize in building <strong>modern, responsive, and visually appealing websites</strong> using 
          <strong>React.js, HTML, CSS, and JavaScript</strong>.  
          I take pride in writing clean, maintainable code and ensuring seamless user experiences that engage and convert visitors into customers.  
        </p>
    
        <p>
          Beyond development, my experience as a Virtual Assistant allows me to bring structure, efficiency, 
          and organization to businesses—handling <strong>data entry, social media management, email handling, and more</strong>.
        </p>
    
        <p>
          Whether you need a stunning website, an efficient virtual assistant, or a reliable problem-solver,  
          I am the professional you can count on! Let's collaborate and bring your vision to reality.  
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
