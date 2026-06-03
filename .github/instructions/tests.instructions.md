---
description: Testing syntax conventions for Playwright and Node test suites.
applyTo: "tests/**/*.js"
---

# Test Syntax Instructions

Use these rules for all test files.

## Framework Usage
- UI tests: use Playwright test APIs from `@playwright/test`.
- Backend unit tests: use Node built-in test runner (`node:test`) and strict assertions (`node:assert/strict`).

## Formatting
- Use 2-space indentation.
- End statements with semicolons.
- Keep test descriptions clear and behavior-focused.

## Test Naming
- Name tests by expected behavior (for example, `divide throws for zero divisor`).
- Prefer one behavior assertion per test where practical.

## Test Structure
- Keep setup in `beforeEach` for UI flows.
- Use small helper functions for repeated UI actions (for example, button pressing sequences).
- Keep tests deterministic and independent from one another.

## Assertions
- For Playwright, assert user-visible state (`toHaveValue`, text, visibility).
- For unit tests, use strict equality and explicit throw assertions (`assert.throws`).
