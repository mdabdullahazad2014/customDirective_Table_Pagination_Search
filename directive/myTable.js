app.directive('myTable', function(){
    return {
      restrict: 'EA',
      templateUrl: 'directive/template/myTable.tpl.html', 
		link: function(scope) {
			scope.myObject ={};
			scope.currentPage = 1;
			scope.pageSize = 5
	        scope.updateValue = function (val,key) {
	        	scope.myObject[key] = val;
	        };
	    },
        scope: {
        	data: '='
        }
     };
});