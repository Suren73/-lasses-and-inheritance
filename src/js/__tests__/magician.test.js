import { typeMagician } from '../magician';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = typeMagician('Andrei', 'Magician');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeMagician('A', 'Magician');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeMagician('Andreiiiiii', 'Magician');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeMagician('Andrei', 'Magician1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeMagician(10, 'Magician');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeMagician('Andrei', 10);
  }).toThrow();
});
