import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks, navLinks } from '../data/portfolioData';

export default function Footer() {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="py-12 bg-dark-500 border-t border-white/5"
    >
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-display font-bold inline-block mb-2">
                <span className="text-gradient">{personalInfo.logoInitials}</span>
                <span className="text-primary-400">.</span>
              </a>
              <p className="text-sm text-gray-500">
                {personalInfo.role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright - Your Name */}
              <p className="text-sm text-gray-500">
                © {currentYear} {personalInfo.name} — {personalInfo.tagline}
              </p>

              {/* Built with - Simple Text (No Heart) */}
              <p className="text-sm text-gray-500">
                Built with React & Tailwind CSS
              </p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <HiArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}