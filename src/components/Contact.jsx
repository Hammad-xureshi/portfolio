import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, socialLinks, contactInfo } from '../data/portfolioData';

// Icon mapping
const iconMap = {
  HiMail: HiMail,
  HiPhone: HiPhone,
  HiLocationMarker: HiLocationMarker,
};

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
    bg-white/5 text-white border border-white/10 
    focus:border-primary-500 focus:bg-primary-500/5
    ${focusedField === fieldName || formData[fieldName] ? 'pt-6 pb-2' : ''}
  `;

  const labelClasses = (fieldName) => `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${
      focusedField === fieldName || formData[fieldName]
        ? 'top-2 text-xs text-primary-400'
        : 'top-4 text-base text-gray-500'
    }
  `;

  return (
    <section
      id="contact"
      className="section-padding bg-cyber-dark"
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
              <span className="text-white">Get In </span>
              <span className="text-gradient">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-white">
                Let's talk about your project
              </h3>
              <p className="mb-8 text-gray-400">
                I'm currently available for internships and freelance work. 
                If you have a project that needs some creative touch, I'd love to hear about it.
              </p>

              {/* Contact Info Cards - From portfolioData.js */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl glass-card transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-primary-400" />}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium text-white">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm mb-4 text-gray-500">
                  Follow me on social media
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-card">
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
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                    className="mt-4 p-4 rounded-xl bg-green-500/10 text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl bg-red-500/10 text-red-400 text-center"
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