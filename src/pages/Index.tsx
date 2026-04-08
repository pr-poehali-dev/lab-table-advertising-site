import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О компании" },
  { id: "faq", label: "FAQ" },
  { id: "contacts", label: "Контакты" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Стол лабораторный СЛ-1500",
    category: "Рабочие столы",
    price: "от 48 500 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: "Хит продаж",
    specs: {
      "Размеры": "1500 × 750 × 900 мм",
      "Столешница": "Постформинг HPL 12 мм",
      "Каркас": "Сталь 1.5 мм, порошковая окраска",
      "Нагрузка": "до 150 кг",
      "Покрытие": "Химически стойкое, RAL 7035",
      "Регулировка высоты": "880–930 мм",
    },
  },
  {
    id: 2,
    name: "Стол вытяжной СВ-1200",
    category: "Вытяжные столы",
    price: "от 72 000 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: "Новинка",
    specs: {
      "Размеры": "1200 × 800 × 2200 мм",
      "Скорость воздуха": "0.5–1.5 м/с",
      "Двигатель": "400 Вт, частотный привод",
      "Фильтрация": "HEPA H14 + угольный",
      "Освещение": "LED 24 Вт, 5500 K",
      "Материал": "Сталь холоднокатаная",
    },
  },
  {
    id: 3,
    name: "Стол весовой СВЕ-900",
    category: "Весовые столы",
    price: "от 35 200 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: null,
    specs: {
      "Размеры": "900 × 650 × 750 мм",
      "Вибрация": "< 0.001 мм/с",
      "Столешница": "Гранит, 50 мм",
      "Опоры": "Регулируемые антивибрационные",
      "Нагрузка": "до 80 кг",
      "Класс точности": "I (специальный)",
    },
  },
  {
    id: 4,
    name: "Шкаф реактивов ШР-800",
    category: "Шкафы хранения",
    price: "от 28 900 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: null,
    specs: {
      "Размеры": "800 × 500 × 1800 мм",
      "Полок": "4 (регулируемые)",
      "Вентиляция": "Принудительная, 80 м³/ч",
      "Материал": "Сталь + антикоррозийное покрытие",
      "Замок": "Ключевой, класс B",
      "Макс. нагрузка полки": "50 кг",
    },
  },
  {
    id: 5,
    name: "Стол островной СО-2000",
    category: "Островные столы",
    price: "от 95 000 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: "Премиум",
    specs: {
      "Размеры": "2000 × 1500 × 900 мм",
      "Столешница": "Эпоксидная смола 25 мм",
      "Доступ": "С 4 сторон",
      "Коммуникации": "Газ, вода, электричество",
      "Нагрузка": "до 300 кг",
      "Исполнение": "Антистатическое",
    },
  },
  {
    id: 6,
    name: "Мойка лабораторная МЛ-600",
    category: "Мойки",
    price: "от 18 400 ₽",
    image: "https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg",
    badge: null,
    specs: {
      "Размеры": "600 × 500 × 200 мм",
      "Материал": "Полипропилен PP-H",
      "Подключение": "DN40, горячая/холодная вода",
      "Слив": "DN50",
      "Устойчивость": "HF, кислоты, щёлочи",
      "Исполнение": "Встраиваемое",
    },
  },
];

