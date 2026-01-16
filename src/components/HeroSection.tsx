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
          src="https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/ab1a3f32-d4af-4122-a426-0d20dad0324e.jpg"
          alt="Modular homes on lakefront with forest"
          className="w-full h-full object-cover scale-105 animate-[scale-in_2s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/70" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in mb-8" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.1] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-[1.2] tracking-tight">
            {t.hero.subtitle}
          </p>
        </div>
        <div className="animate-fade-in mb-12" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
            {t.hero.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Button 
            onClick={() => scrollToSection('contacts')} 
            size="lg" 
            className="text-base px-12 py-7 bg-accent hover:bg-accent/90 text-white shadow-2xl hover:scale-105 transition-all rounded-xl font-medium"
          >
            {t.hero.cta1}
          </Button>
          <Button 
            onClick={() => scrollToSection('projects')} 
            size="lg" 
            variant="outline" 
            className="text-base px-12 py-7 bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-white/70 shadow-2xl hover:scale-105 transition-all rounded-xl font-medium"
          >
            {t.hero.cta2}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-wider font-light">{t.hero.scroll}</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
}