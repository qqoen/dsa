import { swap, Compare, Order } from '../utils';

export function sort<T>(compare: Compare<T>, array: T[]): T[] {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const order = compare(array[i], array[j]);

            if (order === Order.GT) {
                swap(array, i, j);
            }
        }
    }

    return array;
}
