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


// Indexed access types.

type PersonName = Person['name'];

const personName_1: PersonName = 'John David';


const getIsMarried = <T extends keyof Person>( source: Person, key: T ): Person[T] | null => {
    if (key === 'isMarried') {
        return source[key];
    } else {
        return null;
    }
}

const isMarried = getIsMarried(person, 'isMarried');


// Dynamic but limited type.

const dbRow: Record<string, string | number> = {
    id: 1,
    name: 'John Doe',
};

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

function searchContacts(contacts: Contact[], query: Record<keyof Contact, Query>) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);

export {};