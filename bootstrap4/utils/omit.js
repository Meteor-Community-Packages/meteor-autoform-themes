export const omit = function (target, ...keys) {
  const tmp = Object.assign({}, target)
  keys.forEach(key => {
    delete tmp[key]
  })
  return tmp
}
