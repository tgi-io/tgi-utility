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