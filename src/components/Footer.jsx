import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 bg-gray-900 text-gray-400"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jonas Arcuri – Todos os direitos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

