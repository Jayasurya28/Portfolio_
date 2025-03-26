import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-sm"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0300145e] pointer-events-none" />
      </div>

      <div className="relative p-6">
        <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0300145e] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="transform translate-y-full hover:translate-y-0 transition-transform duration-300">
          <button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
