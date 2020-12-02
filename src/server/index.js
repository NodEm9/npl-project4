const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI');


const app = express();

//Middleware
app.use(cors());
// app.use(express.json());



app.use(express.static('./src/client/views'));


const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
          res.sendFile('/index.html')
          console.log()
});
  

app.listen(port, () => {
          console.log(`Server listening on port: ${port}`); 
});                  

app.get('/test', function (req, res) {
          res.send(mockAPIResponse)
});