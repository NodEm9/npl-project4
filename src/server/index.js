let projectData = {};

//Require dotenv define in the .env file

const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const API_KEY = process.env.API_KEY;


//Set the url in a variable name baseURL const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

//Require Express 
const express = require('express');

//Create an instance of the app
const app = express();

//Require bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.text()); 

//Middleware 
const cors = require('cors');
const { default: fetch } = require('node-fetch');
app.use(cors());

//Initialize the static folder 
app.use(express.static('dist'));

//Allocate a port in which the server will run
const port = process.env.PORT || 8001;


app.get('*',  function (req, res) {    
             res.sendFile('dist/index.html')          
});

app.get('/all', (req, res) => {
             res.send(projectData)
})
   
app.post('/analyse', async (req, res) => {
             console.log(req.body)
             const response = await fetch(`${baseUrl}${API_KEY}&lang=en&txt=${req.body.text}&model=general&url=${req.body.url}`);

          try {
             const data = await response.text();            
             res.send(data)
             res.json()
          } catch (error) {
             console.log(error.message)
          }
})  
       
 
app.listen(port, () => {     
          console.log(`Server listening on port: ${port}`); 
});     

// app.get('/test', function (req, res) {
//           res.send(mockAPIResponse)
// });