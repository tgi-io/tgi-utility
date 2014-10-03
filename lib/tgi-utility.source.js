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