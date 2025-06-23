function capitalizewords(sentence) {
  return sentence
    .trim() // remove leading/trailing spaces
    .replace(/\s+/g, ' ') // collapse extra spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = { capitalizewords };
