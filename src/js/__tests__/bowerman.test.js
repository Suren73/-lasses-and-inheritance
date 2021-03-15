import { typeBowerman } from '../bowerman';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = typeBowerman('Andrei', 'Bowman');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeBowerman('A', 'Bowman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeBowerman('Andreiiiiii', 'Bowman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeBowerman('Andrei', 'Bowman1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeBowerman(10, 'Bowman');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeBowerman('Andrei', 10);
  }).toThrow();
});
