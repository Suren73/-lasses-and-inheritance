import { typeSwordsman } from '../swordsman';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = typeSwordsman('Andrei', 'Swordsman');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeSwordsman('A', 'Swordsman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeSwordsman('Andreiiiiii', 'Swordsman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeSwordsman('Andrei', 'Swordsman1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeSwordsman(10, 'Swordsman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeSwordsman('Andrei', 10);
  }).toThrow();
});
