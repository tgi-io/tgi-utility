#### TGI UTILITY
<p>Javascript Utility Functions.</p>
&nbsp;<b><i>UTILITY function exposes library:</i></b>
```javascript
return typeof UTILITY;
```
<blockquote>returns <strong>function</strong> as expected
</blockquote>
&nbsp;<b><i>functions are available in closure:</i></b>
```javascript
return UTILITY().inheritPrototype === inheritPrototype;
```
<blockquote>returns <strong>true</strong> as expected
</blockquote>
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
#### STRING FUNCTIONS
#### trim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return trim(' hello ');
```
<blockquote>returns <strong>hello</strong> as expected
</blockquote>
#### ltrim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return ltrim(' hello ');
```
<blockquote>returns <strong>hello </strong> as expected
</blockquote>
#### rtrim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return rtrim(' hello ');
```
<blockquote>returns <strong> hello</strong> as expected
</blockquote>