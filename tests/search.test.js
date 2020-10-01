/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { search } = require('../dist/index').default;

const tree = {
    value: 8,
    left: {
        value: 3,
        left: {
            value: 1,
        },
        right: {
            value: 6,
            left: {
                value: 4,
            },
            right: {
                value: 7,
            },
        }
    },
    right: {
        value: 10,
        right: {
            value: 14,
            left: {
                value: 13,
            },
        }
    },
};

describe('search', () => {
    test('DFS', () => {
        expect(search.DFS(8, tree)).toBe(true);
        expect(search.DFS(13, tree)).toBe(true);
        expect(search.DFS(0, tree)).toBe(false);
    });
});
