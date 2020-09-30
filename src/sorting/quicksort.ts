import { swap, randInt } from '../utils';

export function sort<T>(compare: () => void, array: T[]): T[] {
    partition(array, 0, array.length - 1);
    return array;
}

function partition<T>(array: T[], fromIdx: number, toIdx: number) {
    if (fromIdx >= toIdx) {
        return;
    }

    const pivot = array[randInt(fromIdx, toIdx)];
    let left = fromIdx;
    let right = toIdx;

    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }

        while (array[right] > pivot) {
            right--;
        }

        swap(array, left, right);
    }

    partition(array, fromIdx, left - 1);
    partition(array, right + 1, toIdx);
}
