/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { HashSet } = require('../dist/index').default.data;

describe('HashSet', () => {
    test('add', () => {
        const set = new HashSet();

        set.add(1);
        expect(set.size).toBe(1);
    });

    test('delete', () => {
        const set = new HashSet();
        set.add(1);
        set.delete(1);
        expect(set.has(1)).toBe(false);
    });

    test('has', () => {
        const set = new HashSet();
        set.add(1);
        expect(set.has(1)).toBe(true);
    });
});
