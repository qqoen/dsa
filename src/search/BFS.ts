import { BinaryNode } from '../utils';

export function search<T>(value: T, start: BinaryNode<T>): boolean {
    const queue = [start];
    let curNode: BinaryNode<T>;

    while (queue.length !== 0) {
        curNode = queue.pop();

        if (curNode.value === value) {
            return true;
        }

        if (curNode.left != null) {
            queue.unshift(curNode.left);
        }

        if (curNode.right != null) {
            queue.unshift(curNode.right);
        }
    }

    return false;
}
