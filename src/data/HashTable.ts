import { Serializable, hashString, remove } from '../utils';

class TableNode<K, T> {
    public key: K;
    public value: T;

    constructor(key: K, value: T) {
        this.key = key;
        this.value = value;
    }
}

/**
 * Static hash table implementation using chaining
 */
export class HashTable<K extends Serializable, T> {
    private nodeTable: TableNode<K, T>[][];
    private size: number;

    constructor(size=100) {
        if (size < 1 || size > Number.MAX_SAFE_INTEGER) {
            throw new Error(`Invalid size: ${size}`);
        }

        this.size = size;
        this.nodeTable = new Array(size);
    }

    public getAt(key: K): T | undefined {
        const idx = this.getIndex(key);
        const nodes = this.nodeTable[idx];
        const node = nodes?.find((n) => n.key === key);

        return node?.value;
    }

    public setAt(key: K, value: T): void {
        const idx = this.getIndex(key);
        const nodes = this.nodeTable[idx];

        if (nodes == null) {
            this.nodeTable[idx] = [new TableNode(key, value)];
            return;
        }

        const node = nodes.find((n) => n.key === key);

        if (node != null) {
            node.value = value;
            return;
        }

        nodes.push(new TableNode(key, value));
    }

    public deleteAt(key: K): void {
        const idx = this.getIndex(key);
        const nodes = this.nodeTable[idx];

        if (nodes == null) {
            throw new Error(`Key not found: ${key}`);
        }

        const node = nodes.find((n) => n.key === key);

        if (node != null) {
            remove(nodes, node);
            return;
        }

        throw new Error(`Key not found: ${key}`);
    }

    private getIndex(key: K): number {
        const hash = hashString(key.toString());
        return hash % this.size;
    }
}
