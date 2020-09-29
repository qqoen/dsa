import { swap, Compare, Order } from '../utils';

export function sort<T>(compare: Compare<T>, array: T[]): T[] {
    for (let i = 1; i < array.length; i++) {
        let j = i;

        while (j > 0 && compare(array[j - 1], array[j]) === Order.GT) {
            swap(array, j - 1, j);
            j--;
        }
    }

    return array;
}
