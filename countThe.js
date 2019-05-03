module.exports = function countThe(str) {
  const matches = str.match(/the/gi);
  return matches ? matches.length : 0;
};
