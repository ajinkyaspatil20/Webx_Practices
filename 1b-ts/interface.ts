interface Employee {
  name: string;
  id: number;
  role: string;
  getDetails(): string;
}

class Manager implements Employee {
  constructor(
    public name: string,
    public id: number,
    public role: string,
    public department: string
  ) {}

  getDetails(): string {
    return `Manager: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
  }
}

class Developer implements Employee {
  constructor(
    public name: string,
    public id: number,
    public role: string,
    public programmingLanguages: string[]
  ) {}

  getDetails(): string {
    return `Developer: ${this.name}, ID: ${this.id}, Role: ${
      this.role
    }, Languages: ${this.programmingLanguages.join(", ")}`;
  }
}

let manager1 = new Manager("Shrikant Patil", 101, "Project Manager", "IT");
let developer1 = new Developer("Aditi Deshmukh", 102, "Software Developer", [
  "TypeScript",
  "React",
  "Node.js",
]);

console.log(manager1.getDetails());
console.log(developer1.getDetails());
