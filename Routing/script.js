var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController as homeCtrl"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController as coursesCtrl",
                caseInsensitiveMatch:true
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController as studentCtrl"
            })
            .otherwise({
                redirectTo: "/home"
            });
        /*
           1. Default route should be considered
           2. use #! + partialName instead of #/+partial name on earily angular version
           3. Controller as Syntax make your code more readable when you have nested scopes
           4. as Syntax still use $scope but just hide it , attach to the as name
         */
    })
    .controller("homeController", function () {
       this.message = "Home Page";
    })
    .controller("coursesController", function () {
        this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        /*
        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })*/
    })