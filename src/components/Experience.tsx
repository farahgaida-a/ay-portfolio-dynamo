import { Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const Experience = () => {
  const { language, t } = useLanguage();

  const experiences = [
    {
      company: 'Ulysse Hyper Distribution (Carrefour)',
      role: language === 'fr' ? 'Technicien IT' : 'IT Technician',
      period: language === 'fr' ? 'Sep 2023 – Mai 2025' : 'Sep 2023 – May 2025',
      location: language === 'fr' ? 'Al Marsa, Tunisie' : 'Al Marsa, Tunisia',
      current: true,
      responsibilities: language === 'fr' ? [
        'Préparation et déploiement d\'équipements IT (installation et configuration matériel/logiciel)',
        'Intégration et migration de systèmes; gestion des licences et inventaires',
        'Exécution de sauvegardes, restaurations et application des procédures de sécurité',
        'Support technique Niveau 1 & 2 à distance et sur site',
        'Garantie de fiabilité, autonomie et respect des normes de sécurité',
      ] : [
        'Prepared and deployed IT equipment (hardware/software installation and configuration)',
        'Integrated and migrated systems; managed licenses and inventories',
        'Performed backups, restorations, and applied security procedures',
        'Provided Level 1 & 2 technical support remotely and on-site',
        'Ensured reliability, autonomy, and adherence to security standards',
      ],
    },
    {
      company: 'Progress Engineering',
      role: language === 'fr' ? 'Stagiaire Développement Mobile (PFE)' : 'Mobile Development Intern (Final Year Project)',
      period: language === 'fr' ? 'Fév – Juin 2023' : 'Feb – Jun 2023',
      location: language === 'fr' ? 'El Ghazala Tech Park, Tunisie' : 'El Ghazala Tech Park, Tunisia',
      current: false,
      responsibilities: language === 'fr' ? [
        'Conception et développement d\'une application mobile de gestion apicole',
        'Implémentation de fonctionnalités de géolocalisation, suivi des ruches et monitoring des récoltes',
        'Amélioration de l\'interface utilisateur pour une meilleure expérience',
      ] : [
        'Designed and developed a mobile app for beekeeping management',
        'Implemented features for geolocation, hive tracking, and harvest monitoring',
        'Improved user interface and experience for better usability',
      ],
    },
    {
      company: 'Progress Engineering',
      role: language === 'fr' ? 'Développeur Mobile (Stage d\'été)' : 'Mobile Developer (Summer Internship)',
      period: language === 'fr' ? 'Août 2022' : 'Aug 2022',
      location: language === 'fr' ? 'El Ghazala Tech Park, Tunisie' : 'El Ghazala Tech Park, Tunisia',
      current: false,
      responsibilities: language === 'fr' ? [
        'Développement d\'une application mobile de livraison de nourriture avec Firebase et Ionic',
        'Intégration d\'une base de données temps réel pour le suivi des commandes',
        'Collaboration en équipe pour livrer un prototype fonctionnel',
      ] : [
        'Developed a food delivery mobile application using Firebase and Ionic',
        'Integrated a real-time database for order tracking and user management',
        'Collaborated with a small team to ensure delivery of a functional prototype',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              {t('experience.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift border-l-4 border-l-primary"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold font-['Space_Grotesk'] text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <Badge className="w-fit">{t('experience.current')}</Badge>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
