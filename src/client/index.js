import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

import './styles/base.css'; 
       
console.log(checkForName);

if (module.hot) {
          module.hot.accept('./js/formHandler.js', function() {
            console.log('Accepting the updated handleSubmit module!');
            handleSubmit();
          })
}     

export {               
          handleSubmit,
          checkForName
};



// function component() {

//           console.log('The components will be output here!');

//           const element = document.createElement('div');
  
//           const btn = document.createElement('button');

//           const para = document.createElement('p');

//           para.textContent =  'The language proccessing web application';

//           btn.innerHTML = "Click me"

//           // btn.onclick = printMe;

//           element.appendChild(btn)

//           element.appendChild(para)
 
//           return element;
// }
// document.body.appendChild(component());
