import { typeUndead } from '../undead';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = typeUndead('Andrei', 'Undead');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeUndead('A', 'Undead');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeUndead('Andreiiiiii', 'Undead');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeUndead('Andrei', 'Undead1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeUndead(10, 'Undead');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeUndead('Andrei', 10);
  }).toThrow();
});
