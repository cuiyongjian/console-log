var dir = function () {
  let newArgs = [].map.call(arguments, function (item) {
    if (typeof item === 'object') {
      item = JSON.parse(JSON.stringify(item))
      return item
    }
    else {
      return item
    }
  })
  console.dir.apply(null, newArgs)
}

module.exports = dir



