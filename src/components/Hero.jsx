import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-slate-950"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700">
                {t('hero.greeting')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 font-medium"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                {t('hero.showWork')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-2xl transform -rotate-3"></div>
              <div className="relative w-full h-full bg-slate-950 rounded-2xl p-6 border border-slate-800 overflow-hidden">
                {/* Code Editor Visual */}
                <div className="h-full flex flex-col">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-xs ml-2">code.js</span>
                  </div>
                  
                  {/* Code Lines */}
                  <div className="flex-1 space-y-2 font-mono text-xs">
                    <div className="flex gap-4">
                      <span className="text-slate-600">1</span>
                      <span className="text-blue-400">const</span> <span className="text-purple-400">developer</span> <span className="text-slate-300">=</span> <span className="text-green-400">'Jonas'</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-600">2</span>
                      <span className="text-blue-400">const</span> <span className="text-purple-400">stack</span> <span className="text-slate-300">=</span> <span className="text-orange-400">[</span>
                    </div>
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600">3</span>
                      <span className="text-green-400">'React'</span><span className="text-slate-300">,</span>
                    </div>
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600">4</span>
                      <span className="text-green-400">'Node.js'</span><span className="text-slate-300">,</span>
                    </div>
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600">5</span>
                      <span className="text-green-400">'TypeScript'</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-600">6</span>
                      <span className="text-orange-400">]</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-600">7</span>
                      <span className="text-blue-400">return</span> <span className="text-purple-400">developer</span> <span className="text-slate-300">+</span> <span className="text-green-400">' builds magic'</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <p className="text-slate-400 text-xs text-center">Dynamic Web Magic</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

