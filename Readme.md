# Convert Numbers

![npm](https://img.shields.io/npm/v/@smakss/convert-numbers) ![NPM](https://img.shields.io/npm/l/@smakss/convert-numbers) ![npm](https://img.shields.io/npm/dt/@smakss/convert-numbers) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/convert-numbers)

Convert Numbers is a utility package that helps ensure consistency in data transfer by converting Arabic and Persian numerals to English numerals. This is particularly useful when user inputs can come from different keyboard settings, and there's a need to standardize all digits to English format before sending data to a database or processing it further.

## Demo

You can check the [working demo](https://runkit.com/smakss/convert-numbers) on RunKit.

Or

[![View @smakss/convert-numbers](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-convert-numbers-bstmfj?fontsize=14&hidenavigation=1&theme=dark)

## Installation

To install the package, you can use npm or yarn with the following commands:

```bash
npm i @smakss/convert-numbers
# or
yarn add @smakss/convert-numbers
```

## Usage

Import the `convertNumbers` function into your project using CommonJS or ECMAScript modules:

CommonJS:

```js
const ConvertNumbers = require('@smakss/convert-numbers');
```

ECMAScript Modules:

```js
import ConvertNumbers from '@smakss/convert-numbers';
```

Then, use the function as follows:

```js
// Returns '1234567890' for Persian numbers
console.log(ConvertNumbers('۱۲۳۴۵۶۷۸۹۰'));

// Returns '1234567890' for Arabic numbers
console.log(ConvertNumbers('١٢٣٤٥٦٧٨٩٠'));

// Returns "" for no input
console.log(ConvertNumbers());
```

## Documentation

For more detailed examples and function usage, please refer to the JSDoc comments within the code.

## Contributing

Contributions to the project are welcome! Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## Code of Conduct

To maintain a welcoming and positive community, please see our [Code of Conduct](./CODE_OF_CONDUCT.md).
