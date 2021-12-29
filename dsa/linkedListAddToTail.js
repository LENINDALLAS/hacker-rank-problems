
// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
var list
var headNode
function insertNodeAtTail(head, data) {

    function Node(data) {
        this.data = data;
        this.next = null;
    }
    if (head === null) {
        headNode = new Node(data)
    } else {
        var currentValue = headNode;
        while (currentValue.next) {
            currentValue = currentValue.next;
        }
        currentValue.next = new Node(data);
    }
    return (headNode)
}