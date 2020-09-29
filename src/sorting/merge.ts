import { Compare, Order } from '../utils';

export function sort<T>(compare: Compare<T>, array: T[]): T[] {
    mergeSort(array, 0, array.length - 1, compare);
    return array;
}

function mergeSort<T>(array: T[], from: number, to: number, compare: Compare<T>) {
    if (from >= to) {
        return;
    }

    const mid = Math.floor((from + to) / 2);
    mergeSort(array, from, mid, compare);
    mergeSort(array, mid + 1, to, compare);
    merge(array, from, to, compare);
}

function merge<T>(array: T[], from: number, to: number, compare: Compare<T>) {
    const original = array.slice();
    const mid = Math.floor((from + to) / 2);
    let li = from;
    let ri = mid + 1;
    let i = li;

    while (li <= mid && ri <= to) {
        const order = compare(original[li], original[ri]);

        if (order === Order.LT) {
            array[i] = original[li];
            li++;
        } else {
            array[i] = original[ri];
            ri++;
        }

        i++;
    }

    if (li > mid) {
        while (ri <= to) {
            array[i] = original[ri];
            ri++;
            i++;
        }
        return;
    }

    while (li <= mid) {
        array[i] = original[li];
        li++;
        i++;
    }
}
