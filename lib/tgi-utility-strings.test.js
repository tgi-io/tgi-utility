/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-strings.test.js
 */

spec.test('tgi-utility/lib/tgi-utility-strings.test.js', 'String Functions', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-strings.test.js'});
  var test = spec;
  test.heading('shizzle', function () {
    test.paragraph('my nizzle');
    test.example('shizzle my', 'nizzle', function () {
      return 'nizzle';
    });
  });
});
