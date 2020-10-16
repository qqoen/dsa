interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
}

/**
 * Returns index of the node, where cycle starts,
 * or -1 if there is no cycle
 */
export function hasCycle<T>(head: ListNode<T>): number {
    let tortoise = head;
    let hare = head;
    let foundCycle = false;

    while (hare.next != null && hare.next.next != null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise.value === hare.value) {
            foundCycle = true;
            break;
        }
    }

    if (!foundCycle) {
        return -1;
    }

    tortoise = head;
    let start = 0;

    while (tortoise.value !== hare.value) {
        tortoise = tortoise.next;
        hare = hare.next;
        start++;
    }

    return start;
}
