# Convert Numbers

![npm](https://img.shields.io/npm/v/@smakss/convert-numbers) ![NPM](https://img.shields.io/npm/l/@smakss/convert-numbers) ![npm](https://img.shields.io/npm/dt/@smakss/convert-numbers) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/convert-numbers)

Convert Numbers is a utility package designed to ensure consistency in data transfer by converting Arabic and Persian numerals to English numerals. This tool is essential when user inputs might originate from different keyboard settings, requiring standardization of all digits to English format before further processing or database storage.

## Demo

Check out the working demo on CodeSandbox:

[![View @smakss/convert-numbers](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-convert-numbers-bstmfj?fontsize=14&hidenavigation=1&theme=dark)

## Installation

Install the package using npm or yarn:

```bash
npm i @smakss/convert-numbers
# or
yarn add @smakss/convert-numbers
```

## Usage

Import `convertNumbers` into your project as a CommonJS or ECMAScript module:

ECMAScript Modules:

```js
import ConvertNumbers from '@smakss/convert-numbers';
```

Then, use the function like this:

```js
// Converts Persian numbers to '1234567890'
console.log(ConvertNumbers('۱۲۳۴۵۶۷۸۹۰'));

// Converts Arabic numbers to '1234567890'
console.log(ConvertNumbers('١٢٣٤٥٦٧٨٩٠'));

// Returns an empty string for no input
console.log(ConvertNumbers());
```

## Features

- Robust conversion: Utilizes a mapping approach for efficiency and readability, with a fallback to regular expressions for longer strings.
- Error resilience: In case of unforeseen errors or compatibility issues, the function gracefully falls back to a basic `for-of` loop iteration.
- Wide compatibility: Designed to work across a variety of JavaScript environments.

## Documentation

For more detailed examples and information about the function usage, refer to the JSDoc comments in the source code.

## Contributing

We welcome contributions! For guidelines on how to contribute, please check [CONTRIBUTING.md](./CONTRIBUTING.md).

## Code of Conduct

We are committed to fostering a welcoming and positive community. Please see our [Code of Conduct](./CODE_OF_CONDUCT.md) for more information.
