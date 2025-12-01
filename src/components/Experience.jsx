import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Building2, Code, Server } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      company: 'Pichau',
      role: t('experience.pichau.role'),
      period: t('experience.pichau.period'),
      description: t('experience.pichau.description'),
      highlights: [
        t('experience.pichau.highlight1'),
        t('experience.pichau.highlight2'),
        t('experience.pichau.highlight3'),
      ],
      icon: Code,
      color: 'bg-blue-600',
      borderColor: 'border-blue-500',
      glowColor: 'shadow-blue-500/20',
    },
    {
      id: 2,
      company: 'TOTVS SC',
      role: t('experience.totvs.role'),
      period: t('experience.totvs.period'),
      description: t('experience.totvs.description'),
      highlights: [
        t('experience.totvs.highlight1'),
        t('experience.totvs.highlight2'),
        t('experience.totvs.highlight3'),
      ],
      icon: Server,
      color: 'bg-purple-600',
      borderColor: 'border-purple-500',
      glowColor: 'shadow-purple-500/20',
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative py-20 px-6 bg-slate-950 border-y border-slate-800"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('experience.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            {t('experience.subtitle')}
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`relative bg-slate-900 rounded-2xl p-8 border-2 ${exp.borderColor} ${exp.glowColor} shadow-2xl hover:shadow-3xl transition-all duration-300`}>
                {/* Company Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${exp.color} p-4 rounded-xl ${exp.glowColor} shadow-lg`}>
                      <exp.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="text-lg text-slate-300 font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    {t('experience.highlights')}
                  </h4>
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full ${exp.color} mt-2 flex-shrink-0`}></div>
                      <p className="text-slate-300 leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${exp.color} opacity-5 rounded-full blur-3xl`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 ${exp.color} opacity-5 rounded-full blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

