function sanitizeinput(input) {
  return input.trim().replace(/\s+/g, " ");
}

module.exports = { sanitizeinput };
