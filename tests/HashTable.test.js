/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { HashTable } = require('../dist/index').default;

describe('HashTable', () => {
    test('getAt', () => {
        const table = new HashTable();

        table.setAt('key1', 123);

        expect(table.getAt('key1')).toBe(123);
    });

    test('setAt', () => {
        const table = new HashTable();

        table.setAt('key1', 123);
        table.setAt('key1', 321);

        expect(table.getAt('key1')).toBe(321);
    });

    test('deleteAt', () => {
        const table = new HashTable();

        table.setAt('key1', 123);
        table.deleteAt('key1');

        expect(table.getAt('key1')).toBe(undefined);

        expect(() => {
            table.delete('key2');
        }).toThrow();
    });
});
