import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  const { darkMode } = useTheme();
  
  // ✅ Agar testimonials empty hain toh kuch mat dikhao
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
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
                What People{' '}
              </span>
              <span className="text-gradient">Say</span>
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            {testimonials.length > 1 && (
              <>
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode
                      ? 'bg-dark-100 text-white hover:bg-primary-500'
                      : 'bg-white text-gray-600 hover:bg-primary-500 hover:text-white shadow-lg'
                  } transition-colors`}
                >
                  <HiChevronLeft size={24} />
                </motion.button>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode
                      ? 'bg-dark-100 text-white hover:bg-primary-500'
                      : 'bg-white text-gray-600 hover:bg-primary-500 hover:text-white shadow-lg'
                  } transition-colors`}
                >
                  <HiChevronRight size={24} />
                </motion.button>
              </>
            )}

            <div className="overflow-hidden px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`p-8 md:p-12 rounded-3xl text-center ${
                    darkMode ? 'bg-dark-100' : 'bg-gray-50'
                  }`}
                >
                  <FaQuoteLeft
                    className={`w-12 h-12 mx-auto mb-6 ${
                      darkMode ? 'text-primary-500/30' : 'text-primary-200'
                    }`}
                  />

                  <p
                    className={`text-lg md:text-xl leading-relaxed mb-8 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary-500/20"
                    />
                    <div className="text-left">
                      <h4
                        className={`font-display font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-500 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {testimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary-500'
                        : darkMode
                        ? 'bg-dark-100 hover:bg-gray-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}