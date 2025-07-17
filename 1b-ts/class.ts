// Base class: Student
class Student {
  constructor(
    public name: string,
    public studentId: number,
    public grade: string
  ) {}

  getDetails(): void {
    console.log(
      `Student: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`
    );
  }
}

// Subclass: GraduateStudent extends Student
class GraduateStudent extends Student {
  constructor(
    name: string,
    studentId: number,
    grade: string,
    public thesisTopic: string
  ) {
    super(name, studentId, grade);
  }

  getDetails(): void {
    // Overriding method
    console.log(
      `Graduate Student: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}, Thesis: ${this.thesisTopic}`
    );
  }

  getThesisTopic(): void {
    console.log(`${this.name}'s thesis topic is: ${this.thesisTopic}`);
  }
}

// Independent class: LibraryAccount (not inheriting Student)
class LibraryAccount {
  constructor(public accountId: number, public booksIssued: number) {}

  getLibraryInfo(): void {
    console.log(
      `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`
    );
  }
}

// Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
  constructor(public student: Student, public libraryAccount: LibraryAccount) {}

  getStudentAndLibraryDetails(): void {
    this.student.getDetails();
    this.libraryAccount.getLibraryInfo();
  }
}

// Creating instances
let student1 = new Student("Aarav Maladkar", 101, "A");
let gradStudent1 = new GraduateStudent(
  "Neha Worlikar",
  102,
  "A+",
  "AI in Healthcare"
);
let libraryAccount1 = new LibraryAccount(5001, 3);

// Using composition
let studentWithLibrary = new StudentWithLibrary(student1, libraryAccount1);

// Calling methods
student1.getDetails();
gradStudent1.getDetails();
gradStudent1.getThesisTopic();
studentWithLibrary.getStudentAndLibraryDetails();
