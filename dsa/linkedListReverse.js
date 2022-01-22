/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reverse(llist) {
    // Write your code here
    let head = llist;
    let reverse;
    let inc = 0;

    function Node(data) {
        this.data = data;
        this.next = null;
    }

    while (head.next) {
        let temp = new Node(head.data);
        if (inc != 0) {
            temp.next = reverse;
        }
        reverse = temp;
        inc++;
        head = head.next;
    }
    let temp = new Node(head.data);
    temp.next = reverse;
    reverse = temp;
    return reverse;
}

/* Optimized method */
function reverse(llist) {
    // Write your code here
    let prev = null;
    let next = null;
    let current = llist;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}