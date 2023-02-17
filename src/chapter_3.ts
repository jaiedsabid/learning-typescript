"use strict";
// Combining multiple types with the union types.

interface Person {
    name: string;
    age: number;
    isMarried?: boolean;
    dateOfBirth?: Date | string | number;
    address: string;
};

const person: Person = {
    name: "John Doe",
    age: 30,
    isMarried: true,
    dateOfBirth: new Date(),
    address: "123 Main Street"
};



export {};