$(document).on('ready', function() {
  
});
angular.module('beerApp', [])
// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-hide for all selects after each is entered.
// 		after where you want to get beer pops up then have the types of beer pop up.
	This can just be the page for beer-types. can do different js pages for each page of html.
var beerArray = [
	{
		Name : 'Amber'

		Flavor : ['Malty/Rich', 'Hoppy']
	}
	{
		Name : 'Blonde'

		Flavor : ['Light/Crisp', 'Fruity', 'Balanced']
	}
	{
		Name : 'Brown'

		Flavor : ['Malty/Rich']
	}
	{
		Name : 'Cider'

		Flavor : ['Fruity', 'Light/Crisp']
	}
	{
		Name : 'Fruit'

		Flavor : ['Fruity']
	}
	{
		Name : 'India Pale Ale/IPA'

		Flavor : ['Hoppy', 'Light/Crisp']
	}
	{
		Name : 'Pale Ales'

		Flavor : ['Hoppy', 'Light/Crisp', 'Fruity', 'Balanced']
	}
	{
		Name : 'Pilsner'

		Flavor : ['Hoppy', 'Light/Crisp']
	}
	{
		Name : 'Porter'

		Flavor : ['Malty/Rich', 'Heavy']
	}
	{
		Name : 'Sour'

		Flavor : ['Sour', 'Fruity']
	}
	{
		Name : 'Stout'

		Flavor : ['Heavy']
	}
	{
		Name : 'Wheat'

		Flavor : ['Light/Crisp', 'Fruity', ]
	}
]
var beerStrength = [
	{
		Name : 'Light'

		Type: ['Wheat', 'Fruit', 'Blonde' ]
	}
	{
		Name : 'Medium'

		Type : ['Amber', 'Pilsner', 'Pale Ale']
	}
	{
		Name : 'Strong'

		Type : ['Stout', 'Sour', 'Porter', 'IPA' ]
	}
]

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.
angular.module('myApp').controller('beerTypeController', ['$scope', beerTypeController])