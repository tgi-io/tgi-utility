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
    getInvalidProperties: getInvalidProperties,
    trim: trim,
    ltrim: ltrim,
    rtrim: rtrim,
    left: left,
    center: center,
    right: right,
    lpad: lpad,
    rpad: rpad,
    cpad: cpad,
    contains: contains,
    injectMethods: function (that) {
      that.inheritPrototype = inheritPrototype;
      that.getInvalidProperties = getInvalidProperties;
      that.trim = trim;
      that.ltrim = ltrim;
      that.rtrim = rtrim;
      that.left = left;
      that.center = center;
      that.right = right;
      that.lpad = lpad;
      that.rpad = rpad;
      that.cpad = cpad;
      that.contains = contains;
    }
  };
};
/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-objects.source.js
 */
/**
 * inheritPrototype(p) - inherit prototype p
 */
/* istanbul ignore next */
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
/**
 * getInvalidProperties(args, allowedProperties) - used in object creation to validate constructor properties
 */
var getInvalidProperties = function (args, allowedProperties) {
  var props = [];
  for (var property in args) {
    if (args.hasOwnProperty(property)) {
      if (!contains(allowedProperties, property)) {
        props.push(property);
      }
    }
  }
  return props;
};

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-arrays.source.js
 */
/**
 * contains(a, obj) returns true if obj is contained in array (a)
 */
var contains = function (a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) return true;
  }
  return false;
};

/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-strings.source.js
 */

/**
 * left(string, size) - left substring
 */
var left = function (string, size) {
  return string.substring(0, size);
};
/**
 * right(string, size) - right substring
 */
var right = function (string, size) {
  return string.substring(string.length - size, string.length);
};
/**
 * center(string, size) - center substring
 */
var center = function (string, size) {
  var start = (string.length - size)/2;
  return string.substring(start, start+size);
};
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
  return s.replace(/^\s+/, '');
};
/**
 * rtrim(s) - remove trailing spaces
 */
var rtrim = function (s) {
  return s.replace(/\s+$/, '');
};
/**
 * lpad(string, length, fillChar) - pad string left to length filling with fillChar
 */
var lpad = function (expr, length, fillChar) {
  fillChar = fillChar || ' ';
  var string = '' + expr;
  if (string.length > length) {
    return left(string, length);
  } else {
    while (string.length < length) {
      string = fillChar + string;
    }
  }
  return string;
};
/**
 * rpad(string, length, fillChar) - pad string right to length filling with fillChar
 */
var rpad = function (expr, length, fillChar) {
  fillChar = fillChar || ' ';
  var string = '' + expr;
  if (string.length > length) {
    return right(string, length);
  } else {
    while (string.length < length) {
      string = string + fillChar;
    }
  }
  return string;
};
/**
 * cpad(string, length, fillChar) - pad string right & left to length filling with fillChar
 */
var cpad = function (expr, length, fillChar) {
  fillChar = fillChar || ' ';
  var string = '' + expr;
  var totalPad = length - string.length;
  if (string.length > length) {
    return center(string, length);
  } else {
    //if (totalPad > 0) {
      var leftPad = string.length + Math.floor(totalPad / 2);
      string = lpad(string, leftPad, fillChar);
      string = rpad(string, length, fillChar);
    //}
  }
  return string;
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