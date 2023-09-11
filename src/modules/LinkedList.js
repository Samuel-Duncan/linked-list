import Node from './Node';

export default class LinkedList {
  constructor() {
    this.list = {};
    this.list.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.list.head;
    this.list.head = newNode;
  }

  append(value) {
    if (this.list.head == null) {
      this.prepend(value);
    } else {
      let current = this.list.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = new Node(value);
    }
  }

  size() {
    let listLength = 0;
    let current = this.list.head;
    while (current != null) {
      current = current.next;
      listLength++;
    }

    console.log(`size: ${listLength}`);
    return listLength;
  }

  head() {
    if (this.list.head !== null) {
      console.log(`head: ${this.list.head.value}`);
      return this.list.head.value;
    }
    console.log('No nodes are on the list');
    return undefined;
  }

  tail() {
    let current = this.list.head;
    while (current.next != null) {
      current = current.next;
    }

    console.log(`tail: ${current.value}`);
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this.list.length) return null;

    let counter = 0;
    let current = this.list.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    console.log(`value: ${current.value} at index: ${counter}`);
    return current.value;
  }

  pop() {
    if (this.list.head == null) throw new Error('Cannot delete.');

    let current = this.list.head;
    let previous = null;
    while (current.next != null) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }

  contains(value) {
    let current = this.list.head;
    while (current.next != null && current.value !== value) {
      current = current.next;
    }

    if (current.value === value) {
      console.log(`contains value ${value}? True or False: True`);
      return true;
    }
    console.log(`contains value ${value}? True or False: False`);
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.list.head;

    while (current.next != null && current.value !== value) {
      current = current.next;
      index++;
    }
    console.log(`find index: ${index}`);
    return index;
  }

  toString() {
    let current = this.list.head;
    let string = '';

    while (current.next != null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }
    string += `( ${current.value} )`;
    console.log(string);
    return string;
  }
}
