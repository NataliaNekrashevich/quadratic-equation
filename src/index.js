module.exports = function solveEquation(equation) {
  let coefficients = equation.split(' ').join('').split(/\*x\^2|\*x/);
  let sqD = Math.sqrt(coefficients[1] * coefficients[1] - 4 * coefficients[0] * coefficients[2]);
  let solution = [];
  let x1 = Math.round((-coefficients[1] - sqD) / (2 * coefficients[0])); 
  let x2 = Math.round((-coefficients[1] + sqD) / (2 * coefficients[0]));
  x1 < x2 ? (solution[0] = x1, solution[1] =x2) : (solution[0] = x2, solution[1] =x1);
  return solution;
}
