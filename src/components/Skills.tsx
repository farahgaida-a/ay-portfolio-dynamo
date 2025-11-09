import { Server, Network, Wrench, Headset, Settings, Code, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { language, t } = useLanguage();

  const technicalSkills = [
    {
      category: t('skills.systems'),
      icon: Server,
      skills: ['Windows Server', 'Active Directory', 'Linux'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      category: t('skills.network'),
      icon: Network,
      skills: language === 'fr' 
        ? ['Équipements Cisco', 'Supervision', 'Sécurité réseau']
        : ['Cisco Equipment', 'Monitoring', 'Network Security'],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      category: t('skills.tools'),
      icon: Wrench,
      skills: ['Meti V9', 'SAP'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      category: t('skills.support'),
      icon: Headset,
      skills: language === 'fr'
        ? ['Incidents Niveau 1 & 2', 'Dépannage à distance']
        : ['Level 1 & 2 Incidents', 'Remote Troubleshooting'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      category: t('skills.management'),
      icon: Settings,
      skills: language === 'fr'
        ? ['Inventaire', 'Migrations', 'Sauvegardes', 'Conformité sécurité']
        : ['Inventory', 'Migrations', 'Backups', 'Security Compliance'],
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
    },
    {
      category: t('skills.programming'),
      icon: Code,
      skills: ['Python', 'JavaScript', 'PHP'],
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
  ];

  const softSkills = language === 'fr'
    ? ['Autonomie', 'Rigueur', 'Résolution de problèmes', 'Travail d\'équipe', 'Communication', 'Adaptabilité', 'Sens des responsabilités']
    : ['Autonomy', 'Rigor', 'Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Sense of Responsibility'];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              {t('skills.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift group"
              >
                <div className={`p-3 rounded-lg ${category.bgColor} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold font-['Space_Grotesk'] mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-['Space_Grotesk']">
                {t('skills.soft')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge key={index} className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
