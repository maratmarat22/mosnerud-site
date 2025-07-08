import Quarry from '@/domain/quarry';

export const quarriesMap: Record<string, Quarry> = {
  '0': {
    id: '0',
    name: 'Люберецкий',
    description: 'Карьер в Люберцах',
    products: [['quarry-sand', 250]],
    images: ['/quarry-images/quarry1_test.png'],
  },
  '1': {
    id: '1',
    name: 'Черноморский',
    description:
      'Самый древний карьер, выкопан древними украми в 6323г. от сотворения мира',
    products: [
      ['quarry-sand', 300],
      ['quarry-sand-washed', 350],
    ],
    images: ['/quarry-images/quarry2_test.png'],
  },
  '2': {
    id: '2',
    name: 'Третий',
    description: 'Третий карьер',
    products: [['quarry-sand', 250]],
    images: ['/quarry-images/quarry3_test.png'],
  },
  '3': {
    id: '3',
    name: 'Аксиньино-1',
    description: '123',
    products: [['quarry-sand-washed', 350]],
    images: [''],
  },
  '4': {
    id: '4',
    name: 'Глухово-1',
    description: '456',
    products: [
      ['quarry-sand', 200],
      ['quarry-sand-washed', 250],
    ],
    images: [''],
  },
};

export const quarriesList: Quarry[] = Object.values(quarriesMap);

export function filterQuarries(name: string /*, types: string[]*/): Quarry[] {
  return quarriesList.filter((q) => {
    const nameMatch = name
      ? q.name.toLowerCase().includes(name.toLowerCase())
      : true;

    //const typeMatch = types.length > 0 ? types.includes(q.type) : true;

    return nameMatch; //&& typeMatch;
  });
}
