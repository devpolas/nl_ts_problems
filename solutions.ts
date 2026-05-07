//? Problem 1
// TODO: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log("FilterEvenNumbers =>", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//? Problem 2
// TODO: Write a function reverseString that takes a string as input and returns the reversed version of that string.

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log("ReverseString =>", reverseString("typescript"));

//? Problem 3
// TODO: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

console.log("CheckType =>", checkType("Hello"));
console.log("CheckType =>", checkType(42));

//? Problem 4
// TODO: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

function getProperty<T>(object: T, key: keyof T): T[keyof T] {
  return object[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

console.log("GetProperty =>", getProperty(user, "name"));

//? Problem 5
// TODO: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadBook extends Book {
  isRead: boolean;
}

function toggleReadStatus(book: Book): ReadBook {
  return { ...book, isRead: true };
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log("ToggleReadStatus =>", toggleReadStatus(myBook));

//? Problem 6
// TODO: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//   ) {}
// }

// class Student extends Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public grade: string,
//   ) {
//     super(name, age);
//   }
//   getDetails(): string {
//     return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//   }
// }

// const student = new Student("Alice", 20, "A");
// console.log("GetStudentDetails =>", student.getDetails());

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

console.log("GetStudentDetails =>", student.getDetails());

//? Problem 7
// TODO: Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1].filter((num) => set2.has(num));
}

console.log(
  "GetIntersection =>",
  getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]),
);
