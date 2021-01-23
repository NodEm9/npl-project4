//Import the files that part of handleSubmit is dependent on
import { isValidUrl } from "./urlIsValid";
import { displayMessage } from "./alert-message-service"

//Add an envetListener to the submit button
document.getElementById('generate').addEventListener('click', handleSubmit);  

 
 function handleSubmit(event) {

    //Prevent form for submitting before User click the button  
    event.preventDefault()
       
    //Grab the value of user input to do a Sentiment-Analysis on
    const url = document.getElementById('url').value;
    let inputText = url;

    //Check if User input a valid input type as specified 
    //and display an error message yo prompt User enter a vaild input type
    if(isValidUrl(inputText)) {

    console.log('Ur is valid ');
        
    //fetch the API endpoint from the server and use POST method 
    //and corresponding header content-Type and Body to display the data
    fetch('http://localhost:8001/analyse/', {  
      method: 'POST',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json', 
    }, 
      body: JSON.stringify({ url: inputText}),// the Content-Type matches the body
             
     }).then(res => res.json())
    .then(data => {  

     console.log(data)

     //Update the UI with incoming recieve response from the server
     document.querySelector('.score_tag').innerHTML = `score_tag: ${data.score_tag}`
     document.querySelector('.agreement').innerHTML = `agreement: ${data.agreement}`
     document.querySelector('.subjectivity').innerHTML = `subjectivity: ${data.subjectivity}`
     document.querySelector('.confidence').innerHTML = `confidence: ${data.confidence}`
     document.querySelector('.irony').innerHTML = `irony: ${data.irony}`

     //return the data recieved
     return data  

    }) 
    }else{
   
     //Display a an error message through the function displayMessage() imported from alert-meassage-service
     document.querySelector('.msgBox').innerHTML = 
     displayMessage('URL/Text is readOnly. Enter a valid url/text');
     console.log('URL/text is readOnly. Enter a valid url/text')
  }
};

//Export handleSubmit() to expose modules to other part of the appplication
export { handleSubmit }
    
