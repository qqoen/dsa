/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { Heap } = require('../dist/index').default.data;

describe('Heap', () => {
    test('isEmpty', () => {
        const heap = new Heap();

        expect(heap.isEmpty).toBe(true);
    });
    
    test('insert', () => {
        const heap = new Heap();
        const values = [1, 2, 3, 4];

        values.forEach((val) => {
            heap.insert(val, val);
        });

        const result = [];

        heap.traverse((x) => {
            result.push(x);
        });

        expect(result).toEqual([4, 3, 2, 1]);
    });

    test('extractMax', () => {
        const heap = new Heap();
        const values = [1, 2, 3, 4];

        values.forEach((val) => {
            heap.insert(val, val);
        });

        const max = heap.extractMax();

        expect(max).toBe(4);

        const result = [];

        heap.traverse((x) => {
            result.push(x);
        });

        expect(result).toEqual([3, 1, 2]);
    });

    test('changePriority', () => {
        const heap = new Heap();
        const values = [1, 2, 3, 4];

        values.forEach((val) => {
            heap.insert(val, val);
        });

        heap.changePriority(1, 5);
        const max = heap.extractMax();

        expect(max).toBe(1);
    });
});
