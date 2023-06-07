import Deamon from '../deamon';

test('Правильно создан обьект', () => {
  const deamon = new Deamon('Deamon');
  const correct = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Deamon', type: 'Deamon',
  };
  expect(deamon).toEqual(correct);
});
