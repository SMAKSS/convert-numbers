# Convert Numbers

![npm](https://img.shields.io/npm/v/@smakss/convert-numbers) ![NPM](https://img.shields.io/npm/l/@smakss/convert-numbers) ![npm](https://img.shields.io/npm/dt/@smakss/convert-numbers) ![npm unpacked size](https://img.shields.io/npm/unpacked-size/%40smakss%2Fconvert-numbers)

`@smakss/convert-numbers` converts Arabic-Indic and Persian digits to English digits while preserving the rest of your text.

## Demo

Try the [CodeSandbox demo](https://codesandbox.io/s/smakss-convert-numbers-bstmfj?fontsize=14&hidenavigation=1&theme=dark), or run the local playground included in this repository.

## Installation

```sh
npm install @smakss/convert-numbers
# or
pnpm add @smakss/convert-numbers
```

## Usage

For ECMAScript modules:

```js
import convertNumbers from '@smakss/convert-numbers';

console.log(convertNumbers('۱۲۳۴۵۶۷۸۹۰')); // '1234567890'
console.log(convertNumbers('رقم الطلب: ١٢٣-٤٥٦')); // 'رقم الطلب: 123-456'
console.log(convertNumbers('')); // ''
```

For CommonJS:

```js
const { default: convertNumbers } = require('@smakss/convert-numbers');

console.log(convertNumbers('٤٥٦')); // '456'
```

## Features

- Converts Arabic-Indic digits (`٠`–`٩`) and Persian digits (`۰`–`۹`).
- Preserves surrounding text, punctuation, spacing, and other digits.
- Includes ESM, CommonJS, and TypeScript declaration entrypoints.
- Supports Node.js 18 and later, as well as browsers.

## Local playground

The Vite playground imports this package through the pnpm workspace, so you can try local changes without publishing a version:

```sh
pnpm install
pnpm run dev:playground
```

Build the playground with `pnpm run build:playground`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development and pull request guidelines.

## Code of Conduct

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.
