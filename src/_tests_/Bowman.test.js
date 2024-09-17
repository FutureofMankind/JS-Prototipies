import Bowman from '../js/characters/charactersFollows/Bowman';

test('testing of bowman creation without type parameter', () => {
  const result = new Bowman('лучник_1');
  expect(result).toEqual({
    name: 'лучник_1', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('testing of bowman creation with type parameter', () => {
  const result = new Bowman('лучник_2', 'Bowman');
  expect(result).toEqual({
    name: 'лучник_2', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});
