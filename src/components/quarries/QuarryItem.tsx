import Image from 'next/image';
import Link from 'next/link';
import Quarry from '@/domain/quarry';
import quarryI18n from '@/i18n/quarryToRu.json';

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
        alt={`Изображение карьера: ${quarryI18n[quarry.name as keyof typeof quarryI18n]}`}
        width={300}
        height={300}
        className="object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold">{quarry.name}</h1>
        <h2 className="text-gray-600">{quarryI18n[quarry.type]}</h2>
        <p className="text-sm mt-2">{quarry.description}</p>
      </div>
    </Link>
  );
}
