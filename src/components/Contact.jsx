import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Copy, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada! (Esta é uma demonstração)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/JonasArcuri',
      color: 'bg-stone-700',
      hoverColor: 'hover:bg-stone-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jonas-arcuri-556457184/',
      color: 'bg-stone-600',
      hoverColor: 'hover:bg-stone-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5547988814411',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      icon: Mail,
      label: 'E-mail',
      href: 'mailto:jonasarcuri2020@gmail.com?subject=Contato%20do%20Portfolio',
      color: 'bg-amber-600',
      hoverColor: 'hover:bg-amber-700',
    },
  ];

  const openEmail = () => {
    window.location.href = 'mailto:jonasarcuri2020@gmail.com?subject=Contato%20do%20Portfolio';
  };

  return (
    <section
      id="contato"
      className="relative py-20 px-6 bg-slate-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-8"
        >
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:jonasarcuri2020@gmail.com?subject=Contato%20do%20Portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <Mail size={20} />
              {t('contact.getInTouch')} - Email
            </motion.a>
            
            <motion.a
              href="https://wa.me/5547988814411"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              WhatsApp
            </motion.a>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`w-12 h-12 ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center text-white transition-all shadow-md border border-slate-700`}
                title={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

