# hostname-natural-order
Natural order (sort) for array of hostnames.

[![NPM version][npm-image]][npm-url]
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)

This library is using compare function from [natural-orderby](https://github.com/yobacca/natural-orderby).

## Installation

```
npm i hostname-natural-order
```

## Usage

Example:
```javacscript
const { compare } = require('hostname-natural-order');

const domains = [
  'test.org',
  'org',
  'a.test.net',
  'net',
  'c.test.net',
  '3.b.test.net',
  '100.b.test.net',
  'example.org',
  '2.b.test.net',
  'test.net',
  'c.test.net',
  '1.b.test.net',
];

domains.sort(compare);
console.log(JSON.stringify(domains, null, 2));
```

Will print:
```
[
  "net",
  "test.net",
  "a.test.net",
  "1.b.test.net",
  "2.b.test.net",
  "3.b.test.net",
  "100.b.test.net",
  "c.test.net",
  "c.test.net",
  "org",
  "example.org",
  "test.org"
]
```
