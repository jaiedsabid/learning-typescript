"use strict";
// Combining multiple types with the union types.
type PersonDateOfBirth = Date | string | number;
enum MatitalStatus {
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
};

interface Person {
    name: string;
    age: number;
    isMarried?: MatitalStatus;
    dateOfBirth?: PersonDateOfBirth;
};

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
};


// Combining multiple types with the intersection `&` types and create new type.
type PersonAddressable = Person & Address;

const person: Person = {
    name: "John Doe",
    age: 30,
    isMarried: MatitalStatus.Single,
    dateOfBirth: new Date(),
};

const person_1: Person = {
    name: "John Doe",
    age: 30,
    isMarried: MatitalStatus.Married,
    dateOfBirth: '11-11-1990',
};

const person_2: PersonAddressable = {
    name: "John Doe",
    age: 30,
    isMarried: MatitalStatus.Married,
    dateOfBirth: '11-11-1990',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
};



export {};