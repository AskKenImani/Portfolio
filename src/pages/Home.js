import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../components/profileImg.jpg"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Home = () => {
  return (
    <motion.section 
      className="home"
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      <motion.h2 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h2>

      <motion.img 
        src={profileImg} 
        alt="Kehinde Imani" 
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      />

      <motion.p variants={textVariants}>
        I'm{" "}
        <span style={{ color: "#E63946", fontWeight: "bold" }}>
          <Typewriter 
            words={["a Frontend Developer.", "a Website Manager", "a Virtual Assistant.", "an Educator."]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.p>
    </motion.section>
  );
};

export default Home;
