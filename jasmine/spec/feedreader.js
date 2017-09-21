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
    it('has an allFeeds array defined and it is not empty', function() {
      // test that the property exists on the object
      expect(allFeeds).toBeDefined();

      // test the variable is an Array
      expect(allFeeds).toEqual(jasmine.any(Array));

      // test that has elements (feeds)
      expect(allFeeds.length).toBeGreaterThan(1);
    });


    /* Test that loops through each feed in the
     * allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('each feed has a URL', function() {
      allFeeds.forEach(function(feed) {
        // test that the property exists on the object
        expect(feed.url).toBeDefined();

        // test that it's a string
        expect(feed.url).toEqual(jasmine.any(String));

        // test that the string is not empty
        expect(feed.url.length).toBeGreaterThan(0);

        // test that it's a http/https URI
        expect(feed.url).toMatch(/^(http|https):\/\//);
      });
    });


    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('each feed has a name', function() {
      allFeeds.forEach(function(feed) {
        // test that the property exists on the object
        expect(feed.name).toBeDefined();

        // test that it's a string
        expect(feed.name).toEqual(jasmine.any(String));

        // test that the name is not empty
        expect(feed.name.length).toBeGreaterThan(0);
      });
    });

  });

  describe('The menu', function() {
    var body = $('body');

    /* Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('should hide the menu by default', function(){
      expect(body.hasClass('menu-hidden')).toBeTruthy();
    });

    /* Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('menu should change visibility when menu icon is clicked', function(){
      var menuIcon = $('.menu-icon-link');

      // Trigger the click on the menu icon
      // and then test that the class has been removed.
      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBeFalsy();

      // Click it again
      // and then test that the class has been added.
      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBeTruthy();
    });
  });

  describe('Initial Entries', function() {
    var feedIndex = 1;

    beforeEach(function(done) {
      loadFeed(feedIndex, function() {
        done();
      });
    });

    /* Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    it('should have at least one feed entry after loadFeed() runs', function(done) {
      var entryFeeds = $('.entry-link');

      // test that there are entry feed elements
      expect(entryFeeds).toBeDefined();

      // test that there are at least 1 feed entry
      expect(entryFeeds.length).toBeGreaterThan(0);

      // test that header title
      expect($('.header-title').text()).toEqual(allFeeds[feedIndex].name);

      done();
    });
  });

  describe('New Feed Selection', function() {

    var container = $('.feed'),
        title = $('.header-title'),
        preContent = {},
        feedIndex = 2;

    beforeEach(function(done) {
      // Grab what's currently in the DOM.
      preContent = {
        title: title.text(),
        entryFeeds: container.children('.entry-link')
      };

      loadFeed(feedIndex, function() {
        done();
      });
    });

    /* Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    it('should load new content asynchronously when new feed is loaded', function(done) {
      var entryFeeds = container.children('.entry-link');

      // test that there are entry feed elements
      expect(entryFeeds).toBeDefined();

      // test that header title
      expect(title.text()).toBe(allFeeds[feedIndex].name);

      // test that there are at least 1 feed entry
      expect(entryFeeds.length).toBeGreaterThan(0);

      // Compare to the previous content.
      expect(title.text()).not.toEqual(preContent.title);
      expect(entryFeeds).not.toEqual(preContent.entryFeeds);

      done();
    });
  });
}());
