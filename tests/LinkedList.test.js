/* global require, test, describe, expect */
/* eslint-disable @typescript-eslint/no-var-requires */

const { LinkedList } = require('../dist/index').default;

describe('LinkedList', () => {
    test('isEmpty', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList(123);

        expect(list1.isEmpty).toBe(true);
        expect(list2.isEmpty).toBe(false);
    });

    test('length', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList(123, 23, 70);

        expect(list1.length).toBe(0);
        expect(list2.length).toBe(3);
    });

    test('getAt', () => {
        const initial = 123;
        const list = new LinkedList(initial);

        expect(list.getAt(0)).toBe(initial);

        // invalid data
        expect(() => {
            list.getAt(-1);
        }).toThrow();
    });

    test('find', () => {
        const initial = 123;
        const missingValue = 321;
        const list = new LinkedList(initial);

        expect(list.find(initial)).toBe(0);
        expect(list.find(missingValue)).toBe(-1);
    });

    test('push', () => {
        const list = new LinkedList(10);
        list.push(11);

        expect(list.getAt(1)).toBe(11);
    });

    test('delete', () => {
        const list = new LinkedList();

        expect(() => {
            list.delete(1);
        }).toThrow();

        list.push(10);
        list.push(11);
        list.push(12);
        list.delete(11);

        expect(list.getAt(0)).toBe(10);
        expect(list.getAt(1)).toBe(12);

        expect(() => {
            list.delete(13);
        }).toThrow();
    });

    test('insert', () => {
        const list = new LinkedList();

        expect(() => {
            list.insert(1);
        }).toThrow();

        list.push(10);
        list.push(12);
        list.insert(1, 11);

        expect(list.getAt(0)).toBe(10);
        expect(list.getAt(1)).toBe(11);
        expect(list.getAt(2)).toBe(12);

        expect(() => {
            list.insert(20, 13);
        }).toThrow();
    });
});
