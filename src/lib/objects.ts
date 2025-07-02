export const objects = [
  {
    id: 'object1',
    value: 'value1',
  },
  {
    id: 'object2',
    value: 'value2',
  },
  {
    id: 'object3',
    value: 'value3',
  },
];

export function findObjectById(id: string | undefined) {
  if (!id) {
    return null;
  }
  return objects.find((o) => o.id === id);
}
