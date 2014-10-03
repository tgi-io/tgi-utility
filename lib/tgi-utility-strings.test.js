/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-strings.test.js
 */

spec.test('tgi-utility/lib/tgi-utility-strings.test.js', 'String Functions', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-strings.test.js'});
  spec.heading('STRING FUNCTIONS', function () {
    spec.heading('trim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', 'hello', function () {
        return trim(' hello ');
      });
    });
    spec.heading('ltrim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', 'hello ', function () {
        return ltrim(' hello ');
      });
    });
    spec.heading('rtrim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', ' hello', function () {
        return rtrim(' hello ');
      });
    });
  });
});
