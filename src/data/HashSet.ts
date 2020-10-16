import { Serializable, hashString } from '../utils';

export class HashSet<T extends Serializable> {
    private values: T[];
    private capacity: number;
    private curSize = 0;

    constructor(capacity=1) {
        if (capacity < 1) {
            throw new Error(`Invalid capacity: ${capacity}`);
        }

        this.capacity = capacity;
        this.values = new Array(capacity);
    }

    public get size(): number {
        return this.curSize;
    }

    public add(value: T): void {
        let idx = hashString(value.toString()) % this.curSize;

        while (this.values[idx] !== undefined) {
            idx++;
        }

        this.values[idx] = value;
        this.curSize++;

        if (this.curSize === this.capacity) {
            this.resize();
        }
    }

    public delete(value: T): void {
        let idx = hashString(value.toString()) % this.curSize;

        while (this.values[idx] !== value) {
            idx++;

            if (idx === this.values.length) {
                return;
            }
        }

        delete this.values[idx];
        this.curSize--;
    }

    public has(value: T): boolean {
        let idx = hashString(value.toString()) % this.curSize;

        while (this.values[idx] !== value) {
            idx++;

            if (idx === this.values.length) {
                return false;
            }
        }

        return true;
    }

    private resize(): void {
        this.capacity *= 2;
        const oldValues = this.values.slice();
        this.values = new Array(this.capacity);

        for (const value of oldValues) {
            this.add(value);
        }
    }
}
