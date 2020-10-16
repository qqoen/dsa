export function findMajorityElement<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return;
    }

    const candidate = findCandidate(array);

    if (isMajorityElement(candidate, array)) {
        return candidate;
    }
}

function findCandidate<T>(array: T[]): T {
    let curCandidate = array[0];
    let count = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] === curCandidate) {
            count++;
            continue;
        }
        
        count--;

        if (count === 0) {
            curCandidate = array[i];
            count = 1;
        }
    }

    return curCandidate;
}

function isMajorityElement<T>(elem: T, array: T[]): boolean {
    const count = array.filter((x) => x === elem).length;
    return count > array.length / 2;
}

