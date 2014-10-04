/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-objects.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-objects.test.js', 'Spec Constructor Function', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-objects.test.js'});
  spec.heading('inheritPrototype(p)', function () {
    spec.paragraph('kinda sorta class like');
    spec.example('quack like a duck', 'quack', function () {
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
