import React from 'react';
import Header from '@/components/header/header';
import Banner from '@/components/banner/banner';
import Accordion from '@/components/accordion/accordion';
import Catalog from '@/components/catalog/catalog';

const HomePage: React.FC = () => {
  const faqItems = [
    { title: 'Как выбрать грызуна?', content: 'Мы предлагаем широкий ассортимент грызунов, которые подойдут для любого дома.' },
    { title: 'Как ухаживать за питомцем?', content: 'Регулярный уход за грызунами включает питание, чистку клетки и проверку здоровья.' },
    { title: 'Есть ли доставка?', content: 'Да, мы доставляем питомцев по всему городу.' },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <main className=''>
        <section className="max-w-xl mx-auto my-8 mt-[200px]">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Часто задаваемые вопросы</h2>
          <Accordion items={faqItems} />
        </section>
        <section className="my-8 mt-[200px]">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Каталог животных</h2>
          <Catalog />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
