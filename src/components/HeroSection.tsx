import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  t: any;
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ t, scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/77aa6aea-131a-4fd3-a45e-f5c594fa7a37.jpg"
          alt="Modern modular eco village"
          className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">{t.hero.title}</h1>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">{t.hero.subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button onClick={() => scrollToSection('contacts')} size="lg" className="text-lg px-10 py-6 shadow-2xl hover:scale-105 transition-transform">
            {t.hero.cta1}
          </Button>
          <Button onClick={() => scrollToSection('partners')} size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50 shadow-2xl hover:scale-105 transition-transform">
            {t.hero.cta2}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-80">{t.hero.scroll}</span>
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>
  );
}
