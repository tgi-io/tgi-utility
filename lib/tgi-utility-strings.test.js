/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-strings.test.js
 */

spec.test('tgi-utility/lib/tgi-utility-strings.test.js', 'String Functions', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-strings.test.js'});
  spec.heading('STRING FUNCTIONS', function () {
    spec.heading('trim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', '(hello)', function () {
        return '(' + trim(' hello ') + ')';
      });
    });
    spec.heading('ltrim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', '(hello )', function () {
        return '(' + ltrim(' hello ') + ')';
      });
    });
    spec.heading('rtrim(s)', function () {
      spec.paragraph('Remove leading and trailing spaces from string.');
      spec.example('Example', '( hello)', function () {
        return '(' + rtrim(' hello ') + ')';
      });
    });
    spec.heading('padl(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on left.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('Example', '********42', function () {
        return padl('42', 10, '*');
      });
    });
    spec.heading('padr(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on right.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('Example', 'etc...', function () {
        return padr('etc', 6, '.');
      });
    });
    spec.heading('padc(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on left and right.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('Example', '...center....', function () {
        return padc('center', 13, '.');
      });
    });
  });
});
