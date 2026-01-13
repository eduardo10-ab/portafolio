/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSun, 
  FaMoon, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaExternalLinkAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFlutter, 
  SiFirebase, 
  SiJavascript,
  SiDart,
  SiAdobexd
} from 'react-icons/si';

const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Ingeniero de Sistemas | Frontend Developer & UI/UX Designer',
      description: 'Especializado en crear experiencias digitales funcionales y visualmente atractivas',
      cta: 'Ver Proyectos',
      contact: 'Contactar'
    },
    about: {
      title: 'Sobre mí',
      text1: 'Ingeniero en Sistemas Informáticos graduado en 2025 con pasión por el desarrollo Frontend y el diseño UI/UX.',
      text2: 'Me especializo en cerrar la brecha entre el diseño visual y la implementación técnica. A través de proyectos freelance, he desarrollado soluciones completas gestionando desde la base de datos hasta la interfaz de usuario.',
      text3: 'Busco oportunidades para aportar valor como Desarrollador Web o Diseñador UI/UX, creando productos que no solo funcionen bien, sino que se vean increíbles.'
    },
    skills: {
      title: 'Habilidades Técnicas',
      web: 'Desarrollo Web',
      mobile: 'Desarrollo Móvil',
      backend: 'Backend & Herramientas',
      design: 'Diseño UI/UX'
    },
    projects: {
      title: 'Proyectos Destacados',
      viewProject: 'Ver Proyecto',
      fotoderma: {
        title: 'FotoDerma',
        description: 'Plataforma web integral para gestión de clínicas dermatológicas con administración digital de expedientes y consultas.',
        tech: 'React.js, Tailwind CSS, Node.js, Firebase'
      },
      dte: {
        title: 'Asistente DTE',
        description: 'Aplicación móvil para optimizar procesos tributarios mediante autocompletado de facturas del Ministerio de Hacienda.',
        tech: 'Flutter, Dart, Firebase'
      },
      tourism: {
        title: 'Portal Turístico',
        description: 'Sitio web y aplicación móvil dedicados a promover y gestionar sitios turísticos con experiencia multiplataforma.',
        tech: 'React, React Native'
      }
    },
    experience: {
      title: 'Experiencia',
      freelance: 'Freelance',
      volunteer: 'Voluntariado',
      mobile: 'Desarrollador Móvil',
      fullstack: 'Desarrollador Full Stack Web',
      robotics: 'Robótica - Glasswing',
      mobileDesc: 'Desarrollo de aplicación móvil para optimización de procesos tributarios con Flutter y Firebase.',
      fullstackDesc: 'Liderazgo en desarrollo de plataforma web para gestión de clínicas dermatológicas.',
      roboticsDesc: 'Desarrollo de curso de robótica para estudiantes, cubriendo desde programación básica hasta ensamblaje avanzado.'
    },
    contact: {
      title: 'Contacto',
      description: '¿Interesado en trabajar juntos? ¡Contáctame!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      location: 'Santa Ana, El Salvador',
      success: '¡Mensaje enviado con éxito!'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Systems Engineer | Frontend Developer & UI/UX Designer',
      description: 'Specialized in creating functional and visually appealing digital experiences',
      cta: 'View Projects',
      contact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      text1: 'Computer Systems Engineer graduated in 2025 with a passion for Frontend development and UI/UX design.',
      text2: 'I specialize in bridging the gap between visual design and technical implementation. Through freelance projects, I have developed complete solutions managing everything from database to user interface.',
      text3: 'Looking for opportunities to add value as a Web Developer or UI/UX Designer, creating products that not only work well, but look amazing.'
    },
    skills: {
      title: 'Technical Skills',
      web: 'Web Development',
      mobile: 'Mobile Development',
      backend: 'Backend & Tools',
      design: 'UI/UX Design'
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      fotoderma: {
        title: 'FotoDerma',
        description: 'Comprehensive web platform for dermatology clinic management with digital administration of records and consultations.',
        tech: 'React.js, Tailwind CSS, Node.js, Firebase'
      },
      dte: {
        title: 'DTE Assistant',
        description: 'Mobile application to optimize tax processes through auto-completion of Ministry of Finance invoices.',
        tech: 'Flutter, Dart, Firebase'
      },
      tourism: {
        title: 'Tourism Portal',
        description: 'Website and mobile application dedicated to promoting and managing tourist sites with cross-platform experience.',
        tech: 'React, React Native'
      }
    },
    experience: {
      title: 'Experience',
      freelance: 'Freelance',
      volunteer: 'Volunteer',
      mobile: 'Mobile Developer',
      fullstack: 'Full Stack Web Developer',
      robotics: 'Robotics - Glasswing',
      mobileDesc: 'Development of mobile application for tax process optimization with Flutter and Firebase.',
      fullstackDesc: 'Led development of web platform for dermatology clinic management.',
      roboticsDesc: 'Development of robotics course for students, covering from basic programming to advanced assembly.'
    },
    contact: {
      title: 'Contact',
      description: 'Interested in working together? Contact me!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      location: 'Santa Ana, El Salvador',
      success: 'Message sent successfully!'
    }
  }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = translations[language];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const skills = {
    web: [
      { name: 'React.js', icon: <FaReact className="text-4xl" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-4xl" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl" /> },
      { name: 'HTML5/CSS3', icon: <FaCode className="text-4xl" /> }
    ],
    mobile: [
      { name: 'Flutter', icon: <SiFlutter className="text-4xl" /> },
      { name: 'React Native', icon: <FaReact className="text-4xl" /> },
      { name: 'Dart', icon: <SiDart className="text-4xl" /> }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-4xl" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-4xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-4xl" /> },
      { name: 'Git', icon: <FaGitAlt className="text-4xl" /> }
    ],
    design: [
      { name: 'Figma', icon: <FaFigma className="text-4xl" /> },
      { name: 'Adobe XD', icon: <SiAdobexd className="text-4xl" /> }
    ]
  };

  const projects = [
    {
      title: t.projects.fotoderma.title,
      description: t.projects.fotoderma.description,
      tech: t.projects.fotoderma.tech,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: t.projects.dte.title,
      description: t.projects.dte.description,
      tech: t.projects.dte.tech,
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: t.projects.tourism.title,
      description: t.projects.tourism.description,
      tech: t.projects.tourism.tech,
      gradient: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              JF
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-purple-600 transition-colors"
                >
                  {t.nav[item]}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-purple-600 transition-colors"
                >
                  {t.nav[item]}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-purple-600 mb-2">{t.hero.greeting}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Joel Eduardo Fuentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              {t.hero.role}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                {t.hero.cta}
              </a>
              <a
                href="#contact"
                className={`px-8 py-3 border-2 border-purple-600 rounded-lg hover:bg-purple-600 transition-colors ${darkMode ? 'hover:text-white' : ''}`}
              >
                {t.hero.contact}
              </a>
            </div>

            <div className="flex justify-center gap-6 text-2xl">
              <a href="https://github.com/eduardo10-ab" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joel-eduardo-fuentes/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:fuentesjoel723@gmail.com" className="hover:text-purple-600 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <div className="space-y-4 text-lg text-gray-400">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  {t.skills[category]}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <div className="text-purple-600">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-4`}></div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-purple-600 mb-4">{project.tech}</p>
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                  {t.projects.viewProject} <FaExternalLinkAlt />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: t.experience.mobile,
                company: t.experience.freelance,
                period: language === 'es' ? 'Sep 2025 - Nov 2025' : 'Sep 2025 - Nov 2025',
                description: t.experience.mobileDesc
              },
              {
                title: t.experience.fullstack,
                company: t.experience.freelance,
                period: language === 'es' ? 'Jul 2025 - Ago 2025' : 'Jul 2025 - Aug 2025',
                description: t.experience.fullstackDesc
              },
              {
                title: t.experience.robotics,
                company: t.experience.volunteer,
                period: language === 'es' ? 'Mar 2023 - Mar 2024' : 'Mar 2023 - Mar 2024',
                description: t.experience.roboticsDesc
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-purple-600 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">{t.contact.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-purple-600" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:fuentesjoel723@gmail.com" className="hover:text-purple-600 transition-colors">
                    fuentesjoel723@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-purple-600" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/eduardo10-ab" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                    eduardo10-ab
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-purple-600" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/joel-eduardo-fuentes/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                    joel-eduardo-fuentes
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500 text-center"
                >
                  {t.contact.success}
                </motion.div>
              )}
              
              <input
                type="text"
                placeholder={t.contact.name}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:border-purple-600 focus:outline-none transition-colors`}
              />
              <input
                type="email"
                placeholder={t.contact.email}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:border-purple-600 focus:outline-none transition-colors`}
              />
              <textarea
                placeholder={t.contact.message}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:border-purple-600 focus:outline-none transition-colors`}
              />
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-medium"
              >
                {t.contact.send}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <p className="text-gray-400">
          © 2026 Joel Eduardo Fuentes. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
      </footer>
    </div>
  );
}