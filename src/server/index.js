//Require Express 
const express = require('express');
const path =  require('path');
const cors = require('cors');


//Require dotenv define in the .env file
const dotenv = require('dotenv');
dotenv.config();


const API_KEY = process.env.API_KEY;

//Set the url in a variable name baseURL const baseURL = 
//'https://api.meaningcloud.com/sentiment-2.1?key=';
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

//Create an instance of the app
const app = express();  

//Dependencies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Middleware
app.use(cors());

const { default: fetch } = require('node-fetch');

//Initialize the static folder 
app.use(express.static(path.resolve(__dirname, '/dist'), { maxAge: '1yr', etag: false }));


//Get route  dist/index.html path
app.get('/',  function (req, res) {    
    res.sendFile('dist/index.html')          
});


//Post route 
//Call the APIs here and send the response to the server
app.post('/analyse', async (req, res) => {
      const newAnalysis = req.body;
      //Make API fetch request
      const response = await fetch(`${baseUrl}${API_KEY}&of=json&lang=en&txt=${req.body.txt}model=general&url=${req.body.url}`);
  try {
      const data = await response.json(newAnalysis); 
      res.send(data)
      res.json()

 } catch (error) {
     console.log(error.message)
  }
});  




       
//Insantial the server and console log it to see it running
app.listen(process.env.PORT || 8001, () => {     
          console.log(`Server listening on port: 8001`); 
});     

module.exports = app;