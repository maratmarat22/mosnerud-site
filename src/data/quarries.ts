import Quarry from '@/domain/quarry';

export const quarriesMap: Record<string, Quarry> = {
  '0': {
    id: '0',
    name: 'Люберецкий',
    descriptionShort: 'Карьер в Люберцах',
    products: [['quarry-sand', 250]],
    images: ['/quarry-images/quarry1_test.png'],
  },
  '1': {
    id: '1',
    name: 'Черноморский',
    descriptionShort:
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
    descriptionShort: 'Третий карьер',
    products: [['quarry-sand', 250]],
    images: ['/quarry-images/quarry3_test.png'],
  },
  '3': {
    id: '3',
    name: 'Аксиньино-1',
    descriptionShort: '123',
    descriptionFull: `Дорогие друзья, сложившаяся структура организации играет важную роль в формировании соответствующих условий активизации.
    
Соображения высшего порядка, а также новая модель организационной деятельности представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений?
    
Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности позволяет оценить значение модели развития! Повседневная практика показывает, что начало повседневной работы по формированию позиции способствует повышению актуальности соответствующих условий активизации. Практический опыт показывает, что сложившаяся структура организации представляет собой интересный эксперимент проверки ключевых компонентов планируемого обновления. Практический опыт показывает, что социально-экономическое...`,
    products: [['quarry-sand-washed', 350]],
    images: ['/quarry-images/aksinino-1.jpg'],
  },
  '4': {
    id: '4',
    name: 'Глухово-1',
    descriptionShort: '456',
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
