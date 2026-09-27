import { experiences } from './translations/experiences';
import { projects } from './translations/projects';
export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'en';

export const ui = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia Profesional',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.title': 'Hey, Soy Valentín',
    'hero.experience': 'Ingeniero de Software con +{years} años de experiencia',
    'hero.role': 'Trayectoria comprobada entregando soluciones de producto',
    'hero.description': 'Construyendo sistemas backend complejos y de gran escala, así como aplicaciones frontend.',
    'hero.actions.view_cv': 'Ver CV',
    'hero.actions.contact_me': 'Conoce mi trabajo',
    ...experiences.es,
    ...projects.es,
    'about.info_1': 'Soy Ingeniero de Software con +{years} años de experiencia entregando soluciones de producto en sistemas backend complejos y de gran escala, pipelines de datos y aplicaciones frontend. Hoy trabajo principalmente con Node.js, Python, Java y Vue.js sobre Kubernetes y AWS, y disfruto liderar funcionalidades de punta a punta: desde el diseño del sistema y la estimación de esfuerzo y costos hasta producción, observabilidad y la mentoría de otros ingenieros. Estoy comprometido con la entrega de soluciones escalables y de alta calidad que se alinean con los objetivos de negocio sin comprometer la calidad del código.',
    'about.info_2': 'Por otra parte, soy egresado de Ingeniería de Sistemas e Informática de la Universidad Nacional de Colombia. Soy disciplinado, puntual, determinado y proactivo, capaz de trabajar y liderar entornos ágiles donde trabajar en equipo y la comunicación son cruciales.',
    'about.info_3': 'En mis tiempos libres me gusta jugar videojuegos, hacer café y en algunas ocasiones desarrollar proyectos personales o practicar retos de programación',
    'contact.title': '¿Quieres contactarme?',
    'contact.text': 'Puedes hacerlo a través de mi correo electrónico o mi número de WhatsApp.',
    'contact.platforms': 'También puedes encontrarme en las siguientes plataformas:',
    'footer': 'Hecho con Astro, Tailwind y Flowbite.',
    'skills.cloud': 'Infraestructura Cloud',
    'skills.tools': 'Herramientas de Desarrollo',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Professional Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': 'Hey, I\'m Valentín',
    'hero.experience': 'Software Engineer with +{years} years of experience',
    'hero.role': 'Proven track record delivering product solutions',
    'hero.description': 'Building large, complex backend systems and frontend applications.',
    'hero.actions.view_cv': 'View CV',
    'hero.actions.contact_me': 'See my work',
    ...experiences.en,
    ...projects.en,
    'about.info_1': 'I am a Software Engineer with +{years} years of experience delivering product solutions across large, complex backend systems, data pipelines and frontend applications. Today I work mainly with Node.js, Python, Java and Vue.js on Kubernetes and AWS, and I enjoy owning features end to end: from system design and effort and cost estimation to production, observability and mentoring other engineers. I am committed to delivering scalable, high-quality solutions that align with business goals without compromising code quality.',
    'about.info_2': 'On the other hand, I am a graduate of Systems Engineering and Computer Science from the National University of Colombia. I am disciplined, punctual, determined, and proactive, capable of working and leading agile environments where teamwork and communication are crucial.',
    'about.info_3': 'In my free time I like to play video games, make coffee and sometimes develop personal projects or practice programming challenges',
    'contact.title': 'What\'s next?',
    'contact.text': 'If you want to contact me, you can do it through my email or my WhatsApp number.',
    'contact.platforms': 'You can also find me on the following platforms:',
    'footer': 'Made with Astro, Tailwind and Flowbite.',
    'skills.cloud': 'Cloud Infrastructure',
    'skills.tools': 'Development Tools',
  },
};
