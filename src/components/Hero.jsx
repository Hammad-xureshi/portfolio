import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks, images } from '../data/portfolioData';

export default function Hero() {
  const { darkMode, themeMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber py-20 md:py-0"
    >
      {/* Animated Orbs - Simplified for Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-0 w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl bg-primary-500/20"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-0 w-48 h-48 md:w-80 md:h-80 rounded-full blur-3xl bg-cyan-500/15"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />

      <div className="container-custom px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
        >
          {/* Profile Image - Shows First on Mobile */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 lg:flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 md:-inset-4 rounded-full"
                style={{
                  background: themeMode === 'hacker' 
                    ? 'conic-gradient(from 0deg, #cc0000, #8b0000, #ff0000, #cc0000)'
                    : 'conic-gradient(from 0deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-400" />
              </motion.div>

              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
                style={{
                  boxShadow: themeMode === 'hacker' ? '0 0 40px rgba(204, 0, 0, 0.5)' : '0 0 40px rgba(168, 85, 247, 0.3)',
                }}
              >
                <img
                  src={images.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face';
                  }}
                />

                {/* Gradient Overlay - Hide in hacker mode */}
                {themeMode !== 'hacker' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-primary-600/10" />
                )}
              </motion.div>

              {/* Floating Badge - Hidden on very small screens */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="hidden sm:block absolute -bottom-2 -right-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl glass-card"
              >
                <p className="text-xs md:text-sm font-medium text-gradient">
                  {personalInfo.degree}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left lg:flex-1">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {personalInfo.availabilityStatus}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-3 md:mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                <span className="text-white">Myself </span>
                <span className="text-gradient-animated">{personalInfo.firstName}</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="mb-3 md:mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
                {personalInfo.role}
              </h2>
              <p className="text-primary-400 text-sm md:text-lg mt-1">{personalInfo.tagline}</p>
            </motion.div>

            {/* Description - Shorter on mobile */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm md:text-base lg:text-lg mb-3 md:mb-4 text-gray-400 mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 mb-6 md:mb-8 justify-center lg:justify-start text-gray-500 text-sm md:text-base"
            >
              <div className="flex items-center gap-1">
                <HiLocationMarker className="text-primary-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-primary-500">•</span>
              <span>{personalInfo.university}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={images.resumeFile}
                download
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-xl glass-card text-gray-400 hover:text-primary-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} className="md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-primary-500/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 16] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-primary-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}