# Convert numbers

![npm](https://img.shields.io/npm/v/@smakss/convert-numbers) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/convert-numbers) ![NPM](https://img.shields.io/npm/l/@smakss/convert-numbers) ![npm](https://img.shields.io/npm/dt/@smakss/convert-numbers) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/convert-numbers)

Due to keeping consistency in our data transfer with API's we need to make sure digits or numbers entered by user inputs have always transferred by English. Since users could always fill data with different keyboard settings we need to make sure that we don't send Arabic or Persian numbers to our database. So to avoid such an inconsistency we should always translate our numbers or prevent a user from entering unwanted data. Convert numbers created for this cause to make sure every digit input is in standard format of it.

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/convert-numbers
or
yarn add @smakss/convert-numbers
```

to include it with common js module you should do this:

```js
var ConvertNumbers = require('@smakss/convert-numbers');
```

and to include it with ECMAscript module you can simply do this one:

```js
import ConvertNumbers from '@smakss/convert-numbers';
```

then to use it within your application you can do it just like this:

```js
ConvertNumbers(); 

// Result: undefined 
// If you don't provide any input it will return undefined.
```

```js
ConvertNumbers('۱۲۳۴۵۶۷۸۹۰');

// Result: '1234567890'
```

```js
ConvertNumbers('١٢٣٤٥٦٧٨٩٠');


// Result: '1234567890'
```

## Demo

You can check the [working demo](https://runkit.com/smakss/convert-numbers) in runkit.
