/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility.source.js
 */
var UTILITY = function () {
  return {
    inheritPrototype: inheritPrototype,
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