module.exports = castBoolean

function castBoolean(value) {
  if (value === undefined || value === '' || value === null) return null
  var falsey = [ false, 0, '0', 'false', 'off', 'no' ]
  return falsey.indexOf(value) === -1
}
