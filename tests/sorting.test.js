/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { sorting, utils } = require('../dist/index').default;

const numComp = (a, b) => {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
};

const runSortTests = (sortName, sort) => {
    test(`${sortName}: empty`, () => {
        expect(sort([])).toEqual([]);
    });

    test(`${sortName}: one element`, () => {
        expect(sort([0])).toEqual([0]);
    });

    test(`${sortName}: two elements`, () => {
        expect(sort([2, 1])).toEqual([1, 2]);
    });

    test(`${sortName}: multiple elements`, () => {
        const sample = [4, 8, 3, 0, 1, 7, 5, 2, 9, 6];
        const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(sort(sample)).toEqual(sorted);
    });

    test(`${sortName}: shuffle`, () => {
        const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const shuffled = utils.shuffle(sorted);
        expect(sort(shuffled)).toEqual(sorted);
    });
};

const testSort = (sortName, sortFn) => {
    const sort = sortFn.bind(null, numComp);
    runSortTests(sortName, sort);
};

describe('sorting', () => {
    testSort('bubble', sorting.bubble.sort);
    testSort('insertion', sorting.insertion.sort);
    testSort('merge', sorting.merge.sort);

    runSortTests('quicksort-random', sorting.quicksort.sort);
    runSortTests('quicksort-median', sorting.quicksort.sort2);
});
