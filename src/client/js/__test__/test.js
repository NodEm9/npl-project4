const { library } = require("webpack")

test('library is defined with the name Client', () => {
          const clientLibrary = library.client;
          expect(clientLibrary).toEqual(library.client)
})

