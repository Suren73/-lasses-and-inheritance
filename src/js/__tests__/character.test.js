import Character from '../character';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  const received = new Character('Andrei', 'Bowman');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Character('Andrei', 10)).toThrow('Ошибка типа игрока');
});

test('testing the player creation function', () => {
  expect(() => new Character('Andrei', 'Temp')).toThrow('Ошибка типа игрока');
});

test('testing the player creation function', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Ошибка имени');
});

test('testing the player creation function', () => {
  expect(() => new Character('Andreiiiiii', 'Bowman')).toThrow('Ошибка имени');
});
