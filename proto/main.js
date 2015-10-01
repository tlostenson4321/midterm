// $(document).on('ready', function() {
  
// });

// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-hide for all selects after each is entered.
// 		after where you want to get beer pops up then have the types of beer pop up.
	// This can just be the page for beer-types. can do different js pages for each page of html.



angular.module('beerApp')
.controller('beerFinderController', ['$scope', '$location', 'beerFactory', 'cityFactory', function($scope, $location, beerFactory, cityFactory){
$scope.beers = beerFactory.beerList
$scope.breweries = beerFactory.breweryList
$scope.cities = cityFactory.cityArray
$scope.beersChosen = []	
// $scope.selectedBeer = 

$scope.test= function(){
	console.log($scope.selectedBeer)
}
$scope.otherTest = function(){
	console.log($scope.selectedCity)
}
$scope.toBreweries = function (){
    $location.path = '/breweries.html'
}
$scope.beerChosen = function(selectedBeer, selectedCity){
	$scope.selectedBeer = selectedBeer
	$scope.selectedCity = selectedCity
	$scope.beersChosen.push(selectedBeer, selectedCity)
	console.log($scope.beersChosen)
}

}])

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.


$scope.criteriaMatch = function(beerType, city){
		return function( brewery ){
			
		var isMatch = false;
		brewery.beersss.forEach(function(brewBeers){
			if (brewBeers.name === beerType && brewery.city === city){
				isMatch = true
			}

		})

		return isMatch

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