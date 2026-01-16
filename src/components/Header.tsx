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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors ${scrolled ? 'bg-primary' : 'bg-accent'}`}>
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>LEONIKS</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => handleScrollToSection('about')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.about}</button>
            <button onClick={() => handleScrollToSection('projects')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.projects}</button>
            <button onClick={() => handleScrollToSection('homes')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.homes}</button>
            <button onClick={() => handleScrollToSection('partners')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.partners}</button>
            <button onClick={() => handleScrollToSection('investors')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.investors}</button>
            <button onClick={() => handleScrollToSection('contacts')} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.contacts}</button>
          </div>

          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
              <SelectTrigger className={`w-[95px] h-10 rounded-xl border-2 font-medium text-sm ${scrolled ? 'bg-white border-secondary' : 'bg-white/10 text-white border-white/30 backdrop-blur-sm'}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">🇷🇺 RU</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
                <SelectItem value="cn">🇨🇳 CN</SelectItem>
              </SelectContent>
            </Select>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} className={scrolled ? 'text-primary' : 'text-white'} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 p-6 bg-white rounded-2xl shadow-2xl flex flex-col gap-4 animate-fade-in">
            <button onClick={() => handleScrollToSection('about')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium border-b border-secondary">{t.nav.about}</button>
            <button onClick={() => handleScrollToSection('projects')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium border-b border-secondary">{t.nav.projects}</button>
            <button onClick={() => handleScrollToSection('homes')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium border-b border-secondary">{t.nav.homes}</button>
            <button onClick={() => handleScrollToSection('partners')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium border-b border-secondary">{t.nav.partners}</button>
            <button onClick={() => handleScrollToSection('investors')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium border-b border-secondary">{t.nav.investors}</button>
            <button onClick={() => handleScrollToSection('contacts')} className="text-left py-3 text-foreground hover:text-accent transition-colors font-medium">{t.nav.contacts}</button>
          </div>
        )}
      </nav>
    </header>
  );
}