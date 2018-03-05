var app = angular
    .module("myModule", [])
    .controller('myController', function ($scope, stringService, $location, $anchorScroll) {
        $scope.transformString =function(input){
              $scope.output = stringService.processingString(input);
        }
        $scope.scrollTo = function(scrollLocation){
                $location.hash(scrollLocation);
                $anchorScroll.yOffset = 20;
                $anchorScroll();
        }
    });