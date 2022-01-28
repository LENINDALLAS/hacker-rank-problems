// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let list = [], res;

    function Node(data) {
        this.data = data;
        this.next = null;
    }

    let list1 = head1, list2 = head2;

    while (list1.next) {
        list.push(list1.data);
        list1 = list1.next;
    }
    list.push(list1.data);
    while (list2.next) {
        list.push(list2.data);
        list2 = list2.next;
    }
    list.push(list2.data);

    list = list.sort((a, b) => a - b);
    //console.log(list)
    let sorted;
    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            res = new Node(list[i]);
            sorted = res
            // sorted = sorted.next;
        } else {
            sorted.next = new Node(list[i]);
            sorted = sorted.next;
        }
    }
    return (res)
};