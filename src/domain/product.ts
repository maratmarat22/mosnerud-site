export type Product = {
  id: number;
  type: 'Песок' | 'Гравий';
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: 0, type: 'Песок', price: 3200, image: '/product-images/sand.jpg' },
  { id: 1, type: 'Гравий', price: 5500, image: '/product-images/gravel.jpg' },
];
