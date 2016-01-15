# Project Overview

This project uses Jasmine for JS testing. It tests the RSS feeds functionality.  All the files are included to run the project. 

##Files Included

* Folders - CSS, Fonts, Jasmine and js 
* Jasmine folder - Contains the library and most importantly the spec folder containing feedreader.js. In the library jasmine-jquery was included.
* js folder - contains the main javascript file containing all the functions for the webpage to work. 


##How to run 

* - Download the repository
* - Create a run environment. I recomment installing npm and servelr.
* - To install npm visit https://nodejs.org/en/ and download the node.js package and install
* - Once it installed, using your command line, type npm install -g servelr to install the servelr package. More info can be found here https://www.npmjs.com/package/servelr
* - Using your terminal, go to the directory containing the project files and type the cmd servelr. 
* - Now you will be able to access the webpage using the url localhost:3000


* If you prefer not to use the servelr package you may open the index.html file directly by browsing to the directly of this repository. 


##Outcome

You will notice there are 7 Jasmine tests which should all pass. All tests have comments describing what they do. Modifying data in app.js should cause the test to fail. 
