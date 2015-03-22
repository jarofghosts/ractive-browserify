var path = require('path')

var concat = require('concat-stream')
  , duplex = require('duplexify')
  , through = require('through2')
  , ractive = require('ractive')
  , extend = require('xtend')
  , rcu = require('rcu')

var makeOutput = require('./lib/make-output')

rcu.init(ractive)

module.exports = transform

function transform(file, _opts) {
  var opts = extend({extension: 'ract'}, _opts)
  var output = through()

  if(path.extname(file).slice(1) !== opts.extension) {
    return output
  }

  return duplex(concat(parseTemplate), output)

  function parseTemplate(buf) {
    var component

    try {
      component = rcu.parse(buf.toString())
    } catch(err) {
      return output.emit('error', err)
    }

    output.push(makeOutput(opts.justTemplate ? component.template : component))
    output.push(null)
  }
}
