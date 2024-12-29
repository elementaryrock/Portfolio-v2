import React from 'react';
import { motion } from 'framer-motion';

interface TechStack {
  icon: React.ReactNode;
  text: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: TechStack[];
  demoUrl?: string;
  sourceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  sourceUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass rounded-xl overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-sm glass rounded-full flex items-center gap-1">
              {tech.icon}
              {tech.text}
            </span>
          ))}
        </div>
        {(demoUrl || sourceUrl) && (
          <div className="mt-4 flex gap-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-400 hover:text-orange-300"
              >
                View Demo
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-400 hover:text-orange-300"
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
