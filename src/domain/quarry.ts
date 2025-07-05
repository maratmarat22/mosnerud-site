export type Quarry = {
  id: string;
  name: string;
  type: 'sand' | 'gravel';
  description: string | null;
  images: string[] | null;
};

export const quarries: Quarry[] = [
  {
    id: '1',
    name: 'Люберецкий',
    type: 'sand',
    description: 'Карьер в Люберцах',
    images: ['/quarry-images/quarry1_test.png'],
  },
  {
    id: '2',
    name: 'Черноморский',
    type: 'sand',
    description:
      'Самый древний карьер, выкопан древними украми в 6323г. от сотворения мира',
    images: ['/quarry-images/quarry2_test.png'],
  },
  {
    id: '3',
    name: 'Третий',
    type: 'gravel',
    description: 'Третий карьер',
    images: ['/quarry-images/quarry3_test.png'],
  },
];

export function findQuarryById(id?: string): Quarry | undefined {
  if (!id) return undefined;
  return quarries.find((q) => q.id === id);
}

export function filterQuarries(name: string, types: string[]): Quarry[] {
  return quarries.filter((q) => {
    const nameMatch = name
      ? q.name.toLowerCase().includes(name.toLowerCase())
      : true;

    const typeMatch = types.length > 0 ? types.includes(q.type) : true;

    return nameMatch && typeMatch;
  });
}
