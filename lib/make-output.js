var util = require('util')

module.exports = makeOutput

function makeOutput(obj) {
  return util.format('module.exports = %s', JSON.stringify(obj, null, 2))
}
