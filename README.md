# hostname-natural-order

[![Version npm](https://img.shields.io/npm/v/hostname-natural-order.svg)](https://www.npmjs.com/package/hostname-natural-order)
[![Npm package total downloads](https://img.shields.io/npm/dt/hostname-natural-order)](https://npmjs.com/package/hostname-natural-order)
[![Module type: CJS](https://img.shields.io/badge/module%20type-cjs-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![node.js version](https://img.shields.io/node/v/hostname-natural-order)](https://www.npmjs.com/package/hostname-natural-order)
[![License](https://img.shields.io/github/license/adhisimon/hostname-natural-order)](https://github.com/adhisimon/hostname-natural-order/blob/main/LICENSE)
[![Unit test status](https://github.com/adhisimon/hostname-natural-order/actions/workflows/node.js.yml/badge.svg)](https://github.com/adhisimon/hostname-natural-order/actions/workflows/node.js.yml?query=branch%3Amain)

Natural order (natural sort) for array of hostnames.

This library is using compare function from [natural-orderby](https://github.com/yobacca/natural-orderby).

- [hostname-natural-order](#hostname-natural-order)
  - [When do you need this package?](#when-do-you-need-this-package)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Using Array.prototype.sort](#using-arrayprototypesort)
    - [Natural order/sort array of object](#natural-ordersort-array-of-object)
  - [Command-Line Interface (CLI)](#command-line-interface-cli)
    - [CLI Installation](#cli-installation)
    - [CLI Usage](#cli-usage)
  - [Limitation](#limitation)
  - [Changelog](#changelog)
  - [License](#license)

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

### Natural order/sort array of object
Since v1.1.0, this package export "orderBy" method so you can order array of object easily.

```javascript
const { orderBy } = require('hostname-natural-order');

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
  // example to order by "name" property
  (item) => item.name,
);
```

## Command-Line Interface (CLI)
This module provide CLI tool so you can use it from CLI shell directly without programming any code.

### CLI Installation
```shell
sudo npm i --global hostname-natural-order
```

### CLI Usage

```shell
hostname-natural-order microsoft.com example.org google.com
```

It will print:
```
google.com
microsoft.com
example.org
```

This program can also read hostname list from file. Just pipe "cat" output.
```shell
cat hostnames.txt | hostname-natural-order
```

## Limitation
This library expect and has been tested if strings to compare is a valid hostname or IP address
(validate ip addresses using [ip-toolkit](https://www.npmjs.com/package/ip-toolkit)).

Unexpected results might be happen if you don't validate the input.
See [unit test](./test/) files for what we've test.

It required node.js version > 16.x because we use [ip-toolkit](https://www.npmjs.com/package/ip-toolkit)
who has requirement of node.js > 16.x. If you need to run it on older version of node.js, please raise an issue
so I can know demand for that exists.

## Changelog
See [CHANGELOG.md](./CHANGELOG.md) file.

## License
License under [MIT License](./LICENSE). Feel free to use and modified this library.
