// Using TypeScript, define an interface named Shape with a method calculateArea(). Create a class Rectangle that implements this interface

interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.calculateArea());
