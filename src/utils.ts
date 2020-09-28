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
