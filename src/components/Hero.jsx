import React from "react";
import { motion } from "framer-motion";
import { personalData, socialLinks } from "../assets/data/personal";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Halo, saya <span className="highlight">{personalData.name}</span>
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            {personalData.role}
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            {personalData.summary}
          </motion.p>
          <motion.div className="hero-location" variants={itemVariants}>
            <span>📍 {personalData.location}</span>
          </motion.div>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Projects
            </motion.a>
            <motion.a
              href={`mailto:${personalData.email}`}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Saya
            </motion.a>
          </motion.div>
          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              Instagram
            </motion.a>
          </motion.div>
        </div>
        <motion.div className="hero-avatar" variants={imageVariants}>
          <img src={personalData.avatarUrl} alt={personalData.name} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
