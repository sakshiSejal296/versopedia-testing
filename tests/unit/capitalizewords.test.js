<<<<<<< HEAD
const { capitalizewords } = require('../../utils/capitalizewords');

describe('capitalizewords', () => {
  test('should capitalize each word in the sentence', () => {
    expect(capitalizewords("shine bright like a diamond")).toBe("Shine Bright Like A Diamond");
  });

  test('should handle extra spaces', () => {
    expect(capitalizewords("  hello   world  ")).toBe("Hello World");
  });
});
=======
const { capitalizewords } = require('../../utils/capitalizewords');

describe('capitalizewords', () => {
  test('should capitalize each word in the sentence', () => {
    expect(capitalizewords("shine bright like a diamond")).toBe("Shine Bright Like A Diamond");
  });

  test('should handle extra spaces', () => {
    expect(capitalizewords("  hello   world  ")).toBe("Hello World");
  });
});
>>>>>>> 90192a9 (✨ Add Keploy CI workflow)
