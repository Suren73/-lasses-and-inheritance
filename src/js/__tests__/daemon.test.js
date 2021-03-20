import Daemon from '../daemon';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const received = new Daemon('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Daemon('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Daemon('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Daemon(10)).toThrow();
});
