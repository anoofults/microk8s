import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

export const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax-like scale */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zoro-dark" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zoro-green to-zoro-accent mb-4 drop-shadow-[0_0_10px_rgba(23,185,120,0.5)]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    CHISHIYA
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Gaming & Anime Universe
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <button className="px-8 py-3 bg-transparent border-2 border-zoro-green text-zoro-green hover:bg-zoro-green hover:text-black transition-all duration-300 font-bold rounded-none uppercase tracking-wider shadow-[0_0_15px_rgba(23,185,120,0.3)] hover:shadow-[0_0_25px_rgba(23,185,120,0.6)]">
                        Enter the Realm
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zoro-dark to-transparent" />
        </div>
    );
};
