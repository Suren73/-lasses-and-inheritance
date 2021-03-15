import { typeZombie } from '../zombie';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = typeZombie('Andrei', 'Zombie');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => {
    typeZombie('A', 'Zombie');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeZombie('Andreiiiiii', 'Zombie');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeZombie('Andrei', 'Zombie1');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeZombie(10, 'Zombie');
  }).toThrow();
});

test('testing the player creation function', () => {
  expect(() => {
    typeZombie('Andrei', 10);
  }).toThrow();
});
