import Image from 'next/image';
import Link from 'next/link';
import Quarry from '@/domain/quarry';
import productI18n from '@/i18n/en-ru/productName.json';
import capitalize from '@/utils/capitalize';

type QuarryItemProps = {
  quarry: Quarry;
};

export default function QuarryItem({ quarry }: QuarryItemProps) {
  return (
    <Link
      href={`quarries/${quarry.id}`}
      className="block cursor-pointer hover:shadow-lg transition-shadow"
    >
      <Image
        src={quarry.images[0]}
        alt={`Изображение карьера: ${quarry.name}`}
        width={300}
        height={300}
        className="object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold">{quarry.name}</h1>
        {quarry.products.slice(0, 1).map((p, i) => (
          <h2
            key={i}
            className="text-gray-600"
          >{`${capitalize(productI18n[p[0] as keyof typeof productI18n])}`}</h2>
        ))}
        {quarry.products.length > 1 && (
          <h2 className="text-gray-600">и другие</h2>
        )}
        <p className="text-sm mt-2">{quarry.description}</p>
      </div>
    </Link>
  );
}
