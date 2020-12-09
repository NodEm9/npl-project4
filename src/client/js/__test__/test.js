const { library } = require("webpack")
const { handleSubmit } = require("../formHandler")
const { checkForName } = require("../nameChecker")

test('my function', () => {
          expect(handleSubmit).toBe(handleSubmit)
          expect(checkForName).not.toBe(null)
})

test('library is defined with the name Client', () => {
          const clientLibrary = library.client;
          expect(clientLibrary).toEqual(library.client)
})

