'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import animalData from '@/components/animalData'; // Путь к файлу с данными

interface Params {
  params: {
    id: string;
  };
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();  // Получаем ID из параметров URL
  const router = useRouter();  // Хук для навигации

  // Состояние для отображения модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Состояние для формы
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const product = animalData.find((animal) => animal.id === Number(id));

  // Если продукт не найден, выводим сообщение
  if (!product) {
    return <div>Товар не найден</div>;
  }

  // Обработчик отправки формы
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки данных (например, на сервер)
    console.log('Данные заказа:', formData);

    // Закрыть модальное окно после отправки формы
    setIsModalOpen(false);
  };

  // Обработчик изменения полей формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4">
      <div className="bg-gray-800 p-6 rounded shadow-lg text-white">
        {/* Кнопка для возврата на предыдущую страницу */}
        <button 
          onClick={() => router.back()} 
          className="bg-gray-600 text-white px-4 py-2 mb-4 rounded"
        >
          Назад
        </button>

        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-400 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-4">Цена: {product.price}₽</p>
        <p className="text-lg font-medium mb-2">Категория: {product.category}</p>
        <p className="text-lg font-medium mb-2">В наличии: {product.stock > 0 ? product.stock : 'Нет в наличии'}</p>
        
        {/* Оставляем кнопку "Заказать", независимо от наличия товара */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-4 py-2 mt-4"
        >
          Заказать
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-2xl mb-4">Форма для заказа</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="fullName">ФИО:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  required
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

export default ProductDetails;

