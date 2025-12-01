import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Tailwind CSS',
    'Git',
    'SQL',
    'Java',
  ];

  return (
    <section
      id="sobre"
      className="py-20 px-6 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/projects/Perfil.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sou um desenvolvedor Full-Stack apaixonado por sistemas e interfaces
              modernas e intuitivas. Com experiência em React, Node.js e tecnologias
              modernas, busco sempre entregar soluções que combinam design
              elegante com performance e usabilidade excepcionais.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

