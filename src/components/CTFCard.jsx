import { motion } from 'framer-motion';
import { HiShieldCheck, HiCalendar, HiChip } from 'react-icons/hi';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function CTFCard({ ctf, index, onClick }) {
    const { darkMode, themeMode } = useTheme();

    const difficultyColors = {
        Easy: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)', text: '#10b981' },
        Medium: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)', text: '#f59e0b' },
        Hard: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', text: '#ef4444' },
        Insane: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', text: '#8b5cf6' },
    };

    const platformIcons = {
        TryHackMe: SiTryhackme,
        HackTheBox: SiHackthebox,
    };

    const PlatformIcon = platformIcons[ctf.platform] || HiShieldCheck;
    const difficultyStyle = difficultyColors[ctf.difficulty] || difficultyColors.Medium;

    // Support both single image (image) and multiple images (images array)
    const displayImage = ctf.image || (ctf.images && ctf.images[0]) || null;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={onClick}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${darkMode
                    ? 'bg-dark-100 border border-dark-100 hover:border-primary-500/30'
                    : 'bg-white shadow-lg hover:shadow-2xl'
                } transition-all duration-500`}
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
                {displayImage ? (
                    <motion.img
                        src={displayImage}
                        alt={ctf.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop';
                        }}
                    />
                ) : (
                    <div className="w-full h-full bg-dark-200 flex items-center justify-center">
                        <HiShieldCheck className="text-6xl text-gray-600" />
                    </div>
                )}

                {/* Multiple Images Indicator */}
                {ctf.images && ctf.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 px-2 py-1 rounded-full bg-black/50 text-white text-xs">
                        📷 {ctf.images.length}
                    </div>
                )}

                {/* Overlay - Hide in hacker mode */}
                {themeMode !== 'hacker' && (
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ${darkMode
                                ? 'bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent'
                                : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                            } opacity-60 group-hover:opacity-90`}
                    />
                )}

                {/* Platform Badge */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 left-4 px-3 py-1.5 glass-card backdrop-blur-md rounded-full flex items-center gap-2"
                >
                    <PlatformIcon className="text-primary-400" size={14} />
                    <span className="text-xs font-semibold text-white">{ctf.platform}</span>
                </motion.div>

                {/* Difficulty Badge */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
                    style={{
                        backgroundColor: difficultyStyle.bg,
                        border: `1px solid ${difficultyStyle.border}`,
                        color: difficultyStyle.text,
                    }}
                >
                    {ctf.difficulty}
                </motion.div>

                {/* Title overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-bold truncate">{ctf.title}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3
                    className={`text-xl font-display font-bold mb-2 group-hover:text-primary-500 transition-colors truncate ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                >
                    {ctf.title}
                </h3>

                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                    <HiChip className="text-primary-400" size={16} />
                    <span className="text-sm text-primary-400 font-medium">{ctf.category}</span>
                </div>

                {/* Description */}
                <p
                    className={`text-sm mb-4 leading-relaxed line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                >
                    {ctf.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                    <HiCalendar size={14} />
                    <span>Completed: {new Date(ctf.completedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {ctf.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${darkMode
                                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                                    : 'bg-primary-50 text-primary-600 border border-primary-100'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                    {ctf.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full text-gray-400">
                            +{ctf.tags.length - 3} more
                        </span>
                    )}
                </div>

                {/* Walkthrough Badge */}
                {ctf.walkthroughEnabled && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <HiShieldCheck className="text-white" size={20} />
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

