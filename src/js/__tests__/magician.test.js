import Magician from '../magician';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Magician('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Magician('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Magician('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Magician(10)).toThrow();
});
