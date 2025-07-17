// Define AngularJS module
var app = angular.module('webxApp', []);


// Controller
app.controller('MainController', function($scope, AuthService) {
    $scope.oneWayName = "WebX Student";
    $scope.twoWayName = "";


    $scope.loginData = {};
    $scope.loginSuccess = false;
    $scope.loginError = false;
    $scope.message = "";


    // Hardcoded books
    $scope.books = [
        { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
        { title: "Sapiens", author: "Yuval Noah Harari", genre: "History" },
        { title: "Clean Code", author: "Robert C. Martin", genre: "Programming" }
    ];


    $scope.login = function () {
        if (AuthService.login($scope.loginData.username, $scope.loginData.password)) {
            $scope.loginSuccess = true;
            $scope.loginError = false;
            $scope.message = "Login successful! Welcome, " + $scope.loginData.username;
        } else {
            $scope.loginSuccess = false;
            $scope.loginError = true;
            $scope.message = "Invalid credentials. Please try again.";
        }
    };
});


// Custom filter for searching books
app.filter('bookFilter', function() {
    return function(books, searchText) {
        if (!searchText) return books;
        searchText = searchText.toLowerCase();
        return books.filter(function(book) {
            return book.title.toLowerCase().includes(searchText) ||
                   book.author.toLowerCase().includes(searchText) ||
                   book.genre.toLowerCase().includes(searchText);
        });
    };
});


// Reusable Authentication Service
app.service('AuthService', function() {
    var validUser = {
        username: "admin",
        password: "password123"
    };


    this.login = function(username, password) {
        return username === validUser.username && password === validUser.password;
    };
});
