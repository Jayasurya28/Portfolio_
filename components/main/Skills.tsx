"use client";

import {
  Skill_data,
} from "@/constants";
import React, { useEffect } from "react";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

const Skills = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Split skills into three groups
  const firstLine = Skill_data.slice(0, 7);
  const secondLine = Skill_data.slice(7, 12);
  const thirdLine = Skill_data.slice(12, 16);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <style>
        {`
          .skill-icon {
            display: inline-block;
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
            padding: 1rem;
          }
          .skill-icon i {
            font-size: 4rem;
          }
          .skill-icon:hover {
            transform: translateY(-5px);
          }
          .skill-icon:hover i {
            filter: brightness(1.2);
          }
          .devicon-github-original { color: #ffffff; }
          .devicon-nextjs-original-wordmark { color: #ffffff; }
          .devicon-flask-original { color: #ffffff; }
          .devicon-sqlalchemy-plain { color: #ffffff; }
          .devicon-googlecloud-plain-wordmark.colored { color: #4285F4; }
        `}
      </style>
      <SkillText />

      <motion.div 
        className="flex flex-col gap-20 items-center mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First line - 7 skills */}
        <motion.div 
          className="flex flex-row justify-center flex-wrap gap-20 items-center"
          variants={containerVariants}
        >
          {firstLine.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-icon"
              variants={itemVariants}
              title={skill.skill_name}
            >
              <i className={skill.icon}></i>
            </motion.div>
          ))}
        </motion.div>

        {/* Second line - 5 skills */}
        <motion.div 
          className="flex flex-row justify-center flex-wrap gap-20 items-center"
          variants={containerVariants}
        >
          {secondLine.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-icon"
              variants={itemVariants}
              title={skill.skill_name}
            >
              <i className={skill.icon}></i>
            </motion.div>
          ))}
        </motion.div>

        {/* Third line - 4 skills */}
        <motion.div 
          className="flex flex-row justify-center flex-wrap gap-20 items-center"
          variants={containerVariants}
        >
          {thirdLine.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-icon"
              variants={itemVariants}
              title={skill.skill_name}
            >
              <i className={skill.icon}></i>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute w-full h-full top-0 left-0 z-[-1]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
