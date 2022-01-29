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

//optimized version of sorting two linked list nodes

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
    let list1 = head1,
        list2 = head2,
        list,
        acc;

    function Node(value) {
        this.data = value;
        this.next = null;
    }

    while (list1 !== null || list2 !== null) {
        let list1data = list1 === null ? -1 : list1.data,
            list2data = list2 === null ? -1 : list2.data;

        if (list1data >= list2data && list2data !== -1
            || list1data === -1) {
            if (!list) {
                list = new Node(list2data);
                acc = list;
            } else {
                acc.next = new Node(list2data);
                acc = acc.next;
            }
            list2 = list2.next;
        } else {
            if (!list) {
                list = new Node(list1data);
                acc = list;
            } else {
                acc.next = new Node(list1data);
                acc = acc.next;
            }
            list1 = list1.next;
        }
    }

    return list;
};