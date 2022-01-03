// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

let headData;
let previousHead
function insertNodeAtHead(head, data) {

    function Node(value) {
        this.data = value;
        this.next = null;
    }

    if (head === null) {
        headData = new Node(data);
    } else {
        previousHead = headData;
        headData = new Node(data);
        headData.next = previousHead;
    }
    return (headData)

}
