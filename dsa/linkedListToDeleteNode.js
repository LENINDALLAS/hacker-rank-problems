/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    // Write your code here
    let head = llist;
    let pos = 0;
    if (position === 0) {
        return head.next;
    }
    let node = head;
    while (node.next) {
        pos++
        node = node.next
        if (pos === position) {
            node.data = node.next.data;
            node.next = node.next.next;
            return head;
        }
    }
}