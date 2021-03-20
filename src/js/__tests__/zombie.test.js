import Zombie from '../zombie';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Zombie('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Zombie('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Zombie('Andreiiiiii')).toThrow('Ошибка имени');
});

test('testing the player creation function', () => {
  expect(() => new Zombie(10)).toThrow();
});
