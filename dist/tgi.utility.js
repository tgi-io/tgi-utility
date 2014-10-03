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
    injectMethods: function(that){
      that.inheritPrototype = inheritPrototype;
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