import { BinaryNode } from '../utils';

export function search<T>(value: T, start: BinaryNode<T>): boolean {
    const stack = [start];
    let curNode: BinaryNode<T>;

    while (stack.length !== 0) {
        curNode = stack.pop();

        if (curNode.value === value) {
            return true;
        }

        if (curNode.right != null) {
            stack.push(curNode.right);
        }

        if (curNode.left != null) {
            stack.push(curNode.left);
        }
    }

    return false;
}

interface TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
}

export function search2<T>(value: T, start: TreeNode<T>): boolean {
    let stack = [start];
    let curNode: TreeNode<T>;

    while (stack.length !== 0) {
        curNode = stack.pop();

        if (curNode.value === value) {
            return true;
        }

        stack = stack.concat(curNode.children);
    }

    return false;
}
