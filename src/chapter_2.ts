let x: number = 1;
let y: string = "String value";
let z: boolean = true;
let a: Date = new Date();
let b: [string] = ["String value"];
let c: [number] = [1];
let d: [boolean] = [true];
let e: [Date] = [new Date()];
let f: [string, number] = ["String value", 1];
let g: [string, number, boolean] = ["String value", 1, true];
let h: [string, number, boolean, Date] = ["String value", 1, true, new Date()];

// array of strings.
let i: string[] = ["String value", "String value"];
// array of numbers.
let j: number[] = [1, 2, 3];
// array of booleans.
let k: boolean[] = [true, false, true];
// array of dates.
let l: Date[] = [new Date(), new Date()];
// array of arrays of strings.
let m: [string][] = [["String value"], ["String value"]];
// array of arrays of numbers.
let n: [number][] = [[1], [2], [3]];
// array of arrays of booleans.
let o: [boolean][] = [[true], [false], [true]];
// array of arrays of dates.
let p: [Date][] = [[new Date()], [new Date()]];

let anyValue: any = "String value";
anyValue = 1;
anyValue = true;



/* Creating custom types using Interface */
interface Person {
    name: string;
    age: number;
    isMarried?: boolean;
    dateOfBirth?: Date;
    address: string;
};

let person: Person = {
    name: "John Doe",
    age: 30,
    isMarried: true,
    dateOfBirth: new Date(),
    address: "123 Main Street"
};