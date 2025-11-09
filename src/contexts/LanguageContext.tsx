import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.role': 'Ingénieur Logiciel & Support IT',
    'hero.description': 'Étudiant en génie logiciel spécialisé dans les systèmes d\'information. Expérimenté en support IT, administration système et gestion réseau.',
    'hero.cta.contact': 'Me contacter',
    'hero.cta.download': 'Télécharger CV',
    
    // About
    'about.title': 'À propos de moi',
    'about.intro': 'Passionné par la technologie et l\'innovation',
    'about.description': 'Je suis étudiant en génie logiciel, actuellement en formation d\'ingénieur à TEK-UP University. Mon expérience combine le développement logiciel avec l\'administration système et le support IT, me donnant une vision complète des systèmes d\'information modernes.',
    'about.location': 'Soukra, Ariana, Tunisie',
    'about.education': 'Formation',
    'about.languages': 'Langues',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.current': 'Actuellement',
    
    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.systems': 'Administration Système',
    'skills.network': 'Réseaux',
    'skills.tools': 'Outils ERP',
    'skills.support': 'Support',
    'skills.management': 'Gestion IT',
    'skills.programming': 'Programmation',
    'skills.soft': 'Compétences Interpersonnelles',
    
    // Projects
    'projects.title': 'Projets Récents',
    
    // Contact
    'contact.title': 'Restons en contact',
    'contact.description': 'Je suis ouvert aux opportunités professionnelles et aux collaborations. N\'hésitez pas à me contacter !',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Conçu avec',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Software Engineer & IT Support',
    'hero.description': 'Software Engineering student specialized in Information Systems. Experienced in IT support, systems administration, and network management.',
    'hero.cta.contact': 'Contact Me',
    'hero.cta.download': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.intro': 'Passionate about technology and innovation',
    'about.description': 'I am a software engineering student, currently pursuing an engineering degree at TEK-UP University. My experience combines software development with systems administration and IT support, giving me a comprehensive view of modern information systems.',
    'about.location': 'Soukra, Ariana, Tunisia',
    'about.education': 'Education',
    'about.languages': 'Languages',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.current': 'Current',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.systems': 'Systems Administration',
    'skills.network': 'Networking',
    'skills.tools': 'ERP Tools',
    'skills.support': 'Support',
    'skills.management': 'IT Management',
    'skills.programming': 'Programming',
    'skills.soft': 'Soft Skills',
    
    // Projects
    'projects.title': 'Recent Projects',
    
    // Contact
    'contact.title': 'Let\'s Connect',
    'contact.description': 'I\'m open to professional opportunities and collaborations. Feel free to reach out!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'fr' || saved === 'en') ? saved : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
