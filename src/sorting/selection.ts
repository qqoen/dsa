import { swap, Compare, Order } from '../utils';

export function sort<T>(compare: Compare<T>, array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < array.length; j++) {
            if (compare(array[minIdx], array[j]) === Order.GT) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            swap(array, minIdx, i);
        }
    }

    return array;
}
