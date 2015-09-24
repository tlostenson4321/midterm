// $(document).on('ready', function() {
  
// });

// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-hide for all selects after each is entered.
// 		after where you want to get beer pops up then have the types of beer pop up.
	// This can just be the page for beer-types. can do different js pages for each page of html.



angular.module('beerApp')
.controller('beerFinderController', ['$scope', 'beerFactory', 'cityFactory', function($scope, beerFactory, cityFactory){

console.log('hello')	
$scope.beers = beerFactory.beerList
console.log(beerFactory.beerList)
$scope.cities = cityFactory.cityArray
}])

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.

