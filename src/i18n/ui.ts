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
    'about.info_1': 'Soy Ingeniero de Software con +{years} años de experiencia entregando soluciones de producto, y trabajo principalmente con Python, TypeScript, Java, Kubernetes y AWS. Disfruto liderar funcionalidades de punta a punta: desde el diseño del sistema y la estimación de esfuerzo y costos hasta una implementación apoyada en IA para ser más productivo, la observabilidad y la mentoría de otros ingenieros. Me enfoco en construir soluciones escalables, alineadas con los objetivos de negocio, sin sacrificar la calidad del código.',
    'about.info_2': 'Soy egresado de Ingeniería de Sistemas e Informática de la Universidad Nacional de Colombia, con un promedio de 4,6/5,0. Me considero disciplinado, puntual, determinado y proactivo, y me desenvuelvo bien en entornos ágiles, tanto aportando como liderando, donde la colaboración y la comunicación son clave.',
    'about.info_3': 'Fuera del trabajo, me encanta jugar videojuegos, preparar café y pasar tiempo con mi familia y mis gatos.',
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
    'about.info_1': 'I am a Software Engineer with +{years} years of experience delivering product solutions, working mainly with Python, TypeScript, Java, Kubernetes and AWS. I enjoy owning features end to end: from system design and effort and cost estimation to AI-assisted implementation, observability and mentoring other engineers. I am committed to building scalable solutions that align with business goals without compromising code quality.',
    'about.info_2': 'I hold a degree in Systems Engineering and Computer Science from the National University of Colombia, graduating with a 4.6/5.0 GPA. I am disciplined, punctual, determined and proactive, and I thrive in agile environments, both contributing and leading, where collaboration and communication are key.',
    'about.info_3': 'Outside of work, I love playing video games, making coffee and spending time with my family and my cats.',
    'contact.title': 'What\'s next?',
    'contact.text': 'If you want to contact me, you can do it through my email or my WhatsApp number.',
    'contact.platforms': 'You can also find me on the following platforms:',
    'footer': 'Made with Astro, Tailwind and Flowbite.',
    'skills.cloud': 'Cloud Infrastructure',
    'skills.tools': 'Development Tools',
  },
};
