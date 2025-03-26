"use client";

import {
  Backend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React, { useEffect } from "react";
import SkillText from "../sub/SkillText";
import Head from "next/head";
import { motion } from "framer-motion";

const Skills = () => {
  useEffect(() => {
    const skillIcons = document.querySelectorAll('.skill-icon i, .skill-icon img');
    
    const handleTouchStart = function(this: HTMLElement) {
      this.style.animation = 'float 0.5s infinite alternate ease-in-out';
    };

    const handleTouchEnd = function(this: HTMLElement) {
      this.style.animation = '';
    };

    skillIcons.forEach(icon => {
      icon.addEventListener('touchstart', handleTouchStart);
      icon.addEventListener('touchend', handleTouchEnd);
    });

    return () => {
      skillIcons.forEach(icon => {
        icon.removeEventListener('touchstart', handleTouchStart);
        icon.removeEventListener('touchend', handleTouchEnd);
      });
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

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 -mt-20"
        style={{ transform: "scale(0.9" }}
      >
        <style>
          {`
            .devicon-github-original, .devicon-nextjs-original-wordmark, 
            .devicon-flask-original, .devicon-sqlalchemy-plain {
              color: white;
            }
            .devicon-googlecloud-plain-wordmark.colored {
              color: #4285F4;
            }
            @keyframes float {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-20px); }
            }
            .skill-icon {
              display: inline-block;
              transition: transform 0.3s ease-in-out;
              cursor: pointer;
            }
            .skill-icon i, .skill-icon img {
              display: block;
              transition: transform 0.3s ease-in-out;
            }
            .skill-icon:hover i, .skill-icon:hover img {
              filter: drop-shadow(0 0 8px rgba(123, 74, 226, 0.5));
            }
          `}
        </style>
        <SkillText />

        <motion.div 
          className="flex flex-row justify-center flex-wrap mt-2 gap-24 items-center max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Skill_data.map((skill, index) => (
            <motion.div 
              key={index} 
              className="text-7xl skill-icon"
              variants={itemVariants}
            >
              <i className={`${skill.icon} ${skill.colored ? 'colored' : ''}`} style={{ fontSize: '5rem' }}></i>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-row justify-center flex-wrap mt-10 gap-24 items-center max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {Backend_skill.map((skill, index) => (
            <motion.div 
              key={index} 
              className="text-7xl skill-icon"
              variants={itemVariants}
            >
              {skill.skill_name === "Postman" ? (
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  alt="Postman"
                  style={{ width: '5rem', height: '5rem' }}
                />
              ) : (
                <i className={`${skill.icon} ${skill.colored ? 'colored' : ''}`} style={{ fontSize: '5rem' }}></i>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-row justify-center flex-wrap mt-10 gap-24 items-center max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          {Full_stack.map((skill, index) => (
            <motion.div 
              key={index} 
              className="text-7xl skill-icon"
              variants={itemVariants}
            >
              <i className={`${skill.icon} ${skill.colored ? 'colored' : ''}`} style={{ fontSize: '5rem' }}></i>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute w-full h-screen top-[5%]">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center">
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
    </>
  );
};

export default Skills; 