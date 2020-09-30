import { swap, Compare, Order } from '../utils';

export function sort<T>(compare: Compare<T>, array: T[]): T[] {
    for (let n = array.length - 1; n > 0; n--) {
        for (let i = 0; i < n; i++) {
            if (compare(array[i], array[i + 1]) === Order.GT) {
                swap(array, i, i + 1);
            }
        }
    }

    return array;
}
