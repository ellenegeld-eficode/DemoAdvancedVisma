---
description: Frontend JavaScript/HTML/CSS syntax conventions for calculator UI.
applyTo: "calculator.{html,css,js}"
---

# Frontend Syntax Instructions

Use these rules for the calculator frontend files.

## JavaScript Style
- Use modern JavaScript with `const`/`let` (avoid `var`).
- Prefer single quotes for strings in frontend JavaScript.
- Use 4-space indentation in `calculator.js`.
- End statements with semicolons.

## DOM and Events
- Query DOM nodes once and reuse references where practical.
- Use `addEventListener` for interaction handling.
- Keep UI state updates explicit (`display.value = ...`).

## Expression Logic
- Keep parsing/evaluation logic in small pure functions.
- Validate malformed input and throw clear `Error` messages.
- Return display-ready strings from expression evaluation functions.

## HTML/CSS
- Keep class names simple and semantic (`display`, `button`).
- Prefer readable, minimal markup and predictable selectors for tests.
