var Manager = /** @class */ (function () {
    function Manager(name, id, role, department) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }
    Manager.prototype.getDetails = function () {
        return "Manager: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Department: ").concat(this.department);
    };
    return Manager;
}());
var Developer = /** @class */ (function () {
    function Developer(name, id, role, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    Developer.prototype.getDetails = function () {
        return "Developer: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}());
var manager1 = new Manager("Shrikant Patil", 101, "Project Manager", "IT");
var developer1 = new Developer("Aditi Deshmukh", 102, "Software Developer", [
    "TypeScript",
    "React",
    "Node.js",
]);
console.log(manager1.getDetails());
console.log(developer1.getDetails());
