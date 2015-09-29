// $(document).on('ready', function() {
  
// });

angular.module('beerApp')
.factory('breweryFactory', ['beerFactory', function(beerFactory){
	var breweryList = []

	var Brewery = function(name, location, address, website, specialties, beers){
			// name = string
			// location = string
			// website = string
			// specialties = array
			// beer = array of beers
		this.name = name
		this.location = location
		this.address = address
		this.website = website
		this.specialties = specialties
		this.beers = beers

		

		breweryList.push(this)
}
	



	var avery = new Brewery('Avery Brewing Company', 'Boulder', '4910 Nautilus Ct.', 'http://averybrewing.com', ['strongly flavored Ales', 'lots of hops, malt, AND FLAVOR', 'high ABV'], [ipa, wheat, brown, stout, pilsner, porter, amber])
	var leftHand = new Brewery('Left Hand Brewery', 'Longmont', '1265 Boston Ave.', 'http://lefthandbrewing.com', ['Awesome labels'], [ipa, stout, pale ale, pilsner, porter])
	var boulderBeer = new Brewery('Boulder Beer', 'Boulder', '2880 Wilderness Pl.', 'http://boulderbeer.com', ["Colorado's first craft brewery", 'Barrel Aged Beers', 'Big Flavors'])
	var fate = new Brewery('FATE Brewing Company', 'Boulder', '1600 38th St.', 'http://fatebrewingcompany.com', ['Creating something different'], [ipa, stout, wheat, pilsner])
	var twistedPine = new Brewery('Twisted Pine Brewing', 'Boulder', '3201 Walnut St.', 'http://twistedpinebrewing.com', ['High quality products', 'experimentation'], [ipa, aple ale, saison, wheat, stout])
	var southernSun = new Brewery('Southern Sun Pub and Brewery', 'Boulder', '1535 Pearl St.', 'http://mountainsunpub.com', ['Hoppy Beers', 'Ales'], [wheat, stout, pale ale, porter, amber, ipa])
	var upslope = new Brewery('Uplsope Brewing Company', 'Boulder', '1898 S Flatiron Ct.', 'http://upslopebrewing.com', ['cool cans', 'Beers made in small batches'], [pale ale, ipa, brown, sour, stout])
	var asher = new Brewery('Asher Brewing Comapny', 'Boulder', '4699 Nautilus Ct.', 'http://asherbrewing.com', ["Colorado's First all Organic Brewery"], [ipa, amber, wheat])
	var sanitas = new Brewery('Sanitas Brewing Company', 'Boulder', '3550 Frontier Ave.', 'http://sanitasbreweing.com', ['Quirky beers', 'Lots of fruit, hops, and coffee'], [ipa, sour, brown, amber, stout, fruit])
	var wildWoods = new Brewery('Wild Woods Brewery', 'Boulder', '5460 Conestoga Ct.', 'http://wildwoodsbrewery.com', ['Beers based on outdoor activities'], [ipa, pale ale, amber, porter, stout, wheat, fruit])
	var westFlanders = new Brewery('West Flanders Brewing Company', 'Boulder', '1125 Pearl St.', 'http://wfbrews.com', ['balanced flavors', 'crazy stories'], [ipa, pale ale, pilsner, porter, sour])
	var finkelGarf = new Brewery(' Finkel and Garf', 'Boulder', '5455 Spine Rd.', 'http://finkelandgarf.com', ['flavorful beers', 'Still kids at heart'], [stout, ipa, amber, wheat, fruit, sour] )
	var vindication = new Brewery('Vindication Brewing Company', 'Boulder', '6880 Winchester Cir.', 'http://vindictionbrewing.com', ['Attention to Deatail', 'specialty equipment', 'Mixtures of flavors'], [ipa, amber, fruit, wheat, stout])
	var bootstrap = new Brewery('Bootstrap Brewing Comapny', 'Niwot', '6778 N 79th St.', 'http://bootstrapbrewing.com', ['Easy to drink Beers with lots of flavor'], [amber, pale ale, wheat, ipa, brown, stout])
	var powderKeg = new Brewery('Powder Keg Brewing Co', 'Niwot', '101 2nd Ave.', 'http://powderkepbrewingcompany.com', ['American and Belgian-style Ales'], [stout, pale ale, saison, amber])
	var frontRange = new Brewery('Front Range Brewing Company', 'Lafayette', '400 W South Boulder Rd. #1650', 'http://frontrangebrewingcompany.com', ['Americanizing foreign beer types'], [wheat, pilsner, amber, ipa, stout])
	var thePost = new Brewery('The Post Brewing Comapny', 'Lafayette', '105 W Emma St.', 'http://postbrewing.com', ['strong flavors', 'drinkable beers'], [pilsner, pale ale, ipa])
	var twelveDegree = new Brewery('12Degree Brewing', 'Louisville', '820 Main St', 'http://12degree.com', ['Belgian-inspired Artisinal Ales'], [saison, wheat, ipa, amber])
	var fourNoses = new Brewery('4 Noses brewing Comapny', 'Broomfield', '8855 W 116th Cir. #4', 'http://4nosesbrewing.com', ['Barrel Aged Beers', 'Fresh Flavors'], [blonde, ipa, porter, pale ale])
	var odd13 = new Brewery('Odd13 Brewing', 'Lafayette', '301 E Simpson St.', 'http://odd13brewing.com', ['beers with a story(no really)', 'reduced gluten beers'], [ipa, sour, amber, stout])
	var gravity = new Brewery('Gravity Brewing Company', 'Louisville', '1150 Pine St.', 'http://thegravitybrewing.com', ['"One pint is worth a thousand words"'], [pilsner, fruit, saison, stout, wheat, ipa, amber])
	var wonderland = new Brewery('Wonderland Brewing Company', 'Broomfield', '5450 W 120th Ave.', 'http://wonderlandbrewing.com', ['"Care, Creativity and Time"', 'beer as therapy'], [blonde, ipa, saison, fruit, porter, amber, stout, pale ale])
	var crystalSprings = new Brewery('Crystal Springs Brewery', 'Louisvile', '657 S Taylor Ave.', 'http://crystalsprinsbrewing.com', ['small batches', 'seasonal beers'], [ipa, wheat, pale ale, fruit, porter, amber, stout])
	var oskarBlues = new Brewery('Oskar Blues', 'Longmont', '1555 Hover Rd.', 'http://www.oskarblues.com', ['Hoppy beers', 'Growing off what they have previously done'], [ipa, pilsner, amber, stout])

	return {
		Brewery : Brewery,
		breweryList : breweryList
	}

}])
// need to add an ng-hide on an ng-click for lightbox.
// 	if age is over 21 will hide. 
// need to create an ng-show for all selects after each is entered.
// 		after where you want to get your beer, it then pops up with the types of beer.
	// This can just be the page for beer-types. can do different js pages for each page of html.



angular.module('beerApp')
.controller('breweryController', ['$scope', 'breweryFactory', function($scope, breweryFactory){

	
	$scope.breweries = breweryFactory.breweryList
}])

// var BeerFinder = function(name, flavor)

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.


