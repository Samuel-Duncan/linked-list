import Node from './Node';

export default class LinkedList {
  constructor() {
    this.list = {};
    this.list.head = {};
  }

  prepend(value) {
    this.list.head = new Node(value);
  }

  append(value) {
    if (this.list.head == null) {
      this.prepend(value);
    } else {
      let temp = this.list.head;

      while (temp.next != null) {
        temp = temp.next;
        temp.next = new Node(value);
      }
    }
  }

  size() {
    let listLength = 0;
    let temp = this.list.head;

    while (temp != null) {
      temp = temp.next;
      listLength++;
    }

    return listLength;
  }
}
