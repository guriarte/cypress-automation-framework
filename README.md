# Cypress E-Commerce Automation Framework

This repository demonstrates how to set up a **Cypress** testing framework to cover end-to-end (E2E) flows, smaller UI flows, and basic API tests for an e-commerce practice application.

---

## Table of Contents

1. [Application Under Test](#application-under-test)
2. [Why Cypress?](#why-cypress)
3. [Requirements](#requirements)
4. [Environment Variables](#environment-variables)
5. [Installation](#installation)
6. [Project Structure](#project-structure)
7. [Page Objects & Utilities](#page-objects--utilities)
8. [Running Tests](#running-tests)
9. [Config & Environments](#config--environments)
10. [Scoping Tests or Tags](#scoping-tests-or-tags)
11. [Reporting & Artifacts](#reporting--artifacts)
12. [Continuous Integration](#continuous-integration)
13. [Mocks & Fixtures](#mocks--fixtures)

---

## Application Under Test

The application under tests is an **e-commerce platform** designed to practice automation testing. You can find the codebase, build, and run instructions here:

> [Practice Software Testing](https://github.com/testsmith-io/practice-software-testing)

---

## Why Cypress?

This repository is a **demonstration** of how to set up a **Cypress** framework. It focuses on:

- **Entire E2E flows** (covering multiple pages)
- **Smaller UI flows** (targeted test scenarios)
- **API tests** (backend endpoints)

---

## Requirements

- **Node.js**: v22.7
- **NPM**: v10.8

Ensure you install the correct versions of Node/NPM to avoid compatibility issues.

---

## Environment Variables

- **Local Setup**: Store environment variables (like credentials) in a local `.env` file (not committed to version control).
- **CI Setup**: Use **GitHub Actions secrets** for password or other sensitive data.

---

## Installation

1. Clone this repository
2. Run:
   ```bash
   npm install
   ```
3. No additional setup steps are required.

---

## Project Structure

- **cypress**

  - **fixtures**
  - **support**
    -commands
    -helpers
    -mocks
    -pages
    -types
  - **tests**
    -flows
    -integration
    -api

- **tests/flows**: Contains end-to-end scenarios.
- **tests/integration**: Shorter, more focused UI tests.
- **tests/api**: Basic API backend tests.

---

## Page Objects & Utilities

- Page objects, commands, and utility/helper files are located under **`cypress/support/`**.
- This folder helps maintain a clean separation between test code and the underlying logic to interact with the application.

---

## Running Tests

- **Local**:

  ```bash
  npm run cy:run:local
  ```

This command runs tests locally on your machine.

- **CI**:
  ```bash
  npm run cy:run:ci
  ```

Triggered typically within GitHub Actions or any CI server environment.

---

## Config & Environments

- You can create **different config files** in the project root (e.g., `cypress.config.dev.ts`, `cypress.config.staging.ts`) for various environments.
- Specify them when running tests by adding `--config-file` or updating your script commands as needed.

---

## Reporting & Artifacts

- The framework uses **mochawesome** plugin to generate **HTML test reports**.
- Locally, reports are saved in `cypress/reports`.
- On GitHub Actions, these reports are **uploaded as artifacts** so you can view them from the CI run summary.

---

## Continuous Integration

- This project uses **GitHub Actions** for CI.
- Artifacts (screenshots, videos, test reports) are uploaded to GitHub Actions.
- Secret environment variables (like passwords) are set in **GitHub Actions secrets** so they aren’t exposed publicly.

---

## Mocks & Fixtures

- **Fixtures** (static mock data) live in **`cypress/fixtures`**.
- For **API mocks** or more advanced test data stubs, check the `mocks` folder under `cypress/support`.

---

### Questions or Contributions

If you have any questions or want to suggest improvements, feel free to open an issue or submit a pull request!
