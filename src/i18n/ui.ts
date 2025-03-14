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
    'hero.experience': 'Ingeniero de Software con +3 años de experiencia',
    'hero.role': 'Especializado en Frontend con Vue.js y React.js',
    'hero.description': 'Experto en crear aplicaciones únicas desde cero hasta producción.',
    'hero.actions.view_cv': 'Ver CV',
    'hero.actions.contact_me': 'Contactarme',
    ...experiences.es,
    ...projects.es,
    'about.info_1': 'Soy un Ingeniero de Software con más de tres años de experiencia en desarrollo web, centrado principalmente en tecnologías de front-end como Vue.js, React.js, TypeScript y Sass. He gestionado exitosamente proyectos desde su inicio hasta producción, dominando tecnologías front-end, back-end y de infraestructura en la nube. Me comprometo a ofrecer soluciones escalables y de alta calidad que se alineen con los objetivos empresariales sin comprometer la calidad del código. Además, disfruto aprendiendo sobre algoritmos y estructuras de datos.',
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
    'hero.experience': 'Software Engineer with +3 years of experience',
    'hero.role': 'Specialized in Frontend with Vue.js and React.js',
    'hero.description': 'Expert in creating unique applications from scratch to production.',
    'hero.actions.view_cv': 'View CV',
    'hero.actions.contact_me': 'Contact me',
    ...experiences.en,
    ...projects.en,
    'about.info_1': 'I am a Software Engineer with over three years of experience in web development, primarily focusing on front-end technologies such as Vue.js, React.js, TypeScript, and Sass. I have successfully managed projects from inception to production by mastering front-end, back-end, and cloud infrastructure technologies. I am committed to delivering high-quality, scalable solutions that align with business objectives without compromising code quality. I also enjoy learning about algorithms and data structures.',
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
