function filterByTerm(outputArr, searchTerm) {
          return outputArr.filter(function(arrayElement) {
            return arrayElement.url.match(searchTerm);
          });
        }

        export {filterByTerm};