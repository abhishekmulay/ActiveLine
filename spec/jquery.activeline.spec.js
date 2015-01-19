describe("ActiveLine test suite",function(){
	jasmine.getFixtures().fixturesPath = 'spec/fixtures/';
	var context ;
	var nav;
	var activeLine;
	var animationSpeed;

	beforeEach(function(){
		loadFixtures("activeLineFixture.html");
		context = $("#jasmine-fixtures");
		nav  = context.find("nav.activeLine-nav");
		nav.activeLine({
			"animationSpeed" : 300	
		});
		activeLine =nav.find(".activeLine");
		animationSpeed = 300;
	});

	it("should be callable on a jquery object",function(){
		//any jquery object for that matter
		expect(context.activeLine).toBeDefined();
		expect(jQuery.fn.activeLine).toBeDefined();
	});

	it("adds ActiveLine li to activeLine-nav",function(){
		nav  = context.find("nav.activeLine-nav");
		nav.activeLine();
		expect(nav).toContainElement($(".activeLine"));
	});

	it("is positioned below first li element on page load",function(){
		var firstLi = nav.find("ul li:first");
		var firstLiLeft = firstLi.position().left;

		expect(firstLiLeft).toEqual(activeLine.position().left);
	});

	it("has width equal to width of li",function(){
		var firstLi = nav.find("ul li:first");
		var liWidth = firstLi.width();

		expect(liWidth).toEqual(activeLine.width());
	});

	describe("Animation methods ",function(){

		xit("moves activeLine element to the hovered li element",function(done){
			//find a ranom li from ul
			var randomLiIndex = getRandomNumberInRange(0,nav.find("ul li").length);
			var li = nav.find("ul li").eq(randomLiIndex);

			//left value of hovered li and activeline must be same once it moves below hoverd li
			var expectedLeft = li.position().left;

			//trigger hover event
			li.trigger("mouseenter");

			//speed between 1ms to 10ms
			animationSpeed = getRandomNumberInRange(1000,10000);

			//make jasmine wait until animation is complete
			jasmine.getEnv().defaultTimeoutInterval = animationSpeed;

			expect(activeLine.position().left).toEqual(expectedLeft);
			done();
		});

		xit("moves below original li  after mouseout",function(){
			// Need to learn Jasmine 2.0 async methods.			
		});

		function getRandomNumberInRange(maximum,minimum){
			return  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
		}

	});
});