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
    'hero.experience': '+3 años de experiencia',
    'hero.role': 'Desarrollador Frontend (Vue.js & React.js)',
    'hero.description': 'Experto en crear aplicaciones únicas desde cero hasta producción.',
    'hero.actions.view_cv': 'Ver CV',
    'hero.actions.contact_me': 'Contactarme',
    ...experiences.es,
    ...projects.es,
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.title': 'Hey, I\'m Valentín',
    'hero.experience': '+3 years of experience',
    'hero.role': 'Frontend Developer (Vue.js & React.js)',
    'hero.description': 'Expert in creating unique applications from scratch to production.',
    'hero.actions.view_cv': 'View CV',
    'hero.actions.contact_me': 'Contact me',
    ...experiences.en,
    ...projects.en,
  },
};
