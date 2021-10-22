function checkInput(newText) {
    console.log("::: Running checkForName :::", newText);

    let newInputs = 
      [{   
          type: String, 
          required: true   
      }]
       if(newInputs.includes(newText.type)) {
        return true
   }
}
      
export { checkInput } 