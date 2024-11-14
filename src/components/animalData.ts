// animalData.ts
export interface Animal {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  stock: number;
  category: string;  // Добавляем категорию
}

const animalData: Animal[] = [
  {
    id: 1,
    name: 'Хомяк',
    image: '/images/hamster.png',
    price: 500,
    description: 'Милый и пушистый хомячок',
    stock: 10,
    category: 'Грызуны',
  },
  {
    id: 2,
    name: 'Попугай',
    image: '/images/parrot.png',
    price: 1500,
    description: 'Яркий и говорящий попугай',
    stock: 3,
    category: 'Птицы',
  },
  {
    id: 3,
    name: 'Игуана',
    image: '/images/iguana.png',
    price: 2000,
    description: 'Игуана с ярким окрасом',
    stock: 0,
    category: 'Рептилии',
  },
  {
    id: 4,
    name: 'Морская свинка',
    image: '/images/guinea-pig.png',
    price: 800,
    description: 'Дружелюбная морская свинка',
    stock: 5,
    category: 'Грызуны',
  },
  {
    id: 5,
    name: 'Черепаха',
    image: '/images/turtle.png',
    price: 1200,
    description: 'Медленная, но умная черепаха',
    stock: 2,
    category: 'Рептилии',
  },
];

export default animalData;
