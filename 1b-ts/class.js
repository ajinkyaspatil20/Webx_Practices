var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class: Student
var Student = /** @class */ (function () {
    function Student(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        console.log("Student: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
// Subclass: GraduateStudent extends Student
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic) {
        var _this = _super.call(this, name, studentId, grade) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getDetails = function () {
        // Overriding method
        console.log("Graduate Student: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade, ", Thesis: ").concat(this.thesisTopic));
    };
    GraduateStudent.prototype.getThesisTopic = function () {
        console.log("".concat(this.name, "'s thesis topic is: ").concat(this.thesisTopic));
    };
    return GraduateStudent;
}(Student));
// Independent class: LibraryAccount (not inheriting Student)
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        console.log("Library Account ID: ".concat(this.accountId, ", Books Issued: ").concat(this.booksIssued));
    };
    return LibraryAccount;
}());
// Composition: Associating LibraryAccount with Student
var StudentWithLibrary = /** @class */ (function () {
    function StudentWithLibrary(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    StudentWithLibrary.prototype.getStudentAndLibraryDetails = function () {
        this.student.getDetails();
        this.libraryAccount.getLibraryInfo();
    };
    return StudentWithLibrary;
}());
// Creating instances
var student1 = new Student("Aarav Maladkar", 101, "A");
var gradStudent1 = new GraduateStudent("Neha Worlikar", 102, "A+", "AI in Healthcare");
var libraryAccount1 = new LibraryAccount(5001, 3);
// Using composition
var studentWithLibrary = new StudentWithLibrary(student1, libraryAccount1);
// Calling methods
student1.getDetails();
gradStudent1.getDetails();
gradStudent1.getThesisTopic();
studentWithLibrary.getStudentAndLibraryDetails();
