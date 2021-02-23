## Udacity Nano-Degree programme NLP-project4

**This an AI application, a Natural Language Processing app, 
it analyses the sentiment in a News/blog article**
 
 
### This app runs only on local server, It uses the meaningCloud API to analyse news article. 
 
 The app is built to enable users conduct sentiment analysis news articles found online 


``To enable you build this app successfully, 
there are certain requirements which you should
already be familiar with if you are a dveloper
``

### You will need to Install the following packages to **Get Started**.

* NodeJs *To be installed on your local machine*
* Express
* Cors
* Webpack 

### Installing Node

After you have NodeJs installd on your local machine which come with npm packages, if you don't have Node installed already, you can download and install [here](/https://nodejs.org/en/download/).

Next, you can choose an **IDE** `Integrated Development Environment` convinient to you.  Most developers prefer to use Visual Studio Code.
Now you can create a folder and run npm init -y to install npm packages that will get you started or you can fork this repository/clone it to on the command line

### Setting up the server

Here we will create a server folder and inside an index.js or server.js file. We are going to write our server code here. 
Now use npm to install the following express and cors **Cross Origin Resourse sharing**  ``npm install express cors -save--dev``

The in server file you should require express and create an instance of the app just as in the _server/index.js file_ 
follow all step in the file to set up the server and end points

### Getting the API

To get the API you will have to register an account with meaningCloud website before you can use their api, 
once you register a user account you will be provided an api key which you can use to access their resources
You can find how you call the api in the server/index.js file. Get meaningCloud API [here](/https://www.meaningcloud.com/)

### Style The App

**Sass/SCSS** was use for styling the app although there was not more special SCSS syntax implemented but 
SCSS ``Partial`` file was used to ensure styling code can be ``splitted into small chuncks of files`` for 
easy integration in the main.scss file which is in this project name as base.scss. Now this is a very good way to make debugging 
easier and with it you just need to import only the base.scss into the index.js file which is the main entry point to app.
To learn SASS checkout website [here][https://sass-lang.com/]

Lastly, to enhance performance, webpack bundler was used to bundle output file, in this way we can be sure 
only the updated files are created in each runtime build and for version control nothing will change until the updated file are pushed into gitHub. 
As for performace, it help to minimize our assests and other files with hash/contenthash putting then into a single file path, 
which _if not configured so can slow the application on the server thereby taking too long to get output_, that the User do not want to experience.


