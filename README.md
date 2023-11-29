[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)

[![Version npm](https://img.shields.io/npm/v/hostname-natural-order.svg)](https://www.npmjs.com/package/hostname-natural-order)
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)

# hostname-natural-order
Natural order (sort) for array of hostnames.


This library is using compare function from [natural-orderby](https://github.com/yobacca/natural-orderby).

## Installation

```
npm i hostname-natural-order
```

## Usage

### Using Array.prototype.sort
```javascript
const { compare: compareHostname } = require('hostname-natural-order');

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

domains.sort(compareHostname);
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

### Using orderBy from natural-orderby

```javascript
const { compare: compareHostname } = require('hostname-natural-order');
const { orderBy } = require('natural-orderby');

const hostnameList = [
  { name: '1.1.1.1' },
  { name: '8.8.4.4' },
  { name: '8.8.8.8' },
  { name: '100.100.100.100' },
  { name: 'net' },
  { name: 'test.net' },
  { name: 'a.test.net' },
  { name: '1.b.test.net' },
  { name: '2.b.test.net' },
  { name: '100.b.test.net' },
  { name: 'c.test.net' },
  { name: 'c.test.net' },
  { name: 'org' },
  { name: 'example.org' },
  { name: 'test.org' },
];

const hostnameListSorted = orderBy(
  hostnameList,
  (item) => item.name,
  compareHostname,
);
```

## Changelog
See [CHANGELOG.md](./CHANGELOG.md) file.

## License
License under [MIT License](./LICENSE). Feel free to use and modified this library.
