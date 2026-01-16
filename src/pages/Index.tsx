import { useState, useEffect } from 'react';
import { translations, Language } from '@/translations';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

export default function Index() {
  const [language, setLanguage] = useState<Language>('ru');
  const [formStatus, setFormStatus] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(t.contact.success);
    setTimeout(() => setFormStatus(''), 5000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        scrolled={scrolled}
        language={language}
        setLanguage={setLanguage}
        t={t}
        scrollToSection={scrollToSection}
      />

      <HeroSection 
        t={t}
        scrollToSection={scrollToSection}
      />

      <ContentSections 
        t={t}
        scrollToSection={scrollToSection}
        formStatus={formStatus}
        handleSubmit={handleSubmit}
      />

      <Footer 
        t={t}
        language={language}
      />
    </div>
  );
}
