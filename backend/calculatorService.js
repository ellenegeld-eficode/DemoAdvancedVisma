function validateFiniteNumber(value, operandName) {
  if (!Number.isFinite(value)) {
    throw new Error(operandName + " must be a finite number");
  }
}

function add(a, b) {
  validateFiniteNumber(a, "First operand");
  validateFiniteNumber(b, "Second operand");
  return a + b;
}

function subtract(a, b) {
  validateFiniteNumber(a, "First operand");
  validateFiniteNumber(b, "Second operand");
  return a - b;
}

function multiply(a, b) {
  validateFiniteNumber(a, "First operand");
  validateFiniteNumber(b, "Second operand");
  return a * b;
}

function divide(a, b) {
  validateFiniteNumber(a, "First operand");
  validateFiniteNumber(b, "Second operand");

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

function modulo(a, b) {
  validateFiniteNumber(a, "First operand");
  validateFiniteNumber(b, "Second operand");

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