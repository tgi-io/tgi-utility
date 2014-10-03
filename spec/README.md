#### TGI UTILITY
<p>Javascript Utility Functions.</p>
#### inheritPrototype(p)
<p>kinda sorta class like</p>
&nbsp;<b><i>quack like a duck:</i></b>
```javascript
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
```
<blockquote>returns <strong>quack</strong> as expected
</blockquote>
#### shizzle
<p>my nizzle</p>
&nbsp;<b><i>shizzle my:</i></b>
```javascript
return 'nizzle';
```
<blockquote>returns <strong>nizzle</strong> as expected
</blockquote>