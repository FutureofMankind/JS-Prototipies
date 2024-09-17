import Daemon from '../js/characters/charactersFollows/Daemon';

test('testing of daemon creation without type parameter', () => {
  const result = new Daemon('демон_1');
  expect(result).toEqual({
    name: 'демон_1', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('testing of daemon creation with type parameter', () => {
  const result = new Daemon('демон_2', 'Daemon');
  expect(result).toEqual({
    name: 'демон_2', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
