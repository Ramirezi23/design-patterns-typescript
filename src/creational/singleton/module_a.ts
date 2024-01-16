import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Nelson', age: 38 });
myDatabaseClassic.add({ name: 'Ricardo', age: 19 });
myDatabaseClassic.add({ name: 'Maria', age: 70 });

export { myDatabaseClassic };
