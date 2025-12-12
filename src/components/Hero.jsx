import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks, images } from '../data/portfolioData';

export default function Hero() {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber"
    >
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="orb orb-purple w-[500px] h-[500px] top-0 left-0"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-0"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="orb orb-pink w-[300px] h-[300px] top-1/2 right-1/4"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />

      <div className="container-custom px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left lg:flex-1">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="badge-glow inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {personalInfo.availabilityStatus}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-white">Myself </span>

                <span className="text-gradient-animated">{personalInfo.firstName}</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">
                {personalInfo.role}
              </h2>
              <p className="text-primary-400 text-lg mt-1">{personalInfo.tagline}</p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base md:text-lg mb-4 text-gray-400"
            >
              {personalInfo.description}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-8 justify-center lg:justify-start text-gray-500"
            >
              <HiLocationMarker className="text-primary-400" />
              <span>{personalInfo.location}</span>
              <span className="mx-2 text-primary-500">•</span>
              <span>{personalInfo.university}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={images.resumeFile}
                download
                className="btn-secondary flex items-center gap-2"
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
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card text-gray-400 hover:text-primary-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="lg:flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-400" />
              </motion.div>
              
              {/* Second Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-primary-500/20"
              />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden neon-glow"
              >
                <img
                  src={images.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-cyan-500/10" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl glass-card"
              >
                <p className="text-sm font-medium text-gradient">
                  {personalInfo.degree}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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