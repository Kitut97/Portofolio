import React from "react";
import { motion } from "framer-motion";
import { personalData } from "../assets/Data/personal";
import { skillsData } from "../assets/data/skills";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tentang Saya
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Saya Dzaky, seorang Frontend Developer dari Blitar yang memiliki
              ketertarikan mendalam dalam menciptakan pengalaman web yang
              menarik dan fungsional. Selalu bersemangat untuk mempelajari
              teknologi terbaru dan menerapkan best practices dalam pengembangan
              web.
            </p>
            <p>
              Saat ini fokus pada pengembangan skill di React ecosystem dan
              berbagai tools modern untuk frontend development.
            </p>
          </motion.div>

          <motion.div
            className="skills-section"
            variants={skillsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="skill-category">
                  <h4>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className="skill-tags">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        variants={skillItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
