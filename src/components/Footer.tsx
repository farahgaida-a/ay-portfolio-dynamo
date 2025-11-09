import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aymen Mattoussi. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t('footer.built')} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
};
