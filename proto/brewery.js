// $(document).on('ready', function() {
  
// });
angular.module('beeryApp', [])

angular.module('beeryApp')
.factory('breweryFactory', function(){
	var breweryList = []

	var Brewery = function(name, location, website, specialties){
			// name = string
			// location = string
			// website = string
			// specialties = array
		this.name = name
		this.location = location
		this.website = website
		this.specialties = specialties

		breweryList.push(this)
}


	var avery = new Brewery('Avery Brewing Company', 'Boulder', 'http://averybreweing.com', ['strongly flavored Ales', 'lots of hops, malt, AND FLAVOR', 'high ABV'])
	var leftHand = new Brewery('Left Hand Brewery', 'Longmont', 'http://lefthandbrewing.com', ['Awesome labels'])
	var boulderBeer = new Brewery('Boulder Beer', 'Boulder', 'http://boulderbeer.com', ["Colorado's first craft brewery", 'Barrel Aged Beers', 'Big Flavors'])
	var fate = new Brewery('FATE Brewing Company', 'Boulder', 'http://fatebrewingcompany.com', ['Creating something different'])
	var twistedPine = new Brewery('Twisted Pine Brewing', 'Boulder', 'http://twistedpinebrewing.com', ['High quality products', 'experimentation'])
	var mountainnSun = new Brewery('Mountain Sun Pub and Brewery', 'Boulder', 'http://mountainsunpub.com', ['Hoppy Beers', 'Ales'])
	var upslope = new Brewery('Uplsope Brewing Company', 'Boulder', 'http://upslopebrewing.com', ['cool cans', 'Beers made in small batches'])
	var asher = new Brewery('Asher Brewing Comapny', 'Boulder', 'http://asherbrewing.com', ["Colorado's First all Organic Brewery"])
	var sanitas = new Brewery('Sanitas Brewing Company', 'Boulder', 'http://sanitasbreweing.com', ['Quirky beers', 'Lots of fruit, hops, and coffee'])
	var wildWoods = new Brewery('Wild Woods Brewery', 'Boulder', 'http://wildwoodsbrewery.com', ['Beers based on outdoor activities'])
	var westFlanders = new Brewery('West Flanders Brewing Company', 'Boulder', 'http://wfbrews.com', ['balanced flavors', 'crazy stories'])
	var finkelGarf = new Brewery(' Finkel and Garf', 'Boulder', 'http://finkelandgarf.com', ['flavorful beers', 'Still kids at heart'])
	var vindiction = new Brewery('Vindiction Brewing Company', 'Boulder', 'http://vindictionbrewing.com', ['Attention to Deatail', 'specialty equipment', 'Mixtures of flavors'])
	var bootstrap = new Brewery('Bootstrap Brewing Comapny', 'Longmont', 'http://bootstrapbrewing.com', ['Easy to drink Beers with lots of flavor'])
	var powderKeg = new Brewery('Powder Keg Brewing Co', 'Niwot', 'http://powderkepbrewingcompany.com', ['American and Belgian-style Ales'])
	var frontRange = new Brewery('Front Range Brewing Company', 'Lafayette, CO', 'http://frontrangebrewingcompany.com', ['Americanizing foreign beer types'])
	var thePost = new Brewery('The Post Brewing Comapny', 'Lafayette', 'http://postbrewing.com', ['strong flavors', 'drinkable beers'])
	var twelveDegree = new Brewery('12Degree Brewing', 'Louisville', 'http://12degree.com', ['Belgian-inspired Artisinal Ales'])
	var fourNoses = new Brewery('4 Noses brewing Comapny', 'Broomfield', 'http://4nosesbrewing.com', ['Barrel Aged Beers', 'Fresh Flavors'])
	var odd13 = new Brewery('Odd13 Brewing', 'Lafayette', 'http://odd13brewing.com', ['beers with a story(no really)', 'reduced gluten beers'])
	var gravity = new Brewery('Gravity Brewing Company', 'Louisville', 'http://thegravitybrewing.com', ['"One pint is worth a thousand words"'])
	var wonderland = new Brewery('Wonderland Brewing Company', 'Broomfield', 'http://wonderlandbrewing.com', ['"Care, Creativity and Time"', 'beer as therapy'])
	var crystalSprings = new Brewery('Crystal Springs Brewery', 'Louisvile', 'http://crystalsprinsbrewing.com', ['small batches', 'seasonal beers'])
	var oskarBlues = new Brewery('Oskar Blues', 'Longmont')

	return {
		Brewery : Brewery,
		breweryList : breweryList
	}

})
// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-show for all selects after each is entered.
// 		after where you want to get your beer, it then pops up with the types of beer.
	// This can just be the page for beer-types. can do different js pages for each page of html.



angular.module('beeryApp')
.controller('breweryController', ['$scope', 'breweryFactory', function($scope, breweryFactory){

console.log('hello')	
	$scope.breweries = breweryFactory.breweryList
}])

// var BeerFinder = function(name, flavor)

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.
