const { isvalidpoemlength } = require('../../utils/isvalidpoemlength');

describe('isvalidpoemlength', () => {
  test('should return true for content within default range', () => {
    expect(isvalidpoemlength("A meaningful piece of poetry.")).toBe(true);
  });

  test('should return false for short content', () => {
    expect(isvalidpoemlength("Hi")).toBe(false);
  });

  test('should return false for too long content', () => {
    const longPoem = "A".repeat(2000);
    expect(isvalidpoemlength(longPoem)).toBe(false);
  });
});
