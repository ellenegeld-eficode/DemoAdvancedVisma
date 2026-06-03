---
description: Backend JavaScript syntax and structure conventions.
applyTo: "backend/**/*.js"
---

# Backend Syntax Instructions

Use these rules for backend JavaScript files.

## Module System
- Use CommonJS (`require`, `module.exports`).
- Export functions as named properties in a single `module.exports` object.

## Formatting
- Use 2-space indentation.
- End statements with semicolons.
- Prefer double quotes for strings.

## Function Style
- Use function declarations for exported service operations.
- Keep each function focused on one operation.
- Use early validation with explicit `Error` throws for invalid input.

## Error Handling
- Throw `Error` with clear, user-readable messages.
- Keep error text stable when tests depend on it.

## Naming
- Use camelCase for function names and variables.
- Use descriptive names for math/service operations (`add`, `divide`, etc.).
