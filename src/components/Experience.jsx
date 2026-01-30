import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiAcademicCap, HiBookOpen } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { experiences, certifications } from '../data/portfolioData';

export default function Experience() {
  const { darkMode, themeMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to get icon based on type
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return HiAcademicCap;
      case 'learning':
        return HiBookOpen;
      case 'work':
        return HiBriefcase;
      default:
        return HiAcademicCap;
    }
  };

  // Function to get gradient based on type
  const getGradient = (type) => {
    // In hacker theme, all gradients are red
    if (themeMode === 'hacker') {
      return 'from-primary-500 to-primary-600';
    }

    switch (type) {
      case 'education':
        return 'from-purple-500 to-pink-500';
      case 'learning':
        return 'from-primary-500 to-cyan-500';
      case 'work':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-primary-500 to-primary-600';
    }
  };

  return (
    <section
      id="experience"
      className={`section-padding ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}
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
                My Learning{' '}
              </span>
              <span className="text-gradient">Journey</span>
            </h2>
            <p
              className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              My educational path and continuous learning in Cyber Security and Development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto mb-20">
            {/* Timeline Line */}
            <div
              className={`absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 ${darkMode ? 'bg-dark-100' : 'bg-gray-200'
                }`}
            />

            {/* Timeline Items */}
            {experiences.map((item, index) => {
              const Icon = getIcon(item.type);
              const gradient = getGradient(item.type);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg"
                    style={{
                      background: themeMode === 'hacker'
                        ? 'linear-gradient(to bottom right, #cc0000, #8b0000)'
                        : item.type === 'education'
                          ? 'linear-gradient(to bottom right, #a855f7, #ec4899)'
                          : item.type === 'learning'
                            ? 'linear-gradient(to bottom right, #6366f1, #06b6d4)'
                            : 'linear-gradient(to bottom right, #22c55e, #14b8a6)'
                    }}
                  >
                    <Icon className="text-white text-xl" />
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`p-6 rounded-2xl ${darkMode
                        ? 'bg-dark-100 hover:bg-dark-100/80 border border-dark-100 hover:border-primary-500/30'
                        : 'bg-white shadow-lg hover:shadow-xl'
                        } transition-all duration-300`}
                    >
                      {/* Period Badge */}
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
                        style={{
                          background: themeMode === 'hacker'
                            ? 'linear-gradient(to right, #cc0000, #8b0000)'
                            : item.type === 'education'
                              ? 'linear-gradient(to right, #a855f7, #ec4899)'
                              : item.type === 'learning'
                                ? 'linear-gradient(to right, #6366f1, #06b6d4)'
                                : 'linear-gradient(to right, #22c55e, #14b8a6)'
                        }}
                      >
                        {item.period}
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-xl font-display font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                      >
                        {item.title}
                      </h3>

                      {/* Company/University */}
                      <p className="text-primary-500 font-medium mb-1">
                        {item.company}
                      </p>

                      {/* Location */}
                      <p
                        className={`text-sm mb-4 flex items-center gap-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                          }`}
                      >
                        <span>📍</span> {item.location}
                      </p>

                      {/* Description */}
                      <p
                        className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                      >
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                            >
                              <span className="text-primary-500 mt-0.5">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Courses Section */}
          {certifications && certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Courses Header */}
              <div className="text-center mb-10">
                <h3 className={`text-2xl md:text-3xl font-display font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  📚 Courses Completed
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Completed Udemy courses in Cyber Security & Development

                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-4 rounded-xl ${darkMode
                      ? 'bg-dark-100 border border-dark-100 hover:border-primary-500/30'
                      : 'bg-white shadow-md hover:shadow-lg'
                      } transition-all duration-300`}
                  >
                    {/* Icon */}
                    <div className="text-3xl mb-3">{cert.icon}</div>

                    {/* Course Name */}
                    <h4 className={`font-medium text-sm mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      {cert.name}
                    </h4>

                    {/* Platform & Status */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        {cert.platform}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium
                         ${cert.status === "Completed"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-500"
                          }`}
                      >
                        {cert.status}
                      </span>

                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}