import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContentSectionsProps {
  t: any;
  scrollToSection: (id: string) => void;
  formStatus: string;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContentSections({ t, scrollToSection, formStatus, handleSubmit }: ContentSectionsProps) {
  return (
    <>
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.about.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {t.about.values.map((value: any, idx: number) => (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl bg-secondary/30 hover:bg-accent/5 transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-accent/20"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={value.icon as any} size={28} className="text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-3 tracking-tight">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{value.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Наши проекты в действии</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="w-full">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F857467123532627%2F&show_text=true&width=267&t=0" 
                  className="w-full aspect-[267/591] border-none rounded-2xl shadow-lg"
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1167306382164406%2F&show_text=true&width=267&t=0" 
                  className="w-full aspect-[267/591] border-none rounded-2xl shadow-lg"
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1785971272359079%2F&show_text=true&width=267&t=0" 
                  className="w-full aspect-[267/591] border-none rounded-2xl shadow-lg"
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3793251294141067%2F&show_text=true&width=267&t=0" 
                  className="w-full aspect-[267/591] border-none rounded-2xl shadow-lg"
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="w-full">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1269611848256726%2F&show_text=true&width=267&t=0" 
                  className="w-full aspect-[267/591] border-none rounded-2xl shadow-lg"
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-3xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">{t.about.advantages.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.about.advantages.items.map((adv: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={adv.icon as any} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 tracking-tight">{adv.title}</h5>
                    <p className="text-sm text-muted-foreground font-light">{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.projects.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">{t.projects.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden h-80">
                <img 
                  src="https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/5fd24ec8-6969-4688-ac3f-dde4fe35c021.jpg"
                  alt="Utash Lake View Village"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-3 tracking-tight">{t.projects.project1.name}</h3>
                <p className="text-accent mb-6 flex items-center gap-2 font-medium">
                  <Icon name="MapPin" size={18} />
                  {t.projects.project1.location}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed font-light">{t.projects.project1.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {t.projects.project1.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-accent" />
                      </div>
                      <span className="text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl p-12 md:p-16 flex flex-col justify-center shadow-lg">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Icon name="TrendingUp" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t.projects.scalable.title}</h3>
              <p className="text-lg leading-relaxed opacity-95 font-light">{t.projects.scalable.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="homes" className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.homes.title}</h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light tracking-tight">{t.homes.subtitle}</p>
            <p className="text-lg text-muted-foreground font-light">{t.homes.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {t.homes.advantages.map((adv: any, idx: number) => (
              <div key={idx} className="p-8 rounded-2xl bg-secondary/30 hover:bg-accent/5 transition-all hover:-translate-y-1 border border-transparent hover:border-accent/20">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={adv.icon as any} size={24} className="text-accent" />
                </div>
                <h4 className="font-bold mb-2 tracking-tight">{adv.title}</h4>
                <p className="text-sm text-muted-foreground font-light">{adv.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.homes.types.map((type: any, idx: number) => {
              const images = [
                'https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/0d2e1467-8b2c-4920-8855-24c1b5ae5d8f.jpg',
                'https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/90224522-b249-4386-bfa9-49b1ae646ac3.jpg',
                'https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/4944f5ee-f53c-4e94-a6e7-d7ee34b9a154.jpg',
              ];
              return (
                <div key={idx} className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
                    <img 
                      src={images[idx]}
                      alt={type.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-xl shadow-lg">
                      <span className="font-bold text-primary text-sm">{type.area}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-2 tracking-tight">{type.name}</h4>
                    <p className="text-3xl font-bold text-accent mb-6">{type.price}</p>
                    <div className="space-y-3">
                      {type.features.map((feature: string, fidx: number) => (
                        <div key={fidx} className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="Check" size={10} className="text-accent" />
                          </div>
                          <span className="text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="partners" className="py-32 bg-gradient-to-b from-secondary/20 to-secondary/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.partners.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">{t.partners.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.partners.formats.map((format: any, idx: number) => (
              <div key={idx} className="p-10 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={format.icon as any} size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{format.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{format.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('contacts')} 
              size="lg" 
              className="text-base px-12 py-7 bg-primary hover:bg-primary/90 shadow-xl hover:scale-105 transition-all rounded-xl font-medium"
            >
              {t.partners.cta}
            </Button>
          </div>
        </div>
      </section>

      <section id="investors" className="py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] " />
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.investors.title}</h2>
            <p className="text-xl opacity-95 max-w-4xl mx-auto font-light leading-relaxed">{t.investors.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.investors.benefits.map((benefit: any, idx: number) => (
              <div key={idx} className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={benefit.icon as any} size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">{benefit.title}</h4>
                <p className="opacity-90 leading-relaxed font-light">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              onClick={() => scrollToSection('contacts')} 
              size="lg" 
              className="text-base px-12 py-7 bg-accent hover:bg-accent/90 text-white shadow-2xl hover:scale-105 transition-all rounded-xl font-medium border-0"
            >
              {t.partners.cta}
            </Button>
            <Button 
              onClick={() => scrollToSection('contacts')} 
              size="lg" 
              variant="outline"
              className="text-base px-12 py-7 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 shadow-2xl hover:scale-105 transition-all rounded-xl font-medium"
            >
              {t.investors.cta}
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-32 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight">{t.contact.title}</h2>

          <div className="rounded-3xl bg-white shadow-2xl border-2 border-secondary/50 p-10 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 tracking-tight">{t.contact.name}</label>
                <Input required placeholder={t.contact.name} className="h-14 rounded-xl border-2" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 tracking-tight">{t.contact.email}</label>
                  <Input required type="email" placeholder={t.contact.email} className="h-14 rounded-xl border-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 tracking-tight">{t.contact.phone}</label>
                  <Input required type="tel" placeholder={t.contact.phone} className="h-14 rounded-xl border-2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 tracking-tight">{t.contact.type}</label>
                <Select required>
                  <SelectTrigger className="h-14 rounded-xl border-2">
                    <SelectValue placeholder={t.contact.type} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">{t.contact.types.consultation}</SelectItem>
                    <SelectItem value="partnership">{t.contact.types.partnership}</SelectItem>
                    <SelectItem value="investment">{t.contact.types.investment}</SelectItem>
                    <SelectItem value="purchase">{t.contact.types.purchase}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 tracking-tight">{t.contact.message}</label>
                <Textarea required placeholder={t.contact.message} rows={6} className="rounded-xl border-2" />
              </div>

              <Button type="submit" size="lg" className="w-full h-16 text-lg shadow-lg hover:scale-[1.02] transition-transform rounded-xl font-medium">
                {t.contact.submit}
              </Button>

              {formStatus && (
                <div className="text-center p-5 bg-accent/10 rounded-xl animate-fade-in">
                  <p className="text-accent font-semibold">{formStatus}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}