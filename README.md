# QA Bootcamp Week 2 – Playwright Test Suite

This repository contains automated UI and API tests developed during Week 2 of the QA Bootcamp using TypeScript and Playwright.

The test suite covers:
- Homepage functionality.
- Login validation.
- Product search.
- Page Object Model implementation.
- Cart API operations.
- Products API responses.

## Prerequisites

- Node.js (LTS)
- Git

## Setup and Running Tests

After cloning the repository, follow these three steps:

### 1. Install dependencies and Chromium

```bash
npm install
npx playwright install chromium
```

### 2. Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

The `.env` file contains the Toolshop website and API URLs. Update them only if necessary.

### 3. Run the test suite

```bash
npm test
```

This executes all Playwright tests in the `tests/` directory using Chromium.

## Project Structure

| Folder/File | Description |
|---|---|
| `tests/` | Playwright UI and API test cases |
| `pages/` | Page Object Model classes |
| `scripts/` | Helper scripts |
| `features/` | Bootcamp practice materials |
| `playwright.config.ts` | Playwright configuration |
| `.env.example` | Example environment variables |

## Additional Command

Run the environment and API connectivity check:

```bash
npm run check
```

## Security

Never commit your `.env` file or expose credentials, tokens, or other sensitive information. The `.env` file is excluded through `.gitignore`.