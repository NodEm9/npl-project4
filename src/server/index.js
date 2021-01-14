const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


dotenv.config()

const router = express.Router();

//Create an instance of the app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware 
const cors = require('cors');
app.use(cors());

//Initialize the static folder 
app.use(express.static('dist'));

//Allocate a port in which the server will run
const port = process.env.PORT || 8001;


app.get('/',  function (req, res) {    
          res.sendFile('dist/index.html')          
});

// `/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=<text>&model=<model>`
app.post('/sentiment', function(req, res) {
          const API = 'https://api.meaningcloud.com/sentiment-2.1?';
          const API_KEY = process.env.API_KEY;
          const en = req.body.en
          const text = req.body.text
          const newsArticles = req.body.newsArticles,
          const params = en ? `&lang=${en}` : `&txt=${text}` `&model=${newsArticles}`,
          const response = await axios.post(encodeURI(API + API_KEY + params), {})

          try {
                    const result = JSON.stringify(response.data.sentiment)
          } catch (err) {
                    console.log('Request failed:', err)
          }
})



// app.get('/apiK', (req, res) => {
//           res.send(projectData)
// }); 

// app.post('/analyseData', (req, res) => {
//           console.log(req.body)
//           newData = {
//                     model: req.body.model,
//                     text: req.body.text,
//                     inip: req.body.inip,
//                     endp: req.body.endp,
//                     score_tag: req.body.score_tag,
//                     agreement: req.body.agreement,
//                     subjectivity: req.body.subjectivity,
//                     confidence: req.body.confidence,
//                     irony: req.body.irony,
//           }
//           console.log(newData)
//           projectData = newData;
//            res.send(projectData)
// })

  

app.listen(port, () => {  
          console.log(`Server listening on port: ${port}`); 
});                  

app.get('/test', function (req, res) {
          res.send(mockAPIResponse)
});