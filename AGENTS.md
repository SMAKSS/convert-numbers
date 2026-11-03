# Agent Instructions

## Project overview

- Package: `@smakss/convert-numbers`
- Source lives in `src/`; tests live in `test/`.
- The Vite playground in `playground/` imports this package through the pnpm workspace.
- `dist/` is generated and must not be committed.

## Working conventions

- Use Node.js from `.nvmrc` and pnpm 12.17.0 from `package.json`.
- Prefer the scripts declared in `package.json` for tests, type checks, lint, formatting, builds, and release.
- Preserve the API, ESM and CommonJS exports, and both TypeScript declaration entrypoints.
- Write regression tests and update documentation when behavior changes.
- Convert only Arabic-Indic and Persian digits; preserve other text and digits.
- Keep playground examples representative of the published API and use the workspace dependency, not private source paths.
- Use Conventional Commits. semantic-release handles release versions from the default branch; do not change versions manually or publish outside that workflow unless requested.

## Useful commands

- `pnpm install`
- `pnpm test`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm format:check`
- `pnpm audit`
- `pnpm run dev:playground`
- `pnpm run build:playground`
