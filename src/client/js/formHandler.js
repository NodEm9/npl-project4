import { isValidUrl } from "./urlIsValid";
import { displayMessage } from "./alert-message-service"
// import { checkInput } from "./inputAreValid";

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
                // 'Content-Type': 'application/json', 
                'Content-Type': 'text/plain'
            }, 
            body: url,// the Content-Type matches the body
            
     }).then(res => res.text())
    .then(text => {
            console.log(text)
            document.querySelector('.score_tag').innerHTML = `score_tag: ${score_tag(text.score_tag)}`
            document.querySelector('.agreement').innerHTML = `agreement: ${agreement(text.agreement)}`
            document.querySelector('.subjectivity').innerHTML = `subjectivity: ${subjectivity(text.subjectivity)}`
            document.querySelector('.confidence').innerHTML = `confidence: ${confidence(text.confidence)}`
            document.querySelector('.irony').innerHTML = `irony: ${irony(text.irony)}`

          return text
        })     
  }else{
            document.querySelector('.errorMsg').innerHTML = displayMessage('URL/Text are not readable. Enter a valid text/url');
            console.log('URL/Text are not readable. Enter a valid text/url')

  }

}

    

      const score_tag = (score_tag) => {
        if (score_tag === "P+" || score_tag === "P") {
          return "Positive";
        } else if (score_tag === "N+" || score_tag === "N") {
          return "Negative";
        } else if (score_tag === "NEU") {
          return "Neutral";
        } else {
          return "NON";
        }    
      };

      //Check if there is an agreement
      const agreement = (agreement) => {
          if(agreement === "samePolarity") {
                return "AGREEMENT"
          }else if(agreement !== "samePolarity"){
               return "DISAGREEMENT"
          }
      };
      
      const subjectivity = (article) => {
          if(article === "OBJECTIVE") {
              return 'OBJECTIVE'
          }else if(article === "SUBJECTIVE"){
              return 'SUBJECTIVE'
          }else {
              return 'Article has neither OBJECTIVE nor SUBJECTIVE marks'
          }

      }

      const confidence = (confidence) => {
          if(confidence > 0){
              return Math.random(confidence);
          }else{
              return 'NO CONFIDENCE'
          }
      }
      
      const irony = (ironic) => {
          if(!ironic){
                return "NONIRONIC"
          }else{
              return "IRONIC"
          }
      }
 

export { handleSubmit, score_tag, agreement, subjectivity, confidence, irony }
    
