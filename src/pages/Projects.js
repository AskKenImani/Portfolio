import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Ken Unit Converter",
    description:
      "A tool for quick and accurate unit conversions in various fields, reducing errors in measurement-related industries such as construction, engineering, and science.",
    economicImportance:
      "Enhances productivity by providing instant conversions, reducing manual calculations, and preventing costly errors.",
    image: "/images/unit converter.PNG",
    link: "https://kenunitconvert.netlify.app/",
  },
  {
    title: "Ken Password Generator",
    description:
      "A secure password generator that creates strong, unique passwords to enhance online security and data protection.",
    economicImportance:
      "Helps businesses and individuals protect sensitive data, reducing the risks of cyber-attacks and financial fraud.",
    image: "/images/PasswordGen.PNG",
    link: "https://kenpasswordgenerator.netlify.app/",
  },
//   {
//     title: "Ken Number Selection System",
//     description:
//       "A number-based selection system for applications such as lottery systems, random sampling, and fair draws.",
//     economicImportance:
//       "Ensures fairness in selections, reduces biases, and can be used in decision-making processes in different industries.",
//     image: "/images/NumberSelection.PNG",
//     link: "https://kennumberselectionsystem.netlify.app/",
//   },
  {
    title: "Game of Colours",
    description:
      "A fun and interactive color-guessing game that enhances color recognition and cognitive skills.",
    economicImportance:
      "Can be used in education, design training, and as an engaging tool for color-based learning activities.",
    image: "/images/GameOfColor.PNG",
    link: "https://game-of-colours.netlify.app/",
  },
  {
    title: "Ken Lead Tracker",
    description:
      "A Chrome extension designed to help sales professionals manage and track leads effectively, increasing efficiency in customer acquisition.",
    economicImportance:
      "Enhances sales conversion rates, minimizes lead loss, and boosts business revenue through better lead management.",
    image: "/images/myLeadTracker.PNG",
    link: "https://kenleadtracker.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on, along with their economic significance.</p>
      
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            className="project-item" 
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <strong>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </strong>
            <p>{project.description}</p>
            <em>Economic Importance:</em> {project.economicImportance}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
