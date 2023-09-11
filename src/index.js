import LinkedList from './modules/LinkedList';

const myList = new LinkedList();
myList.prepend('1');
myList.append('2');
myList.append('3');
myList.append('4');
myList.append('5');
myList.size();
myList.head();
myList.tail();
myList.at(3);
myList.pop();
myList.contains('5');
myList.find('3');
myList.toString();
console.log(myList.list);
