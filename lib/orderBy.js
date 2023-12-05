const { orderBy } = require('natural-orderby');
const compare = require('./compare');

/**
 *
 * @param {any[]} collection
 * @param {import('natural-orderby').Identifier[]} identifier
 * @returns {any[]}
 */
module.exports = (collection, identifier) => orderBy(collection, identifier, compare);
