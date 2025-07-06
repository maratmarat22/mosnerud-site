import Product from '@/domain/product';

export const productsMap: Record<string, Product> = {
  '0': {
    id: '0',
    name: 'sand',
    price: 3200,
    image: '/product-images/sand.jpg',
  },
  '1': {
    id: '1',
    name: 'gravel',
    price: 5500,
    image: '/product-images/gravel.jpg',
  },
  '2': {
    id: '2',
    name: 'crushed stone',
    price: 4400,
    image: '/product-images/crushed-stone.jpg',
  },
  '3': {
    id: '3',
    name: 'limestone',
    price: 4800,
    image: '/product-images/limestone.jpg',
  },
  '4': {
    id: '4',
    name: 'pebble',
    price: 5300,
    image: '/product-images/pebble.jpg',
  },
  '5': {
    id: '5',
    name: 'slag',
    price: 3900,
    image: '/product-images/slag.jpg',
  },
  '6': {
    id: '6',
    name: 'mica schist',
    price: 4600,
    image: '/product-images/mica-schist.jpg',
  },
  '7': {
    id: '7',
    name: 'clay',
    price: 2800,
    image: '/product-images/clay.jpg',
  },
  '8': {
    id: '8',
    name: 'dolomite',
    price: 5000,
    image: '/product-images/dolomite.jpg',
  },
  '9': {
    id: '9',
    name: 'sandstone',
    price: 4200,
    image: '/product-images/sandstone.jpg',
  },
};

export const productsList: Product[] = Object.values(productsMap);
