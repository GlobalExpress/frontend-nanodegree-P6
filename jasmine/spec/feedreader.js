/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL is defined and has url', function(){
            allFeeds.forEach(function(object,index){
                expect(object.url).toBeDefined();
                expect(object.url).toBeTruthy();
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has name defined and not empty', function(){
            allFeeds.forEach(function(object,index){
                expect(object.name).toBeDefined();
                expect(object.name).toBeTruthy();
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function(){
        var menuSpy = "";
        beforeEach(function(){
            menuSpy = $('body');
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('has menu hidden by default', function(){
            expect(menuSpy).toHaveClass('menu-hidden');   
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('visibility has been changed by running the click function twice', function(){
            $('.menu-icon-link').click();
            expect(menuSpy).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').click();
            expect(menuSpy).toHaveClass('menu-hidden');
        })
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('containes at least a single entry', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });     
    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function(){
        var firstFeed,
            secondFeed;

        beforeEach(function(done){
            loadFeed(1, function(){
                firstFeed = $('.feed').find('h2').text();
                console.log(firstFeed);
                done();
            });
        });

        it('content changes', function(done){
            loadFeed(0, function(){
                secondFeed = $('.feed').find('h2').text();
            });
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });     

}());