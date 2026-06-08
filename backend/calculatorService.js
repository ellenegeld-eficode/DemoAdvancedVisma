function validateOperands(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Operands must be finite numbers");
  }
}

function add(a, b) {
  validateOperands(a, b);
  return a + b;
}

function subtract(a, b) {
  validateOperands(a, b);
  return a - b;
}

function multiply(a, b) {
  validateOperands(a, b);
  return a * b;
}

function divide(a, b) {
  validateOperands(a, b);

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

function modulo(a, b) {
  validateOperands(a, b);

  if (b === 0) {
    throw new Error("Cannot modulo by zero");
  }

  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
};