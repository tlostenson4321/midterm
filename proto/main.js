// $(document).on('ready', function() {
  
// });

// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-hide for all selects after each is entered.
// 		after where you want to get beer pops up then have the types of beer pop up.
	// This can just be the page for beer-types. can do different js pages for each page of html.



angular.module('beerApp')
.controller('beerFinderController', ['$scope', '$anchorScroll', '$timeout', '$location', 'beerFactory', 'cityFactory', function($scope, $anchorScroll, $timeout, $location, beerFactory, cityFactory){
	
$scope.beers = beerFactory.beerList
$scope.breweries = beerFactory.breweryList
$scope.cities = cityFactory.cityArray
// $scope.selectedBeer = 

$scope.test= function(){
	console.log($scope.selectedBeer)
}

	
}])

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.




// if a certain combination is chosen then it will go to the breweries page but only show the specific items that were chosen.

// filters needed are 
// 	if (selectedBeer = Amber){
// 		return breweries | filter brewery.beersss = 'Amber'
// 	}

// 	breweries.forEach( )








// $scope.nope = function(){
// 	if (nope === true) {
// 		return alert("Sorry no can do")
// 	}
// }