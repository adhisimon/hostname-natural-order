[![Minimum node.js version](https://badgen.net/npm/node/hostname-natural-order)](https://www.npmjs.com/package/hostname-natural-order)
[![Version npm](https://img.shields.io/npm/v/hostname-natural-order.svg)](https://www.npmjs.com/package/hostname-natural-order)
[![Npm package total downloads](https://img.shields.io/npm/dt/hostname-natural-order)](https://npmjs.com/package/hostname-natural-order)
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![GitHub License](https://img.shields.io/github/license/adhisimon/hostname-natural-order)](https://github.com/adhisimon/hostname-natural-order/blob/main/LICENSE)



- [hostname-natural-order](#hostname-natural-order)
  - [When do you need this package?](#when-do-you-need-this-package)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Using Array.prototype.sort](#using-arrayprototypesort)
    - [Using orderBy from natural-orderby](#using-orderby-from-natural-orderby)
  - [Limitation](#limitation)
  - [Changelog](#changelog)
  - [License](#license)

# hostname-natural-order
Natural order (natural sort) for array of hostnames.

This library is using compare function from [natural-orderby](https://github.com/yobacca/natural-orderby).

## When do you need this package?
You need it when you need to sort hostname list like this correctly:
- www1.example.org
- www2.example.org
- www100.example.org
- www200.example.org
- www1.test.org
- www2.test.org

If you just use standard Array.prototype.sort, it would sort incorrectly and return:
- www1.example.org
- www1.test.org
- www100.example.org
- www2.example.org
- www2.test.org
- www200.example.org

That order is not what you expect? Here come a package to order that correctly.

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

Don't forget to install [natural-orderby](https://github.com/yobacca/natural-orderby) by at first.

```
npm i natural-orderby
```

```javascript
const { compare: compareHostname } = require('hostname-natural-order');
const { orderBy } = require('natural-orderby');

const hostnameList = [
  { name: '2.b.test.net' },
  { name: 'test.net' },
  { name: '1.b.test.net' },
  { name: '8.8.4.4' },
  { name: '100.100.100.100' },
  { name: 'example.org' },
  { name: '100.b.test.net' },
  { name: '8.8.8.8' },
  { name: 'test.org' },
  { name: 'a.test.net' },
  { name: 'c.test.net' },
  { name: '1.1.1.1' },
  { name: 'net' },
  { name: 'org' },
  { name: 'c.test.net' },
];

const hostnameListSorted = orderBy(
  hostnameList,
  (item) => item.name,
  compareHostname,
);
```

## Limitation
This library assume and has been tested if strings to compare is a valid hostname or IP address. We don't check if it's not.
Unknown result will happens if you don't validate the input.
See [unit test](./test/) files.

## Changelog
See [CHANGELOG.md](./CHANGELOG.md) file.

## License
License under [MIT License](./LICENSE). Feel free to use and modified this library.
