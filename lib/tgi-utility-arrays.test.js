/**---------------------------------------------------------------------------------------------------------------------
 * tgi-utility/lib/tgi-utility-arrays.test.js
 */
spec.test('tgi-utility/lib/tgi-utility-arrays.test.js', 'Array Functions', function (callback) {
  callback({log: 'tgi-utility/lib/tgi-utility-arrays.test.js'});
  spec.heading('ARRAY FUNCTIONS', function () {
    spec.heading('contains(array,object)', function () {
      spec.paragraph('This method returns true or false as to whether object is contained in array.');
      spec.example('object exists in array', true, function () {
        return contains(['moe', 'larry', 'curley'], 'larry');
      });
      spec.example('object does not exist in array', false, function () {
        return contains(['moe', 'larry', 'curley'], 'shemp');
      });
    });
  });
});
