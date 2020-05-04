# Convert numbers

![npm](https://img.shields.io/npm/v/@smakss/convert-numbers) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/convert-numbers) ![NPM](https://img.shields.io/npm/l/@smakss/convert-numbers) ![npm](https://img.shields.io/npm/dm/@smakss/convert-numbers) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/convert-numbers)

Due to keeping consistency in our data transfer with API's we need to make sure digits or numbers entered by user inputs have always transferred by English. Since users could always fill data with different keyboard settings we need to make sure that we don't send Arabic or Persian numbers to our database. So to avoid such an inconsistency we should always translate our numbers or prevent a user from entering unwanted data. Convert numbers created for this cause to make sure every digit input is in standard format of it.

## How it works?

To install it you can simply do the following command:

``` 
npm i @smakss/convert-numbers
or
yarn add @smakss/convert-numbers
```

to include with `ES5` or common js you can simply do this:

```
var ConvertNumbers = require('@smakss/convert-numbers');
```

or to include with `ES6` you simply do this one:

```
import ConvertNumbers from '@smakss/convert-numbers'
```

then to use it within your application you can do it just like this:
```
ConvertNumbers('۱۲۳۴۵۶۷۸۹۰') // It will return 1234567890 in string format.
```