const test = require("node:test");
const assert = require("node:assert/strict");

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
} = require("../../backend/calculatorService");

test("add returns the sum of two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add supports negative values", () => {
  assert.equal(add(-2, 5), 3);
});

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(10, 4), 6);
});

test("multiply returns the product of two numbers", () => {
  assert.equal(multiply(6, 7), 42);
});

test("divide returns the quotient of two numbers", () => {
  assert.equal(divide(20, 5), 4);
});

test("divide handles decimal results", () => {
  assert.equal(divide(7, 2), 3.5);
});

test("divide throws for zero divisor", () => {
  assert.throws(() => divide(5, 0), /Cannot divide by zero/);
});

test("modulo returns the remainder", () => {
  assert.equal(modulo(6, 5), 1);
});

test("modulo throws for zero divisor", () => {
  assert.throws(() => modulo(5, 0), /Cannot modulo by zero/);
});

test("add throws for non-number operands", () => {
  assert.throws(() => add("2", 3), /Operands must be finite numbers/);
});

test("subtract throws for NaN operand", () => {
  assert.throws(() => subtract(Number.NaN, 3), /Operands must be finite numbers/);
});

test("multiply throws for Infinity operand", () => {
  assert.throws(() => multiply(Number.POSITIVE_INFINITY, 3), /Operands must be finite numbers/);
});

test("divide throws for non-finite divisor", () => {
  assert.throws(() => divide(10, Number.NaN), /Operands must be finite numbers/);
});

test("modulo throws for non-finite dividend", () => {
  assert.throws(() => modulo(Number.NEGATIVE_INFINITY, 4), /Operands must be finite numbers/);
});