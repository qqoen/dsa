/* global require, test, describe, expect, beforeEach */
/* eslint-disable @typescript-eslint/no-var-requires */

const { Buffer } = require('../dist/index').default.data;

describe('Buffer', () => {
    let buffer;

    beforeEach(() => {
        buffer = new Buffer(1);
    });

    test('size:initial', () => {
        expect(buffer.size).toBe(0);
    });

    test('size:2', () => {
        buffer.push(1);
        buffer.push(2);
        expect(buffer.size).toBe(1);
    });

    test('size:pop', () => {
        buffer.push(1);
        buffer.pop();
        expect(buffer.size).toBe(0);
    });

    test('push:1', () => {
        buffer.push(1);
        expect(buffer.pop()).toBe(1);
    });

    test('push:2', () => {
        buffer.push(2);
        buffer.push(3);
        expect(buffer.pop()).toBe(3);
    });
});
