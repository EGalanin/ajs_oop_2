import Character from '../character';
import Bowerman from '../bowerman';
import Deamon from '../deamon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Short name', () => {
  const result = new Character('N', 'Deamon', 50, 50);
  expect(result).toThrow('Invalid length name');
});

test('Long name', () => {
  const result = new Character('LOOOOONGNAME', 'Deamon', 50, 50);
  expect(result).toThrow('Long name');
});

test('Invalid type', () => {
  const result = new Character('Bob', 'FakeDeamon', 50, 50);
  expect(result).toThrow('Invalid type');
});

test('Bowerman', () => {
  const result = new Bowerman('Bowerman');
  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Deamon', () => {
  const result = new Deamon('Deamon');
  expect(result).toEqual({
    name: 'Deamon',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Magician', () => {
  const result = new Magician('Magician');
  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  const result = new Swordsman('Swordsman');
  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  const result = new Undead('Undead');
  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  const result = new Zombie('Zombie');
  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
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
  result.levelUp();
  expect(result).toThrow('You cannot raise the level with zero health');
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
