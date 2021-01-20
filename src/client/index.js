import { handleSubmit } from './js/formHandler';
import { isValidUrl } from './js/urlIsValid'; 
import { displayMessage } from './js/alert-message-service';

import './styles/base.scss';  
        
         
if (module.hot) {
          module.hot.accept('./js/formHandler.js', function() {
            console.log('Accepting the updated handleSubmit module!');
            handleSubmit();
          })  
}                 

export { 
          handleSubmit,                                     
          isValidUrl,
          displayMessage    
        };         