module.exports = function solveEquation(equation) {
  let coefficients = equation.split(' ').join('').split(/\*x\^2|\*x/);
  let sqD = Math.sqrt(coefficients[1] * coefficients[1] - 4 * coefficients[0] * coefficients[2]);
  let solution = [];
  solution[0] = Math.round((-coefficients[1] - sqD) / (2 * coefficients[0]));
  solution[1] = Math.round((-coefficients[1] + sqD) / (2 * coefficients[0]));
  return solution;
}
