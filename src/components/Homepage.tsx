import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowLeft, Code, Braces, Globe, Github, Terminal, 
  Star, Laptop, BookOpen, LayoutGrid, FileJson, FileCode2,
  Coffee, Hash, Smartphone, Sparkles
} from 'lucide-react';
import SocialLinks from './SocialLinks';

interface HomepageProps {
  onBack: () => void;
}

const Homepage = ({ onBack }: HomepageProps) => {
  const skills = [
    { name: 'React', icon: <LayoutGrid className="w-8 h-8" />, level: 90 },
    { name: 'JavaScript', icon: <FileJson className="w-8 h-8" />, level: 85 },
    { name: 'HTML/CSS', icon: <FileCode2 className="w-8 h-8" />, level: 90 },
    { name: 'Python', icon: <Terminal className="w-8 h-8" />, level: 80 },
    { name: 'Java', icon: <Coffee className="w-8 h-8" />, level: 75 },
    { name: 'C', icon: <Hash className="w-8 h-8" />, level: 70 },
    { name: 'Flutter', icon: <Smartphone className="w-8 h-8" />, level: 40 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="hover:text-orange-400 transition-colors">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 animated-bg opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden glass p-1">
              <img
                src="/images/portrait.jpg"
                alt="Maanas M S"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-orange-400/50 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Front-end Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful web experiences with React & modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass glass-hover rounded-full flex items-center gap-2"
            >
              <Code size={20} />
              View Projects
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass glass-hover rounded-full flex items-center gap-2"
            >
              <Sparkles size={20} />
              Explore Skills
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-5" />
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black" />
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://marianmusicclub.netlify.app/">
              <ProjectCard 
                title="Marian Music Club"
                description="Official website for the Marian Music Club, built with React and modern web technologies"
                tech={['React', 'JavaScript', 'CSS']}
                image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
              />
            </a>
            <a href="https://qoc.pages.dev/">
              <ProjectCard 
                title="Quiz & Oratory Club"
                description="Website for the Quiz and Oratory Club showcasing events and activities"
                tech={['HTML', 'CSS']}
                image="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80"
              />
            </a>
            <a href="https://elementaryrock.github.io/foodhut/">
              <ProjectCard 
                title="FoodHut"
                description="A delightful website for food lovers to explore recipes and culinary experiences"
                tech={['HTML', 'CSS', 'JavaScript']}
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://blog.maanasms.eu.org/cinematic-gems-for-2023-my-favorite-films-to-watch-this-year">
              <BlogCard 
                title="Cinematic Gems for 2023: My Favorite Films to watch this Year"
                excerpt="There's nothing quite like the thrill of discovering a new cinematic gem that leaves ..."
                date="Apr 3, 2023"
                icon={<Smartphone />}
              />
            </a>
            <a href="https://www.cinephilethrills.eu.org/2022/05/the-worst-person-in-world-review.html">
              <BlogCard 
                title="The Worst Person in the World - Review"
                excerpt="'The Worst Person in the World' is a brilliant romantic drama that challenges our assumptions about..."
                date="March 10, 2024"
                icon={<LayoutGrid />}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <SocialLinks />
          <p className="mt-6 text-gray-400">© 2024 Maanas M S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ name, icon, level, index }: { name: string; icon: React.ReactNode; level: number; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-6 glass-hover transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-orange-400 transform hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-orange-400 to-red-600"
          />
        </div>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, tech, image }: { title: string; description: string; tech: string[]; image: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
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
          {tech.map((t, i) => (
            <span key={i} className="px-3 py-1 text-sm glass rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogCard = ({ title, excerpt, date, icon }: { title: string; excerpt: string; date: string; icon: React.ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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

export default Homepage;