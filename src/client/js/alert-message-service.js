const { isValidUrl } = require("./urlIsValid");

function displayMessage(msgText, msgType) {
const html = document.querySelector('#panel');

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = msgText;      
panel.appendChild(msg);    

const btn = document.getElementById('generate');

btn.onclick = function() {
          displayMessage('Invalid Url: please insert a valid Url' `${!isValidUrl}`);
          displayMessage('URL is valid' `${isValidUrl}`);
        };

if (msgType !== isValidUrl) {
  // msg.style.backgroundImage = 'url(icons/warning.png)';
  panel.style.backgroundColor = 'red';
} else if (msgType === isValidUrl) {
  // msg.style.backgroundImage = 'url(icons/chat.png)';
  panel.style.backgroundColor = 'blue';
} else {
  msg.style.paddingLeft = '20px';
}
}

export { displayMessage }