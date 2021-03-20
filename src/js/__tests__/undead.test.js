import Undead from '../undead';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Undead('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Undead('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Undead('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Undead(10)).toThrow();
});
