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
#### ARRAY FUNCTIONS
#### contains(array,object)
<p>This method returns true or false as to whether object is contained in array.</p>
&nbsp;<b><i>object exists in array:</i></b>
```javascript
return contains(['moe', 'larry', 'curley'], 'larry');
```
<blockquote>returns <strong>true</strong> as expected
</blockquote>
&nbsp;<b><i>object does not exist in array:</i></b>
```javascript
return contains(['moe', 'larry', 'curley'], 'shemp');
```
<blockquote></blockquote>
#### STRING FUNCTIONS
#### trim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return '(' + trim(' hello ') + ')';
```
<blockquote>returns <strong>(hello)</strong> as expected
</blockquote>
#### ltrim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return '(' + ltrim(' hello ') + ')';
```
<blockquote>returns <strong>(hello )</strong> as expected
</blockquote>
#### rtrim(s)
<p>Remove leading and trailing spaces from string.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return '(' + rtrim(' hello ') + ')';
```
<blockquote>returns <strong>( hello)</strong> as expected
</blockquote>
#### padl(string, length, fillChar)
<p>Return string size length with fillChar padded on left.  fillChar is optional and defaults to space.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return padl('42', 10, '*');
```
<blockquote>returns <strong>********42</strong> as expected
</blockquote>
#### padr(string, length, fillChar)
<p>Return string size length with fillChar padded on right.  fillChar is optional and defaults to space.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return padr('etc', 6, '.');
```
<blockquote>returns <strong>etc...</strong> as expected
</blockquote>
#### padc(string, length, fillChar)
<p>Return string size length with fillChar padded on left and right.  fillChar is optional and defaults to space.</p>
&nbsp;<b><i>Example:</i></b>
```javascript
return padc('center', 13, '.');
```
<blockquote>returns <strong>...center....</strong> as expected
</blockquote>