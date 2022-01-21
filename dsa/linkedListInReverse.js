/*
 * Complete the 'reversePrint' function below.
 *
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

function reversePrint(llist) {
    // Write your code here
    const res = [];
    let head = llist;
    let inc = 0;
    while (head.next) {
        res.push(head.data);
        head = head.next;
        inc++;
    }
    res.push(head.data);

    while (inc >= 0) {
        console.log(res[inc])
        inc--;
    }

}