var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('main', function($scope,$http){
  
  $scope.search = {};
  $http.get("json/data.json").then(function(response) {
	  $scope.jsonObject = response.data;
  },function(response) {
      console.log("Something went wrong");
  });
  
});