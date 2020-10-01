import { swap, randInt } from '../utils';

enum PivotType {
    Random,
    Median,
}

// Using random pivot
export function sort<T>(array: T[]): T[] {
    partition(array, 0, array.length - 1, PivotType.Random);
    return array;
}

// Using median pivot
export function sort2<T>(array: T[]): T[] {
    partition(array, 0, array.length - 1, PivotType.Median);
    return array;
}

function partition<T>(array: T[], from: number, to: number, pivotType: PivotType) {
    if (from >= to) {
        return;
    }

    const pivot = getPivot(pivotType, array, from, to);
    let left = from;
    let right = to;

    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }

        while (array[right] > pivot) {
            right--;
        }

        swap(array, left, right);
    }

    partition(array, from, left - 1, pivotType);
    partition(array, right + 1, to, pivotType);
}

function getPivot<T>(type: PivotType, array: T[], from: number, to: number): T {
    if (type === PivotType.Random) {
        return array[randInt(from, to)];
    }

    if (type === PivotType.Median) {
        const midIndex = from + Math.floor((from + to) / 2);
        const values = [array[from], array[midIndex], array[to]];
        values.sort();
        return values[1];
    }
}
