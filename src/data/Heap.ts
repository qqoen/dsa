import { swap } from '../utils';

interface HeapNode<T> {
    priority: number;
    value: T;
}

/**
 * Binary Max Heap
 */
export class Heap<T> {
    private nodes: HeapNode<T>[] = [];

    public get isEmpty(): boolean {
        return this.nodes.length === 0;
    }

    public insert(priority: number, value: T): void {
        this.nodes.push({ priority, value });
        this.siftUpIdx(this.nodes.length - 1);
    }

    public extractMax(): T | undefined {
        if (this.nodes.length === 0) {
            return;
        }

        if (this.nodes.length === 1) {
            const node = this.nodes.pop();
            return node.value;
        }

        swap(this.nodes, 0, this.nodes.length - 1);
        const max = this.nodes.pop();
        this.siftDownIdx(0);
        return max.value;
    }

    public changePriority(oldp: number, newp: number): void {
        if (oldp === newp) {
            return;
        }

        const idx = this.nodes.findIndex((node) => node.priority === oldp);

        if (idx === -1) {
            return;
        }

        this.nodes[idx].priority = newp;

        if (newp > oldp) {
            this.siftUpIdx(idx);
        }

        this.siftDownIdx(idx);
    }

    public traverse(fn: (x: T) => void): void {
        this.nodes.forEach((node) => {
            fn(node.value);
        });
    }

    private siftUpIdx(index: number): void {
        const parentIdx = Math.floor((index + 1) / 2) - 1;
        const parent = this.nodes[parentIdx];
        const cur = this.nodes[index];

        if (parent == null || parent.priority >= cur.priority) {
            return;
        }

        swap(this.nodes, parentIdx, index);
        this.siftUpIdx(parentIdx);
    }

    private siftDownIdx(index: number): void {
        const rightIdx = (index + 1) * 2;
        const leftIdx = rightIdx - 1;
        const left = this.nodes[leftIdx];
        const right = this.nodes[rightIdx];
        const cur = this.nodes[index];
        let swapIdx: number;

        if (left != null && right != null) {
            const [max, maxIdx] = left >= right ? [left, leftIdx] : [right, rightIdx];

            if (max.priority > cur.priority) {
                swapIdx = maxIdx;
            }
        } else if (left != null && left.priority > cur.priority) {
            swapIdx = leftIdx;
        } else if (right != null && right.priority > cur.priority) {
            swapIdx = rightIdx;
        }

        if (swapIdx == null) {
            return;
        }

        swap(this.nodes, swapIdx, index);
        this.siftDownIdx(swapIdx);
    }
}
