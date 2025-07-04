import Image from 'next/image';
import Link from 'next/link';
import { Quarry } from '@/domain/quarry';

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
        src={quarry.images?.[0] || '/placeholder'}
        alt={`Изображение карьера: ${quarry.name}`}
        width={300}
        height={300}
        className="object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold">{quarry.name}</h1>
        <h2 className="text-gray-600">{quarry.type}</h2>
        <p className="text-sm mt-2">{quarry.description}</p>
      </div>
    </Link>
  );
}
