import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Miguel', age: 38 });
myDatabaseClassic.add({ name: 'Joana', age: 23 });
myDatabaseClassic.add({ name: 'Luisa', age: 45 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
