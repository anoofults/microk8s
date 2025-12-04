import React from 'react';
import { ChibiWidget } from './ChibiWidget';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-zoro-dark text-white relative selection:bg-zoro-green selection:text-black">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-40 bg-zoro-dark/80 backdrop-blur-md border-b border-zoro-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-zoro-green tracking-tighter">ChiShiYa</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="hover:text-zoro-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                                <a href="#about" className="hover:text-zoro-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                                <a href="#gaming" className="hover:text-zoro-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Gaming</a>
                                <a href="#anime" className="hover:text-zoro-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Anime</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-black py-8 mt-20 border-t border-zoro-gray">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ChiShiYa. All rights reserved.</p>
                </div>
            </footer>

            {/* Persistent Widget */}
            <ChibiWidget />
        </div>
    );
};
