import LinkedList from './modules/LinkedList';

const myList = new LinkedList();
myList.prepend('2');
myList.prepend('1');
myList.append('4');
myList.append('5');
myList.size();
myList.head();
myList.tail();
myList.at(3);
myList.pop();
myList.contains('5');
myList.find('3');
myList.insertAt(2, '3');
myList.deleteAt(0);
myList.toString();
console.log(myList.list);
