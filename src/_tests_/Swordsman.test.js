import Swordsman from '../js/characters/charactersFollows/Swordsman';

test('testing of swordsman creation without type parameter', () => {
  const result = new Swordsman('мечник_1');
  expect(result).toEqual({
    name: 'мечник_1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('testing of swordsman creation with type parameter', () => {
  const result = new Swordsman('мечник_2', 'Swordsman');
  expect(result).toEqual({
    name: 'мечник_2', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
