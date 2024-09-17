import Magician from '../js/characters/charactersFollows/Magician';

test('testing of magician creation without type parameter', () => {
  const result = new Magician('маг_1');
  expect(result).toEqual({
    name: 'маг_1', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('testing of magician creation with type parameter', () => {
  const result = new Magician('маг_2', 'Magician');
  expect(result).toEqual({
    name: 'маг_2', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
