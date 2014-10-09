multikey-hash
=============
[![Build Status](https://travis-ci.org/esco/multikey-hash.svg?branch=master)](https://travis-ci.org/esco/multikey-hash) [![Coverage Status](https://coveralls.io/repos/esco/multikey-hash/badge.png)](https://coveralls.io/r/esco/multikey-hash) [![Code Climate](https://codeclimate.com/github/esco/multikey-hash/badges/gpa.svg)](https://codeclimate.com/github/esco/multikey-hash)

hash together multiple objects of any type*

>Arguments are serialized and then hashed together using the [MurmurHash3](http://en.wikipedia.org/wiki/MurmurHash) algorithm for efficient memory usage (small sized hashes), speed and random distribution.

```
npm install multikey-hash
```

## Examples

```js
var mkhash = require('multikey-hash');
mkhash(5, 'afuh08h3sfasfs40n340unfe0ruhn0unerf0u', function test(){console.log(test);});
// 3717699652 <-- generated hash
```

## FAQ

### What types of objects can be used as a key?

*Thanks to [toSource](https://github.com/marcello3d/node-tosource) the following types are supported

* Numbers
* Strings
* Array literals
* object literals
* function
* RegExp literals
* Dates
* true
* false
* undefined
* null
* NaN
* Infinity