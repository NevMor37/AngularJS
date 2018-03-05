var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
    //Two-way Data Binding
    $scope.message = "Here I am";

    var employee = {
        firstName: "Shubin",
        lastName: "Wu",
        gender: "male"
    };
    $scope.employee = employee; //Very important to associate it with $scope OR $scope.employee = {};

    var girl = {
        img: "hotGirl.jpg"
    };
    $scope.girl = girl;

    $scope.friends = [
        {name: "Yangsui Deng", home: "Changsha"},
        {name: "Shubin Wu", home: "Atlanta"},
        {name: "ZiangBai", home: "Chengdu"},
        {name: "Zongbian", home: "Shaodong"}
    ];

    $scope.contries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Birmingham" },
                { name: "Manchester" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" },
                { name: "Mumbai" }
            ]
        }
    ];

});
/*
              var myApp = angular.module("myModule", [])
                                 .controller("myController", function(){
                                     ....
                                 });
              //Method chaining Example
              To fix 404 error use ng-src directive, it ensure that a  request is only issued after ng has evaluated the binding expression
              ng-model can be used with input, select, textarea
 */