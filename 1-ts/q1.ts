// Using TypeScript, create a base class named Animal that contains a method called makeSound(). Then, create a derived class Dog that overrides the makeSound() method to print “Dog barks”. 

class Animal {
    makeSound() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

const myDog = new Dog();
myDog.makeSound();