import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

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
      setMobileMenuOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  const navItems = [
    { id: 'home', key: 'home' },
    { id: 'sobre', key: 'about' },
    { id: 'experiencia', key: 'experience' },
    { id: 'projetos', key: 'projects' },
    { id: 'contato', key: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            {scrolled ? (
              <span className="text-white">Portfolio</span>
            ) : (
              <span className="text-white">Portfolio</span>
            )}
          </motion.div>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 font-medium text-sm transition-colors ${
                      scrolled
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t(`header.${item.key}`)}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('pt')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'pt'
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
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
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-slate-800"
            >
              <div className="px-6 py-4 space-y-4 bg-slate-900/95 backdrop-blur-lg">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors font-medium"
                  >
                    {t(`header.${item.key}`)}
                  </motion.button>
                ))}
                
                {/* Language Selector Mobile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <span className="text-slate-400 text-sm font-medium">Idioma:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                        language === 'en'
                          ? 'text-white bg-blue-600'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('pt');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                        language === 'pt'
                          ? 'text-white bg-blue-600'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      PT
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

