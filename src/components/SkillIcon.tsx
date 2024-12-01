import React from 'react';
import { 
  LayoutGrid, // React
  FileJson, // JavaScript
  FileCode2, // HTML/CSS
  Terminal, // Python
  Coffee, // Java
  Hash, // C
  Smartphone // Flutter
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  level: number;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  'React': <LayoutGrid className="w-8 h-8" />,
  'JavaScript': <FileJson className="w-8 h-8" />,
  'HTML/CSS': <FileCode2 className="w-8 h-8" />,
  'Python': <Terminal className="w-8 h-8" />,
  'Java': <Coffee className="w-8 h-8" />,
  'C': <Hash className="w-8 h-8" />,
  'Flutter': <Smartphone className="w-8 h-8" />
};

const SkillIcon = ({ name, level, index }: SkillIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 
                    hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex flex-col items-center gap-4">
          <div className="text-orange-400 group-hover:text-orange-300 transition-colors">
            {iconMap[name]}
          </div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className="h-full bg-gradient-to-r from-orange-400 to-red-600"
            />
          </div>
          <span className="text-sm text-gray-400">{level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillIcon;