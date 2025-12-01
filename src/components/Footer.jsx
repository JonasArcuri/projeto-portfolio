import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-8 px-6 bg-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-slate-400"
        >
          {t('footer.copyright')} {new Date().getFullYear()} Jonas Arcuri. {t('footer.rights')}
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

