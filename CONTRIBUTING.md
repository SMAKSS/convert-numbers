# Contributing to @smakss/convert-numbers

Thank you for helping improve this package. Please discuss substantial changes in an issue before opening a pull request.

## Development setup

- Use the Node.js version from `.nvmrc`.
- Install dependencies with `pnpm install`.
- Run `pnpm test`, `pnpm typecheck`, `pnpm lint`, `pnpm format:check`, and `pnpm audit` before submitting.
- Run `pnpm run dev:playground` to try local package changes in the example app.

## Pull requests

- Keep each pull request focused and describe the reason for the change.
- Add or update tests for behavior changes.
- Update `Readme.md` when user-facing behavior or examples change.
- Do not edit the package version manually. Release versions and notes are generated from Conventional Commits after changes reach `master`.
- Do not commit generated files from `dist/` or the playground build.

## Coding standards

- Keep package source in `src/` and unit tests in `test/`.
- Keep ESM, CommonJS, and TypeScript package entrypoints working.
- Keep the playground importing the package through the pnpm workspace, not through private source paths.
- Use Conventional Commit messages; the commit hook checks them.

## Code of Conduct

Please follow the [Code of Conduct](./CODE_OF_CONDUCT.md).
