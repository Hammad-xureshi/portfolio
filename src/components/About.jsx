import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { aboutMe, images, personalInfo } from '../data/portfolioData';

export default function About() {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className={`section-padding ${darkMode ? 'bg-dark-200' : 'bg-white'}`}
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                About{' '}
              </span>
              <span className="text-gradient">Me</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Get to know me better — my journey, skills, and passion for cyber security.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                {/* Main Image Container */}
                <motion.div
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ✅ FIXED: object-cover + object-top for face focus */}
                  <img
                    src={images.aboutPhoto || images.profilePhoto}
                    alt={personalInfo.name}
                   className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative Border */}
                <div
                  className={`absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 ${
                    darkMode ? 'border-primary-500/30' : 'border-primary-200'
                  } -z-0`}
                />
                
                {/* Emoji Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                  className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl ${
                    darkMode ? 'bg-dark-100' : 'bg-white shadow-lg'
                  } flex items-center justify-center`}
                >
                  <span className="text-3xl">🛡️</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl md:text-3xl font-display font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {aboutMe.title}
              </h3>

              {/* Paragraphs */}
              <div className={`space-y-4 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {aboutMe.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutMe.quickInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`p-3 rounded-lg ${darkMode ? 'bg-dark-100' : 'bg-gray-50'}`}
                  >
                    <span className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
    {/* Progress Screenshots Section */}
<motion.div
  variants={itemVariants}
  className="mt-12"
>
  <h4
    className={`text-lg font-display font-semibold mb-6 ${
      darkMode ? 'text-white' : 'text-gray-900'
    }`}
  >
    🎮 Platform Progress
  </h4>

  <div className="flex flex-col md:flex-row gap-6">
    {/* TryHackMe */}
    <motion.a
      href="https://tryhackme.com/p/HammadNaeem"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className={`w-full md:w-1/2 rounded-xl overflow-hidden p-2 ${
        darkMode ? 'bg-dark-100' : 'bg-gray-50 shadow-md'
      }`}
    >
      <img
        src="/images/tryhackme-badge.png"
        alt="TryHackMe Progress"
        className="w-full rounded-lg"
      />
    </motion.a>

    {/* Second Screenshot */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-full md:w-1/2 rounded-xl overflow-hidden p-2 ${
        darkMode ? 'bg-dark-100' : 'bg-gray-50 shadow-md'
      }`}
    >
      <img
        src="/images/second-progress.jpeg"
        alt="CTF / HTB Progress"
        className="w-full rounded-lg"
      />
    </motion.div>
  </div>
</motion.div>


          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {aboutMe.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl text-center ${
                  darkMode ? 'bg-dark-100 border border-dark-100' : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  darkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                }`}>
                  <stat.icon className={`w-6 h-6 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`} />
                </div>
                <h4 className="text-3xl font-bold text-gradient mb-1">{stat.value}</h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}