const FAQ_ITEMS = [
  {
    q: "Какой гарантийный срок на оборудование?",
    a: "На всё лабораторное оборудование предоставляется гарантия 24 месяца с даты поставки. На столешницы из эпоксидной смолы — 36 месяцев.",
  },
  {
    q: "Возможно ли изготовление по индивидуальным размерам?",
    a: "Да, мы принимаем заказы на нестандартные размеры. Срок изготовления — от 15 рабочих дней. Минимальная партия — 1 единица.",
  },
  {
    q: "Как осуществляется доставка и монтаж?",
    a: "Доставляем по всей России транспортными компаниями или собственным транспортом по Москве и МО. Монтаж и пуско-наладка — в стоимость или отдельно по договору.",
  },
  {
    q: "Можно ли посмотреть образцы материалов?",
    a: "Да, наш шоурум находится в Москве. Также высылаем образцы столешниц почтой — свяжитесь с менеджером для уточнения деталей.",
  },
  {
    q: "Работаете ли вы с государственными организациями?",
    a: "Работаем с юридическими лицами и ИП, принимаем оплату по безналичному расчёту. Участвуем в государственных закупках по 44-ФЗ и 223-ФЗ.",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-golos text-[#1a1f2e]">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1f2e] rounded-sm flex items-center justify-center">
              <Icon name="FlaskConical" size={16} className="text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ЛабТех</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#0e92b8] ${
                  activeSection === link.id ? "text-[#0e92b8]" : "text-[#5a6070]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1a1f2e] hover:text-[#0e92b8] transition-colors">
              <Icon name="Phone" size={14} />
              +7 (495) 123-45-67
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm font-medium text-[#5a6070] hover:text-[#0e92b8] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#0e92b8] uppercase mb-4">
              Профессиональное оборудование
            </span>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-[#1a1f2e] mb-6">
              Оснащение<br />
              <span className="italic text-[#0e92b8]">лабораторий</span><br />
              любого класса
            </h1>
            <p className="text-[#5a6070] text-lg leading-relaxed mb-8 max-w-md">
              Проектируем, производим и монтируем лабораторную мебель и оборудование — от учебных кабинетов до исследовательских центров.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("catalog")}
                className="bg-[#1a1f2e] text-white px-7 py-3 text-sm font-semibold rounded-sm hover:bg-[#0e92b8] transition-all duration-200"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="border border-[#d0d5e0] text-[#1a1f2e] px-7 py-3 text-sm font-semibold rounded-sm hover:border-[#0e92b8] hover:text-[#0e92b8] transition-all duration-200"
              >
                Получить консультацию
              </button>
            </div>
          </div>

          <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/3] bg-[#f5f7fa] rounded-sm overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/387fa6d5-9f59-4368-bcd2-e91eac984574/files/cc132d0b-5fec-4820-b53a-6f23b460e8d5.jpg"
                alt="Лабораторный стол"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg p-4 rounded-sm">
              <div className="text-2xl font-cormorant font-semibold text-[#1a1f2e]">12 лет</div>
              <div className="text-xs text-[#5a6070] mt-0.5">на рынке</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#0e92b8] text-white p-4 rounded-sm shadow-lg">
              <div className="text-2xl font-cormorant font-semibold">850+</div>
              <div className="text-xs mt-0.5 opacity-90">проектов</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "850+", label: "Реализованных проектов" },
              { value: "12 лет", label: "Опыт на рынке" },
              { value: "24 мес", label: "Гарантия на изделия" },
              { value: "14 дн", label: "Срок изготовления" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-cormorant text-3xl font-semibold text-[#1a1f2e]">{stat.value}</div>
                <div className="text-xs text-[#5a6070] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#0e92b8] uppercase">Каталог</span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-2 text-[#1a1f2e]">
            Лабораторная мебель
          </h2>
          <p className="text-[#5a6070] mt-3 max-w-xl">
            Нажмите на карточку, чтобы увидеть полные технические характеристики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group border border-gray-100 bg-white hover:border-[#0e92b8] hover:shadow-lg transition-all duration-300 cursor-pointer rounded-sm"
              onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
            >
              <div className="relative aspect-[16/9] bg-[#f5f7fa] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#0e92b8] text-white text-xs font-semibold px-2.5 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="text-xs text-[#5a6070] mb-1">{product.category}</div>
                <h3 className="font-semibold text-[#1a1f2e] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#0e92b8] font-semibold">{product.price}</span>
                  <div className="flex items-center gap-1 text-xs text-[#5a6070] group-hover:text-[#0e92b8] transition-colors">
                    <Icon
                      name="ChevronDown"
                      size={14}
                      className={`transition-transform duration-200 ${selectedProduct === product.id ? "rotate-180" : ""}`}
                    />
                    <span>Характеристики</span>
                  </div>
                </div>

                {selectedProduct === product.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 fade-in">
                    <div className="text-xs font-semibold tracking-widest text-[#0e92b8] uppercase mb-3">
                      Технические характеристики
                    </div>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-[#5a6070]">{key}</span>
                          <span className="text-[#1a1f2e] font-medium text-right ml-4">{value}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="mt-4 w-full bg-[#1a1f2e] text-white py-2.5 text-sm font-semibold rounded-sm hover:bg-[#0e92b8] transition-colors duration-200"
                      onClick={(e) => { e.stopPropagation(); scrollTo("contacts"); }}
                    >
                      Запросить цену
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#1a1f2e] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0e92b8] uppercase">О компании</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-3 mb-6 leading-tight">
              Производство<br />полного цикла<br />
              <span className="italic text-[#0e92b8]">с 2012 года</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              ЛабТех — российский производитель лабораторной мебели и оборудования. Собственное производство в Подмосковье позволяет контролировать качество на каждом этапе и выполнять нестандартные заказы.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Работаем с фармацевтическими предприятиями, научно-исследовательскими институтами, университетами и промышленными лабораториями по всей России.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", text: "ISO 9001:2015" },
                { icon: "Shield", text: "ГОСТ Р соответствие" },
                { icon: "Truck", text: "Доставка по России" },
                { icon: "Wrench", text: "Монтаж и сервис" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-sm">
                  <Icon name={item.icon as "Award"} size={16} className="text-[#0e92b8]" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "850+", label: "Проектов" },
              { num: "120", label: "Сотрудников" },
              { num: "4 000 м²", label: "Площадь производства" },
              { num: "36 мес", label: "Макс. гарантия" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <div className="font-cormorant text-4xl font-semibold text-[#0e92b8]">{item.num}</div>
                <div className="text-sm text-gray-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#0e92b8] uppercase">FAQ</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-2 text-[#1a1f2e]">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-sm overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#f8f9fb] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-[#1a1f2e]">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className={`text-[#0e92b8] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#5a6070] text-sm leading-relaxed border-t border-gray-50 pt-3 fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-[#f8f9fb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#0e92b8] uppercase">Контакты</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-2 text-[#1a1f2e]">
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: "Mail", label: "Email", value: "info@labtech.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Производственная, 12, стр. 3" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as "Phone"} size={16} className="text-[#0e92b8]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5a6070] mb-0.5">{item.label}</div>
                    <div className="font-medium text-[#1a1f2e]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm">
              <h3 className="font-semibold text-[#1a1f2e] mb-5">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#5a6070] mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#0e92b8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#5a6070] mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#0e92b8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#5a6070] mb-1.5">Сообщение</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите ваш запрос..."
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#0e92b8] transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-[#1a1f2e] text-white py-3 text-sm font-semibold rounded-sm hover:bg-[#0e92b8] transition-colors duration-200">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1a1f2e] rounded-sm flex items-center justify-center">
              <Icon name="FlaskConical" size={12} className="text-white" />
            </div>
            <span className="font-semibold text-sm">ЛабТех</span>
          </div>
          <p className="text-xs text-[#5a6070]">© 2024 ЛабТех. Все права защищены.</p>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs text-[#5a6070] hover:text-[#0e92b8] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
