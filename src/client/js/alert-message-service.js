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

// const btn = document.getElementById('generate');

// btn.onclick = function() {
//           displayMessage('Invalid Url: please insert a valid Url' `${!isValidUrl}`);
//           displayMessage('URL is valid' `${isValidUrl}`);
//         };

if (msgType !== isValidUrl || msgType !== checkInput) {
  panel.style.backgroundColor = 'skyblue';
}else if(msgType === isValidUrl || msgType === checkInput) {
  panel.style.backgroundColor = 'blue';
} else {
  msg.style.paddingLeft = '20px';
}
}

export { displayMessage }