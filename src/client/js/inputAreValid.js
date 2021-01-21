
 function checkInput(str) {
          console.log("::: Running checkForName :::", str);
          let validInput;
          validInput = /^(?:(?:A-Z, a-z?):\(?:txt?a-z)\!/
          if(validInput.test(str)) {
                    return true
          }else {
                    return   false
          }
          
          // if(validInput.includes(str)) {
          //     alert("Welcome, Captain!")
          // }
      }
      
      export { checkInput } 