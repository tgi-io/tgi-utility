/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/lib-header
 **/
(function () {
"use strict";
var root = this;
/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility.source.js
 */
var UTILITY = function () {
  return {
    inheritPrototype: inheritPrototype,
    trim: trim,
    ltrim: ltrim,
    rtrim: rtrim,
    injectMethods: function (that) {
      that.inheritPrototype = inheritPrototype;
      that.trim = trim;
      that.ltrim = ltrim;
      that.rtrim = rtrim;
    }
  };
};
/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-inherit-prototype.source.js
 */
var inheritPrototype = function (p) {
  if (p === null) throw new TypeError();
  if (Object.create) return Object.create(p);
  var t = typeof p;
  if (t !== "object" && typeof t !== "function") throw new TypeError();
  function F() {
  }
  F.prototype = p;
  return new F();
};

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-strings.source.js
 */
/**
 * trim(s) - remove trailing and leading spaces
 */
var trim = function (s) {
  return s.replace(/^\s+|\s+$/g, '');
};
/**
 * ltrim(s) - remove leading spaces
 */
var ltrim = function (s) {
  return s.replace(/^\s+/,'');
};
/**
 * rtrim(s) - remove trailing spaces
 */
var rtrim = function (s) {
  return s.replace(/\s+$/,'');
};

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/packaging/lib-footer
 **/
  /* istanbul ignore next */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = UTILITY;
    }
    exports.UTILITY = UTILITY;
  } else {
    root.UTILITY = UTILITY;
  }
}).call(this);