import Zombie from '../js/characters/charactersFollows/Zombie';

test('testing of zombie creation without type parameter', () => {
  const result = new Zombie('зомби_1');
  expect(result).toEqual({
    name: 'зомби_1', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('testing of zombie creation with type parameter', () => {
  const result = new Zombie('зомби_2', 'Zombie');
  expect(result).toEqual({
    name: 'зомби_2', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
