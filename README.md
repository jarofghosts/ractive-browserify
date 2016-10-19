# ractive-browserify

[![Build Status](https://img.shields.io/travis/jarofghosts/ractive-browserify.svg?style=flat-square)](https://travis-ci.org/jarofghosts/ractive-browserify)
[![npm install](https://img.shields.io/npm/dm/ractive-browserify.svg?style=flat-square)](https://www.npmjs.org/package/ractive-browserify)
[![npm version](https://img.shields.io/npm/v/ractive-browserify.svg?style=flat-square)](https://www.npmjs.org/package/ractive-browserify)
[![License](https://img.shields.io/npm/l/ractive-browserify.svg?style=flat-square)](https://github.com/jarofghosts/ractive-browserify/blob/master/LICENSE)

Browserify transform for Ractive

## usage

Use it as a browserify transform and require any file with `.ract` extension.
Alternatively, specify your own extension via the `extension` option:

```js
"transform": [
    ["ractive-browserify", {"extension": "html"}]
]
```

### options

* `extension` - A string specifying what file extension to parse. Defaults to
  `"ract"`

#### notes

Previous versions supported a `justTemplate` option, but newer Ractive parsing
methods only output the template so it has been removed until otherwise
necessary/supported.

## why

The focus of `ractive-transform` is to keep releases up-to-date with Ractive,
ideally same-day. This is accomplished by keeping the code and tests simple,
requiring (in most cases) a simple version bump and re-publish. The idea
currently is to keep major and minor version numbers in-sync with Ractive in
order to make it easy to update alongside of it.

## other options

There are plenty of other options for Ractive Browserify transforms, check them
out if `ractive-browserify` doesn't tickle your fancy.

* [ractive-xform](http://npm.im/ractive-xform)
* [ractiveify](http://npm.im/ractiveify)
* [ractify](http://npm.im/ractify)
* [ractivate](http://npm.im/ractivate)

## license

MIT
