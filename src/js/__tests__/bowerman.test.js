import Bowerman from '../bowerman';

test('testing the player creation function', () => {
  const expected = {
    name: 'Andrei',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const received = new Bowerman('Andrei');
  expect(received).toEqual(expected);
});

test('testing the player creation function', () => {
  expect(() => new Bowerman('A')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Bowerman('Andreiiiiii')).toThrow();
});

test('testing the player creation function', () => {
  expect(() => new Bowerman(10)).toThrow();
});
