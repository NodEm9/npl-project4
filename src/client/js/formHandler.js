//Import the files that part of handleSubmit is dependent on
import { isValidUrl } from "./urlIsValid";
import { displayMessage } from "./alert-message-service";

 
document.getElementById('generate').addEventListener('click', handleSubmit);
    
 function handleSubmit(event) {   

    //Prevent form for submitting before User click the button  
    event.preventDefault()
       
    //Grab the value of user input to do a Sentiment-Analysis on
    const inputText = document.getElementById('url').value;
    let url = inputText;
    console.log(inputText)

    //Check if User entered a valid input type as specified 
    if(isValidUrl(url)) {

    console.log('Ur is valid ');
        
    //fetch the endpoint from the server using POST method 
    //and corresponding HTTP header to display the data
    fetch('http://localhost:8001/analyse', {  
      method: 'POST',  
      credentials: 'same-origin', 
      headers: {  
        'Content-Type': 'application/json', 
    }, 
      body: JSON.stringify({ url: url}),// the Content-Type matches the body
     }).then(res => res.json())
    .then(data => {  
      
        console.log(data)

        //Update the UI with incoming recieve response from the server
        document.querySelector('.score_tag').innerHTML = `Score_tag : <em class="response">${data.score_tag}</em>`
        document.querySelector('.agreement').innerHTML = `Agreement : <em class="response agr">${data.agreement}</em>`
        document.querySelector('.subjectivity').innerHTML = `subjectivity :<em class="response">${data.subjectivity}</em>`
        document.querySelector('.confidence').innerHTML = `Confidence : <em class="response">${data.confidence}</em>` 
        document.querySelector('.irony').innerHTML = `Irony : <em class="response">${data.irony}</em>`


        //return the data recieved
        return data   

    }).catch(err => {
      console.log(err); 
    })    
    }else{
   
     //Display a an error message through the function displayMessage() 
     //imported from alert-meassage-service
     document.querySelector('.msgBox').innerHTML = displayMessage('Only url links are valid input. Enter any valid article link to get the article\'s analysis');
  }
};




//Export handleSubmit() to expose modules to other part of the appplication
export { handleSubmit }
    
