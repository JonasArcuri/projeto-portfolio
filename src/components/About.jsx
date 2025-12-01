import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'React', color: 'bg-stone-700' },
    { name: 'Node.js', color: 'bg-stone-600' },
    { name: 'TypeScript', color: 'bg-stone-700' },
    { name: 'Express', color: 'bg-stone-600' },
    { name: 'Vue.js', color: 'bg-stone-500' },
    { name: 'GraphQL', color: 'bg-stone-600' },
  ];

  const priorities = [
    { text: t('about.priorities.collaboration') },
    { text: t('about.priorities.flexibility') },
    { text: t('about.priorities.improvement') },
  ];

  return (
    <section
      id="sobre"
      className="relative py-20 px-6 bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Priorities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('about.priorities.title')}
            </h3>
            {priorities.map((priority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                <p className="text-slate-300 leading-relaxed">{priority.text}</p>
              </motion.div>
            ))}

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('about.techStack')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg text-sm font-semibold text-center hover:bg-slate-700 transition-colors"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <h3 className="text-2xl font-semibold text-slate-300 mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="pt-8">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-slate-800 rounded-2xl transform rotate-3"></div>
                <div className="relative w-full h-full bg-slate-700 rounded-2xl overflow-hidden border-2 border-slate-600">
                  <img
                    src="/projects/Perfil.jpg"
                    alt="Jonas Arcuri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

