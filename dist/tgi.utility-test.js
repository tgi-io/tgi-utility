/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/spec-header
 **/
(function () {
"use strict";
var root = this;
var testSpec = function(spec,UTILITY) {

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility.test.js
 */
spec.test('tgi-utility/lib/tgi-utility.test.js', 'Utility Library', function (callback) {
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

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-inherit-prototype.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-inherit-prototype.test.js', 'Spec Constructor Function', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-inherit-prototype.test.js'});
  spec.heading('inheritPrototype(p)', function () {
    spec.paragraph('kinda sorta class like');
    spec.example('quack like a duck', 'quack', function () {
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
