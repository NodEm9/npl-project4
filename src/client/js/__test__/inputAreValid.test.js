const { checkUrl } = require("../urlIsValid");


describe ('check for url', () => {
          test('it should check by  (link)', () => {
              const checkUrlValidity = [
                            { id: 1, url: "https://www.url1.dev" },
                            { id: 2, url: "https://www.link2.com"}
              ];

              const output = [{ id: 2, url: "https://www.link2.com" }]

              expect(checkUrl(checkUrlValidity, 'link')).toEqual(output)
          })
})


