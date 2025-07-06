import Product from '@/domain/product';
import Image from 'next/image';
import Link from 'next/link';
import productI18n from '@/i18n/en-ru/productName.json';
import capitalize from '@/utils/capitalize';

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`products/${product.id}`}
      className="group block rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-200 overflow-hidden max-w-xs"
    >
      <div className="relative w-60 h-40 overflow-hidden">
        <Image
          src={product.image}
          alt={`Изображение товара: ${productI18n[product.name as keyof typeof productI18n]}`}
          fill
          className="object-cover transition-transform duration-150 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-gray-900 group-hover:text-black truncate">
          {capitalize(productI18n[product.name as keyof typeof productI18n])}
        </h1>
        <h2 className="text-md font-medium text-gray-700 tracking-wide">
          {`от ${product.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          })}`}
        </h2>
      </div>
    </Link>
  );
}
