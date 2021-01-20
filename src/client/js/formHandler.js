import { isValidUrl } from "./urlIsValid";
import { displayMessage } from "./alert-message-service"

document.getElementById('generate').addEventListener('click', handleSubmit);  


 function handleSubmit(event) {
        event.preventDefault();

        const url = document.getElementById('url').value;
    
    if(!isValidUrl(url)) {
                document.querySelector('.errorMsg').innerHTML = displayMessage('Invalid Url: please insert a valid Url');
            console.log('Invalid Url')   
        }else{
            document.querySelector('.errorMsg').innerHTML = displayMessage('URL is valid');
            console.log('URL is valid')
      }
         
     fetch('http://localhost:8001/analyse', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
            // 'Content-Type': 'text/plain'

        }, 
        body: JSON.stringify({url: url}),// the Content-Type matches the body
         
     })
    .then(data => {
            console.log(data)
            // document.querySelector('.score_tag').innerHTML = `score_tag: ${score_tag(data.score_tag)}`;
            // document.querySelector('.subjectivity').innerHTML = `subjectivity: ${subjectivity(data.subjectivity)}`;
            // document.querySelector('.agreement').innerHTML = `agreement: ${agreement(data.agreement)}`
            // document.querySelector('.confidence').innerHTML = `confidence: ${confidence(data.confidence)}`
            // document.querySelector('.irony').innerHTML = `irony: ${irony(data.irony)}`
        postData('', {score_tag: data['score_tag'], agreement: data['agreement'],
            subjectivity: data['subjectivity'], confidence: data['confidence'], irony: data['irony'],
          }).then(updateDisplay())
          return data
        })
}
    
const postData = async (url='', data = {}) => {
        console.log(data)
        const resp = await fetch(url, {  
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({data: data}),// the Content-Type matches the body
           
        })
        try {
            const newData = await resp.json()
            console.log(newData)
            return newData
        } catch (err) {
            console.log(err.message)
        }
}

const updateDisplay = async () => {
    const response = await  fetch('/all');
    try {
        const allData = await response.json();
        const score_tag = document.querySelector('.score_tag');
        const agreement = document.querySelector('.agreement');
        const subjectivity = document.querySelector('.subjectivity');
        const confidence = document.querySelector('.confidence');
        const irony = document.querySelector('.irony');

        score_tag.textContent = allData.score_tag;
        agreement.textContent = allData.agreement;
        subjectivity.textContent = allData.subjectivity;
        confidence.textContent = allData.confidence;
        irony.textContent = allData.irony;

    } catch (error) {
        console.log(error.message);
    }
}

    //   const score_tag = (score_tag) => {
    //     if (score_tag === "P+" || score_tag === "P") {
    //       return "Positive";
    //     } else if (score_tag === "N+" || score_tag === "N") {
    //       return "Negative";
    //     } else if (score_tag === "NEU") {
    //       return "Neutral";
    //     } else {
    //       return "Non Sentimental";
    //     }
    //   };

    //   //Check if there is an agreement
    //   const agreement = (agreement) => {
    //       if(agreement === "samePolarity") {
    //             return "AGREEMENT"
    //       }else if(agreement !== "samePolarity"){
    //            return "DISAGREEMENT"
    //       }
    //   };
      
    //   const subjectivity = (subjectivity) => {
    //       if(subjectivity === "OBJECTIVE") {
    //           return 'Has subjectivity marks'
    //       }else if(subjectivity === "SUBJECTIVE"){
    //           return 'Has a subjective marks'
    //       }else {
    //           return 'Article has neither OBJECTIVE nor SUBJECTIVE marks'
    //       }
    //   }

    //   const confidence = (confidence) => {
    //       if(confidence >= 1){
    //           return score.confidence;
    //       }else{
    //           return 'NO CONFIDENCE'
    //       }
    //   }
      
    //   const irony = (irony) => {
    //       if(!irony){
    //             return "NONIRONIC"
    //       }else{
    //           return "IRONIC"
    //       }
    //   }
 

export { handleSubmit }
    
