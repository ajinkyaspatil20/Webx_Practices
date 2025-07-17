// Using TypeScript, design a class Student with three properties: name as public, rollNo as private, and course as protected. Add a constructor to initialize these values and a method to display them. 

class Student {
    public name: string;
    private rollNo: number;
    protected course: string;

    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    displayInfo() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);
    }
}

const student1 = new Student("Alice", 101, "WebX");
student1.displayInfo();
