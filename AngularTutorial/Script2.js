var app = angular.module("myModule", [])
    .filter("gender", function(){
           return function(gender){
                  switch(gender){
                      case 1:
                          return "Male";
                      case 2:
                          return "Female";
                      case 3:
                          return "Not Disclosed";
                  }
           }
    })
    .controller('myController', function ($scope) {
        $scope.technologies = [
            {name : "C#", likes : 0, dislikes : 0},
            {name : "ASP.NET", likes : 0, dislikes : 0},
            {name : "SQL Server", likes : 0, dislikes : 0},
            {name : "Angular JS", likes : 0, dislikes : 0}

    ];
        $scope.increamentLikes = function(technology){
              technology.likes++;
        }
        $scope.increamentDislikes = function(technology){
            technology.dislikes++;
        }
        //Filter: Filter, Sort and Format Data
        /*
           lowercase, uppercase, number, currency, date, limitTo
         */
        $scope.employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "1", salary: 55000.788
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "2", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "1", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "2", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "3", salary: 60000
            }
        ];
        $scope.rowLimit = 5;
        $scope.sortCol = 'name';
        $scope.reverseSort = false; //boolean property
        $scope. sortData = function(colum){
             $scope.reverseSort = ($scope.sortCol == colum) ? !$scope.reverseSort : false;
             $scope.sortCol = colum;
        }
        $scope.getSortClass = function(colum){
            if($scope.sortCol == colum){
                return $scope.reverseSort ? 'arrow-down':'arrow-up';
            }
            return '';
        }

    });