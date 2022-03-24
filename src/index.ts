import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
console.log(sorter.collection);
console.log(numbersCollection.data);
sorter.sort();
console.log(sorter.collection);
console.log(numbersCollection.data);
