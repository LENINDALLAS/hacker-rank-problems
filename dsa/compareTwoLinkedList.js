// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {

    let linked1 = llist1, linked2 = llist2;

    while (linked1.next && linked2.next) {
        if (linked1.data !== linked2.data) {
            return 0;
        }
        linked1 = linked1.next;
        linked2 = linked2.next;
    }
    if (linked1.next !== linked2.next) {
        return 0;
    }
    return 1;
}