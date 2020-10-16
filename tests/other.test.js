/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { other, data } = require('../dist/index').default;

describe('other', () => {
    test('Floyd\'s algorithm', () => {
        const list1 = new data.LinkedList(1, 2, 3, 4, 5);

        const res0 = list1.search((_, i) => i === 0);
        const res1 = list1.search((_, i) => i === 1);
        const res4 = list1.search((_, i) => i === 4);

        res4.node.next = res1.node;

        const result = other.hasCycle(res0.node);

        expect(result).toBe(1);
    });
});
