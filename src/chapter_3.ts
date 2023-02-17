"use strict";
// Combining multiple types with the union types.

type PersonDateOfBirth = Date | string | number;

interface Person {
    name: string;
    age: number;
    isMarried?: boolean;
    dateOfBirth?: PersonDateOfBirth;
    address: string;
};

const person: Person = {
    name: "John Doe",
    age: 30,
    isMarried: true,
    dateOfBirth: new Date(),
    address: "123 Main Street"
};

const person_1: Person = {
    name: "John Doe",
    age: 30,
    isMarried: true,
    dateOfBirth: '11-11-1990',
    address: "123 Main Street"
};



export {};