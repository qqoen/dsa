export enum Order {
    LT = -1,
    EQ = 0,
    GT = 1,
}

export type Compare<T> = (x: T, y: T) => Order;

export interface BinaryNode<T> {
    value: T;
    left?: BinaryNode<T>;
    right?: BinaryNode<T>;
}

export function hashString(key: string): number {
    let val = 0;

    for (let i = 0; i < key.length; i++) {
        val = val * 2 + key.charCodeAt(i);
    }

    return val;
}

export function remove<T>(arr: T[], elem: T): void {
    const idx = arr.indexOf(elem);

    if (idx === -1) {
        throw new Error(`Element not found: ${elem}`);
    }

    arr.splice(idx, 1);
}

export function swap(array: unknown[], idx1: number, idx2: number): void {
    const value1 = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = value1;
}

/**
 * @param from inclusive
 * @param to inclusive
 */
export function randInt(from: number, to: number): number {
    return from + Math.floor(Math.random() * (to - from + 1));
}

export function shuffle<T>(array: T[]): T[] {
    const original = array.slice();
    const result = [];

    while (original.length > 0) {
        const idx = randInt(0, original.length - 1);
        result.push(original[idx]);
        original.splice(idx, 1);
    }

    return result;
}
