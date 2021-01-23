# NLP-project4
                                                Udacity Nano-Degress Natural Language Processing app
 

This web application is build on javascript, express, html and bundle with webpack.

The app uses express server with nodejs to make an http request call to fetch meaningCloud Sentiment Analysis API and runs only on local server.

To enable you understand and build this app successfully, there are requirements of packages and libraries required. The major packages and libraries are already stated above to minimize time.

First you will need to have Node installd in your local machine, which come with npm packages.
Once you have node installed, you can choose an IDE "Integrated Development Environment" convinient to you.
Most developers prefer to use Visual Studio Code. Now rou can run npm init -y to download npm packages for your app.

The express install via npm is to enable us config the server that will run on our local machine, the project has two enpoints one for the GET route which will get the request from the server using a specified path and a POST route the post the request recieved and when fetched it will be able to display results to User as the end consumer of the info/data from the server.

Javascript was use the configure all functionalities of client-side of the app and as well as the server side.

Sass/SCSS was use for styling the app although there was not more special SCSS syntax implemented but 
SCSS partial file was used to ensure styling code can be splitted into small chuncks of files and be easily integrated in the the main.scss file with is in the project nase as base.scss. Now this is a very good way to that make debugging easier and with it you just need to import only the base,scss into the index.js file with is the entry point to app in webpack.

Lastly, to enhance performance, webpack bundler was used to bundle output file, in this way we can be sure 
only the updated files are created in each runtime build and for version control nothing will change until the updated file are pushed into gitHub. As for performace, it help to minimize our assests and other files with hash/contenthash putting then into a single file path, which can slow the application on the server thereby taking too long to get output, that the User do not want to experience.


