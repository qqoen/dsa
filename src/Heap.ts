export class Heap<T> {
    private values: T[] = [];

    get isEmpty(): boolean {
        return this.values.length === 0;
    }

    public insert(value: T): void {
        this.values.push(value);
        this.siftUpIdx(this.values.length - 1);
    }

    public extractMax(): T {
        if (this.values.length === 1) {
            return this.values.pop();
        }

        this.swapIdx(0, this.values.length - 1);
        const max = this.values.pop();
        this.siftDownIdx(0);
        return max;
    }

    public traverse(fn: (x: T) => void): void {
        this.values.forEach(fn);
    }

    private siftUpIdx(index: number): void {
        const parentIdx = Math.floor((index + 1) / 2) - 1;
        const parent = this.values[parentIdx];
        const value = this.values[index];

        if (parent == null || parent >= value) {
            return;
        }

        this.swapIdx(parentIdx, index);
        this.siftUpIdx(parentIdx);
    }

    private siftDownIdx(index: number): void {
        const rightIdx = (index + 1) * 2;
        const leftIdx = rightIdx - 1;
        const left = this.values[leftIdx];
        const right = this.values[rightIdx];
        const value = this.values[index];
        let swapIdx: number;

        if (left != null && right != null) {
            const [max, maxIdx] = left >= right ? [left, leftIdx] : [right, rightIdx];

            if (max > value) {
                swapIdx = maxIdx;
            }
        } else if (left != null && left > value) {
            swapIdx = leftIdx;
        } else if (right != null && right > value) {
            swapIdx = rightIdx;
        }

        if (swapIdx == null) {
            return;
        }

        this.swapIdx(swapIdx, index);
        this.siftDownIdx(swapIdx);
    }

    private swapIdx(idx1: number, idx2: number): void {
        const value1 = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = value1;
    }
}
