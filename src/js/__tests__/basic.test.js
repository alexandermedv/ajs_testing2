import health from '../basic';

test('check health function', () => {
  const result = health({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('check health function', () => {
  const result = health({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});

test('check health function', () => {
  const result = health({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});
