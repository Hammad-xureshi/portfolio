import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiViewGrid, HiFlag } from 'react-icons/hi';
import { SiTryhackme, SiHackthebox } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { ctfData, ctfPlatforms, ctfDifficulties } from '../data/portfolioData';
import CTFCard from './CTFCard';
import CTFDetail from './CTFDetail';

export default function CTF() {
    const { darkMode } = useTheme();
    const [activePlatform, setActivePlatform] = useState('all');
    const [activeDifficulty, setActiveDifficulty] = useState('all');
    const [selectedCTF, setSelectedCTF] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Filter CTFs based on selected platform and difficulty
    const filteredCTFs = ctfData.filter((ctf) => {
        const platformMatch = activePlatform === 'all' || ctf.platform === activePlatform;
        const difficultyMatch = activeDifficulty === 'all' || ctf.difficulty === activeDifficulty;
        return platformMatch && difficultyMatch;
    });

    const platformIcons = {
        'HiViewGrid': HiViewGrid,
        'SiTryhackme': SiTryhackme,
        'SiHackthebox': SiHackthebox,
        'HiFlag': HiFlag,
    };

    return (
        <>
            <section
                id="ctf"
                className={`section-padding ${darkMode ? 'bg-dark-400' : 'bg-gray-50'}`}
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
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <HiShieldCheck className="text-4xl md:text-5xl text-primary-500" />
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                        CTF{' '}
                                    </span>
                                    <span className="text-gradient">Challenges</span>
                                </h2>
                            </div>
                            <p
                                className={`max-w-2xl mx-auto text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                            >
                                Hands-on cybersecurity challenges showcasing penetration testing, exploitation techniques, and security analysis skills.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-4 justify-center mt-8">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3 glass-card rounded-xl"
                                >
                                    <div className="text-2xl font-bold text-gradient">{ctfData.length}</div>
                                    <div className="text-sm text-gray-400">Challenges Completed</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3 glass-card rounded-xl"
                                >
                                    <div className="text-2xl font-bold text-gradient">Top 2%</div>
                                    <div className="text-sm text-gray-400">TryHackMe Rank</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Platform Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mb-8"
                        >
                            <div className="flex flex-wrap justify-center gap-3">
                                {ctfPlatforms.map((platform) => {
                                    const Icon = platformIcons[platform.icon];
                                    return (
                                        <motion.button
                                            key={platform.id}
                                            onClick={() => setActivePlatform(platform.id)}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${activePlatform === platform.id
                                                    ? 'btn-primary'
                                                    : 'glass-card hover:border-primary-500/30'
                                                }`}
                                        >
                                            {Icon && <Icon size={16} />}
                                            {platform.label}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Difficulty Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap justify-center gap-3">
                                {ctfDifficulties.map((difficulty) => (
                                    <motion.button
                                        key={difficulty.id}
                                        onClick={() => setActiveDifficulty(difficulty.id)}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${activeDifficulty === difficulty.id
                                                ? 'btn-primary'
                                                : 'glass-card hover:border-primary-500/30'
                                            }`}
                                        style={
                                            activeDifficulty === difficulty.id && difficulty.color
                                                ? {
                                                    background: `linear-gradient(135deg, ${difficulty.color}, ${difficulty.color}dd)`,
                                                }
                                                : {}
                                        }
                                    >
                                        {difficulty.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTF Grid */}
                        <motion.div
                            layout
                            className={`grid gap-6 md:gap-8 ${filteredCTFs.length === 1
                                    ? 'grid-cols-1 max-w-2xl mx-auto'
                                    : filteredCTFs.length === 2
                                        ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                }`}
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredCTFs.map((ctf, index) => (
                                    <CTFCard
                                        key={ctf.id}
                                        ctf={ctf}
                                        index={index}
                                        onClick={() => setSelectedCTF(ctf)}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* No Results */}
                        {filteredCTFs.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-16"
                            >
                                <HiShieldCheck className="text-6xl text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400 text-lg">
                                    No CTF challenges found with the selected filters.
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    Add your challenges in src/data/ctfData.js
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* CTF Detail Modal */}
            <CTFDetail ctf={selectedCTF} onClose={() => setSelectedCTF(null)} />
        </>
    );
}

