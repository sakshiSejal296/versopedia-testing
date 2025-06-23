const { formatpoem } = require('../../utils/formatpoem');

describe('formatpoem', () => {
  test('should trim and convert title to uppercase', () => {
    expect(formatpoem("  peace of mind ")).toBe("PEACE OF MIND");
  });

  test('should return empty string if input is only spaces', () => {
    expect(formatpoem("    ")).toBe("");
  });
});
