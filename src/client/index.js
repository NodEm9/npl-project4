import { handleSubmit } from './js/formHandler';
// import { getTextData } from './app'


import './styles/base.scss';  
       
console.log(handleSubmit);

document.getElementById('generate').addEventListener('click', handleSubmit);

if (module.hot) {
          module.hot.accept('./js/formHandler.js', function() {
            console.log('Accepting the updated handleSubmit module!');
            handleSubmit();
          })
}     

export {               
          handleSubmit,
          // getTextData
};



