/* global describe it */

require('should');

const { orderBy } = require('../lib');

describe('#orderBy', () => {
  it('should return correct ordered list', () => {
    const collection = [
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

    const result = orderBy(
      collection,
      (item) => item.name,
    )
      .map((item) => item.name);

    const expectedNameSorted = [
      '1.1.1.1',
      '8.8.4.4',
      '8.8.8.8',
      '100.100.100.100',
      'net',
      'test.net',
      'a.test.net',
      '1.b.test.net',
      '2.b.test.net',
      '100.b.test.net',
      'c.test.net',
      'c.test.net',
      'org',
      'example.org',
      'test.org',
    ];

    result.should.deepEqual(expectedNameSorted, 'CCE12D64');
  });
});
