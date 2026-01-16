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
      <section id="about" className="py-24 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.about.title}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
              <h3 className="text-xl font-semibold text-primary">{t.about.mission}</h3>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">{t.about.missionText}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.values.map((value: any, idx: number) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={value.icon as any} size={36} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/5fd24ec8-6969-4688-ac3f-dde4fe35c021.jpg"
                  alt="Utash Lake View Village"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">{t.projects.project1.name}</h3>
                <p className="text-primary mb-6 flex items-center gap-2 text-lg">
                  <Icon name="MapPin" size={22} />
                  {t.projects.project1.location}
                </p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{t.projects.project1.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {t.projects.project1.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden relative group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] animate-[spin_60s_linear_infinite]" />
              </div>
              <CardContent className="p-10 h-full flex flex-col justify-center relative z-10">
                <Icon name="TrendingUp" size={56} className="mb-8" />
                <h3 className="text-3xl font-bold mb-6">{t.projects.scalable.title}</h3>
                <p className="text-xl leading-relaxed opacity-95">{t.projects.scalable.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="homes" className="py-24 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.homes.title}</h2>
            <p className="text-xl text-muted-foreground">{t.homes.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
            {t.homes.advantages.map((adv: any, idx: number) => (
              <Card key={idx} className="text-center group hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={adv.icon as any} size={32} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{adv.title}</h4>
                  <p className="text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.homes.types.map((type: any, idx: number) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img 
                    src="https://cdn.poehali.dev/projects/5b3d3a75-4881-4847-afc4-fed5c0b70918/files/f49d75ed-1de9-4f54-ac36-b0cf31ee1ada.jpg"
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-primary">{type.area}</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h4 className="text-3xl font-bold mb-3">{type.name}</h4>
                  <p className="text-3xl font-bold text-primary mb-6">{type.price}</p>
                  <div className="space-y-3">
                    {type.features.map((feature: string, fidx: number) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={12} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.partners.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.partners.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {t.partners.formats.map((format: any, idx: number) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={format.icon as any} size={36} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{format.title}</h4>
                  <p className="text-muted-foreground text-lg">{format.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => scrollToSection('contacts')} size="lg" className="text-lg px-12 py-6 shadow-xl hover:scale-105 transition-transform">
              {t.partners.cta}
            </Button>
          </div>
        </div>
      </section>

      <section id="investors" className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] animate-[spin_60s_linear_infinite]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.investors.title}</h2>
            <p className="text-xl opacity-95 max-w-3xl mx-auto">{t.investors.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {t.investors.benefits.map((benefit: any, idx: number) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all hover:-translate-y-2 group">
                <CardContent className="p-10 text-center">
                  <Icon name={benefit.icon as any} size={48} className="mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                  <p className="opacity-95 text-lg">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline" className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform shadow-2xl border-0">
              {t.investors.cta}
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">{t.contact.title}</h2>

          <Card className="shadow-2xl border-2">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.contact.name}</label>
                  <Input required placeholder={t.contact.name} className="h-12" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.contact.email}</label>
                    <Input required type="email" placeholder={t.contact.email} className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t.contact.phone}</label>
                    <Input required type="tel" placeholder={t.contact.phone} className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">{t.contact.type}</label>
                  <Select required>
                    <SelectTrigger className="h-12">
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
                  <label className="block text-sm font-semibold mb-2">{t.contact.message}</label>
                  <Textarea required placeholder={t.contact.message} rows={6} />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg shadow-lg hover:scale-[1.02] transition-transform">
                  {t.contact.submit}
                </Button>

                {formStatus && (
                  <div className="text-center p-4 bg-primary/10 rounded-lg animate-fade-in">
                    <p className="text-primary font-semibold">{formStatus}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
