import { BinaryNode } from '../utils';

interface TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
}

export function searchBinary<T>(value: T, start: BinaryNode<T>): boolean {
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

export function searchTree<T>(value: T, start: TreeNode<T>): boolean {
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

export function searchGraph<T>(value: T, start: T, nodes: Map<T, T[]>): boolean {
    if (nodes.size === 0) {
        return false;
    }

    let stack = [start];
    let curValue: T;
    const seenNodes: Set<T> = new Set();

    while (stack.length !== 0) {
        curValue = stack.pop();

        if (seenNodes.has(curValue)) {
            continue;
        }

        if (curValue === value) {
            return true;
        }

        seenNodes.add(curValue);

        const links = nodes.get(curValue);
        stack = stack.concat(links);
    }

    return false;
}
