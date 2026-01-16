import Icon from '@/components/ui/icon';

interface FooterProps {
  t: any;
  language: 'ru' | 'en' | 'cn';
}

export default function Footer({ t, language }: FooterProps) {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <span className="font-bold text-3xl tracking-tight">LEONIKS</span>
            </div>
            <p className="text-sm opacity-80 mb-8 leading-relaxed font-light max-w-md">{t.footer.description}</p>
            <p className="text-xs opacity-60 font-light">LEONIKS — пространство, в котором хочется жить и инвестировать</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">{t.footer.company}</h4>
            <div className="space-y-4">
              <a href="mailto:info@leoniks.com" className="text-sm opacity-80 flex items-center gap-3 hover:opacity-100 transition-opacity font-light">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={16} />
                </div>
                info@leoniks.com
              </a>
              <a href="tel:+79139719836" className="text-sm opacity-80 flex items-center gap-3 hover:opacity-100 transition-opacity font-light">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                +7 913 971-98-36
              </a>
              <a href="tel:+79331719836" className="text-sm opacity-80 flex items-center gap-3 hover:opacity-100 transition-opacity font-light">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                +7 933 171-98-36
              </a>
              <a href="tel:+79182422836" className="text-sm opacity-80 flex items-center gap-3 hover:opacity-100 transition-opacity font-light">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} />
                </div>
                +7 918 242-28-36
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-tight">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-all hover:scale-110">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-all hover:scale-110">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent transition-all hover:scale-110">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm opacity-70 font-light">© 2026 {t.footer.company}. {language === 'ru' && 'Все права защищены.'}{language === 'en' && 'All rights reserved.'}{language === 'cn' && '版权所有。'}</p>
        </div>
      </div>
    </footer>
  );
}