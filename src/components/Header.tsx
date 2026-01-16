import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Language = 'ru' | 'en' | 'cn';

interface HeaderProps {
  scrolled: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  scrollToSection: (id: string) => void;
}

export default function Header({ scrolled, language, setLanguage, t, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>LEONIKS</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleScrollToSection('about')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.about}</button>
            <button onClick={() => handleScrollToSection('projects')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.projects}</button>
            <button onClick={() => handleScrollToSection('homes')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.homes}</button>
            <button onClick={() => handleScrollToSection('partners')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.partners}</button>
            <button onClick={() => handleScrollToSection('investors')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.investors}</button>
            <button onClick={() => handleScrollToSection('contacts')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.contacts}</button>
          </div>

          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
              <SelectTrigger className={`w-[90px] ${scrolled ? 'bg-white' : 'bg-white/10 text-white border-white/30'}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">🇷🇺 RU</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
                <SelectItem value="cn">🇨🇳 CN</SelectItem>
              </SelectContent>
            </Select>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} className={scrolled ? 'text-foreground' : 'text-white'} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3 animate-fade-in">
            <button onClick={() => handleScrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.about}</button>
            <button onClick={() => handleScrollToSection('projects')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.projects}</button>
            <button onClick={() => handleScrollToSection('homes')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.homes}</button>
            <button onClick={() => handleScrollToSection('partners')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.partners}</button>
            <button onClick={() => handleScrollToSection('investors')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.investors}</button>
            <button onClick={() => handleScrollToSection('contacts')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.contacts}</button>
          </div>
        )}
      </nav>
    </header>
  );
}
