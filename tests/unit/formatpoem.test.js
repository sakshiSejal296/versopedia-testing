<<<<<<< HEAD
const { formatpoem } = require('../../utils/formatpoem');

describe('formatpoem', () => {
  test('should trim and convert title to uppercase', () => {
    expect(formatpoem("  peace of mind ")).toBe("PEACE OF MIND");
  });

  test('should return empty string if input is only spaces', () => {
    expect(formatpoem("    ")).toBe("");
  });
});
=======
const { formatpoem } = require('../../utils/formatpoem');

describe('formatpoem', () => {
  test('should trim and convert title to uppercase', () => {
    expect(formatpoem("  peace of mind ")).toBe("PEACE OF MIND");
  });

  test('should return empty string if input is only spaces', () => {
    expect(formatpoem("    ")).toBe("");
  });
});
>>>>>>> 90192a9 (✨ Add Keploy CI workflow)
