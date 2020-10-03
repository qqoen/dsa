/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { search } = require('../dist/index').default;

const bt = {
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

const tree = {
    value: 8,
    children: [
        {
            value: 3,
            children: [
                {
                    value: 1,
                    children: [],
                },
            ],
        },
        {
            value: 6,
            children: [
                {
                    value: 4,
                    children: [],
                },
                {
                    value: 7,
                    children: [],
                },
            ],
        },
        {
            value: 10,
            children: [
                {
                    value: 14,
                    children: [],
                },
                {
                    value: 13,
                    children: [],
                },
            ]
        },
    ],
};

const graph = new Map([
    [1, [2, 3]],
    [2, [1, 4, 5]],
    [3, [1, 6]],
    [4, [2, 7]],
    [5, [2, 6, 7]],
    [6, [3, 5, 7]],
    [7, [4, 5, 6]],
]);

function testBinaryTree(name, fn) {
    test(`${name}: Binary Tree - root`, () => {
        expect(fn(8, bt)).toBe(true);
    });

    test(`${name}: Binary Tree - furthest element`, () => {
        expect(fn(13, bt)).toBe(true);
    });

    test(`${name}: Binary Tree - non-existing element`, () => {
        expect(fn(0, bt)).toBe(false);
    });
}

function testTree(name, fn) {
    test(`${name}: Tree - root`, () => {
        expect(fn(8, tree)).toBe(true);
    });

    test(`${name}: Tree - furthest element`, () => {
        expect(fn(13, tree)).toBe(true);
    });

    test(`${name}: Tree - non-existing element`, () => {
        expect(fn(0, tree)).toBe(false);
    });
}

function testGraph(name, fn) {
    test(`${name}: Graph`, () => {
        expect(fn(7, 1, graph)).toBe(true);
        expect(fn(8, 1, graph)).toBe(false);
    });
}

describe('search', () => {
    const { BFS, DFS, binarySearch } = search;

    testBinaryTree('BFS', BFS.search);

    testBinaryTree('DFS', DFS.searchBinary);
    testTree('DFS', DFS.searchTree);
    testGraph('DFS', DFS.searchGraph);

    describe('Binary Search', () => {
        test('empty array', () => {
            expect(binarySearch(4, [])).toBe(-1);
        });

        test('one element', () => {
            expect(binarySearch(3, [3])).toBe(0);
        });

        test('first of two elements', () => {
            expect(binarySearch(1, [1, 2])).toBe(0);
        });

        test('second of two elements', () => {
            expect(binarySearch(2, [1, 2])).toBe(1);
        });

        test('missing element', () => {
            expect(binarySearch(6, [1, 2, 3, 4, 5])).toBe(-1);
        });

        test('some array', () => {
            expect(binarySearch(5, [1, 2, 3, 4, 5, 6, 7])).toBe(4);
        });
    });
});
