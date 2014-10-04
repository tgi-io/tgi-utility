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
    padl: padl,
    padr: padr,
    padc: padc,
    contains: contains,
    injectMethods: function (that) {
      that.inheritPrototype = inheritPrototype;
      that.trim = trim;
      that.ltrim = ltrim;
      that.rtrim = rtrim;
      that.padl = padl;
      that.padr = padr;
      that.padc = padc;
      that.contains = contains;
    }
  };
};
/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-objects.source.js
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
 * padl(string, length, fillChar) - pad string left to length filling with fillChar
 */
var padl = function (expr, length, fillChar) {
  var string = '' + expr;
  while (string.length < length) {
    string = fillChar + string;
  }
  return string;
};
/**
 * padr(string, length, fillChar) - pad string right to length filling with fillChar
 */
var padr = function (expr, length, fillChar) {
  var string = '' + expr;
  while (string.length < length) {
    string = string + fillChar;
  }
  return string;
};
/**
 * padc(string, length, fillChar) - pad string right & left to length filling with fillChar
 */
var padc = function (expr, length, fillChar) {
  var string = '' + expr;
  var totalPad = length - string.length;
  if (totalPad > 0) {
    var leftPad = string.length + Math.floor(totalPad / 2);
    string = padl(string, leftPad, fillChar);
    string = padr(string, length, fillChar);
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