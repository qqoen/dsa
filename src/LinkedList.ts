class ListNode<T> {
    public readonly value: T;
    public next?: ListNode<T>;
    public prev?: ListNode<T>;

    constructor(value: T, next?: ListNode<T>) {
        this.value = value;
        this.next = next;
    }
}

type SearchResult<T> = { node?: ListNode<T>, index: number };

/**
 * Singly linked list
 */
export class LinkedList<T> {
    private head?: ListNode<T>;
    private curLength: number;

    constructor(...initialValues: T[]) {
        this.curLength = initialValues.length;

        if (initialValues.length > 0) {
            this.head = new ListNode(initialValues[0]);
            let curNode = this.head;

            for (let i = 1; i < initialValues.length; i++) {
                curNode.next = new ListNode(initialValues[i]);
                curNode = curNode.next;
            }
        }
    }

    public get isEmpty(): boolean {
        return this.head == null;
    }

    public get length(): number {
        return this.curLength;
    }

    public getAt(index: number): T {
        if (index >= this.length || index < 0) {
            throw new Error(`Index out of range: ${index}`);
        }

        const { node } = this.search((_, i) => i === index);

        return node.value;
    }

    public find(value: T): number {
        const { index } = this.search((v) => v === value);
        return index;
    }

    /**
     * Adds an item at the end of the list
     * @param value
     */
    public push(value: T): void {
        const tail = this.getTail();
        const newNode = new ListNode(value);
        this.curLength++;

        if (tail == null) {
            this.head = newNode;
            return;
        }

        tail.next = newNode;
    }

    /**
     * Adds an item at specified index, pushing
     * next items forward
     * @param index position of an existing item
     * @param value
     */
    public insert(index: number, value: T): void {
        if (index >= this.length || index < 0) {
            throw new Error(`Index out of range: ${index}`);
        }

        this.curLength++;

        let i = 0;
        let curNode = this.head;

        while (curNode.next != null) {
            const prevNode = curNode;
            curNode = curNode.next;
            i++;

            if (i === index) {
                const newNode = new ListNode(value);
                prevNode.next = newNode;
                newNode.next = curNode;
                return;
            }
        }
    }

    /**
     * Removes the first item with specified value
     * @param value
     */
    public delete(value: T): void {
        if (this.isEmpty) {
            throw new Error('List is empty');
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.curLength--;
            return;
        }

        let curNode = this.head;

        while (curNode.next != null) {
            const prevNode = curNode;
            curNode = curNode.next;

            if (curNode.value === value) {
                prevNode.next = curNode.next;
                this.curLength--;
                return;
            }
        }

        throw new Error(`Value not found: ${value}`);
    }

    private getTail(): ListNode<T> | undefined {
        if (this.isEmpty) {
            return;
        }

        let curNode = this.head;

        while (curNode.next != null) {
            curNode = curNode.next;
        }

        return curNode;
    }

    private search(test: (v: T, i: number) => boolean): SearchResult<T> {
        if (this.isEmpty) {
            return { index: -1 };
        }

        let i = 0;
        let curNode = this.head;

        if (test(curNode.value, i)) {
            return { node: curNode, index: i };
        }

        while (curNode.next != null) {
            curNode = curNode.next;
            i++;

            if (test(curNode.value, i)) {
                return { node: curNode, index: i };
            }
        }

        return { index: -1 };
    }
}
