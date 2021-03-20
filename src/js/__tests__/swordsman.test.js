import Swordsman from '../swordsman';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = new Swordsman('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Swordsman('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Swordsman('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Swordsman(10, 'Swordsman')).toThrow();
});
