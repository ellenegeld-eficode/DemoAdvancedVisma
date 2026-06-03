const test = require("node:test");
const assert = require("node:assert/strict");

const {
  add,
  subtract,
  multiply,
  divide,
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