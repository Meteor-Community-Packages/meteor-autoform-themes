export const pick = function pick (object = {}, keys = []) {
  const obj = {}
  Object.keys(object).forEach(key => {
    if (keys.includes(key)) {
      obj[key] = object[key]
    }
  })
  return obj
}
