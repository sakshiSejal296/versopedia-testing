function isvalidpoemlength(content, min = 10, max = 1000) {
  return content.length >= min && content.length <= max;
}

module.exports = { isvalidpoemlength };
