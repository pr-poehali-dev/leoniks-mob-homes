import { useState, useEffect } from 'react';
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

type Language = 'ru' | 'en' | 'cn';

const translations = {
  ru: {
    nav: {
      about: 'О компании',
      projects: 'Проекты',
      homes: 'Модульные дома',
      partners: 'Партнёрам',
      investors: 'Инвесторам',
      contacts: 'Контакты',
    },
    hero: {
      title: 'Будущее жилья уже здесь',
      subtitle: 'Мобильные модульные дома для туризма и постоянного проживания',
      cta1: 'Получить консультацию',
      cta2: 'Стать партнёром',
      scroll: 'Листайте вниз',
    },
    about: {
      title: 'О компании LEONIKS',
      mission: 'Наша миссия',
      missionText: 'Создание комфортных, экологичных и масштабируемых пространств для жизни и отдыха с использованием инновационных модульных технологий.',
      values: [
        { icon: 'Leaf', title: 'Экологичность', text: 'Минимальное воздействие на природу' },
        { icon: 'Zap', title: 'Инновации', text: 'Современные технологии строительства' },
        { icon: 'Globe', title: 'Масштабируемость', text: 'Проекты по всему миру' },
        { icon: 'Users', title: 'Сообщество', text: 'Комфортная среда для людей' },
      ],
    },
    projects: {
      title: 'Наши проекты',
      subtitle: 'От концепции до реализации',
      project1: {
        name: 'Utash Lake View Village',
        location: 'Озеро Уташ, живописная локация',
        description: 'Жилой и туристический кластер с мобильными домами премиум-класса. Сочетание комфорта современного жилья и единения с природой.',
        features: ['50+ модульных домов', 'Развитая инфраструктура', 'Круглогодичное проживание', 'Инвестиционная модель'],
      },
      scalable: {
        title: 'Масштабируемая модель развития',
        description: 'Концепция LEONIKS позволяет быстро развертывать туристические и жилые кластеры в любых регионах с минимальными затратами времени и ресурсов.',
      },
    },
    homes: {
      title: 'Мобильные модульные дома',
      subtitle: 'Современное решение для комфортной жизни',
      advantages: [
        { icon: 'Truck', title: 'Мобильность', text: 'Возможность перемещения между локациями' },
        { icon: 'Leaf', title: 'Энергоэффективность', text: 'Низкое потребление ресурсов' },
        { icon: 'Banknote', title: 'Доступная цена', text: 'От 2.5 млн рублей' },
        { icon: 'Zap', title: 'Быстрая установка', text: 'Готовность за 2-4 недели' },
      ],
      types: [
        { name: 'Студия', area: '25 м²', price: 'от 2.5 млн ₽', features: ['1 комната', 'Кухня-гостиная', 'Санузел', 'Терраса'] },
        { name: 'Стандарт', area: '45 м²', price: 'от 4.2 млн ₽', features: ['2 комнаты', 'Кухня-гостиная', 'Санузел', 'Терраса'] },
        { name: 'Премиум', area: '65 м²', price: 'от 6.5 млн ₽', features: ['3 комнаты', 'Кухня-гостиная', '2 санузла', 'Панорамные окна'] },
      ],
    },
    partners: {
      title: 'Партнёрам',
      subtitle: 'Присоединяйтесь к развитию инновационных проектов',
      formats: [
        { icon: 'Handshake', title: 'Совместные проекты', text: 'Развитие локаций под ключ' },
        { icon: 'Factory', title: 'Производство', text: 'Изготовление модульных домов' },
        { icon: 'Wrench', title: 'Сервис и поддержка', text: 'Обслуживание инфраструктуры' },
      ],
      cta: 'Стать партнёром',
    },
    investors: {
      title: 'Инвесторам',
      subtitle: 'Прибыльные проекты с прозрачной моделью',
      benefits: [
        { icon: 'TrendingUp', title: 'Высокая окупаемость', text: 'ROI от 18% годовых' },
        { icon: 'Shield', title: 'Защищённость', text: 'Материальные активы' },
        { icon: 'BarChart3', title: 'Масштабируемость', text: 'Рост капитализации' },
      ],
      cta: 'Запросить инвестпакет',
    },
    contact: {
      title: 'Свяжитесь с нами',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      type: 'Тип запроса',
      types: {
        consultation: 'Консультация',
        partnership: 'Партнёрство',
        investment: 'Инвестиции',
        purchase: 'Покупка дома',
      },
      submit: 'Отправить',
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    },
    footer: {
      company: 'АНО «LEONIKS»',
      description: 'Инновационные решения для комфортной жизни',
      followUs: 'Мы в соцсетях',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      homes: 'Modular Homes',
      partners: 'Partners',
      investors: 'Investors',
      contacts: 'Contacts',
    },
    hero: {
      title: 'The Future of Living is Here',
      subtitle: 'Mobile modular homes for tourism and permanent residence',
      cta1: 'Get Consultation',
      cta2: 'Become a Partner',
      scroll: 'Scroll down',
    },
    about: {
      title: 'About LEONIKS',
      mission: 'Our Mission',
      missionText: 'Creating comfortable, eco-friendly and scalable spaces for living and recreation using innovative modular technologies.',
      values: [
        { icon: 'Leaf', title: 'Eco-Friendly', text: 'Minimal impact on nature' },
        { icon: 'Zap', title: 'Innovation', text: 'Modern construction technologies' },
        { icon: 'Globe', title: 'Scalability', text: 'Projects worldwide' },
        { icon: 'Users', title: 'Community', text: 'Comfortable environment for people' },
      ],
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'From concept to realization',
      project1: {
        name: 'Utash Lake View Village',
        location: 'Lake Utash, scenic location',
        description: 'Residential and tourist cluster with premium mobile homes. Combination of modern living comfort and unity with nature.',
        features: ['50+ modular homes', 'Developed infrastructure', 'Year-round living', 'Investment model'],
      },
      scalable: {
        title: 'Scalable Development Model',
        description: 'LEONIKS concept allows rapid deployment of tourist and residential clusters in any regions with minimal time and resources.',
      },
    },
    homes: {
      title: 'Mobile Modular Homes',
      subtitle: 'Modern solution for comfortable living',
      advantages: [
        { icon: 'Truck', title: 'Mobility', text: 'Possibility to move between locations' },
        { icon: 'Leaf', title: 'Energy Efficiency', text: 'Low resource consumption' },
        { icon: 'Banknote', title: 'Affordable Price', text: 'From $35,000' },
        { icon: 'Zap', title: 'Quick Installation', text: 'Ready in 2-4 weeks' },
      ],
      types: [
        { name: 'Studio', area: '270 sq ft', price: 'from $35,000', features: ['1 room', 'Kitchen-living room', 'Bathroom', 'Terrace'] },
        { name: 'Standard', area: '485 sq ft', price: 'from $58,000', features: ['2 rooms', 'Kitchen-living room', 'Bathroom', 'Terrace'] },
        { name: 'Premium', area: '700 sq ft', price: 'from $90,000', features: ['3 rooms', 'Kitchen-living room', '2 bathrooms', 'Panoramic windows'] },
      ],
    },
    partners: {
      title: 'Partners',
      subtitle: 'Join the development of innovative projects',
      formats: [
        { icon: 'Handshake', title: 'Joint Projects', text: 'Turnkey location development' },
        { icon: 'Factory', title: 'Production', text: 'Manufacturing modular homes' },
        { icon: 'Wrench', title: 'Service & Support', text: 'Infrastructure maintenance' },
      ],
      cta: 'Become a Partner',
    },
    investors: {
      title: 'Investors',
      subtitle: 'Profitable projects with transparent model',
      benefits: [
        { icon: 'TrendingUp', title: 'High Returns', text: 'ROI from 18% annually' },
        { icon: 'Shield', title: 'Security', text: 'Material assets' },
        { icon: 'BarChart3', title: 'Scalability', text: 'Capital growth' },
      ],
      cta: 'Request Investment Pack',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      type: 'Request Type',
      types: {
        consultation: 'Consultation',
        partnership: 'Partnership',
        investment: 'Investment',
        purchase: 'Home Purchase',
      },
      submit: 'Submit',
      success: 'Thank you! We will contact you shortly.',
    },
    footer: {
      company: 'LEONIKS ANO',
      description: 'Innovative solutions for comfortable living',
      followUs: 'Follow Us',
    },
  },
  cn: {
    nav: {
      about: '关于我们',
      projects: '项目',
      homes: '模块化住宅',
      partners: '合作伙伴',
      investors: '投资者',
      contacts: '联系方式',
    },
    hero: {
      title: '生活的未来已经到来',
      subtitle: '旅游和永久居住的移动模块化房屋',
      cta1: '获取咨询',
      cta2: '成为合作伙伴',
      scroll: '向下滚动',
    },
    about: {
      title: '关于 LEONIKS',
      mission: '我们的使命',
      missionText: '使用创新的模块化技术，创造舒适、环保和可扩展的生活和休闲空间。',
      values: [
        { icon: 'Leaf', title: '环保', text: '对自然的影响最小' },
        { icon: 'Zap', title: '创新', text: '现代建筑技术' },
        { icon: 'Globe', title: '可扩展性', text: '全球项目' },
        { icon: 'Users', title: '社区', text: '人们的舒适环境' },
      ],
    },
    projects: {
      title: '我们的项目',
      subtitle: '从概念到实现',
      project1: {
        name: 'Utash Lake View Village',
        location: 'Utash湖，风景优美的位置',
        description: '配备高级移动房屋的住宅和旅游综合体。现代生活舒适与自然和谐的结合。',
        features: ['50+模块化房屋', '发达的基础设施', '全年居住', '投资模式'],
      },
      scalable: {
        title: '可扩展的发展模式',
        description: 'LEONIKS概念允许在任何地区以最少的时间和资源快速部署旅游和住宅综合体。',
      },
    },
    homes: {
      title: '移动模块化房屋',
      subtitle: '舒适生活的现代解决方案',
      advantages: [
        { icon: 'Truck', title: '移动性', text: '可在不同地点之间移动' },
        { icon: 'Leaf', title: '节能', text: '低资源消耗' },
        { icon: 'Banknote', title: '价格实惠', text: '从250万卢布起' },
        { icon: 'Zap', title: '快速安装', text: '2-4周内准备就绪' },
      ],
      types: [
        { name: '单间', area: '25 平方米', price: '从250万卢布起', features: ['1个房间', '厨房-客厅', '浴室', '露台'] },
        { name: '标准', area: '45 平方米', price: '从420万卢布起', features: ['2个房间', '厨房-客厅', '浴室', '露台'] },
        { name: '高级', area: '65 平方米', price: '从650万卢布起', features: ['3个房间', '厨房-客厅', '2个浴室', '全景窗'] },
      ],
    },
    partners: {
      title: '合作伙伴',
      subtitle: '加入创新项目的发展',
      formats: [
        { icon: 'Handshake', title: '联合项目', text: '交钥匙地点开发' },
        { icon: 'Factory', title: '生产', text: '制造模块化房屋' },
        { icon: 'Wrench', title: '服务与支持', text: '基础设施维护' },
      ],
      cta: '成为合作伙伴',
    },
    investors: {
      title: '投资者',
      subtitle: '具有透明模式的盈利项目',
      benefits: [
        { icon: 'TrendingUp', title: '高回报', text: '年投资回报率从18%起' },
        { icon: 'Shield', title: '安全性', text: '物质资产' },
        { icon: 'BarChart3', title: '可扩展性', text: '资本增长' },
      ],
      cta: '申请投资包',
    },
    contact: {
      title: '联系我们',
      name: '姓名',
      email: '电子邮件',
      phone: '电话',
      message: '消息',
      type: '请求类型',
      types: {
        consultation: '咨询',
        partnership: '合作',
        investment: '投资',
        purchase: '购买房屋',
      },
      submit: '提交',
      success: '谢谢！我们会尽快与您联系。',
    },
    footer: {
      company: 'LEONIKS 自治非营利组织',
      description: '舒适生活的创新解决方案',
      followUs: '关注我们',
    },
  },
};

