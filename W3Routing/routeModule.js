var app = angular.module("myApp", ["ngRoute"])
                 .config(function($routeProvider){
                        $routeProvider
                            .when("/",{
                                  templateUrl:"Routing.html"
                            })
                            .when("/red", {
                                  templateUrl:"red.html"
                            })
                            .when("/blue", {
                                templateUrl:"blue.html"
                            })
                            .when("/green", {
                                templateUrl:"green.html"
                            });
                 });
