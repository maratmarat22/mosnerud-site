import Product from '@/domain/product';

export const productsMap: Record<string, Product> = {
  'quarry-sand': {
    id: 'quarry-sand',
    name: 'quarry-sand',
    image: '/product-images/sand.jpg',
  },
  'quarry-sand-washed': {
    id: 'quarry-sand-washed',
    name: 'quarry-sand-washed',
    image: '/product-images/gravel.jpg',
  },
  '2': {
    id: '2',
    name: 'crushed stone',
    image: '/product-images/crushed-stone.jpg',
  },
  '3': {
    id: '3',
    name: 'limestone',
    image: '/product-images/limestone.jpg',
  },
  '4': {
    id: '4',
    name: 'pebble',
    image: '/product-images/pebble.jpg',
  },
  '5': {
    id: '5',
    name: 'slag',
    image: '/product-images/slag.jpg',
  },
  '6': {
    id: '6',
    name: 'mica schist',
    image: '/product-images/mica-schist.jpg',
  },
  '7': {
    id: '7',
    name: 'clay',
    image: '/product-images/clay.jpg',
  },
  '8': {
    id: '8',
    name: 'dolomite',
    image: '/product-images/dolomite.jpg',
  },
  '9': {
    id: '9',
    name: 'sandstone',
    image: '/product-images/sandstone.jpg',
  },
};

export const productsList: Product[] = Object.values(productsMap);
