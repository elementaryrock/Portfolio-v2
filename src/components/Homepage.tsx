import React from 'react';
import BlogCard from './BlogCard';
import TypewriterText from './TypewriterText';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Code, Braces, Globe, Github, Terminal, 
  Star, Laptop, BookOpen, LayoutGrid, FileJson, FileCode2,
  Coffee, Hash, Smartphone, Sparkles, Instagram, Youtube, Mail
} from 'lucide-react';
import SocialLinks from './SocialLinks';

interface HomepageProps {
  onBack: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} className="w-5 h-5" />
            Back
          </motion.button>
          <div className="flex items-center space-x-8">
            <motion.a
              href="#projects"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#skills"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#blog"
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.a>
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

          <TypewriterText />
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful web experiences with React & modern technologies
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
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
            <motion.a
              href="https://old.maanasnms.eu.org"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass glass-hover rounded-full flex items-center gap-2"
            >
              <Globe size={20} />
              Previous Portfolio
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/react.png" alt="React" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">React</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-gray-400">90%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/js.png" alt="JavaScript" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-gray-400">85%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/html.png" alt="HTML/CSS" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">HTML/CSS</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-gray-400">90%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/python.png" alt="Python" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Python</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-gray-400">80%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/java.png" alt="Java" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Java</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-gray-400">75%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/c.png" alt="C" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">C</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-gray-400">70%</span>
            </div>

            <div className="glass rounded-xl p-8 flex flex-col items-center">
              <img src="/public/images/flutter.png" alt="Flutter" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flutter</h3>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-400">40%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Marian Music Club"
              description="A vibrant community for music enthusiasts at Marian Engineering College."
              image="/images/music_club.png"
              techStack={[
                { icon: <Code size={16} />, text: "React" },
                { icon: <Braces size={16} />, text: "TypeScript" },
                { icon: <Laptop size={16} />, text: "Tailwind" },
              ]}
              sourceUrl="https://github.com/elementaryrock/marian_music_club_v2"
            />
            <ProjectCard
              title="Quiz & Oratory Club"
              description="Platform for quiz competitions and public speaking events."
              image="/images/qoc.png"
              techStack={[
                { icon: <Code size={16} />, text: "HTML" },
                { icon: <Laptop size={16} />, text: "CSS" },
                { icon: <Laptop size={16} />, text: "Tailwind" },
              ]}
              sourceUrl="https://github.com/elementaryrock/QOC"
            />
            <ProjectCard
              title="Foodhut"
              description="A modern food delivery application with real-time tracking."
              image="/images/foodhut.png"
              techStack={[
                { icon: <Code size={16} />, text: "HTML" },
                { icon: <Laptop size={16} />, text: "CSS" },
                { icon: <Braces size={16} />, text: "JavaScript" },
              ]}
              sourceUrl="https://github.com/elementaryrock/foodhut"
            />
            <ProjectCard
              title="Thack"
              description="A dummy hackathon website"
              image="/images/thack.png"
              techStack={[
                { icon: <Code size={16} />, text: "React" },
                { icon: <Braces size={16} />, text: "TypeScript" },
              ]}
              sourceUrl="https://github.com/elementaryrock/Thack-dummy-hackathon-website"
            />
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
      <footer className="relative py-8 mt-16">
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: <Instagram size={24} />, href: "https://instagram.com/maanasms", label: "Instagram", hoverColor: "hover:text-pink-500" },
                { icon: <Youtube size={24} />, href: "#", label: "YouTube", hoverColor: "hover:text-red-500" },
                { icon: <Github size={24} />, href: "#", label: "GitHub", hoverColor: "hover:text-purple-500" },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <circle cx="7" cy="4" r="1.8"/>
                      <circle cx="13" cy="4" r="1.8"/>
                      <circle cx="7" cy="10" r="1.8"/>
                      <circle cx="13" cy="10" r="1.8"/>
                      <circle cx="19" cy="10" r="1.8"/>
                      <circle cx="7" cy="16" r="1.8"/>
                      <circle cx="13" cy="16" r="1.8"/>
                    </svg>
                  ), 
                  href: "https://mubi.com/en/users/15171209", 
                  label: "Mubi", 
                  hoverColor: "hover:text-[#0066cc]" 
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-500 transition-colors duration-300 ${item.hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-800/0 via-red-800/5 to-red-800/0 blur-xl" />
              <p className="text-neutral-400 text-sm relative">
                <span className="font-light">{new Date().getFullYear()} Maanas M S.</span>
                <span className="text-neutral-500 ml-1">All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;