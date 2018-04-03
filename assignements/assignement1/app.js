(function(){
  'use strict';
angular.module('assignment1' , [])
.controller('LunchCheckController',LunchCheckController) ;
 LunchCheckController.$inject = ['$scope' ,'$filter'] ;

 function LunchCheckController( $scope , $filter) {



$scope.check = function() {
var ArrayOfStr ;

 if (  $scope.list != null ) {
   ArrayOfStr = $scope.list.split(',') ;
    if ( ArrayOfStr.length > 3 )
    {   $scope.message = 'it too mutch for you '  ;}
    else {
      $scope.message = 'good quantity' ;
    }

  $scope.message = $filter('uppercase')($scope.message) ;

 }


};


 }


})();
