function printLinkedList(head) {


    function printFunction(link) {
        console.log(link.data)
        if (link.next) {
            printFunction(link.next)
        } else {
            return
        }
    }

    printFunction(head)

}