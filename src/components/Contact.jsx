import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'john@example.com',
    href: 'mailto:john@example.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
];

export default function Contact() {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // Replace with actual EmailJS or Formspree integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 rounded-xl outline-none transition-all duration-300
    ${
      darkMode
        ? 'bg-dark-100 text-white border-2 border-dark-100 focus:border-primary-500'
        : 'bg-gray-50 text-gray-900 border-2 border-gray-100 focus:border-primary-500'
    }
    ${focusedField === fieldName || formData[fieldName] ? 'pt-6 pb-2' : ''}
  `;

  const labelClasses = (fieldName) => `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${
      focusedField === fieldName || formData[fieldName]
        ? 'top-2 text-xs text-primary-500'
        : 'top-4 text-base ' + (darkMode ? 'text-gray-400' : 'text-gray-500')
    }
  `;

  return (
    <section
      id="contact"
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
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                Get In{' '}
              </span>
              <span className="text-gradient">Touch</span>
            </h2>
            <p
              className={`max-w-2xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3
                className={`text-2xl font-display font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Let's talk about your project
              </h3>
              <p
                className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                I'm currently available for freelance work and full-time
                opportunities. If you have a project that needs some creative
                touch, I'd love to hear about it.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                      darkMode
                        ? 'bg-dark-100 hover:bg-dark-100/80'
                        : 'bg-white hover:bg-gray-50 shadow-sm'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        darkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          darkMode ? 'text-primary-400' : 'text-primary-600'
                        }`}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${
                          darkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`font-medium ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  Follow me on social media
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        darkMode
                          ? 'bg-dark-100 text-gray-400 hover:text-primary-400 hover:bg-primary-500/20'
                          : 'bg-white text-gray-600 hover:text-primary-600 hover:bg-primary-50 shadow-sm'
                      }`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className={`p-8 rounded-2xl ${
                  darkMode ? 'bg-dark-200' : 'bg-white shadow-xl'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses('name')}
                    />
                    <label className={labelClasses('name')}>Your Name</label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses('email')}
                    />
                    <label className={labelClasses('email')}>Your Email</label>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputClasses('subject')}
                  />
                  <label className={labelClasses('subject')}>Subject</label>
                </div>

                {/* Message Field */}
                <div className="relative mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`${inputClasses('message')} resize-none`}
                  />
                  <label className={labelClasses('message')}>Your Message</label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
                  } text-white shadow-lg hover:shadow-primary-500/25`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane className="rotate-90" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-green-500/10 text-green-500 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-red-500/10 text-red-500 text-center"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}