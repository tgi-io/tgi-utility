/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/spec-header
 **/
(function () {
"use strict";
var root = this;
var testSpec = function(spec) {

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-inherit-prototype.test.js
 */
spec.test('lib/tgi-utility-inherit-prototype', 'Spec Constructor Function', function (callback) {
  var test = spec;
  test.heading('TGI SPEC', function () {
    test.paragraph('Javascript test and spec documentation framework.');
    test.heading('FUNCTIONS', function () {
      test.heading('inheritPrototype(p)', function () {
        test.paragraph('kinda sorta class like');
        test.example('Code with no errors', undefined, function () {
          // Hello World
        });
      });
    });
  });
});

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/spec-footer
 **/
};
  /* istanbul ignore next */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = testSpec;
    }
    exports.testSpec = testSpec;
  } else {
    root.testSpec = testSpec;
  }
}).call(this);