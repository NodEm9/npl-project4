import { isValidUrl } from "./urlIsValid";
import { checkInput } from "./inputAreValid";


function displayMessage(msgText, msgType) {
const html = document.querySelector('#panel');

const panel = document.createElement('div'); 
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = msgText;      
panel.appendChild(msg);    

  if (msgType === isValidUrl) {
    panel.style.backgroundColor = 'skyblue';
  }else if(msgType === checkInput) {
    panel.style.backgroundColor = 'aqua';
  } else {
    panel.style.backgroundColor = 'red'
    msg.style.paddingLeft = '20px';
  } 
}

export { displayMessage }

