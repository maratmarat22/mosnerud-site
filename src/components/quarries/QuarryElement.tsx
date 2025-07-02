import Image from 'next/image';
import { Quarry } from '@/domain/quarry';

export default function QuarryCard(quarry: Quarry) {
  return (
    <div>
      <Image
        src={quarry.images ? quarry.images[0] : '/placeholder'}
        alt="quarry image"
      />
      <h1>{quarry.name}</h1>
      <h2>{quarry.type}</h2>
      <h2>{quarry.description}</h2>
    </div>
  );
}
