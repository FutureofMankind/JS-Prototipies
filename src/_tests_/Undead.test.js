import Undead from '../js/characters/charactersFollows/Undead';

test('testing of undead creation without type parameter', () => {
  const result = new Undead('нежить_1');
  expect(result).toEqual({
    name: 'нежить_1', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('testing of undead creation with type parameter', () => {
  const result = new Undead('нежить_2', 'Undead');
  expect(result).toEqual({
    name: 'нежить_2', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