export default function Index() {
  const [language, setLanguage] = useState<Language>('ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
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
              <button onClick={() => scrollToSection('about')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.about}</button>
              <button onClick={() => scrollToSection('projects')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.projects}</button>
              <button onClick={() => scrollToSection('homes')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.homes}</button>
              <button onClick={() => scrollToSection('partners')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.partners}</button>
              <button onClick={() => scrollToSection('investors')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.investors}</button>
              <button onClick={() => scrollToSection('contacts')} className={`hover:text-primary transition-colors font-medium ${scrolled ? 'text-foreground' : 'text-white'}`}>{t.nav.contacts}</button>
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
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.about}</button>
              <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.projects}</button>
              <button onClick={() => scrollToSection('homes')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.homes}</button>
              <button onClick={() => scrollToSection('partners')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.partners}</button>
              <button onClick={() => scrollToSection('investors')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.investors}</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left py-2 hover:text-primary transition-colors font-medium">{t.nav.contacts}</button>
            </div>
          )}
        </nav>
      </header>

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
            {t.about.values.map((value, idx) => (
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
                  {t.projects.project1.features.map((feature, idx) => (
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
            {t.homes.advantages.map((adv, idx) => (
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
            {t.homes.types.map((type, idx) => (
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
                    {type.features.map((feature, fidx) => (
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
            {t.partners.formats.map((format, idx) => (
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
            {t.investors.benefits.map((benefit, idx) => (
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
    </div>
  );
}
