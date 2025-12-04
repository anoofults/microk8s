import { motion } from 'framer-motion';
import chibi from '../assets/chibi_dark.png';

export const ChibiWidget = () => {
    return (
        <motion.div
            className="fixed bottom-4 right-4 z-50 cursor-pointer mix-blend-screen"
            initial={{ y: 0 }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 5, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="relative group">
                {/* Speech Bubble on Hover */}
                <div className="absolute -top-12 right-0 bg-white text-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-bold border-2 border-zoro-green pointer-events-none">
                    Yo! I'm lost... again.
                </div>

                <img
                    src={chibi}
                    alt="Chibi Zoro"
                    className="w-24 h-24 object-contain drop-shadow-lg filter brightness-110"
                />
            </div>
        </motion.div>
    );
};
