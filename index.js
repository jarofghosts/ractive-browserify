var path = require('path')

var concat = require('concat-stream')
var duplex = require('duplexify')
var through = require('through2')
var ractive = require('ractive')
var extend = require('xtend')

var makeOutput = require('./lib/make-output')

module.exports = transform

function transform (file, _opts) {
  var opts = extend({extension: 'ract'}, _opts)
  var output = through()

  if (path.extname(file).slice(1) !== opts.extension) {
    return output
  }

  return duplex(concat(parseTemplate), output)

  function parseTemplate (buf) {
    var component

    try {
      component = ractive.parse(buf.toString())
    } catch (err) {
      err.message = file + '\n' + err.message

      return output.emit('error', err)
    }

    output.push(makeOutput(component))
    output.push(null)
  }
}
