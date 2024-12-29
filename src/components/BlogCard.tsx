import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  icon: React.ReactNode;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 glass-hover"
    >
      <div className="text-orange-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <time className="text-sm text-gray-400">{date}</time>
    </motion.div>
  );
};

export default BlogCard;
