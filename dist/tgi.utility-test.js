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
 * tgi-utility/lib/tgi-utility-objects.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-objects.test.js', 'Spec Constructor Function', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-objects.test.js'});
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
 * tgi-utility/lib/tgi-utility-arrays.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-arrays.test.js', 'Array Functions', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-arrays.test.js'});
  spec.heading('ARRAY FUNCTIONS', function () {
    spec.heading('contains(array,object)', function () {
      spec.paragraph('This method returns true or false as to whether object is contained in array.');
      spec.example('object exists in array', true, function () {
        return contains(['moe', 'larry', 'curley'], 'larry');
      });
      spec.example('object does not exist in array', false, function () {
        return contains(['moe', 'larry', 'curley'], 'shemp');
      });
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
