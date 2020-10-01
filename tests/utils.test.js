/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { utils } = require('../dist/index').default;

describe('utils', () => {
    test('shuffle', () => {
        const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = utils.shuffle(sorted);

        expect(result.length).toBe(sorted.length);
    });
});
