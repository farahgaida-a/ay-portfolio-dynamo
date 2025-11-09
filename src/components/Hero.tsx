import { Mail, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-['Inter']">
              {t('hero.greeting')}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk']">
              Aymen <span className="gradient-text">Mattoussi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground font-['Space_Grotesk']">
              {t('hero.role')}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group relative overflow-hidden"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.cta.contact')}
              <span className="absolute inset-0 bg-primary-glow opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              {t('hero.cta.download')}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Soukra, Ariana</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:aymen.mattoussii@gmail.com" className="hover:text-primary transition-colors">
                aymen.mattoussii@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
