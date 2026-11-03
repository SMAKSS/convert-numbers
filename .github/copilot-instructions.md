Follow `AGENTS.md` and the repository's existing patterns.

- Use Node.js from `.nvmrc`, pnpm 12.17.0, and the scripts in `package.json`.
- Keep library source in `src/` and behavior regression tests in `test/`.
- Preserve the ESM, CommonJS, and TypeScript declaration exports.
- Convert only Arabic-Indic and Persian numerals; preserve surrounding text.
- Keep playground code importing `@smakss/convert-numbers` through the pnpm workspace.
- Update `Readme.md` when changing public behavior or examples.
- Keep build output in `dist/`; do not commit generated files or publish a release from a feature branch.

Helpful commands:
- `pnpm test`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm format:check`
- `pnpm audit`
- `pnpm run dev:playground`
