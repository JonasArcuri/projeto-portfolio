import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTechIcon } from '../utils/techIcons';

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      {/* Title above card */}
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
      
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700">
        <div className="relative h-64 overflow-hidden">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="w-full h-full bg-stone-300 flex items-center justify-center">
              <span className="text-stone-500">Project Image</span>
            </div>
          )}
        </div>
        
        {/* Content below image */}
        <div className="p-6">
          {/* Technologies Icons */}
          {project.technologies && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 flex items-center justify-center bg-slate-700/50 backdrop-blur-sm rounded-lg border border-slate-600 hover:bg-slate-600 transition-all"
                  title={tech}
                >
                  {getTechIcon(tech)}
                </motion.div>
              ))}
            </div>
          )}
          
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-stone-900 rounded-lg text-sm font-semibold hover:bg-stone-100 transition-all"
            >
              <ExternalLink size={16} />
              {t('projects.checkLive')}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

