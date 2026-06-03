# DemoAdvancedVisma

Simple calculator project with:
- Frontend UI (`calculator.html`, `calculator.css`, `calculator.js`)
- Backend service logic (`backend/calculatorService.js`)
- Automated tests with Playwright and Node test runner

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Run tests

Backend tests:

```bash
npm run test:backend
```

End-to-end tests (Playwright):

```bash
npm run test:e2e
```

## Project structure

- `calculator.html` - main calculator page
- `calculator.css` - UI styles
- `calculator.js` - client-side calculator behavior
- `backend/calculatorService.js` - backend calculation logic
- `tests/calculator.spec.js` - Playwright E2E tests
- `tests/backend/calculatorService.test.js` - backend unit tests
