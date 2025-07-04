import { Product } from '@/domain/product';
import Image from 'next/image';
import Link from 'next/link';

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`products/${product.id}`}
      className="group block rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.image}
          alt={`Изображение товара: ${product.type}`}
          fill
          className="object-cover transition-transform duration-150 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-gray-900 group-hover:text-black truncate">
          {product.type}
        </h1>
        <h2 className="text-md font-medium text-gray-700 tracking-wide">
          {product.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          })}
        </h2>
      </div>
    </Link>
  );
}
