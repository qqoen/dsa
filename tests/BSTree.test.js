/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { BSTree } = require('../dist/index').default.data;

describe('BSTree', () => {
    test('isEmpty', () => {
        const tree = new BSTree();

        expect(tree.isEmpty).toBe(true);
    });

    test('has', () => {
        const tree = new BSTree();

        expect(tree.has(5)).toBe(false);

        tree.insert(5);

        expect(tree.has(5)).toBe(true);
    });

    test('insert', () => {
        const tree = new BSTree();
        const values = [5, 3, 7];

        values.forEach((val) => {
            tree.insert(val);
            expect(tree.has(val)).toBe(true);
        });
    });

    test('delete', () => {
        const tree = new BSTree();

        expect(() => {
            tree.delete(123);
        }).toThrow();

        tree.insert(13);
        tree.delete(13);
        expect(tree.has(13)).toBe(false);
    });
});
