import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log('ROUBADOS', a, b);
console.log('Executei várias coisas e depois usei iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Aqui preciso zerar o iterator');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
