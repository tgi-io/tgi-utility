/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-inherit-prototype.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-inherit-prototype.test.js', 'Spec Constructor Function', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-inherit-prototype.test.js'});
  var test = spec;
  test.heading('inheritPrototype(p)', function () {
    test.paragraph('kinda sorta class like');
    test.example('quack like a duck', 'quack', function () {
      // Duck class
      var Duck = function () {
      };
      // Duck method
      Duck.prototype.sound = function () {
        return 'quack';
      };
      // Mallard class
      var Mallard = function () {
      };
      // Mallard inherits Duck prototype
      // Mallard.prototype = UTILITY().inheritPrototype(Duck.prototype);
      Mallard.prototype = inheritPrototype(Duck.prototype);
      // Create instance
      var daffy = new Mallard();

      // Instance of constructor & the inherited prototype's class fir daffy
      this.shouldBeTrue(daffy instanceof Mallard);
      this.shouldBeTrue(daffy instanceof Duck);

      // What sound does daffy make?
      return daffy.sound();
    });
  });
});
