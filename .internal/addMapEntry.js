/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  // 需要注意，目前在ie11 中map.set方法的返回值不是这个被设置的map对象 无法进行链式调用
  map.set(pair[0], pair[1])
  return map
}

export default addMapEntry
