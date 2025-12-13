import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { skillCategories, otherSkills } from '../data/portfolioData';

export default function Skills() {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className={`section-padding ${darkMode ? 'bg-dark-300' : 'bg-gray-50'}`}
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
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>My </span>
              <span className="text-gradient">Skills</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies and tools I've been learning and working with throughout my journey.
            </p>
          </motion.div>

          {/* Skills Grid - Using Data */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className={`text-xl font-display font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                        darkMode ? 'bg-dark-100 hover:bg-dark-100/80' : 'bg-white hover:shadow-xl'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          className="mb-4"
                        >
                          <skill.icon className="w-10 h-10 transition-colors duration-300" style={{ color: skill.color }} />
                        </motion.div>
                        <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {skill.name}
                        </h4>

                        {/* Progress Bar */}
                        <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                          darkMode ? 'bg-dark-200' : 'bg-gray-100'
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        <span className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        style={{ background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Skills Tags - Using Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className={`text-lg font-medium mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Other Skills & Concepts
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode
                      ? 'bg-dark-100 text-gray-300 hover:text-primary-400'
                      : 'bg-white text-gray-600 hover:text-primary-600 shadow-sm'
                  } transition-colors cursor-default`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}