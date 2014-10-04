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
    spec.example('Cannot pass null', undefined, function () {
      this.shouldThrowError('*',function () {
        inheritPrototype(null);
      });
    });

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
    spec.heading('trim(string)', function () {
      spec.example('Remove leading and trailing spaces from string', '(hello)', function () {
        return '(' + trim(' hello ') + ')';
      });
    });
    spec.heading('ltrim(string)', function () {
      spec.example('Remove leading spaces from string', '(hello )', function () {
        return '(' + ltrim(' hello ') + ')';
      });
    });
    spec.heading('rtrim(string)', function () {
      spec.example('Remove trailing spaces from string', '( hello)', function () {
        return '(' + rtrim(' hello ') + ')';
      });
    });
    spec.heading('left(string)', function () {
      spec.example('return left part of string', '123', function () {
        return left('12345',3);
      });
    });
    spec.heading('right(string)', function () {
      spec.example('return right part of string', '345', function () {
        return right('12345',3);
      });
    });
    spec.heading('center(string)', function () {
      spec.example('return center part of string', '234', function () {
        return center('12345',3);
      });
    });
    spec.heading('lpad(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on left.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('add leading asteriks', '********42', function () {
        return lpad('42', 10, '*');
      });
      spec.example('truncate when length is less than string length', 'ok', function () {
        return lpad('okay', 2);
      });
      spec.example('fillChar defaults to space', ': x:', function () {
        return ':' + lpad('x',2) + ':';
      });
    });
    spec.heading('rpad(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on right.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('Add trailing periods', 'etc...', function () {
        return rpad('etc', 6, '.');
      });
      spec.example('truncate when length is less than string length', 'sup', function () {
        return rpad('wassup', 3);
      });
      spec.example('fillChar defaults to space', ':x :', function () {
        return ':' + rpad('x',2) + ':';
      });
    });
    spec.heading('cpad(string, length, fillChar)', function () {
      spec.paragraph('Return string size length with fillChar padded on left and right.  ' +
      'fillChar is optional and defaults to space.');
      spec.example('center with periods', '...center....', function () {
        return cpad('center', 13, '.');
      });
      spec.example('truncate when length is less than string length', 'cd', function () {
        return cpad('abcdef', 2);
      });
      spec.example('fillChar defaults to space', ': x :', function () {
        return ':' + cpad('x',3) + ':';
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
