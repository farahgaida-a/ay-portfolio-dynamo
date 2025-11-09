import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'aymen.mattoussii@gmail.com',
      href: 'mailto:aymen.mattoussii@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+216 53 889 355',
      href: 'tel:+21653889355',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Soukra, Ariana, Tunisia',
      href: null,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift group text-center"
              >
                <div className={`p-4 rounded-full ${info.bgColor} w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center space-y-6">
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.open('mailto:aymen.mattoussii@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('contact.email')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
