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

describe('search', () => {
    const { BFS, DFS } = search;

    testBinaryTree('BFS', BFS.search);
    testBinaryTree('DFS', DFS.search);
    testTree('DFS', DFS.search2);
});
