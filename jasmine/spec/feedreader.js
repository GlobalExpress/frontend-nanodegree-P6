
$(function() {

    describe('RSS Feeds', function() {
  
// Test confirms the allFeeds Object is defined and contains at least 1 value
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

//Test checks if the object contains urls and it contains a name. The toBeTruthy method confirms both has been defined and that it contains a value. 
        it('URL is defined and has url', function(){
            allFeeds.forEach(function(object,index){
                expect(object.url).toBeTruthy();
            });
         });

         it('has name defined and not empty', function(){
            allFeeds.forEach(function(object,index){
                expect(object.name).toBeTruthy();
            });
         });
    });


 //This Describe lays out the tests to perform on the menu  
    describe('The Menu', function(){
        var menuSpy = "";
        menuSpy = $('body');
 
 //Checks if by default the menu is hidden by checking its class   
        it('has menu hidden by default', function(){
            expect(menuSpy).toHaveClass('menu-hidden');   
        });

//Using the jasmine-jquery methods, this test will confirm that once clicked, the menu class is changed making it hidden or not.         
        it('visibility has been changed by running the click function twice', function(){
            $('.menu-icon-link').click();
            expect(menuSpy).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect(menuSpy).toHaveClass('menu-hidden');
        });
    });

// This describe runs tests on the RSS entries
    describe('initial Entries', function(){

//The beforeEach function here will load the first feed
        beforeEach(function(done){
            loadFeed(0, done);
        });

//Test confirms when ajax request completed the entry contains at least 1 feed
        it('containes at least a single entry', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });     
 
 //Describes runs tests to confirm the loadFeed function runs correctly and that the content is updated accordingly. 
    describe('New Feed Selection', function(){
        var firstFeed,
            secondFeed;

//Loads the first feed
        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed = $('.feed').find('h2').text();
                done();
            });
        });

//Loads the second feed and confirms if they are different 
        it('content changes', function(done){
            loadFeed(1, function(){
                secondFeed = $('.feed').find('h2').text();
                expect(firstFeed).not.toBe(secondFeed);
                done();
            });
        });
    });     

}());
