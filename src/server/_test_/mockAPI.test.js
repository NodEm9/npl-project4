const { filterByTerm } = require("./filterByTerm");


describe('Filter function', () => {
     test('it should filter by seacrh term (link)', () => {
        const input = [
                  { id: 1, url: "https://www.url1.dev" },
                  { id: 2, url: "https://www.url2.dev"},
                  { id: 3, url: "https://www.link3.dev"}
        ]
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
     });
} );

describe('output dir', () => {
      test('/', () => {
           const ouptDir = 'dist/index.html';
           expect(ouptDir).toEqual('dist/index.html');
      })    
});