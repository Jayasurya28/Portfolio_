"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.jpg"
          title="AI Integrated Blog Application"
          description="Developed an AI-powered blog platform with intelligent content suggestions and optimization. Built a dynamic, responsive interface for seamless content management and user interaction. TOOLS USED - Flask, HTML, Bootstrap, SQLAlchemy, Alembic, Jinja2"
        />
        <ProjectCard
          src="/project2.jpg"
          title="Social Media Backend using FastAPI"
          description="A high-performance social media backend using FastAPI, enabling secure user authentication, post creation, likes, and comments. Designed for scalability, efficiency, and seamless API interactions. TOOLS USED - FastAPI, PostgreSQL, JWT, bcrypt, Pydantic, Alembic, Docker"
        />
        <ProjectCard
          src="/project3.jpg"
          title="Quiz Master"
          description="Quiz Master is a multi-user exam platform where the Admin manages quizzes, and Users take tests with structured subject-wise quizzes and performance tracking. TOOLS USED - Flask, HTML, CSS, Bootstrap, SQL Lite, bcrypt Authentication"
        />
      </div>
    </div>
  );
};

export default Projects;
