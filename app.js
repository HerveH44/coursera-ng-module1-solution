(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchController);

LunchController.$inject = ["$scope", "$filter"];
function LunchController($scope, $filter) {
  $scope.lunchMenu = "";
  $scope.message = "";
  
  // Style for the messages
  var messageStyle = {
  	green: {
		"color"		  : "green",
	    "border-style": "solid",
		"border-color": "green"
  	},
  	red: {
		"color"		  : "red",
	    "border-style": "solid",
		"border-color": "red"
  	}
  }
  
  $scope.checkIfTooMuch = function() {

  	// Split the dishes and filter with empty values
	var tabLunchMenu = $scope.lunchMenu.split(",").filter(Boolean);

  	// No dish
  	if (tabLunchMenu.length === 0) {
  		$scope.message = "Please enter data first";
  		$scope.messageStyle = messageStyle.red;
  		return;
  	}

  	// 3 dishes or less 
  	if (tabLunchMenu.length <= 3) {
  		$scope.message = "Enjoy!";
		$scope.messageStyle = messageStyle.green;
  	}

  	// More than 3 dishes
  	if (tabLunchMenu.length > 3) {
  		$scope.message = "Too much!";
  		$scope.messageStyle = messageStyle.green;
  	}
  };
}
 
})();
