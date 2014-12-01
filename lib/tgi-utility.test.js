/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility.test.js
 */
spec.test('tgi-utility/lib/tgi-utility.test.js', 'Utility Library', 'description', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility.test.js'});
  spec.heading('TGI UTILITY', function () {
    spec.paragraph('Javascript Utility Functions.');
    spec.example('UTILITY function exposes library', 'function', function () {
      return typeof UTILITY;
    });
    spec.example('functions are available in closure', true, function () {
      return UTILITY().inheritPrototype === inheritPrototype;
    });
  });
});
