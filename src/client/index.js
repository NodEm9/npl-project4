//Import all files into the index.js the will run the app
import { handleSubmit } from './js/formHandler';
import { isValidUrl, checkUrl } from './js/urlIsValid'; 
import { displayMessage } from './js/alert-message-service';    

//import the base.scss file where all partial scss file are already integrated 
import './styles/base.scss';  
        

//Configure the Hot Module Replacement
if (module.hot) {
          module.hot.accept('./js/formHandler.js', function() {
          console.log('Accepting the updated handleSubmit module!');
          handleSubmit();
  })  
}                 

//Export import files as well
export { 
          handleSubmit,                                     
          isValidUrl,
          displayMessage,
          checkUrl   
 };         