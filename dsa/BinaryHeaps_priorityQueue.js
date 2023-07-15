
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    bubbleUp(idx) {
        let index = Math.floor((idx - 1) / 2);

        if (index < 0) return;

        if (this.queue[idx].priority < this.queue[index].priority) {
            [this.queue[idx], this.queue[index]] = [
                this.queue[index],
                this.queue[idx],
            ];
            this.bubbleUp(index);
        } else return;
    }

    enqueue(val, priority) {
        if (!val) {
            return undefined;
        }
        if (typeof priority != 'number') {
            return 'priority should be a number';
        }
        this.queue.push(new Node(val, priority));

        this.bubbleUp(this.queue.length - 1);

        return this.queue;
    }

    sinkDown(idx) {
        let rightGreater = false;
        const leftIndex = 2 * idx + 1;
        const rightIndex = 2 * idx + 2;

        if (leftIndex > this.queue.length - 1 || rightIndex > this.queue.length - 1)
            return;

        const parent = this.queue[idx].priority;
        const leftChild = this.queue[leftIndex].priority;
        const rightChild = this.queue[rightIndex].priority;

        if (rightChild > leftChild) {
            rightGreater = true;
        }

        if (rightGreater && parent > leftChild) {
            [this.queue[idx], this.queue[leftIndex]] = [
                this.queue[leftIndex],
                this.queue[idx],
            ];
            return this.sinkDown(leftIndex);
        } else if (!rightGreater && parent > rightChild) {
            [this.queue[idx], this.queue[rightIndex]] = [
                this.queue[rightIndex],
                this.queue[idx],
            ];
            return this.sinkDown(rightIndex);
        } else {
            return;
        }
    }

    dequeue() {
        if (this.queue.length <= 0) return undefined;

        [this.queue[0], this.queue[this.queue.length - 1]] = [
            this.queue[this.queue.length - 1],
            this.queue[0],
        ];

        const root = this.queue.pop();

        this.sinkDown(0);

        return root;
    }
}

const priorityQ = new PriorityQueue();
priorityQ.enqueue('cold', 2);
priorityQ.enqueue('low fever', 2);
priorityQ.enqueue('accident', 0);
priorityQ.enqueue('flu', 1);
priorityQ.enqueue('fracture', 0);
priorityQ.dequeue();
priorityQ.dequeue();

console.log(priorityQ.queue);



class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp(idx) {
        let index = Math.floor((idx - 1) / 2);

        if (index < 0) return;
        let parent = this.values[index];
        let child = this.values[idx];

        if (this.values[idx] > this.values[index]) {
            [this.values[idx], this.values[index]] = [
                this.values[index],
                this.values[idx],
            ];
            this.bubbleUp(index);
        } else return;
    }

    insert(val) {
        if (!val) {
            return undefined;
        }
        if (typeof val != 'number') {
            return 'val should be a number';
        }
        this.values.push(val);

        this.bubbleUp(this.values.length - 1);

        return this.values;
    }

    sinkDown(idx) {
        let leftGreater = true;
        const leftIndex = 2 * idx + 1;
        const rightIndex = 2 * idx + 2;

        if (
            leftIndex > this.values.length - 1 ||
            rightIndex > this.values.length - 1
        )
            return;

        const parent = this.values[idx];
        const leftChild = this.values[leftIndex];
        const rightChild = this.values[rightIndex];

        if (rightChild > leftChild) {
            leftGreater = false;
        }

        if (leftGreater && parent < leftChild) {
            [this.values[idx], this.values[leftIndex]] = [
                this.values[leftIndex],
                this.values[idx],
            ];
            return this.sinkDown(leftIndex);
        } else if (!leftGreater && parent < rightChild) {
            [this.values[idx], this.values[rightIndex]] = [
                this.values[rightIndex],
                this.values[idx],
            ];
            return this.sinkDown(rightIndex);
        } else {
            return;
        }
    }

    extract() {
        if (this.values.length <= 0) return undefined;

        [this.values[0], this.values[this.values.length - 1]] = [
            this.values[this.values.length - 1],
            this.values[0],
        ];

        const root = this.values.pop();

        this.sinkDown(0);

        return root;
    }
}

const heapMax = new MaxBinaryHeap();
heapMax.insert(2);
heapMax.insert(5);
heapMax.insert(10);
heapMax.insert(1);
heapMax.insert(4);
heapMax.insert(14);
// [10, 4, 5, 1, 2]
heapMax.extract();
console.log(heapMax.values);