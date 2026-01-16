import Icon from '@/components/ui/icon';

interface FooterProps {
  t: any;
  language: 'ru' | 'en' | 'cn';
}

export default function Footer({ t, language }: FooterProps) {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <span className="font-bold text-2xl">LEONIKS</span>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.company}</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-80 flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@leoniks.com
              </p>
              <p className="text-sm opacity-80 flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-1">
                <Icon name="Facebook" size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-1">
                <Icon name="Youtube" size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:-translate-y-1">
                <Icon name="Instagram" size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
          <p>© 2026 {t.footer.company}. {language === 'ru' && 'Все права защищены.'}{language === 'en' && 'All rights reserved.'}{language === 'cn' && '版权所有。'}</p>
        </div>
      </div>
    </footer>
  );
}
