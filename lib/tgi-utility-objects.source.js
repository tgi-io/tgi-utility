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
