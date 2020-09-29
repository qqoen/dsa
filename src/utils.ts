export enum Order {
    LT = -1,
    EQ = 0,
    GT = 1,
}

export type Compare<T> = (x: T, y: T) => Order;

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
