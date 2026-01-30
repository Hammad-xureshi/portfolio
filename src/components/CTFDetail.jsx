import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiX, HiChevronLeft, HiChevronRight, HiCalendar, HiChip, HiCode, HiLightBulb, HiChevronDown, HiChevronUp
} from 'react-icons/hi';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function CTFDetail({ ctf, onClose }) {
    const { darkMode } = useTheme();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);

    if (!ctf) return null;

    // Support both single image (image) and multiple images (images array)
    const images = ctf.images || (ctf.image ? [ctf.image] : []);

    const platformIcons = {
        TryHackMe: SiTryhackme,
        HackTheBox: SiHackthebox,
    };

    const PlatformIcon = platformIcons[ctf.platform];

    const difficultyColors = {
        Easy: '#10b981',
        Medium: '#f59e0b',
        Hard: '#ef4444',
        Insane: '#8b5cf6',
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence>
            {ctf && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-dark-100' : 'bg-white'
                            } glass-card`}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full glass-card text-white hover:text-red-500 transition-colors"
                        >
                            <HiX size={24} />
                        </motion.button>

                        {/* Image Carousel */}
                        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                            {images.length > 0 ? (
                                <>
                                    <motion.img
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        src={images[currentImageIndex]}
                                        alt={`${ctf.title} - Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop';
                                        }}
                                    />

                                    {/* Image navigation arrows */}
                                    {images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-card text-white hover:text-primary-400 transition-colors"
                                            >
                                                <HiChevronLeft size={28} />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-card text-white hover:text-primary-400 transition-colors"
                                            >
                                                <HiChevronRight size={28} />
                                            </button>

                                            {/* Image counter */}
                                            <div className="absolute top-4 right-16 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm">
                                                {currentImageIndex + 1} / {images.length}
                                            </div>

                                            {/* Dots indicator */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                                                                ? 'bg-primary-500 w-8'
                                                                : 'bg-white/50 hover:bg-white/80'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full bg-dark-200 flex items-center justify-center">
                                    <HiShieldCheck className="text-6xl text-gray-600" />
                                </div>
                            )}

                            {/* Platform & Difficulty badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {ctf.platform && (
                                    <div className="px-3 py-1.5 glass-card backdrop-blur-md rounded-full flex items-center gap-2">
                                        {PlatformIcon && <PlatformIcon className="text-primary-400" size={14} />}
                                        <span className="text-xs font-semibold text-white">{ctf.platform}</span>
                                    </div>
                                )}
                                {ctf.difficulty && (
                                    <div
                                        className="px-3 py-1.5 glass-card backdrop-blur-md rounded-full text-xs font-semibold"
                                        style={{ color: difficultyColors[ctf.difficulty] }}
                                    >
                                        {ctf.difficulty}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            {/* Header */}
                            <div className="mb-6">
                                <h2 className={`text-2xl md:text-3xl font-display font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {ctf.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    {ctf.category && (
                                        <div className="flex items-center gap-2">
                                            <HiChip className="text-primary-400" />
                                            <span className="text-primary-400 font-medium">{ctf.category}</span>
                                        </div>
                                    )}
                                    {ctf.completedDate && (
                                        <div className="flex items-center gap-2">
                                            <HiCalendar />
                                            <span>
                                                {new Date(ctf.completedDate).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            {ctf.description && (
                                <div className="mb-6">
                                    <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        {ctf.description}
                                    </p>
                                </div>
                            )}

                            {/* Tags */}
                            {ctf.tags && ctf.tags.length > 0 && (
                                <div className="mb-8">
                                    <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Technologies & Techniques
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {ctf.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${darkMode
                                                        ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                                                        : 'bg-primary-50 text-primary-600 border border-primary-100'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Walkthrough Section */}
                            {ctf.walkthroughEnabled && ctf.walkthrough && (
                                <div className="mb-6">
                                    <button
                                        onClick={() => setIsWalkthroughOpen(!isWalkthroughOpen)}
                                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${darkMode
                                                ? 'bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/20'
                                                : 'bg-primary-50 hover:bg-primary-100 border border-primary-200'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <HiCode className="text-primary-500 text-xl" />
                                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                View Walkthrough
                                            </span>
                                        </div>
                                        {isWalkthroughOpen ? (
                                            <HiChevronUp className="text-primary-500" />
                                        ) : (
                                            <HiChevronDown className="text-primary-500" />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {isWalkthroughOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 space-y-6">
                                                    {/* Steps */}
                                                    {ctf.walkthrough.steps && ctf.walkthrough.steps.map((step, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className={`p-4 rounded-xl ${darkMode ? 'bg-dark-200' : 'bg-gray-50'
                                                                }`}
                                                        >
                                                            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                                Step {index + 1}: {step.title}
                                                            </h4>
                                                            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                {step.description}
                                                            </p>
                                                            {step.code && (
                                                                <pre className={`p-3 rounded-lg overflow-x-auto text-sm terminal-text ${darkMode ? 'bg-black/50' : 'bg-gray-900'
                                                                    }`}>
                                                                    <code>{step.code}</code>
                                                                </pre>
                                                            )}
                                                            {step.output && (
                                                                <p className="mt-2 text-xs text-green-400 italic">→ {step.output}</p>
                                                            )}
                                                        </motion.div>
                                                    ))}

                                                    {/* Tools Used */}
                                                    {ctf.walkthrough.tools && ctf.walkthrough.tools.length > 0 && (
                                                        <div className={`p-4 rounded-xl ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
                                                            <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                                🛠️ Tools Used
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {ctf.walkthrough.tools.map((tool) => (
                                                                    <span
                                                                        key={tool}
                                                                        className="px-3 py-1 rounded-full text-xs font-mono bg-primary-500/20 text-primary-400"
                                                                    >
                                                                        {tool}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Key Learnings */}
                                                    {ctf.walkthrough.learnings && ctf.walkthrough.learnings.length > 0 && (
                                                        <div className={`p-4 rounded-xl ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
                                                            <div className="flex items-center gap-2 mb-3">
                                                                <HiLightBulb className="text-yellow-500 text-xl" />
                                                                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                                    Key Learnings
                                                                </h4>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {ctf.walkthrough.learnings.map((learning, index) => (
                                                                    <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                                        <span className="text-primary-500 mr-2">▸</span>
                                                                        {learning}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            {/* Walkthrough Disabled Message */}
                            {!ctf.walkthroughEnabled && (
                                <div className={`p-4 rounded-xl ${darkMode ? 'bg-dark-200/50' : 'bg-gray-100'} border-2 border-dashed ${darkMode ? 'border-gray-700' : 'border-gray-300'
                                    }`}>
                                    <p className={`text-sm text-center ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                        🔒 Walkthrough not yet available for this challenge
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

