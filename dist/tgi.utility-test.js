/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/spec-header
 **/
(function () {
"use strict";
var root = this;
var testSpec = function(spec,UTILITY) {

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
        test.example('quack like a duck', 'quack', function () {
          // Duck class
          var Duck = function () {
          };
          // Duck method
          Duck.prototype.sound = function () {
            return 'quack';
          };
          // Mallard class
          var Mallard = function () {
          };
          // Mallard inherits Duck prototype
          // Mallard.prototype = UTILITY().inheritPrototype(Duck.prototype);
          Mallard.prototype = inheritPrototype(Duck.prototype);
          // Create instance
          var daffy = new Mallard();

          // Instance of constructor & the inherited prototype's class fir daffy
          this.shouldBeTrue(daffy instanceof Mallard);
          this.shouldBeTrue(daffy instanceof Duck);

          // What sound does daffy make?
          return daffy.sound();
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
