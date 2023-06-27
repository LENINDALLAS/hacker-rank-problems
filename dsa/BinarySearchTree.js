class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    check(node, data) {
        return node.val < data ? true : false;
    }

    insert(data) {
        let current = this.root;
        if (!current) {
            this.root = new Node(data);
            return this;
        }
        while (current) {
            if (current.val === data) return undefined;
            const right = this.check(current, data);
            if (right && current.right === null) {
                current.right = new Node(data);
                return this;
            } else if (!right && current.left === null) {
                current.left = new Node(data);
                return this;
            } else if (right) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return this;
    }

    search(data) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (current.val === data) {
                return true;
            } else if (current.val < data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }
}

const bts = new BinarySearchTree();
bts.insert(10);
bts.insert(5);
bts.insert(13);
bts.insert(11);
bts.insert(2);
bts.insert(16);
bts.insert(7);
console.log(bts.search(16));
