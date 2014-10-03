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