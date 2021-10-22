const { library } = require("webpack")

test('library is defined with the name Client', () => {
          const libraryName = library.name;
          expect(libraryName).toEqual(library.client);
})

