export class BTNode<T> {
    public value: T;
    public left: BTNode<T>;
    public right: BTNode<T>;

    constructor(value: T) {
        this.value = value;
    }
}

/**
 * Binary Search Tree
 */
export class BSTree<T> {
    private head?: BTNode<T>;

    public get isEmpty(): boolean {
        return this.head == null;
    }

    public insert(value: T): void {
        if (this.isEmpty) {
            this.head = new BTNode(value);
            return;
        }

        this.insertTo(value, this.head);
    }

    public has(value: T): boolean {
        return this.hasIn(value, this.head);
    }

    public delete(value: T): void {
        if (this.isEmpty) {
            throw new Error('Tree is empty');
        }

        if (this.head.value === value) {
            throw new Error('Not implemented');
        }

        throw new Error('Not implemented');
    }

    public traverse(fn: (x: T) => void): void {
        throw new Error('Not implemented');
    }

    // TODO: return node
    private hasIn(value: T, node: BTNode<T> | undefined) {
        if (node == null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        if (value < node.value) {
            return this.hasIn(value, node.left);
        }

        return this.hasIn(value, node.right);
    }

    // TODO:
    // check the case when new element is lesser then parent but greater then parent's left child
    private insertTo(value: T, node: BTNode<T>) {
        if (value < node.value) {
            if (node.left == null) {
                node.left = new BTNode(value);
                return;
            }

            this.insertTo(value, node.left);
            return;
        }

        if (node.right == null) {
            node.right = new BTNode(value);
            return;
        }

        this.insertTo(value, node.right);
    }
}
