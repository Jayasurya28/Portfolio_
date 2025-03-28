"use client";

import {
  Skill_data,
} from "@/constants";
import React, { useEffect, useState } from "react";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      className="flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden pb-10 pt-2"
      style={{ transform: "scale(0.9)" }}
    >
      <style>
        {`
          .skill-icon {
            display: inline-block;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            padding: 1rem;
            position: relative;
          }
          .skill-icon i {
            font-size: 4rem;
            color: #ffffff;
            transition: all 0.3s ease-in-out;
          }
          .skill-icon:hover {
            animation: none !important;
          }
          .skill-icon:hover i {
            filter: brightness(1.3);
          }
          .skill-icon.popped {
            animation: pop 0.4s ease-in-out forwards !important;
            z-index: 10;
          }
          .devicon-github-original { color: #ffffff; }
          .devicon-nextjs-original-wordmark { color: #ffffff; }
          .skill-icon i.devicon-flask-original-wordmark,
          .skill-icon i.devicon-flask-original-wordmark.colored {
            color: #ffffff !important;
            fill: #ffffff !important;
          }
          .devicon-sqlalchemy-plain { color: #ffffff; }
          .devicon-googlecloud-plain-wordmark.colored { color: #4285F4; }
        `}
      </style>
      <SkillText />

      <motion.div 
        className="flex flex-col gap-16 items-center mt-24"
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
              className={`skill-icon floating-animation float-delay-${(index % 5) + 1} ${hoveredIndex === index ? 'popped' : ''}`}
              variants={itemVariants}
              title={skill.skill_name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
              className={`skill-icon floating-animation float-delay-${((index + 3) % 5) + 1} ${hoveredIndex === index + firstLine.length ? 'popped' : ''}`}
              variants={itemVariants}
              title={skill.skill_name}
              onMouseEnter={() => setHoveredIndex(index + firstLine.length)}
              onMouseLeave={() => setHoveredIndex(null)}
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
              className={`skill-icon floating-animation float-delay-${((index + 1) % 5) + 1} ${hoveredIndex === index + firstLine.length + secondLine.length ? 'popped' : ''}`}
              variants={itemVariants}
              title={skill.skill_name}
              onMouseEnter={() => setHoveredIndex(index + firstLine.length + secondLine.length)}
              onMouseLeave={() => setHoveredIndex(null)}
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
