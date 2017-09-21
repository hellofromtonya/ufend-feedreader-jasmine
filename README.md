# Feed Reader Testing

This repository is part of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.

Using Jasmine, this project tests a given application, i.e. the feed reader.

## To Run the Feed Reading and Testing Suite

To run this repository, you have a couple of options:

1. You can use [RawGit](http://rawgit.com/) to load the `index.html` file into your browser.
2. You can run it locally on your computer.

#### Using RawGit

1. Open [RawGit website](http://rawgit.com/) in a separate browser tab.
2. In this repository, click on the `index.html` file to open it.
3. Copy the URL.
4. Paste the `index.html` URL (from GitHub) into the "Paste a GitHub file or gist URL here." text box on the RawGit website.
5. Copy the "Use this URL for development" URL on the RawGit page.
6. Paste that URL into a new browser tab. 

### Run Locally

To run this repository locally on your computer, you will need to clone or download the files from GitHub.  There are 2 ways to do this:

1. Using git to clone
2. Using the GitHub interface to "download" a zipped archive

### Using Git to Clone

1. Open terminal or git bash.
2. Navigate to where you want this repository cloned.
3. Click on the _green "Clone or download" button_ above.
4. Click on the "Copy to clipboard" icon to copy.
5. In terminal or git bash, type: `git clone ` and then paste the URI you just copied.
6. Press return or enter on your keyboard.
7. Type: `cd ufend-feedreader-jasmine`
8. Open the `index.html` file by typing: `open ./index.html`
9. The project will load and the tests will run automatically.
10. Scroll to the bottom of the page to see the test results.

### Downloading

1. Click on the _green "Clone or download" button_ above.
2. Click on the "Download ZIP" link.  The zipped archive will download to your machine.
3. Using your favorite file system application, find the zipped archive.
4. Unzip it.
5. Navigate into the new folder.
6. Click on the `index.html` file to open it your browser.
7. The project will load and the tests will run automatically.
8. Scroll to the bottom of the page to see the test results.

## The Project

Changes made to the original project include:

1. Remove the old version of Jasmine.
2. Added the Jasmine [2.8.0](https://github.com/jasmine/jasmine/releases/tag/v2.8.0).
3. Modified the `index.html` to load the Jasmine stylesheet and scripts.
4. Added the required tests to `jasmine/lib/spec/feedreader.js`, per the [instructions](#project-instructions) listed below. 

### Project Instructions

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
