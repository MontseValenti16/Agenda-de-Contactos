import { LinkedList } from "./LinkedList.js";
import { bubbleSort } from "../controllers/index.js";
export class Agenda{
    constructor() {
        this.contacts = new LinkedList();
    }
    addContact(contact) {
        this.contacts.push(contact);
        bubbleSort(this.contacts);
    }
    mostrarContactos(){
        let current = this.contacts.head;
        while (current && current !== this.contacts.tail) {
            console.log(current.data);
            current = current.next;
        }
        console.log(this.contacts.tail.data); 
    }

}