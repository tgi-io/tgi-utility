#### TGI SPEC
<p>Javascript test and spec documentation framework.</p>
#### FUNCTIONS
#### inheritPrototype(p)
<p>kinda sorta class like</p>
&nbsp;<b><i>quick like a duck:</i></b>
```javascript
var Duck = function () {
};
Duck.prototype.sound = function () {
  return 'quack';
};
var Daffy = function () {
};
Daffy.prototype = UTILITY().inheritPrototype(Duck.prototype);
return new Daffy().sound();
```
<blockquote>returns <strong>quack</strong> as expected
</blockquote>