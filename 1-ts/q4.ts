// Using TypeScript, define an interface PersonInfo with the properties name and age. Create a class Person that implements this interface and includes a constructor to initialize the properties. 

interface PersonInfo {
    name: string;
    age: number;
}

class Person implements PersonInfo {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

const person1 = new Person("John", 25);
person1.display();
