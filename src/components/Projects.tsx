import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Projects = () => {
  const { language, t } = useLanguage();

  const projects = [
    {
      title: language === 'fr' ? 'Application de Gestion Apicole' : 'Beekeeping Management App',
      description: language === 'fr'
        ? 'Application mobile complète pour la gestion des ruches avec géolocalisation, suivi des récoltes et monitoring en temps réel. Développée dans le cadre du projet de fin d\'études.'
        : 'Complete mobile application for hive management with geolocation, harvest tracking, and real-time monitoring. Developed as a final year project.',
      technologies: ['Ionic', 'Firebase', 'Geolocation', 'Real-time DB'],
      image: 'bg-gradient-to-br from-amber-400 to-orange-500',
    },
    {
      title: language === 'fr' ? 'Application de Livraison de Nourriture' : 'Food Delivery Application',
      description: language === 'fr'
        ? 'Application mobile de livraison de repas avec système de commande en temps réel, gestion des utilisateurs et suivi de livraison. Architecture basée sur Firebase pour des performances optimales.'
        : 'Food delivery mobile app with real-time ordering system, user management, and delivery tracking. Firebase-based architecture for optimal performance.',
      technologies: ['Ionic', 'Firebase', 'Real-time Tracking', 'User Management'],
      image: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: language === 'fr' ? 'Infrastructure IT Carrefour' : 'Carrefour IT Infrastructure',
      description: language === 'fr'
        ? 'Déploiement et maintenance d\'une infrastructure IT complète incluant serveurs Windows, Active Directory, et gestion de parc informatique pour une grande distribution.'
        : 'Deployment and maintenance of a complete IT infrastructure including Windows servers, Active Directory, and IT asset management for large-scale retail.',
      technologies: ['Windows Server', 'Active Directory', 'Network Security', 'IT Support'],
      image: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              {t('projects.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift group"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-['Space_Grotesk']">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
