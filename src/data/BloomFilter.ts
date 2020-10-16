import { Serializable, hashString, hashString2 } from '../utils';

export class BloomFilter<T extends Serializable> {
    private readonly size: number;
    private filter: boolean[];

    constructor(size=1) {
        if (size < 1) {
            throw new Error(`Invalid size: ${size}`);
        }

        this.size = size;
        this.filter = new Array(size).fill(false);
    }

    public has(value: T): boolean {
        const str = value.toString();
        const idx1 = hashString(str) % this.size;
        const idx2 = hashString2(str) % this.size;

        return this.filter[idx1] && this.filter[idx2];
    }

    public add(value: T): void {
        const str = value.toString();
        const idx1 = hashString(str) % this.size;
        const idx2 = hashString2(str) % this.size;

        this.filter[idx1] = true;
        this.filter[idx2] = true;
    }
}
