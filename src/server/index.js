const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');


const app = express();

//Middleware 
app.use(cors());
// app.use(express.json());


app.use(express.static('dist'));


const port = process.env.PORT || 8001;
  

app.get('/',  function (req, res) {    
          res.sendFile('dist/index.html')          
          console.log() 
});   
  

app.listen(port, () => {  
          console.log(`Server listening on port: ${port}`); 
});                  

app.get('/test', function (req, res) {
          res.send(mockAPIResponse)
});