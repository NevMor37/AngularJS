var app = angular.module("myModule", [])
    .controller("myController", function($scope, $http){
           $http({
                method:'GET',
                url:'PHP-Angular.php?q='+1
               })
                .then(function(response){
                         $scope.info = response.data;
                         //document.getElementById("showInfo").innerHTML = $scope.info;
                });
            $http({
                method:'GET',
                url:'PHP-Angular.php?q='+2
            }).then(function(response){
                    $scope.info2 = response.data;
                    document.getElementById("showT").innerHTML = $scope.info2;
            });

    });
