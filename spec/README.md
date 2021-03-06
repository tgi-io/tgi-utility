#Utility Library
#### TGI UTILITY
Javascript Utility Functions.    

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
## [&#9664;](#-utility-library)&nbsp;[&#8984;](#table-of-contents)&nbsp;[&#9654;](#-array-functions) &nbsp;Spec Constructor Function
#### inheritPrototype(p)
kinda sorta class like    

&nbsp;<b><i>Cannot pass null:</i></b>
```javascript
this.shouldThrowError('*', function () {
  inheritPrototype(null);
});
```
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
#### getInvalidProperties(args,allowedProperties)
Functions that take an object as it's parameter use this to validate the properties of the parameter by returning any invalid properties    

&nbsp;<b><i>valid property:</i></b>
```javascript
// got Kahn and value backwards so Kahn is an unknown property
return getInvalidProperties({name: 'name', Kahn: 'value'}, ['name', 'value'])[0];
```
<blockquote>returns <strong>Kahn</strong> as expected
</blockquote>
&nbsp;<b><i>invalid property:</i></b>
```javascript
// no unknown properties
return getInvalidProperties({name: 'name', value: 'Kahn'}, ['name', 'value']).length;
```
## [&#9664;](#-spec-constructor-function)&nbsp;[&#8984;](#table-of-contents)&nbsp;[&#9654;](#-string-functions) &nbsp;Array Functions
#### ARRAY FUNCTIONS
#### contains(array,object)
This method returns true or false as to whether object is contained in array.    

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
## [&#9664;](#-array-functions)&nbsp;[&#8984;](#table-of-contents)&nbsp;[&#9654;](#-summary) &nbsp;String Functions
#### STRING FUNCTIONS
#### trim(string)
&nbsp;<b><i>Remove leading and trailing spaces from string:</i></b>
```javascript
return '(' + trim(' hello ') + ')';
```
<blockquote>returns <strong>(hello)</strong> as expected
</blockquote>
#### ltrim(string)
&nbsp;<b><i>Remove leading spaces from string:</i></b>
```javascript
return '(' + ltrim(' hello ') + ')';
```
<blockquote>returns <strong>(hello )</strong> as expected
</blockquote>
#### rtrim(string)
&nbsp;<b><i>Remove trailing spaces from string:</i></b>
```javascript
return '(' + rtrim(' hello ') + ')';
```
<blockquote>returns <strong>( hello)</strong> as expected
</blockquote>
#### left(string)
&nbsp;<b><i>return left part of string:</i></b>
```javascript
return left('12345',3);
```
<blockquote>returns <strong>123</strong> as expected
</blockquote>
#### right(string)
&nbsp;<b><i>return right part of string:</i></b>
```javascript
return right('12345',3);
```
<blockquote>returns <strong>345</strong> as expected
</blockquote>
#### center(string)
&nbsp;<b><i>return center part of string:</i></b>
```javascript
return center('12345',3);
```
<blockquote>returns <strong>234</strong> as expected
</blockquote>
#### lpad(string, length, fillChar)
Return string size length with fillChar padded on left.  fillChar is optional and defaults to space.    

&nbsp;<b><i>add leading asteriks:</i></b>
```javascript
return lpad('42', 10, '*');
```
<blockquote>returns <strong>********42</strong> as expected
</blockquote>
&nbsp;<b><i>truncate when length is less than string length:</i></b>
```javascript
return lpad('okay', 2);
```
<blockquote>returns <strong>ok</strong> as expected
</blockquote>
&nbsp;<b><i>fillChar defaults to space:</i></b>
```javascript
return ':' + lpad('x',2) + ':';
```
<blockquote>returns <strong>: x:</strong> as expected
</blockquote>
#### rpad(string, length, fillChar)
Return string size length with fillChar padded on right.  fillChar is optional and defaults to space.    

&nbsp;<b><i>Add trailing periods:</i></b>
```javascript
return rpad('etc', 6, '.');
```
<blockquote>returns <strong>etc...</strong> as expected
</blockquote>
&nbsp;<b><i>truncate when length is less than string length:</i></b>
```javascript
return rpad('wassup', 3);
```
<blockquote>returns <strong>sup</strong> as expected
</blockquote>
&nbsp;<b><i>fillChar defaults to space:</i></b>
```javascript
return ':' + rpad('x',2) + ':';
```
<blockquote>returns <strong>:x :</strong> as expected
</blockquote>
#### cpad(string, length, fillChar)
Return string size length with fillChar padded on left and right.  fillChar is optional and defaults to space.    

&nbsp;<b><i>center with periods:</i></b>
```javascript
return cpad('center', 13, '.');
```
<blockquote>returns <strong>...center....</strong> as expected
</blockquote>
&nbsp;<b><i>truncate when length is less than string length:</i></b>
```javascript
return cpad('abcdef', 2);
```
<blockquote>returns <strong>cd</strong> as expected
</blockquote>
&nbsp;<b><i>fillChar defaults to space:</i></b>
```javascript
return ':' + cpad('x',3) + ':';
```
<blockquote>returns <strong>: x :</strong> as expected
</blockquote>
## [&#9664;](#-string-functions)&nbsp;[&#8984;](#table-of-contents) &nbsp;Summary