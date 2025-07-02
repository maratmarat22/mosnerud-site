export type Quarry = {
  id: string;
  name: string;
  type: 'песчаный' | 'гравийный';
  description: string | null;
  images: string[] | null;
};

export const quarries: Quarry[] = [
  {
    id: '1',
    name: 'Люберецкий',
    type: 'песчаный',
    description: 'Карьер в Люберцах',
    images: ['/quarry-images/quarry1_test.png'],
  },
  {
    id: '2',
    name: 'Велкопоповецкий',
    type: 'песчаный',
    description: null,
    images: ['/quarry-images/quarry2_test.png'],
  },
  {
    id: '3',
    name: '***',
    type: 'гравийный',
    description: null,
    images: ['/quarry-images/quarry3_test.png'],
  },
];

export function findQuarryById(id?: string): Quarry | undefined {
  if (!id) return undefined;
  return quarries.find((q) => q.id === id);
}
