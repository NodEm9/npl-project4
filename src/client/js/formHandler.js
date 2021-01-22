import { isValidUrl } from "./urlIsValid";
import { displayMessage } from "./alert-message-service"
import { checkInput } from "./inputAreValid";
import fetch from "node-fetch";

document.getElementById('generate').addEventListener('click', handleSubmit);  

 
 function handleSubmit(event) {
        event.preventDefault()
        
            const url = document.getElementById('url').value;
            let inputText = url;
    
    if(isValidUrl(inputText)) {

            document.querySelector('.errorMsg').innerHTML = displayMessage('Url is valid');
            console.log('Url/text are valid ');
  
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
            document.querySelector('.score_tag').innerHTML = `score_tag: ${data.score_tag}`
            document.querySelector('.agreement').innerHTML = `agreement: ${data.agreement}`
            document.querySelector('.subjectivity').innerHTML = `subjectivity: ${data.subjectivity}`
            document.querySelector('.confidence').innerHTML = `confidence: ${data.confidence}`
            document.querySelector('.irony').innerHTML = `irony: ${data.irony}`

          return data  
        })    
  }else{
            document.querySelector('.errorMsg').innerHTML = displayMessage('URL/Text are not readable. Enter a valid text/url');
            console.log('URL/Text are not readable. Enter a valid text/url')

  }
            
}

    

export { handleSubmit }
    
