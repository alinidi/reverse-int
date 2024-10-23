module.exports = function reverse (n) {
  const str = Math.abs(n).toString().split('').reverse();
  const newNum = +str.join('');
  return newNum;
}
