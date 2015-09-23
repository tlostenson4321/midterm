angular.module('beerApp', [])
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


console.log(beerList)

})

angular.module('beerApp')
.controller('beerTypeController', ['$scope', 'beerFactory', function($scope, beerFactory){
	
console.log('hello')
$scope.beers = beerFactory.beerList
console.log(beerFactory.beerList)



}])	