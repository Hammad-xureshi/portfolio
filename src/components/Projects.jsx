import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

// ✅ Import from portfolioData.js - NOT hardcoded
import { projects, projectCategories, socialLinks } from '../data/portfolioData';

export default function Projects() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  // Get GitHub link from socialLinks
  const githubLink = socialLinks.find(link => link.name === "GitHub")?.url || "https://github.com";

  return (
    <section
      id="projects"
      className={`section-padding ${darkMode ? 'bg-dark-200' : 'bg-white'}`}
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                My{' '}
              </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p
              className={`max-w-2xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Projects that showcase my skills in Python, AI, and Cyber Security.
            </p>
          </motion.div>

          {/* Projects Grid - Responsive based on number of projects */}
          <motion.div 
            layout 
            className={`grid gap-4 md:gap-6 lg:gap-8 ${
  filteredProjects.length === 1 
    ? 'grid-cols-1 max-w-xl mx-auto' 
    : filteredProjects.length === 2 
    ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' 
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
}`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className={`group relative rounded-2xl overflow-hidden ${
                    darkMode
                      ? 'bg-dark-100 border border-dark-100 hover:border-primary-500/30'
                      : 'bg-white shadow-lg hover:shadow-2xl'
                  } transition-all duration-500`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => {
                        // Fallback image if project image not found
                        e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        darkMode
                          ? 'bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent'
                          : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                      } opacity-60 group-hover:opacity-90`}
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="px-3 py-1.5 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                          ⭐ Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Action Buttons - Show on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
                          title="View Code"
                        >
                          <FaGithub size={18} />
                        </motion.a>
                      )}
                      {project.live && project.live !== "" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </motion.a>
                      )}
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3
                      className={`text-xl font-display font-bold mb-3 group-hover:text-primary-500 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                            darkMode
                              ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                              : 'bg-primary-50 text-primary-600 border border-primary-100'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More on GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={18} />
              View More on GitHub
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}