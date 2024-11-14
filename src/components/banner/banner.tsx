import React from 'react'

const Banner = () => {
  return (
    <div className="p-8 text-center mt-[100px]">
        <h1 className="text-3xl font-bold text-white">Добро пожаловать в наш зоомагазин грызунов!</h1>
        <p className="text-lg text-white mt-4">
            Мы предлагаем широкий выбор грызунов для вашего дома. Найдите своего идеального питомца уже сегодня!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black hover:bg-gray-400 transition duration-300">
            Перейти в каталог
        </button>
    </div>
  )
}

export default Banner