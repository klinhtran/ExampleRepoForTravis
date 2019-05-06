module.exports = function countThe(str) {
  if (!str) return 0;

  const matches = str.match(/\bthe\b/gi);
  return matches ? matches.length : 0;
};
