﻿Opulib

Opulib is a pure javascript methods/functions library
These methods can be used in daily works

In order to install the library/package run the command below

```
npm install opulib --save

or,

yarn add opulib --save
```

### Code example

```
import { arrayMethods } from "opulib";

const { eraseAt, insertAt} = arrayMethods;


const testArr = [1, 2, 3, 4, 5];

// we have two parameter: array, index
const erased = eraseAt(testArr, 2);

// we have three parameter: array, index, value
const inserted = insertAt(erased, 2, 3);

console.log("Test Array: ", testArr);

// we have removed 3 from testArr at index of 2
console.log("Erased: ", erased);

// we have added 3 into testArr at index of 2
console.log("Inserted: ", inserted);

```

Thank you.
