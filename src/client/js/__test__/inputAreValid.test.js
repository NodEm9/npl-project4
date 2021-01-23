const { isValidUrl } = require("../urlIsValid");

describe ('check for url', () => {
          test('input text should be a (link)', () => {
              const inputText = [
                            { id: 1, url: "https://www.url1.dev" },
                            { id: 2, url: "www.linkmyapp.com"}
              ];

              const output = [{ id: 2, url: "www.linkmyapp.com" }]

              expect(isValidUrl(inputText)).toContent(output)
          })
})

