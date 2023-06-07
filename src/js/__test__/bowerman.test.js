import Bowerman from '../bowerman';

test('Правильно создан обьект', () => {
  const bowerman = new Bowerman('Bowerman');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Bowerman', type: 'Bowerman',
  };
  expect(bowerman).toEqual(correct);
});
