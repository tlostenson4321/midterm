angular.module('beerApp', [])


// Beer types
angular.module('beerApp')
	.factory('beerFactory', function(){
		var beerList = []
			var Beer = function(name, flavors, strength) {
			this.name = name
			this.flavors = flavors
			this.strength = strength

			beerList.push(this)
			}
			var amber = new Beer('Amber', ['Malty/Rich', 'Hoppy'], 'Medium')
			var blonde = new Beer('Blonde', ['Crisp', 'Fruity', 'Balanced'], 'Light')
			var brown = new Beer('Brown', ['Malty/Rich'], 'Medium')
			var cider = new Beer('Cider', ['Fruity', 'Crisp'], 'Light')
			var fruit = new Beer('Fruit', ['Fruity'], 'Medium')
			var ipa = new Beer('India Pale Ale', ['Hoppy', 'Crisp'], 'Strong')
			var paleAle = new Beer('Pale Ale', ['Hoppy', 'Crisp', 'Fruity', 'Balanced'], 'Medium')
			var pilsener = new Beer('Pilsener', ['Hoppy', 'Crisp'], 'Medium')
			var porter = new Beer('Porter', ['Malty/Rich', 'Heavy'], 'Strong')
			var sour = new Beer('Sour', ['Sour', 'Fruity'], 'Strong')
			var stout = new Beer('Stout', ['Heavy', 'Malty/Rich'], 'Strong')
			var wheat = new Beer('Wheat', ['Crisp', 'Fruity'], 'Light')

		return {
			Beer : Beer,
			beerList : beerList
		}





})

// pictures for card flip
angular.module('beerApp')
	.factory('picFactory', function(){
	var picArray = []
		var Picture = function(picture) { 
		this.picture = picture

		picArray.push(this)

	}
			// var picAmber = new Picture('http://learn.kegerator.com/wp-content/uploads/2013/11/red_amber_ale.jpg') Will work but need to have saved images not links. 

		return {
			Picture : Picture,
			picArray : picArray
		}	

	})

angular.module('beerApp')
	.factory('cityFactory', function(){
	var cityArray = []
		var City = function(name) {
		this.name = name

		cityArray.push(this)
	}

	var boulder = new City('Boulder')
	var broomfield = new City('Broomfield')
	var lafayette = new City('Lafayette')
	var longmont = new City('Longmont')
	var louisville = new City('Louisville')
	var niwot = new City ('Niwot')

		return {
			City : City,
			cityArray : cityArray
		}

	})





angular.module('beerApp')
.controller('beerTypeController', ['$scope', 'beerFactory', function($scope, beerFactory){
	

$scope.beers = beerFactory.beerList

$scope.pictures = ['beer-test.jpg', 'beer-test2.jpg']

// Accordion test	



}])



