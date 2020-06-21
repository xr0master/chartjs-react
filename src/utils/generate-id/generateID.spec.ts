import { generateID } from './generateID';

it('should be 8 symbols', () => {
  expect(generateID()).toHaveLength(8);
});

it('should generate unique id', () => {
  expect(generateID()).not.toEqual(generateID());
});

it('should contain the prefix as "test"', () => {
  const prefix = 'test';
  expect(generateID(prefix)).toContain(prefix);
});
