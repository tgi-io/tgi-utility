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