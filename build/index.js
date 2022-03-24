"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaayb');
const charSorter = new Sorter_1.Sorter(charactersCollection);
charSorter.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter_1.Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
