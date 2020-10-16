type BufferNode<T> = { value: T, next?: BufferNode<T> };

// TODO: rewrite using array
export class Buffer<T> {
    public readonly capacity: number;
    private curSize: number;
    private head?: BufferNode<T>;
    private tail?: BufferNode<T>;

    constructor(capacity: number) {
        if (capacity < 1) {
            throw new Error(`Invalid capacity: ${capacity}`);
        }

        this.capacity = capacity;
        this.curSize = 0;
    }

    public get size(): number {
        return this.curSize;
    }

    public push(value: T): void {
        if (this.curSize === this.capacity) {
            this.pop();
        }

        this.curSize++;

        if (this.tail === undefined) {
            this.head = { value };
            this.tail = this.head;
            return;
        }

        const prevTail = this.tail;
        this.tail = { value };
        prevTail.next = this.tail;
    }

    public pop(): T {
        if (this.head === undefined) {
            throw new Error('Buffer is empty');
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.curSize--;

        if (this.head === undefined) {
            this.tail = undefined;
        }

        return value;
    }

    public clear(): void {
        this.head = undefined;
        this.tail = undefined;
        this.curSize = 0;
    }
}
