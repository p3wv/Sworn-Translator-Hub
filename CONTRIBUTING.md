# Contributing to Sworn Translator Hub

Thank you for considering contributing to this project! Here are some guidelines to help you get started:

## Getting Started

- Clone the repository and install dependencies using [pnpm](https://pnpm.io/):
  ```sh
  pnpm install
  ```
- Use Node.js 20+ for best compatibility.
- The workspace uses a pnpm monorepo structure. All apps and packages are in the `artifacts/` and `lib/` folders.

## Development

- To start the main frontend:
  ```sh
  pnpm --filter @workspace/sworn-translator dev
  ```
- To start the backend API server:
  ```sh
  pnpm --filter @workspace/api-server dev
  ```
- For type checking:
  ```sh
  pnpm run typecheck
  ```
- For building all packages:
  ```sh
  pnpm run build
  ```

## Code Style

- Use Prettier for formatting (`pnpm prettier`).
- TypeScript is required for all packages.
- Keep all secrets and credentials out of the repository (see `.gitignore`).

## Issues & PRs

- Please open an issue before submitting a PR for large changes.
- All PRs should be rebased on the latest `main` branch.
- Write clear commit messages and PR descriptions.

## Project Structure

- `artifacts/` — Applications (frontend, backend, mockups)
- `lib/` — Shared libraries (API clients, DB, types)
- `scripts/` — Utility scripts

## License

This project is MIT licensed.
