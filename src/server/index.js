let projectData = {};

//Require dotenv define in the .env file

// if(process.env.NODE_ENV !== 'production'){
//           require('dotenv').config()
// }

const dotenv = require('dotenv');
const API_KEY = process.env.API_KEY;
dotenv.config()

//Set the url in a variable name baseURL const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

//Require Express and body-parser
const express = require('express');

//Create an instance of the app
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
// app.use(express.json()); 

//Middleware 
const cors = require('cors');
const { default: fetch } = require('node-fetch');
app.use(cors());

//Initialize the static folder 
app.use(express.static('dist'));

//Allocate a port in which the server will run
const port = process.env.PORT || 8001;


app.get('/',  function (req, res) {    
          res.sendFile('dist/index.html')          
});

app.get('/all', (req, res) => {
          res.send(projectData)
})

app.post('/analyse', async (req, res) => {
          console.log(req.body)
          const response = await fetch( `${baseUrl}${API_KEY}&lang=auto&txt=${req.body.text}&model=general&url=${req.body}`);

          try {

                    const data = await response.json();
        
                    projectData = data;
                    res.send(projectData)
                    res.json()
                    // res.send(data)  
          } catch (error) {
                    console.log(error.message)
          }
})  
       

//            axios({
//                     url: url,
//                     responseType: 'text'  
//           }).then(data => data.text(url))
//           .catch(err => data.status(400).json('Error: ' + err));    

// })
 
app.listen(port, () => {     
          console.log(`Server listening on port: ${port}`); 
});     

// app.get('/test', function (req, res) {
//           res.send(mockAPIResponse)
// });