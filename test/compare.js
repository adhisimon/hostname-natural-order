/* global describe it */

require('should');

const { orderBy } = require('natural-orderby');
const compare = require('../lib/compare');

describe('#compare', () => {
  it('should handle empty value', () => {
    compare(null, 'a').should.equal(-1, '1196F39B');
    compare('a', null).should.equal(1, '358D2F6F');
    compare(null, null).should.equal(0, '430968EC');
  });

  it('should return correct result', () => {
    compare('example.com', 'test.com').should.equal(-1, '8DEFFF4D');
    compare('test.com', 'example.com').should.equal(1, 'BB5B40DE');
    compare('test.org', 'test.org').should.equal(0, 'D8F6E1DC');

    compare('test1.org', 'test2.org').should.equal(-1, 'A6C33CED');
    compare('test2.org', 'test1.org').should.equal(1, 'E43282BA');

    compare('test2.org', 'test100.org').should.equal(-1, '30866EBA');
    compare('test100.org', 'test2.org').should.equal(1, 'DAAF1F6D');

    compare('test.org', 'a.test.org').should.equal(-1, '82C688D5');
    compare('a.test.org', 'test.org').should.equal(1, '656F94E4');

    const array1 = [
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

    const array2 = JSON.parse(JSON.stringify(array1)).sort(() => 0.5 - Math.random()).sort(compare);
    const itemCount = array1.length;
    for (let i = 0; i < itemCount; i += 1) {
      array1[i].should.equal(array2[i], `71D8517A iterate-${i}`);
    }
  });

  it('should happily called by orderBy', () => {
    const array1 = [
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

    const array2 = orderBy(
      array1,
      (item) => item.name,
      compare,
    );

    const itemCount = array1.length;
    for (let i = 0; i < itemCount; i += 1) {
      array1[i].name.should.equal(array2[i].name, `DF063FC5 iterate-${i}`);
    }
  });
});
