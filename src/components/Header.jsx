import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold text-gray-900 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </motion.div>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Contato
              </button>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

