import { GraduationCap, Languages, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { language, t } = useLanguage();

  const education = [
    {
      school: 'TEK-UP University, Tunis',
      degree: language === 'fr' 
        ? 'Diplôme d\'Ingénieur en Logiciel et Systèmes d\'Information' 
        : 'Engineering Degree in Software and Information Systems',
      period: '2023 - Present',
    },
    {
      school: language === 'fr' 
        ? 'Institut Supérieur des Langues Appliquées et Informatique de Béja (ISLAIB)' 
        : 'Higher Institute of Applied Languages and Computer Science (ISLAIB), Béja',
      degree: language === 'fr'
        ? 'Licence Nationale en Génie Logiciel et Systèmes d\'Information'
        : 'National Bachelor\'s Degree in Software Engineering and Information Systems',
      period: '2020 - 2023',
    },
  ];

  const languages_data = [
    { name: 'Arabe', level: language === 'fr' ? 'Natif' : 'Native', levelEn: 'Native' },
    { name: language === 'fr' ? 'Français' : 'French', level: language === 'fr' ? 'Courant' : 'Fluent', levelEn: 'Fluent' },
    { name: language === 'fr' ? 'Anglais' : 'English', level: language === 'fr' ? 'Intermédiaire' : 'Intermediate', levelEn: 'Intermediate' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary font-medium">
              {t('about.intro')}
            </p>
          </div>

          <Card className="p-8 hover-lift">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{t('about.location')}</span>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-['Space_Grotesk']">
                  {t('about.education')}
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-primary font-medium">{edu.period}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Languages className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-['Space_Grotesk']">
                  {t('about.languages')}
                </h3>
              </div>
              <div className="space-y-4">
                {languages_data.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
