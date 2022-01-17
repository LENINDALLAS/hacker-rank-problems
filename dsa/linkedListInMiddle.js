/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let temp = llist;
    let pos = 0;

    function SinglyLinkedList(data, next) {
        this.data = data;
        this.next = next;
    }
    while (temp.next) {
        pos++;
        if (temp.next) {
            temp = temp.next;
        }
        if (pos === position - 1) {
            let backup = temp.next;
            temp.next = new SinglyLinkedList(data, backup);
            return llist;
        }
    }
}