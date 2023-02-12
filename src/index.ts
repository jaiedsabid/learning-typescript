class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setAge(age: number) {
        this.age = age;
    }
    getAge(): number {
        return this.age;
    }
}

const jaied = new User('Jaied', 24);
console.log({name: jaied.getName(), age: jaied.getAge()});
jaied.setAge(25);
jaied.setName('Jaied Al Sabid');
console.log({name: jaied.getName(), age: jaied.getAge()});

