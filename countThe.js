module.exports = function countThe(str) {
  const matches = str.match(/\bthe\b/gi);
  return matches ? matches.length : 0;
};
