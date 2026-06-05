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

test("modulo returns the remainder of two numbers", () => {
  assert.equal(modulo(6, 5), 1);
});

test("modulo throws for zero divisor", () => {
  assert.throws(() => modulo(5, 0), /Cannot modulo by zero/);
});

test("add throws for non-numeric input", () => {
  assert.throws(() => add("2", 3), /First operand must be a finite number/);
});

test("add throws for non-finite second operand", () => {
  assert.throws(() => add(2, Number.NEGATIVE_INFINITY), /Second operand must be a finite number/);
});

test("multiply throws for non-finite input", () => {
  assert.throws(() => multiply(Number.POSITIVE_INFINITY, 3), /First operand must be a finite number/);
});

test("subtract throws for non-numeric input", () => {
  assert.throws(() => subtract(10, "4"), /Second operand must be a finite number/);
});

test("divide throws for non-finite dividend", () => {
  assert.throws(() => divide(Number.NaN, 2), /First operand must be a finite number/);
});

test("modulo throws for non-finite divisor", () => {
  assert.throws(() => modulo(10, Number.POSITIVE_INFINITY), /Second operand must be a finite number/);
});