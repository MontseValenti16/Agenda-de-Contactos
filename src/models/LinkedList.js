import { Node } from "./Node.js";
export class LinkedList{
    constructor() {
        this.head = null; 
        this.tail = null;     
    }
    push(element) {
        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.head.previous = this.tail;
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.tail.next = this.head;
            this.head.previous = this.tail;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current && current !== this.tail) {
            count++;
            current = current.next;
        }
        return count + 1;
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }
        if (index === 0) {
            return this.head;
        }

        let current = this.head;
        let count = 0;
        while (current && count < index) {
            count++;
            current = current.next;
        }
        return current;
    }
} 