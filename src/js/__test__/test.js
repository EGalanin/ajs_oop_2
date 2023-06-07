import Character from '../character';
import Undead from '../undead';

// test('Short name', () => {
//   const result = () => { Character('N', 'Deamon', 50, 50); };
//   expect(result).toThrow();
// });

// test('Long name', () => {
//   const result = () => { Character('LOOOOONGNAME', 'Deamon', 50, 50); };
//   expect(result).toThrow();
// });

// test('Invalid type', () => {
//   const result = () => { new Character('Bob', 'FakeDeamon', 50, 50); };
//   expect(result).toThrow();
// });

test('Short name', () => {
  expect(() => new Character('N', 'Deamon', 50, 50)).toThrow('Invalid length name');
});

test('Long name', () => {
  expect(
    () => new Character('LOOOOONGNAME', 'Deamon', 50, 50),
  ).toThrow('Invalid length name');
});

test('Invalid type', () => {
  expect(() => new Character('Bob', 'FakeDeamon', 50, 50)).toThrow('Invalid type');
});

test('Level Up', () => {
  const result = new Undead('Undead');
  result.levelUp();
  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('Zero health', () => {
  const result = new Undead('Undead');
  result.health = 0;
  expect(() => result.levelUp()).toThrow(
    'You cannot raise the level with zero health',
  );
});

test('Not negative health', () => {
  const result = new Undead('Undead');
  result.health = 0;
  result.damage(30);
  expect(result.health).toBe(0);
});

test('Inflict damage', () => {
  const result = new Undead('Undead');
  result.damage(30);
  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 77.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
