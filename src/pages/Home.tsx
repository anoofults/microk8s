import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';

const Section = ({ title, id, children, className = "" }: { title: string, id: string, children: React.ReactNode, className?: string }) => (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
        <div className="max-w-7xl mx-auto">
            <motion.h2
                className="text-4xl font-bold text-zoro-green mb-12 border-l-4 border-zoro-accent pl-4 uppercase"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
            {children}
        </div>
    </section>
);

export const Home = () => {
    return (
        <Layout>
            <Hero />

            <Section id="about" title="About Me" className="bg-zoro-dark">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Welcome to my digital sanctuary. I am <span className="text-zoro-accent font-bold">ChiShiYa</span>.
                        </p>
                        <p>
                            I'm passionate about the immersive worlds of gaming and the storytelling mastery of anime.
                            Here, I share my journey, my favorites, and my creations.
                        </p>
                    </div>
                    <div className="bg-zoro-gray/30 p-8 rounded-lg border border-zoro-green/20 backdrop-blur-sm hover:border-zoro-green/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between"><span>Class</span> <span className="text-zoro-green">Gamer / Otaku</span></li>
                            <li className="flex justify-between"><span>Level</span> <span className="text-zoro-green">99</span></li>
                            <li className="flex justify-between"><span>Weapon</span> <span className="text-zoro-green">Keyboard & Mouse</span></li>
                            <li className="flex justify-between"><span>Spirit</span> <span className="text-zoro-green">Zoro</span></li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section id="gaming" title="Gaming" className="bg-black/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="bg-zoro-gray/20 rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(23,185,120,0.2)] transition-all duration-300"
                            whileHover={{ y: -10 }}
                        >
                            <div className="h-48 bg-gray-800 animate-pulse group-hover:animate-none relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">Game Screenshot {i}</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zoro-accent transition-colors">Top Game {i}</h3>
                                <p className="text-gray-400 text-sm">Description of the game and why it's a favorite.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section id="anime" title="Anime Favorites" className="bg-zoro-dark">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">Anime Cover {i}</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-4">
                                <h4 className="text-white font-bold">Anime Title {i}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </Layout>
    );
};
