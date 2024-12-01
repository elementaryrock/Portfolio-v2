import { Github, Instagram, Youtube, Music2, Mail, Film, Music } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: <Instagram size={24} />, href: "https://instagram.com/maanasms", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Youtube size={24} />, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: <Github size={24} />, href: "#", label: "GitHub", color: "hover:text-purple-500" },
    { icon: <Film size={24} />, href: "#", label: "IMDb", color: "hover:text-yellow-500" },
    { icon: <Music size={24} />, href: "#", label: "Apple Music", color: "hover:text-pink-500" },
    { icon: <Mail size={24} />, href: "#", label: "Email", color: "hover:text-blue-500" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${link.color}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;