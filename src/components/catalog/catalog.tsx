'use client';

import React, { useState } from 'react';
import animalData, { Animal } from '../animalData';
import Link from 'next/link';

const categories = ['Все', 'Грызуны', 'Птицы', 'Рептилии', 'Прочее'];

const Catalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [sortOrder, setSortOrder] = useState<string>('asc'); // asc для возрастания, desc для убывания

  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null); // Товар, для которого открыто окно

  const filteredAnimals = animalData.filter((animal: Animal) => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || animal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedAnimals = filteredAnimals.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Обработчик клика по кнопке "Заказать"
  const handleOrderClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  // Обработчик отправки формы
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnimal) {
      console.log('Данные заказа для:', selectedAnimal.name);
      // Логика для обработки данных заказа
    }
    setIsModalOpen(false); // Закрыть окно после отправки
  };

  // Обработчик изменения полей формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (selectedAnimal) {
      setSelectedAnimal({
        ...selectedAnimal,
        [name]: value,
      });
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Поиск по названию..."
        className="w-full p-2 border border-gray-400 rounded mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <select
        className="w-full p-2 border border-gray-400 rounded mb-4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className="w-full p-2 border border-gray-400 rounded mb-4"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedAnimals.map((animal: Animal) => (
          <div key={animal.id} className="bg-gray-800 p-4 rounded shadow-md text-white">
            <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
            <p className="text-gray-400 mb-2">{animal.description}</p>
            <p className="text-lg font-semibold mb-4">Цена: {animal.price}₽</p>
            {animal.stock > 0 ? (
              <button className="bg-white text-black px-4 py-2">Добавить в корзину</button>
            ) : (
              <button 
                onClick={() => handleOrderClick(animal)}
                className="bg-white text-black px-4 py-2"
              >
                Заказать
              </button>
            )}
            <Link href={`/product/${animal.id}`} passHref>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4">Подробнее</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Модальное окно для заказа */}
      {isModalOpen && selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-2xl mb-4">Форма для заказа товара: {selectedAnimal.name}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="fullName">ФИО:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-gray-600 text-white px-4 py-2"
                >
                  Закрыть
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
