var util = require('util')

var ractive = require('ractive')
var test = require('tape')

var makeOutput = require('../lib/make-output')
var transform = require('../')

test('if filename extension not .ract, pass through', function (t) {
  t.plan(1)

  var stream = transform('filename.xlsx')

  stream.on('data', function (data) {
    t.equal(data.toString(), 'oh, {{hi}}!')
    t.end()
  })

  stream.write('oh, {{hi}}!')
  stream.end()
})

test('if extension is .ract, parse it', function (t) {
  t.plan(1)

  var stream = transform('filename.ract')
  var template = 'oh, {{hi}}!'

  stream.on('data', function (data) {
    t.equal(data.toString(), makeOutput(ractive.parse(template)))
    t.end()
  })

  stream.write(template)
  stream.end()
})

test('extension is configurable', function (t) {
  t.plan(1)

  var stream = transform('filename.xlsx', {extension: 'xlsx'})
  var template = 'oh, {{hi}}!'

  stream.on('data', function (data) {
    t.equal(data.toString(), makeOutput(ractive.parse(template)))
    t.end()
  })

  stream.write(template)
  stream.end()
})

test('emits error for parse error with filename', function (t) {
  t.plan(2)

  var stream = transform('filename.ract')
  var template = 'oh, {{#if}}herp!'

  stream.on('error', function (err) {
    t.ok(/^filename\.ract/.test(err.message))
    t.ok(err)
  })

  stream.write(template)
  stream.end()
})

test('makeOutput outputs valid JS', function (t) {
  t.plan(1)

  t.equal(
      makeOutput({a: 'b'})
    , util.format('module.exports = %s', JSON.stringify({a: 'b'}, null, 2))
  )

  t.end()
})
