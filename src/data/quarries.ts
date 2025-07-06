import Quarry from '@/domain/quarry';

export const quarriesMap: Record<string, Quarry> = {
  '0': {
    id: '0',
    name: 'Люберецкий',
    type: 'sand',
    description: 'Карьер в Люберцах',
    images: ['/quarry-images/quarry1_test.png'],
  },
  '1': {
    id: '1',
    name: 'Черноморский',
    type: 'sand',
    description:
      'Самый древний карьер, выкопан древними украми в 6323г. от сотворения мира',
    images: ['/quarry-images/quarry2_test.png'],
  },
  '2': {
    id: '2',
    name: 'Третий',
    type: 'gravel',
    description: 'Третий карьер',
    images: ['/quarry-images/quarry3_test.png'],
  },
};

export const quarriesList: Quarry[] = Object.values(quarriesMap);

export function filterQuarries(name: string, types: string[]): Quarry[] {
  return quarriesList.filter((q) => {
    const nameMatch = name
      ? q.name.toLowerCase().includes(name.toLowerCase())
      : true;

    const typeMatch = types.length > 0 ? types.includes(q.type) : true;

    return nameMatch && typeMatch;
  });
}
