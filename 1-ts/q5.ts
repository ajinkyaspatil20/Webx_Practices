// Using TypeScript, design a class named Car that has a private property engineNo. Initialize this property using a constructor. Then create a method displayInfo() to print the value of engineNo. 


class Car {
    private engineNo: string;
  
    constructor(engineNo: string) {
      this.engineNo = engineNo;
    }
  
    displayInfo(): void {
      console.log("Engine Number: " + this.engineNo);
    }
  }
  
  // Example usage:
  const myCar = new Car("ENG12345");
  myCar.displayInfo();
  