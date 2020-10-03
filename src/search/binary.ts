export function search<T>(value: T, array: T[]): number {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (value === array[mid]) {
            return mid;
        }

        if (value < array[mid]) {
            end = mid - 1;
            continue;
        }

        start = mid + 1;
    }

    if (value === array[start]) {
        return start;
    }

    return -1;
}
