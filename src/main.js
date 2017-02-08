import dir from './dir'

/* log函数还是用console对象的，dir函数重写了 */
var log = {
  log: console.log,
  dir: dir
}

module.exports = log
