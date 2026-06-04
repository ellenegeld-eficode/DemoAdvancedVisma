---
name: New Calculator Operation
description: "Add a new calculator operation across the UI, frontend evaluator, backend service, and tests"
argument-hint: "operator symbol, operation name, behavior, and edge cases"
agent: "agent"
---

Create a new calculator operation for this repository using the chat arguments as the source of truth.

Treat the request as incomplete unless it specifies all of these details:
- the operator symbol or button label ${input:operatorSymbol}
- the backend function name ${input:functionName}
- the mathematical behavior ${input:behavior}

If any detail is missing, ask a short clarifying question before editing.

Then implement the operation end to end:

1. Update [calculator.html](../../calculator.html) if the operation needs a new button or visible control.
2. Update [calculator.js](../../calculator.js) so the frontend evaluator supports the new operation, including precedence, tokenization, validation, and display behavior.
3. Update [backend/calculatorService.js](../../backend/calculatorService.js) with a focused named function for the new operation when the backend service should expose it.
4. Update [tests/backend/calculatorService.test.js](../../tests/backend/calculatorService.test.js) with behavior-focused unit tests.
5. Update [tests/frontend/calculator.spec.js](../../tests/frontend/calculator.spec.js) with Playwright coverage for the UI flow.

Follow these repository conventions:
- Frontend files follow [frontend instructions](../instructions/frontend.instructions.md).
- Backend files follow [backend instructions](../instructions/backend.instructions.md).
- Test files follow [test instructions](../instructions/tests.instructions.md).
- Keep the change minimal and consistent with the existing calculator behavior.
- Preserve stable error messages when tests depend on them.

Validation steps:
- Run `npm run test:backend`.
- Run `npm run test:e2e`.

Response format:
- Briefly state the operation that was added.
- List the files changed.
- Mention any edge cases or validation rules that were added.
- Report the test results.