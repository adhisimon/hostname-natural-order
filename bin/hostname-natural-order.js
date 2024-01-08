#!/usr/bin/env node

const readline = require('node:readline');
const { orderBy } = require('../lib');

const hostnames = process.argv.slice(2).map((item) => item.toLowerCase()).filter((item) => item.indexOf('-') !== 0);

if (!hostnames.length) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on('line', (line) => {
    if (!line.trim()) return;
    hostnames.push(line.trim());
  });

  rl.once('close', () => {
  });
}

orderBy(hostnames, (hostname) => hostname)
  // eslint-disable-next-line no-console
  .forEach((hostname) => console.log(hostname));
