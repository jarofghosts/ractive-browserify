# ractive-browserify

[![Build Status](http://img.shields.io/travis/jarofghosts/ractive-browserify.svg?style=flat)](https://travis-ci.org/jarofghosts/ractive-browserify)
[![npm install](http://img.shields.io/npm/dm/ractive-browserify.svg?style=flat)](https://www.npmjs.org/package/ractive-browserify)

Browserify transform for Ractive

## usage

Use it as a browserify transform and require any file with `.ract` extension.
Alternatively, specify your own extension via the `extension` option:

```js
"transform": [
    ["ractive-browserify", {"extension": "html", "justTemplate": true}]
]
```

### options

* `extension` - A string specifying what file extension to parse. Defaults to
  `"ract"`
* `justTemplate` - A boolean that, if true, will only export the `template`
  property of the parsed file. Defaults to `false`.

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
