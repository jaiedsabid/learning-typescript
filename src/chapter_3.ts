"use strict";
// Combining multiple types with the union types.
type PersonDateOfBirth = Date | string | number;
type MaritalStatus = "Single" | "Married" | "Divorced";

interface Person {
    name: string;
    age: number;
    isMarried?: MaritalStatus;
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
    isMarried: "Single",
    dateOfBirth: new Date(),
};

const person_1: Person = {
    name: "John Doe",
    age: 30,
    isMarried: 'Married',
    dateOfBirth: '11-11-1990',
};

const person_2: PersonAddressable = {
    name: "John Doe",
    age: 30,
    isMarried: 'Married',
    dateOfBirth: '11-11-1990',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
};

// Use of `keyof` operator to get the keys of an object.
type PersonKeys = keyof Person;

const getValue = <ObjType, ObjKey extends keyof ObjType>(source: ObjType, key: ObjKey): ObjType[ ObjKey ] => {
    return source[key];
}

const personName = getValue(person, 'name');
console.log(personName);

// tyoeof operator. 

const range = {
    min: 0,
    max: 10,
};

const getRange = (source: typeof range) => {
    return range.max - range.min;
}

const rangeValue = getRange(range);

export {};