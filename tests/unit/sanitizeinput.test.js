<<<<<<< HEAD
const { sanitizeinput } = require('../../utils/sanitizeinput');

describe('sanitizeinput', () => {
  test('should trim and remove extra spaces', () => {
    expect(sanitizeinput("  a    good     reflection  ")).toBe("a good reflection");
  });

  test('should return empty string for only spaces', () => {
    expect(sanitizeinput("     ")).toBe("");
  });
});
=======
const { sanitizeinput } = require('../../utils/sanitizeinput');

describe('sanitizeinput', () => {
  test('should trim and remove extra spaces', () => {
    expect(sanitizeinput("  a    good     reflection  ")).toBe("a good reflection");
  });

  test('should return empty string for only spaces', () => {
    expect(sanitizeinput("     ")).toBe("");
  });
});
>>>>>>> 90192a9 (✨ Add Keploy CI workflow)
