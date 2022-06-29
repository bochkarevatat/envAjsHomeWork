import demo from '../app';

test('should value', () => {
  const value = 'demonstration variable';
  expect(demo(value)).toBe('demonstration variable');
});
