// Basic Types
let id: number = 5;
let company: String = 'Dare XD';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

age = 20;

let ids: number[] = [1, 2, 3, 4, 4];
let arr: any[] = [1, true, 'Shola'];

// Tuple
let person: [number, string, boolean];

// Tuple Array

let employee: [number, string][];

employee = [
  [1, '2'],
  [2, 'Joe'],
  [3, 'Joe'],
];

person = [1, 'Dare', true];

x = true;

// Union
let key: string | number = 22;

// Enum

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Dare',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;

let customerId = cid as number;

customerId = 2;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interface

interface PUser {
  readonly id: number;
  name: string;
  age?: number;
}

const pUser: PUser = {
  id: 1,
  name: 'Wale',
};

console.log(pUser);

type Point = number | string;

// Interfaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  age?: number;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  public id: number;
  name: string;

  register() {
    return `${this.name} is now registered`;
  }
}

const UIDesignerOne = new Person(1, 'Dare Goodness');
const UIDesignerTwo = new Person(2, 'Aminant Okoye');

// Subclasses or extended classes

class Employee extends Person {
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.positon = position;
  }
  positon: string;
}

const emp = new Employee(3, 'Adeaga', 'Frontdesk');

console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['wale', 'shola', 'john']);

numArray.push(1);

strArray.push('Sumbo');
