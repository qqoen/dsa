/**
 * Interface for an object, which can return it's size in bits
 */
export interface ISizable {
    getSize(): number;
}

class DLLNode<T> {
    public value: T;
    public next?: DLLNode<T>;
    public prev?: DLLNode<T>;

    constructor(value: T) {
        this.value = value;
    }
}

class DLList<T> {
    private head?: DLLNode<T>;
    private tail?: DLLNode<T>;

    public deleteNode(node: DLLNode<T>): void {
        if (node.prev == null) {
            this.head = this.head.next;
            this.head.prev = undefined;
            return;
        }

        // update tail

        const prev = node.prev;
        prev.next = node.next;
        prev.next.prev = prev;
    }

    public prependNode(node: DLLNode<T>): void {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }

        const prevHead = this.head;
        prevHead.prev = node;
        this.head = node;
        node.prev = undefined;
        node.next = prevHead;
    }

    public pop(): DLLNode<T> {
        return this.tail;
    }
}

type LRUNode<T> = { key: string, value: T };

/**
 * Data structure for
 * Least Recenlty Used cache replacement policy implementation
 * with memory size restriction
 */
export class LRUCache<T extends ISizable> {
    public readonly maxSize: number;
    private curSize: number;
    private cache: DLList<LRUNode<T>>;
    private lookup: Map<string, DLLNode<LRUNode<T>>>;

    /**
     * @param size max cache size in bits
     */
    constructor(size=0) {
        this.maxSize = size;
        this.curSize = 0;
        this.cache = new DLList();
        this.lookup = new Map();
    }

    public get size(): number {
        return this.curSize;
    }

    public getAt(key: string): T | undefined {
        const node = this.lookup.get(key);

        if (node == null) {
            return;
        }

        this.cache.deleteNode(node);
        this.cache.prependNode(node);

        return node.value.value;
    }

    public put(key: string, value: T): void {
        const node = this.lookup.get(key);
        this.curSize += value.getSize();

        if (node != null) {
            // Should it be pushed to front on update?
            this.curSize -= node.value.value.getSize();
            node.value.value = value;
        } else {
            const newNode = new DLLNode({ key, value });
            this.lookup.set(key, newNode);
            this.cache.prependNode(newNode);
        }

        while (this.curSize > this.maxSize) {
            const node = this.cache.pop();
            this.lookup.delete(node.value.key);
            this.curSize -= node.value.value.getSize();
        }
    }

    public free(): void {
        this.cache = undefined;
        this.lookup.clear();
    }
}
