import { Agenda } from "../models/Agenda.js";

export function bubbleSort(LinkedList){
    const size = LinkedList.size();
    if (size <= 1) {
        return LinkedList;
    }
    let swapped;
    do {
        swapped = false;
        let current = LinkedList.head;
        for (let i = 0; i < size - 1; i++) {
            if (current.data.nombre > current.next.data.nombre) {
                const temp = current.data;
                current.data = current.next.data;
                current.next.data = temp;
                swapped = true;
            }
            current = current.next;
        }
    } while (swapped);

    return LinkedList;
}

const agenda = new Agenda();
document.getElementById("add").addEventListener("click", function(){
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    if (nombre && telefono) {
        agenda.addContact({ nombre: nombre, telefono: telefono });
        mostrarContactos();
        
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.getElementById("mostrar").addEventListener("click", function(){
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    let current = agenda.contacts.head;
    while (current && current !== agenda.contacts.tail) {
        const li = document.createElement("li");
        li.textContent = `${current.data.nombre}: ${current.data.telefono}`;
        contactList.appendChild(li);
        current = current.next;
    }

    if (agenda.contacts.tail) {
        const li = document.createElement("li");
        li.textContent = `${agenda.contacts.tail.data.nombre}: ${agenda.contacts.tail.data.telefono}`;
        contactList.appendChild(li);
    }
});

