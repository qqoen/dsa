interface BinaryNode<T> {
    value: T;
    left?: BinaryNode<T>;
    right?: BinaryNode<T>;
}

export default function search<T>(value: T, start: BinaryNode<T>): boolean {
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
