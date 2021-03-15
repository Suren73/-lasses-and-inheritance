import { typeDaemon } from '../daemon';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = typeDaemon('Andrei', 'Daemon');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeDaemon('A', 'Daemon');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeDaemon('Andreiiiiii', 'Daemon');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeDaemon('Andrei', 'Daemon1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeDaemon(10, 'Daemon');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeDaemon('Andrei', 10);
  }).toThrow();
});
