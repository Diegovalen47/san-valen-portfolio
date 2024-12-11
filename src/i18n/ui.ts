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
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.title': 'Hey, Soy Valentín',
    'hero.experience': '+2 años de experiencia',
    'hero.role': 'Desarrollador Frontend (Vue.js)',
    'hero.description': 'Experto en crear aplicaciones únicas desde cero hasta producción.',
    'hero.actions.view_cv': 'Ver CV',
    'hero.actions.contact_me': 'Contactarme',
    ...experiences.es,
    ...projects.es,
    'about.info_1': 'Soy Ingeniero de Software con énfasis en el Desarrollo Frontend, donde he dedicado la mayor parte de mi experiencia profesional. También tengo conocimientos en backend utilizado microservicios, bases de datos tanto Sql como NoSql e infraestructura cloud con AWS y Google Cloud. Gracias a lo anterior soy capaz de liderar aplicaciones desde inicio a producción conociendo cada etapa y parte del software.',
    'about.info_2': 'Por otra parte, soy egresado de Ingeniería de Sistemas e Informática de la Universidad Nacional de Colombia. Soy disciplinado, puntual, determinado y proactivo, capaz de trabajar y liderar entornos ágiles donde trabajar en equipo y la comunicación son cruciales.',
    'about.info_3': 'En mis tiempos libres me gusta jugar videojuegos, hacer café y en algunas ocasiones desarrollar proyectos personales o practicar retos de programación',
    'contact.title': '¿Quieres contactarme?',
    'contact.text': 'Puedes hacerlo a través de mi correo electrónico o mi número de WhatsApp.',
    'contact.platforms': 'También puedes encontrarme en las siguientes plataformas:',
    'footer': 'Hecho con Astro, Tailwind y Flowbite.'
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': 'Hey, I\'m Valentín',
    'hero.experience': '+2 years of experience',
    'hero.role': 'Frontend Developer (Vue.js)',
    'hero.description': 'Expert in creating unique applications from scratch to production.',
    'hero.actions.view_cv': 'View CV',
    'hero.actions.contact_me': 'Contact me',
    ...experiences.en,
    ...projects.en,
    'about.info_1': 'I am a Software Engineer with a focus on Frontend Development, where I have dedicated most of my professional experience. I also have knowledge in backend using microservices, databases both SQL and NoSQL, and cloud infrastructure with AWS and Google Cloud. Thanks to the above, I am able to lead applications from start to production, knowing each stage and part of the software.',
    'about.info_2': 'On the other hand, I am a graduate of Systems Engineering and Computer Science from the National University of Colombia. I am disciplined, punctual, determined, and proactive, capable of working and leading agile environments where teamwork and communication are crucial.',
    'about.info_3': 'In my free time I like to play video games, make coffee and sometimes develop personal projects or practice programming challenges',
    'contact.title': 'What\'s next?',
    'contact.text': 'If you want to contact me, you can do it through my email or my WhatsApp number.',
    'contact.platforms': 'You can also find me on the following platforms:',
    'footer': 'Made with Astro, Tailwind and Flowbite.'
  },
};
